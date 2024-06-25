---
editUrl: false
next: false
prev: false
title: "StaticCanvasDOMManager"
---

## Extended by

- [`CanvasDOMManager`](/api/classes/canvasdommanager/)

## Constructors

### new StaticCanvasDOMManager()

> **new StaticCanvasDOMManager**(`arg0`?): [`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/)

#### Parameters

• **arg0?**: `string` \| `HTMLCanvasElement`

#### Returns

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/)

#### Defined in

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:24

## Properties

### lower

> **lower**: `CanvasItem`

#### Defined in

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:22

## Methods

### calcOffset()

> **calcOffset**(): `object`

Calculates canvas element offset relative to the document

#### Returns

`object`

##### left

> **left**: `number` = `0`

##### top

> **top**: `number` = `0`

#### Defined in

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:71

***

### cleanupDOM()

> **cleanupDOM**(`__namedParameters`): `void`

#### Parameters

• **\_\_namedParameters**: [`TSize`](/api/type-aliases/tsize/)

#### Returns

`void`

#### Defined in

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:47

***

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Defined in

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:75

***

### setCSSDimensions()

> **setCSSDimensions**(`size`): `void`

#### Parameters

• **size**: `Partial`\<`CSSDimensions`\>

#### Returns

`void`

#### Defined in

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:64

***

### setDimensions()

> **setDimensions**(`size`, `retinaScaling`): `void`

#### Parameters

• **size**: [`TSize`](/api/type-aliases/tsize/)

• **retinaScaling**: `number`

#### Returns

`void`

#### Defined in

src/canvas/DOMManagers/StaticCanvasDOMManager.ts:59
