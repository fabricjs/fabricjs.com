---
editUrl: false
next: false
prev: false
title: "TOnAnimationChangeCallback"
---

> **TOnAnimationChangeCallback**\<`T`, `R`\>: (`value`, `valueProgress`, `durationProgress`) => `R`

Callback called every frame

## Type Parameters

• **T**

• **R** = `void`

## Parameters

• **value**: `T`

current value of the animation.

• **valueProgress**: `number`

∈ [0, 1], the current animation progress reflected on value, normalized.
0 is the starting value and 1 is the ending value.

• **durationProgress**: `number`

∈ [0, 1], the current animation duration normalized to 1.

## Returns

`R`

## Defined in

src/util/animation/types.ts:13
