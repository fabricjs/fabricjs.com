---
editUrl: false
next: false
prev: false
title: "Point"
---

Adaptation of work of Kevin Lindsey(kevin@kevlindev.com)

## Implements

- [`XY`](../interfaces/XY.md)

## Constructors

### new Point()

> **new Point**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

#### Source

src/Point.ts:18

### new Point(x, y)

> **new Point**(`x`, `y`): [`Point`](Point.md)

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

[`Point`](Point.md)

#### Source

src/Point.ts:19

### new Point(point)

> **new Point**(`point`?): [`Point`](Point.md)

#### Parameters

• **point?**: [`XY`](../interfaces/XY.md)

#### Returns

[`Point`](Point.md)

#### Source

src/Point.ts:20

## Properties

### x

> **x**: `number`

#### Implementation of

[`XY`](../interfaces/XY.md).[`x`](../interfaces/XY.md#x)

#### Source

src/Point.ts:14

***

### y

> **y**: `number`

#### Implementation of

[`XY`](../interfaces/XY.md).[`y`](../interfaces/XY.md#y)

#### Source

src/Point.ts:16

## Methods

### add()

> **add**(`that`): [`Point`](Point.md)

Adds another point to this one and returns another one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

[`Point`](Point.md)

new Point instance with added values

#### Source

src/Point.ts:36

***

### ~~addEquals()~~

> **addEquals**(`that`): [`Point`](Point.md)

Adds another point to this one

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

[`Point`](Point.md)

thisArg

#### Chainable

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Source

src/Point.ts:47

***

### clone()

> **clone**(): [`Point`](Point.md)

return a cloned instance of the point

#### Returns

[`Point`](Point.md)

#### Source

src/Point.ts:347

***

### distanceFrom()

> **distanceFrom**(`that`): `number`

Returns distance from this point and another one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

`number`

#### Source

src/Point.ts:246

***

### divide()

> **divide**(`that`): [`Point`](Point.md)

Divides this point by another and returns a new one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

[`Point`](Point.md)

#### Source

src/Point.ts:155

***

### eq()

> **eq**(`that`): `boolean`

Returns true if this point is equal to another one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

`boolean`

#### Source

src/Point.ts:186

***

### gt()

> **gt**(`that`): `boolean`

Returns true if this point is greater another one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

`boolean`

#### Source

src/Point.ts:214

***

### gte()

> **gte**(`that`): `boolean`

Returns true if this point is greater than or equal to another one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

`boolean`

#### Source

src/Point.ts:223

***

### lerp()

> **lerp**(`that`, `t`): [`Point`](Point.md)

Returns new point which is the result of linear interpolation with this one and another one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

• **t**: `number`= `0.5`

, position of interpolation, between 0 and 1 default 0.5

#### Returns

[`Point`](Point.md)

#### Source

src/Point.ts:233

***

### lt()

> **lt**(`that`): `boolean`

Returns true if this point is less than another one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

`boolean`

#### Source

src/Point.ts:195

***

### lte()

> **lte**(`that`): `boolean`

Returns true if this point is less than or equal to another one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

`boolean`

#### Source

src/Point.ts:204

***

### max()

> **max**(`that`): [`Point`](Point.md)

Returns a new point which is the max of this and another one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

[`Point`](Point.md)

#### Source

src/Point.ts:275

***

### midPointFrom()

> **midPointFrom**(`that`): [`Point`](Point.md)

Returns the point between this point and another one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

[`Point`](Point.md)

#### Source

src/Point.ts:257

***

### min()

> **min**(`that`): [`Point`](Point.md)

Returns a new point which is the min of this and another one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

[`Point`](Point.md)

#### Source

src/Point.ts:266

***

### multiply()

> **multiply**(`that`): [`Point`](Point.md)

Multiplies this point by another value and returns a new one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

[`Point`](Point.md)

#### Source

src/Point.ts:124

***

### rotate()

> **rotate**(`radians`, `origin`): [`Point`](Point.md)

Rotates `point` around `origin` with `radians`

#### Parameters

• **radians**: [`TRadian`](../type-aliases/TRadian.md)

The radians of the angle for the rotation

• **origin**: [`XY`](../interfaces/XY.md)= `ZERO`

The origin of the rotation

#### Returns

[`Point`](Point.md)

The new rotated point

#### Static

#### Member Of

fabric.util

#### Source

src/Point.ts:359

***

### scalarAdd()

> **scalarAdd**(`scalar`): [`Point`](Point.md)

Adds value to this point and returns a new one

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](Point.md)

new Point with added value

#### Source

src/Point.ts:58

***

### ~~scalarAddEquals()~~

> **scalarAddEquals**(`scalar`): [`Point`](Point.md)

Adds value to this point

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](Point.md)

