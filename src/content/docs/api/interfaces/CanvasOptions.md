---
editUrl: false
next: false
prev: false
title: "CanvasOptions"
---

## Extends

- [`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).`CanvasTransformOptions`.`CanvasSelectionOptions`.`CanvasCursorOptions`.`TargetFindOptions`.`CanvasEventsOptions`

## Properties

### allowTouchScrolling

> **allowTouchScrolling**: `boolean`

Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas

#### Default

```ts

```

#### Todo

move to Canvas

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`allowTouchScrolling`](/api/interfaces/staticcanvasoptions/#allowtouchscrolling)

#### Defined in

src/canvas/StaticCanvasOptions.ts:161

***

### altActionKey

> **altActionKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/)

Indicates which key enable alternate action on corner
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

#### Since

1.6.2

#### Default

```ts

```

#### Inherited from

`CanvasTransformOptions.altActionKey`

#### Defined in

src/canvas/CanvasOptions.ts:67

***

### altSelectionKey

> **altSelectionKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/)

Indicates which key enable alternative selection
in case of target overlapping with active object
values: 'altKey', 'shiftKey', 'ctrlKey'.
For a series of reason that come from the general expectations on how
things should work, this feature works only for preserveObjectStacking true.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled.

#### Since

1.6.5

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.altSelectionKey`

#### Defined in

src/canvas/CanvasOptions.ts:102

***

### backgroundColor

> **backgroundColor**: `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Background color of canvas instance.

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`backgroundColor`](/api/interfaces/staticcanvasoptions/#backgroundcolor)

#### Defined in

src/canvas/StaticCanvasOptions.ts:21

***

### backgroundImage?

> `optional` **backgroundImage**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Background image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as background, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`backgroundImage`](/api/interfaces/staticcanvasoptions/#backgroundimage)

#### Defined in

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`backgroundVpt`](/api/interfaces/staticcanvasoptions/#backgroundvpt)

#### Defined in

src/canvas/StaticCanvasOptions.ts:14

***

### centeredKey

> **centeredKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/)

Indicates which key enable centered Transform
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

#### Since

1.6.2

#### Default

```ts

```

#### Inherited from

`CanvasTransformOptions.centeredKey`

#### Defined in

src/canvas/CanvasOptions.ts:56

***

### centeredRotation

> **centeredRotation**: `boolean`

When true, objects use center point as the origin of rotate transformation.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

`CanvasTransformOptions.centeredRotation`

#### Defined in

src/canvas/CanvasOptions.ts:45

***

### centeredScaling

> **centeredScaling**: `boolean`

When true, objects use center point as the origin of scale transformation.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

`CanvasTransformOptions.centeredScaling`

#### Defined in

src/canvas/CanvasOptions.ts:36

***

### clipPath?

> `optional` **clipPath**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`clipPath`](/api/interfaces/staticcanvasoptions/#clippath)

#### Defined in

src/canvas/StaticCanvasOptions.ts:106

***

### ~~containerClass~~

> **containerClass**: `string`

Default element class that's given to wrapper (div) element of canvas

#### Default

```ts

```

:::caution[Deprecated]
customize [CanvasDOMManager](/api/classes/canvasdommanager/) instead or access elements directly
:::

#### Defined in

src/canvas/CanvasOptions.ts:251

***

### controlsAboveOverlay

> **controlsAboveOverlay**: `boolean`

Indicates whether object controls (borders/controls) are rendered above overlay image

#### Default

```ts

```

#### Todo

move to Canvas

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`controlsAboveOverlay`](/api/interfaces/staticcanvasoptions/#controlsaboveoverlay)

#### Defined in

src/canvas/StaticCanvasOptions.ts:152

***

### defaultCursor

> **defaultCursor**: `string`

Default cursor value used for the entire canvas

#### Default

```ts
default
```

#### Inherited from

`CanvasCursorOptions.defaultCursor`

#### Defined in

src/canvas/CanvasOptions.ts:160

***

### enablePointerEvents

> **enablePointerEvents**: `boolean`

When the option is enabled, PointerEvent is used instead of TPointerEvent.

#### Default

```ts

```

#### Inherited from

`CanvasEventsOptions.enablePointerEvents`

#### Defined in

src/canvas/CanvasOptions.ts:235

***

### enableRetinaScaling

> **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`enableRetinaScaling`](/api/interfaces/staticcanvasoptions/#enableretinascaling)

#### Defined in

src/canvas/StaticCanvasOptions.ts:90

***

### fireMiddleClick

> **fireMiddleClick**: `boolean`

Indicates if the canvas can fire middle click events

#### Since

1.7.8

#### Default

```ts

```

#### Inherited from

`CanvasEventsOptions.fireMiddleClick`

#### Defined in

src/canvas/CanvasOptions.ts:228

***

### fireRightClick

> **fireRightClick**: `boolean`

Indicates if the canvas can fire right click events

#### Since

1.6.5

#### Default

```ts

```

#### Inherited from

`CanvasEventsOptions.fireRightClick`

#### Defined in

src/canvas/CanvasOptions.ts:220

***

### freeDrawingCursor

> **freeDrawingCursor**: `string`

Cursor value used during free drawing

#### Default

```ts
crosshair
```

#### Inherited from

`CanvasCursorOptions.freeDrawingCursor`

#### Defined in

src/canvas/CanvasOptions.ts:167

***

### height

> **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`height`](/api/interfaces/staticcanvasoptions/#height)

#### Defined in

src/canvas/StaticCanvasOptions.ts:143

***

### hoverCursor

> **hoverCursor**: `string`

Default cursor value used when hovering over an object on canvas

#### Default

```ts
move
```

#### Inherited from

`CanvasCursorOptions.hoverCursor`

#### Defined in

src/canvas/CanvasOptions.ts:146

***

### imageSmoothingEnabled

> **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`imageSmoothingEnabled`](/api/interfaces/staticcanvasoptions/#imagesmoothingenabled)

#### Defined in

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`includeDefaultValues`](/api/interfaces/staticcanvasoptions/#includedefaultvalues)

#### Defined in

src/canvas/StaticCanvasOptions.ts:116

***

### moveCursor

> **moveCursor**: `string`

Default cursor value used when moving an object on canvas

#### Default

```ts
move
```

#### Inherited from

`CanvasCursorOptions.moveCursor`

#### Defined in

src/canvas/CanvasOptions.ts:153

***

### notAllowedCursor

> **notAllowedCursor**: `string`

Cursor value used for disabled elements ( corners with disabled action )

#### Since

2.0.0

#### Default

```ts
not-allowed
```

#### Inherited from

`CanvasCursorOptions.notAllowedCursor`

#### Defined in

src/canvas/CanvasOptions.ts:175

***

### overlayColor

> **overlayColor**: `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Overlay color of canvas instance.

#### Since

1.3.9

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`overlayColor`](/api/interfaces/staticcanvasoptions/#overlaycolor)

#### Defined in

src/canvas/StaticCanvasOptions.ts:48

***

### overlayImage?

> `optional` **overlayImage**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Overlay image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as overlay, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`overlayImage`](/api/interfaces/staticcanvasoptions/#overlayimage)

#### Defined in

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`overlayVpt`](/api/interfaces/staticcanvasoptions/#overlayvpt)

#### Defined in

src/canvas/StaticCanvasOptions.ts:40

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When true, object detection happens on per-pixel basis rather than on per-bounding-box

#### Default

```ts

```

#### Inherited from

`TargetFindOptions.perPixelTargetFind`

#### Defined in

src/canvas/CanvasOptions.ts:184

***

### preserveObjectStacking

> **preserveObjectStacking**: `boolean`

Indicates whether objects should remain in current stack position when selected.
When false objects are brought to top and rendered as part of the selection group

#### Default

```ts

```

#### Defined in

src/canvas/CanvasOptions.ts:259

***

### renderOnAddRemove

> **renderOnAddRemove**: `boolean`

Indicates whether [StaticCanvas#add](../../../../api/classes/staticcanvas/#add), [StaticCanvas#insertAt](../../../../api/classes/staticcanvas/#insertat) and StaticCanvas#remove,
StaticCanvas#moveTo, [StaticCanvas#clear](../../../../api/classes/staticcanvas/#clear) and many more, should also re-render canvas.
Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
since the renders are queued and executed one per frame.
Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
Left default to true to do not break documentation and old app, fiddles.

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`renderOnAddRemove`](/api/interfaces/staticcanvasoptions/#renderonaddremove)

#### Defined in

src/canvas/StaticCanvasOptions.ts:72

***

### selection

> **selection**: `boolean`

Indicates whether group selection should be enabled

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selection`

#### Defined in

src/canvas/CanvasOptions.ts:76

***

### selectionBorderColor

> **selectionBorderColor**: `string`

Color of the border of selection (usually slightly darker than color of selection itself)

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionBorderColor`

#### Defined in

src/canvas/CanvasOptions.ts:123

***

### selectionColor

> **selectionColor**: `string`

Color of selection

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionColor`

#### Defined in

src/canvas/CanvasOptions.ts:109

***

### selectionDashArray

> **selectionDashArray**: `number`[]

Default dash array pattern
If not empty the selection border is dashed

#### Inherited from

`CanvasSelectionOptions.selectionDashArray`

#### Defined in

src/canvas/CanvasOptions.ts:116

***

### selectionFullyContained

> **selectionFullyContained**: `boolean`

Select only shapes that are fully contained in the dragged selection rectangle.

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionFullyContained`

#### Defined in

src/canvas/CanvasOptions.ts:137

***

### selectionKey

> **selectionKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/) \| (`"altKey"` \| `"shiftKey"` \| `"ctrlKey"` \| `"metaKey"`)[]

Indicates which key or keys enable multiple click selection
Pass value as a string or array of strings
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or empty or containing any other string that is not a modifier key
feature is disabled.

#### Since

1.6.2

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionKey`

#### Defined in

src/canvas/CanvasOptions.ts:88

***

### selectionLineWidth

> **selectionLineWidth**: `number`

Width of a line used in object/group selection

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionLineWidth`

#### Defined in

src/canvas/CanvasOptions.ts:130

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`skipOffscreen`](/api/interfaces/staticcanvasoptions/#skipoffscreen)

#### Defined in

src/canvas/StaticCanvasOptions.ts:83

***

### skipTargetFind

> **skipTargetFind**: `boolean`

When true, target detection is skipped. Target detection will return always undefined.
click selection won't work anymore, events will fire with no targets.
if something is selected before setting it to true, it will be deselected at the first click.
area selection will still work. check the `selection` property too.
if you deactivate both, you should look into staticCanvas.

#### Default

```ts

```

#### Inherited from

`TargetFindOptions.skipTargetFind`

#### Defined in

src/canvas/CanvasOptions.ts:202

***

### stopContextMenu

> **stopContextMenu**: `boolean`

Indicates if the right click on canvas can output the context menu or not

#### Since

1.6.5

#### Default

```ts

```

#### Inherited from

`CanvasEventsOptions.stopContextMenu`

#### Defined in

src/canvas/CanvasOptions.ts:212

***

### svgViewportTransformation

> **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`svgViewportTransformation`](/api/interfaces/staticcanvasoptions/#svgviewporttransformation)

#### Defined in

src/canvas/StaticCanvasOptions.ts:124

***

### targetFindTolerance

> **targetFindTolerance**: `number`

Number of pixels around target pixel to tolerate (consider active) during object detection

#### Default

```ts

```

#### Inherited from

`TargetFindOptions.targetFindTolerance`

#### Defined in

src/canvas/CanvasOptions.ts:191

***

### uniScaleKey

> **uniScaleKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/)

