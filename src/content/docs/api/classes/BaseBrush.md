---
editUrl: false
next: false
prev: false
title: "BaseBrush"
---

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extended by

- [`PencilBrush`](/api/classes/pencilbrush/)
- [`CircleBrush`](/api/classes/circlebrush/)
- [`SprayBrush`](/api/classes/spraybrush/)

## Constructors

### new BaseBrush()

> **new BaseBrush**(`canvas`): [`BaseBrush`](/api/classes/basebrush/)

#### Parameters

• **canvas**: [`Canvas`](/api/classes/canvas/)

#### Returns

[`BaseBrush`](/api/classes/basebrush/)

#### Defined in

[src/brushes/BaseBrush.ts:75](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L75)

## Properties

### canvas

> **canvas**: [`Canvas`](/api/classes/canvas/)

#### Todo

add type

#### Defined in

[src/brushes/BaseBrush.ts:73](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L73)

***

### color

> **color**: `string` = `'rgb(0, 0, 0)'`

Color of a brush

#### Default

```ts

```

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

#### Defined in

[src/brushes/BaseBrush.ts:68](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L68)

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/) = `null`

Shadow object representing shadow of this shape.
<b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
"shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12

#### Default

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:32](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L32)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[] = `null`

Stroke Dash Array.

#### Default

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:60](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L60)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap` = `'round'`

Line endings style of a brush (one of "butt", "round", "square")

#### Default

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L39)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin` = `'round'`

Corner style of a brush (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:46](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L46)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number` = `10`

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

#### Default

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L53)

***

### width

> **width**: `number` = `1`

Width of a brush, has to be a Number, no string literals

#### Default

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:23](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L23)

## Methods

### \_render()

> `abstract` **\_render**(): `void`

#### Returns

`void`

#### Defined in

[src/brushes/BaseBrush.ts:79](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L79)

***

### onMouseDown()

> `abstract` **onMouseDown**(`pointer`, `ev`): `void`

#### Parameters

• **pointer**: [`Point`](/api/classes/point/)

• **ev**: [`TBrushEventData`](/api/type-aliases/tbrusheventdata/)

#### Returns

`void`

#### Defined in

[src/brushes/BaseBrush.ts:80](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L80)

***

### onMouseMove()

> `abstract` **onMouseMove**(`pointer`, `ev`): `void`

#### Parameters

• **pointer**: [`Point`](/api/classes/point/)

• **ev**: [`TBrushEventData`](/api/type-aliases/tbrusheventdata/)

#### Returns

`void`

#### Defined in

[src/brushes/BaseBrush.ts:81](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L81)

***

### onMouseUp()

> `abstract` **onMouseUp**(`ev`): `boolean` \| `void`

#### Parameters

• **ev**: [`TBrushEventData`](/api/type-aliases/tbrusheventdata/)

#### Returns

`boolean` \| `void`

true if brush should continue blocking interaction

#### Defined in

[src/brushes/BaseBrush.ts:85](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/brushes/BaseBrush.ts#L85)
