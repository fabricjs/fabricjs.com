---
editUrl: false
next: false
prev: false
title: "pick"
---

> **pick**\<`T`\>(`source`, `keys`): `Partial`\<`T`\>

Populates an object with properties of another object

## Type parameters

• **T** extends `Record`\<`string`, `any`\>

## Parameters

• **source**: `T`

Source object

• **keys**: keyof `T`[]= `[]`

## Returns

`Partial`\<`T`\>

object populated with the picked keys

## Source

src/util/misc/pick.ts:7
