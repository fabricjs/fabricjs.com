---
editUrl: false
next: false
prev: false
title: "PencilBrush"
---

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extends

- [`BaseBrush`](BaseBrush.md)

## Constructors

### new PencilBrush(canvas)

> **new PencilBrush**(`canvas`): [`PencilBrush`](PencilBrush.md)

#### Parameters

• **canvas**: [`Canvas`](Canvas.md)

#### Returns

[`PencilBrush`](PencilBrush.md)

#### Overrides

[`BaseBrush`](BaseBrush.md).[`constructor`](BaseBrush.md#constructors)

#### Source

src/brushes/PencilBrush.ts:47

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

### decimate

> **decimate**: `number` = `0.4`

Discard points that are less than `decimate` pixel distant from each other

#### Default

```ts
0.4
```

#### Source

src/brushes/PencilBrush.ts:25

***

### drawStraightLine

> **drawStraightLine**: `boolean` = `false`

Draws a straight line between last recorded point to current pointer
Used for `shift` functionality

#### Default

```ts
false
```

#### Source

src/brushes/PencilBrush.ts:34

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

### straightLineKey

> **straightLineKey**: `undefined` \| `null` \| `"altKey"` \| `"shiftKey"` \| `"ctrlKey"` \| `"metaKey"` = `'shiftKey'`

The event modifier key that makes the brush draw a straight line.
If `null` or 'none' or any other string that is not a modifier key the feature is disabled.

#### Source

src/brushes/PencilBrush.ts:41

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

> **width**: `number` = `1`

Width of a brush, has to be a Number, no string literals

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](BaseBrush.md).[`width`](BaseBrush.md#width)

#### Source

src/brushes/BaseBrush.ts:23

## Methods

### \_finalizeAndAddPath()

> **\_finalizeAndAddPath**(): `void`

On mouseup after drawing the path on contextTop canvas
we use the points captured to create an new Path object
and add it to the canvas.

#### Returns

`void`

#### Source

src/brushes/PencilBrush.ts:273

***

### convertPointsToSVGPath()

> **convertPointsToSVGPath**(`points`): [`TSimplePathData`](../namespaces/util/type-aliases/TSimplePathData.md)

Converts points to SVG path

#### Parameters

• **points**: [`Point`](Point.md)[]

Array of points

#### Returns

[`TSimplePathData`](../namespaces/util/type-aliases/TSimplePathData.md)

SVG path commands

#### Source

src/brushes/PencilBrush.ts:212

***

### createPath()

> **createPath**(`pathData`): [`Path`](Path.md)\<`Partial`\<[`PathProps`](../interfaces/PathProps.md)\>, [`SerializedPathProps`](../interfaces/SerializedPathProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Creates a Path object to add on canvas

#### Parameters

• **pathData**: [`TSimplePathData`](../namespaces/util/type-aliases/TSimplePathData.md)

Path data

#### Returns

[`Path`](Path.md)\<`Partial`\<[`PathProps`](../interfaces/PathProps.md)\>, [`SerializedPathProps`](../interfaces/SerializedPathProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Path to add on canvas

#### Source

src/brushes/PencilBrush.ts:222

***

### decimatePoints()

> **decimatePoints**(`points`, `distance`): [`Point`](Point.md)[]

Decimate points array with the decimate value

#### Parameters

• **points**: [`Point`](Point.md)[]

• **distance**: `number`

#### Returns

[`Point`](Point.md)[]

#### Source

src/brushes/PencilBrush.ts:243

***

### needsFullRender()

> **needsFullRender**(): `boolean`

#### Returns

`boolean`

#### Overrides

`BaseBrush.needsFullRender`

#### Source

src/brushes/PencilBrush.ts:53

***

### onMouseDown()

> **onMouseDown**(`pointer`, `__namedParameters`): `void`

Invoked on mouse down

#### Parameters

• **pointer**: [`Point`](Point.md)

• **\_\_namedParameters**: [`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Returns

`void`

#### Overrides

[`BaseBrush`](BaseBrush.md).[`onMouseDown`](BaseBrush.md#onmousedown)

#### Source

src/brushes/PencilBrush.ts:67

***

### onMouseMove()

> **onMouseMove**(`pointer`, `__namedParameters`): `void`

Invoked on mouse move

#### Parameters

• **pointer**: [`Point`](Point.md)

• **\_\_namedParameters**: [`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Returns

`void`

#### Overrides

[`BaseBrush`](BaseBrush.md).[`onMouseMove`](BaseBrush.md#onmousemove)

#### Source

src/brushes/PencilBrush.ts:83

***

### onMouseUp()

> **onMouseUp**(`__namedParameters`): `boolean`

Invoked on mouse up

#### Parameters

• **\_\_namedParameters**: [`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Returns

`boolean`

#### Overrides

[`BaseBrush`](BaseBrush.md).[`onMouseUp`](BaseBrush.md#onmouseup)

#### Source

src/brushes/PencilBrush.ts:121

***

### drawSegment()

> **`static`** **drawSegment**(`ctx`, `p1`, `p2`): [`Point`](Point.md)

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **p1**: [`Point`](Point.md)

• **p2**: [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

#### Source

src/brushes/PencilBrush.ts:57
