---
editUrl: false
next: false
prev: false
title: "SerializedTextboxProps"
---

## Extends

- [`SerializedITextProps`](/api/interfaces/serializeditextprops/).`Pick`\<`UniqueTextboxProps`, `"minWidth"` \| `"splitByGrapheme"`\>

## Properties

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`angle`](/api/interfaces/serializeditextprops/#angle)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`backgroundColor`](/api/interfaces/serializeditextprops/#backgroundcolor)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/SerializedObjectProps.ts#L26)

***

### charSpacing

> **charSpacing**: `number`

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`charSpacing`](/api/interfaces/serializeditextprops/#charspacing)

#### Defined in

[src/shapes/Text/Text.ts:94](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L94)

***

### clipPath?

> `optional` **clipPath**: `Partial`\<[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/) & `ClipPathProps`\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`clipPath`](/api/interfaces/serializeditextprops/#clippath)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:49](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/SerializedObjectProps.ts#L49)

***

### direction

> **direction**: `CanvasDirection`

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`direction`](/api/interfaces/serializeditextprops/#direction)

#### Defined in

[src/shapes/Text/Text.ts:106](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L106)

***

### fill

> **fill**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"linear"`, `"linear"`\>\> & `object` \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\> & `object`

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`fill`](/api/interfaces/serializeditextprops/#fill)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:17](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FillStrokeProps.ts#L17)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`fillRule`](/api/interfaces/serializeditextprops/#fillrule)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`flipX`](/api/interfaces/serializeditextprops/#flipx)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`flipY`](/api/interfaces/serializeditextprops/#flipy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:71](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L71)

***

### fontFamily

> **fontFamily**: `string`

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`fontFamily`](/api/interfaces/serializeditextprops/#fontfamily)

#### Defined in

[src/shapes/Text/Text.ts:98](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L98)

***

### fontSize

> **fontSize**: `number`

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`fontSize`](/api/interfaces/serializeditextprops/#fontsize)

#### Defined in

[src/shapes/Text/Text.ts:96](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L96)

***

### fontStyle

> **fontStyle**: `string`

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`fontStyle`](/api/interfaces/serializeditextprops/#fontstyle)

#### Defined in

[src/shapes/Text/Text.ts:99](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L99)

***

### fontWeight

> **fontWeight**: `string`

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`fontWeight`](/api/interfaces/serializeditextprops/#fontweight)

#### Defined in

[src/shapes/Text/Text.ts:97](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L97)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`globalCompositeOperation`](/api/interfaces/serializeditextprops/#globalcompositeoperation)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/SerializedObjectProps.ts#L18)

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`height`](/api/interfaces/serializeditextprops/#height)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:34](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L34)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`left`](/api/interfaces/serializeditextprops/#left)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:11](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L11)

***

### lineHeight

> **lineHeight**: `number`

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`lineHeight`](/api/interfaces/serializeditextprops/#lineheight)

#### Defined in

[src/shapes/Text/Text.ts:95](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L95)

***

### linethrough

> **linethrough**: `boolean`

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`linethrough`](/api/interfaces/serializeditextprops/#linethrough)

#### Defined in

[src/shapes/Text/Text.ts:104](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L104)

***

### minWidth

> **minWidth**: `number`

#### Inherited from

`Pick.minWidth`

#### Defined in

[src/shapes/Textbox.ts:36](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L36)

***

### opacity

> **opacity**: `number`

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`opacity`](/api/interfaces/serializeditextprops/#opacity)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`originX`](/api/interfaces/serializeditextprops/#originx)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`originY`](/api/interfaces/serializeditextprops/#originy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:50](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L50)

***

### overline

> **overline**: `boolean`

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`overline`](/api/interfaces/serializeditextprops/#overline)

#### Defined in

[src/shapes/Text/Text.ts:103](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L103)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`paintFirst`](/api/interfaces/serializeditextprops/#paintfirst)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FillStrokeProps.ts#L9)

***

### path?

> `optional` **path**: [`Path`](/api/classes/path/)\<`Partial`\<[`PathProps`](/api/interfaces/pathprops/)\>, [`SerializedPathProps`](/api/interfaces/serializedpathprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`path`](/api/interfaces/serializeditextprops/#path)

#### Defined in

[src/shapes/Text/Text.ts:107](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L107)

***

### pathAlign

> **pathAlign**: [`TPathAlign`](/api/type-aliases/tpathalign/)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`pathAlign`](/api/interfaces/serializeditextprops/#pathalign)

#### Defined in

[src/shapes/Text/Text.ts:101](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L101)

***

### pathSide

> **pathSide**: [`TPathSide`](/api/type-aliases/tpathside/)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`pathSide`](/api/interfaces/serializeditextprops/#pathside)

#### Defined in

[src/shapes/Text/Text.ts:100](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L100)

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`scaleX`](/api/interfaces/serializeditextprops/#scalex)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`scaleY`](/api/interfaces/serializeditextprops/#scaley)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:85](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L85)

***

### selectionEnd

> **selectionEnd**: `number`

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`selectionEnd`](/api/interfaces/serializeditextprops/#selectionend)

#### Defined in

[src/shapes/IText/IText.ts:59](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L59)

***

### selectionStart

> **selectionStart**: `number`

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`selectionStart`](/api/interfaces/serializeditextprops/#selectionstart)

#### Defined in

[src/shapes/IText/IText.ts:58](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L58)

***

### shadow

> **shadow**: `null` \| `Partial`\<[`SerializedShadowOptions`](/api/type-aliases/serializedshadowoptions/)\>

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`shadow`](/api/interfaces/serializeditextprops/#shadow)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:33](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/SerializedObjectProps.ts#L33)

***

### skewX

> **skewX**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`skewX`](/api/interfaces/serializeditextprops/#skewx)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`skewY`](/api/interfaces/serializeditextprops/#skewy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:99](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L99)

***

### splitByGrapheme

> **splitByGrapheme**: `boolean`

#### Inherited from

`Pick.splitByGrapheme`

#### Defined in

[src/shapes/Textbox.ts:37](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L37)

***

### stroke

> **stroke**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"linear"`, `"linear"`\>\> & `object` \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\> & `object`

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`stroke`](/api/interfaces/serializeditextprops/#stroke)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:34](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FillStrokeProps.ts#L34)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeDashArray`](/api/interfaces/serializeditextprops/#strokedasharray)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeDashOffset`](/api/interfaces/serializeditextprops/#strokedashoffset)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeLineCap`](/api/interfaces/serializeditextprops/#strokelinecap)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeLineJoin`](/api/interfaces/serializeditextprops/#strokelinejoin)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeMiterLimit`](/api/interfaces/serializeditextprops/#strokemiterlimit)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeUniform`](/api/interfaces/serializeditextprops/#strokeuniform)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeWidth`](/api/interfaces/serializeditextprops/#strokewidth)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/FillStrokeProps.ts#L41)

***

### styles

> **styles**: [`TextStyle`](/api/type-aliases/textstyle/) \| [`TextStyleArray`](/api/namespaces/util/type-aliases/textstylearray/)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`styles`](/api/interfaces/serializeditextprops/#styles)

#### Defined in

[src/shapes/Text/Text.ts:113](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L113)

***

### textAlign

> **textAlign**: `string`

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`textAlign`](/api/interfaces/serializeditextprops/#textalign)

#### Defined in

[src/shapes/Text/Text.ts:105](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L105)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`top`](/api/interfaces/serializeditextprops/#top)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:20](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L20)

***

### underline

> **underline**: `boolean`

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`underline`](/api/interfaces/serializeditextprops/#underline)

#### Defined in

[src/shapes/Text/Text.ts:102](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L102)

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`visible`](/api/interfaces/serializeditextprops/#visible)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`width`](/api/interfaces/serializeditextprops/#width)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:27](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/types/BaseProps.ts#L27)
