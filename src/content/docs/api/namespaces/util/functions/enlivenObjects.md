---
editUrl: false
next: false
prev: false
title: "enlivenObjects"
---

> **enlivenObjects**\<`T`\>(`objects`, `options`?): `Promise`\<`T`[]\>

Creates corresponding fabric instances from their object representations

## Type parameters

• **T** extends [`Shadow`](../../../classes/Shadow.md) \| [`FabricObject`](../../../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../../../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../../../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\> \| [`BaseFilter`](../../filters/classes/BaseFilter.md) \| `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../../../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\> \| [`TFiller`](../../../type-aliases/TFiller.md)

## Parameters

• **objects**: `any`[]

Objects to enliven

• **options?**: [`EnlivenObjectOptions`](../type-aliases/EnlivenObjectOptions.md)= `{}`

## Returns

`Promise`\<`T`[]\>

## Source

src/util/misc/objectEnlive.ts:87
