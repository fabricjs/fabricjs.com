---
editUrl: false
next: false
prev: false
title: "Pattern"
---

## See

 - [demo](http://fabricjs.com/patterns)
 - [demo](http://fabricjs.com/dynamic-patterns)

## Constructors

### new Pattern()

> **new Pattern**(`options`?): [`Pattern`](/api/classes/pattern/)

Constructor

#### Parameters

• **options?**: [`PatternOptions`](/api/type-aliases/patternoptions/)

Options object

#### Returns

[`Pattern`](/api/classes/pattern/)

#### Defined in

[src/Pattern/Pattern.ts:95](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L95)

## Properties

### crossOrigin

> **crossOrigin**: [`TCrossOrigin`](/api/type-aliases/tcrossorigin/) = `''`

#### Default

```ts

```

#### Defined in

[src/Pattern/Pattern.ts:63](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L63)

***

### excludeFromExport?

> `optional` **excludeFromExport**: `boolean`

If true, this object will not be exported during the serialization of a canvas

#### Defined in

[src/Pattern/Pattern.ts:82](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L82)

***

### id

> `readonly` **id**: `number`

ID used for SVG export functionalities

#### Defined in

[src/Pattern/Pattern.ts:88](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L88)

***

### offsetX

> **offsetX**: `number` = `0`

Pattern horizontal offset from object's left/top corner

#### Default

```ts

```

#### Defined in

[src/Pattern/Pattern.ts:50](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L50)

***

### offsetY

> **offsetY**: `number` = `0`

Pattern vertical offset from object's left/top corner

#### Default

```ts

```

#### Defined in

[src/Pattern/Pattern.ts:57](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L57)

***

### patternTransform

> **patternTransform**: `null` \| [`TMat2D`](/api/type-aliases/tmat2d/) = `null`

transform matrix to change the pattern, imported from svgs.

#### Todo

verify if using the identity matrix as default makes the rest of the code more easy

#### Default

```ts

```

#### Defined in

[src/Pattern/Pattern.ts:71](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L71)

***

### repeat

> **repeat**: [`PatternRepeat`](/api/type-aliases/patternrepeat/) = `'repeat'`

#### Defaults

#### Defined in

[src/Pattern/Pattern.ts:43](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L43)

***

### source

> **source**: `CanvasImageSource`

The actual pixel source of the pattern

#### Defined in

[src/Pattern/Pattern.ts:76](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L76)

***

### type

> `static` **type**: `string` = `'Pattern'`

#### Defined in

[src/Pattern/Pattern.ts:21](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L21)

## Accessors

### type

> `get` **type**(): `string`

Legacy identifier of the class. Prefer using this.constructor.type 'Pattern'
or utils like isPattern, or instance of to indentify a pattern in your code.
Will be removed in future versiones

#### TODO

add sustainable warning message

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

> `set` **type**(`value`): `void`

#### Parameters

• **value**: `string`

#### Returns

`string`

#### Defined in

[src/Pattern/Pattern.ts:31](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L31)

## Methods

### isCanvasSource()

> **isCanvasSource**(): `this is Object`

#### Returns

`this is Object`

true if [source](/api/api/classes/pattern/source/#source) is a <canvas> element

#### Defined in

[src/Pattern/Pattern.ts:112](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L112)

***

### isImageSource()

> **isImageSource**(): `this is Object`

#### Returns

`this is Object`

true if [source](/api/api/classes/pattern/source/#source) is an <img> element

#### Defined in

[src/Pattern/Pattern.ts:103](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L103)

***

### sourceToString()

> **sourceToString**(): `string`

#### Returns

`string`

#### Defined in

[src/Pattern/Pattern.ts:116](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L116)

***

### toLive()

> **toLive**(`ctx`): `null` \| `CanvasPattern`

Returns an instance of CanvasPattern

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to create pattern

#### Returns

`null` \| `CanvasPattern`

#### Defined in

[src/Pattern/Pattern.ts:129](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L129)

***

### toObject()

> **toObject**(`propertiesToInclude`?): `Record`\<`string`, `any`\>

Returns object representation of a pattern

#### Parameters

• **propertiesToInclude?**: `string`[] = `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Record`\<`string`, `any`\>

Object representation of a pattern instance

#### Defined in

[src/Pattern/Pattern.ts:150](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L150)

***

### toSVG()

> **toSVG**(`__namedParameters`): `string`

Returns SVG representation of a pattern

#### Parameters

• **\_\_namedParameters**: [`TSize`](/api/type-aliases/tsize/)

#### Returns

`string`

#### Defined in

[src/Pattern/Pattern.ts:170](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L170)

***

### fromObject()

> `static` **fromObject**(`__namedParameters`, `options`?): `Promise`\<[`Pattern`](/api/classes/pattern/)\>

#### Parameters

• **\_\_namedParameters**: [`SerializedPatternOptions`](/api/type-aliases/serializedpatternoptions/)

• **options?**: [`Abortable`](/api/type-aliases/abortable/)

#### Returns

`Promise`\<[`Pattern`](/api/classes/pattern/)\>

#### Defined in

[src/Pattern/Pattern.ts:202](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Pattern/Pattern.ts#L202)
