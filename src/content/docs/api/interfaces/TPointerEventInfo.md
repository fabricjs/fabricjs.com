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

[src/EventTypeDefs.ts:151](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L151)

***

### e

> **e**: `E`

#### Inherited from

[`TEvent`](/api/interfaces/tevent/).[`e`](/api/interfaces/tevent/#e)

#### Defined in

[src/EventTypeDefs.ts:86](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L86)

***

### ~~pointer~~

> **pointer**: [`Point`](/api/classes/point/)

:::caution[Deprecated]
use viewportPoint instead.
Kept for compatibility
:::

#### Defined in

[src/EventTypeDefs.ts:145](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L145)

***

### scenePoint

> **scenePoint**: [`Point`](/api/classes/point/)

#### Defined in

[src/EventTypeDefs.ts:152](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L152)

***

### subTargets?

> `optional` **subTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Defined in

[src/EventTypeDefs.ts:138](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L138)

***

### target?

> `optional` **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Defined in

[src/EventTypeDefs.ts:137](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L137)

***

### transform?

> `optional` **transform**: `null` \| [`Transform`](/api/type-aliases/transform/)

#### Defined in

[src/EventTypeDefs.ts:139](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L139)

***

### viewportPoint

> **viewportPoint**: [`Point`](/api/classes/point/)

#### Defined in

[src/EventTypeDefs.ts:153](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L153)
