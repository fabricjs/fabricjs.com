---
editUrl: false
next: false
prev: false
title: "hasStyleChanged"
---

> **hasStyleChanged**(`prevStyle`, `thisStyle`, `forTextSpans`): `boolean`

## Parameters

• **prevStyle**: `Partial`\<[`CompleteTextStyleDeclaration`](../../../type-aliases/CompleteTextStyleDeclaration.md)\>

first style to compare

• **thisStyle**: `Partial`\<[`CompleteTextStyleDeclaration`](../../../type-aliases/CompleteTextStyleDeclaration.md)\>

second style to compare

• **forTextSpans**: `boolean`= `false`

whether to check overline, underline, and line-through properties

## Returns

`boolean`

true if the style changed

## Source

src/util/misc/textStyles.ts:21
