---
editUrl: false
next: false
prev: false
title: "TPointerEventInfo"
---

## Extends

- [`TEvent`](/api/interfaces/tevent/)\<`E`\>

## Type Parameters

• **E** *extends* [`TPointerEvent`](/api/type-aliases/tpointerevent/) = [`TPointerEvent`](/api/type-aliases/tpointerevent/)

## Properties

### ~~absolutePointer~~

> **absolutePointer**: [`Point`](/api/classes/point/)

:::caution[Deprecated]
use scenePoint instead.
Kept for compatibility
:::

#### Defined in

src/EventTypeDefs.ts:149

***

### e

> **e**: `E`

#### Inherited from

[`TEvent`](/api/interfaces/tevent/).[`e`](/api/interfaces/tevent/#e)

#### Defined in

src/EventTypeDefs.ts:86

***

### ~~pointer~~

> **pointer**: [`Point`](/api/classes/point/)

:::caution[Deprecated]
use viewportPoint instead.
Kept for compatibility
:::

#### Defined in

src/EventTypeDefs.ts:143

***

### scenePoint

> **scenePoint**: [`Point`](/api/classes/point/)

#### Defined in

src/EventTypeDefs.ts:150

***

### subTargets?

> `optional` **subTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Defined in

src/EventTypeDefs.ts:136

***

### target?

> `optional` **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Defined in

src/EventTypeDefs.ts:135

***

### transform?

> `optional` **transform**: `null` \| [`Transform`](/api/type-aliases/transform/)

#### Defined in

src/EventTypeDefs.ts:137

***

### viewportPoint

> **viewportPoint**: [`Point`](/api/classes/point/)

#### Defined in

src/EventTypeDefs.ts:151
