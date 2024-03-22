---
editUrl: false
next: false
prev: false
title: "TPointerEventInfo"
---

## Extends

- [`TEvent`](TEvent.md)\<`E`\>

## Type parameters

• **E** extends [`TPointerEvent`](../type-aliases/TPointerEvent.md) = [`TPointerEvent`](../type-aliases/TPointerEvent.md)

## Properties

### ~~absolutePointer~~

> **absolutePointer**: [`Point`](../classes/Point.md)

:::caution[Deprecated]
use scenePoint instead.
Kept for compatibility
:::

#### Source

src/EventTypeDefs.ts:149

***

### e

> **e**: `E`

#### Inherited from

[`TEvent`](TEvent.md).[`e`](TEvent.md#e)

#### Source

src/EventTypeDefs.ts:86

***

### ~~pointer~~

> **pointer**: [`Point`](../classes/Point.md)

:::caution[Deprecated]
use viewportPoint instead.
Kept for compatibility
:::

#### Source

src/EventTypeDefs.ts:143

***

### scenePoint

> **scenePoint**: [`Point`](../classes/Point.md)

#### Source

src/EventTypeDefs.ts:150

***

### subTargets?

> **`optional`** **subTargets**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

#### Source

src/EventTypeDefs.ts:136

***

### target?

> **`optional`** **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Source

src/EventTypeDefs.ts:135

***

### transform?

> **`optional`** **transform**: `null` \| [`Transform`](../type-aliases/Transform.md)

#### Source

src/EventTypeDefs.ts:137

***

### viewportPoint

> **viewportPoint**: [`Point`](../classes/Point.md)

#### Source

src/EventTypeDefs.ts:151
