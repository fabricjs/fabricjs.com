---
editUrl: false
next: false
prev: false
title: "skewHandlerX"
---

> **skewHandlerX**(`eventData`, `transform`, `x`, `y`): `boolean`

Wrapped Action handler for skewing on the X axis, takes care of the
skew direction and determines the correct transform origin for the anchor point

## Parameters

• **eventData**: [`TPointerEvent`](../../../type-aliases/TPointerEvent.md)

javascript event that is doing the transform

• **transform**: [`Transform`](../../../type-aliases/Transform.md)

javascript object containing a series of information around the current transform

• **x**: `number`

current mouse x position, canvas normalized

• **y**: `number`

current mouse y position, canvas normalized

## Returns

`boolean`

true if some change happened

## Source

src/controls/skew.ts:218
