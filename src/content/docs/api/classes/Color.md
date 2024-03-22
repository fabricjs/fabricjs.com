---
editUrl: false
next: false
prev: false
title: "Color"
---

Color common color operations

## Tutorial

[colors](http://fabricjs.com/fabric-intro-part-2/#colors)

## Constructors

### new Color(color)

> **new Color**(`color`?): [`Color`](Color.md)

#### Parameters

• **color?**: [`TColorArg`](../type-aliases/TColorArg.md)

optional in hex or rgb(a) or hsl format or from known color list

#### Returns

[`Color`](Color.md)

#### Source

src/color/Color.ts:23

## Methods

### getAlpha()

> **getAlpha**(): `number`

Gets value of alpha channel for this color

#### Returns

`number`

0-1

#### Source

src/color/Color.ts:129

***

### getSource()

> **getSource**(): [`TRGBAColorSource`](../type-aliases/TRGBAColorSource.md)

Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])

#### Returns

[`TRGBAColorSource`](../type-aliases/TRGBAColorSource.md)

#### Source

src/color/Color.ts:60

***

### overlayWith()

> **overlayWith**(`otherColor`): [`Color`](Color.md)

Overlays color with another color

#### Parameters

• **otherColor**: `string` \| [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

thisArg

#### Source

src/color/Color.ts:169

***

### setAlpha()

> **setAlpha**(`alpha`): [`Color`](Color.md)

Sets value of alpha channel for this color

#### Parameters

• **alpha**: `number`

Alpha value 0-1

#### Returns

[`Color`](Color.md)

thisArg

#### Source

src/color/Color.ts:138

***

### setSource()

> **setSource**(`source`): `void`

Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])

#### Parameters

• **source**: [`TRGBAColorSource`](../type-aliases/TRGBAColorSource.md)

#### Returns

`void`

#### Source

src/color/Color.ts:68

***

### toBlackWhite()

> **toBlackWhite**(`threshold`): [`Color`](Color.md)

Transforms color to its black and white representation

#### Parameters

• **threshold**: `number`

#### Returns

[`Color`](Color.md)

thisArg

#### Source

src/color/Color.ts:157

***

### toGrayscale()

> **toGrayscale**(): [`Color`](Color.md)

Transforms color to its grayscale representation

#### Returns

[`Color`](Color.md)

thisArg

#### Source

src/color/Color.ts:147

***

### toHex()

> **toHex**(): `string`

Returns color representation in HEX format

#### Returns

`string`

ex: FF5555

#### Source

src/color/Color.ts:111

***

### toHexa()

> **toHexa**(): `string`

Returns color representation in HEXA format

#### Returns

`string`

ex: FF5555CC

#### Source

src/color/Color.ts:120

***

### toHsl()

> **toHsl**(): `string`

Returns color representation in HSL format

#### Returns

`string`

ex: hsl(0-360,0%-100%,0%-100%)

#### Source

src/color/Color.ts:93

***

### toHsla()

> **toHsla**(): `string`

Returns color representation in HSLA format

#### Returns

`string`

ex: hsla(0-360,0%-100%,0%-100%,0-1)

#### Source

src/color/Color.ts:102

***

### toRgb()

> **toRgb**(): `string`

Returns color representation in RGB format

#### Returns

`string`

ex: rgb(0-255,0-255,0-255)

#### Source

src/color/Color.ts:76

***

### toRgba()

> **toRgba**(): `string`

Returns color representation in RGBA format

#### Returns

`string`

ex: rgba(0-255,0-255,0-255,0-1)

#### Source

src/color/Color.ts:85

***

### fromHex()

> **`static`** **fromHex**(`color`): [`Color`](Color.md)

Returns new color object, when given a color in HEX format

#### Parameters

• **color**: `string`

Color value ex: FF5555

#### Returns

[`Color`](Color.md)

#### Static

#### Member Of

Color

#### Source

src/color/Color.ts:293

***

### fromHsl()

> **`static`** **fromHsl**(`color`): [`Color`](Color.md)

Returns new color object, when given a color in HSL format

#### Parameters

• **color**: `string`

Color value ex: hsl(0-260,0%-100%,0%-100%)

#### Returns

[`Color`](Color.md)

#### Member Of

Color

#### Source

src/color/Color.ts:232

***

### fromHsla()

> **`static`** **fromHsla**(`color`): [`Color`](Color.md)

Returns new color object, when given a color in HSLA format

#### Parameters

• **color**: `string`

#### Returns

[`Color`](Color.md)

#### Static

#### Function

#### Member Of

Color

#### Source

src/color/Color.ts:244

***

### fromRgb()

> **`static`** **fromRgb**(`color`): [`Color`](Color.md)

Returns new color object, when given a color in RGB format

#### Parameters

• **color**: `string`

Color value ex: rgb(0-255,0-255,0-255)

#### Returns

[`Color`](Color.md)

#### Member Of

Color

#### Source

src/color/Color.ts:191

***

### fromRgba()

> **`static`** **fromRgba**(`color`): [`Color`](Color.md)

Returns new color object, when given a color in RGBA format

#### Parameters

• **color**: `string`

#### Returns

[`Color`](Color.md)

#### Static

#### Function

#### Member Of

Color

#### Source

src/color/Color.ts:203

***

### sourceFromHex()

> **`static`** **sourceFromHex**(`color`): `undefined` \| [`TRGBAColorSource`](../type-aliases/TRGBAColorSource.md)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in HEX format

#### Parameters

• **color**: `string`

ex: FF5555 or FF5544CC (RGBa)

#### Returns

`undefined` \| [`TRGBAColorSource`](../type-aliases/TRGBAColorSource.md)

source

#### Static

#### Member Of

Color

#### Source

src/color/Color.ts:304

***

### sourceFromHsl()

> **`static`** **sourceFromHsl**(`color`): `undefined` \| [`TRGBAColorSource`](../type-aliases/TRGBAColorSource.md)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in HSL or HSLA format.
Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>

#### Parameters

• **color**: `string`

Color value ex: hsl(0-360,0%-100%,0%-100%) or hsla(0-360,0%-100%,0%-100%, 0-1)

#### Returns

`undefined` \| [`TRGBAColorSource`](../type-aliases/TRGBAColorSource.md)

source

#### Member Of

Color

#### See

http://http://www.w3.org/TR/css3-color/#hsl-color

#### Source

src/color/Color.ts:256

***

### sourceFromRgb()

> **`static`** **sourceFromRgb**(`color`): `undefined` \| [`TRGBAColorSource`](../type-aliases/TRGBAColorSource.md)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in RGB or RGBA format

#### Parameters

• **color**: `string`

Color value ex: rgb(0-255,0-255,0-255), rgb(0%-100%,0%-100%,0%-100%)

#### Returns

`undefined` \| [`TRGBAColorSource`](../type-aliases/TRGBAColorSource.md)

source

#### Member Of

Color

#### Source

src/color/Color.ts:213
