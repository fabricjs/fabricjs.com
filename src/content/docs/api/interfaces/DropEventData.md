---
editUrl: false
next: false
prev: false
title: "DropEventData"
---

## Extends

- [`DragEventData`](/api/interfaces/drageventdata/)

## Properties

### ~~absolutePointer~~

> **absolutePointer**: [`Point`](/api/classes/point/)

:::caution[Deprecated]
use scenePoint instead.
Kept for compatibility
:::

#### Defined in

[src/EventTypeDefs.ts:191](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L191)

***

### canDrop?

> `optional` **canDrop**: `boolean`

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`canDrop`](/api/interfaces/drageventdata/#candrop)

#### Defined in

[src/EventTypeDefs.ts:174](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L174)

***

### didDrop?

> `optional` **didDrop**: `boolean`

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`didDrop`](/api/interfaces/drageventdata/#diddrop)

#### Defined in

[src/EventTypeDefs.ts:175](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L175)

***

### dragSource?

> `optional` **dragSource**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`dragSource`](/api/interfaces/drageventdata/#dragsource)

#### Defined in

[src/EventTypeDefs.ts:173](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L173)

***

### dropTarget?

> `optional` **dropTarget**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`dropTarget`](/api/interfaces/drageventdata/#droptarget)

#### Defined in

[src/EventTypeDefs.ts:176](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L176)

***

### e

> **e**: `DragEvent`

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`e`](/api/interfaces/drageventdata/#e)

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

[src/EventTypeDefs.ts:185](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L185)

***

### scenePoint

> **scenePoint**: [`Point`](/api/classes/point/)

#### Defined in

[src/EventTypeDefs.ts:192](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L192)

***

### subTargets?

> `optional` **subTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`subTargets`](/api/interfaces/drageventdata/#subtargets)

#### Defined in

[src/EventTypeDefs.ts:172](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L172)

***

### target?

> `optional` **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`target`](/api/interfaces/drageventdata/#target)

#### Defined in

[src/EventTypeDefs.ts:171](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L171)

***

### viewportPoint

> **viewportPoint**: [`Point`](/api/classes/point/)

#### Defined in

[src/EventTypeDefs.ts:193](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L193)
