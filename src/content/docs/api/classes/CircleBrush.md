---
editUrl: false
next: false
prev: false
title: "CircleBrush"
---

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extends

- [`BaseBrush`](BaseBrush.md)

## Constructors

### new CircleBrush(canvas)

> **new CircleBrush**(`canvas`): [`CircleBrush`](CircleBrush.md)

#### Parameters

• **canvas**: [`Canvas`](Canvas.md)

#### Returns

[`CircleBrush`](CircleBrush.md)

#### Overrides

[`BaseBrush`](BaseBrush.md).[`constructor`](BaseBrush.md#constructors)

#### Source

src/brushes/CircleBrush.ts:22

## Properties

### canvas

> **canvas**: [`Canvas`](Canvas.md)

#### Todo

add type

#### Inherited from

[`BaseBrush`](BaseBrush.md).[`canvas`](BaseBrush.md#canvas)

#### Source

src/brushes/BaseBrush.ts:73

***

### color

> **color**: `string` = `'rgb(0, 0, 0)'`

Color of a brush

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](BaseBrush.md).[`color`](BaseBrush.md#color)

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

#### Inherited from

[`BaseBrush`](BaseBrush.md).[`limitedToCanvasSize`](BaseBrush.md#limitedtocanvassize)

#### Source

src/brushes/BaseBrush.ts:68

***

### points

> **points**: [`CircleBrushPoint`](../type-aliases/CircleBrushPoint.md)[]

#### Source

src/brushes/CircleBrush.ts:20

***

### shadow

> **shadow**: `null` \| [`Shadow`](Shadow.md) = `null`

Shadow object representing shadow of this shape.
<b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
"shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](BaseBrush.md).[`shadow`](BaseBrush.md#shadow)

#### Source

src/brushes/BaseBrush.ts:32

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[] = `null`

Stroke Dash Array.

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](BaseBrush.md).[`strokeDashArray`](BaseBrush.md#strokedasharray)

#### Source

src/brushes/BaseBrush.ts:60

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap` = `'round'`

Line endings style of a brush (one of "butt", "round", "square")

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](BaseBrush.md).[`strokeLineCap`](BaseBrush.md#strokelinecap)

#### Source

src/brushes/BaseBrush.ts:39

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin` = `'round'`

Corner style of a brush (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](BaseBrush.md).[`strokeLineJoin`](BaseBrush.md#strokelinejoin)

#### Source

src/brushes/BaseBrush.ts:46

***

### strokeMiterLimit

> **strokeMiterLimit**: `number` = `10`

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](BaseBrush.md).[`strokeMiterLimit`](BaseBrush.md#strokemiterlimit)

#### Source

src/brushes/BaseBrush.ts:53

***

### width

> **width**: `number` = `10`

Width of a brush

#### Default

```ts

```

#### Overrides

[`BaseBrush`](BaseBrush.md).[`width`](BaseBrush.md#width)

#### Source

src/brushes/CircleBrush.ts:18

## Methods

### addPoint()

> **addPoint**(`pointer`): [`CircleBrushPoint`](../type-aliases/CircleBrushPoint.md)

#### Parameters

• **pointer**: [`Point`](Point.md)

#### Returns

[`CircleBrushPoint`](../type-aliases/CircleBrushPoint.md)

Just added pointer point

#### Source

src/brushes/CircleBrush.ts:128

***

### dot()

> **dot**(`ctx`, `point`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **point**: [`CircleBrushPoint`](../type-aliases/CircleBrushPoint.md)

#### Returns

`void`

#### Source

src/brushes/CircleBrush.ts:39

***

### drawDot()

> **drawDot**(`pointer`): `void`

Invoked inside on mouse down and mouse move

#### Parameters

• **pointer**: [`Point`](Point.md)

#### Returns

`void`

#### Source

src/brushes/CircleBrush.ts:31

***

### onMouseDown()

> **onMouseDown**(`pointer`): `void`

Invoked on mouse down

#### Parameters

• **pointer**: [`Point`](Point.md)

#### Returns

`void`

#### Overrides

[`BaseBrush`](BaseBrush.md).[`onMouseDown`](BaseBrush.md#onmousedown)

#### Source

src/brushes/CircleBrush.ts:50

***

### onMouseMove()

> **onMouseMove**(`pointer`): `void`

Invoked on mouse move

#### Parameters

• **pointer**: [`Point`](Point.md)

#### Returns

`void`

#### Overrides

[`BaseBrush`](BaseBrush.md).[`onMouseMove`](BaseBrush.md#onmousemove)

#### Source

src/brushes/CircleBrush.ts:75

***

### onMouseUp()

> **onMouseUp**(): `void`

Invoked on mouse up

#### Returns

`void`

#### Overrides

[`BaseBrush`](BaseBrush.md).[`onMouseUp`](BaseBrush.md#onmouseup)

#### Source

src/brushes/CircleBrush.ts:91
