---
editUrl: false
next: false
prev: false
title: "Shadow"
---

## Constructors

### new Shadow()

> **new Shadow**(`options`?): [`Shadow`](/api/classes/shadow/)

#### Parameters

• **options?**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`Shadow`](/api/classes/shadow/)\>\>

Options object with any of color, blur, offsetX, offsetY properties or string (e.g. "rgba(0,0,0,0.2) 2px 2px 10px")

#### Returns

[`Shadow`](/api/classes/shadow/)

#### See

[demo](http://fabricjs.com/shadows|Shadow)

#### Defined in

[src/Shadow.ts:124](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L124)

### new Shadow()

> **new Shadow**(`svgAttribute`): [`Shadow`](/api/classes/shadow/)

#### Parameters

• **svgAttribute**: `string`

#### Returns

[`Shadow`](/api/classes/shadow/)

#### Defined in

[src/Shadow.ts:125](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L125)

## Properties

### affectStroke

> **affectStroke**: `boolean`

Whether the shadow should affect stroke operations

#### Default

```ts

```

#### Defined in

[src/Shadow.ts:96](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L96)

***

### blur

> **blur**: `number`

Shadow blur

#### Defined in

[src/Shadow.ts:75](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L75)

***

### color

> **color**: `string`

Shadow color

#### Default

```ts

```

#### Defined in

[src/Shadow.ts:69](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L69)

***

### id

> **id**: `number`

#### Defined in

[src/Shadow.ts:114](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L114)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Indicates whether toObject should include default values

#### Default

```ts

```

#### Defined in

[src/Shadow.ts:103](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L103)

***

### nonScaling

> **nonScaling**: `boolean`

When `false`, the shadow will scale with the object.
When `true`, the shadow's offsetX, offsetY, and blur will not be affected by the object's scale.
default to false

#### Default

```ts

```

#### Defined in

[src/Shadow.ts:112](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L112)

***

### offsetX

> **offsetX**: `number`

Shadow horizontal offset

#### Default

```ts

```

#### Defined in

[src/Shadow.ts:82](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L82)

***

### offsetY

> **offsetY**: `number`

Shadow vertical offset

#### Default

```ts

```

#### Defined in

[src/Shadow.ts:89](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L89)

***

### ownDefaults

> `static` **ownDefaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`Shadow`](/api/classes/shadow/)\>\> = `shadowDefaultValues`

#### Defined in

[src/Shadow.ts:116](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L116)

***

### type

> `static` **type**: `string` = `'shadow'`

#### Defined in

[src/Shadow.ts:118](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L118)

## Methods

### toObject()

> **toObject**(): `Partial`\<[`SerializedShadowOptions`](/api/type-aliases/serializedshadowoptions/)\>

Returns object representation of a shadow

#### Returns

`Partial`\<[`SerializedShadowOptions`](/api/type-aliases/serializedshadowoptions/)\>

Object representation of a shadow instance

#### Defined in

[src/Shadow.ts:226](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L226)

***

### toSVG()

> **toSVG**(`object`): `string`

Returns SVG representation of a shadow

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

SVG representation of a shadow

#### Defined in

[src/Shadow.ts:171](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L171)

***

### toString()

> **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

Returns CSS3 text-shadow declaration

#### See

http://www.w3.org/TR/css-text-decor-3/#text-shadow

#### Defined in

[src/Shadow.ts:162](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L162)

***

### fromObject()

> `static` **fromObject**(`options`): `Promise`\<[`Shadow`](/api/classes/shadow/)\>

#### Parameters

• **options**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`Shadow`](/api/classes/shadow/)\>\>

#### Returns

`Promise`\<[`Shadow`](/api/classes/shadow/)\>

#### Defined in

[src/Shadow.ts:242](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L242)

***

### parseShadow()

> `static` **parseShadow**(`value`): `object`

#### Parameters

• **value**: `string`

Shadow value to parse

#### Returns

`object`

Shadow object with color, offsetX, offsetY and blur

##### blur

> **blur**: `number`

##### color

> **color**: `string`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Defined in

[src/Shadow.ts:142](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Shadow.ts#L142)
