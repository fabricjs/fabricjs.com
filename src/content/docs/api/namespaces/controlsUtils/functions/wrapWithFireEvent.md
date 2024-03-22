---
editUrl: false
next: false
prev: false
title: "wrapWithFireEvent"
---

> **wrapWithFireEvent**\<`T`\>(`eventName`, `actionHandler`): [`TransformActionHandler`](../../../type-aliases/TransformActionHandler.md)\<`T`\>

Wrap an action handler with firing an event if the action is performed

## Type parameters

• **T** extends [`Transform`](../../../type-aliases/Transform.md)

## Parameters

• **eventName**: [`TModificationEvents`](../../../type-aliases/TModificationEvents.md)

• **actionHandler**: [`TransformActionHandler`](../../../type-aliases/TransformActionHandler.md)\<`T`\>

the function to wrap

## Returns

[`TransformActionHandler`](../../../type-aliases/TransformActionHandler.md)\<`T`\>

a function with an action handler signature

## Source

src/controls/wrapWithFireEvent.ts:14
