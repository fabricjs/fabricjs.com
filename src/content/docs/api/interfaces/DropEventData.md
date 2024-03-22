---
editUrl: false
next: false
prev: false
title: "DropEventData"
---

## Extends

- [`DragEventData`](DragEventData.md)

## Properties

### ~~absolutePointer~~

> **absolutePointer**: [`Point`](../classes/Point.md)

:::caution[Deprecated]
use scenePoint instead.
Kept for compatibility
:::

#### Source

src/EventTypeDefs.ts:189

***

### canDrop?

> **`optional`** **canDrop**: `boolean`

#### Inherited from

[`DragEventData`](DragEventData.md).[`canDrop`](DragEventData.md#candrop)

#### Source

src/EventTypeDefs.ts:172

***

### didDrop?

> **`optional`** **didDrop**: `boolean`

#### Inherited from

[`DragEventData`](DragEventData.md).[`didDrop`](DragEventData.md#diddrop)

#### Source

src/EventTypeDefs.ts:173

***

### dragSource?

> **`optional`** **dragSource**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`DragEventData`](DragEventData.md).[`dragSource`](DragEventData.md#dragsource)

#### Source

src/EventTypeDefs.ts:171

***

### dropTarget?

> **`optional`** **dropTarget**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`DragEventData`](DragEventData.md).[`dropTarget`](DragEventData.md#droptarget)

#### Source

src/EventTypeDefs.ts:174

***

### e

> **e**: `DragEvent`

#### Inherited from

[`DragEventData`](DragEventData.md).[`e`](DragEventData.md#e)

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

src/EventTypeDefs.ts:183

***

### scenePoint

> **scenePoint**: [`Point`](../classes/Point.md)

#### Source

src/EventTypeDefs.ts:190

***

### subTargets?

> **`optional`** **subTargets**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

#### Inherited from

[`DragEventData`](DragEventData.md).[`subTargets`](DragEventData.md#subtargets)

#### Source

src/EventTypeDefs.ts:170

***

### target?

> **`optional`** **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`DragEventData`](DragEventData.md).[`target`](DragEventData.md#target)

#### Source

src/EventTypeDefs.ts:169

***

### viewportPoint

> **viewportPoint**: [`Point`](../classes/Point.md)

#### Source

src/EventTypeDefs.ts:191
