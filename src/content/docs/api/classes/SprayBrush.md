---
editUrl: false
next: false
prev: false
title: "SprayBrush"
---

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extends

- [`BaseBrush`](BaseBrush.md)

## Constructors

### new SprayBrush(canvas)

> **new SprayBrush**(`canvas`): [`SprayBrush`](SprayBrush.md)

Constructor

#### Parameters

• **canvas**: [`Canvas`](Canvas.md)

#### Returns

[`SprayBrush`](SprayBrush.md)

Instance of a spray brush

#### Overrides

[`BaseBrush`](BaseBrush.md).[`constructor`](BaseBrush.md#constructors)

#### Source

src/brushes/SprayBrush.ts:83

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

### density

> **density**: `number` = `20`

Density of a spray (number of dots per chunk)

#### Default

```ts

```

#### Source

src/brushes/SprayBrush.ts:44

***

### dotWidth

> **dotWidth**: `number` = `1`

Width of spray dots

#### Default

```ts

```

#### Source

src/brushes/SprayBrush.ts:51

***

### dotWidthVariance

> **dotWidthVariance**: `number` = `1`

Width variance of spray dots

#### Default

```ts

```

#### Source

src/brushes/SprayBrush.ts:58

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

### optimizeOverlapping

> **optimizeOverlapping**: `boolean` = `true`

Whether overlapping dots (rectangles) should be removed (for performance reasons)

#### Default

```ts

```

#### Source

src/brushes/SprayBrush.ts:72

***

### randomOpacity

> **randomOpacity**: `boolean` = `false`

Whether opacity of a dot should be random

#### Default

```ts

```

#### Source

src/brushes/SprayBrush.ts:65

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

Width of a spray

#### Default

```ts

```

#### Overrides

[`BaseBrush`](BaseBrush.md).[`width`](BaseBrush.md#width)

#### Source

src/brushes/SprayBrush.ts:37

## Methods

### \_render()

> **\_render**(): `void`

Render all spray chunks

#### Returns

`void`

#### Overrides

[`BaseBrush`](BaseBrush.md).[`_render`](BaseBrush.md#_render)

#### Source

src/brushes/SprayBrush.ts:177

***

### addSprayChunk()

> **addSprayChunk**(`pointer`): `void`

#### Parameters

• **pointer**: [`Point`](Point.md)

#### Returns

`void`

#### Source

src/brushes/SprayBrush.ts:192

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

src/brushes/SprayBrush.ts:93

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

src/brushes/SprayBrush.ts:106

***

### onMouseUp()

> **onMouseUp**(): `void`

Invoked on mouse up

#### Returns

`void`

#### Overrides

[`BaseBrush`](BaseBrush.md).[`onMouseUp`](BaseBrush.md#onmouseup)

#### Source

src/brushes/SprayBrush.ts:117

***

### renderChunck()

> **renderChunck**(`sprayChunck`): `void`

#### Parameters

• **sprayChunck**: [`SprayBrushPoint`](../type-aliases/SprayBrushPoint.md)[]

#### Returns

`void`

#### Source

src/brushes/SprayBrush.ts:159
