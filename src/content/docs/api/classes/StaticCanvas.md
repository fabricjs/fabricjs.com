---
editUrl: false
next: false
prev: false
title: "StaticCanvas"
---

Static canvas class

## See

[demo](http://fabricjs.com/static_canvas|StaticCanvas)

## Fires

before:render

## Fires

after:render

## Fires

canvas:cleared

## Fires

object:added

## Fires

object:removed

## Extends

- `Collection`\<() => `CommonMethods`\<[`CanvasEvents`](../interfaces/CanvasEvents.md)\>, `this`\> & `CommonMethods`\<[`CanvasEvents`](../interfaces/CanvasEvents.md), `this`\>

## Type parameters

• **EventSpec** extends [`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md) = [`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md)

## Implements

- [`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md)

## Constructors

### new StaticCanvas(el, options)

> **new StaticCanvas**\<`EventSpec`\>(`el`?, `options`?): [`StaticCanvas`](StaticCanvas.md)\<`EventSpec`\>

#### Parameters

• **el?**: `string` \| `HTMLCanvasElement`

• **options?**: [`TOptions`](../type-aliases/TOptions.md)\<[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md)\>= `{}`

#### Returns

[`StaticCanvas`](StaticCanvas.md)\<`EventSpec`\>

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>).constructor`

#### Source

src/canvas/StaticCanvas.ts:176

## Properties

### \_objects

> **\_objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] = `[]`

#### TODO

needs to end up in the constructor too

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>)._objects`

#### Source

src/Collection.ts:21

***

### \_offset

> **\_offset**: `Object`

#### left

> **left**: `number`

#### top

> **top**: `number`

#### Source

src/canvas/StaticCanvas.ts:158

***

### allowTouchScrolling

> **allowTouchScrolling**: `boolean`

#### Todo

move to Canvas

#### Implementation of

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`allowTouchScrolling`](../interfaces/StaticCanvasOptions.md#allowtouchscrolling)

#### Source

src/canvas/StaticCanvas.ts:122

***

### backgroundColor

> **backgroundColor**: `string` \| [`TFiller`](../type-aliases/TFiller.md)

Background color of canvas instance.

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`backgroundColor`](../interfaces/StaticCanvasOptions.md#backgroundcolor)

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

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`backgroundImage`](../interfaces/StaticCanvasOptions.md#backgroundimage)

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

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`backgroundVpt`](../interfaces/StaticCanvasOptions.md#backgroundvpt)

#### Source

src/canvas/StaticCanvas.ts:96

***

### clipPath?

> **`optional`** **clipPath**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Implementation of

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`clipPath`](../interfaces/StaticCanvasOptions.md#clippath)

#### Source

src/canvas/StaticCanvas.ts:104

***

### controlsAboveOverlay

> **controlsAboveOverlay**: `boolean`

#### Todo

move to Canvas

#### Implementation of

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`controlsAboveOverlay`](../interfaces/StaticCanvasOptions.md#controlsaboveoverlay)

#### Source

src/canvas/StaticCanvas.ts:117

***

### destroyed?

> **`optional`** **destroyed**: `boolean`

If true the Canvas is in the process or has been disposed/destroyed.
No more rendering operation will be executed on this canvas.

#### Source

src/canvas/StaticCanvas.ts:149

***

### disposed?

> **`optional`** **disposed**: `boolean`

Started the process of disposing but not done yet.
WIll likely complete the render cycle already scheduled but stopping adding more.

#### Source

src/canvas/StaticCanvas.ts:156

***

### elements

> **elements**: [`StaticCanvasDOMManager`](StaticCanvasDOMManager.md)

#### Source

src/canvas/StaticCanvas.ts:162

***

### enableRetinaScaling

> **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`enableRetinaScaling`](../interfaces/StaticCanvasOptions.md#enableretinascaling)

#### Source

src/canvas/StaticCanvas.ts:111

***

### height

> **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Implementation of

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`height`](../interfaces/StaticCanvasOptions.md#height)

#### Source

src/canvas/StaticCanvas.ts:93

***

### imageSmoothingEnabled

> **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`imageSmoothingEnabled`](../interfaces/StaticCanvasOptions.md#imagesmoothingenabled)

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

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`includeDefaultValues`](../interfaces/StaticCanvasOptions.md#includedefaultvalues)

#### Source

src/canvas/StaticCanvas.ts:106

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

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`overlayColor`](../interfaces/StaticCanvasOptions.md#overlaycolor)

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

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`overlayImage`](../interfaces/StaticCanvasOptions.md#overlayimage)

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

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`overlayVpt`](../interfaces/StaticCanvasOptions.md#overlayvpt)

#### Source

src/canvas/StaticCanvas.ts:100

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

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`renderOnAddRemove`](../interfaces/StaticCanvasOptions.md#renderonaddremove)

#### Source

src/canvas/StaticCanvas.ts:109

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

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`skipOffscreen`](../interfaces/StaticCanvasOptions.md#skipoffscreen)

#### Source

src/canvas/StaticCanvas.ts:110

***

### svgViewportTransformation

> **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`svgViewportTransformation`](../interfaces/StaticCanvasOptions.md#svgviewporttransformation)

#### Source

src/canvas/StaticCanvas.ts:956

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

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`viewportTransform`](../interfaces/StaticCanvasOptions.md#viewporttransform)

#### Source

src/canvas/StaticCanvas.ts:124

***

### vptCoords

> **vptCoords**: [`TCornerPoint`](../type-aliases/TCornerPoint.md)

The viewport bounding box in scene plane coordinates, see [calcViewportBoundaries](../../../../api/classes/staticcanvas/#calcviewportboundaries)

#### Source

src/canvas/StaticCanvas.ts:129

***

### width

> **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Implementation of

[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md).[`width`](../interfaces/StaticCanvasOptions.md#width)

#### Source

src/canvas/StaticCanvas.ts:92

***

### ownDefaults

> **`static`** **ownDefaults**: [`TOptions`](../type-aliases/TOptions.md)\<[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md)\> = `staticCanvasDefaults`

#### Source

src/canvas/StaticCanvas.ts:164

## Accessors

### contextContainer

> **`get`** **contextContainer**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Source

src/canvas/StaticCanvas.ts:140

***

### lowerCanvasEl

> **`get`** **lowerCanvasEl**(): `HTMLCanvasElement`

A reference to the canvas actual HTMLCanvasElement.
Can be use to read the raw pixels, but never write or manipulate

#### Returns

`HTMLCanvasElement`

#### Source

src/canvas/StaticCanvas.ts:136

## Methods

### \_onObjectAdded()

> **\_onObjectAdded**(`obj`): `void`

#### Parameters

• **obj**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`void`

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>)._onObjectAdded`

