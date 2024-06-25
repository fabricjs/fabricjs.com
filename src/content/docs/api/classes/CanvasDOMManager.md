---
editUrl: false
next: false
prev: false
title: "CanvasDOMManager"
---

## Extends

- [`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/)

## Constructors

### new CanvasDOMManager()

> **new CanvasDOMManager**(`arg0`?, `__namedParameters`?): [`CanvasDOMManager`](/api/classes/canvasdommanager/)

#### Parameters

• **arg0?**: `string` \| `HTMLCanvasElement`

• **\_\_namedParameters?** = `{}`

• **\_\_namedParameters.allowTouchScrolling?**: `boolean` = `false`

• **\_\_namedParameters.containerClass?**: `string` = `''`

:::caution[Deprecated]
here only for backward compatibility
:::

#### Returns

[`CanvasDOMManager`](/api/classes/canvasdommanager/)

#### Overrides

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`constructor`](/api/classes/staticcanvasdommanager/#constructors)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:18](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/canvas/DOMManagers/CanvasDOMManager.ts#L18)

## Properties

### container

> **container**: `HTMLDivElement`

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:16](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/canvas/DOMManagers/CanvasDOMManager.ts#L16)

***

### lower

> **lower**: `CanvasItem`

#### Inherited from

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`lower`](/api/classes/staticcanvasdommanager/#lower)

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:22](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L22)

***

### upper

> **upper**: `CanvasItem`

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:15](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/canvas/DOMManagers/CanvasDOMManager.ts#L15)

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

#### Inherited from

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`calcOffset`](/api/classes/staticcanvasdommanager/#calcoffset)

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:71](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L71)

***

### cleanupDOM()

> **cleanupDOM**(`size`): `void`

#### Parameters

• **size**: [`TSize`](/api/type-aliases/tsize/)

#### Returns

`void`

#### Overrides

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`cleanupDOM`](/api/classes/staticcanvasdommanager/#cleanupdom)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:104](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/canvas/DOMManagers/CanvasDOMManager.ts#L104)

***

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Overrides

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`dispose`](/api/classes/staticcanvasdommanager/#dispose)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:116](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/canvas/DOMManagers/CanvasDOMManager.ts#L116)

***

### setCSSDimensions()

> **setCSSDimensions**(`size`): `void`

#### Parameters

• **size**: `Partial`\<`CSSDimensions`\>

#### Returns

`void`

#### Overrides

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`setCSSDimensions`](/api/classes/staticcanvasdommanager/#setcssdimensions)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:98](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/canvas/DOMManagers/CanvasDOMManager.ts#L98)

***

### setDimensions()

> **setDimensions**(`size`, `retinaScaling`): `void`

#### Parameters

• **size**: [`TSize`](/api/type-aliases/tsize/)

• **retinaScaling**: `number`

#### Returns

`void`

#### Overrides

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`setDimensions`](/api/classes/staticcanvasdommanager/#setdimensions)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:92](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/canvas/DOMManagers/CanvasDOMManager.ts#L92)
