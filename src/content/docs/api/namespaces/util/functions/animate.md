---
editUrl: false
next: false
prev: false
title: "animate"
---

## animate(options)

> **animate**(`options`): `ArrayAnimation`

Changes value(s) from startValue to endValue within a certain period of time,
invoking callbacks as the value(s) change.

### Parameters

• **options**: `Partial`\<[`TAnimationBaseOptions`](../type-aliases/TAnimationBaseOptions.md)\<`number`[]\> & [`TAnimationCallbacks`](../type-aliases/TAnimationCallbacks.md)\<`number`[]\> & `Object`\>

### Returns

`ArrayAnimation`

### Example

```ts
animate({
  startValue: 1,
  endValue: 0,
  onChange: (v) => {
    obj.set('opacity', v);
    // since we are running in a requested frame we should call `renderAll` and not `requestRenderAll`
    canvas.renderAll();
  }
});
```

### Example

```ts
Using lists:
animate({
  startValue: [1, 2, 3],
  endValue: [2, 4, 6],
  onChange: ([x, y, zoom]) => {
    canvas.zoomToPoint(new Point(x, y), zoom);
    canvas.renderAll();
  }
});
```

### Source

src/util/animation/animate.ts:50

## animate(options)

> **animate**(`options`): `ValueAnimation`

### Parameters

• **options**: `Partial`\<[`TAnimationBaseOptions`](../type-aliases/TAnimationBaseOptions.md)\<`number`\> & [`TAnimationCallbacks`](../type-aliases/TAnimationCallbacks.md)\<`number`\> & `Object`\>

### Returns

`ValueAnimation`

### Source

src/util/animation/animate.ts:51

## animate(options)

> **animate**\<`T`\>(`options`): `T` extends [`ArrayAnimationOptions`](../type-aliases/ArrayAnimationOptions.md) ? `ArrayAnimation` : `ValueAnimation`

### Type parameters

• **T** extends `Partial`\<[`TAnimationBaseOptions`](../type-aliases/TAnimationBaseOptions.md)\<`number`\> & [`TAnimationCallbacks`](../type-aliases/TAnimationCallbacks.md)\<`number`\> & `Object`\> \| `Partial`\<[`TAnimationBaseOptions`](../type-aliases/TAnimationBaseOptions.md)\<`number`[]\> & [`TAnimationCallbacks`](../type-aliases/TAnimationCallbacks.md)\<`number`[]\> & `Object`\>

### Parameters

• **options**: `T`

### Returns

`T` extends [`ArrayAnimationOptions`](../type-aliases/ArrayAnimationOptions.md) ? `ArrayAnimation` : `ValueAnimation`

### Source

src/util/animation/animate.ts:52
