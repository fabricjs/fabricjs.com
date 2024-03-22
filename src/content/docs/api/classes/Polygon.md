---
editUrl: false
next: false
prev: false
title: "Polygon"
---

## Extends

- [`Polyline`](Polyline.md)

## Constructors

### new Polygon(points, options)

> **new Polygon**(`points`, `options`?): [`Polygon`](Polygon.md)

Constructor

#### Parameters

• **points**: [`XY`](../interfaces/XY.md)[]= `[]`

Array of points (where each point is an object with x and y)

• **options?**: `Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>= `undefined`

Options object

#### Returns

[`Polygon`](Polygon.md)

thisArg

#### Inherited from

[`Polyline`](Polyline.md).[`constructor`](Polyline.md#constructors)

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

#### Inherited from

[`Polyline`](Polyline.md).[`exactBoundingBox`](Polyline.md#exactboundingbox)

#### Source

src/shapes/Polyline.ts:57

***

### pathOffset

> **pathOffset**: [`Point`](Point.md)

#### Inherited from

[`Polyline`](Polyline.md).[`pathOffset`](Polyline.md#pathoffset)

#### Source

src/shapes/Polyline.ts:86

***

### points

> **points**: [`XY`](../interfaces/XY.md)[]

Points array

#### Default

```ts

```

#### Inherited from

[`Polyline`](Polyline.md).[`points`](Polyline.md#points)

#### Source

src/shapes/Polyline.ts:46

***

### strokeDiff

> **strokeDiff**: [`Point`](Point.md)

#### Inherited from

[`Polyline`](Polyline.md).[`strokeDiff`](Polyline.md#strokediff)

#### Source

src/shapes/Polyline.ts:92

***

### strokeOffset

> **strokeOffset**: [`Point`](Point.md)

#### Inherited from

[`Polyline`](Polyline.md).[`strokeOffset`](Polyline.md#strokeoffset)

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

#### Inherited from

[`Polyline`](Polyline.md).[`ATTRIBUTE_NAMES`](Polyline.md#attribute_names)

#### Source

src/shapes/Polyline.ts:383

***

### cacheProperties

> **`static`** **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

[`Polyline`](Polyline.md).[`cacheProperties`](Polyline.md#cacheproperties)

#### Source

src/shapes/Polyline.ts:90

***

### layoutProperties

> **`static`** **layoutProperties**: keyof [`Polyline`](Polyline.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

A list of properties that if changed trigger a recalculation of dimensions

#### Todo

check if you really need to recalculate for all cases

#### Inherited from

[`Polyline`](Polyline.md).[`layoutProperties`](Polyline.md#layoutproperties)

#### Source

src/shapes/Polyline.ts:75

***

### ownDefaults

> **`static`** **ownDefaults**: `Partial`\<[`TClassProperties`](../type-aliases/TClassProperties.md)\<[`Polyline`](Polyline.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>\> = `polylineDefaultValues`

#### Overrides

[`Polyline`](Polyline.md).[`ownDefaults`](Polyline.md#owndefaults)

#### Source

src/shapes/Polygon.ts:5

***

### type

> **`static`** **type**: `string` = `'Polygon'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`Polyline`](Polyline.md).[`type`](Polyline.md#type)

#### Source

src/shapes/Polygon.ts:7

## Accessors

### type

> **`get`** **type**(): `string`

Legacy identifier of the class. Prefer using utils like isType or instanceOf
Will be removed in fabric 7 or 8.
The setter exists because is very hard to catch all the ways in which a type value
could be set in the instance

#### TODO

add sustainable warning message

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

> **`set`** **type**(`value`): `void`

#### Parameters

• **value**: `string`

#### Returns

`string`

#### Source

src/shapes/Object/Object.ts:320

## Methods

### \_getNonTransformedDimensions()

> **\_getNonTransformedDimensions**(): [`Point`](Point.md)

stroke is taken in account in size

#### Returns

[`Point`](Point.md)

#### Inherited from

[`Polyline`](Polyline.md).[`_getNonTransformedDimensions`](Polyline.md#_getnontransformeddimensions)

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

#### Inherited from

[`Polyline`](Polyline.md).[`_toSVG`](Polyline.md#_tosvg)

#### Source

src/shapes/Polyline.ts:318

***

### complexity()

> **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity of this instance

#### Inherited from

[`Polyline`](Polyline.md).[`complexity`](Polyline.md#complexity)

#### Source

src/shapes/Polyline.ts:371

***

### setBoundingBox()

> **setBoundingBox**(`adjustPosition`?): `void`

#### Parameters

• **adjustPosition?**: `boolean`

#### Returns

`void`

#### Inherited from

[`Polyline`](Polyline.md).[`setBoundingBox`](Polyline.md#setboundingbox)

#### Source

src/shapes/Polyline.ts:206

***

### setDimensions()

> **setDimensions**(): `void`

#### Returns

`void`

#### Inherited from

[`Polyline`](Polyline.md).[`setDimensions`](Polyline.md#setdimensions)

#### Source

src/shapes/Polyline.ts:202

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md)

Returns object representation of an instance

#### Type parameters

• **T** extends `Omit`\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\> & [`TClassProperties`](../type-aliases/TClassProperties.md)\<[`Polygon`](Polygon.md)\>, keyof [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md)\>

• **K** extends `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[]= `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md)

Object representation of an instance

#### Inherited from

[`Polyline`](Polyline.md).[`toObject`](Polyline.md#toobject)

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

#### Inherited from

[`Polyline`](Polyline.md).[`fromElement`](Polyline.md#fromelement)

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

#### Inherited from

[`Polyline`](Polyline.md).[`fromObject`](Polyline.md#fromobject)

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

[`Polyline`](Polyline.md).[`getDefaults`](Polyline.md#getdefaults)

#### Source

src/shapes/Polygon.ts:9
