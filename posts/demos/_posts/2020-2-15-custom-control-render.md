---
layout: demoV4
title: Custom controls, render and actions
codepen: true
---
This demo show how to start using the custom controls api.
This first example show how to write a custom render method for your control and how to define a custom action to run on the control mouseup.
The new api offers the ability to run custom actions on:
- mousedown
- mouseup
- mousemove

And to run custom code for
- positioning
- rendering
- cursor style

### Creating the control

We create a new control and we add it to the object.
To create a control we use `new fabric.Control(options)`
In this case we want the corner to be near the top right classic control, so we give it a position of x of 0.5 that is the extreme right of the bounding box of the object.
Same for y at -0.5. We do not want it to overlap with the current top right corner, so we add an `offsetY` with a positive number that will make it render a bit more down.

We want our control to render an icon rather than a fabric supported circle or square.
So we have to provide our own render function to the control.
The function is receiving the canvas context as first argument and so a simple drawImage will make it.

For the custom action we want simply to delete the object.
We build a function following the mouseUpHandler signature and we use there `canvas.remove(target)`;

<div
  class="codepen-later"
  data-editable="true"
  data-height="500"
  data-default-tab="js,result"
  data-prefill='{
    "scripts": "https://unpkg.com/fabric@4.0.0-beta.7/dist/fabric.js"
  }'
>
<pre data-lang="css" data-options-autoprefixer="true">
  .controls {
  	display: inline-block;
  }
</pre>
<pre data-lang="html">
  <div class="controls">
    <p>
      <button id="add" onclick="Add()">Add a rectangle</button>
    </p>
  </div>
  <canvas id="c" width="400" height="300" style="border:1px solid #ccc"></canvas>
</pre>
<pre data-lang="js">
	var canvas = this.__canvas = new fabric.Canvas('c');
	// create a rect object
  var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

  var img = document.createElement('img');
  img.src = deleteIcon;

  function Add() {
    var rect = new fabric.Rect({
      left: 100,
      top: 50,
      fill: 'yellow',
      width: 200,
      height: 100,
      objectCaching: false,
      transparentCorners: false,
      cornerColor: 'blue',
      stroke: 'lightgreen',
      strokeWidth: 4,
      cornerStyle: 'circle'
    });

    canvas.add(rect);
    canvas.setActiveObject(rect);
  }

  fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    position: { x: 0.5, y: -0.5 },
    offsetY: 10,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,
    render: renderIcon,
    cornerSize: 24
  });

  Add();

  function deleteObject(eventData, target) {
		var canvas = target.canvas;
		    canvas.remove(target);
        canvas.requestRenderAll();
	}

  function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    if (!this.getVisibility(fabricObject)) {
      return;
    }
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -size/2, -size/2, size, size);
    ctx.restore();
  }
</pre>
</div>
