---
layout: demoV4
title: Custom controls api
codepen: true
---
# Custom controls api

## Introduction

This api lets the developer create its own custom controls without having to use overrides on standard fabricJS controls method. This makes customizaion supported, easy and makes update to the latest version always possible.

FabricJS uses the api internally to define the standard controls set with the same feature and customization that was possible in version 3 and below.

### How does it work.

Now every object has a control set, and a control set is simply a plan js object that has a set of keys, for each key the value is a `fabric.Control` class. For simplicity in the standard control set the keys are keeping the old names `tl`, `mt`, `tr`, `mr`, `br`, `mb`, `bl`, `ml` and `mtr`.

The difference is that the code that draws the controls does not know anything anymore about the specific controls, but will loop over the keys of this controlset  and draw each control.

### Anotomy of a control

A control is a collection of a positioning function, rendering function, style function, visibility function and an action, called in a coordinate way.
All the other properties are optional and depends on the implementation of the former.

Let's see how fabricJS controls are defined in the library itself, let's take for example the control `mr`:

```js
objectControls.mr = new fabric.Control({
  name: 'mr',
  position: { x: 0.5, y: 0 },
  cursorStyleHandler: scaleSkewStyleHandler,
  actionHandler: scalingXOrSkewingY,
  getActionName: scaleOrSkewActionName,
});
```
