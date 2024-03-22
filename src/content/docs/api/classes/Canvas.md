---
editUrl: false
next: false
prev: false
title: "Canvas"
---

## Extends

- `SelectableCanvas`

## Implements

- [`CanvasOptions`](../interfaces/CanvasOptions.md)

## Constructors

### new Canvas(el, options)

> **new Canvas**(`el`?, `options`?): [`Canvas`](Canvas.md)

#### Parameters

• **el?**: `string` \| `HTMLCanvasElement`

• **options?**: `TCanvasOptions`= `{}`

#### Returns

[`Canvas`](Canvas.md)

#### Overrides

`SelectableCanvas.constructor`

#### Source

src/canvas/Canvas.ts:117

## Properties

### \_activeObject?

> **`optional`** **\_activeObject**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Inherited from

`SelectableCanvas._activeObject`

#### Source

src/canvas/SelectableCanvas.ts:295

***

### \_objects

> **\_objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Inherited from

`SelectableCanvas._objects`

#### Source

src/canvas/SelectableCanvas.ts:139

***

### \_offset

> **\_offset**: `Object`

#### left

> **left**: `number`

#### top

> **top**: `number`

#### Inherited from

`SelectableCanvas._offset`

#### Source

src/canvas/StaticCanvas.ts:158

***

### allowTouchScrolling

> **allowTouchScrolling**: `boolean`

#### Todo

