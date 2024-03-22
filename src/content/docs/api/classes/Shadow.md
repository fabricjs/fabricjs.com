---
editUrl: false
next: false
prev: false
title: "Shadow"
---

## Constructors

### new Shadow(options)

> **new Shadow**(`options`?): [`Shadow`](Shadow.md)

#### Parameters

• **options?**: `Partial`\<[`TClassProperties`](../type-aliases/TClassProperties.md)\<[`Shadow`](Shadow.md)\>\>

Options object with any of color, blur, offsetX, offsetY properties or string (e.g. "rgba(0,0,0,0.2) 2px 2px 10px")

#### Returns

[`Shadow`](Shadow.md)

#### See

[demo](http://fabricjs.com/shadows|Shadow)

#### Source

src/Shadow.ts:125

### new Shadow(svgAttribute)

> **new Shadow**(`svgAttribute`): [`Shadow`](Shadow.md)

#### Parameters

• **svgAttribute**: `string`

#### Returns

[`Shadow`](Shadow.md)

#### Source

src/Shadow.ts:126

## Properties

### affectStroke

> **affectStroke**: `boolean`

Whether the shadow should affect stroke operations

#### Default

```ts

```

#### Source

src/Shadow.ts:97

***

### blur

> **blur**: `number`

Shadow blur

#### Source

src/Shadow.ts:76

***

### color

> **color**: `string`

Shadow color

#### Default

```ts

```

#### Source

src/Shadow.ts:70

***

### id

> **id**: `number`

#### Source

src/Shadow.ts:115

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Indicates whether toObject should include default values

#### Default

```ts

```

#### Source

src/Shadow.ts:104

***

### nonScaling

> **nonScaling**: `boolean`

When `false`, the shadow will scale with the object.
When `true`, the shadow's offsetX, offsetY, and blur will not be affected by the object's scale.
default to false

#### Default

```ts

```

#### Source

src/Shadow.ts:113

***

### offsetX

> **offsetX**: `number`

Shadow horizontal offset

#### Default

```ts

```

#### Source

src/Shadow.ts:83

***

### offsetY

> **offsetY**: `number`

Shadow vertical offset

#### Default

```ts

```

#### Source

src/Shadow.ts:90

***

### ownDefaults

> **`static`** **ownDefaults**: `Partial`\<[`TClassProperties`](../type-aliases/TClassProperties.md)\<[`Shadow`](Shadow.md)\>\> = `shadowDefaultValues`

#### Source

src/Shadow.ts:117

***

### type

> **`static`** **type**: `string` = `'shadow'`

#### Source

src/Shadow.ts:119

## Methods

### toObject()

> **toObject**(): `Partial`\<[`SerializedShadowOptions`](../type-aliases/SerializedShadowOptions.md)\>

Returns object representation of a shadow

#### Returns

`Partial`\<[`SerializedShadowOptions`](../type-aliases/SerializedShadowOptions.md)\>

Object representation of a shadow instance

#### Source

src/Shadow.ts:228

***

### toSVG()

> **toSVG**(`object`): `string`

Returns SVG representation of a shadow

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`string`

SVG representation of a shadow

#### Source

src/Shadow.ts:173

***

### toString()

> **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

Returns CSS3 text-shadow declaration

#### See

http://www.w3.org/TR/css-text-decor-3/#text-shadow

#### Source

src/Shadow.ts:164

***

### fromObject()

> **`static`** **fromObject**(`options`): `Promise`\<[`Shadow`](Shadow.md)\>

#### Parameters

• **options**: `Partial`\<[`TClassProperties`](../type-aliases/TClassProperties.md)\<[`Shadow`](Shadow.md)\>\>

#### Returns

`Promise`\<[`Shadow`](Shadow.md)\>

#### Source

src/Shadow.ts:244

***

### parseShadow()

> **`static`** **parseShadow**(`value`): `Object`

#### Parameters

• **value**: `string`

Shadow value to parse

#### Returns

`Object`

Shadow object with color, offsetX, offsetY and blur

##### blur

> **blur**: `number`

##### color

> **color**: `string`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Source

src/Shadow.ts:143