#### Source

src/canvas/StaticCanvas.ts:217

***

### \_onObjectRemoved()

> **\_onObjectRemoved**(`obj`): `void`

#### Parameters

• **obj**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`void`

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>)._onObjectRemoved`

#### Source

src/canvas/StaticCanvas.ts:232

***

### \_onStackOrderChanged()

> **\_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>)._onStackOrderChanged`

#### Source

src/canvas/StaticCanvas.ts:238

***

### \_set()

> **\_set**(`key`, `value`): `void`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`void`

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>)._set`

#### Source

src/CommonMethods.ts:38

***

### absolutePan()

> **absolutePan**(`point`): `void`

Pan viewport so as to place point at top left corner of canvas

#### Parameters

• **point**: [`Point`](Point.md)

to move to

#### Returns

`void`

#### Source

src/canvas/StaticCanvas.ts:434

***

### add()

> **add**(...`objects`): `number`

#### Parameters

• ...**objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Returns

`number`

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>).add`

#### Source

src/canvas/StaticCanvas.ts:199

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

`createCollectionMixin(CommonMethods<CanvasEvents>).bringObjectForward`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).bringObjectToFront`

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

#### Source

src/canvas/StaticCanvas.ts:255

***

### calcViewportBoundaries()

> **calcViewportBoundaries**(): [`TCornerPoint`](../type-aliases/TCornerPoint.md)

Calculate the position of the 4 corner of canvas with current viewportTransform.
helps to determinate when an object is in the current rendering viewport

#### Returns

[`TCornerPoint`](../type-aliases/TCornerPoint.md)

#### Source

src/canvas/StaticCanvas.ts:531

***

### cancelRequestedRender()

> **cancelRequestedRender**(): `void`

#### Returns

`void`

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

#### Source

src/canvas/StaticCanvas.ts:747

***

### clear()

> **clear**(): `void`

Clears all contexts (background, main, top) of an instance

#### Returns

`void`

#### Source

src/canvas/StaticCanvas.ts:481

***

### clearContext()

> **clearContext**(`ctx`): `void`

Clears specified context of canvas element

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to clear

#### Returns

`void`

#### Source

src/canvas/StaticCanvas.ts:466

***

### clone()

> **clone**(`properties`?): `Promise`\<[`StaticCanvas`](StaticCanvas.md)\<`EventSpec`\>\>

Clones canvas instance

#### Parameters

• **properties?**: `string`[]

Array of properties to include in the cloned canvas and children

#### Returns

`Promise`\<[`StaticCanvas`](StaticCanvas.md)\<`EventSpec`\>\>

#### Source

src/canvas/StaticCanvas.ts:1329

***

### cloneWithoutData()

> **cloneWithoutData**(): [`StaticCanvas`](StaticCanvas.md)\<`EventSpec`\>

Clones canvas instance without cloning existing data.
This essentially copies canvas dimensions since loadFromJSON does not affect canvas size.

#### Returns

[`StaticCanvas`](StaticCanvas.md)\<`EventSpec`\>

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

`createCollectionMixin(CommonMethods<CanvasEvents>).collectObjects`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).complexity`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).contains`

#### Source

src/Collection.ts:148

***

### createSVGClipPathMarkup()

> **createSVGClipPathMarkup**(`options`): `string`

#### Parameters

• **options**: [`TSVGExportOptions`](../type-aliases/TSVGExportOptions.md)

#### Returns

`string`

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

#### Source

src/canvas/StaticCanvas.ts:1125

***

### createSVGRefElementsMarkup()

> **createSVGRefElementsMarkup**(): `string`

Creates markup containing SVG referenced elements like patterns, gradients etc.

#### Returns

`string`

#### Source

src/canvas/StaticCanvas.ts:1097

***

### dispose()

> **dispose**(): `Promise`\<`boolean`\>

Waits until rendering has settled to destroy the canvas

#### Returns

`Promise`\<`boolean`\>

a promise resolving to `true` once the canvas has been destroyed or to `false` if the canvas has was already destroyed

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

#### Source

src/canvas/StaticCanvas.ts:612

***

### drawControls()

> **drawControls**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Source

src/canvas/StaticCanvas.ts:556

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

`createCollectionMixin(CommonMethods<CanvasEvents>).findNewLowerIndex`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).findNewUpperIndex`