move to Canvas

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`allowTouchScrolling`](../interfaces/CanvasOptions.md#allowtouchscrolling)

#### Inherited from

`SelectableCanvas.allowTouchScrolling`

#### Source

src/canvas/StaticCanvas.ts:122

***

### altActionKey

> **altActionKey**: [`TOptionalModifierKey`](../type-aliases/TOptionalModifierKey.md)

Indicates which key enable alternate action on corner
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

#### Since

1.6.2

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`altActionKey`](../interfaces/CanvasOptions.md#altactionkey)

#### Inherited from

`SelectableCanvas.altActionKey`

#### Source

src/canvas/SelectableCanvas.ts:147

***

### altSelectionKey

> **altSelectionKey**: [`TOptionalModifierKey`](../type-aliases/TOptionalModifierKey.md)

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

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`altSelectionKey`](../interfaces/CanvasOptions.md#altselectionkey)

#### Inherited from

`SelectableCanvas.altSelectionKey`

#### Source

src/canvas/SelectableCanvas.ts:152

***

### backgroundColor

> **backgroundColor**: `string` \| [`TFiller`](../type-aliases/TFiller.md)

Background color of canvas instance.

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`backgroundColor`](../interfaces/CanvasOptions.md#backgroundcolor)

#### Inherited from

`SelectableCanvas.backgroundColor`

#### Source

src/canvas/StaticCanvas.ts:97

***

### backgroundImage?

> **`optional`** **backgroundImage**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Background image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as background, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`backgroundImage`](../interfaces/CanvasOptions.md#backgroundimage)

#### Inherited from

`SelectableCanvas.backgroundImage`

#### Source

src/canvas/StaticCanvas.ts:98

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

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`backgroundVpt`](../interfaces/CanvasOptions.md#backgroundvpt)

#### Inherited from

`SelectableCanvas.backgroundVpt`

#### Source

src/canvas/StaticCanvas.ts:96

***

### centeredKey

> **centeredKey**: [`TOptionalModifierKey`](../type-aliases/TOptionalModifierKey.md)

Indicates which key enable centered Transform
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

#### Since

1.6.2

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`centeredKey`](../interfaces/CanvasOptions.md#centeredkey)

#### Inherited from

`SelectableCanvas.centeredKey`

#### Source

src/canvas/SelectableCanvas.ts:146

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

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`centeredRotation`](../interfaces/CanvasOptions.md#centeredrotation)

#### Inherited from

`SelectableCanvas.centeredRotation`

#### Source

src/canvas/SelectableCanvas.ts:145

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

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`centeredScaling`](../interfaces/CanvasOptions.md#centeredscaling)

#### Inherited from

`SelectableCanvas.centeredScaling`

#### Source

src/canvas/SelectableCanvas.ts:144

***

### clipPath?

> **`optional`** **clipPath**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`clipPath`](../interfaces/CanvasOptions.md#clippath)

#### Inherited from

`SelectableCanvas.clipPath`

#### Source

src/canvas/StaticCanvas.ts:104

***

### ~~containerClass~~

> **containerClass**: `string`

Default element class that's given to wrapper (div) element of canvas

#### Default

```ts

```

:::caution[Deprecated]
customize [CanvasDOMManager](CanvasDOMManager.md) instead or access [elements](Canvas.md#elements) directly
:::

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`containerClass`](../interfaces/CanvasOptions.md#containerclass)

#### Inherited from

`SelectableCanvas.containerClass`

#### Source

src/canvas/SelectableCanvas.ts:166

***

### controlsAboveOverlay

> **controlsAboveOverlay**: `boolean`

#### Todo

move to Canvas

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`controlsAboveOverlay`](../interfaces/CanvasOptions.md#controlsaboveoverlay)

#### Inherited from

`SelectableCanvas.controlsAboveOverlay`

#### Source

src/canvas/StaticCanvas.ts:117

***

### defaultCursor

> **defaultCursor**: `string`

Default cursor value used for the entire canvas

#### Default

```ts
default
```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`defaultCursor`](../interfaces/CanvasOptions.md#defaultcursor)

#### Inherited from

`SelectableCanvas.defaultCursor`

#### Source

src/canvas/SelectableCanvas.ts:162

***

### destroyed?

> **`optional`** **destroyed**: `boolean`

If true the Canvas is in the process or has been disposed/destroyed.
No more rendering operation will be executed on this canvas.

#### Inherited from

`SelectableCanvas.destroyed`

#### Source

src/canvas/StaticCanvas.ts:149

***

### disposed?

> **`optional`** **disposed**: `boolean`

Started the process of disposing but not done yet.
WIll likely complete the render cycle already scheduled but stopping adding more.

#### Inherited from

`SelectableCanvas.disposed`

#### Source

src/canvas/StaticCanvas.ts:156

***

### elements

> **elements**: [`CanvasDOMManager`](CanvasDOMManager.md)

#### Inherited from

`SelectableCanvas.elements`

#### Source

src/canvas/SelectableCanvas.ts:280

***

### enablePointerEvents

> **enablePointerEvents**: `boolean`

When the option is enabled, PointerEvent is used instead of TPointerEvent.

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`enablePointerEvents`](../interfaces/CanvasOptions.md#enablepointerevents)

#### Source

src/canvas/Canvas.ts:81

***

### enableRetinaScaling

> **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`enableRetinaScaling`](../interfaces/CanvasOptions.md#enableretinascaling)

#### Inherited from

`SelectableCanvas.enableRetinaScaling`

#### Source

src/canvas/StaticCanvas.ts:111

***

### fireMiddleClick

> **fireMiddleClick**: `boolean`

Indicates if the canvas can fire middle click events

#### Since

1.7.8

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`fireMiddleClick`](../interfaces/CanvasOptions.md#firemiddleclick)

#### Inherited from

`SelectableCanvas.fireMiddleClick`

#### Source

src/canvas/SelectableCanvas.ts:188

***

### fireRightClick

> **fireRightClick**: `boolean`

Indicates if the canvas can fire right click events

#### Since

1.6.5

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`fireRightClick`](../interfaces/CanvasOptions.md#firerightclick)

#### Inherited from

`SelectableCanvas.fireRightClick`

#### Source

src/canvas/SelectableCanvas.ts:187

***

### freeDrawingBrush?

> **`optional`** **freeDrawingBrush**: [`BaseBrush`](BaseBrush.md)

#### Inherited from

`SelectableCanvas.freeDrawingBrush`

#### Source

src/canvas/SelectableCanvas.ts:294

***

### freeDrawingCursor

> **freeDrawingCursor**: `string`

Cursor value used during free drawing

#### Default

```ts
crosshair
```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`freeDrawingCursor`](../interfaces/CanvasOptions.md#freedrawingcursor)

#### Inherited from

`SelectableCanvas.freeDrawingCursor`

#### Source

src/canvas/SelectableCanvas.ts:163

***

### height

> **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`height`](../interfaces/CanvasOptions.md#height)

#### Inherited from

`SelectableCanvas.height`

#### Source

src/canvas/StaticCanvas.ts:93

***

### hoverCursor

> **hoverCursor**: `string`

Default cursor value used when hovering over an object on canvas

#### Default

```ts
move
```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`hoverCursor`](../interfaces/CanvasOptions.md#hovercursor)

#### Inherited from

`SelectableCanvas.hoverCursor`

#### Source

src/canvas/SelectableCanvas.ts:160

***

### imageSmoothingEnabled

> **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`imageSmoothingEnabled`](../interfaces/CanvasOptions.md#imagesmoothingenabled)

#### Inherited from

`SelectableCanvas.imageSmoothingEnabled`

#### Source

src/canvas/StaticCanvas.ts:112

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`includeDefaultValues`](../interfaces/CanvasOptions.md#includedefaultvalues)

#### Inherited from

`SelectableCanvas.includeDefaultValues`

#### Source

src/canvas/StaticCanvas.ts:106

***

### isDrawingMode

> **isDrawingMode**: `boolean`

When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
After mousedown, mousemove creates a shape,
and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.

#### Tutorial

[http://fabricjs.com/fabric-intro-part-4#free_drawing](http://fabricjs.com/fabric-intro-part-4#free_drawing)

#### Default

```ts

```

#### Inherited from

`SelectableCanvas.isDrawingMode`

#### Source

src/canvas/SelectableCanvas.ts:181

***

### moveCursor

> **moveCursor**: `string`

Default cursor value used when moving an object on canvas

#### Default

```ts
move
```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`moveCursor`](../interfaces/CanvasOptions.md#movecursor)

#### Inherited from

`SelectableCanvas.moveCursor`

#### Source

src/canvas/SelectableCanvas.ts:161

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

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`notAllowedCursor`](../interfaces/CanvasOptions.md#notallowedcursor)

#### Inherited from

`SelectableCanvas.notAllowedCursor`

#### Source

src/canvas/SelectableCanvas.ts:164

***

### overlayColor

> **overlayColor**: `string` \| [`TFiller`](../type-aliases/TFiller.md)

Overlay color of canvas instance.

#### Since

1.3.9

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`overlayColor`](../interfaces/CanvasOptions.md#overlaycolor)

#### Inherited from

`SelectableCanvas.overlayColor`

#### Source

src/canvas/StaticCanvas.ts:101

***

### overlayImage?

> **`optional`** **overlayImage**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Overlay image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as overlay, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`overlayImage`](../interfaces/CanvasOptions.md#overlayimage)

#### Inherited from

`SelectableCanvas.overlayImage`

#### Source

src/canvas/StaticCanvas.ts:102

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

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`overlayVpt`](../interfaces/CanvasOptions.md#overlayvpt)

#### Inherited from

`SelectableCanvas.overlayVpt`

#### Source

src/canvas/StaticCanvas.ts:100

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When true, object detection happens on per-pixel basis rather than on per-bounding-box

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`perPixelTargetFind`](../interfaces/CanvasOptions.md#perpixeltargetfind)

#### Inherited from

`SelectableCanvas.perPixelTargetFind`

#### Source

src/canvas/SelectableCanvas.ts:169

***

### preserveObjectStacking

> **preserveObjectStacking**: `boolean`

Indicates whether objects should remain in current stack position when selected.
When false objects are brought to top and rendered as part of the selection group

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`preserveObjectStacking`](../interfaces/CanvasOptions.md#preserveobjectstacking)

#### Inherited from

`SelectableCanvas.preserveObjectStacking`

#### Source

src/canvas/SelectableCanvas.ts:183

***

### renderOnAddRemove

> **renderOnAddRemove**: `boolean`

Indicates whether [StaticCanvas#add](../../../../api/classes/staticcanvas/#add), [StaticCanvas#insertAt](../../../../api/classes/staticcanvas/#insertat) and [StaticCanvas#remove](../../../../api/classes/staticcanvas/#remove),
StaticCanvas#moveTo, [StaticCanvas#clear](../../../../api/classes/staticcanvas/#clear) and many more, should also re-render canvas.
Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
since the renders are queued and executed one per frame.
Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
Left default to true to do not break documentation and old app, fiddles.

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`renderOnAddRemove`](../interfaces/CanvasOptions.md#renderonaddremove)

#### Inherited from

`SelectableCanvas.renderOnAddRemove`

#### Source

src/canvas/StaticCanvas.ts:109

***

### selection

> **selection**: `boolean`

Indicates whether group selection should be enabled

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`selection`](../interfaces/CanvasOptions.md#selection)

#### Inherited from

`SelectableCanvas.selection`

#### Source

src/canvas/SelectableCanvas.ts:150

***

### selectionBorderColor

> **selectionBorderColor**: `string`

Color of the border of selection (usually slightly darker than color of selection itself)

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`selectionBorderColor`](../interfaces/CanvasOptions.md#selectionbordercolor)

#### Inherited from

`SelectableCanvas.selectionBorderColor`

#### Source

src/canvas/SelectableCanvas.ts:155

***

### selectionColor

> **selectionColor**: `string`

Color of selection

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`selectionColor`](../interfaces/CanvasOptions.md#selectioncolor)

#### Inherited from

`SelectableCanvas.selectionColor`

#### Source

src/canvas/SelectableCanvas.ts:153

***

### selectionDashArray

> **selectionDashArray**: `number`[]

Default dash array pattern
If not empty the selection border is dashed

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`selectionDashArray`](../interfaces/CanvasOptions.md#selectiondasharray)

#### Inherited from

`SelectableCanvas.selectionDashArray`

#### Source

src/canvas/SelectableCanvas.ts:154

***

### selectionFullyContained

> **selectionFullyContained**: `boolean`

Select only shapes that are fully contained in the dragged selection rectangle.

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`selectionFullyContained`](../interfaces/CanvasOptions.md#selectionfullycontained)

#### Inherited from

`SelectableCanvas.selectionFullyContained`

#### Source

src/canvas/SelectableCanvas.ts:157

***

### selectionKey

> **selectionKey**: [`TOptionalModifierKey`](../type-aliases/TOptionalModifierKey.md) \| (`"altKey"` \| `"shiftKey"` \| `"ctrlKey"` \| `"metaKey"`)[]

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

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`selectionKey`](../interfaces/CanvasOptions.md#selectionkey)

#### Inherited from

`SelectableCanvas.selectionKey`

#### Source

src/canvas/SelectableCanvas.ts:151

***

### selectionLineWidth

> **selectionLineWidth**: `number`

Width of a line used in object/group selection

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`selectionLineWidth`](../interfaces/CanvasOptions.md#selectionlinewidth)

#### Inherited from

`SelectableCanvas.selectionLineWidth`

#### Source

src/canvas/SelectableCanvas.ts:156

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

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`skipOffscreen`](../interfaces/CanvasOptions.md#skipoffscreen)

#### Inherited from

`SelectableCanvas.skipOffscreen`

#### Source

src/canvas/StaticCanvas.ts:110

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

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`skipTargetFind`](../interfaces/CanvasOptions.md#skiptargetfind)

#### Inherited from

`SelectableCanvas.skipTargetFind`

#### Source

src/canvas/SelectableCanvas.ts:171

***

### stopContextMenu

> **stopContextMenu**: `boolean`

Indicates if the right click on canvas can output the context menu or not

#### Since

1.6.5

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`stopContextMenu`](../interfaces/CanvasOptions.md#stopcontextmenu)

#### Inherited from

`SelectableCanvas.stopContextMenu`

#### Source

src/canvas/SelectableCanvas.ts:186

***

### svgViewportTransformation

> **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`svgViewportTransformation`](../interfaces/CanvasOptions.md#svgviewporttransformation)

#### Inherited from

`SelectableCanvas.svgViewportTransformation`

#### Source

src/canvas/StaticCanvas.ts:956

***

### targetFindTolerance

> **targetFindTolerance**: `number`

Number of pixels around target pixel to tolerate (consider active) during object detection

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`targetFindTolerance`](../interfaces/CanvasOptions.md#targetfindtolerance)

#### Inherited from

`SelectableCanvas.targetFindTolerance`

#### Source

src/canvas/SelectableCanvas.ts:170

***

### targets

> **targets**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] = `[]`

Keep track of the subTargets for Mouse Events

#### Inherited from

`SelectableCanvas.targets`

#### Source

src/canvas/SelectableCanvas.ts:194

***

### textEditingManager

> **textEditingManager**: `TextEditingManager`

#### Source

src/canvas/Canvas.ts:115

***

### uniScaleKey

> **uniScaleKey**: [`TOptionalModifierKey`](../type-aliases/TOptionalModifierKey.md)

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

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`uniScaleKey`](../interfaces/CanvasOptions.md#uniscalekey)

#### Inherited from

`SelectableCanvas.uniScaleKey`

#### Source

src/canvas/SelectableCanvas.ts:143

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

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`uniformScaling`](../interfaces/CanvasOptions.md#uniformscaling)

#### Inherited from

`SelectableCanvas.uniformScaling`

#### Source

src/canvas/SelectableCanvas.ts:142

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

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`viewportTransform`](../interfaces/CanvasOptions.md#viewporttransform)

#### Inherited from

`SelectableCanvas.viewportTransform`

#### Source

src/canvas/StaticCanvas.ts:124

***

### vptCoords

> **vptCoords**: [`TCornerPoint`](../type-aliases/TCornerPoint.md)

The viewport bounding box in scene plane coordinates, see [calcViewportBoundaries](../../../../api/classes/canvas/#calcviewportboundaries)

#### Inherited from

`SelectableCanvas.vptCoords`

#### Source

src/canvas/StaticCanvas.ts:129

***

### width

> **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Implementation of

[`CanvasOptions`](../interfaces/CanvasOptions.md).[`width`](../interfaces/CanvasOptions.md#width)

#### Inherited from

`SelectableCanvas.width`

#### Source

src/canvas/StaticCanvas.ts:92

***

### ownDefaults

> **`static`** **ownDefaults**: [`TOptions`](../type-aliases/TOptions.md)\<[`CanvasOptions`](../interfaces/CanvasOptions.md)\> = `canvasDefaults`

#### Inherited from

`SelectableCanvas.ownDefaults`

#### Source

src/canvas/SelectableCanvas.ts:274

## Accessors

### contextContainer

> **`get`** **contextContainer**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Source

src/canvas/StaticCanvas.ts:140

***

### contextTop

> **`get`** **contextTop**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Source

src/canvas/SelectableCanvas.ts:284

***

### lowerCanvasEl

> **`get`** **lowerCanvasEl**(): `HTMLCanvasElement`

A reference to the canvas actual HTMLCanvasElement.
Can be use to read the raw pixels, but never write or manipulate

#### Returns

`HTMLCanvasElement`

#### Source

src/canvas/StaticCanvas.ts:136

***

### upperCanvasEl

> **`get`** **upperCanvasEl**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Source

src/canvas/SelectableCanvas.ts:281

***

### wrapperEl

> **`get`** **wrapperEl**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Source

src/canvas/SelectableCanvas.ts:287

## Methods

### \_\_onMouseWheel()

> **\_\_onMouseWheel**(`e`): `void`

Method that defines actions when an Event Mouse Wheel

#### Parameters

• **e**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

Event object fired on mouseup

#### Returns

`void`

#### Source

src/canvas/Canvas.ts:1269

***

### \_basicEventHandler()

> **\_basicEventHandler**\<`T`\>(`eventType`, `options`): [`CanvasEvents`](../interfaces/CanvasEvents.md) & [`ObjectEvents`](../interfaces/ObjectEvents.md)\[`T`\]

#### Type parameters

• **T** extends `"erasing:end"` \| `"dragstart"` \| `"drag"` \| `"dragover"` \| `"dragenter"` \| `"dragleave"` \| `"dragend"` \| `"drop:before"` \| `"drop"` \| `"drop:after"` \| `"contextmenu:before"` \| `"contextmenu"`

#### Parameters

• **eventType**: `T`

• **options**: [`CanvasEvents`](../interfaces/CanvasEvents.md) & [`ObjectEvents`](../interfaces/ObjectEvents.md)\[`T`\]

#### Returns

[`CanvasEvents`](../interfaces/CanvasEvents.md) & [`ObjectEvents`](../interfaces/ObjectEvents.md)\[`T`\]

#### Source

src/canvas/Canvas.ts:875

***

### \_chooseObjectsToRender()

> **\_chooseObjectsToRender**(): [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Divides objects in two groups, one to render immediately
and one to render as activeGroup.

#### Returns

[`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

objects to render immediately and pushes the other in the activeGroup.

#### Inherited from

`SelectableCanvas._chooseObjectsToRender`

#### Source

src/canvas/SelectableCanvas.ts:346

***

### \_discardActiveObject()

> **\_discardActiveObject**(`e`?, `object`?): `this is Object`

This is supposed to be equivalent to discardActiveObject but without firing
any selection events ( can still fire object transformation events ). There is commitment to have this stay this way.
This is the functional part of discardActiveObject.

#### Parameters

• **e?**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

Event (passed along when firing "object:deselected")

• **object?**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

the next object to set as active, reason why we are discarding this

#### Returns

`this is Object`

true if the active object has been discarded

#### Inherited from

`SelectableCanvas._discardActiveObject`

#### Source

src/canvas/SelectableCanvas.ts:1149

***

### \_onStackOrderChanged()

> **\_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Inherited from

`SelectableCanvas._onStackOrderChanged`

#### Source

src/canvas/SelectableCanvas.ts:336

***

### \_set()

> **\_set**(`key`, `value`): `void`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`void`

#### Inherited from

`SelectableCanvas._set`

#### Source

src/CommonMethods.ts:38

***

### \_setActiveObject()

> **\_setActiveObject**(`object`, `e`?): `boolean`

This is supposed to be equivalent to setActiveObject but without firing
any event. There is commitment to have this stay this way.
This is the functional part of setActiveObject.

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

to set as active

• **e?**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

Event (passed along when firing "object:selected")

#### Returns

`boolean`

true if the object has been selected

#### Inherited from

`SelectableCanvas._setActiveObject`

#### Source

src/canvas/SelectableCanvas.ts:1117

***

### \_setCursorFromEvent()

> **\_setCursorFromEvent**(`e`, `target`?): `void`

Sets the cursor depending on where the canvas is being hovered.
Note: very buggy in Opera

#### Parameters

• **e**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

Event object

• **target?**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object that the mouse is hovering, if so.

#### Returns

`void`

#### Source

src/canvas/Canvas.ts:1330

***

### absolutePan()

> **absolutePan**(`point`): `void`

Pan viewport so as to place point at top left corner of canvas

#### Parameters

• **point**: [`Point`](Point.md)

to move to

#### Returns

`void`

#### Inherited from

`SelectableCanvas.absolutePan`

#### Source

src/canvas/StaticCanvas.ts:434

***

### add()

> **add**(...`objects`): `number`

#### Parameters

• ...**objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Returns

`number`

#### Inherited from

`SelectableCanvas.add`

#### Source

src/canvas/StaticCanvas.ts:199

***

### addOrRemove()

> **addOrRemove**(`functor`, `eventjsFunctor`): `void`

#### Parameters

• **functor**: `any`

• **eventjsFunctor**: `"add"` \| `"remove"`

#### Returns

`void`

#### Source

src/canvas/Canvas.ts:161

***

### bringObjectForward()

> **bringObjectForward**(`object`, `intersecting`?): `boolean`

Moves an object or a selection up in stack of drawn objects
An optional parameter, intersecting allows to move the object in front
of the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to send

• **intersecting?**: `boolean`

If `true`, send object in front of next upper intersecting object

#### Returns

`boolean`

true if change occurred

#### Inherited from

`SelectableCanvas.bringObjectForward`

#### Source

src/Collection.ts:240

***

### bringObjectToFront()

> **bringObjectToFront**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the top of the stack of drawn objects

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to send

#### Returns

`boolean`

true if change occurred

#### Inherited from

`SelectableCanvas.bringObjectToFront`

#### Source

src/Collection.ts:194

***

### calcOffset()

> **calcOffset**(): `Object`

Calculates canvas element offset relative to the document
This method is also attached as "resize" event handler of window

#### Returns

`Object`

##### left

> **left**: `number` = `0`

##### top

> **top**: `number` = `0`

#### Inherited from

`SelectableCanvas.calcOffset`

#### Source

src/canvas/StaticCanvas.ts:255

***

### calcViewportBoundaries()

> **calcViewportBoundaries**(): [`TCornerPoint`](../type-aliases/TCornerPoint.md)

Calculate the position of the 4 corner of canvas with current viewportTransform.
helps to determinate when an object is in the current rendering viewport

#### Returns

[`TCornerPoint`](../type-aliases/TCornerPoint.md)

#### Inherited from

`SelectableCanvas.calcViewportBoundaries`

#### Source

src/canvas/StaticCanvas.ts:531

***

### cancelRequestedRender()

> **cancelRequestedRender**(): `void`

#### Returns

`void`

#### Inherited from

`SelectableCanvas.cancelRequestedRender`

#### Source

src/canvas/StaticCanvas.ts:549

***

### centerObject()

> **centerObject**(`object`): `void`

Centers object vertically and horizontally in the canvas

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to center vertically and horizontally

#### Returns

`void`

#### Inherited from

`SelectableCanvas.centerObject`

#### Source

src/canvas/StaticCanvas.ts:758

***

### centerObjectH()

> **centerObjectH**(`object`): `void`

Centers object horizontally in the canvas

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`void`

#### Inherited from

`SelectableCanvas.centerObjectH`

#### Source

src/canvas/StaticCanvas.ts:736

***

### centerObjectV()

> **centerObjectV**(`object`): `void`

Centers object vertically in the canvas

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to center vertically

#### Returns

`void`

#### Inherited from

`SelectableCanvas.centerObjectV`

#### Source

src/canvas/StaticCanvas.ts:747

***

### clear()

> **clear**(): `void`

clear [textEditingManager](../../../../api/classes/canvas/#texteditingmanager)

#### Returns

`void`

#### Overrides

`SelectableCanvas.clear`

#### Source

src/canvas/Canvas.ts:1519

***

### clearContext()

> **clearContext**(`ctx`): `void`

Clears specified context of canvas element

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to clear

#### Returns

`void`

#### Inherited from

`SelectableCanvas.clearContext`

#### Source

src/canvas/StaticCanvas.ts:466

***

### clone()

> **clone**(`properties`?): `Promise`\<[`Canvas`](Canvas.md)\>

Clones canvas instance

#### Parameters

• **properties?**: `string`[]

Array of properties to include in the cloned canvas and children

#### Returns

`Promise`\<[`Canvas`](Canvas.md)\>

#### Inherited from

`SelectableCanvas.clone`

#### Source

src/canvas/StaticCanvas.ts:1329

***

### cloneWithoutData()

> **cloneWithoutData**(): [`Canvas`](Canvas.md)

Clones canvas instance without cloning existing data.
This essentially copies canvas dimensions since loadFromJSON does not affect canvas size.

#### Returns

[`Canvas`](Canvas.md)

#### Inherited from

`SelectableCanvas.cloneWithoutData`

#### Source

src/canvas/StaticCanvas.ts:1339

***

### collectObjects()

> **collectObjects**(`bbox`, `options`): `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Given a bounding box, return all the objects of the collection that are contained in the bounding box.
If `includeIntersecting` is true, return also the objects that intersect the bounding box as well.
This is meant to work with selection. Is not a generic method.

#### Parameters

• **bbox**: [`TBBox`](../type-aliases/TBBox.md)

a bounding box in scene coordinates

• **options**= `{}`

an object with includeIntersecting

• **options\.includeIntersecting?**: `boolean`= `true`

#### Returns

`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

array of objects contained in the bounding box, ordered from top to bottom stacking wise

#### Inherited from

`SelectableCanvas.collectObjects`

#### Source

src/Collection.ts:326

***

### complexity()

> **complexity**(): `number`

Returns number representation of a collection complexity

#### Returns

`number`

complexity

#### Inherited from

`SelectableCanvas.complexity`

#### Source

src/Collection.ts:165

***

### contains()

> **contains**(`object`, `deep`?): `boolean`

Returns true if collection contains an object.\
**Prefer using [FabricObject#isDescendantOf](../../../../api/classes/fabricobject/#isdescendantof) for performance reasons**
instead of `a.contains(b)` use `b.isDescendantOf(a)`

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to check against

• **deep?**: `boolean`

`true` to check all descendants, `false` to check only `_objects`

#### Returns

`boolean`

`true` if collection contains an object

#### Inherited from

`SelectableCanvas.contains`

#### Source

src/Collection.ts:148

***

### createSVGClipPathMarkup()

> **createSVGClipPathMarkup**(`options`): `string`

#### Parameters

• **options**: [`TSVGExportOptions`](../type-aliases/TSVGExportOptions.md)

#### Returns

`string`

#### Inherited from

`SelectableCanvas.createSVGClipPathMarkup`

#### Source

src/canvas/StaticCanvas.ts:1082

***

### createSVGFontFacesMarkup()

> **createSVGFontFacesMarkup**(): `string`

Creates markup containing SVG font faces,
font URLs for font faces must be collected by developers
and are not extracted from the DOM by fabricjs

#### Returns

`string`

#### Inherited from

`SelectableCanvas.createSVGFontFacesMarkup`

#### Source

src/canvas/StaticCanvas.ts:1125

***

### createSVGRefElementsMarkup()

> **createSVGRefElementsMarkup**(): `string`

Creates markup containing SVG referenced elements like patterns, gradients etc.

#### Returns

`string`

#### Inherited from

`SelectableCanvas.createSVGRefElementsMarkup`

#### Source

src/canvas/StaticCanvas.ts:1097

***

### destroy()

> **destroy**(): `void`

clear [textEditingManager](../../../../api/classes/canvas/#texteditingmanager)

#### Returns

`void`

#### Overrides

`SelectableCanvas.destroy`

#### Source

src/canvas/Canvas.ts:1527

***

### discardActiveObject()

> **discardActiveObject**(`e`?): `this is Object`

Discards currently active object and fire events. If the function is called by fabric
as a consequence of a mouse event, the event is passed as a parameter and
sent to the fire function for the custom events. When used as a method the
e param does not have any application.

#### Parameters

• **e?**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

#### Returns

`this is Object`

true if the active object has been discarded

#### Inherited from

`SelectableCanvas.discardActiveObject`

#### Source

src/canvas/SelectableCanvas.ts:1176

***

### dispose()

> **dispose**(): `Promise`\<`boolean`\>

Waits until rendering has settled to destroy the canvas

#### Returns

`Promise`\<`boolean`\>

a promise resolving to `true` once the canvas has been destroyed or to `false` if the canvas has was already destroyed

#### Inherited from

`SelectableCanvas.dispose`

#### Throws

if aborted by a consequent call

#### Source

src/canvas/StaticCanvas.ts:1455

***

### drawClipPathOnCanvas()

> **drawClipPathOnCanvas**(`ctx`, `clipPath`): `void`

Paint the cached clipPath on the lowerCanvasEl

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **clipPath**: `TCachedFabricObject`

#### Returns

`void`

#### Inherited from

`SelectableCanvas.drawClipPathOnCanvas`

#### Source

src/canvas/StaticCanvas.ts:612

***

### drawControls()

> **drawControls**(`ctx`): `void`

Draws objects' controls (borders/controls)

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render controls on

#### Returns

`void`

#### Inherited from

`SelectableCanvas.drawControls`

#### Source

src/canvas/SelectableCanvas.ts:1284

***

### endCurrentTransform()

> **endCurrentTransform**(`e`?): `void`

End the current transform.
You don't usually need to call this method unless you are interrupting a user initiated transform
because of some other event ( a press of key combination, or something that block the user UX )

#### Parameters

• **e?**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

send the mouse event that generate the finalize down, so it can be used in the event

#### Returns

`void`

#### Inherited from

`SelectableCanvas.endCurrentTransform`

#### Source

src/canvas/SelectableCanvas.ts:1196

***

### findNewLowerIndex()

> **findNewLowerIndex**(`object`, `idx`, `intersecting`?): `number`

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

• **idx**: `number`

• **intersecting?**: `boolean`

#### Returns

`number`

#### Inherited from

`SelectableCanvas.findNewLowerIndex`

#### Source

src/Collection.ts:272

***

### findNewUpperIndex()

> **findNewUpperIndex**(`object`, `idx`, `intersecting`?): `number`

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

• **idx**: `number`

• **intersecting?**: `boolean`

#### Returns

`number`

#### Inherited from

`SelectableCanvas.findNewUpperIndex`

#### Source

src/Collection.ts:295

***

### findTarget()

> **findTarget**(`e`): `undefined` \| [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Method that determines what object we are clicking on
11/09/2018 TODO: would be cool if findTarget could discern between being a full target
or the outside part of the corner.

#### Parameters

• **e**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

mouse event

#### Returns

`undefined` \| [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

the target found

#### Inherited from

`SelectableCanvas.findTarget`

#### Source

src/canvas/SelectableCanvas.ts:698

***

### fire()

> **fire**\<`K`\>(`eventName`, `options`?): `void`

Fires event with an optional options object

#### Type parameters

• **K** extends keyof [`CanvasEvents`](../interfaces/CanvasEvents.md)

#### Parameters

• **eventName**: `K`

Event name to fire

• **options?**: [`CanvasEvents`](../interfaces/CanvasEvents.md)\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

`SelectableCanvas.fire`

#### Source

src/Observable.ts:159

***

### forEachObject()

> **forEachObject**(`callback`): `void`

Executes given function for each object in this group
A simple shortcut for getObjects().forEach, before es6 was more complicated,
now is just a shortcut.

#### Parameters

• **callback**

Callback invoked with current object as first argument,
                  index - as second and an array of all objects - as third.

#### Returns

`void`

#### Inherited from

`SelectableCanvas.forEachObject`

#### Source

src/Collection.ts:91

***

### get()

> **get**(`property`): `any`

Basic getter

#### Parameters

• **property**: `string`

Property name

#### Returns

`any`

value of a property

#### Inherited from

`SelectableCanvas.get`

#### Source

src/CommonMethods.ts:59

***

### getActiveObject()

> **getActiveObject**(): `undefined` \| [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Returns currently active object

#### Returns

`undefined` \| [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

active object

#### Inherited from

`SelectableCanvas.getActiveObject`

#### Source

src/canvas/SelectableCanvas.ts:1019

***

### getActiveObjects()

> **getActiveObjects**(): [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Returns an array with the current selected objects

#### Returns

[`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

active objects array

#### Inherited from

`SelectableCanvas.getActiveObjects`

#### Source

src/canvas/SelectableCanvas.ts:1027

***

### ~~getCenter()~~

> **getCenter**(): `Object`

Returns coordinates of a center of canvas.
Returned value is an object with top and left properties

:::caution[Deprecated]
migrate to `getCenterPoint`
:::

#### Returns

`Object`

object with "top" and "left" number values

##### ~~left~~

> **left**: `number`

##### ~~top~~

> **top**: `number`

#### Inherited from

`SelectableCanvas.getCenter`

:::caution[Deprecated]
migrate to `getCenterPoint`
:::

#### Source

src/canvas/StaticCanvas.ts:718

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](Point.md)

Returns coordinates of a center of canvas.

#### Returns

[`Point`](Point.md)

#### Inherited from

`SelectableCanvas.getCenterPoint`

#### Source

src/canvas/StaticCanvas.ts:729

***

### getContext()

> **getContext**(): `CanvasRenderingContext2D`

Returns context of canvas where objects are drawn

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

`SelectableCanvas.getContext`

#### Source

src/canvas/StaticCanvas.ts:474

***

### getElement()

> **getElement**(): `HTMLCanvasElement`

Returns &lt;canvas> element corresponding to this instance

#### Returns

`HTMLCanvasElement`

#### Inherited from

`SelectableCanvas.getElement`

#### Source

src/canvas/StaticCanvas.ts:458

***

### getHeight()

> **getHeight**(): `number`

Returns canvas height (in px)

#### Returns

`number`

#### Inherited from

`SelectableCanvas.getHeight`

#### Source

src/canvas/StaticCanvas.ts:271

***

### getObjects()

> **getObjects**(...`types`?): [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Returns an array of children objects of this instance

#### Parameters

• ...**types?**: `string`[]

When specified, only objects of these types are returned

#### Returns

[`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Inherited from

`SelectableCanvas.getObjects`

#### Source

src/Collection.ts:108

***

### ~~getPointer()~~

> **getPointer**(`e`, `fromViewport`?): [`Point`](Point.md)

Returns pointer relative to canvas.

:::caution[Deprecated]
This method is deprecated since v6 to protect you from misuse.
Use [getViewportPoint](Canvas.md#getviewportpoint) or [getScenePoint](Canvas.md#getscenepoint) instead.
:::

#### Parameters

• **e**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

• **fromViewport?**: `boolean`= `false`

whether to return the point from the viewport or in the scene

#### Returns

[`Point`](Point.md)

#### Inherited from

`SelectableCanvas.getPointer`

:::caution[Deprecated]
This method is deprecated since v6 to protect you from misuse.
Use [getViewportPoint](Canvas.md#getviewportpoint) or [getScenePoint](Canvas.md#getscenepoint) instead.
:::

#### Source

src/canvas/SelectableCanvas.ts:924

***

### getScenePoint()

> **getScenePoint**(`e`): [`Point`](Point.md)

#### Parameters

• **e**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

#### Returns

[`Point`](Point.md)

point existing in the scene (the same plane as the plane [FabricObject#getCenterPoint](FabricObject.md#getcenterpoint) exists in).
This means that changes to the [viewportTransform](StaticCanvas.md#viewporttransform) do not change the values of the point,
however, from the viewer's perspective, the point is changed.

#### Inherited from

`SelectableCanvas.getScenePoint`

#### Example

```ts
const viewportPoint = sendPointToPlane(
 this.getScenePoint(e),
 canvas.viewportTransform
);
```

#### Source

src/canvas/SelectableCanvas.ts:907

***

### getSelectionContext()

> **getSelectionContext**(): `CanvasRenderingContext2D`

Returns context of canvas where object selection is drawn

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

`SelectableCanvas.getSelectionContext`

#### Alias

#### Source

src/canvas/SelectableCanvas.ts:1003

***

### getSelectionElement()

> **getSelectionElement**(): `HTMLCanvasElement`

Returns &lt;canvas> element on which object selection is drawn

#### Returns

`HTMLCanvasElement`

#### Inherited from

`SelectableCanvas.getSelectionElement`

#### Source

src/canvas/SelectableCanvas.ts:1011

***

### getTopContext()

> **getTopContext**(): `CanvasRenderingContext2D`

Returns context of top canvas where interactions are drawn

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

`SelectableCanvas.getTopContext`

#### Source

src/canvas/SelectableCanvas.ts:994

***

### getViewportPoint()

> **getViewportPoint**(`e`): [`Point`](Point.md)

#### Parameters

• **e**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

#### Returns

[`Point`](Point.md)

point existing in the same plane as the HTMLCanvasElement,
`(0, 0)` being the top left corner of the HTMLCanvasElement.
This means that changes to the [viewportTransform](StaticCanvas.md#viewporttransform) do not change the values of the point
and it remains unchanged from the viewer's perspective.

#### Inherited from

`SelectableCanvas.getViewportPoint`

#### Example

```ts
const scenePoint = sendPointToPlane(
 this.getViewportPoint(e),
 undefined,
 canvas.viewportTransform
);
```

#### Source

src/canvas/SelectableCanvas.ts:888

***

### getVpCenter()

> **getVpCenter**(): [`Point`](Point.md)

Calculate the point in canvas that correspond to the center of actual viewport.

#### Returns

[`Point`](Point.md)

vpCenter, viewport center

#### Inherited from

`SelectableCanvas.getVpCenter`

#### Source

src/canvas/StaticCanvas.ts:796

***

### getWidth()

> **getWidth**(): `number`

Returns canvas width (in px)

#### Returns

`number`

#### Inherited from

`SelectableCanvas.getWidth`

#### Source

src/canvas/StaticCanvas.ts:263

***

### getZoom()

> **getZoom**(): `number`

Returns canvas zoom level

#### Returns

`number`

#### Inherited from

`SelectableCanvas.getZoom`

#### Source

src/canvas/StaticCanvas.ts:373

***

### insertAt()

> **insertAt**(`index`, ...`objects`): `number`

#### Parameters

• **index**: `number`

• ...**objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Returns

`number`

#### Inherited from

`SelectableCanvas.insertAt`

#### Source

src/canvas/StaticCanvas.ts:205

***

### isEmpty()

> **isEmpty**(): `boolean`

Returns true if collection contains no objects

#### Returns

`boolean`

true if collection is empty

#### Inherited from

`SelectableCanvas.isEmpty`

#### Source

src/Collection.ts:128

***

### isTargetTransparent()

> **isTargetTransparent**(`target`, `x`, `y`): `boolean`

Returns true if object is transparent at a certain location
Clarification: this is `is target transparent at location X or are controls there`

#### Parameters

• **target**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to check

• **x**: `number`

Left coordinate in viewport space

• **y**: `number`

Top coordinate in viewport space

#### Returns

`boolean`

#### Inherited from

`SelectableCanvas.isTargetTransparent`

#### TODO

this seems dumb that we treat controls with transparency. we can find controls
programmatically without painting them, the cache canvas optimization is always valid

#### Source

src/canvas/SelectableCanvas.ts:430

***

### item()

> **item**(`index`): [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Returns object at specified index

#### Parameters

• **index**: `number`

#### Returns

[`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

object at index

#### Inherited from

`SelectableCanvas.item`

#### Source

src/Collection.ts:120

***

### loadFromJSON()

> **loadFromJSON**(`json`, `reviver`?, `options`?): `Promise`\<[`Canvas`](Canvas.md)\>

Populates canvas with data from the specified JSON.
JSON format must conform to the one of fabric.Canvas#toJSON

**IMPORTANT**: It is recommended to abort loading tasks before calling this method to prevent race conditions and unnecessary networking

#### Parameters

• **json**: `string` \| `Record`\<`string`, `any`\>

JSON string or object

• **reviver?**

Method for further parsing of JSON elements, called after each fabric object created.

• **options?**: [`Abortable`](../type-aliases/Abortable.md)= `{}`

options

#### Returns

`Promise`\<[`Canvas`](Canvas.md)\>

instance

#### Inherited from

`SelectableCanvas.loadFromJSON`

#### Tutorial

[http://fabricjs.com/fabric-intro-part-3#deserialization](http://fabricjs.com/fabric-intro-part-3#deserialization)

#### See

[demo](http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle)

#### Example

```ts
canvas.loadFromJSON(json).then((canvas) => canvas.requestRenderAll());
```

#### Example

```ts
canvas.loadFromJSON(json, function(o, object) {
  // `o` = json object
  // `object` = fabric.Object instance
  // ... do some stuff ...
}).then((canvas) => {
  ... canvas is restored, add your code.
});
```

#### Source

src/canvas/StaticCanvas.ts:1278

***

### moveObjectTo()

> **moveObjectTo**(`object`, `index`): `boolean`

Moves an object to specified level in stack of drawn objects

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to send

• **index**: `number`

Position to move to

#### Returns

`boolean`

true if change occurred

#### Inherited from

`SelectableCanvas.moveObjectTo`

#### Source

src/Collection.ts:262

***

### off()

#### off(eventName, handler)

> **off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

##### Type parameters

• **K** extends keyof [`CanvasEvents`](../interfaces/CanvasEvents.md)

##### Parameters

• **eventName**: `K`

event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`any`\>

event listener to unsubscribe

##### Returns

`void`

##### Inherited from

`SelectableCanvas.off`

##### Source

src/Observable.ts:120

#### off(handlers)

> **off**(`handlers`): `void`

unsubscribe event listeners

##### Parameters

• **handlers**: `EventRegistryObject`\<[`CanvasEvents`](../interfaces/CanvasEvents.md)\>

handlers key/value pairs (eg. \{'after:render': handler, 'selection:cleared': handler\})

##### Returns

`void`

##### Inherited from

`SelectableCanvas.off`

##### Source

src/Observable.ts:125

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

`SelectableCanvas.off`

##### Source

src/Observable.ts:129

***

### on()

#### on(eventName, handler)

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

##### Type parameters

• **K** extends keyof [`CanvasEvents`](../interfaces/CanvasEvents.md)

• **E** extends [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<`WheelEvent`\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `InEvent` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `OutEvent` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](../interfaces/DragEventData.md) \| [`DragEventData`](../interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](../interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](../interfaces/DropEventData.md) \| `SimpleEventHandler`\<`Event`\> \| [`BasicTransformEvent`](../interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object` \| [`ModifiedEvent`](../interfaces/ModifiedEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| [`LayoutBeforeEvent`](../type-aliases/LayoutBeforeEvent.md) & `Object` \| [`LayoutAfterEvent`](../type-aliases/LayoutAfterEvent.md) & `Object` \| [`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object` \| `Partial`\<[`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object` \| `Partial`\<[`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object` \| `Partial`\<[`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object` \| `Partial`\<[`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object`

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Inherited from

`SelectableCanvas.on`

##### Alias

on

##### Source

src/Observable.ts:23

#### on(handlers)

> **on**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`CanvasEvents`](../interfaces/CanvasEvents.md)\>

##### Returns

`VoidFunction`

##### Inherited from

`SelectableCanvas.on`

##### Source

src/Observable.ts:27

***

### once()

#### once(eventName, handler)

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

##### Type parameters

• **K** extends keyof [`CanvasEvents`](../interfaces/CanvasEvents.md)

• **E** extends [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<`WheelEvent`\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `InEvent` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `OutEvent` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](../interfaces/DragEventData.md) \| [`DragEventData`](../interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](../interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](../interfaces/DropEventData.md) \| `SimpleEventHandler`\<`Event`\> \| [`BasicTransformEvent`](../interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object` \| [`ModifiedEvent`](../interfaces/ModifiedEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| [`LayoutBeforeEvent`](../type-aliases/LayoutBeforeEvent.md) & `Object` \| [`LayoutAfterEvent`](../type-aliases/LayoutAfterEvent.md) & `Object` \| [`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object` \| `Partial`\<[`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object` \| `Partial`\<[`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object` \| `Partial`\<[`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object` \| `Partial`\<[`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object`

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Inherited from

`SelectableCanvas.once`

##### Alias

once

##### Source

src/Observable.ts:62

#### once(handlers)

> **once**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`CanvasEvents`](../interfaces/CanvasEvents.md)\>

##### Returns

`VoidFunction`

##### Inherited from

`SelectableCanvas.once`

##### Source

src/Observable.ts:66

***

### relativePan()

> **relativePan**(`point`): `void`

Pans viewpoint relatively

#### Parameters

• **point**: [`Point`](Point.md)

(position vector) to move by

#### Returns

`void`

#### Inherited from

`SelectableCanvas.relativePan`

#### Source

src/canvas/StaticCanvas.ts:445

***

### remove()

> **remove**(...`objects`): [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Parameters

• ...**objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Returns

[`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Inherited from

`SelectableCanvas.remove`

#### Source

src/canvas/StaticCanvas.ts:211

***

### removeListeners()

> **removeListeners**(): `void`

Removes all event listeners

#### Returns

`void`

#### Source

src/canvas/Canvas.ts:202

***

### renderAll()

> **renderAll**(): `void`

Renders both the top canvas and the secondary container canvas.

#### Returns

`void`

#### Inherited from

`SelectableCanvas.renderAll`

#### Source

src/canvas/SelectableCanvas.ts:358

***

### renderCanvas()

> **renderCanvas**(`ctx`, `objects`): `void`

Renders background, objects, overlay and controls.

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

to render

#### Returns

`void`

#### Inherited from

`SelectableCanvas.renderCanvas`

#### Source

src/canvas/StaticCanvas.ts:565

***

### renderTop()

> **renderTop**(): `void`

Method to render only the top canvas.
Also used to render the group selection box.
Does not render text selection.

#### Returns

`void`

#### Inherited from

`SelectableCanvas.renderTop`

#### Source

src/canvas/SelectableCanvas.ts:398

***

### renderTopLayer()

> **renderTopLayer**(`ctx`): `void`

text selection is rendered by the active text instance during the rendering cycle

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

`SelectableCanvas.renderTopLayer`

#### Source

src/canvas/SelectableCanvas.ts:379

***

### requestRenderAll()

> **requestRenderAll**(): `void`

Append a renderAll request to next animation frame.
unless one is already in progress, in that case nothing is done
a boolean flag will avoid appending more.

#### Returns

`void`

#### Inherited from

`SelectableCanvas.requestRenderAll`

#### Source

src/canvas/StaticCanvas.ts:521

***

### searchPossibleTargets()

> **searchPossibleTargets**(`objects`?, `pointer`?): `undefined` \| [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Function used to search inside objects an object that contains pointer in bounding box or that contains pointerOnCanvas when painted

#### Parameters

• **objects?**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

objects array to look into

• **pointer?**: [`Point`](Point.md)

coordinates from viewport to check.

#### Returns

`undefined` \| [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

**top most object on screen** that contains pointer

#### Inherited from

`SelectableCanvas.searchPossibleTargets`

#### See

_searchPossibleTargets

#### Source

src/canvas/SelectableCanvas.ts:858

***

### sendObjectBackwards()

> **sendObjectBackwards**(`object`, `intersecting`?): `boolean`

Moves an object or a selection down in stack of drawn objects
An optional parameter, `intersecting` allows to move the object in behind
the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to send

• **intersecting?**: `boolean`

If `true`, send object behind next lower intersecting object

#### Returns

`boolean`

true if change occurred

#### Inherited from

`SelectableCanvas.sendObjectBackwards`

#### Source

src/Collection.ts:214

***

### sendObjectToBack()

> **sendObjectToBack**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the bottom of the stack of drawn objects

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to send to back

#### Returns

`boolean`

true if change occurred

#### Inherited from

`SelectableCanvas.sendObjectToBack`

#### Source

src/Collection.ts:178

***

### set()

> **set**(`key`, `value`?): [`Canvas`](Canvas.md)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `any`\>

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`Canvas`](Canvas.md)

#### Inherited from

`SelectableCanvas.set`

#### Source

src/CommonMethods.ts:29

***

### setActiveObject()

> **setActiveObject**(`object`, `e`?): `boolean`

Sets given object as the only active object on canvas

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to set as an active one

• **e?**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

Event (passed along when firing "object:selected")

#### Returns

`boolean`

true if the object has been selected

#### Inherited from

`SelectableCanvas.setActiveObject`

#### Source

src/canvas/SelectableCanvas.ts:1101

***

### setCursor()

> **setCursor**(`value`): `void`

Set the cursor type of the canvas element

#### Parameters

• **value**: `string`

Cursor type of the canvas element.

#### Returns

`void`

#### Inherited from

`SelectableCanvas.setCursor`

#### See

http://www.w3.org/TR/css3-ui/#cursor

#### Source

src/canvas/SelectableCanvas.ts:646

***

### setDimensions()

#### setDimensions(dimensions, options)

> **setDimensions**(`dimensions`, `options`?): `void`

Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)

##### Parameters

• **dimensions**: `Partial`\<`CSSDimensions`\>

Object with width/height properties

• **options?**

Options object

• **options\.backstoreOnly?**: `false`

Set the given dimensions only as canvas backstore dimensions

• **options\.cssOnly?**: `true`

Set the given dimensions only as css dimensions

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setDimensions`

##### Source

src/canvas/StaticCanvas.ts:350

#### setDimensions(dimensions, options)

> **setDimensions**(`dimensions`, `options`?): `void`

##### Parameters

• **dimensions**: `Partial`\<[`TSize`](../type-aliases/TSize.md)\>

• **options?**

• **options\.backstoreOnly?**: `true`

• **options\.cssOnly?**: `false`

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setDimensions`

##### Source

src/canvas/StaticCanvas.ts:354

#### setDimensions(dimensions, options)

> **setDimensions**(`dimensions`, `options`?): `void`

##### Parameters

• **dimensions**: `Partial`\<[`TSize`](../type-aliases/TSize.md)\>

• **options?**: `undefined`

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setDimensions`

##### Source

src/canvas/StaticCanvas.ts:358

***

### setHeight()

#### setHeight(value, options)

> **setHeight**(`value`, `options`?): `void`

s
Sets height of this canvas instance

:::caution[Deprecated]
will be removed in 7.0
:::

##### Parameters

• **value**: `number`

Value to set height to

• **options?**

Options object

• **options\.backstoreOnly?**: `true`

Set the given dimensions only as canvas backstore dimensions

• **options\.cssOnly?**: `false`

Set the given dimensions only as css dimensions

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setHeight`

:::caution[Deprecated]
will be removed in 7.0
:::

##### Source

src/canvas/StaticCanvas.ts:303

#### setHeight(value, options)

> **setHeight**(`value`, `options`?): `void`

##### Parameters

• **value**: `string` \| `number`

• **options?**

• **options\.backstoreOnly?**: `false`

• **options\.cssOnly?**: `true`

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setHeight`

##### Source

src/canvas/StaticCanvas.ts:307

***

### setViewportTransform()

> **setViewportTransform**(`vpt`): `void`

Sets viewport transformation of this canvas instance

#### Parameters

• **vpt**: [`TMat2D`](../type-aliases/TMat2D.md)

a Canvas 2D API transform matrix

#### Returns

`void`

#### Inherited from

`SelectableCanvas.setViewportTransform`

#### Source

src/canvas/SelectableCanvas.ts:1236

***

### setWidth()

#### setWidth(value, options)

> **setWidth**(`value`, `options`?): `void`

Sets width of this canvas instance

:::caution[Deprecated]
will be removed in 7.0
:::

##### Parameters

• **value**: `number`

Value to set width to

• **options?**

Options object

• **options\.backstoreOnly?**: `true`

Set the given dimensions only as canvas backstore dimensions

• **options\.cssOnly?**: `false`

Set the given dimensions only as css dimensions

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setWidth`

:::caution[Deprecated]
will be removed in 7.0
:::

##### Source

src/canvas/StaticCanvas.ts:283

#### setWidth(value, options)

> **setWidth**(`value`, `options`?): `void`

##### Parameters

• **value**: `string` \| `number`

• **options?**

• **options\.backstoreOnly?**: `false`

• **options\.cssOnly?**: `true`

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setWidth`

##### Source

src/canvas/StaticCanvas.ts:287

***

### setZoom()

> **setZoom**(`value`): `void`

Sets zoom level of this canvas instance

#### Parameters

• **value**: `number`

to set zoom to, less than 1 zooms out

#### Returns

`void`

#### Inherited from

`SelectableCanvas.setZoom`

#### Source

src/canvas/StaticCanvas.ts:426

***

### size()

> **size**(): `number`

Returns a size of a collection (i.e: length of an array containing its objects)

#### Returns

`number`

Collection size

#### Inherited from

`SelectableCanvas.size`

#### Source

src/Collection.ts:136

***

### toCanvasElement()

> **toCanvasElement**(`multiplier`?, `options`?): `HTMLCanvasElement`

Create a new HTMLCanvas element painted with the current canvas content.
No need to resize the actual one or repaint it.
Will transfer object ownership to a new canvas, paint it, and set everything back.
This is an intermediary step used to get to a dataUrl but also it is useful to
create quick image copies of a canvas without passing for the dataUrl string

#### Parameters

• **multiplier?**: `number`= `1`

a zoom factor.

• **options?**: [`TToCanvasElementOptions`](../type-aliases/TToCanvasElementOptions.md)= `undefined`

Cropping informations

#### Returns

`HTMLCanvasElement`

#### Inherited from

`SelectableCanvas.toCanvasElement`

#### Source

src/canvas/StaticCanvas.ts:1415

***

### toDataURL()

> **toDataURL**(`options`?): `string`

Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately

#### Parameters

• **options?**: [`TDataUrlOptions`](../type-aliases/TDataUrlOptions.md)= `undefined`

Options object

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

#### Inherited from

`SelectableCanvas.toDataURL`

#### See

[demo](https://jsfiddle.net/xsjua1rd/)

#### Example

```ts
var dataURL = canvas.toDataURL({
  format: 'jpeg',
  quality: 0.8
});
```

#### Example

```ts
var dataURL = canvas.toDataURL({
  format: 'png',
  left: 100,
  top: 100,
  width: 200,
  height: 200
});
```

#### Example

```ts
var dataURL = canvas.toDataURL({
  format: 'png',
  multiplier: 2
});
```

#### Example

```ts
var myObject;
var dataURL = canvas.toDataURL({
  filter: (object) => object.isContainedWithinObject(myObject) || object.intersectsWithObject(myObject)
});
```

#### Source

src/canvas/StaticCanvas.ts:1384

***

### toDatalessJSON()

> **toDatalessJSON**(`propertiesToInclude`?): `any`

Returns dataless JSON representation of canvas

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

json string

#### Inherited from

`SelectableCanvas.toDatalessJSON`

#### Source

src/canvas/StaticCanvas.ts:819

***

### toDatalessObject()

> **toDatalessObject**(`propertiesToInclude`?): `any`

Returns dataless object representation of canvas

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

object representation of an instance

#### Inherited from

`SelectableCanvas.toDatalessObject`

#### Source

src/canvas/StaticCanvas.ts:856

***

### toJSON()

> **toJSON**(): `any`

Returns Object representation of canvas
this alias is provided because if you call JSON.stringify on an instance,
the toJSON object will be invoked if it exists.
Having a toJSON method means you can do JSON.stringify(myCanvas)

#### Returns

`any`

JSON compatible object

#### Inherited from

`SelectableCanvas.toJSON`

#### Tutorial

[http://fabricjs.com/fabric-intro-part-3#serialization](http://fabricjs.com/fabric-intro-part-3#serialization)

#### See

[demo](http://jsfiddle.net/fabricjs/pec86/|jsFiddle)

#### Example

```ts
var json = canvas.toJSON();
```

#### Example

```ts
var json = canvas.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY']);
```

#### Example

```ts
var json = canvas.toJSON();
```

#### Source

src/canvas/StaticCanvas.ts:847

***

### toObject()

> **toObject**(`propertiesToInclude`?): `any`

Returns object representation of canvas

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

object representation of an instance

#### Inherited from

`SelectableCanvas.toObject`

#### Source

src/canvas/StaticCanvas.ts:828

***

### toSVG()

> **toSVG**(`options`?, `reviver`?): `string`

Returns SVG representation of canvas

#### Parameters

• **options?**: [`TSVGExportOptions`](../type-aliases/TSVGExportOptions.md)= `{}`

Options object for SVG output

• **reviver?**: [`TSVGReviver`](../type-aliases/TSVGReviver.md)

Method for further parsing of svg elements, called after each fabric object converted into svg representation.

#### Returns

`string`

SVG string

#### Inherited from

`SelectableCanvas.toSVG`

#### Function

#### Tutorial

[http://fabricjs.com/fabric-intro-part-3#serialization](http://fabricjs.com/fabric-intro-part-3#serialization)

#### See

[demo](http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle)

#### Example

```ts
var svg = canvas.toSVG();
```

#### Example

```ts
var svg = canvas.toSVG({suppressPreamble: true});
```

#### Example

```ts
var svg = canvas.toSVG({
  viewBox: {
    x: 100,
    y: 100,
    width: 200,
    height: 300
  }
});
```

#### Example

```ts
var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
```

#### Example

```ts
var svg = canvas.toSVG(null, function(svg) {
  return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
});
```

#### Source

src/canvas/StaticCanvas.ts:995

***

### toString()

> **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

string representation of an instance

#### Inherited from

`SelectableCanvas.toString`

#### Source

src/canvas/StaticCanvas.ts:1514

***

### toggle()

> **toggle**(`property`): [`Canvas`](Canvas.md)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`Canvas`](Canvas.md)

#### Inherited from

`SelectableCanvas.toggle`

#### Source

src/CommonMethods.ts:46

***

### viewportCenterObject()

> **viewportCenterObject**(`object`): `void`

Centers object vertically and horizontally in the viewport

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to center vertically and horizontally

#### Returns

`void`

#### Inherited from

`SelectableCanvas.viewportCenterObject`

#### Source

src/canvas/StaticCanvas.ts:766

***

### viewportCenterObjectH()

> **viewportCenterObjectH**(`object`): `void`

Centers object horizontally in the viewport, object.top is unchanged

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to center vertically and horizontally

#### Returns

`void`

#### Inherited from

`SelectableCanvas.viewportCenterObjectH`

#### Source

src/canvas/StaticCanvas.ts:774

***

### viewportCenterObjectV()

> **viewportCenterObjectV**(`object`): `void`

Centers object Vertically in the viewport, object.top is unchanged

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to center vertically and horizontally

#### Returns

`void`

#### Inherited from

`SelectableCanvas.viewportCenterObjectV`

#### Source

src/canvas/StaticCanvas.ts:785

***

### zoomToPoint()

> **zoomToPoint**(`point`, `value`): `void`

Sets zoom level of this canvas instance, the zoom centered around point
meaning that following zoom to point with the same point will have the visual
effect of the zoom originating from that point. The point won't move.
It has nothing to do with canvas center or visual center of the viewport.

#### Parameters

• **point**: [`Point`](Point.md)

to zoom with respect to

• **value**: `number`

to set zoom to, less than 1 zooms out

#### Returns

`void`

#### Inherited from

`SelectableCanvas.zoomToPoint`

#### Source

src/canvas/StaticCanvas.ts:409

***

### getDefaults()

> **`static`** **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

`SelectableCanvas.getDefaults`

#### Source

src/canvas/SelectableCanvas.ts:276
