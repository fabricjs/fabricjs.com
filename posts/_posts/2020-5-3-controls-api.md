---
layout: demoV4
title: Custom controls api
codepen: true
---
# Custom controls api

This api is for fabricJS 4.0, the api and the text is currently in beta. Some little change could happen before release, in order to keep naming and options as simple as possible.

## Introduction

This api lets the developer create its own custom controls without having to use overrides on standard fabricJS controls method. This makes customizaion supported, easy and makes update to the latest version always possible.

FabricJS uses the api internally to define the standard controls set with the same feature and customization that was possible in version 3 and below.

### How does it work.

Now fabric.Object prototype has a control set, and a control set is simply a plain js object that has a set of keys, for each key the value is a `fabric.Control` class. For simplicity in the standard control set the keys are keeping the old names `tl`, `mt`, `tr`, `mr`, `br`, `mb`, `bl`, `ml` and `mtr`.

The difference is that the code that draws the controls does not know anything anymore about the  controls, but will loop over the keys of this controlset and draw each control.

By default all fabricJS objects share the same controls set, exception made for the textbox that has different controls that make possible changing the width rather than scaling.

Nothing stops you from creating a different controls set for each subClass, or having the same control set everywhere and make controls visible/hidden depending on the object that is currently rendering.

### Structure of a control

A control is a collection of a positioning function, rendering function, style function, visibility function, an actionHandler and a bunch of other properties, called and used in the right order from fabricJS.
Some of properties are optional and depends on the implementation of the control.

Let's see how fabricJS controls are defined in the library itself, let's take for example the control `mr` of the standard object:

```js
objectControls.mr = new fabric.Control({
  name: 'mr',
  position: { x: 0.5, y: 0 },
  cursorStyleHandler: scaleSkewStyleHandler,
  actionHandler: scalingXOrSkewingY,
  getActionName: scaleOrSkewActionName,
});
```

The control is completely configurable, either providing handlers or providing values for the default handlers.

Default controls are defined here: [standard controls definition](https://github.com/fabricjs/fabric.js/blob/master/src/mixins/default_controls.js).

#### visible and getVisibility

Before FabricJS 4.0 controls could be set as non visible, to be ignored.
Now controls can either exist, non exist, but also be temporary invsisible depending on object status.

The default `getVisibility` function of the control will either return the standard object `_controlsVisibility` property that has been mantained for compatibility reason, or in case that is not set will return the control `.visible` value.

Controls are generally shared among instances, so setting a control to `.visible = false` will hide it for all the objects, while using the object methods for controls visibility will hide on a per object basis.

#### actioname and getActionName

The property actionName gives the name of the action that the controll will likely execute.
This is optional, FabricJS uses to identify what the user is doing for some extra optimizations. If you are writing a custom control and you want to know somewhere else in the code what is going on, you can use this string here.

You can also provide a custom getActionName if your control run multiple actions depending on some external state.

For example the old `mr` control can be used for 2 actions, `scale` or `skew` and the outcome is dependent from the modifier keys.

#### angle

Angle is not used from the standard fabricJS functions, is here as an option in case you need a control that has a direction, and you want to reuse your drawing function for different orientations, write it so that it can look up the control angle.


#### position

position is used by the default positionHandler, that is good for most of the controls placed on the object bounding box. The value of `x` and `y` represent the size of the bounding box, including padding.

Those values range from -0.5 to 0.5 for the full bounding box, but can extend further if you need to postion them far away. `{x: 0.5, y: 0}` will align the control in the vertical center, on the right side of the bounding box.

#### offsetX and offsetY

offsetX and offsetY let you offset the control position in screen pixels.
A typical example is the standard rotation control, that is offseted from the bounding box by about 30px.
Offsets are in place of the `rotatingPointOffset` of fabric 3.x and can now be applied to all controls.

#### withConnection

A boolean that indicates if the control, in case of offsets, is connected to the bounding box with a line to position point. Is just a graphic option and has no functionality.

#### cursorStyle and cursorStyleHandler

cursorStyleHandler is a function that is responsible for the cursor displayed when the mouse is hovering over the control.

This particular function needs to show either a not-allowed cursor, or an aligned one for skew or scale.
The function needs to return a valid cursor for the browser you can use.
Inline url encoded SVG are a possibility too.

```js
function scaleSkewStyleHandler(eventData, corner, fabricObject) {
  if (eventData[fabricObject.canvas.altActionKey]) {
    return controls.skewCursorStyleHandler(eventData, corner, fabricObject);
  }
  return controls.scaleCursorStyleHandler(eventData, corner, fabricObject);
}
```

The function gets the mouse event data, so it can determin if some combiner key is pressed, and run the logic specific for one action or the other.
`skewCursorStyleHandler` or `scaleCursorStyleHandler` will then take care of the specifi logic for one action or the other.
All the style handling for the existing fabricJS functionalities are written and do serve as an example in case you need to write a different cursor logic.

If your custom control shows always the same cursor, you can just keep the default handler and change control by control the property `cursorStyle`.

#### mouseUpHandler and mouseDownHandler

You can use controls as once time click buttons if you want, instead of connecting them to drag action with the mouse.
A classic example is the control to delete an object or to clone it, as described better in this example here: [custom control render and action](/custom-control-render).
Or another possible one is flipping an object.

#### actionHandler

This function, definitely the most complicated to master, allow you write your custom actions.
We can look at the simple width changer function:

```js
function changeWidth(eventData, transform, x, y) {
  var target = transform.target, localPoint = getLocalPoint(transform, transform.originX, transform.originY, x, y),
      strokePadding = target.strokeWidth / (target.strokeUniform ? target.scaleX : 1),
      newWidth = Math.abs(localPoint.x / target.scaleX) - strokePadding;
  target.set('width', Math.max(newWidth, 0));
  return true;
}
```
arguments:
`eventData` is the mouse event object
`transform` is a plain js object that contains `transform.target` the object we are transforming
`x` and `y` represent the distance in pixel from the anchor point of the transformation.

This function handles the side controls of the textbox, but can be also used on rects as it is, and creating another one to change the height is a simple as swapping the width related properties with they height related ones.

Another easy extension is to make it change the rx,ry of an ellipse or the radius of a circle.

Moving into scaling and skewing the calculations are way more complex.
