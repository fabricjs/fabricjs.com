---
editUrl: false
next: false
prev: false
title: "TAnimationBaseOptions"
---

> **TAnimationBaseOptions**\<`T`\>: `Object`

## Type parameters

• **T**

## Type declaration

### delay

> **delay**: `number`

Delay to start the animation in ms

#### Default

```ts
0
```

### duration

> **duration**: `number`

Duration of the animation in ms

#### Default

```ts
500
```

### easing

> **easing**: [`TEasingFunction`](TEasingFunction.md)\<`T`\>

Easing function

#### Default

```ts
{defaultEasing}
```

### target

> **target**: `unknown`

The object this animation is being performed on

## Source

src/util/animation/types.ts:50
