---
layout: articleadmd
title: Fabric.js objects
---

## Fabric.js objects type and hierarchy

### Objects types

Fabric.js offers a series of Objects out of the box:

- Canvas is the main container of your Fabric.js app:
  - [fabric.StaticCanvas](/docs/fabric.StaticCanvas.html): the plain basic canvas
  - [fabric.Canvas](/docs/fabric.Canvas.html): the previous canvas, but with an interactive layer
- Shapes are objects, items that you can add in your canvas:
  - [fabric.Rect](/docs/fabric.Rect.html)
  - [fabric.Circle](/docs/fabric.Circle.html)
  - [fabric.Triangle](/docs/fabric.Triangle.html)
  - [fabric.Ellipse](/docs/fabric.Ellipse.html)
  - [fabric.Polygon](/docs/fabric.Polygon.html)
  - [fabric.Polyline](/docs/fabric.Polyline.html)
  - [fabric.Line](/docs/fabric.Line.html)
  - [fabric.Path](/docs/fabric.Path.html)
  - [fabric.Image](/docs/fabric.Image.html)
  - [fabric.Text](/docs/fabric.Text.html)
  - [fabric.IText](/docs/fabric.IText.html)
  - [fabric.Textbox](/docs/fabric.Textbox.html)
- Containers of items
  - [fabric.Group](/docs/fabric.Group.html)
  - [fabric.ActiveSelection](/docs/fabric.ActiveSelection.html)
- Gradient and Patterns are values you can assign to Shapes fill and strokes
  - [fabric.Pattern](/docs/fabric.Pattern.html)
  - [fabric.Gradient](/docs/fabric.Gradient.html)
- Filters classes
  - [fabric.Image.filters.BlendColor](/docs/fabric.Image.filters.BlendColor.html)
  - [fabric.Image.filters.Blur](/docs/fabric.Image.filters.Blur.html)
  - [fabric.Image.filters.Brightness](/docs/fabric.Image.filters.Brightness.html)
  - [fabric.Image.filters.ColorMatrix](/docs/fabric.Image.filters.ColorMatrix.html)
  - [fabric.Image.filters.ComposedFilter](/docs/fabric.Image.filters.ComposedFilter.html)
  - [fabric.Image.filters.Contrast](/docs/fabric.Image.filters.Contrast.html)
  - [fabric.Image.filters.Convolute](/docs/fabric.Image.filters.Convolute.html)
  - [fabric.Image.filters.Grayscale](/docs/fabric.Image.filters.Grayscale.html)
  - [fabric.Image.filters.HueRotation](/docs/fabric.Image.filters.HueRotation.html)
  - [fabric.Image.filters.Invert](/docs/fabric.Image.filters.Invert.html)
  - [fabric.Image.filters.Noise](/docs/fabric.Image.filters.Noise.html)
  - [fabric.Image.filters.Pixelate](/docs/fabric.Image.filters.Pixelate.html)
  - [fabric.Image.filters.RemoveColor](/docs/fabric.Image.filters.RemoveColor.html)
  - [fabric.Image.filters.Resize](/docs/fabric.Image.filters.Resize.html)
  - [fabric.Image.filters.Saturate](/docs/fabric.Image.filters.Saturate.html)
- Brushes classes, to be assigned to the canvas freeDrawingBrush to support free drawing

### Objects Hierarchy and Inheritance {#hierarchy_and_inheritance}

Fabric objects do not just exist independent of each other. They form a very precise hierarchy.

Most of the objects inherit from a root <code>fabric.Object</code>. <code>fabric.Object</code> pretty much represents a 2-dimensional shape, positioned in 2-dimensional canvas plane. It's an entity that has left/top and width/height properties, as well as a slew of other graphic characteristics. Those properties that we saw on objects like fill, stroke, angle, opacity, flip*, etc. are common to all Fabric objects that inherit from <code>fabric.Object</code>.

Rect, Circle, Triangle, Ellipse, Polyline, Line, Path, Image and Text inherit directly from fabric.Object.

Polygon is an extension of Polyline.

Textbox is an extension of IText that extends from Text.

This inheritance allows us to define methods on <code>fabric.Object</code> and share them among all child "classes". For example, if you wanted to have <code>getAngleInRadians</code> method on all objects, you would simply create it on <code>fabric.Object.prototype</code>:

```javascript
fabric.Object.prototype.getAngleInRadians = function() {
return this.get('angle') / 180 * Math.PI;
};

var rect = new fabric.Rect({ angle: 45 });
rect.getAngleInRadians(); // 0.785...

var circle = new fabric.Circle({ angle: 30, radius: 10 });
circle.getAngleInRadians(); // 0.523...

circle instanceof fabric.Circle; // true
circle instanceof fabric.Object; // true
```

As you can see, method immediately becomes available on all instances.

While child "classes" inherit from <code>fabric.Object</code>, they often also define their own methods and properties. For example, <code>fabric.Circle</code> needs to have "radius"; property. And <code>fabric.Image</code>, which we'll look at in a moment, needs to have <code>setElement</code> methods for setting HTML <img> element from which image instance originates.

Working with prototypes to obtain custom rendering and behaviour is very common for advanced projects.
Also creating entirely new classes that have a custom behaviour is possible.

  Read <a href="/fabric-intro-part-2">Part 2</a>.
