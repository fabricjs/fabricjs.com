---
editUrl: false
next: false
prev: false
title: "CircleBrush"
---

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extends

- [`BaseBrush`](/api/classes/basebrush/)

## Constructors

### new CircleBrush()

> **new CircleBrush**(`canvas`): [`CircleBrush`](/api/classes/circlebrush/)

#### Parameters

• **canvas**: [`Canvas`](/api/classes/canvas/)

**Todo**

add type

#### Returns

[`CircleBrush`](/api/classes/circlebrush/)

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`constructor`](/api/classes/basebrush/#constructors)

#### Defined in

src/brushes/CircleBrush.ts:22

## Properties

### canvas

> **canvas**: [`Canvas`](/api/classes/canvas/)

#### Todo

add type

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`canvas`](/api/classes/basebrush/#canvas)

#### Defined in

src/brushes/BaseBrush.ts:73

***

### color

> **color**: `string` = `'rgb(0, 0, 0)'`

Color of a brush

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`color`](/api/classes/basebrush/#color)

#### Defined in

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

[`BaseBrush`](/api/classes/basebrush/).[`limitedToCanvasSize`](/api/classes/basebrush/#limitedtocanvassize)

#### Defined in

src/brushes/BaseBrush.ts:68

***

### points

> **points**: [`CircleBrushPoint`](/api/type-aliases/circlebrushpoint/)[]

#### Defined in

src/brushes/CircleBrush.ts:20

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/) = `null`

Shadow object representing shadow of this shape.
<b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
"shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`shadow`](/api/classes/basebrush/#shadow)

#### Defined in

src/brushes/BaseBrush.ts:32

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[] = `null`

Stroke Dash Array.

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeDashArray`](/api/classes/basebrush/#strokedasharray)

#### Defined in

src/brushes/BaseBrush.ts:60

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap` = `'round'`

Line endings style of a brush (one of "butt", "round", "square")

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeLineCap`](/api/classes/basebrush/#strokelinecap)

#### Defined in

src/brushes/BaseBrush.ts:39

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin` = `'round'`

Corner style of a brush (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeLineJoin`](/api/classes/basebrush/#strokelinejoin)

#### Defined in

src/brushes/BaseBrush.ts:46

***

### strokeMiterLimit

> **strokeMiterLimit**: `number` = `10`

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeMiterLimit`](/api/classes/basebrush/#strokemiterlimit)

#### Defined in

src/brushes/BaseBrush.ts:53

***

### width

> **width**: `number` = `10`

Width of a brush

#### Default

```ts

```

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`width`](/api/classes/basebrush/#width)

#### Defined in

src/brushes/CircleBrush.ts:18

## Methods

### addPoint()

> **addPoint**(`pointer`): [`CircleBrushPoint`](/api/type-aliases/circlebrushpoint/)

#### Parameters

• **pointer**: [`Point`](/api/classes/point/)

#### Returns

[`CircleBrushPoint`](/api/type-aliases/circlebrushpoint/)

Just added pointer point

#### Defined in

src/brushes/CircleBrush.ts:128

***

### dot()

> **dot**(`ctx`, `point`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **point**: [`CircleBrushPoint`](/api/type-aliases/circlebrushpoint/)

#### Returns

`void`

#### Defined in

src/brushes/CircleBrush.ts:39

***

### drawDot()

> **drawDot**(`pointer`): `void`

Invoked inside on mouse down and mouse move

#### Parameters

• **pointer**: [`Point`](/api/classes/point/)

#### Returns

`void`

#### Defined in

src/brushes/CircleBrush.ts:31

***

### onMouseDown()

> **onMouseDown**(`pointer`): `void`

Invoked on mouse down

#### Parameters

• **pointer**: [`Point`](/api/classes/point/)

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseDown`](/api/classes/basebrush/#onmousedown)

#### Defined in

src/brushes/CircleBrush.ts:50

***

### onMouseMove()

> **onMouseMove**(`pointer`): `void`

Invoked on mouse move

#### Parameters

• **pointer**: [`Point`](/api/classes/point/)

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseMove`](/api/classes/basebrush/#onmousemove)

#### Defined in

src/brushes/CircleBrush.ts:75

***

### onMouseUp()

> **onMouseUp**(): `void`

Invoked on mouse up

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseUp`](/api/classes/basebrush/#onmouseup)

#### Defined in

src/brushes/CircleBrush.ts:91
