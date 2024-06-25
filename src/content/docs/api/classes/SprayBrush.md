---
editUrl: false
next: false
prev: false
title: "SprayBrush"
---

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extends

- [`BaseBrush`](/api/classes/basebrush/)

## Constructors

### new SprayBrush()

> **new SprayBrush**(`canvas`): [`SprayBrush`](/api/classes/spraybrush/)

Constructor

#### Parameters

• **canvas**: [`Canvas`](/api/classes/canvas/)

#### Returns

[`SprayBrush`](/api/classes/spraybrush/)

Instance of a spray brush

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`constructor`](/api/classes/basebrush/#constructors)

#### Defined in

src/brushes/SprayBrush.ts:83

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

### density

> **density**: `number` = `20`

Density of a spray (number of dots per chunk)

#### Default

```ts

```

#### Defined in

src/brushes/SprayBrush.ts:44

***

### dotWidth

> **dotWidth**: `number` = `1`

Width of spray dots

#### Default

```ts

```

#### Defined in

src/brushes/SprayBrush.ts:51

***

### dotWidthVariance

> **dotWidthVariance**: `number` = `1`

Width variance of spray dots

#### Default

```ts

```

#### Defined in

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

[`BaseBrush`](/api/classes/basebrush/).[`limitedToCanvasSize`](/api/classes/basebrush/#limitedtocanvassize)

#### Defined in

src/brushes/BaseBrush.ts:68

***

### optimizeOverlapping

> **optimizeOverlapping**: `boolean` = `true`

Whether overlapping dots (rectangles) should be removed (for performance reasons)

#### Default

```ts

```

#### Defined in

src/brushes/SprayBrush.ts:72

***

### randomOpacity

> **randomOpacity**: `boolean` = `false`

Whether opacity of a dot should be random

#### Default

```ts

```

#### Defined in

src/brushes/SprayBrush.ts:65

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

Width of a spray

#### Default

```ts

```

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`width`](/api/classes/basebrush/#width)

#### Defined in

src/brushes/SprayBrush.ts:37

## Methods

### \_render()

> **\_render**(): `void`

Render all spray chunks

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`_render`](/api/classes/basebrush/#_render)

#### Defined in

src/brushes/SprayBrush.ts:177

***

### addSprayChunk()

> **addSprayChunk**(`pointer`): `void`

#### Parameters

• **pointer**: [`Point`](/api/classes/point/)

#### Returns

`void`

#### Defined in

src/brushes/SprayBrush.ts:192

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

src/brushes/SprayBrush.ts:93

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

src/brushes/SprayBrush.ts:106

***

### onMouseUp()

> **onMouseUp**(): `void`

Invoked on mouse up

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseUp`](/api/classes/basebrush/#onmouseup)

#### Defined in

src/brushes/SprayBrush.ts:117

***

### renderChunck()

> **renderChunck**(`sprayChunck`): `void`

#### Parameters

• **sprayChunck**: [`SprayBrushPoint`](/api/type-aliases/spraybrushpoint/)[]

#### Returns

`void`

#### Defined in

src/brushes/SprayBrush.ts:159
