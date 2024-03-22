---
editUrl: false
next: false
prev: false
title: "BaseBrush"
---

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extended by

- [`PencilBrush`](PencilBrush.md)
- [`CircleBrush`](CircleBrush.md)
- [`SprayBrush`](SprayBrush.md)

## Constructors

### new BaseBrush(canvas)

> **new BaseBrush**(`canvas`): [`BaseBrush`](BaseBrush.md)

#### Parameters

• **canvas**: [`Canvas`](Canvas.md)

#### Returns

[`BaseBrush`](BaseBrush.md)

#### Source

src/brushes/BaseBrush.ts:75

## Properties

### canvas

> **canvas**: [`Canvas`](Canvas.md)

#### Todo

add type

#### Source

src/brushes/BaseBrush.ts:73

***

### color

> **color**: `string` = `'rgb(0, 0, 0)'`

Color of a brush

#### Default

```ts

```

#### Source

src/brushes/BaseBrush.ts:16

***

### limitedToCanvasSize

> **limitedToCanvasSize**: `boolean` = `false`

When `true`, the free drawing is limited to the whiteboard size. Default to false.

#### Default

```ts
false
```

#### Source

src/brushes/BaseBrush.ts:68

***

### shadow

> **shadow**: `null` \| [`Shadow`](Shadow.md) = `null`

Shadow object representing shadow of this shape.
<b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
"shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12

#### Default

```ts

```

#### Source

src/brushes/BaseBrush.ts:32

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[] = `null`

Stroke Dash Array.

#### Default

```ts

```

#### Source

src/brushes/BaseBrush.ts:60

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap` = `'round'`

Line endings style of a brush (one of "butt", "round", "square")

#### Default

```ts

```

#### Source

src/brushes/BaseBrush.ts:39

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin` = `'round'`

Corner style of a brush (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Source

src/brushes/BaseBrush.ts:46

***

### strokeMiterLimit

> **strokeMiterLimit**: `number` = `10`

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

#### Default

```ts

```

#### Source

src/brushes/BaseBrush.ts:53

***

### width

> **width**: `number` = `1`

Width of a brush, has to be a Number, no string literals

#### Default

```ts

```

#### Source

src/brushes/BaseBrush.ts:23

## Methods

### \_render()

> **`abstract`** **\_render**(): `void`

#### Returns

`void`

#### Source

src/brushes/BaseBrush.ts:79

***

### onMouseDown()

> **`abstract`** **onMouseDown**(`pointer`, `ev`): `void`

#### Parameters

• **pointer**: [`Point`](Point.md)

• **ev**: [`TBrushEventData`](../type-aliases/TBrushEventData.md)

#### Returns

`void`

#### Source

src/brushes/BaseBrush.ts:80

***

### onMouseMove()

> **`abstract`** **onMouseMove**(`pointer`, `ev`): `void`

#### Parameters

• **pointer**: [`Point`](Point.md)

• **ev**: [`TBrushEventData`](../type-aliases/TBrushEventData.md)

#### Returns

`void`

#### Source

src/brushes/BaseBrush.ts:81

***

### onMouseUp()

> **`abstract`** **onMouseUp**(`ev`): `boolean` \| `void`

#### Parameters

• **ev**: [`TBrushEventData`](../type-aliases/TBrushEventData.md)

#### Returns

`boolean` \| `void`

true if brush should continue blocking interaction

#### Source

src/brushes/BaseBrush.ts:85
