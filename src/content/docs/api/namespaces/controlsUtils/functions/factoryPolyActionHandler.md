---
editUrl: false
next: false
prev: false
title: "factoryPolyActionHandler"
---

> **factoryPolyActionHandler**(`pointIndex`, `fn`): (`eventData`, `transform`, `x`, `y`) => `boolean`

Keep the polygon in the same position when we change its `width`/`height`/`top`/`left`.

## Parameters

• **pointIndex**: `number`

• **fn**: [`TransformActionHandler`](../../../type-aliases/TransformActionHandler.md)\<`TTransformAnchor`\>

## Returns

`Function`

> ### Parameters
>
> • **eventData**: [`TPointerEvent`](../../../type-aliases/TPointerEvent.md)
>
> • **transform**: [`Transform`](../../../type-aliases/Transform.md)
>
> • **x**: `number`
>
> • **y**: `number`
>
> ### Returns
>
> `boolean`
>

## Source

src/controls/polyControl.ts:67
