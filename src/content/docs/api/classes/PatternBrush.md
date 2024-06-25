---
editUrl: false
next: false
prev: false
title: "PatternBrush"
---

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extends

- [`PencilBrush`](/api/classes/pencilbrush/)

## Constructors

### new PatternBrush()

> **new PatternBrush**(`canvas`): [`PatternBrush`](/api/classes/patternbrush/)

#### Parameters

• **canvas**: [`Canvas`](/api/classes/canvas/)

**Todo**

add type

#### Returns

[`PatternBrush`](/api/classes/patternbrush/)

#### Overrides

[`PencilBrush`](/api/classes/pencilbrush/).[`constructor`](/api/classes/pencilbrush/#constructors)

#### Defined in

src/brushes/PatternBrush.ts:10

## Properties

### canvas

> **canvas**: [`Canvas`](/api/classes/canvas/)

#### Todo

add type

#### Inherited from

[`PencilBrush`](/api/classes/pencilbrush/).[`canvas`](/api/classes/pencilbrush/#canvas)

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

[`PencilBrush`](/api/classes/pencilbrush/).[`color`](/api/classes/pencilbrush/#color)

#### Defined in

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

[`PencilBrush`](/api/classes/pencilbrush/).[`decimate`](/api/classes/pencilbrush/#decimate)

#### Defined in

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

[`PencilBrush`](/api/classes/pencilbrush/).[`drawStraightLine`](/api/classes/pencilbrush/#drawstraightline)

#### Defined in

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

[`PencilBrush`](/api/classes/pencilbrush/).[`limitedToCanvasSize`](/api/classes/pencilbrush/#limitedtocanvassize)

#### Defined in

src/brushes/BaseBrush.ts:68

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

[`PencilBrush`](/api/classes/pencilbrush/).[`shadow`](/api/classes/pencilbrush/#shadow)

#### Defined in

src/brushes/BaseBrush.ts:32

***

### source?

> `optional` **source**: `CanvasImageSource`

#### Defined in

src/brushes/PatternBrush.ts:8

***

### straightLineKey

> **straightLineKey**: `undefined` \| `null` \| `"altKey"` \| `"shiftKey"` \| `"ctrlKey"` \| `"metaKey"` = `'shiftKey'`

The event modifier key that makes the brush draw a straight line.
If `null` or 'none' or any other string that is not a modifier key the feature is disabled.

#### Inherited from

[`PencilBrush`](/api/classes/pencilbrush/).[`straightLineKey`](/api/classes/pencilbrush/#straightlinekey)

#### Defined in

src/brushes/PencilBrush.ts:41

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[] = `null`

Stroke Dash Array.

#### Default

```ts

```

#### Inherited from

[`PencilBrush`](/api/classes/pencilbrush/).[`strokeDashArray`](/api/classes/pencilbrush/#strokedasharray)

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

[`PencilBrush`](/api/classes/pencilbrush/).[`strokeLineCap`](/api/classes/pencilbrush/#strokelinecap)

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

[`PencilBrush`](/api/classes/pencilbrush/).[`strokeLineJoin`](/api/classes/pencilbrush/#strokelinejoin)

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

[`PencilBrush`](/api/classes/pencilbrush/).[`strokeMiterLimit`](/api/classes/pencilbrush/#strokemiterlimit)

#### Defined in

src/brushes/BaseBrush.ts:53

***

### width

> **width**: `number` = `1`

Width of a brush, has to be a Number, no string literals

#### Default

```ts

```

#### Inherited from

[`PencilBrush`](/api/classes/pencilbrush/).[`width`](/api/classes/pencilbrush/#width)

#### Defined in

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

[`PencilBrush`](/api/classes/pencilbrush/).[`_finalizeAndAddPath`](/api/classes/pencilbrush/#_finalizeandaddpath)

#### Defined in

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

#### Defined in

src/brushes/PatternBrush.ts:50

***

### convertPointsToSVGPath()

> **convertPointsToSVGPath**(`points`): [`TSimplePathData`](/api/namespaces/util/type-aliases/tsimplepathdata/)

Converts points to SVG path

#### Parameters

• **points**: [`Point`](/api/classes/point/)[]

Array of points

#### Returns

[`TSimplePathData`](/api/namespaces/util/type-aliases/tsimplepathdata/)

SVG path commands

#### Inherited from

[`PencilBrush`](/api/classes/pencilbrush/).[`convertPointsToSVGPath`](/api/classes/pencilbrush/#convertpointstosvgpath)

#### Defined in

src/brushes/PencilBrush.ts:212

***

### createPath()

> **createPath**(`pathData`): [`Path`](/api/classes/path/)\<`Partial`\<[`PathProps`](/api/interfaces/pathprops/)\>, [`SerializedPathProps`](/api/interfaces/serializedpathprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Creates path

#### Parameters

• **pathData**: [`TSimplePathData`](/api/namespaces/util/type-aliases/tsimplepathdata/)

#### Returns

[`Path`](/api/classes/path/)\<`Partial`\<[`PathProps`](/api/interfaces/pathprops/)\>, [`SerializedPathProps`](/api/interfaces/serializedpathprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Overrides

[`PencilBrush`](/api/classes/pencilbrush/).[`createPath`](/api/classes/pencilbrush/#createpath)

#### Defined in

src/brushes/PatternBrush.ts:59

***

### decimatePoints()

> **decimatePoints**(`points`, `distance`): [`Point`](/api/classes/point/)[]

Decimate points array with the decimate value

#### Parameters

• **points**: [`Point`](/api/classes/point/)[]

• **distance**: `number`

#### Returns

[`Point`](/api/classes/point/)[]

#### Inherited from

[`PencilBrush`](/api/classes/pencilbrush/).[`decimatePoints`](/api/classes/pencilbrush/#decimatepoints)

#### Defined in

src/brushes/PencilBrush.ts:243

***

### getPattern()

> **getPattern**(`ctx`): `null` \| `CanvasPattern`

Creates "pattern" instance property

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`null` \| `CanvasPattern`

#### Defined in

src/brushes/PatternBrush.ts:42

***

### getPatternSrc()

> **getPatternSrc**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Defined in

src/brushes/PatternBrush.ts:14

***

### needsFullRender()

> **needsFullRender**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`PencilBrush`](/api/classes/pencilbrush/).[`needsFullRender`](/api/classes/pencilbrush/#needsfullrender)

#### Defined in

src/brushes/PencilBrush.ts:53

***

### onMouseDown()

> **onMouseDown**(`pointer`, `__namedParameters`): `void`

Invoked on mouse down

#### Parameters

• **pointer**: [`Point`](/api/classes/point/)

• **\_\_namedParameters**: [`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Inherited from

[`PencilBrush`](/api/classes/pencilbrush/).[`onMouseDown`](/api/classes/pencilbrush/#onmousedown)

#### Defined in

src/brushes/PencilBrush.ts:67

***

### onMouseMove()

> **onMouseMove**(`pointer`, `__namedParameters`): `void`

Invoked on mouse move

#### Parameters

• **pointer**: [`Point`](/api/classes/point/)

• **\_\_namedParameters**: [`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Inherited from

[`PencilBrush`](/api/classes/pencilbrush/).[`onMouseMove`](/api/classes/pencilbrush/#onmousemove)

#### Defined in

src/brushes/PencilBrush.ts:83

***

### onMouseUp()

> **onMouseUp**(`__namedParameters`): `boolean`

Invoked on mouse up

#### Parameters

• **\_\_namedParameters**: [`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`boolean`

#### Inherited from

[`PencilBrush`](/api/classes/pencilbrush/).[`onMouseUp`](/api/classes/pencilbrush/#onmouseup)

#### Defined in

src/brushes/PencilBrush.ts:121

***

### drawSegment()

> `static` **drawSegment**(`ctx`, `p1`, `p2`): [`Point`](/api/classes/point/)

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **p1**: [`Point`](/api/classes/point/)

• **p2**: [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`PencilBrush`](/api/classes/pencilbrush/).[`drawSegment`](/api/classes/pencilbrush/#drawsegment)

#### Defined in

src/brushes/PencilBrush.ts:57
