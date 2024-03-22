---
editUrl: false
next: false
prev: false
title: "TAnimationCallbacks"
---

> **TAnimationCallbacks**\<`T`\>: `Object`

## Type parameters

• **T**

## Type declaration

### abort

> **abort**: [`TAbortCallback`](TAbortCallback.md)\<`T`\>

Function called at each frame.
If it returns true, abort

### onChange

> **onChange**: [`TOnAnimationChangeCallback`](TOnAnimationChangeCallback.md)\<`T`\>

Called at each frame of the animation

### onComplete

> **onComplete**: [`TOnAnimationChangeCallback`](TOnAnimationChangeCallback.md)\<`T`\>

Called after the last frame of the animation

### onStart

> **onStart**: `VoidFunction`

Called when the animation starts

## Source

src/util/animation/types.ts:75
