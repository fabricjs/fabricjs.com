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

• **T** *extends* [`BaseFabricObject`](/api/classes/basefabricobject/) \| [`FabricObject`](/api/classes/fabricobject/) \| [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`\> \| [`Shadow`](/api/classes/shadow/) \| [`TFiller`](/api/type-aliases/tfiller/)

#### Parameters

• **serializedObj**: `Record`\<`string`, `any`\>

• **instance**: `T`

#### Returns

`void`

## Defined in

[src/util/misc/objectEnlive.ts:65](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/util/misc/objectEnlive.ts#L65)
