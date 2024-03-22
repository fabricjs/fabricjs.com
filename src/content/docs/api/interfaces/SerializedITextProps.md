---
editUrl: false
next: false
prev: false
title: "SerializedITextProps"
---

## Extends

- [`SerializedTextProps`](SerializedTextProps.md).`UniqueITextProps`

## Properties

### angle

> **angle**: [`TDegree`](../type-aliases/TDegree.md)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`angle`](SerializedTextProps.md#angle)

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

[`SerializedTextProps`](SerializedTextProps.md).[`backgroundColor`](SerializedTextProps.md#backgroundcolor)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:26

***

### charSpacing

> **charSpacing**: `number`

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`charSpacing`](SerializedTextProps.md#charspacing)

#### Source

src/shapes/Text/Text.ts:94

***

### clipPath?

> **`optional`** **clipPath**: `Partial`\<[`SerializedObjectProps`](SerializedObjectProps.md) & `ClipPathProps`\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`clipPath`](SerializedTextProps.md#clippath)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:49

***

### direction

> **direction**: `CanvasDirection`

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`direction`](SerializedTextProps.md#direction)

#### Source

src/shapes/Text/Text.ts:106

***

### fill

> **fill**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](../classes/Gradient.md)\<`"linear"`, `"linear"`\>\> & `Object` \| `Partial`\<[`Gradient`](../classes/Gradient.md)\<`"radial"`, `"radial"`\>\> & `Object`

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`fill`](SerializedTextProps.md#fill)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:17

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

[`SerializedTextProps`](SerializedTextProps.md).[`fillRule`](SerializedTextProps.md#fillrule)

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

[`SerializedTextProps`](SerializedTextProps.md).[`flipX`](SerializedTextProps.md#flipx)

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

[`SerializedTextProps`](SerializedTextProps.md).[`flipY`](SerializedTextProps.md#flipy)

#### Source

src/shapes/Object/types/BaseProps.ts:71

***

### fontFamily

> **fontFamily**: `string`

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`fontFamily`](SerializedTextProps.md#fontfamily)

#### Source

src/shapes/Text/Text.ts:98

***

### fontSize

> **fontSize**: `number`

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`fontSize`](SerializedTextProps.md#fontsize)

#### Source

src/shapes/Text/Text.ts:96

***

### fontStyle

> **fontStyle**: `string`

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`fontStyle`](SerializedTextProps.md#fontstyle)

#### Source

src/shapes/Text/Text.ts:99

***

### fontWeight

> **fontWeight**: `string`

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`fontWeight`](SerializedTextProps.md#fontweight)

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

[`SerializedTextProps`](SerializedTextProps.md).[`globalCompositeOperation`](SerializedTextProps.md#globalcompositeoperation)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:18

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`height`](SerializedTextProps.md#height)

#### Source

src/shapes/Object/types/BaseProps.ts:34

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

[`SerializedTextProps`](SerializedTextProps.md).[`left`](SerializedTextProps.md#left)

#### Source

src/shapes/Object/types/BaseProps.ts:11

***

### lineHeight

> **lineHeight**: `number`

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`lineHeight`](SerializedTextProps.md#lineheight)

#### Source

src/shapes/Text/Text.ts:95

***

### linethrough

> **linethrough**: `boolean`

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`linethrough`](SerializedTextProps.md#linethrough)

#### Source

src/shapes/Text/Text.ts:104

***

### opacity

> **opacity**: `number`

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`opacity`](SerializedTextProps.md#opacity)

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

[`SerializedTextProps`](SerializedTextProps.md).[`originX`](SerializedTextProps.md#originx)

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

[`SerializedTextProps`](SerializedTextProps.md).[`originY`](SerializedTextProps.md#originy)

#### Source

src/shapes/Object/types/BaseProps.ts:50

***

### overline

> **overline**: `boolean`

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`overline`](SerializedTextProps.md#overline)

#### Source

src/shapes/Text/Text.ts:103

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`paintFirst`](SerializedTextProps.md#paintfirst)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:9

***

### path?

> **`optional`** **path**: [`Path`](../classes/Path.md)\<`Partial`\<[`PathProps`](PathProps.md)\>, [`SerializedPathProps`](SerializedPathProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`path`](SerializedTextProps.md#path)

#### Source

src/shapes/Text/Text.ts:107

***

### pathAlign

> **pathAlign**: [`TPathAlign`](../type-aliases/TPathAlign.md)

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`pathAlign`](SerializedTextProps.md#pathalign)

#### Source

src/shapes/Text/Text.ts:101

***

### pathSide

> **pathSide**: [`TPathSide`](../type-aliases/TPathSide.md)

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`pathSide`](SerializedTextProps.md#pathside)

#### Source

src/shapes/Text/Text.ts:100

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`scaleX`](SerializedTextProps.md#scalex)

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

[`SerializedTextProps`](SerializedTextProps.md).[`scaleY`](SerializedTextProps.md#scaley)

#### Source

src/shapes/Object/types/BaseProps.ts:85

***

### selectionEnd

> **selectionEnd**: `number`

#### Inherited from

`UniqueITextProps.selectionEnd`

#### Source

src/shapes/IText/IText.ts:59

***

### selectionStart

> **selectionStart**: `number`

#### Inherited from

`UniqueITextProps.selectionStart`

#### Source

src/shapes/IText/IText.ts:58

***

### shadow

> **shadow**: `null` \| `Partial`\<[`SerializedShadowOptions`](../type-aliases/SerializedShadowOptions.md)\>

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`shadow`](SerializedTextProps.md#shadow)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:33

***

### skewX

> **skewX**: [`TDegree`](../type-aliases/TDegree.md)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`skewX`](SerializedTextProps.md#skewx)

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

[`SerializedTextProps`](SerializedTextProps.md).[`skewY`](SerializedTextProps.md#skewy)

#### Source

src/shapes/Object/types/BaseProps.ts:99

***

### stroke

> **stroke**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](../classes/Gradient.md)\<`"linear"`, `"linear"`\>\> & `Object` \| `Partial`\<[`Gradient`](../classes/Gradient.md)\<`"radial"`, `"radial"`\>\> & `Object`

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`stroke`](SerializedTextProps.md#stroke)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:34

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`strokeDashArray`](SerializedTextProps.md#strokedasharray)

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

[`SerializedTextProps`](SerializedTextProps.md).[`strokeDashOffset`](SerializedTextProps.md#strokedashoffset)

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

[`SerializedTextProps`](SerializedTextProps.md).[`strokeLineCap`](SerializedTextProps.md#strokelinecap)

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

[`SerializedTextProps`](SerializedTextProps.md).[`strokeLineJoin`](SerializedTextProps.md#strokelinejoin)

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

[`SerializedTextProps`](SerializedTextProps.md).[`strokeMiterLimit`](SerializedTextProps.md#strokemiterlimit)

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

[`SerializedTextProps`](SerializedTextProps.md).[`strokeUniform`](SerializedTextProps.md#strokeuniform)

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

[`SerializedTextProps`](SerializedTextProps.md).[`strokeWidth`](SerializedTextProps.md#strokewidth)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:41

***

### styles

> **styles**: [`TextStyle`](../type-aliases/TextStyle.md) \| [`TextStyleArray`](../namespaces/util/type-aliases/TextStyleArray.md)

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`styles`](SerializedTextProps.md#styles)

#### Source

src/shapes/Text/Text.ts:113

***

### textAlign

> **textAlign**: `string`

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`textAlign`](SerializedTextProps.md#textalign)

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

[`SerializedTextProps`](SerializedTextProps.md).[`top`](SerializedTextProps.md#top)

#### Source

src/shapes/Object/types/BaseProps.ts:20

***

### underline

> **underline**: `boolean`

#### Inherited from

[`SerializedTextProps`](SerializedTextProps.md).[`underline`](SerializedTextProps.md#underline)

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

[`SerializedTextProps`](SerializedTextProps.md).[`visible`](SerializedTextProps.md#visible)

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

[`SerializedTextProps`](SerializedTextProps.md).[`width`](SerializedTextProps.md#width)

#### Source

src/shapes/Object/types/BaseProps.ts:27
