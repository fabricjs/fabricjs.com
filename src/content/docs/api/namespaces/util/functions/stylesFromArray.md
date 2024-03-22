---
editUrl: false
next: false
prev: false
title: "stylesFromArray"
---

> **stylesFromArray**(`styles`, `text`): [`TextStyle`](../../../type-aliases/TextStyle.md)

Returns the object form of the styles property with styles that are assigned per
character rather than grouped by range. This format is more verbose, and is
only used during runtime (not for serialization/storage)

## Parameters

• **styles**: [`TextStyle`](../../../type-aliases/TextStyle.md) \| [`TextStyleArray`](../type-aliases/TextStyleArray.md)

the serialized form of a text object's styles

• **text**: `string`

the text string that the styles are applied to

## Returns

[`TextStyle`](../../../type-aliases/TextStyle.md)

## Source

src/util/misc/textStyles.ts:99
