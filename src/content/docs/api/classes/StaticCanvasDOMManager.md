---
editUrl: false
next: false
prev: false
title: "StaticCanvasDOMManager"
---

## Extended by

- [`CanvasDOMManager`](CanvasDOMManager.md)

## Constructors

### new StaticCanvasDOMManager(arg0)

> **new StaticCanvasDOMManager**(`arg0`?): [`StaticCanvasDOMManager`](StaticCanvasDOMManager.md)

#### Parameters

• **arg0?**: `string` \| `HTMLCanvasElement`

#### Returns

[`StaticCanvasDOMManager`](StaticCanvasDOMManager.md)

#### Source

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:24

## Properties

### lower

> **lower**: `CanvasItem`

#### Source

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:22

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

#### Source

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:71

***

### cleanupDOM()

> **cleanupDOM**(`__namedParameters`): `void`

#### Parameters

• **\_\_namedParameters**: [`TSize`](../type-aliases/TSize.md)

#### Returns

`void`

#### Source

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:47

***

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Source

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:75

***

### setCSSDimensions()

> **setCSSDimensions**(`size`): `void`

#### Parameters

• **size**: `Partial`\<`CSSDimensions`\>

#### Returns

`void`

#### Source

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:64

***

### setDimensions()

> **setDimensions**(`size`, `retinaScaling`): `void`

#### Parameters

• **size**: [`TSize`](../type-aliases/TSize.md)

• **retinaScaling**: `number`

#### Returns

`void`

#### Source

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:59
