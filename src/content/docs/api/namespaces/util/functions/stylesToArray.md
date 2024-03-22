---
editUrl: false
next: false
prev: false
title: "stylesToArray"
---

> **stylesToArray**(`styles`, `text`): [`TextStyleArray`](../type-aliases/TextStyleArray.md)

Returns the array form of a text object's inline styles property with styles grouped in ranges
rather than per character. This format is less verbose, and is better suited for storage
so it is used in serialization (not during runtime).

## Parameters

• **styles**: [`TextStyle`](../../../type-aliases/TextStyle.md)

per character styles for a text object

• **text**: `string`

the text string that the styles are applied to

## Returns

[`TextStyleArray`](../type-aliases/TextStyleArray.md)

## Source

src/util/misc/textStyles.ts:48
