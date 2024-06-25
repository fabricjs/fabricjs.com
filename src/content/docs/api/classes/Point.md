---
editUrl: false
next: false
prev: false
title: "Point"
---

Adaptation of work of Kevin Lindsey(kevin@kevlindev.com)

## Implements

- [`XY`](/api/interfaces/xy/)

## Constructors

### new Point()

> **new Point**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

src/Point.ts:18

### new Point()

> **new Point**(`x`, `y`): [`Point`](/api/classes/point/)

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

src/Point.ts:19

### new Point()

> **new Point**(`point`?): [`Point`](/api/classes/point/)

#### Parameters

• **point?**: [`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

src/Point.ts:20

## Properties

### x

> **x**: `number`

#### Implementation of

[`XY`](/api/interfaces/xy/).[`x`](/api/interfaces/xy/#x)

#### Defined in

src/Point.ts:14

***

### y

> **y**: `number`

#### Implementation of

[`XY`](/api/interfaces/xy/).[`y`](/api/interfaces/xy/#y)

#### Defined in

src/Point.ts:16

## Methods

### add()

> **add**(`that`): [`Point`](/api/classes/point/)

Adds another point to this one and returns another one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

new Point instance with added values

#### Defined in

src/Point.ts:36

***

### ~~addEquals()~~

> **addEquals**(`that`): [`Point`](/api/classes/point/)

Adds another point to this one

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

thisArg

#### Chainable

#### Defined in

src/Point.ts:47

***

### clone()

> **clone**(): [`Point`](/api/classes/point/)

return a cloned instance of the point

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

src/Point.ts:347

***

### distanceFrom()

> **distanceFrom**(`that`): `number`

Returns distance from this point and another one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

`number`

#### Defined in

src/Point.ts:246

***

### divide()

> **divide**(`that`): [`Point`](/api/classes/point/)

Divides this point by another and returns a new one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

src/Point.ts:155

***

### eq()

> **eq**(`that`): `boolean`

Returns true if this point is equal to another one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

`boolean`

#### Defined in

src/Point.ts:186

***

### gt()

> **gt**(`that`): `boolean`

Returns true if this point is greater another one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

`boolean`

#### Defined in

src/Point.ts:214

***

### gte()

> **gte**(`that`): `boolean`

Returns true if this point is greater than or equal to another one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

`boolean`

#### Defined in

src/Point.ts:223

***

### lerp()

> **lerp**(`that`, `t`): [`Point`](/api/classes/point/)

Returns new point which is the result of linear interpolation with this one and another one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

• **t**: `number` = `0.5`

, position of interpolation, between 0 and 1 default 0.5

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

src/Point.ts:233

***

### lt()

> **lt**(`that`): `boolean`

Returns true if this point is less than another one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

`boolean`

#### Defined in

src/Point.ts:195

***

### lte()

> **lte**(`that`): `boolean`

Returns true if this point is less than or equal to another one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

`boolean`

#### Defined in

src/Point.ts:204

***

### max()

> **max**(`that`): [`Point`](/api/classes/point/)

Returns a new point which is the max of this and another one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

src/Point.ts:275

***

### midPointFrom()

> **midPointFrom**(`that`): [`Point`](/api/classes/point/)

Returns the point between this point and another one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

src/Point.ts:257

***

### min()

> **min**(`that`): [`Point`](/api/classes/point/)

Returns a new point which is the min of this and another one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

src/Point.ts:266

***

### multiply()

> **multiply**(`that`): [`Point`](/api/classes/point/)

Multiplies this point by another value and returns a new one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

src/Point.ts:124

***

### rotate()

> **rotate**(`radians`, `origin`): [`Point`](/api/classes/point/)

Rotates `point` around `origin` with `radians`

#### Parameters

• **radians**: [`TRadian`](/api/type-aliases/tradian/)

The radians of the angle for the rotation

• **origin**: [`XY`](/api/interfaces/xy/) = `ZERO`

The origin of the rotation

#### Returns

[`Point`](/api/classes/point/)

The new rotated point

#### Static

#### Member Of

fabric.util

#### Defined in

src/Point.ts:359

***

### scalarAdd()

> **scalarAdd**(`scalar`): [`Point`](/api/classes/point/)

Adds value to this point and returns a new one

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](/api/classes/point/)

new Point with added value

#### Defined in

src/Point.ts:58

***

### ~~scalarAddEquals()~~

> **scalarAddEquals**(`scalar`): [`Point`](/api/classes/point/)

Adds value to this point

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](/api/classes/point/)

thisArg

#### Chainable

#### Defined in

src/Point.ts:69

***

### scalarDivide()

> **scalarDivide**(`scalar`): [`Point`](/api/classes/point/)

Divides this point by a value and returns a new one

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

src/Point.ts:164

***

### ~~scalarDivideEquals()~~

> **scalarDivideEquals**(`scalar`): [`Point`](/api/classes/point/)

Divides this point by a value

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](/api/classes/point/)

thisArg

#### Chainable

#### Defined in

src/Point.ts:175

***

### scalarMultiply()

> **scalarMultiply**(`scalar`): [`Point`](/api/classes/point/)

Multiplies this point by a value and returns a new one

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

src/Point.ts:133

***

### ~~scalarMultiplyEquals()~~

> **scalarMultiplyEquals**(`scalar`): [`Point`](/api/classes/point/)

Multiplies this point by a value

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](/api/classes/point/)

thisArg

#### Chainable

#### Defined in

src/Point.ts:144

***

### scalarSubtract()

> **scalarSubtract**(`scalar`): [`Point`](/api/classes/point/)

Subtracts value from this point and returns a new one

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

src/Point.ts:102

***

### ~~scalarSubtractEquals()~~

> **scalarSubtractEquals**(`scalar`): [`Point`](/api/classes/point/)

Subtracts value from this point

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **scalar**: `number`

#### Returns

[`Point`](/api/classes/point/)

thisArg

#### Chainable

#### Defined in

src/Point.ts:113

***

### setFromPoint()

> **setFromPoint**(`that`): [`Point`](/api/classes/point/)

Sets x/y of this point from another point

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

#### Chainable

#### Defined in

src/Point.ts:324

***

### setX()

> **setX**(`x`): [`Point`](/api/classes/point/)

Sets x of this point

#### Parameters

• **x**: `number`

#### Returns

[`Point`](/api/classes/point/)

#### Chainable

#### Defined in

src/Point.ts:304

***

### setXY()

> **setXY**(`x`, `y`): [`Point`](/api/classes/point/)

Sets x/y of this point

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

[`Point`](/api/classes/point/)

#### Chainable

#### Defined in

src/Point.ts:293

***

### setY()

> **setY**(`y`): [`Point`](/api/classes/point/)

Sets y of this point

#### Parameters

• **y**: `number`

#### Returns

[`Point`](/api/classes/point/)

#### Chainable

#### Defined in

src/Point.ts:314

***

### subtract()

> **subtract**(`that`): [`Point`](/api/classes/point/)

Subtracts another point from this point and returns a new one

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

new Point object with subtracted values

#### Defined in

src/Point.ts:80

***

### ~~subtractEquals()~~

> **subtractEquals**(`that`): [`Point`](/api/classes/point/)

Subtracts another point from this point

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

thisArg

#### Chainable

#### Defined in

src/Point.ts:91

***

### swap()

> **swap**(`that`): `void`

Swaps x/y of this point and another point

#### Parameters

• **that**: [`XY`](/api/interfaces/xy/)

#### Returns

`void`

#### Defined in

src/Point.ts:334

***

### toString()

> **toString**(): `string`

Returns string representation of this point

#### Returns

`string`

#### Defined in

src/Point.ts:283

***

### transform()

> **transform**(`t`, `ignoreOffset`?): [`Point`](/api/classes/point/)

Apply transform t to point p

#### Parameters

• **t**: [`TMat2D`](/api/type-aliases/tmat2d/)

The transform

• **ignoreOffset?**: `boolean` = `false`

Indicates that the offset should not be applied

#### Returns

[`Point`](/api/classes/point/)

The transformed point

#### Static

#### Member Of

fabric.util

#### Defined in

src/Point.ts:380
