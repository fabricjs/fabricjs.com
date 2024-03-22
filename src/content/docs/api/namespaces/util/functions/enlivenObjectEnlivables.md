---
editUrl: false
next: false
prev: false
title: "enlivenObjectEnlivables"
---

> **enlivenObjectEnlivables**\<`R`\>(`serializedObject`, `options`?): `Promise`\<`R`\>

Creates corresponding fabric instances residing in an object, e.g. `clipPath`

## Type parameters

• **R** = `Record`\<`string`, `null` \| [`FabricObject`](../../../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../../../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../../../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\> \| [`TFiller`](../../../type-aliases/TFiller.md)\>

## Parameters

• **serializedObject**: `any`

• **options?**: [`Abortable`](../../../type-aliases/Abortable.md)= `{}`

## Returns

`Promise`\<`R`\>

the input object with enlived values

## Source

src/util/misc/objectEnlive.ts:133
