---
editUrl: false
next: false
prev: false
title: "ActiveSelectionOptions"
---

## Extends

- [`GroupProps`](/api/interfaces/groupprops/)

## Properties

### absolutePositioned

> **absolutePositioned**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will have its top and left relative to canvas, and will
not be influenced by the object transform. This will make the clipPath relative
to the canvas, but clipping just a particular object.
WARNING this is beta, this feature may change or be renamed.
since 2.4.0

#### Default

```ts
false
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`absolutePositioned`](/api/interfaces/groupprops/#absolutepositioned)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:72](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/SerializedObjectProps.ts#L72)

***

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`angle`](/api/interfaces/groupprops/#angle)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:57](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L57)

***

### backgroundColor

> **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`backgroundColor`](/api/interfaces/groupprops/#backgroundcolor)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/SerializedObjectProps.ts#L26)

***

### borderColor

> **borderColor**: `string`

Color of controlling borders of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`borderColor`](/api/interfaces/groupprops/#bordercolor)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:7](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BorderProps.ts#L7)

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`borderDashArray`](/api/interfaces/groupprops/#borderdasharray)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:15](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BorderProps.ts#L15)

***

### borderOpacityWhenMoving

> **borderOpacityWhenMoving**: `number`

Opacity of object's controlling borders when object is active and moving

#### Default

```ts
0.4
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`borderOpacityWhenMoving`](/api/interfaces/groupprops/#borderopacitywhenmoving)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:29](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BorderProps.ts#L29)

***

### borderScaleFactor

> **borderScaleFactor**: `number`

Scale factor of object's controlling borders
bigger number will make a thicker border
border is 1, so this is basically a border thickness
since there is no way to change the border itself.

#### Default

```ts
1
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`borderScaleFactor`](/api/interfaces/groupprops/#borderscalefactor)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:39](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BorderProps.ts#L39)

***

### canvas?

> `optional` **canvas**: [`Canvas`](/api/classes/canvas/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`canvas`](/api/interfaces/groupprops/#canvas)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:20](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ObjectProps.ts#L20)

***

### centeredRotation

> **centeredRotation**: `boolean`

When `true` the object will rotate on its center.
When `false` will rotate around the origin point defined by originX and originY.
The value of this property is IGNORED during a transform if the canvas has already
centeredRotation set to `true`
The object method `rotate` will always consider this property and never the canvas's one.

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`centeredRotation`](/api/interfaces/groupprops/#centeredrotation)

#### Defined in

[src/shapes/Object/types/ObjectTransformProps.ts:27](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ObjectTransformProps.ts#L27)

***

### centeredScaling

> **centeredScaling**: `boolean`

When true, this object will use center point as the origin of transformation
when being scaled via the controls.

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`centeredScaling`](/api/interfaces/groupprops/#centeredscaling)

#### Defined in

[src/shapes/Object/types/ObjectTransformProps.ts:36](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ObjectTransformProps.ts#L36)

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`clipPath`](/api/interfaces/groupprops/#clippath)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:16](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ObjectProps.ts#L16)

***

### cornerColor

> **cornerColor**: `string`

Color of controlling corners of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`cornerColor`](/api/interfaces/groupprops/#cornercolor)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:28](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ControlProps.ts#L28)

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`cornerDashArray`](/api/interfaces/groupprops/#cornerdasharray)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:54](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ControlProps.ts#L54)

***

### cornerSize

> **cornerSize**: `number`

Size of object's controlling corners (in pixels)

#### Default

```ts
13
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`cornerSize`](/api/interfaces/groupprops/#cornersize)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:7](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ControlProps.ts#L7)

***

### cornerStrokeColor

> **cornerStrokeColor**: `string`

Color of controlling corners of an object (when it's active and transparentCorners false)

#### Since

1.6.2

#### Default

```ts
null
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`cornerStrokeColor`](/api/interfaces/groupprops/#cornerstrokecolor)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:36](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ControlProps.ts#L36)

***

### ~~cornerStyle~~

> **cornerStyle**: `"circle"` \| `"rect"`

Specify style of control, 'rect' or 'circle'
This is deprecated. In the future there will be a standard control render
And you can swap it with one of the alternative proposed with the control api

#### Since

1.6.2

#### Default

```ts
rect
```

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`cornerStyle`](/api/interfaces/groupprops/#cornerstyle)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:47](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ControlProps.ts#L47)

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`evented`](/api/interfaces/groupprops/#evented)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:65](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FabricObjectProps.ts#L65)

***

### excludeFromExport

> **excludeFromExport**: `boolean`

When `true`, object is not exported in OBJECT/JSON

#### Since

1.6.3

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`excludeFromExport`](/api/interfaces/groupprops/#excludefromexport)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:52](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ObjectProps.ts#L52)

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`fill`](/api/interfaces/groupprops/#fill)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:17](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ObjectProps.ts#L17)

***

### fillRule

> **fillRule**: `CanvasFillRule`

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

#### Default

```ts
nonzero
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`fillRule`](/api/interfaces/groupprops/#fillrule)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:26](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FillStrokeProps.ts#L26)

***

### flipX

> **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`flipX`](/api/interfaces/groupprops/#flipx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:64](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L64)

***

### flipY

> **flipY**: `boolean`

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`flipY`](/api/interfaces/groupprops/#flipy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:71](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L71)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`globalCompositeOperation`](/api/interfaces/groupprops/#globalcompositeoperation)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/SerializedObjectProps.ts#L18)

***

### hasBorders

> **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`hasBorders`](/api/interfaces/groupprops/#hasborders)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:22](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BorderProps.ts#L22)

***

### hasControls

> **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`hasControls`](/api/interfaces/groupprops/#hascontrols)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:68](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ControlProps.ts#L68)

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`height`](/api/interfaces/groupprops/#height)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:34](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L34)

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`hoverCursor`](/api/interfaces/groupprops/#hovercursor)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:27](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FabricObjectProps.ts#L27)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`includeDefaultValues`](/api/interfaces/groupprops/#includedefaultvalues)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:44](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ObjectProps.ts#L44)

***

### interactive

> **interactive**: `boolean`

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`interactive`](/api/interfaces/groupprops/#interactive)

#### Defined in

[src/shapes/Group.ts:56](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Group.ts#L56)

***

### inverted

> **inverted**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will make the object clip to the outside of the clipPath
since 2.4.0

#### Default

```ts
false
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`inverted`](/api/interfaces/groupprops/#inverted)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:60](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/SerializedObjectProps.ts#L60)

***

### layoutManager

> **layoutManager**: [`LayoutManager`](/api/classes/layoutmanager/)

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`layoutManager`](/api/interfaces/groupprops/#layoutmanager)

#### Defined in

[src/shapes/Group.ts:67](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Group.ts#L67)

***

### left

> **left**: `number`

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [originX](../../../../api/interfaces/fabricobjectprops/#originx)

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`left`](/api/interfaces/groupprops/#left)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:11](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L11)

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`lockMovementX`](/api/interfaces/groupprops/#lockmovementx)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:7](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/LockInteractionProps.ts#L7)

***

### lockMovementY

> **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`lockMovementY`](/api/interfaces/groupprops/#lockmovementy)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:14](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/LockInteractionProps.ts#L14)

***

### lockRotation

> **lockRotation**: `boolean`

When `true`, object rotation is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`lockRotation`](/api/interfaces/groupprops/#lockrotation)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:21](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/LockInteractionProps.ts#L21)

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`lockScalingFlip`](/api/interfaces/groupprops/#lockscalingflip)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:56](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/LockInteractionProps.ts#L56)

***

### lockScalingX

> **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`lockScalingX`](/api/interfaces/groupprops/#lockscalingx)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:28](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/LockInteractionProps.ts#L28)

***

### lockScalingY

> **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`lockScalingY`](/api/interfaces/groupprops/#lockscalingy)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:35](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/LockInteractionProps.ts#L35)

***

### lockSkewingX

> **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`lockSkewingX`](/api/interfaces/groupprops/#lockskewingx)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:42](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/LockInteractionProps.ts#L42)

***

### lockSkewingY

> **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`lockSkewingY`](/api/interfaces/groupprops/#lockskewingy)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:49](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/LockInteractionProps.ts#L49)

***

### minScaleLimit

> **minScaleLimit**: `number`

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`minScaleLimit`](/api/interfaces/groupprops/#minscalelimit)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:27](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ObjectProps.ts#L27)

***

### moveCursor

> **moveCursor**: `null` \| `string`

Default cursor value used when moving this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`moveCursor`](/api/interfaces/groupprops/#movecursor)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:34](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FabricObjectProps.ts#L34)

***

### multiSelectionStacking

> **multiSelectionStacking**: [`MultiSelectionStacking`](/api/type-aliases/multiselectionstacking/)

#### Defined in

[src/shapes/ActiveSelection.ts:17](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/ActiveSelection.ts#L17)

***

### noScaleCache?

> `optional` **noScaleCache**: `boolean`

When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
too much and will be redrawn with correct details at the end of scaling.
this setting is performance and application dependant.
default to true
since 1.7.0

#### Default

```ts
true
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`noScaleCache`](/api/interfaces/groupprops/#noscalecache)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:20](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FabricObjectProps.ts#L20)

***

### objectCaching

> **objectCaching**: `boolean`

When `true`, object is cached on an additional canvas.
When `false`, object is not cached unless necessary ( clipPath )
default to true

#### Since

1.7.0

#### Default

```ts
true
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`objectCaching`](/api/interfaces/groupprops/#objectcaching)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:37](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ObjectProps.ts#L37)

***

### opacity

> **opacity**: `number`

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`opacity`](/api/interfaces/groupprops/#opacity)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:11](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/SerializedObjectProps.ts#L11)

***

### originX

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin of transformation of an object (`left`, `center`, `right`  or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'left'
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`originX`](/api/interfaces/groupprops/#originx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:42](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L42)

***

### originY

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin of transformation of an object (`top`, `center`, `bottom` or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'top'
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`originY`](/api/interfaces/groupprops/#originy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:50](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L50)

***

### padding

> **padding**: `number`

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`padding`](/api/interfaces/groupprops/#padding)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:61](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ControlProps.ts#L61)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`paintFirst`](/api/interfaces/groupprops/#paintfirst)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FillStrokeProps.ts#L9)

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`perPixelTargetFind`](/api/interfaces/groupprops/#perpixeltargetfind)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:50](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FabricObjectProps.ts#L50)

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`scaleX`](/api/interfaces/groupprops/#scalex)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:78](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L78)

***

### scaleY

> **scaleY**: `number`

Object scale factor (vertical)

#### Default

```ts
1
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`scaleY`](/api/interfaces/groupprops/#scaley)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:85](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L85)

***

### selectable

> **selectable**: `boolean`

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`selectable`](/api/interfaces/groupprops/#selectable)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:58](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FabricObjectProps.ts#L58)

***

### ~~selectionBackgroundColor~~

> **selectionBackgroundColor**: `string`

Selection Background color of an object. colored layer behind the object when it is active.
does not mix good with globalCompositeOperation methods.

#### Default

```ts

```

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`selectionBackgroundColor`](/api/interfaces/groupprops/#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:43](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FabricObjectProps.ts#L43)

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`shadow`](/api/interfaces/groupprops/#shadow)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:19](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ObjectProps.ts#L19)

***

### skewX

> **skewX**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`skewX`](/api/interfaces/groupprops/#skewx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:92](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L92)

***

### skewY

> **skewY**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`skewY`](/api/interfaces/groupprops/#skewy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:99](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L99)

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

The angle that an object will lock to while rotating.

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`snapAngle`](/api/interfaces/groupprops/#snapangle)

#### Defined in

[src/shapes/Object/types/ObjectTransformProps.ts:8](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ObjectTransformProps.ts#L8)

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`snapThreshold`](/api/interfaces/groupprops/#snapthreshold)

#### Defined in

[src/shapes/Object/types/ObjectTransformProps.ts:15](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ObjectTransformProps.ts#L15)

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`stroke`](/api/interfaces/groupprops/#stroke)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ObjectProps.ts#L18)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`strokeDashArray`](/api/interfaces/groupprops/#strokedasharray)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:48](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FillStrokeProps.ts#L48)

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Line offset of an object's stroke

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`strokeDashOffset`](/api/interfaces/groupprops/#strokedashoffset)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:55](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FillStrokeProps.ts#L55)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`strokeLineCap`](/api/interfaces/groupprops/#strokelinecap)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:62](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FillStrokeProps.ts#L62)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`strokeLineJoin`](/api/interfaces/groupprops/#strokelinejoin)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:69](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FillStrokeProps.ts#L69)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`strokeMiterLimit`](/api/interfaces/groupprops/#strokemiterlimit)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:76](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FillStrokeProps.ts#L76)

***

### strokeUniform

> **strokeUniform**: `boolean`

When `false`, the stoke width will scale with the object.
When `true`, the stroke will always match the exact pixel size entered for stroke width.
this Property does not work on Text classes or drawing call that uses strokeText,fillText methods
default to false

#### Since

2.6.0

#### Default

```ts
false
```

#### Default

```ts
false
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`strokeUniform`](/api/interfaces/groupprops/#strokeuniform)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:89](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FillStrokeProps.ts#L89)

***

### strokeWidth

> **strokeWidth**: `number`

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`strokeWidth`](/api/interfaces/groupprops/#strokewidth)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FillStrokeProps.ts#L41)

***

### subTargetCheck

> **subTargetCheck**: `boolean`

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`subTargetCheck`](/api/interfaces/groupprops/#subtargetcheck)

#### Defined in

[src/shapes/Group.ts:55](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Group.ts#L55)

***

### top

> **top**: `number`

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [originY](../../../../api/interfaces/fabricobjectprops/#originy)

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`top`](/api/interfaces/groupprops/#top)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:20](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L20)

***

### touchCornerSize

> **touchCornerSize**: `number`

Size of object's controlling corners when touch interaction is detected

#### Default

```ts
24
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`touchCornerSize`](/api/interfaces/groupprops/#touchcornersize)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:14](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ControlProps.ts#L14)

***

### transparentCorners

> **transparentCorners**: `boolean`

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

#### Default

```ts
true
```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`transparentCorners`](/api/interfaces/groupprops/#transparentcorners)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:21](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/ControlProps.ts#L21)

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`visible`](/api/interfaces/groupprops/#visible)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:40](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/SerializedObjectProps.ts#L40)

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Inherited from

[`GroupProps`](/api/interfaces/groupprops/).[`width`](/api/interfaces/groupprops/#width)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:27](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L27)
