---
layout: articleadmd
title: Fabric.js objects
---
## Version 4 breaking changes

`Canvas.uniScaleTransform` has been removed, `Canvas.uniformScaling` has been added.
The property was bad named, and was unclear what it was doing.
If `uniformScaling` is true, objects get scaled proportionally, if uniscaleKey is pressed, the behaviour get swapped. From true to false or from false to true. `Canvas.uniscaleKey` is the key that swap the value of `Canvas.uniformScaling`.

`Object.lockUniScaling` has been removed. It was unclear how it should have been interacted with the old `Canvas.uniformScaling` and the `uniscaleKey`.

The function `Canvas.onBeforeScaleRotate` has been removed. Please subscribe to `Canvas.on('before:transform')` and move your code in the callback.

`Object.setShadow` and `BaseBrush.setShadow` have been removed. Please use:
```javascript
// before
Object.setShadow(options);

// after
Object.set('shadow', new fabric.Shadow(options));
// or
Object.shadow = new fabric.Shadow(options);
```

Similarly `Object.setGradient` has been removed. Please use:

```javascript
// before
Object.setGradient(options);

// after
Object.set('fill', new fabric.Gradient(otherOptions));
Object.set('stroke', new fabric.Gradient(otherOptions));

// or
Object.fill = new fabric.Gradient(otherOptions));
Object.stroke = new fabric.Gradient(otherOptions));
```

The options format is slightly different, but since the introduction of percentage values for gradients,
writing a gradient for an object is easier and does not make sense to mantain examples and code for 2 different way of doing the exact same thing.

With the exact same logic those methods have been removed:
`Object.setPatternFill` changes to  `Object.set('fill', new fabric.Pattern(options))`;
`Object.setColor` changes to `Object.set('fill', color)`;


`Object.transformMatrix` was deprecated since version 2, the rendering of it was kept till now. Now is completely ignored.

Removed `object:selected` event. use `selection:created`. In the callback you will still find  `target` in the options, but also you will find `selected` with all the objects selected during that single event.


`Gradient.forObject` has been removed. The new Gradient with relative coordinates that has been introduced in version 3 makes this method not useful anymore.


`Object.clipTo` and `Canvas.clipTo` have been removed. While clipTo was a notch faster than clipPath, and sharper, it was hard to serialize and also nested clipTo are not possible at all. ClipPath can be still improved and make sharper.

`Canvas.loadFromDatalessJSON` has been removed. It was just an alias for `loadFromJSON`.

In the observabile mixin `observe`, `stopObserving`, `trigger` are removed. Keep using `on`, `off`, `fire`. Those are shorter and also all our documentation refer to this kind of names.

Removed the ability for `Object.set` to take a function as a value. Was rather unusual and non standard.

Removed `fabric.util.customTransformMatrix` Use the replacement `fabric.util.composeMatrix`

Removed 2 utils member that was not used anywhere: `fabric.util.getScript` and `fabric.util.getElementStyle`

Removed private member `Canvas._setImageSmoothing`. Added `fabric.util.setImageSmoothing(ctx, value)` to replace it, now it is used from `fabric.Canvas` and `fabric.Image`, but still considered private, not useful for the developer.

Removed  `Image.setCrossOrigin`. Having the property `crossOrigin` on the `fabric.Image` class was misleading and error prone. `crossOrigin` is for loading/reloading of resources on images, and is mandatory to specify it each load.
