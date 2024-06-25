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

[src/brushes/CircleBrush.ts:22](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/CircleBrush.ts#L22)

## Properties

### canvas

> **canvas**: [`Canvas`](/api/classes/canvas/)

#### Todo

add type

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`canvas`](/api/classes/basebrush/#canvas)

#### Defined in

[src/brushes/BaseBrush.ts:73](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L73)

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

[src/brushes/BaseBrush.ts:16](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L16)

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

[src/brushes/BaseBrush.ts:68](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L68)

***

### points

> **points**: [`CircleBrushPoint`](/api/type-aliases/circlebrushpoint/)[]

#### Defined in

[src/brushes/CircleBrush.ts:20](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/CircleBrush.ts#L20)

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

[src/brushes/BaseBrush.ts:32](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L32)

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

[src/brushes/BaseBrush.ts:60](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L60)

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

[src/brushes/BaseBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L39)

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

[src/brushes/BaseBrush.ts:46](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L46)

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

[src/brushes/BaseBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L53)

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

[src/brushes/CircleBrush.ts:18](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/CircleBrush.ts#L18)

## Methods

### addPoint()

> **addPoint**(`pointer`): [`CircleBrushPoint`](/api/type-aliases/circlebrushpoint/)

#### Parameters

• **pointer**: [`Point`](/api/classes/point/)

#### Returns

[`CircleBrushPoint`](/api/type-aliases/circlebrushpoint/)

Just added pointer point

#### Defined in

[src/brushes/CircleBrush.ts:128](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/CircleBrush.ts#L128)

***

### dot()

> **dot**(`ctx`, `point`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **point**: [`CircleBrushPoint`](/api/type-aliases/circlebrushpoint/)

#### Returns

`void`

#### Defined in

[src/brushes/CircleBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/CircleBrush.ts#L39)

***

### drawDot()

> **drawDot**(`pointer`): `void`

Invoked inside on mouse down and mouse move

#### Parameters

• **pointer**: [`Point`](/api/classes/point/)

#### Returns

`void`

#### Defined in

[src/brushes/CircleBrush.ts:31](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/CircleBrush.ts#L31)

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

[src/brushes/CircleBrush.ts:50](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/CircleBrush.ts#L50)

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

[src/brushes/CircleBrush.ts:75](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/CircleBrush.ts#L75)

***

### onMouseUp()

> **onMouseUp**(): `void`

Invoked on mouse up

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseUp`](/api/classes/basebrush/#onmouseup)

#### Defined in

[src/brushes/CircleBrush.ts:91](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/CircleBrush.ts#L91)
