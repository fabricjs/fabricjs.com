---
editUrl: false
next: false
prev: false
title: "ITextProps"
---

## Extends

- [`TextProps`](/api/interfaces/textprops/).`UniqueITextProps`

## Extended by

- [`TextboxProps`](/api/interfaces/textboxprops/)

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

[`TextProps`](/api/interfaces/textprops/).[`absolutePositioned`](/api/interfaces/textprops/#absolutepositioned)

#### Defined in

src/shapes/Object/types/SerializedObjectProps.ts:72

***

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`angle`](/api/interfaces/textprops/#angle)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`backgroundColor`](/api/interfaces/textprops/#backgroundcolor)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`borderColor`](/api/interfaces/textprops/#bordercolor)

#### Defined in

src/shapes/Object/types/BorderProps.ts:7

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`borderDashArray`](/api/interfaces/textprops/#borderdasharray)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`borderOpacityWhenMoving`](/api/interfaces/textprops/#borderopacitywhenmoving)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`borderScaleFactor`](/api/interfaces/textprops/#borderscalefactor)

#### Defined in

src/shapes/Object/types/BorderProps.ts:39

***

### canvas?

> `optional` **canvas**: [`Canvas`](/api/classes/canvas/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`canvas`](/api/interfaces/textprops/#canvas)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`centeredRotation`](/api/interfaces/textprops/#centeredrotation)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`centeredScaling`](/api/interfaces/textprops/#centeredscaling)

#### Defined in

src/shapes/Object/types/ObjectTransformProps.ts:36

***

### charSpacing

> **charSpacing**: `number`

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`charSpacing`](/api/interfaces/textprops/#charspacing)

#### Defined in

src/shapes/Text/Text.ts:94

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`clipPath`](/api/interfaces/textprops/#clippath)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`cornerColor`](/api/interfaces/textprops/#cornercolor)

#### Defined in

src/shapes/Object/types/ControlProps.ts:28

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`cornerDashArray`](/api/interfaces/textprops/#cornerdasharray)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`cornerSize`](/api/interfaces/textprops/#cornersize)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`cornerStrokeColor`](/api/interfaces/textprops/#cornerstrokecolor)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`cornerStyle`](/api/interfaces/textprops/#cornerstyle)

#### Defined in

src/shapes/Object/types/ControlProps.ts:47

***

### direction

> **direction**: `CanvasDirection`

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`direction`](/api/interfaces/textprops/#direction)

#### Defined in

src/shapes/Text/Text.ts:106

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`evented`](/api/interfaces/textprops/#evented)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`excludeFromExport`](/api/interfaces/textprops/#excludefromexport)

#### Defined in

src/shapes/Object/types/ObjectProps.ts:52

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

[`TextProps`](/api/interfaces/textprops/).[`fill`](/api/interfaces/textprops/#fill)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`fillRule`](/api/interfaces/textprops/#fillrule)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`flipX`](/api/interfaces/textprops/#flipx)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`flipY`](/api/interfaces/textprops/#flipy)

#### Defined in

src/shapes/Object/types/BaseProps.ts:71

***

### fontFamily

> **fontFamily**: `string`

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`fontFamily`](/api/interfaces/textprops/#fontfamily)

#### Defined in

src/shapes/Text/Text.ts:98

***

### fontSize

> **fontSize**: `number`

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`fontSize`](/api/interfaces/textprops/#fontsize)

#### Defined in

src/shapes/Text/Text.ts:96

***

### fontStyle

> **fontStyle**: `string`

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`fontStyle`](/api/interfaces/textprops/#fontstyle)

#### Defined in

src/shapes/Text/Text.ts:99

***

### fontWeight

> **fontWeight**: `string`

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`fontWeight`](/api/interfaces/textprops/#fontweight)

#### Defined in

src/shapes/Text/Text.ts:97

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`globalCompositeOperation`](/api/interfaces/textprops/#globalcompositeoperation)

#### Defined in

src/shapes/Object/types/SerializedObjectProps.ts:18

***

### hasBorders

> **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`hasBorders`](/api/interfaces/textprops/#hasborders)

#### Defined in

src/shapes/Object/types/BorderProps.ts:22

***

### hasControls

> **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`hasControls`](/api/interfaces/textprops/#hascontrols)

#### Defined in

src/shapes/Object/types/ControlProps.ts:68

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`height`](/api/interfaces/textprops/#height)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`hoverCursor`](/api/interfaces/textprops/#hovercursor)

#### Defined in

src/shapes/Object/types/FabricObjectProps.ts:27

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`includeDefaultValues`](/api/interfaces/textprops/#includedefaultvalues)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`inverted`](/api/interfaces/textprops/#inverted)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`left`](/api/interfaces/textprops/#left)

#### Defined in

src/shapes/Object/types/BaseProps.ts:11

***

### lineHeight

> **lineHeight**: `number`

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lineHeight`](/api/interfaces/textprops/#lineheight)

#### Defined in

src/shapes/Text/Text.ts:95

***

### linethrough

> **linethrough**: `boolean`

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`linethrough`](/api/interfaces/textprops/#linethrough)

#### Defined in

src/shapes/Text/Text.ts:104

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockMovementX`](/api/interfaces/textprops/#lockmovementx)

#### Defined in

src/shapes/Object/types/LockInteractionProps.ts:7

***

### lockMovementY

> **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockMovementY`](/api/interfaces/textprops/#lockmovementy)

#### Defined in

src/shapes/Object/types/LockInteractionProps.ts:14

***

### lockRotation

> **lockRotation**: `boolean`

When `true`, object rotation is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockRotation`](/api/interfaces/textprops/#lockrotation)

#### Defined in

src/shapes/Object/types/LockInteractionProps.ts:21

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockScalingFlip`](/api/interfaces/textprops/#lockscalingflip)

#### Defined in

src/shapes/Object/types/LockInteractionProps.ts:56

***

### lockScalingX

> **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockScalingX`](/api/interfaces/textprops/#lockscalingx)

#### Defined in

src/shapes/Object/types/LockInteractionProps.ts:28

***

### lockScalingY

> **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockScalingY`](/api/interfaces/textprops/#lockscalingy)

#### Defined in

src/shapes/Object/types/LockInteractionProps.ts:35

***

### lockSkewingX

> **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockSkewingX`](/api/interfaces/textprops/#lockskewingx)

#### Defined in

src/shapes/Object/types/LockInteractionProps.ts:42

***

### lockSkewingY

> **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockSkewingY`](/api/interfaces/textprops/#lockskewingy)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`minScaleLimit`](/api/interfaces/textprops/#minscalelimit)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`moveCursor`](/api/interfaces/textprops/#movecursor)

#### Defined in

src/shapes/Object/types/FabricObjectProps.ts:34

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

[`TextProps`](/api/interfaces/textprops/).[`noScaleCache`](/api/interfaces/textprops/#noscalecache)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`objectCaching`](/api/interfaces/textprops/#objectcaching)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`opacity`](/api/interfaces/textprops/#opacity)

#### Defined in

src/shapes/Object/types/SerializedObjectProps.ts:11

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

[`TextProps`](/api/interfaces/textprops/).[`originX`](/api/interfaces/textprops/#originx)

#### Defined in

src/shapes/Object/types/BaseProps.ts:42

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

[`TextProps`](/api/interfaces/textprops/).[`originY`](/api/interfaces/textprops/#originy)

#### Defined in

src/shapes/Object/types/BaseProps.ts:50

***

### overline

> **overline**: `boolean`

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`overline`](/api/interfaces/textprops/#overline)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`padding`](/api/interfaces/textprops/#padding)

#### Defined in

src/shapes/Object/types/ControlProps.ts:61

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`paintFirst`](/api/interfaces/textprops/#paintfirst)

#### Defined in

src/shapes/Object/types/FillStrokeProps.ts:9

***

### path?

> `optional` **path**: [`Path`](/api/classes/path/)\<`Partial`\<[`PathProps`](/api/interfaces/pathprops/)\>, [`SerializedPathProps`](/api/interfaces/serializedpathprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`path`](/api/interfaces/textprops/#path)

#### Defined in

src/shapes/Text/Text.ts:107

***

### pathAlign

> **pathAlign**: [`TPathAlign`](/api/type-aliases/tpathalign/)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`pathAlign`](/api/interfaces/textprops/#pathalign)

#### Defined in

src/shapes/Text/Text.ts:101

***

### pathSide

> **pathSide**: [`TPathSide`](/api/type-aliases/tpathside/)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`pathSide`](/api/interfaces/textprops/#pathside)

#### Defined in

src/shapes/Text/Text.ts:100

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`perPixelTargetFind`](/api/interfaces/textprops/#perpixeltargetfind)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`scaleX`](/api/interfaces/textprops/#scalex)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`scaleY`](/api/interfaces/textprops/#scaley)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`selectable`](/api/interfaces/textprops/#selectable)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`selectionBackgroundColor`](/api/interfaces/textprops/#selectionbackgroundcolor)

#### Defined in

src/shapes/Object/types/FabricObjectProps.ts:43

***

### selectionEnd

> **selectionEnd**: `number`

#### Inherited from

`UniqueITextProps.selectionEnd`

#### Defined in

src/shapes/IText/IText.ts:59

***

### selectionStart

> **selectionStart**: `number`

#### Inherited from

`UniqueITextProps.selectionStart`

#### Defined in

src/shapes/IText/IText.ts:58

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`shadow`](/api/interfaces/textprops/#shadow)

#### Defined in

src/shapes/Object/types/ObjectProps.ts:19

***

### skewX

> **skewX**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`skewX`](/api/interfaces/textprops/#skewx)

#### Defined in

src/shapes/Object/types/BaseProps.ts:92

***

### skewY

> **skewY**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`skewY`](/api/interfaces/textprops/#skewy)

#### Defined in

src/shapes/Object/types/BaseProps.ts:99

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

The angle that an object will lock to while rotating.

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`snapAngle`](/api/interfaces/textprops/#snapangle)

#### Defined in

src/shapes/Object/types/ObjectTransformProps.ts:8

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`snapThreshold`](/api/interfaces/textprops/#snapthreshold)

#### Defined in

src/shapes/Object/types/ObjectTransformProps.ts:15

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

[`TextProps`](/api/interfaces/textprops/).[`stroke`](/api/interfaces/textprops/#stroke)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`strokeDashArray`](/api/interfaces/textprops/#strokedasharray)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`strokeDashOffset`](/api/interfaces/textprops/#strokedashoffset)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`strokeLineCap`](/api/interfaces/textprops/#strokelinecap)

#### Defined in

src/shapes/Object/types/FillStrokeProps.ts:62

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`strokeLineJoin`](/api/interfaces/textprops/#strokelinejoin)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`strokeMiterLimit`](/api/interfaces/textprops/#strokemiterlimit)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`strokeUniform`](/api/interfaces/textprops/#strokeuniform)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`strokeWidth`](/api/interfaces/textprops/#strokewidth)

#### Defined in

src/shapes/Object/types/FillStrokeProps.ts:41

***

### styles

> **styles**: [`TextStyle`](/api/type-aliases/textstyle/)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`styles`](/api/interfaces/textprops/#styles)

#### Defined in

src/shapes/Text/Text.ts:117

***

### textAlign

> **textAlign**: `string`

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`textAlign`](/api/interfaces/textprops/#textalign)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`top`](/api/interfaces/textprops/#top)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`touchCornerSize`](/api/interfaces/textprops/#touchcornersize)

#### Defined in

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

[`TextProps`](/api/interfaces/textprops/).[`transparentCorners`](/api/interfaces/textprops/#transparentcorners)

#### Defined in

src/shapes/Object/types/ControlProps.ts:21

***

### underline

> **underline**: `boolean`

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`underline`](/api/interfaces/textprops/#underline)

#### Defined in

src/shapes/Text/Text.ts:102

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`visible`](/api/interfaces/textprops/#visible)

#### Defined in

src/shapes/Object/types/SerializedObjectProps.ts:40

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`width`](/api/interfaces/textprops/#width)

#### Defined in

src/shapes/Object/types/BaseProps.ts:27