#### Source

src/Collection.ts:295

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

`createCollectionMixin(CommonMethods<CanvasEvents>).fire`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).forEachObject`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).get`

#### Source

src/CommonMethods.ts:59

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

#### Source

src/canvas/StaticCanvas.ts:729

***

### getContext()

> **getContext**(): `CanvasRenderingContext2D`

Returns context of canvas where objects are drawn

#### Returns

`CanvasRenderingContext2D`

#### Source

src/canvas/StaticCanvas.ts:474

***

### getElement()

> **getElement**(): `HTMLCanvasElement`

Returns &lt;canvas> element corresponding to this instance

#### Returns

`HTMLCanvasElement`

#### Source

src/canvas/StaticCanvas.ts:458

***

### getHeight()

> **getHeight**(): `number`

Returns canvas height (in px)

#### Returns

`number`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).getObjects`

#### Source

src/Collection.ts:108

***

### getVpCenter()

> **getVpCenter**(): [`Point`](Point.md)

Calculate the point in canvas that correspond to the center of actual viewport.

#### Returns

[`Point`](Point.md)

vpCenter, viewport center

#### Source

src/canvas/StaticCanvas.ts:796

***

### getWidth()

> **getWidth**(): `number`

Returns canvas width (in px)

#### Returns

`number`

#### Source

src/canvas/StaticCanvas.ts:263

***

### getZoom()

> **getZoom**(): `number`

Returns canvas zoom level

#### Returns

`number`

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

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>).insertAt`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).isEmpty`

#### Source

src/Collection.ts:128

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

`createCollectionMixin(CommonMethods<CanvasEvents>).item`

#### Source

src/Collection.ts:120

***

### loadFromJSON()

> **loadFromJSON**(`json`, `reviver`?, `options`?): `Promise`\<[`StaticCanvas`](StaticCanvas.md)\<`EventSpec`\>\>

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

`Promise`\<[`StaticCanvas`](StaticCanvas.md)\<`EventSpec`\>\>

instance

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

`createCollectionMixin(CommonMethods<CanvasEvents>).moveObjectTo`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).off`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).off`

##### Source

src/Observable.ts:125

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).off`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).on`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).on`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).once`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).once`

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

#### Source

src/canvas/StaticCanvas.ts:445

***

### remove()

> **remove**(...`objects`): [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Parameters

• ...**objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Returns

[`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>).remove`

#### Source

src/canvas/StaticCanvas.ts:211

***

### renderAll()

> **renderAll**(): `void`

Renders the canvas

#### Returns

`void`

#### Source

src/canvas/StaticCanvas.ts:495

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

#### Source

src/canvas/StaticCanvas.ts:565

***

### requestRenderAll()

> **requestRenderAll**(): `void`

Append a renderAll request to next animation frame.
unless one is already in progress, in that case nothing is done
a boolean flag will avoid appending more.

#### Returns

`void`

#### Source

src/canvas/StaticCanvas.ts:521

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

`createCollectionMixin(CommonMethods<CanvasEvents>).sendObjectBackwards`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).sendObjectToBack`

#### Source

src/Collection.ts:178

***

### set()

> **set**(`key`, `value`?): [`StaticCanvas`](StaticCanvas.md)\<`EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `any`\>

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`StaticCanvas`](StaticCanvas.md)\<`EventSpec`\>

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).set`

#### Source

src/CommonMethods.ts:29

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

##### Source

src/canvas/StaticCanvas.ts:354

#### setDimensions(dimensions, options)

> **setDimensions**(`dimensions`, `options`?): `void`

##### Parameters

• **dimensions**: `Partial`\<[`TSize`](../type-aliases/TSize.md)\>

• **options?**: `undefined`

##### Returns

`void`

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

#### Source

src/canvas/StaticCanvas.ts:381

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

`createCollectionMixin(CommonMethods<CanvasEvents>).size`

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

#### Source

src/canvas/StaticCanvas.ts:1514

***

### toggle()

> **toggle**(`property`): [`StaticCanvas`](StaticCanvas.md)\<`EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`StaticCanvas`](StaticCanvas.md)\<`EventSpec`\>

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).toggle`

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

#### Source

src/canvas/StaticCanvas.ts:409

***

### getDefaults()

> **`static`** **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Source

src/canvas/StaticCanvas.ts:172
