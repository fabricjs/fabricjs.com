---
editUrl: false
next: false
prev: false
title: "EnlivenObjectOptions"
---

> **EnlivenObjectOptions**: [`Abortable`](../../../type-aliases/Abortable.md) & `Object`

## Type declaration

### reviver()?

> **`optional`** **reviver**: \<`T`\>(`serializedObj`, `instance`) => `void`

Method for further parsing of object elements,
called after each fabric object created.

#### Type parameters

• **T** extends `BaseFabricObject` \| [`FabricObject`](../../../classes/FabricObject.md) \| [`BaseFilter`](../../filters/classes/BaseFilter.md) \| [`Shadow`](../../../classes/Shadow.md) \| [`TFiller`](../../../type-aliases/TFiller.md)

#### Parameters

• **serializedObj**: `Record`\<`string`, `any`\>

• **instance**: `T`

#### Returns

`void`

## Source

src/util/misc/objectEnlive.ts:65
