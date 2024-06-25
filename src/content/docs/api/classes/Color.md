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

### new Color()

> **new Color**(`color`?): [`Color`](/api/classes/color/)

#### Parameters

• **color?**: [`TColorArg`](/api/type-aliases/tcolorarg/)

optional in hex or rgb(a) or hsl format or from known color list

#### Returns

[`Color`](/api/classes/color/)

#### Defined in

src/color/Color.ts:23

## Methods

### getAlpha()

> **getAlpha**(): `number`

Gets value of alpha channel for this color

#### Returns

`number`

0-1

#### Defined in

src/color/Color.ts:129

***

### getSource()

> **getSource**(): [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])

#### Returns

[`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

#### Defined in

src/color/Color.ts:60

***

### overlayWith()

> **overlayWith**(`otherColor`): [`Color`](/api/classes/color/)

Overlays color with another color

#### Parameters

• **otherColor**: `string` \| [`Color`](/api/classes/color/)

#### Returns

[`Color`](/api/classes/color/)

thisArg

#### Defined in

src/color/Color.ts:169

***

### setAlpha()

> **setAlpha**(`alpha`): [`Color`](/api/classes/color/)

Sets value of alpha channel for this color

#### Parameters

• **alpha**: `number`

Alpha value 0-1

#### Returns

[`Color`](/api/classes/color/)

thisArg

#### Defined in

src/color/Color.ts:138

***

### setSource()

> **setSource**(`source`): `void`

Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])

#### Parameters

• **source**: [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

#### Returns

`void`

#### Defined in

src/color/Color.ts:68

***

### toBlackWhite()

> **toBlackWhite**(`threshold`): [`Color`](/api/classes/color/)

Transforms color to its black and white representation

#### Parameters

• **threshold**: `number`

#### Returns

[`Color`](/api/classes/color/)

thisArg

#### Defined in

src/color/Color.ts:157

***

### toGrayscale()

> **toGrayscale**(): [`Color`](/api/classes/color/)

Transforms color to its grayscale representation

#### Returns

[`Color`](/api/classes/color/)

thisArg

#### Defined in

src/color/Color.ts:147

***

### toHex()

> **toHex**(): `string`

Returns color representation in HEX format

#### Returns

`string`

ex: FF5555

#### Defined in

src/color/Color.ts:111

***

### toHexa()

> **toHexa**(): `string`

Returns color representation in HEXA format

#### Returns

`string`

ex: FF5555CC

#### Defined in

src/color/Color.ts:120

***

### toHsl()

> **toHsl**(): `string`

Returns color representation in HSL format

#### Returns

`string`

ex: hsl(0-360,0%-100%,0%-100%)

#### Defined in

src/color/Color.ts:93

***

### toHsla()

> **toHsla**(): `string`

Returns color representation in HSLA format

#### Returns

`string`

ex: hsla(0-360,0%-100%,0%-100%,0-1)

#### Defined in

src/color/Color.ts:102

***

### toRgb()

> **toRgb**(): `string`

Returns color representation in RGB format

#### Returns

`string`

ex: rgb(0-255,0-255,0-255)

#### Defined in

src/color/Color.ts:76

***

### toRgba()

> **toRgba**(): `string`

Returns color representation in RGBA format

#### Returns

`string`

ex: rgba(0-255,0-255,0-255,0-1)

#### Defined in

src/color/Color.ts:85

***

### fromHex()

> `static` **fromHex**(`color`): [`Color`](/api/classes/color/)

Returns new color object, when given a color in HEX format

#### Parameters

• **color**: `string`

Color value ex: FF5555

#### Returns

[`Color`](/api/classes/color/)

#### Static

#### Member Of

Color

#### Defined in

src/color/Color.ts:293

***

### fromHsl()

> `static` **fromHsl**(`color`): [`Color`](/api/classes/color/)

Returns new color object, when given a color in HSL format

#### Parameters

• **color**: `string`

Color value ex: hsl(0-260,0%-100%,0%-100%)

#### Returns

[`Color`](/api/classes/color/)

#### Member Of

Color

#### Defined in

src/color/Color.ts:232

***

### fromHsla()

> `static` **fromHsla**(`color`): [`Color`](/api/classes/color/)

Returns new color object, when given a color in HSLA format

#### Parameters

• **color**: `string`

#### Returns

[`Color`](/api/classes/color/)

#### Static

#### Function

#### Member Of

Color

#### Defined in

src/color/Color.ts:244

***

### fromRgb()

> `static` **fromRgb**(`color`): [`Color`](/api/classes/color/)

Returns new color object, when given a color in RGB format

#### Parameters

• **color**: `string`

Color value ex: rgb(0-255,0-255,0-255)

#### Returns

[`Color`](/api/classes/color/)

#### Member Of

Color

#### Defined in

src/color/Color.ts:191

***

### fromRgba()

> `static` **fromRgba**(`color`): [`Color`](/api/classes/color/)

Returns new color object, when given a color in RGBA format

#### Parameters

• **color**: `string`

#### Returns

[`Color`](/api/classes/color/)

#### Static

#### Function

#### Member Of

Color

#### Defined in

src/color/Color.ts:203

***

### sourceFromHex()

> `static` **sourceFromHex**(`color`): `undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in HEX format

#### Parameters

• **color**: `string`

ex: FF5555 or FF5544CC (RGBa)

#### Returns

`undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

source

#### Static

#### Member Of

Color

#### Defined in

src/color/Color.ts:304

***

### sourceFromHsl()

> `static` **sourceFromHsl**(`color`): `undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in HSL or HSLA format.
Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>

#### Parameters

• **color**: `string`

Color value ex: hsl(0-360,0%-100%,0%-100%) or hsla(0-360,0%-100%,0%-100%, 0-1)

#### Returns

`undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

source

#### Member Of

Color

#### See

http://http://www.w3.org/TR/css3-color/#hsl-color

#### Defined in

src/color/Color.ts:256

***

### sourceFromRgb()

> `static` **sourceFromRgb**(`color`): `undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in RGB or RGBA format

#### Parameters

• **color**: `string`

Color value ex: rgb(0-255,0-255,0-255), rgb(0%-100%,0%-100%,0%-100%)

#### Returns

`undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

source

#### Member Of

Color

#### Defined in

src/color/Color.ts:213
