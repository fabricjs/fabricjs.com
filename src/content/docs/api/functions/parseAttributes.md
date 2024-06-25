---
editUrl: false
next: false
prev: false
title: "parseAttributes"
---

> **parseAttributes**(`element`, `attributes`, `cssRules`?): `Record`\<`string`, `any`\>

Returns an object of attributes' name/value, given element and an array of attribute names;
Parses parent "g" nodes recursively upwards.

## Parameters

• **element**: `null` \| `HTMLElement`

Element to parse

• **attributes**: `string`[]

Array of attributes to parse

• **cssRules?**: `CSSRules`

## Returns

`Record`\<`string`, `any`\>

object containing parsed attributes' names/values

## Defined in

src/parser/parseAttributes.ts:19
