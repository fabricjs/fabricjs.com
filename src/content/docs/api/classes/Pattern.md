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

### new Pattern(options)

> **new Pattern**(`options`?): [`Pattern`](Pattern.md)

Constructor

#### Parameters

• **options?**: [`PatternOptions`](../type-aliases/PatternOptions.md)

Options object

#### Returns

[`Pattern`](Pattern.md)

#### Source

src/Pattern/Pattern.ts:95

## Properties

### crossOrigin

> **crossOrigin**: [`TCrossOrigin`](../type-aliases/TCrossOrigin.md) = `''`

#### Default

```ts

```

#### Source

src/Pattern/Pattern.ts:63

***

### excludeFromExport?

> **`optional`** **excludeFromExport**: `boolean`

If true, this object will not be exported during the serialization of a canvas

#### Source

src/Pattern/Pattern.ts:82

***

### id

> **`readonly`** **id**: `number`

ID used for SVG export functionalities

#### Source

src/Pattern/Pattern.ts:88

***

### offsetX

> **offsetX**: `number` = `0`

Pattern horizontal offset from object's left/top corner

#### Default

```ts

```

#### Source

src/Pattern/Pattern.ts:50

***

### offsetY

> **offsetY**: `number` = `0`

Pattern vertical offset from object's left/top corner

#### Default

```ts

```

#### Source

src/Pattern/Pattern.ts:57

***

### patternTransform

> **patternTransform**: `null` \| [`TMat2D`](../type-aliases/TMat2D.md) = `null`

transform matrix to change the pattern, imported from svgs.

#### Todo

verify if using the identity matrix as default makes the rest of the code more easy

#### Default

```ts

```

#### Source

src/Pattern/Pattern.ts:71

***

### repeat

> **repeat**: [`PatternRepeat`](../type-aliases/PatternRepeat.md) = `'repeat'`

#### Defaults

#### Source

src/Pattern/Pattern.ts:43

***

### source

> **source**: `CanvasImageSource`

The actual pixel source of the pattern

#### Source

src/Pattern/Pattern.ts:76

***

### type

> **`static`** **type**: `string` = `'Pattern'`

#### Source

src/Pattern/Pattern.ts:21

## Accessors

### type

> **`get`** **type**(): `string`

Legacy identifier of the class. Prefer using this.constructor.type 'Pattern'
or utils like isPattern, or instance of to indentify a pattern in your code.
Will be removed in future versiones

#### TODO

add sustainable warning message

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

> **`set`** **type**(`value`): `void`

#### Parameters

• **value**: `string`

#### Returns

`string`

#### Source

src/Pattern/Pattern.ts:31

## Methods

### isCanvasSource()

> **isCanvasSource**(): `this is Object`

#### Returns

`this is Object`

true if [source](Pattern.md#source) is a `<canvas>` element

#### Source

src/Pattern/Pattern.ts:112

***

### isImageSource()

> **isImageSource**(): `this is Object`

#### Returns

`this is Object`

true if [source](Pattern.md#source) is an <img> element

#### Source

src/Pattern/Pattern.ts:103

***

### sourceToString()

> **sourceToString**(): `string`

#### Returns

`string`

#### Source

src/Pattern/Pattern.ts:116

***

### toLive()

> **toLive**(`ctx`): `null` \| `CanvasPattern`

Returns an instance of CanvasPattern

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to create pattern

#### Returns

`null` \| `CanvasPattern`

#### Source

src/Pattern/Pattern.ts:129

***

### toObject()

> **toObject**(`propertiesToInclude`?): `Record`\<`string`, `any`\>

Returns object representation of a pattern

#### Parameters

• **propertiesToInclude?**: `string`[]= `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Record`\<`string`, `any`\>

Object representation of a pattern instance

#### Source

src/Pattern/Pattern.ts:150

***

### toSVG()

> **toSVG**(`__namedParameters`): `string`

Returns SVG representation of a pattern

#### Parameters

• **\_\_namedParameters**: [`TSize`](../type-aliases/TSize.md)

#### Returns

`string`

#### Source

src/Pattern/Pattern.ts:170

***

### fromObject()

> **`static`** **fromObject**(`__namedParameters`, `options`): `Promise`\<[`Pattern`](Pattern.md)\>

#### Parameters

• **\_\_namedParameters**: [`SerializedPatternOptions`](../type-aliases/SerializedPatternOptions.md)

• **options**: [`Abortable`](../type-aliases/Abortable.md)

#### Returns

`Promise`\<[`Pattern`](Pattern.md)\>

#### Source

src/Pattern/Pattern.ts:202
