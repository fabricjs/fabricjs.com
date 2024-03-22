---
editUrl: false
next: false
prev: false
title: "Gradient"
---

Gradient class
 Gradient

## Tutorial

[http://fabricjs.com/fabric-intro-part-2#gradients](http://fabricjs.com/fabric-intro-part-2#gradients)

## Type parameters

• **S**

• **T** extends [`GradientType`](../type-aliases/GradientType.md) = `S` extends [`GradientType`](../type-aliases/GradientType.md) ? `S` : `"linear"`

## Constructors

### new Gradient(__namedParameters)

> **new Gradient**\<`S`, `T`\>(`__namedParameters`): [`Gradient`](Gradient.md)\<`S`, `T`\>

#### Parameters

• **\_\_namedParameters**: [`GradientOptions`](../type-aliases/GradientOptions.md)\<`T`\>

#### Returns

[`Gradient`](Gradient.md)\<`S`, `T`\>

#### Source

src/gradient/Gradient.ts:102

## Properties

### colorStops

> **colorStops**: [`ColorStop`](../type-aliases/ColorStop.md)[]

Defines how many colors a gradient has and how they are located on the axis
defined by coords

#### Source

src/gradient/Gradient.ts:86

***

### coords

> **coords**: [`GradientCoords`](../type-aliases/GradientCoords.md)\<`T`\>

Defines how the gradient is located in space and spread

#### Source

src/gradient/Gradient.ts:79

***

### excludeFromExport?

> **`optional`** **excludeFromExport**: `boolean`

If true, this object will not be exported during the serialization of a canvas

#### Source

src/gradient/Gradient.ts:92

***

### gradientTransform?

> **`optional`** **gradientTransform**: [`TMat2D`](../type-aliases/TMat2D.md)

A transform matrix to apply to the gradient before painting.
Imported from svg gradients, is not applied with the current transform in the center.
Before this transform is applied, the origin point is at the top left corner of the object
plus the addition of offsetY and offsetX.

#### Default

```ts
null
```

#### Source

src/gradient/Gradient.ts:55

***

### gradientUnits

> **gradientUnits**: [`GradientUnits`](../type-aliases/GradientUnits.md)

coordinates units for coords.
If `pixels`, the number of coords are in the same unit of width / height.
If set as `percentage` the coords are still a number, but 1 means 100% of width
for the X and 100% of the height for the y. It can be bigger than 1 and negative.
allowed values pixels or percentage.

#### Default

```ts
'pixels'
```

#### Source

src/gradient/Gradient.ts:66

***

### id

> **`readonly`** **id**: `string` \| `number`

ID used for SVG export functionalities

#### Source

src/gradient/Gradient.ts:98

***

### offsetX

> **offsetX**: `number`

Horizontal offset for aligning gradients coming from SVG when outside pathgroups

#### Default

```ts
0
```

#### Source

src/gradient/Gradient.ts:38

***

### offsetY

> **offsetY**: `number`

Vertical offset for aligning gradients coming from SVG when outside pathgroups

#### Default

```ts
0
```

#### Source

src/gradient/Gradient.ts:45

***

### type

> **type**: `T`

Gradient type linear or radial

#### Default

```ts
'linear'
```

#### Source

src/gradient/Gradient.ts:73

***

### type

> **`static`** **type**: `string` = `'Gradient'`

#### Source

src/gradient/Gradient.ts:100

## Methods

### addColorStop()

> **addColorStop**(`colorStops`): [`Gradient`](Gradient.md)\<`S`, `T`\>

Adds another colorStop

#### Parameters

• **colorStops**: `Record`\<`string`, `string`\>

#### Returns

[`Gradient`](Gradient.md)\<`S`, `T`\>

thisArg

#### Source

src/gradient/Gradient.ts:134

***

### toLive()

> **toLive**(`ctx`): `CanvasGradient`

Returns an instance of CanvasGradient

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`CanvasGradient`

#### Source

src/gradient/Gradient.ts:298

***

### toObject()

> **toObject**(`propertiesToInclude`?): `Partial`\<[`Gradient`](Gradient.md)\<`S`, `T`\>\> & `Object`

Returns object representation of a gradient

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Partial`\<[`Gradient`](Gradient.md)\<`S`, `T`\>\> & `Object`

#### Source

src/gradient/Gradient.ts:151

***

### toSVG()

> **toSVG**(`object`, `__namedParameters`): `string`

Returns SVG representation of an gradient

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to create a gradient for

• **\_\_namedParameters**= `{}`

• **\_\_namedParameters\.additionalTransform?**: `string`

#### Returns

`string`

SVG representation of an gradient (linear/radial)

#### Source

src/gradient/Gradient.ts:172

***

### fromElement()

> **`static`** **fromElement**(`el`, `instance`, `svgOptions`): [`Gradient`](Gradient.md)\<[`GradientType`](../type-aliases/GradientType.md), [`GradientType`](../type-aliases/GradientType.md)\>

Returns [Gradient](../../../../api/classes/gradient) instance from an SVG element

#### Parameters

• **el**: `SVGGradientElement`

SVG gradient element

• **instance**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

• **svgOptions**: [`SVGOptions`](../type-aliases/SVGOptions.md)

an object containing the size of the SVG in order to parse correctly gradients
that uses gradientUnits as 'userSpaceOnUse' and percentages.

#### Returns

[`Gradient`](Gradient.md)\<[`GradientType`](../type-aliases/GradientType.md), [`GradientType`](../type-aliases/GradientType.md)\>

Gradient instance

#### Static

#### Member Of

Gradient

#### See

 - http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
 - http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement

#### Example

```ts
<linearGradient id="linearGrad1">
   <stop offset="0%" stop-color="white"/>
   <stop offset="100%" stop-color="black"/>
 </linearGradient>

 OR

 <linearGradient id="linearGrad2">
   <stop offset="0" style="stop-color:rgb(255,255,255)"/>
   <stop offset="1" style="stop-color:rgb(0,0,0)"/>
 </linearGradient>

 OR

 <radialGradient id="radialGrad1">
   <stop offset="0%" stop-color="white" stop-opacity="1" />
   <stop offset="50%" stop-color="black" stop-opacity="0.5" />
   <stop offset="100%" stop-color="white" stop-opacity="1" />
 </radialGradient>

 OR

 <radialGradient id="radialGrad2">
   <stop offset="0" stop-color="rgb(255,255,255)" />
   <stop offset="0.5" stop-color="rgb(0,0,0)" />
   <stop offset="1" stop-color="rgb(255,255,255)" />
 </radialGradient>
```

#### Source

src/gradient/Gradient.ts:381

***

### fromObject()

#### fromObject(options)

> **`static`** **fromObject**(`options`): `Promise`\<[`Gradient`](Gradient.md)\<`"radial"`, `"radial"`\>\>

##### Parameters

• **options**: [`GradientOptions`](../type-aliases/GradientOptions.md)\<`"linear"`\>

##### Returns

`Promise`\<[`Gradient`](Gradient.md)\<`"radial"`, `"radial"`\>\>

##### Source

src/gradient/Gradient.ts:324

#### fromObject(options)

> **`static`** **fromObject**(`options`): `Promise`\<[`Gradient`](Gradient.md)\<`"radial"`, `"radial"`\>\>

##### Parameters

• **options**: [`GradientOptions`](../type-aliases/GradientOptions.md)\<`"radial"`\>

##### Returns

`Promise`\<[`Gradient`](Gradient.md)\<`"radial"`, `"radial"`\>\>

##### Source

src/gradient/Gradient.ts:327
