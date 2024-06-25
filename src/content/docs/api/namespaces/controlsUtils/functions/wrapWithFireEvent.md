---
editUrl: false
next: false
prev: false
title: "wrapWithFireEvent"
---

> **wrapWithFireEvent**\<`T`\>(`eventName`, `actionHandler`): [`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

## Type Parameters

• **T** *extends* [`Transform`](/api/type-aliases/transform/)

## Parameters

• **eventName**: [`TModificationEvents`](/api/type-aliases/tmodificationevents/)

• **actionHandler**: [`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

the function to wrap

## Returns

[`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

a function with an action handler signature

## Defined in

[src/controls/wrapWithFireEvent.ts:14](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/controls/wrapWithFireEvent.ts#L14)
