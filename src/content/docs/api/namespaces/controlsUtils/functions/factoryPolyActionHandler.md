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

• **fn**: [`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`TTransformAnchor`\>

## Returns

`Function`

### Parameters

• **eventData**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

• **transform**: [`Transform`](/api/type-aliases/transform/)

• **x**: `number`

• **y**: `number`

### Returns

`boolean`

## Defined in

[src/controls/polyControl.ts:67](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/controls/polyControl.ts#L67)
