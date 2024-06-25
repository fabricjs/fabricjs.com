---
editUrl: false
next: false
prev: false
title: "EnlivenObjectOptions"
---

> **EnlivenObjectOptions**: [`Abortable`](/api/type-aliases/abortable/) & `object`

## Type declaration

### reviver()?

> `optional` **reviver**: \<`T`\>(`serializedObj`, `instance`) => `void`

Method for further parsing of object elements,
called after each fabric object created.

#### Type Parameters

• **T** *extends* `BaseFabricObject` \| [`FabricObject`](/api/classes/fabricobject/) \| [`BaseFilter`](/api/namespaces/filters/classes/basefilter/) \| [`Shadow`](/api/classes/shadow/) \| [`TFiller`](/api/type-aliases/tfiller/)

#### Parameters

• **serializedObj**: `Record`\<`string`, `any`\>

• **instance**: `T`

#### Returns

`void`

## Defined in

src/util/misc/objectEnlive.ts:65