Indicates which key switches uniform scaling.
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled.
totally wrong named. this sounds like `uniform scaling`
if Canvas.uniformScaling is true, pressing this will set it to false
and viceversa.

#### Since

1.6.2

#### Default

```ts

```

#### Inherited from

`CanvasTransformOptions.uniScaleKey`

#### Defined in

src/canvas/CanvasOptions.ts:27

***

### uniformScaling

> **uniformScaling**: `boolean`

When true, objects can be transformed by one side (unproportionately)
when dragged on the corners that normally would not do that.

#### Default

```ts

```

#### Since

fabric 4.0 // changed name and default value

#### Inherited from

`CanvasTransformOptions.uniformScaling`

#### Defined in

src/canvas/CanvasOptions.ts:13

***

### viewportTransform

> **viewportTransform**: [`TMat2D`](/api/type-aliases/tmat2d/)

The transformation (a Canvas 2D API transform matrix) which focuses the viewport

#### Examples

```ts
canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
```

```ts
canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
```

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`viewportTransform`](/api/interfaces/staticcanvasoptions/#viewporttransform)

#### Defined in

src/canvas/StaticCanvasOptions.ts:172

***

### width

> **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`width`](/api/interfaces/staticcanvasoptions/#width)

#### Defined in

src/canvas/StaticCanvasOptions.ts:136
