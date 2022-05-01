---
layout: demoV4
title: Custom controls, polygon
codepen: true
---
This demo shows how to use the controls api to modify the shape of a polygon.

This may be difficult to grasp because it requires understanding internal polygon logic,
along with anchor points and transformations.

In this demo, we've applied both zoom and translation to the canvas in order to be sure the code is generic enough for many applications.
The polygon is given a large strokeWidth for the same reason.

We have a function that triggers the `edit mode`.
When we enter edit mode, we create one new control for each polygon point.
To each control we attach a property called `pointIndex` to remember which point the control is bound to.

These controls use their own custom position handler: `polygonPositionHandler`. This function
looks at the pointIndex of the control and returns the current canvas position for that particular point.
In this way interaction and rendering are performed.

In order for each control to modify its associated point, we need to write a custom action handler.

Changing a point position is actually easy:
`fabricObject.points[index].x = number; fabricObject.points[index].y = number;`
The difficult part is making sure that the object remains in the correct position while the dimensions are changed.

To do this we need an anchor point. We choose to fix the polygon position to the actual position of any point in the points array that is not the one being dragged.

Having chosen the point, we calculate its actual absolute position:
```
var absolutePoint = fabric.util.transformPoint({
    x: (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x),
    y: (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y),
}, fabricObject.calcTransformMatrix());
```
We will use this absolute position after we have modified the polygon.

We then swap the dragged point with the new one, and recalculate the width, height, and pathOffset of the polygon (basically reinitializing its dimensions).

Now to keep its position steady, we want to know the point that represents the anchor point, and in what position it is now relative to the polygon's size.

```
var newX = (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x) / fabricObject.width,
    newY = (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y) / fabricObject.height;
```
The newX and newY variables now represent the point position with a range from -0.5 to 0.5 for X and Y.
Fabric supports numeric origins for objects with a range from 0 to 1. This let us use the relative position as an origin to translate the old absolutePoint we found before.

```
fabricObject.setPositionByOrigin(absolutePoint, newX + 0.5, newY + 0.5);
```


### Creating an editable polygon

<div
  class="codepen-later"
  data-editable="true"
  data-height="600"
  data-default-tab="result"
>
<pre data-lang="css" data-options-autoprefixer="true">
  .controls {
  	display: inline-block;
  }
</pre>

<pre data-lang="html">
  <div class="controls">
    <p>
      <button id="edit" onclick="Edit()">Toggle editing polygon</button>
    </p>
  </div>
  <canvas id="c" width="500" height="400" style="border:1px solid #ccc"></canvas>
</pre>
<pre data-lang="js">
	var canvas = this.__canvas = new fabric.Canvas('c');
	// create a polygon object
	var points = [{
		x: 3, y: 4
	}, {
		x: 16, y: 3
	}, {
		x: 30, y: 5
	},  {
		x: 25, y: 55
	}, {
		x: 19, y: 44
	}, {
		x: 15, y: 30
	}, {
		x: 15, y: 55
	}, {
		x: 9, y: 55
	}, {
		x: 6, y: 53
	}, {
		x: -2, y: 55
	}, {
		x: -4, y: 40
	}, {
		x: 0, y: 20
	}]
	var polygon = new fabric.Polygon(points, {
		left: 100,
		top: 50,
		fill: '#D81B60',
		strokeWidth: 4,
    stroke: 'green',
		scaleX: 4,
		scaleY: 4,
		objectCaching: false,
		transparentCorners: false,
		cornerColor: 'blue',
	});
  canvas.viewportTransform = [0.7, 0, 0, 0.7, -50, 50];
	canvas.add(polygon);

	// define a function that can locate the controls.
	// this function will be used both for drawing and for interaction.
	function polygonPositionHandler(dim, finalMatrix, fabricObject) {
	  var x = (fabricObject.points[this.pointIndex].x - fabricObject.pathOffset.x),
		    y = (fabricObject.points[this.pointIndex].y - fabricObject.pathOffset.y);
		return fabric.util.transformPoint(
			{ x: x, y: y },
      fabric.util.multiplyTransformMatrices(
        fabricObject.canvas.viewportTransform,
        fabricObject.calcTransformMatrix()
      )
		);
	}

	function getObjectSizeWithStroke(object) {
		var stroke = new fabric.Point(
			object.strokeUniform ? 1 / object.scaleX : 1, 
			object.strokeUniform ? 1 / object.scaleY : 1
		).multiply(object.strokeWidth);
		return new fabric.Point(object.width + stroke.x, object.height + stroke.y);
	}

	// define a function that will define what the control does
	// this function will be called on every mouse move after a control has been
	// clicked and is being dragged.
	// The function receive as argument the mouse event, the current trasnform object
	// and the current position in canvas coordinate
	// transform.target is a reference to the current object being transformed,
	function actionHandler(eventData, transform, x, y) {
		var polygon = transform.target,
		    currentControl = polygon.controls[polygon.__corner],
		    mouseLocalPosition = polygon.toLocalPoint(new fabric.Point(x, y), 'center', 'center'),
        polygonBaseSize = getObjectSizeWithStroke(polygon),
				size = polygon._getTransformedDimensions(0, 0),
				finalPointPosition = {
					x: mouseLocalPosition.x * polygonBaseSize.x / size.x + polygon.pathOffset.x,
					y: mouseLocalPosition.y * polygonBaseSize.y / size.y + polygon.pathOffset.y
				};
		polygon.points[currentControl.pointIndex] = finalPointPosition;
		return true;
	}

  // define a function that can keep the polygon in the same position when we change its
  // width/height/top/left.
  function anchorWrapper(anchorIndex, fn) {
    return function(eventData, transform, x, y) {
      var fabricObject = transform.target,
          absolutePoint = fabric.util.transformPoint({
              x: (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x),
              y: (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y),
          }, fabricObject.calcTransformMatrix()),
          actionPerformed = fn(eventData, transform, x, y),
          newDim = fabricObject._setPositionDimensions({}),
          polygonBaseSize = getObjectSizeWithStroke(fabricObject),
          newX = (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x) / polygonBaseSize.x,
  		    newY = (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y) / polygonBaseSize.y;
      fabricObject.setPositionByOrigin(absolutePoint, newX + 0.5, newY + 0.5);
      return actionPerformed;
    }
  }

	function Edit() {
		// clone what are you copying since you
		// may want copy and paste on different moment.
		// and you do not want the changes happened
		// later to reflect on the copy.
		var poly = canvas.getObjects()[0];
		canvas.setActiveObject(poly);
		poly.edit = !poly.edit;
		if (poly.edit) {
      var lastControl = poly.points.length - 1;
      poly.cornerStyle = 'circle';
      poly.cornerColor = 'rgba(0,0,255,0.5)';
	    poly.controls = poly.points.reduce(function(acc, point, index) {
				acc['p' + index] = new fabric.Control({
					positionHandler: polygonPositionHandler,
					actionHandler: anchorWrapper(index > 0 ? index - 1 : lastControl, actionHandler),
					actionName: 'modifyPolygon',
					pointIndex: index
				});
				return acc;
			}, { });
		} else {
      poly.cornerColor = 'blue';
      poly.cornerStyle = 'rect';
			poly.controls = fabric.Object.prototype.controls;
		}
		poly.hasBorders = !poly.edit;
		canvas.requestRenderAll();
	}
</pre>
</div>
