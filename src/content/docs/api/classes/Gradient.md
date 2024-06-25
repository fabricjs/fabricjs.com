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

## Type Parameters

• **S**

• **T** *extends* [`GradientType`](/api/type-aliases/gradienttype/) = `S` *extends* [`GradientType`](/api/type-aliases/gradienttype/) ? `S` : `"linear"`

## Constructors

### new Gradient()

> **new Gradient**\<`S`, `T`\>(`__namedParameters`): [`Gradient`](/api/classes/gradient/)\<`S`, `T`\>

#### Parameters

• **\_\_namedParameters**: [`GradientOptions`](/api/type-aliases/gradientoptions/)\<`T`\>

#### Returns

[`Gradient`](/api/classes/gradient/)\<`S`, `T`\>

#### Defined in

[src/gradient/Gradient.ts:102](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L102)

## Properties

### colorStops

> **colorStops**: [`ColorStop`](/api/type-aliases/colorstop/)[]

Defines how many colors a gradient has and how they are located on the axis
defined by coords

#### Defined in

[src/gradient/Gradient.ts:86](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L86)

***

### coords

> **coords**: [`GradientCoords`](/api/type-aliases/gradientcoords/)\<`T`\>

Defines how the gradient is located in space and spread

#### Defined in

[src/gradient/Gradient.ts:79](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L79)

***

### excludeFromExport?

> `optional` **excludeFromExport**: `boolean`

If true, this object will not be exported during the serialization of a canvas

#### Defined in

[src/gradient/Gradient.ts:92](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L92)

***

### gradientTransform?

> `optional` **gradientTransform**: [`TMat2D`](/api/type-aliases/tmat2d/)

A transform matrix to apply to the gradient before painting.
Imported from svg gradients, is not applied with the current transform in the center.
Before this transform is applied, the origin point is at the top left corner of the object
plus the addition of offsetY and offsetX.

#### Default

```ts
null
```

#### Defined in

[src/gradient/Gradient.ts:55](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L55)

***

### gradientUnits

> **gradientUnits**: [`GradientUnits`](/api/type-aliases/gradientunits/)

coordinates units for coords.
If `pixels`, the number of coords are in the same unit of width / height.
If set as `percentage` the coords are still a number, but 1 means 100% of width
for the X and 100% of the height for the y. It can be bigger than 1 and negative.
allowed values pixels or percentage.

#### Default

```ts
'pixels'
```

#### Defined in

[src/gradient/Gradient.ts:66](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L66)

***

### id

> `readonly` **id**: `string` \| `number`

ID used for SVG export functionalities

#### Defined in

[src/gradient/Gradient.ts:98](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L98)

***

### offsetX

> **offsetX**: `number`

Horizontal offset for aligning gradients coming from SVG when outside pathgroups

#### Default

```ts
0
```

#### Defined in

[src/gradient/Gradient.ts:38](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L38)

***

### offsetY

> **offsetY**: `number`

Vertical offset for aligning gradients coming from SVG when outside pathgroups

#### Default

```ts
0
```

#### Defined in

[src/gradient/Gradient.ts:45](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L45)

***

### type

> **type**: `T`

Gradient type linear or radial

#### Default

```ts
'linear'
```

#### Defined in

[src/gradient/Gradient.ts:73](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L73)

***

### type

> `static` **type**: `string` = `'Gradient'`

#### Defined in

[src/gradient/Gradient.ts:100](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L100)

## Methods

### addColorStop()

> **addColorStop**(`colorStops`): [`Gradient`](/api/classes/gradient/)\<`S`, `T`\>

Adds another colorStop

#### Parameters

• **colorStops**: `Record`\<`string`, `string`\>

#### Returns

[`Gradient`](/api/classes/gradient/)\<`S`, `T`\>

thisArg

#### Defined in

[src/gradient/Gradient.ts:134](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L134)

***

### toLive()

> **toLive**(`ctx`): `CanvasGradient`

Returns an instance of CanvasGradient

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`CanvasGradient`

#### Defined in

[src/gradient/Gradient.ts:298](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L298)

***

### toObject()

> **toObject**(`propertiesToInclude`?): `Partial`\<[`Gradient`](/api/classes/gradient/)\<`S`, `T`\>\> & `object`

Returns object representation of a gradient

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Partial`\<[`Gradient`](/api/classes/gradient/)\<`S`, `T`\>\> & `object`

#### Defined in

[src/gradient/Gradient.ts:151](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L151)

***

### toSVG()

> **toSVG**(`object`, `__namedParameters`): `string`

Returns SVG representation of an gradient

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to create a gradient for

• **\_\_namedParameters** = `{}`

• **\_\_namedParameters.additionalTransform?**: `string`

#### Returns

`string`

SVG representation of an gradient (linear/radial)

#### Defined in

[src/gradient/Gradient.ts:172](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L172)

***

### fromElement()

> `static` **fromElement**(`el`, `instance`, `svgOptions`): [`Gradient`](/api/classes/gradient/)\<[`GradientType`](/api/type-aliases/gradienttype/), [`GradientType`](/api/type-aliases/gradienttype/)\>

Returns [Gradient](../../../../api/classes/gradient) instance from an SVG element

#### Parameters

• **el**: `SVGGradientElement`

SVG gradient element

• **instance**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **svgOptions**: [`SVGOptions`](/api/type-aliases/svgoptions/)

an object containing the size of the SVG in order to parse correctly gradients
that uses gradientUnits as 'userSpaceOnUse' and percentages.

#### Returns

[`Gradient`](/api/classes/gradient/)\<[`GradientType`](/api/type-aliases/gradienttype/), [`GradientType`](/api/type-aliases/gradienttype/)\>

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

#### Defined in

[src/gradient/Gradient.ts:381](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L381)

***

### fromObject()

#### fromObject(options)

> `static` **fromObject**(`options`): `Promise`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\>

##### Parameters

• **options**: [`GradientOptions`](/api/type-aliases/gradientoptions/)\<`"linear"`\>

##### Returns

`Promise`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\>

##### Defined in

[src/gradient/Gradient.ts:324](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L324)

#### fromObject(options)

> `static` **fromObject**(`options`): `Promise`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\>

##### Parameters

• **options**: [`GradientOptions`](/api/type-aliases/gradientoptions/)\<`"radial"`\>

##### Returns

`Promise`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\>

##### Defined in

[src/gradient/Gradient.ts:327](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/gradient/Gradient.ts#L327)
