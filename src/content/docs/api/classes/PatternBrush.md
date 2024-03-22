---
editUrl: false
next: false
prev: false
title: "PatternBrush"
---

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extends

- [`PencilBrush`](PencilBrush.md)

## Constructors

### new PatternBrush(canvas)

> **new PatternBrush**(`canvas`): [`PatternBrush`](PatternBrush.md)

#### Parameters

• **canvas**: [`Canvas`](Canvas.md)

#### Returns

[`PatternBrush`](PatternBrush.md)

#### Overrides

[`PencilBrush`](PencilBrush.md).[`constructor`](PencilBrush.md#constructors)

#### Source

src/brushes/PatternBrush.ts:10

## Properties

### canvas

> **canvas**: [`Canvas`](Canvas.md)

#### Todo

add type

#### Inherited from

[`PencilBrush`](PencilBrush.md).[`canvas`](PencilBrush.md#canvas)

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

[`PencilBrush`](PencilBrush.md).[`color`](PencilBrush.md#color)

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

#### Inherited from

[`PencilBrush`](PencilBrush.md).[`decimate`](PencilBrush.md#decimate)

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

#### Inherited from

[`PencilBrush`](PencilBrush.md).[`drawStraightLine`](PencilBrush.md#drawstraightline)

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

[`PencilBrush`](PencilBrush.md).[`limitedToCanvasSize`](PencilBrush.md#limitedtocanvassize)

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

[`PencilBrush`](PencilBrush.md).[`shadow`](PencilBrush.md#shadow)

#### Source

src/brushes/BaseBrush.ts:32

***

### source?

> **`optional`** **source**: `CanvasImageSource`

#### Source

src/brushes/PatternBrush.ts:8

***

### straightLineKey

> **straightLineKey**: `undefined` \| `null` \| `"altKey"` \| `"shiftKey"` \| `"ctrlKey"` \| `"metaKey"` = `'shiftKey'`

The event modifier key that makes the brush draw a straight line.
If `null` or 'none' or any other string that is not a modifier key the feature is disabled.

#### Inherited from

[`PencilBrush`](PencilBrush.md).[`straightLineKey`](PencilBrush.md#straightlinekey)

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

[`PencilBrush`](PencilBrush.md).[`strokeDashArray`](PencilBrush.md#strokedasharray)

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

[`PencilBrush`](PencilBrush.md).[`strokeLineCap`](PencilBrush.md#strokelinecap)

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

[`PencilBrush`](PencilBrush.md).[`strokeLineJoin`](PencilBrush.md#strokelinejoin)

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

[`PencilBrush`](PencilBrush.md).[`strokeMiterLimit`](PencilBrush.md#strokemiterlimit)

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

[`PencilBrush`](PencilBrush.md).[`width`](PencilBrush.md#width)

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

#### Inherited from

[`PencilBrush`](PencilBrush.md).[`_finalizeAndAddPath`](PencilBrush.md#_finalizeandaddpath)

#### Source

src/brushes/PencilBrush.ts:273

***

### \_setBrushStyles()

> **\_setBrushStyles**(`ctx`): `void`

Sets brush styles

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Overrides

`PencilBrush._setBrushStyles`

#### Source

src/brushes/PatternBrush.ts:50

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

#### Inherited from

[`PencilBrush`](PencilBrush.md).[`convertPointsToSVGPath`](PencilBrush.md#convertpointstosvgpath)

#### Source

src/brushes/PencilBrush.ts:212

***

### createPath()

> **createPath**(`pathData`): [`Path`](Path.md)\<`Partial`\<[`PathProps`](../interfaces/PathProps.md)\>, [`SerializedPathProps`](../interfaces/SerializedPathProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Creates path

#### Parameters

• **pathData**: [`TSimplePathData`](../namespaces/util/type-aliases/TSimplePathData.md)

#### Returns

[`Path`](Path.md)\<`Partial`\<[`PathProps`](../interfaces/PathProps.md)\>, [`SerializedPathProps`](../interfaces/SerializedPathProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Overrides

[`PencilBrush`](PencilBrush.md).[`createPath`](PencilBrush.md#createpath)

#### Source

src/brushes/PatternBrush.ts:59

***

### decimatePoints()

> **decimatePoints**(`points`, `distance`): [`Point`](Point.md)[]

Decimate points array with the decimate value

#### Parameters

• **points**: [`Point`](Point.md)[]

• **distance**: `number`

#### Returns

[`Point`](Point.md)[]

#### Inherited from

[`PencilBrush`](PencilBrush.md).[`decimatePoints`](PencilBrush.md#decimatepoints)

#### Source

src/brushes/PencilBrush.ts:243

***

### getPattern()

> **getPattern**(`ctx`): `null` \| `CanvasPattern`

Creates "pattern" instance property

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`null` \| `CanvasPattern`

#### Source

src/brushes/PatternBrush.ts:42

***

### getPatternSrc()

> **getPatternSrc**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Source

src/brushes/PatternBrush.ts:14

***

### needsFullRender()

> **needsFullRender**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`PencilBrush`](PencilBrush.md).[`needsFullRender`](PencilBrush.md#needsfullrender)

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

#### Inherited from

[`PencilBrush`](PencilBrush.md).[`onMouseDown`](PencilBrush.md#onmousedown)

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

#### Inherited from

[`PencilBrush`](PencilBrush.md).[`onMouseMove`](PencilBrush.md#onmousemove)

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

#### Inherited from

[`PencilBrush`](PencilBrush.md).[`onMouseUp`](PencilBrush.md#onmouseup)

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

#### Inherited from

[`PencilBrush`](PencilBrush.md).[`drawSegment`](PencilBrush.md#drawsegment)

#### Source

src/brushes/PencilBrush.ts:57
