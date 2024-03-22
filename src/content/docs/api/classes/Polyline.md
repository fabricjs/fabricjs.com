---
editUrl: false
next: false
prev: false
title: "Polyline"
---

## Extends

- [`FabricObject`](FabricObject.md)\<`Props`, `SProps`, `EventSpec`\>

## Type parameters

• **Props** extends [`TOptions`](../type-aliases/TOptions.md)\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\> = `Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>

• **SProps** extends [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md) = [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md)

• **EventSpec** extends [`ObjectEvents`](../interfaces/ObjectEvents.md) = [`ObjectEvents`](../interfaces/ObjectEvents.md)

## Constructors

### new Polyline(points, options)

> **new Polyline**\<`Props`, `SProps`, `EventSpec`\>(`points`, `options`?): [`Polyline`](Polyline.md)\<`Props`, `SProps`, `EventSpec`\>

Constructor

#### Parameters

• **points**: [`XY`](../interfaces/XY.md)[]= `[]`

Array of points (where each point is an object with x and y)

• **options?**: `Props`= `undefined`

Options object

#### Returns

[`Polyline`](Polyline.md)\<`Props`, `SProps`, `EventSpec`\>

thisArg

#### Overrides

[`FabricObject`](FabricObject.md).[`constructor`](FabricObject.md#constructors)

#### Example

```ts
var poly = new Polyline([
    { x: 10, y: 10 },
    { x: 50, y: 30 },
    { x: 40, y: 70 },
    { x: 60, y: 50 },
    { x: 100, y: 150 },
    { x: 40, y: 100 }
  ], {
  stroke: 'red',
  left: 100,
  top: 100
});
```

#### Source

src/shapes/Polyline.ts:113

## Properties

### ~~exactBoundingBox~~

> **exactBoundingBox**: `boolean`

WARNING: Feature in progress
Calculate the exact bounding box taking in account strokeWidth on acute angles
this will be turned to true by default on fabric 6.0
maybe will be left in as an optimization since calculations may be slow

#### Default

```ts
false
```

:::caution[Deprecated]
transient option soon to be removed in favor of a different design
:::

#### Source

src/shapes/Polyline.ts:57

***

### pathOffset

> **pathOffset**: [`Point`](Point.md)

#### Source

src/shapes/Polyline.ts:86

***

### points

> **points**: [`XY`](../interfaces/XY.md)[]

Points array

#### Default

```ts

```

#### Source

src/shapes/Polyline.ts:46

***

### strokeDiff

> **strokeDiff**: [`Point`](Point.md)

#### Source

src/shapes/Polyline.ts:92

***

### strokeOffset

> **strokeOffset**: [`Point`](Point.md)

#### Source

src/shapes/Polyline.ts:88

***

### ATTRIBUTE\_NAMES

> **`static`** **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [Polyline.fromElement](../../../../api/classes/polyline/#fromelement))

#### Static

#### Member Of

Polyline
@see: http://www.w3.org/TR/SVG/shapes.html#PolylineElement

#### Source

src/shapes/Polyline.ts:383

***

### cacheProperties

> **`static`** **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Overrides

[`FabricObject`](FabricObject.md).[`cacheProperties`](FabricObject.md#cacheproperties)

#### Source

src/shapes/Polyline.ts:90

***

### layoutProperties

> **`static`** **layoutProperties**: keyof [`Polyline`](Polyline.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

A list of properties that if changed trigger a recalculation of dimensions

#### Todo

check if you really need to recalculate for all cases

#### Source

src/shapes/Polyline.ts:75

***

### ownDefaults

> **`static`** **ownDefaults**: `Partial`\<[`TClassProperties`](../type-aliases/TClassProperties.md)\<[`Polyline`](Polyline.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>\> = `polylineDefaultValues`

#### Overrides

[`FabricObject`](FabricObject.md).[`ownDefaults`](FabricObject.md#owndefaults)

#### Source

src/shapes/Polyline.ts:61

***

### type

> **`static`** **type**: `string` = `'Polyline'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`FabricObject`](FabricObject.md).[`type`](FabricObject.md#type)

#### Source

src/shapes/Polyline.ts:63

## Methods

### \_getNonTransformedDimensions()

> **\_getNonTransformedDimensions**(): [`Point`](Point.md)

stroke is taken in account in size

#### Returns

[`Point`](Point.md)

#### Overrides

`FabricObject._getNonTransformedDimensions`

#### Source

src/shapes/Polyline.ts:228

***

### \_toSVG()

> **\_toSVG**(): `string`[]

Returns svg representation of an instance

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Overrides

[`FabricObject`](FabricObject.md).[`_toSVG`](FabricObject.md#_tosvg)

#### Source

src/shapes/Polyline.ts:318

***

### complexity()

> **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity of this instance

#### Overrides

[`FabricObject`](FabricObject.md).[`complexity`](FabricObject.md#complexity)

#### Source

src/shapes/Polyline.ts:371

***

### setBoundingBox()

> **setBoundingBox**(`adjustPosition`?): `void`

#### Parameters

• **adjustPosition?**: `boolean`

#### Returns

`void`

#### Source

src/shapes/Polyline.ts:206

***

### setDimensions()

> **setDimensions**(): `void`

#### Returns

`void`

#### Source

src/shapes/Polyline.ts:202

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

• **T** extends `Omit`\<`Props` & [`TClassProperties`](../type-aliases/TClassProperties.md)\<[`Polyline`](Polyline.md)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\>

• **K** extends `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[]= `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

Object representation of an instance

#### Overrides

[`FabricObject`](FabricObject.md).[`toObject`](FabricObject.md#toobject)

#### Source

src/shapes/Polyline.ts:303

***

### fromElement()

> **`static`** **fromElement**(`element`, `options`?, `cssRules`?): `Promise`\<[`Polyline`](Polyline.md)\<`Object`, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

Returns Polyline instance from an SVG element

#### Parameters

• **element**: `HTMLElement`

Element to parser

• **options?**: [`Abortable`](../type-aliases/Abortable.md)

Options object

• **cssRules?**: `CSSRules`

#### Returns

`Promise`\<[`Polyline`](Polyline.md)\<`Object`, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

#### Static

#### Member Of

Polyline

#### Source

src/shapes/Polyline.ts:392

***

### fromObject()

> **`static`** **fromObject**\<`T`\>(`object`): `Promise`\<[`Polyline`](Polyline.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

Returns Polyline instance from an object representation

#### Type parameters

• **T** extends [`TOptions`](../type-aliases/TOptions.md)\<[`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md)\>

#### Parameters

• **object**: `T`

Object to create an instance from

#### Returns

`Promise`\<[`Polyline`](Polyline.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

#### Overrides

[`FabricObject`](FabricObject.md).[`fromObject`](FabricObject.md#fromobject)

#### Static

#### Member Of

Polyline

#### Source

src/shapes/Polyline.ts:420

***

### getDefaults()

> **`static`** **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

[`FabricObject`](FabricObject.md).[`getDefaults`](FabricObject.md#getdefaults)

#### Source

src/shapes/Polyline.ts:65
