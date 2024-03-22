---
editUrl: false
next: false
prev: false
title: "ActiveSelectionOptions"
---

## Extends

- [`GroupProps`](GroupProps.md)

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

[`GroupProps`](GroupProps.md).[`absolutePositioned`](GroupProps.md#absolutepositioned)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:72

***

### angle

> **angle**: [`TDegree`](../type-aliases/TDegree.md)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`angle`](GroupProps.md#angle)

#### Source

src/shapes/Object/types/BaseProps.ts:57

***

### backgroundColor

> **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`backgroundColor`](GroupProps.md#backgroundcolor)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:26

***

### borderColor

> **borderColor**: `string`

Color of controlling borders of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`borderColor`](GroupProps.md#bordercolor)

#### Source

src/shapes/Object/types/BorderProps.ts:7

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`GroupProps`](GroupProps.md).[`borderDashArray`](GroupProps.md#borderdasharray)

#### Source

src/shapes/Object/types/BorderProps.ts:15

***

### borderOpacityWhenMoving

> **borderOpacityWhenMoving**: `number`

Opacity of object's controlling borders when object is active and moving

#### Default

```ts
0.4
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`borderOpacityWhenMoving`](GroupProps.md#borderopacitywhenmoving)

#### Source

src/shapes/Object/types/BorderProps.ts:29

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

[`GroupProps`](GroupProps.md).[`borderScaleFactor`](GroupProps.md#borderscalefactor)

#### Source

src/shapes/Object/types/BorderProps.ts:39

***

### canvas?

> **`optional`** **canvas**: [`Canvas`](../classes/Canvas.md) \| [`StaticCanvas`](../classes/StaticCanvas.md)\<[`StaticCanvasEvents`](StaticCanvasEvents.md)\>

#### Inherited from

[`GroupProps`](GroupProps.md).[`canvas`](GroupProps.md#canvas)

#### Source

src/shapes/Object/types/ObjectProps.ts:20

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

[`GroupProps`](GroupProps.md).[`centeredRotation`](GroupProps.md#centeredrotation)

#### Source

src/shapes/Object/types/ObjectTransformProps.ts:27

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

[`GroupProps`](GroupProps.md).[`centeredScaling`](GroupProps.md#centeredscaling)

#### Source

src/shapes/Object/types/ObjectTransformProps.ts:36

***

### clipPath?

> **`optional`** **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`GroupProps`](GroupProps.md).[`clipPath`](GroupProps.md#clippath)

#### Source

src/shapes/Object/types/ObjectProps.ts:16

***

### cornerColor

> **cornerColor**: `string`

Color of controlling corners of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`cornerColor`](GroupProps.md#cornercolor)

#### Source

src/shapes/Object/types/ControlProps.ts:28

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`GroupProps`](GroupProps.md).[`cornerDashArray`](GroupProps.md#cornerdasharray)

#### Source

src/shapes/Object/types/ControlProps.ts:54

***

### cornerSize

> **cornerSize**: `number`

Size of object's controlling corners (in pixels)

#### Default

```ts
13
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`cornerSize`](GroupProps.md#cornersize)

#### Source

src/shapes/Object/types/ControlProps.ts:7

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

[`GroupProps`](GroupProps.md).[`cornerStrokeColor`](GroupProps.md#cornerstrokecolor)

#### Source

src/shapes/Object/types/ControlProps.ts:36

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

[`GroupProps`](GroupProps.md).[`cornerStyle`](GroupProps.md#cornerstyle)

#### Source

src/shapes/Object/types/ControlProps.ts:47

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`evented`](GroupProps.md#evented)

#### Source

src/shapes/Object/types/FabricObjectProps.ts:65

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

[`GroupProps`](GroupProps.md).[`excludeFromExport`](GroupProps.md#excludefromexport)

#### Source

src/shapes/Object/types/ObjectProps.ts:52

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Inherited from

[`GroupProps`](GroupProps.md).[`fill`](GroupProps.md#fill)

#### Source

src/shapes/Object/types/ObjectProps.ts:17

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

[`GroupProps`](GroupProps.md).[`fillRule`](GroupProps.md#fillrule)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:26

***

### flipX

> **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`flipX`](GroupProps.md#flipx)

#### Source

src/shapes/Object/types/BaseProps.ts:64

***

### flipY

> **flipY**: `boolean`

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`flipY`](GroupProps.md#flipy)

#### Source

src/shapes/Object/types/BaseProps.ts:71

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`globalCompositeOperation`](GroupProps.md#globalcompositeoperation)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:18

***

### hasBorders

> **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`hasBorders`](GroupProps.md#hasborders)

#### Source

src/shapes/Object/types/BorderProps.ts:22

***

### hasControls

> **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`hasControls`](GroupProps.md#hascontrols)

#### Source

src/shapes/Object/types/ControlProps.ts:68

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`height`](GroupProps.md#height)

#### Source

src/shapes/Object/types/BaseProps.ts:34

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`hoverCursor`](GroupProps.md#hovercursor)

#### Source

src/shapes/Object/types/FabricObjectProps.ts:27

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`includeDefaultValues`](GroupProps.md#includedefaultvalues)

#### Source

src/shapes/Object/types/ObjectProps.ts:44

***

### interactive

> **interactive**: `boolean`

#### Inherited from

[`GroupProps`](GroupProps.md).[`interactive`](GroupProps.md#interactive)

#### Source

src/shapes/Group.ts:51

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

[`GroupProps`](GroupProps.md).[`inverted`](GroupProps.md#inverted)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:60

***

### layoutManager

> **layoutManager**: [`LayoutManager`](../classes/LayoutManager.md)

#### Inherited from

[`GroupProps`](GroupProps.md).[`layoutManager`](GroupProps.md#layoutmanager)

#### Source

src/shapes/Group.ts:62

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

[`GroupProps`](GroupProps.md).[`left`](GroupProps.md#left)

#### Source

src/shapes/Object/types/BaseProps.ts:11

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`lockMovementX`](GroupProps.md#lockmovementx)

#### Source

src/shapes/Object/types/LockInteractionProps.ts:7

***

### lockMovementY

> **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`lockMovementY`](GroupProps.md#lockmovementy)

#### Source

src/shapes/Object/types/LockInteractionProps.ts:14

***

### lockRotation

> **lockRotation**: `boolean`

When `true`, object rotation is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`lockRotation`](GroupProps.md#lockrotation)

#### Source

src/shapes/Object/types/LockInteractionProps.ts:21

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`lockScalingFlip`](GroupProps.md#lockscalingflip)

#### Source

src/shapes/Object/types/LockInteractionProps.ts:56

***

### lockScalingX

> **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`lockScalingX`](GroupProps.md#lockscalingx)

#### Source

src/shapes/Object/types/LockInteractionProps.ts:28

***

### lockScalingY

> **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`lockScalingY`](GroupProps.md#lockscalingy)

#### Source

src/shapes/Object/types/LockInteractionProps.ts:35

***

### lockSkewingX

> **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`lockSkewingX`](GroupProps.md#lockskewingx)

#### Source

src/shapes/Object/types/LockInteractionProps.ts:42

***

### lockSkewingY

> **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`lockSkewingY`](GroupProps.md#lockskewingy)

#### Source

src/shapes/Object/types/LockInteractionProps.ts:49

***

### minScaleLimit

> **minScaleLimit**: `number`

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`minScaleLimit`](GroupProps.md#minscalelimit)

#### Source

src/shapes/Object/types/ObjectProps.ts:27

***

### moveCursor

> **moveCursor**: `null` \| `string`

Default cursor value used when moving this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`moveCursor`](GroupProps.md#movecursor)

#### Source

src/shapes/Object/types/FabricObjectProps.ts:34

***

### multiSelectionStacking

> **multiSelectionStacking**: [`MultiSelectionStacking`](../type-aliases/MultiSelectionStacking.md)

#### Source

src/shapes/ActiveSelection.ts:16

***

### noScaleCache?

> **`optional`** **noScaleCache**: `boolean`

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

[`GroupProps`](GroupProps.md).[`noScaleCache`](GroupProps.md#noscalecache)

#### Source

src/shapes/Object/types/FabricObjectProps.ts:20

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

[`GroupProps`](GroupProps.md).[`objectCaching`](GroupProps.md#objectcaching)

#### Source

src/shapes/Object/types/ObjectProps.ts:37

***

### opacity

> **opacity**: `number`

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`opacity`](GroupProps.md#opacity)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:11

***

### originX

> **originX**: [`TOriginX`](../type-aliases/TOriginX.md)

Horizontal origin of transformation of an object (`left`, `center`, `right`  or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'left'
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`originX`](GroupProps.md#originx)

#### Source

src/shapes/Object/types/BaseProps.ts:42

***

### originY

> **originY**: [`TOriginY`](../type-aliases/TOriginY.md)

Vertical origin of transformation of an object (`top`, `center`, `bottom` or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'top'
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`originY`](GroupProps.md#originy)

#### Source

src/shapes/Object/types/BaseProps.ts:50

***

### padding

> **padding**: `number`

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`padding`](GroupProps.md#padding)

#### Source

src/shapes/Object/types/ControlProps.ts:61

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`paintFirst`](GroupProps.md#paintfirst)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:9

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`perPixelTargetFind`](GroupProps.md#perpixeltargetfind)

#### Source

src/shapes/Object/types/FabricObjectProps.ts:50

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`scaleX`](GroupProps.md#scalex)

#### Source

src/shapes/Object/types/BaseProps.ts:78

***

### scaleY

> **scaleY**: `number`

Object scale factor (vertical)

#### Default

```ts
1
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`scaleY`](GroupProps.md#scaley)

#### Source

src/shapes/Object/types/BaseProps.ts:85

***

### selectable

> **selectable**: `boolean`

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`selectable`](GroupProps.md#selectable)

#### Source

src/shapes/Object/types/FabricObjectProps.ts:58

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

[`GroupProps`](GroupProps.md).[`selectionBackgroundColor`](GroupProps.md#selectionbackgroundcolor)

#### Source

src/shapes/Object/types/FabricObjectProps.ts:43

***

### shadow

> **shadow**: `null` \| [`Shadow`](../classes/Shadow.md)

#### Inherited from

[`GroupProps`](GroupProps.md).[`shadow`](GroupProps.md#shadow)

#### Source

src/shapes/Object/types/ObjectProps.ts:19

***

### skewX

> **skewX**: [`TDegree`](../type-aliases/TDegree.md)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`skewX`](GroupProps.md#skewx)

#### Source

src/shapes/Object/types/BaseProps.ts:92

***

### skewY

> **skewY**: [`TDegree`](../type-aliases/TDegree.md)

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`skewY`](GroupProps.md#skewy)

#### Source

src/shapes/Object/types/BaseProps.ts:99

***

### snapAngle?

> **`optional`** **snapAngle**: [`TDegree`](../type-aliases/TDegree.md)

The angle that an object will lock to while rotating.

#### Inherited from

[`GroupProps`](GroupProps.md).[`snapAngle`](GroupProps.md#snapangle)

#### Source

src/shapes/Object/types/ObjectTransformProps.ts:8

***

### snapThreshold?

> **`optional`** **snapThreshold**: [`TDegree`](../type-aliases/TDegree.md)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`GroupProps`](GroupProps.md).[`snapThreshold`](GroupProps.md#snapthreshold)

#### Source

src/shapes/Object/types/ObjectTransformProps.ts:15

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Inherited from

[`GroupProps`](GroupProps.md).[`stroke`](GroupProps.md#stroke)

#### Source

src/shapes/Object/types/ObjectProps.ts:18

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`strokeDashArray`](GroupProps.md#strokedasharray)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:48

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Line offset of an object's stroke

#### Default

```ts
0
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`strokeDashOffset`](GroupProps.md#strokedashoffset)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:55

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`strokeLineCap`](GroupProps.md#strokelinecap)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:62

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`strokeLineJoin`](GroupProps.md#strokelinejoin)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:69

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`strokeMiterLimit`](GroupProps.md#strokemiterlimit)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:76

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

[`GroupProps`](GroupProps.md).[`strokeUniform`](GroupProps.md#strokeuniform)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:89

***

### strokeWidth

> **strokeWidth**: `number`

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`strokeWidth`](GroupProps.md#strokewidth)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:41

***

### subTargetCheck

> **subTargetCheck**: `boolean`

#### Inherited from

[`GroupProps`](GroupProps.md).[`subTargetCheck`](GroupProps.md#subtargetcheck)

#### Source

src/shapes/Group.ts:50

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

[`GroupProps`](GroupProps.md).[`top`](GroupProps.md#top)

#### Source

src/shapes/Object/types/BaseProps.ts:20

***

### touchCornerSize

> **touchCornerSize**: `number`

Size of object's controlling corners when touch interaction is detected

#### Default

```ts
24
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`touchCornerSize`](GroupProps.md#touchcornersize)

#### Source

src/shapes/Object/types/ControlProps.ts:14

***

### transparentCorners

> **transparentCorners**: `boolean`

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

#### Default

```ts
true
```

#### Inherited from

[`GroupProps`](GroupProps.md).[`transparentCorners`](GroupProps.md#transparentcorners)

#### Source

src/shapes/Object/types/ControlProps.ts:21

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`visible`](GroupProps.md#visible)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:40

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Inherited from

[`GroupProps`](GroupProps.md).[`width`](GroupProps.md#width)

#### Source

src/shapes/Object/types/BaseProps.ts:27
