---
editUrl: false
next: false
prev: false
title: "TextboxProps"
---

## Extends

- [`ITextProps`](/api/interfaces/itextprops/).`UniqueTextboxProps`

## Properties

### \_wordJoiners

> **\_wordJoiners**: `RegExp`

#### Inherited from

`UniqueTextboxProps._wordJoiners`

#### Defined in

src/shapes/Textbox.ts:39

***

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

[`ITextProps`](/api/interfaces/itextprops/).[`absolutePositioned`](/api/interfaces/itextprops/#absolutepositioned)

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

[`ITextProps`](/api/interfaces/itextprops/).[`angle`](/api/interfaces/itextprops/#angle)

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

[`ITextProps`](/api/interfaces/itextprops/).[`backgroundColor`](/api/interfaces/itextprops/#backgroundcolor)

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

[`ITextProps`](/api/interfaces/itextprops/).[`borderColor`](/api/interfaces/itextprops/#bordercolor)

#### Defined in

src/shapes/Object/types/BorderProps.ts:7

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`borderDashArray`](/api/interfaces/itextprops/#borderdasharray)

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

[`ITextProps`](/api/interfaces/itextprops/).[`borderOpacityWhenMoving`](/api/interfaces/itextprops/#borderopacitywhenmoving)

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

[`ITextProps`](/api/interfaces/itextprops/).[`borderScaleFactor`](/api/interfaces/itextprops/#borderscalefactor)

#### Defined in

src/shapes/Object/types/BorderProps.ts:39

***

### canvas?

> `optional` **canvas**: [`Canvas`](/api/classes/canvas/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`canvas`](/api/interfaces/itextprops/#canvas)

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

[`ITextProps`](/api/interfaces/itextprops/).[`centeredRotation`](/api/interfaces/itextprops/#centeredrotation)

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

[`ITextProps`](/api/interfaces/itextprops/).[`centeredScaling`](/api/interfaces/itextprops/#centeredscaling)

#### Defined in

src/shapes/Object/types/ObjectTransformProps.ts:36

***

### charSpacing

> **charSpacing**: `number`

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`charSpacing`](/api/interfaces/itextprops/#charspacing)

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

[`ITextProps`](/api/interfaces/itextprops/).[`clipPath`](/api/interfaces/itextprops/#clippath)

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

[`ITextProps`](/api/interfaces/itextprops/).[`cornerColor`](/api/interfaces/itextprops/#cornercolor)

#### Defined in

src/shapes/Object/types/ControlProps.ts:28

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`cornerDashArray`](/api/interfaces/itextprops/#cornerdasharray)

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

[`ITextProps`](/api/interfaces/itextprops/).[`cornerSize`](/api/interfaces/itextprops/#cornersize)

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

[`ITextProps`](/api/interfaces/itextprops/).[`cornerStrokeColor`](/api/interfaces/itextprops/#cornerstrokecolor)

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

[`ITextProps`](/api/interfaces/itextprops/).[`cornerStyle`](/api/interfaces/itextprops/#cornerstyle)

#### Defined in

src/shapes/Object/types/ControlProps.ts:47

***

### direction

> **direction**: `CanvasDirection`

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`direction`](/api/interfaces/itextprops/#direction)

#### Defined in

src/shapes/Text/Text.ts:106

***

### dynamicMinWidth

> **dynamicMinWidth**: `number`

#### Inherited from

`UniqueTextboxProps.dynamicMinWidth`

#### Defined in

src/shapes/Textbox.ts:38

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`evented`](/api/interfaces/itextprops/#evented)

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

[`ITextProps`](/api/interfaces/itextprops/).[`excludeFromExport`](/api/interfaces/itextprops/#excludefromexport)

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

[`ITextProps`](/api/interfaces/itextprops/).[`fill`](/api/interfaces/itextprops/#fill)

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

[`ITextProps`](/api/interfaces/itextprops/).[`fillRule`](/api/interfaces/itextprops/#fillrule)

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

[`ITextProps`](/api/interfaces/itextprops/).[`flipX`](/api/interfaces/itextprops/#flipx)

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

[`ITextProps`](/api/interfaces/itextprops/).[`flipY`](/api/interfaces/itextprops/#flipy)

#### Defined in

src/shapes/Object/types/BaseProps.ts:71

***

### fontFamily

> **fontFamily**: `string`

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`fontFamily`](/api/interfaces/itextprops/#fontfamily)

#### Defined in

src/shapes/Text/Text.ts:98

***

### fontSize

> **fontSize**: `number`

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`fontSize`](/api/interfaces/itextprops/#fontsize)

#### Defined in

src/shapes/Text/Text.ts:96

***

### fontStyle

> **fontStyle**: `string`

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`fontStyle`](/api/interfaces/itextprops/#fontstyle)

#### Defined in

src/shapes/Text/Text.ts:99

***

### fontWeight

> **fontWeight**: `string`

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`fontWeight`](/api/interfaces/itextprops/#fontweight)

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

[`ITextProps`](/api/interfaces/itextprops/).[`globalCompositeOperation`](/api/interfaces/itextprops/#globalcompositeoperation)

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

[`ITextProps`](/api/interfaces/itextprops/).[`hasBorders`](/api/interfaces/itextprops/#hasborders)

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

[`ITextProps`](/api/interfaces/itextprops/).[`hasControls`](/api/interfaces/itextprops/#hascontrols)

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

[`ITextProps`](/api/interfaces/itextprops/).[`height`](/api/interfaces/itextprops/#height)

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

[`ITextProps`](/api/interfaces/itextprops/).[`hoverCursor`](/api/interfaces/itextprops/#hovercursor)

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

[`ITextProps`](/api/interfaces/itextprops/).[`includeDefaultValues`](/api/interfaces/itextprops/#includedefaultvalues)

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

[`ITextProps`](/api/interfaces/itextprops/).[`inverted`](/api/interfaces/itextprops/#inverted)

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

[`ITextProps`](/api/interfaces/itextprops/).[`left`](/api/interfaces/itextprops/#left)

#### Defined in

src/shapes/Object/types/BaseProps.ts:11

***

### lineHeight

> **lineHeight**: `number`

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`lineHeight`](/api/interfaces/itextprops/#lineheight)

#### Defined in

src/shapes/Text/Text.ts:95

***

### linethrough

> **linethrough**: `boolean`

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`linethrough`](/api/interfaces/itextprops/#linethrough)

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

[`ITextProps`](/api/interfaces/itextprops/).[`lockMovementX`](/api/interfaces/itextprops/#lockmovementx)

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

[`ITextProps`](/api/interfaces/itextprops/).[`lockMovementY`](/api/interfaces/itextprops/#lockmovementy)

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

[`ITextProps`](/api/interfaces/itextprops/).[`lockRotation`](/api/interfaces/itextprops/#lockrotation)

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

[`ITextProps`](/api/interfaces/itextprops/).[`lockScalingFlip`](/api/interfaces/itextprops/#lockscalingflip)

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

[`ITextProps`](/api/interfaces/itextprops/).[`lockScalingX`](/api/interfaces/itextprops/#lockscalingx)

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

[`ITextProps`](/api/interfaces/itextprops/).[`lockScalingY`](/api/interfaces/itextprops/#lockscalingy)

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

[`ITextProps`](/api/interfaces/itextprops/).[`lockSkewingX`](/api/interfaces/itextprops/#lockskewingx)

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

[`ITextProps`](/api/interfaces/itextprops/).[`lockSkewingY`](/api/interfaces/itextprops/#lockskewingy)

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

[`ITextProps`](/api/interfaces/itextprops/).[`minScaleLimit`](/api/interfaces/itextprops/#minscalelimit)

#### Defined in

src/shapes/Object/types/ObjectProps.ts:27

***

### minWidth

> **minWidth**: `number`

#### Inherited from

`UniqueTextboxProps.minWidth`

#### Defined in

src/shapes/Textbox.ts:36

***

### moveCursor

> **moveCursor**: `null` \| `string`

Default cursor value used when moving this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`moveCursor`](/api/interfaces/itextprops/#movecursor)

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

[`ITextProps`](/api/interfaces/itextprops/).[`noScaleCache`](/api/interfaces/itextprops/#noscalecache)

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

[`ITextProps`](/api/interfaces/itextprops/).[`objectCaching`](/api/interfaces/itextprops/#objectcaching)

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

[`ITextProps`](/api/interfaces/itextprops/).[`opacity`](/api/interfaces/itextprops/#opacity)

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

[`ITextProps`](/api/interfaces/itextprops/).[`originX`](/api/interfaces/itextprops/#originx)

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

[`ITextProps`](/api/interfaces/itextprops/).[`originY`](/api/interfaces/itextprops/#originy)

#### Defined in

src/shapes/Object/types/BaseProps.ts:50

***

### overline

> **overline**: `boolean`

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`overline`](/api/interfaces/itextprops/#overline)

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

[`ITextProps`](/api/interfaces/itextprops/).[`padding`](/api/interfaces/itextprops/#padding)

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

[`ITextProps`](/api/interfaces/itextprops/).[`paintFirst`](/api/interfaces/itextprops/#paintfirst)

#### Defined in

src/shapes/Object/types/FillStrokeProps.ts:9

***

### path?

> `optional` **path**: [`Path`](/api/classes/path/)\<`Partial`\<[`PathProps`](/api/interfaces/pathprops/)\>, [`SerializedPathProps`](/api/interfaces/serializedpathprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`path`](/api/interfaces/itextprops/#path)

#### Defined in

src/shapes/Text/Text.ts:107

***

### pathAlign

> **pathAlign**: [`TPathAlign`](/api/type-aliases/tpathalign/)

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`pathAlign`](/api/interfaces/itextprops/#pathalign)

#### Defined in

src/shapes/Text/Text.ts:101

***

### pathSide

> **pathSide**: [`TPathSide`](/api/type-aliases/tpathside/)

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`pathSide`](/api/interfaces/itextprops/#pathside)

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

[`ITextProps`](/api/interfaces/itextprops/).[`perPixelTargetFind`](/api/interfaces/itextprops/#perpixeltargetfind)

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

[`ITextProps`](/api/interfaces/itextprops/).[`scaleX`](/api/interfaces/itextprops/#scalex)

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

[`ITextProps`](/api/interfaces/itextprops/).[`scaleY`](/api/interfaces/itextprops/#scaley)

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

[`ITextProps`](/api/interfaces/itextprops/).[`selectable`](/api/interfaces/itextprops/#selectable)

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

[`ITextProps`](/api/interfaces/itextprops/).[`selectionBackgroundColor`](/api/interfaces/itextprops/#selectionbackgroundcolor)

#### Defined in

src/shapes/Object/types/FabricObjectProps.ts:43

***

### selectionEnd

> **selectionEnd**: `number`

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`selectionEnd`](/api/interfaces/itextprops/#selectionend)

#### Defined in

src/shapes/IText/IText.ts:59

***

### selectionStart

> **selectionStart**: `number`

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`selectionStart`](/api/interfaces/itextprops/#selectionstart)

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

[`ITextProps`](/api/interfaces/itextprops/).[`shadow`](/api/interfaces/itextprops/#shadow)

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

[`ITextProps`](/api/interfaces/itextprops/).[`skewX`](/api/interfaces/itextprops/#skewx)

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

[`ITextProps`](/api/interfaces/itextprops/).[`skewY`](/api/interfaces/itextprops/#skewy)

#### Defined in

src/shapes/Object/types/BaseProps.ts:99

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

The angle that an object will lock to while rotating.

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`snapAngle`](/api/interfaces/itextprops/#snapangle)

#### Defined in

src/shapes/Object/types/ObjectTransformProps.ts:8

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`snapThreshold`](/api/interfaces/itextprops/#snapthreshold)

#### Defined in

src/shapes/Object/types/ObjectTransformProps.ts:15

***

### splitByGrapheme

> **splitByGrapheme**: `boolean`

#### Inherited from

`UniqueTextboxProps.splitByGrapheme`

#### Defined in

src/shapes/Textbox.ts:37

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

[`ITextProps`](/api/interfaces/itextprops/).[`stroke`](/api/interfaces/itextprops/#stroke)

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

[`ITextProps`](/api/interfaces/itextprops/).[`strokeDashArray`](/api/interfaces/itextprops/#strokedasharray)

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

[`ITextProps`](/api/interfaces/itextprops/).[`strokeDashOffset`](/api/interfaces/itextprops/#strokedashoffset)

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

[`ITextProps`](/api/interfaces/itextprops/).[`strokeLineCap`](/api/interfaces/itextprops/#strokelinecap)

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

[`ITextProps`](/api/interfaces/itextprops/).[`strokeLineJoin`](/api/interfaces/itextprops/#strokelinejoin)

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

[`ITextProps`](/api/interfaces/itextprops/).[`strokeMiterLimit`](/api/interfaces/itextprops/#strokemiterlimit)

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

[`ITextProps`](/api/interfaces/itextprops/).[`strokeUniform`](/api/interfaces/itextprops/#strokeuniform)

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

[`ITextProps`](/api/interfaces/itextprops/).[`strokeWidth`](/api/interfaces/itextprops/#strokewidth)

#### Defined in

src/shapes/Object/types/FillStrokeProps.ts:41

***

### styles

> **styles**: [`TextStyle`](/api/type-aliases/textstyle/)

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`styles`](/api/interfaces/itextprops/#styles)

#### Defined in

src/shapes/Text/Text.ts:117

***

### textAlign

> **textAlign**: `string`

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`textAlign`](/api/interfaces/itextprops/#textalign)

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

[`ITextProps`](/api/interfaces/itextprops/).[`top`](/api/interfaces/itextprops/#top)

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

[`ITextProps`](/api/interfaces/itextprops/).[`touchCornerSize`](/api/interfaces/itextprops/#touchcornersize)

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

[`ITextProps`](/api/interfaces/itextprops/).[`transparentCorners`](/api/interfaces/itextprops/#transparentcorners)

#### Defined in

src/shapes/Object/types/ControlProps.ts:21

***

### underline

> **underline**: `boolean`

#### Inherited from

[`ITextProps`](/api/interfaces/itextprops/).[`underline`](/api/interfaces/itextprops/#underline)

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

[`ITextProps`](/api/interfaces/itextprops/).[`visible`](/api/interfaces/itextprops/#visible)

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

[`ITextProps`](/api/interfaces/itextprops/).[`width`](/api/interfaces/itextprops/#width)

#### Defined in

src/shapes/Object/types/BaseProps.ts:27
