---
editUrl: false
next: false
prev: false
title: "TextProps"
---

## Extends

- [`FabricObjectProps`](FabricObjectProps.md).`UniqueTextProps`

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

[`FabricObjectProps`](FabricObjectProps.md).[`absolutePositioned`](FabricObjectProps.md#absolutepositioned)

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

[`FabricObjectProps`](FabricObjectProps.md).[`angle`](FabricObjectProps.md#angle)

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

[`FabricObjectProps`](FabricObjectProps.md).[`backgroundColor`](FabricObjectProps.md#backgroundcolor)

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

[`FabricObjectProps`](FabricObjectProps.md).[`borderColor`](FabricObjectProps.md#bordercolor)

#### Source

src/shapes/Object/types/BorderProps.ts:7

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`borderDashArray`](FabricObjectProps.md#borderdasharray)

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

[`FabricObjectProps`](FabricObjectProps.md).[`borderOpacityWhenMoving`](FabricObjectProps.md#borderopacitywhenmoving)

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

[`FabricObjectProps`](FabricObjectProps.md).[`borderScaleFactor`](FabricObjectProps.md#borderscalefactor)

#### Source

src/shapes/Object/types/BorderProps.ts:39

***

### canvas?

> **`optional`** **canvas**: [`Canvas`](../classes/Canvas.md) \| [`StaticCanvas`](../classes/StaticCanvas.md)\<[`StaticCanvasEvents`](StaticCanvasEvents.md)\>

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`canvas`](FabricObjectProps.md#canvas)

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

[`FabricObjectProps`](FabricObjectProps.md).[`centeredRotation`](FabricObjectProps.md#centeredrotation)

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

[`FabricObjectProps`](FabricObjectProps.md).[`centeredScaling`](FabricObjectProps.md#centeredscaling)

#### Source

src/shapes/Object/types/ObjectTransformProps.ts:36

***

### charSpacing

> **charSpacing**: `number`

#### Inherited from

`UniqueTextProps.charSpacing`

#### Source

src/shapes/Text/Text.ts:94

***

### clipPath?

> **`optional`** **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`clipPath`](FabricObjectProps.md#clippath)

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

[`FabricObjectProps`](FabricObjectProps.md).[`cornerColor`](FabricObjectProps.md#cornercolor)

#### Source

src/shapes/Object/types/ControlProps.ts:28

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`cornerDashArray`](FabricObjectProps.md#cornerdasharray)

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

[`FabricObjectProps`](FabricObjectProps.md).[`cornerSize`](FabricObjectProps.md#cornersize)

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

[`FabricObjectProps`](FabricObjectProps.md).[`cornerStrokeColor`](FabricObjectProps.md#cornerstrokecolor)

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

[`FabricObjectProps`](FabricObjectProps.md).[`cornerStyle`](FabricObjectProps.md#cornerstyle)

#### Source

src/shapes/Object/types/ControlProps.ts:47

***

### direction

> **direction**: `CanvasDirection`

#### Inherited from

`UniqueTextProps.direction`

#### Source

src/shapes/Text/Text.ts:106

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`evented`](FabricObjectProps.md#evented)

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

[`FabricObjectProps`](FabricObjectProps.md).[`excludeFromExport`](FabricObjectProps.md#excludefromexport)

#### Source

src/shapes/Object/types/ObjectProps.ts:52

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`fill`](FabricObjectProps.md#fill)

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

[`FabricObjectProps`](FabricObjectProps.md).[`fillRule`](FabricObjectProps.md#fillrule)

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

[`FabricObjectProps`](FabricObjectProps.md).[`flipX`](FabricObjectProps.md#flipx)

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

[`FabricObjectProps`](FabricObjectProps.md).[`flipY`](FabricObjectProps.md#flipy)

#### Source

src/shapes/Object/types/BaseProps.ts:71

***

### fontFamily

> **fontFamily**: `string`

#### Inherited from

`UniqueTextProps.fontFamily`

#### Source

src/shapes/Text/Text.ts:98

***

### fontSize

> **fontSize**: `number`

#### Inherited from

`UniqueTextProps.fontSize`

#### Source

src/shapes/Text/Text.ts:96

***

### fontStyle

> **fontStyle**: `string`

#### Inherited from

`UniqueTextProps.fontStyle`

#### Source

src/shapes/Text/Text.ts:99

***

### fontWeight

> **fontWeight**: `string`

#### Inherited from

`UniqueTextProps.fontWeight`

#### Source

src/shapes/Text/Text.ts:97

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`globalCompositeOperation`](FabricObjectProps.md#globalcompositeoperation)

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

[`FabricObjectProps`](FabricObjectProps.md).[`hasBorders`](FabricObjectProps.md#hasborders)

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

[`FabricObjectProps`](FabricObjectProps.md).[`hasControls`](FabricObjectProps.md#hascontrols)

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

[`FabricObjectProps`](FabricObjectProps.md).[`height`](FabricObjectProps.md#height)

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

[`FabricObjectProps`](FabricObjectProps.md).[`hoverCursor`](FabricObjectProps.md#hovercursor)

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

[`FabricObjectProps`](FabricObjectProps.md).[`includeDefaultValues`](FabricObjectProps.md#includedefaultvalues)

#### Source

src/shapes/Object/types/ObjectProps.ts:44

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

[`FabricObjectProps`](FabricObjectProps.md).[`inverted`](FabricObjectProps.md#inverted)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:60

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

[`FabricObjectProps`](FabricObjectProps.md).[`left`](FabricObjectProps.md#left)

#### Source

src/shapes/Object/types/BaseProps.ts:11

***

### lineHeight

> **lineHeight**: `number`

#### Inherited from

`UniqueTextProps.lineHeight`

#### Source

src/shapes/Text/Text.ts:95

***

### linethrough

> **linethrough**: `boolean`

#### Inherited from

`UniqueTextProps.linethrough`

#### Source

src/shapes/Text/Text.ts:104

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`lockMovementX`](FabricObjectProps.md#lockmovementx)

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

[`FabricObjectProps`](FabricObjectProps.md).[`lockMovementY`](FabricObjectProps.md#lockmovementy)

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

[`FabricObjectProps`](FabricObjectProps.md).[`lockRotation`](FabricObjectProps.md#lockrotation)

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

[`FabricObjectProps`](FabricObjectProps.md).[`lockScalingFlip`](FabricObjectProps.md#lockscalingflip)

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

[`FabricObjectProps`](FabricObjectProps.md).[`lockScalingX`](FabricObjectProps.md#lockscalingx)

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

[`FabricObjectProps`](FabricObjectProps.md).[`lockScalingY`](FabricObjectProps.md#lockscalingy)

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

[`FabricObjectProps`](FabricObjectProps.md).[`lockSkewingX`](FabricObjectProps.md#lockskewingx)

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

[`FabricObjectProps`](FabricObjectProps.md).[`lockSkewingY`](FabricObjectProps.md#lockskewingy)

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

[`FabricObjectProps`](FabricObjectProps.md).[`minScaleLimit`](FabricObjectProps.md#minscalelimit)

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

[`FabricObjectProps`](FabricObjectProps.md).[`moveCursor`](FabricObjectProps.md#movecursor)

#### Source

src/shapes/Object/types/FabricObjectProps.ts:34

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

[`FabricObjectProps`](FabricObjectProps.md).[`noScaleCache`](FabricObjectProps.md#noscalecache)

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

[`FabricObjectProps`](FabricObjectProps.md).[`objectCaching`](FabricObjectProps.md#objectcaching)

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

[`FabricObjectProps`](FabricObjectProps.md).[`opacity`](FabricObjectProps.md#opacity)

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

[`FabricObjectProps`](FabricObjectProps.md).[`originX`](FabricObjectProps.md#originx)

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

[`FabricObjectProps`](FabricObjectProps.md).[`originY`](FabricObjectProps.md#originy)

#### Source

src/shapes/Object/types/BaseProps.ts:50

***

### overline

> **overline**: `boolean`

#### Inherited from

`UniqueTextProps.overline`

#### Source

src/shapes/Text/Text.ts:103

***

### padding

> **padding**: `number`

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`padding`](FabricObjectProps.md#padding)

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

[`FabricObjectProps`](FabricObjectProps.md).[`paintFirst`](FabricObjectProps.md#paintfirst)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:9

***

### path?

> **`optional`** **path**: [`Path`](../classes/Path.md)\<`Partial`\<[`PathProps`](PathProps.md)\>, [`SerializedPathProps`](SerializedPathProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

`UniqueTextProps.path`

#### Source

src/shapes/Text/Text.ts:107

***

### pathAlign

> **pathAlign**: [`TPathAlign`](../type-aliases/TPathAlign.md)

#### Inherited from

`UniqueTextProps.pathAlign`

#### Source

src/shapes/Text/Text.ts:101

***

### pathSide

> **pathSide**: [`TPathSide`](../type-aliases/TPathSide.md)

#### Inherited from

`UniqueTextProps.pathSide`

#### Source

src/shapes/Text/Text.ts:100

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`perPixelTargetFind`](FabricObjectProps.md#perpixeltargetfind)

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

[`FabricObjectProps`](FabricObjectProps.md).[`scaleX`](FabricObjectProps.md#scalex)

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

[`FabricObjectProps`](FabricObjectProps.md).[`scaleY`](FabricObjectProps.md#scaley)

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

[`FabricObjectProps`](FabricObjectProps.md).[`selectable`](FabricObjectProps.md#selectable)

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

[`FabricObjectProps`](FabricObjectProps.md).[`selectionBackgroundColor`](FabricObjectProps.md#selectionbackgroundcolor)

#### Source

src/shapes/Object/types/FabricObjectProps.ts:43

***

### shadow

> **shadow**: `null` \| [`Shadow`](../classes/Shadow.md)

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`shadow`](FabricObjectProps.md#shadow)

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

[`FabricObjectProps`](FabricObjectProps.md).[`skewX`](FabricObjectProps.md#skewx)

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

[`FabricObjectProps`](FabricObjectProps.md).[`skewY`](FabricObjectProps.md#skewy)

#### Source

src/shapes/Object/types/BaseProps.ts:99

***

### snapAngle?

> **`optional`** **snapAngle**: [`TDegree`](../type-aliases/TDegree.md)

The angle that an object will lock to while rotating.

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`snapAngle`](FabricObjectProps.md#snapangle)

#### Source

src/shapes/Object/types/ObjectTransformProps.ts:8

***

### snapThreshold?

> **`optional`** **snapThreshold**: [`TDegree`](../type-aliases/TDegree.md)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`snapThreshold`](FabricObjectProps.md#snapthreshold)

#### Source

src/shapes/Object/types/ObjectTransformProps.ts:15

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`stroke`](FabricObjectProps.md#stroke)

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

[`FabricObjectProps`](FabricObjectProps.md).[`strokeDashArray`](FabricObjectProps.md#strokedasharray)

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

[`FabricObjectProps`](FabricObjectProps.md).[`strokeDashOffset`](FabricObjectProps.md#strokedashoffset)

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

[`FabricObjectProps`](FabricObjectProps.md).[`strokeLineCap`](FabricObjectProps.md#strokelinecap)

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

[`FabricObjectProps`](FabricObjectProps.md).[`strokeLineJoin`](FabricObjectProps.md#strokelinejoin)

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

[`FabricObjectProps`](FabricObjectProps.md).[`strokeMiterLimit`](FabricObjectProps.md#strokemiterlimit)

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

[`FabricObjectProps`](FabricObjectProps.md).[`strokeUniform`](FabricObjectProps.md#strokeuniform)

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

[`FabricObjectProps`](FabricObjectProps.md).[`strokeWidth`](FabricObjectProps.md#strokewidth)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:41

***

### styles

> **styles**: [`TextStyle`](../type-aliases/TextStyle.md)

#### Source

src/shapes/Text/Text.ts:117

***

### textAlign

> **textAlign**: `string`

#### Inherited from

`UniqueTextProps.textAlign`

#### Source

src/shapes/Text/Text.ts:105

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

[`FabricObjectProps`](FabricObjectProps.md).[`top`](FabricObjectProps.md#top)

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

[`FabricObjectProps`](FabricObjectProps.md).[`touchCornerSize`](FabricObjectProps.md#touchcornersize)

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

[`FabricObjectProps`](FabricObjectProps.md).[`transparentCorners`](FabricObjectProps.md#transparentcorners)

#### Source

src/shapes/Object/types/ControlProps.ts:21

***

### underline

> **underline**: `boolean`

#### Inherited from

`UniqueTextProps.underline`

#### Source

src/shapes/Text/Text.ts:102

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](FabricObjectProps.md).[`visible`](FabricObjectProps.md#visible)

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

[`FabricObjectProps`](FabricObjectProps.md).[`width`](FabricObjectProps.md#width)

#### Source

src/shapes/Object/types/BaseProps.ts:27
