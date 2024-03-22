---
editUrl: false
next: false
prev: false
title: "wrapWithFixedAnchor"
---

> **wrapWithFixedAnchor**\<`T`\>(`actionHandler`): [`TransformActionHandler`](../../../type-aliases/TransformActionHandler.md)\<`T`\>

Wrap an action handler with saving/restoring object position on the transform.
this is the code that permits to objects to keep their position while transforming.

## Type parameters

• **T** extends [`Transform`](../../../type-aliases/Transform.md)

## Parameters

• **actionHandler**: [`TransformActionHandler`](../../../type-aliases/TransformActionHandler.md)\<`T`\>

the function to wrap

## Returns

[`TransformActionHandler`](../../../type-aliases/TransformActionHandler.md)\<`T`\>

a function with an action handler signature

## Source

src/controls/wrapWithFixedAnchor.ts:9
