---
editUrl: false
next: false
prev: false
title: "StaticCanvasOptions"
---

## Extends

- `CanvasDrawableOptions`.`CanvasRenderingOptions`.`CanvasExportOptions`

## Properties

### allowTouchScrolling

> **allowTouchScrolling**: `boolean`

Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas

#### Default

```ts

```

#### Todo

move to Canvas

#### Source

src/canvas/StaticCanvasOptions.ts:161

***

### backgroundColor

> **backgroundColor**: `string` \| [`TFiller`](../type-aliases/TFiller.md)

Background color of canvas instance.

#### Default

```ts

```

#### Inherited from

`CanvasDrawableOptions.backgroundColor`

#### Source

src/canvas/StaticCanvasOptions.ts:21

***

### backgroundImage?

> **`optional`** **backgroundImage**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

Background image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as background, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Inherited from

`CanvasDrawableOptions.backgroundImage`

#### Source

src/canvas/StaticCanvasOptions.ts:31

***

### backgroundVpt

> **backgroundVpt**: `boolean`

if set to false background image is not affected by viewport transform

#### Since

1.6.3

#### Todo

we should really find a different way to do this

#### Default

```ts

```

#### Inherited from

`CanvasDrawableOptions.backgroundVpt`

#### Source

src/canvas/StaticCanvasOptions.ts:14

***

### clipPath?

> **`optional`** **clipPath**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Inherited from

`CanvasRenderingOptions.clipPath`

#### Source

src/canvas/StaticCanvasOptions.ts:106

***

### controlsAboveOverlay

> **controlsAboveOverlay**: `boolean`

Indicates whether object controls (borders/controls) are rendered above overlay image

#### Default

```ts

```

#### Todo

move to Canvas

#### Source

src/canvas/StaticCanvasOptions.ts:152

***

### enableRetinaScaling

> **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

#### Default

```ts

```

#### Inherited from

`CanvasRenderingOptions.enableRetinaScaling`

#### Source

src/canvas/StaticCanvasOptions.ts:90

***

### height

> **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Source

src/canvas/StaticCanvasOptions.ts:143

***

### imageSmoothingEnabled

> **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

#### Default

```ts

```

#### Inherited from

`CanvasRenderingOptions.imageSmoothingEnabled`

#### Source

src/canvas/StaticCanvasOptions.ts:97

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

#### Default

```ts

```

#### Inherited from

`CanvasExportOptions.includeDefaultValues`

#### Source

src/canvas/StaticCanvasOptions.ts:116

***

### overlayColor

> **overlayColor**: `string` \| [`TFiller`](../type-aliases/TFiller.md)

Overlay color of canvas instance.

#### Since

1.3.9

#### Default

```ts

```

#### Inherited from

`CanvasDrawableOptions.overlayColor`

#### Source

src/canvas/StaticCanvasOptions.ts:48

***

### overlayImage?

> **`optional`** **overlayImage**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

Overlay image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as overlay, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Inherited from

`CanvasDrawableOptions.overlayImage`

#### Source

src/canvas/StaticCanvasOptions.ts:58

***

### overlayVpt

> **overlayVpt**: `boolean`

if set to false overlay image is not affected by viewport transform

#### Since

1.6.3

#### Todo

we should really find a different way to do this

#### Default

```ts

```

#### Inherited from

`CanvasDrawableOptions.overlayVpt`

#### Source

src/canvas/StaticCanvasOptions.ts:40

***

### renderOnAddRemove

> **renderOnAddRemove**: `boolean`

Indicates whether [StaticCanvas#add](../../../../api/interfaces/classes/staticcanvas/#add), [StaticCanvas#insertAt](../../../../api/interfaces/classes/staticcanvas/#insertat) and [StaticCanvas#remove](../../../../api/interfaces/classes/staticcanvas/#remove),
StaticCanvas#moveTo, [StaticCanvas#clear](../../../../api/interfaces/classes/staticcanvas/#clear) and many more, should also re-render canvas.
Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
since the renders are queued and executed one per frame.
Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
Left default to true to do not break documentation and old app, fiddles.

#### Default

```ts

```

#### Inherited from

`CanvasRenderingOptions.renderOnAddRemove`

#### Source

src/canvas/StaticCanvasOptions.ts:72

***

### skipOffscreen

> **skipOffscreen**: `boolean`

Based on vptCoords and object.aCoords, skip rendering of objects that
are not included in current viewport.
May greatly help in applications with crowded canvas and use of zoom/pan
If One of the corner of the bounding box of the object is on the canvas
the objects get rendered.

#### Default

```ts
true
```

#### Inherited from

`CanvasRenderingOptions.skipOffscreen`

#### Source

src/canvas/StaticCanvasOptions.ts:83

***

### svgViewportTransformation

> **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

#### Default

```ts

```

#### Inherited from

`CanvasExportOptions.svgViewportTransformation`

#### Source

src/canvas/StaticCanvasOptions.ts:124

***

### viewportTransform

> **viewportTransform**: [`TMat2D`](../type-aliases/TMat2D.md)

The transformation (a Canvas 2D API transform matrix) which focuses the viewport

#### Example

```ts
canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
```

#### Example

```ts
canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
```

#### Default

```ts

```

#### Source

src/canvas/StaticCanvasOptions.ts:172

***

### width

> **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Source

src/canvas/StaticCanvasOptions.ts:136
