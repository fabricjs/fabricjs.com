---
editUrl: false
next: false
prev: false
title: "CanvasDOMManager"
---

## Extends

- [`StaticCanvasDOMManager`](StaticCanvasDOMManager.md)

## Constructors

### new CanvasDOMManager(arg0, __namedParameters)

> **new CanvasDOMManager**(`arg0`?, `__namedParameters`?): [`CanvasDOMManager`](CanvasDOMManager.md)

#### Parameters

• **arg0?**: `string` \| `HTMLCanvasElement`

• **\_\_namedParameters?**= `{}`

• **\_\_namedParameters\.allowTouchScrolling?**: `boolean`= `false`

• **\_\_namedParameters\.containerClass?**: `string`= `''`

:::caution[Deprecated]
here only for backward compatibility
:::

#### Returns

[`CanvasDOMManager`](CanvasDOMManager.md)

#### Overrides

[`StaticCanvasDOMManager`](StaticCanvasDOMManager.md).[`constructor`](StaticCanvasDOMManager.md#constructors)

#### Source

src/canvas/DOMManagers/CanvasDOMManager.ts:18

## Properties

### container

> **container**: `HTMLDivElement`

#### Source

src/canvas/DOMManagers/CanvasDOMManager.ts:16

***

### lower

> **lower**: `CanvasItem`

#### Inherited from

[`StaticCanvasDOMManager`](StaticCanvasDOMManager.md).[`lower`](StaticCanvasDOMManager.md#lower)

#### Source

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:22

***

### upper

> **upper**: `CanvasItem`

#### Source

src/canvas/DOMManagers/CanvasDOMManager.ts:15

## Methods

### calcOffset()

> **calcOffset**(): `Object`

Calculates canvas element offset relative to the document

#### Returns

`Object`

##### left

> **left**: `number` = `0`

##### top

> **top**: `number` = `0`

#### Inherited from

[`StaticCanvasDOMManager`](StaticCanvasDOMManager.md).[`calcOffset`](StaticCanvasDOMManager.md#calcoffset)

#### Source

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:71

***

### cleanupDOM()

> **cleanupDOM**(`size`): `void`

#### Parameters

• **size**: [`TSize`](../type-aliases/TSize.md)

#### Returns

`void`

#### Overrides

[`StaticCanvasDOMManager`](StaticCanvasDOMManager.md).[`cleanupDOM`](StaticCanvasDOMManager.md#cleanupdom)

#### Source

src/canvas/DOMManagers/CanvasDOMManager.ts:104

***

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Overrides

[`StaticCanvasDOMManager`](StaticCanvasDOMManager.md).[`dispose`](StaticCanvasDOMManager.md#dispose)

#### Source

src/canvas/DOMManagers/CanvasDOMManager.ts:116

***

### setCSSDimensions()

> **setCSSDimensions**(`size`): `void`

#### Parameters

• **size**: `Partial`\<`CSSDimensions`\>

#### Returns

`void`

#### Overrides

[`StaticCanvasDOMManager`](StaticCanvasDOMManager.md).[`setCSSDimensions`](StaticCanvasDOMManager.md#setcssdimensions)

#### Source

src/canvas/DOMManagers/CanvasDOMManager.ts:98

***

### setDimensions()

> **setDimensions**(`size`, `retinaScaling`): `void`

#### Parameters

• **size**: [`TSize`](../type-aliases/TSize.md)

• **retinaScaling**: `number`

#### Returns

`void`

#### Overrides

[`StaticCanvasDOMManager`](StaticCanvasDOMManager.md).[`setDimensions`](StaticCanvasDOMManager.md#setdimensions)

#### Source

src/canvas/DOMManagers/CanvasDOMManager.ts:92
