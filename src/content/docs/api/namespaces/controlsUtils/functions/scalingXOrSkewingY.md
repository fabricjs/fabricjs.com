---
editUrl: false
next: false
prev: false
title: "scalingXOrSkewingY"
---

> **scalingXOrSkewingY**(`eventData`, `transform`, `x`, `y`): `boolean`

Composed action handler to either scale X or skew Y
Needs to be wrapped with `wrapWithFixedAnchor` to be effective

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

src/controls/scaleSkew.ts:63