thisArg

#### Chainable

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Source

src/Point.ts:69

***

### scalarDivide()

> **scalarDivide**(`scalar`): [`Point`](Point.md)

Divides this point by a value and returns a new one

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](Point.md)

#### Source

src/Point.ts:164

***

### ~~scalarDivideEquals()~~

> **scalarDivideEquals**(`scalar`): [`Point`](Point.md)

Divides this point by a value

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](Point.md)

thisArg

#### Chainable

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Source

src/Point.ts:175

***

### scalarMultiply()

> **scalarMultiply**(`scalar`): [`Point`](Point.md)

Multiplies this point by a value and returns a new one

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](Point.md)

#### Source

src/Point.ts:133

***

### ~~scalarMultiplyEquals()~~

> **scalarMultiplyEquals**(`scalar`): [`Point`](Point.md)

Multiplies this point by a value

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](Point.md)

thisArg

#### Chainable

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Source

src/Point.ts:144

***

### scalarSubtract()

> **scalarSubtract**(`scalar`): [`Point`](Point.md)

Subtracts value from this point and returns a new one

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](Point.md)

#### Source

src/Point.ts:102

***

### ~~scalarSubtractEquals()~~

> **scalarSubtractEquals**(`scalar`): [`Point`](Point.md)

Subtracts value from this point

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](Point.md)

thisArg

#### Chainable

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Source

src/Point.ts:113

***

### setFromPoint()

> **setFromPoint**(`that`): [`Point`](Point.md)

Sets x/y of this point from another point

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

[`Point`](Point.md)

#### Chainable

#### Source

src/Point.ts:324

***

### setX()

> **setX**(`x`): [`Point`](Point.md)

Sets x of this point

#### Parameters

• **x**: `number`

#### Returns

[`Point`](Point.md)

#### Chainable

#### Source

src/Point.ts:304

***

### setXY()

> **setXY**(`x`, `y`): [`Point`](Point.md)

Sets x/y of this point

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

[`Point`](Point.md)

#### Chainable

#### Source

src/Point.ts:293

***

### setY()

> **setY**(`y`): [`Point`](Point.md)

Sets y of this point

#### Parameters

• **y**: `number`

#### Returns

[`Point`](Point.md)

#### Chainable

#### Source

src/Point.ts:314

***

### subtract()

> **subtract**(`that`): [`Point`](Point.md)

Subtracts another point from this point and returns a new one

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

[`Point`](Point.md)

new Point object with subtracted values

#### Source

src/Point.ts:80

***

### ~~subtractEquals()~~

> **subtractEquals**(`that`): [`Point`](Point.md)

Subtracts another point from this point

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

[`Point`](Point.md)

thisArg

#### Chainable

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Source

src/Point.ts:91

***

### swap()

> **swap**(`that`): `void`

Swaps x/y of this point and another point

#### Parameters

• **that**: [`XY`](../interfaces/XY.md)

#### Returns

`void`

#### Source

src/Point.ts:334

***

### toString()

> **toString**(): `string`

Returns string representation of this point

#### Returns

`string`

#### Source

src/Point.ts:283

***

### transform()

> **transform**(`t`, `ignoreOffset`?): [`Point`](Point.md)

Apply transform t to point p

#### Parameters

• **t**: [`TMat2D`](../type-aliases/TMat2D.md)

The transform

• **ignoreOffset?**: `boolean`= `false`

Indicates that the offset should not be applied

#### Returns

[`Point`](Point.md)

The transformed point

#### Static

#### Member Of

fabric.util

#### Source

src/Point.ts:380
