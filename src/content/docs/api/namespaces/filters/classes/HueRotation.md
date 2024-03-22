---
editUrl: false
next: false
prev: false
title: "HueRotation"
---

HueRotation filter class

## Example

```ts
const filter = new HueRotation({
  rotation: -0.5
});
object.filters.push(filter);
object.applyFilters();
```

## Extends

- [`ColorMatrix`](ColorMatrix.md)

## Constructors

### new HueRotation(options)

> **new HueRotation**(`options`?): [`HueRotation`](HueRotation.md)

Constructor

#### Parameters

• **options?**: `Record`\<`string`, `any`\>= `{}`

Options object

#### Returns

[`HueRotation`](HueRotation.md)

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`constructor`](ColorMatrix.md#constructors)

#### Source

src/filters/BaseFilter.ts:58

## Properties

### colorsOnly

> **colorsOnly**: `boolean`

Lock the colormatrix on the color part, skipping alpha, mainly for non webgl scenario
to save some calculation

#### Default

```ts
true
```

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`colorsOnly`](ColorMatrix.md#colorsonly)

#### Source

src/filters/ColorMatrix.ts:46

***

### matrix

> **matrix**: `number`[]

Colormatrix for pixels.
array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
outside the -1, 1 range.
0.0039215686 is the part of 1 that get translated to 1 in 2d

#### Param

array of 20 numbers.

#### Default

```ts

```

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`matrix`](ColorMatrix.md#matrix)

#### Source

src/filters/ColorMatrix.ts:38

***

### rotation

> **rotation**: `number`

HueRotation value, from -1 to 1.

#### Source

src/filters/HueRotation.ts:28

***

### defaults

> **`static`** **defaults**: `Partial`\<[`TClassProperties`](../../../type-aliases/TClassProperties.md)\<[`HueRotation`](HueRotation.md)\>\> = `hueRotationDefaultValues`

#### Overrides

[`ColorMatrix`](ColorMatrix.md).[`defaults`](ColorMatrix.md#defaults)

#### Source

src/filters/HueRotation.ts:32

***

### type

> **`static`** **type**: `string` = `'HueRotation'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`ColorMatrix`](ColorMatrix.md).[`type`](ColorMatrix.md#type)

#### Source

src/filters/HueRotation.ts:30

## Accessors

### type

> **`get`** **type**(): `string`

Filter type

#### Default

```ts

```

#### Returns

`string`

#### Source

src/filters/BaseFilter.ts:25

## Methods

### \_setupFrameBuffer()

> **\_setupFrameBuffer**(`options`): `void`

#### Parameters

• **options**: [`TWebGLPipelineState`](../../../type-aliases/TWebGLPipelineState.md)

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`_setupFrameBuffer`](ColorMatrix.md#_setupframebuffer)

#### Source

src/filters/BaseFilter.ts:190

***

### \_swapTextures()

> **\_swapTextures**(`options`): `void`

#### Parameters

• **options**: [`TWebGLPipelineState`](../../../type-aliases/TWebGLPipelineState.md)

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`_swapTextures`](ColorMatrix.md#_swaptextures)

#### Source

src/filters/BaseFilter.ts:217

***

### applyTo()

> **applyTo**(`options`): `void`

Apply this filter to the input image data provided.

Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

• **options**: [`TWebGLPipelineState`](../../../type-aliases/TWebGLPipelineState.md) \| [`T2DPipelineState`](../../../type-aliases/T2DPipelineState.md)

#### Returns

`void`

#### Overrides

[`ColorMatrix`](ColorMatrix.md).[`applyTo`](ColorMatrix.md#applyto)

#### Source

src/filters/HueRotation.ts:58

***

### applyTo2d()

> **applyTo2d**(`options`): `void`

Apply the ColorMatrix operation to a Uint8Array representing the pixels of an image.

#### Parameters

• **options**: [`T2DPipelineState`](../../../type-aliases/T2DPipelineState.md)

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`applyTo2d`](ColorMatrix.md#applyto2d)

#### Source

src/filters/ColorMatrix.ts:70

***

### applyToWebGL()

> **applyToWebGL**(`options`): `void`

Apply this filter using webgl.

#### Parameters

• **options**: [`TWebGLPipelineState`](../../../type-aliases/TWebGLPipelineState.md)

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`applyToWebGL`](ColorMatrix.md#applytowebgl)

#### Source

src/filters/BaseFilter.ts:315

***

### bindAdditionalTexture()

> **bindAdditionalTexture**(`gl`, `texture`, `textureUnit`): `void`

#### Parameters

• **gl**: `WebGLRenderingContext`

• **texture**: `WebGLTexture`

• **textureUnit**: `number`

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`bindAdditionalTexture`](ColorMatrix.md#bindadditionaltexture)

#### Source

src/filters/BaseFilter.ts:334

***

### calculateMatrix()

> **calculateMatrix**(): `void`

#### Returns

`void`

#### Source

src/filters/HueRotation.ts:34

***

### createHelpLayer()

> **createHelpLayer**(`options`): `void`

If needed by a 2d filter, this functions can create an helper canvas to be used
remember that options.targetCanvas is available for use till end of chain.

#### Parameters

• **options**: [`T2DPipelineState`](../../../type-aliases/T2DPipelineState.md)

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`createHelpLayer`](ColorMatrix.md#createhelplayer)

#### Source

src/filters/BaseFilter.ts:380

***

### createProgram()

> **createProgram**(`gl`, `fragmentSource`, `vertexSource`): `Object`

Compile this filter's shader program.

#### Parameters

• **gl**: `WebGLRenderingContext`

The GL canvas context to use for shader compilation.

• **fragmentSource**: `string`= `undefined`

fragmentShader source for compilation

• **vertexSource**: `string`= `undefined`

vertexShader source for compilation

#### Returns

`Object`

##### attributeLocations

> **attributeLocations**: [`TWebGLAttributeLocationMap`](../../../type-aliases/TWebGLAttributeLocationMap.md)

##### program

> **program**: `WebGLProgram`

##### uniformLocations

> **uniformLocations**: [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md)

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`createProgram`](ColorMatrix.md#createprogram)

#### Source

src/filters/BaseFilter.ts:77

***

### getAttributeLocations()

> **getAttributeLocations**(`gl`, `program`): [`TWebGLAttributeLocationMap`](../../../type-aliases/TWebGLAttributeLocationMap.md)

Return a map of attribute names to WebGLAttributeLocation objects.

#### Parameters

• **gl**: `WebGLRenderingContext`

The canvas context used to compile the shader program.

• **program**: `WebGLProgram`

The shader program from which to take attribute locations.

#### Returns

[`TWebGLAttributeLocationMap`](../../../type-aliases/TWebGLAttributeLocationMap.md)

A map of attribute names to attribute locations.

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`getAttributeLocations`](ColorMatrix.md#getattributelocations)

#### Source

src/filters/BaseFilter.ts:146

***

### getCacheKey()

> **getCacheKey**(): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`getCacheKey`](ColorMatrix.md#getcachekey)

#### Source

src/filters/BaseFilter.ts:284

***

### getFragmentSource()

> **getFragmentSource**(): `string`

#### Returns

`string`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`getFragmentSource`](ColorMatrix.md#getfragmentsource)

#### Source

src/filters/ColorMatrix.ts:60

***

### getMainParameter()

> **getMainParameter**(): `undefined` \| `string` \| `number` \| `boolean` \| `number`[] \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](../../../type-aliases/TWebGLAttributeLocationMap.md) \| (`options`) => [`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md) \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md) \| () => `string` \| () => `Object` \| () => `Object` \| (`__namedParameters`) => `void` \| (`gl`, `uniformLocations`) => `void` \| () => `string` \| (`options`) => `void` \| () => `boolean` \| (`options`) => `void` \| (`gl`, `fragmentSource`, `vertexSource`) => `Object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| number \| boolean \| number[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 22 more ... \| undefined \| (`value`) => `void` \| (`options`) => `void` \| () => `void`

#### Returns

`undefined` \| `string` \| `number` \| `boolean` \| `number`[] \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](../../../type-aliases/TWebGLAttributeLocationMap.md) \| (`options`) => [`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md) \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md) \| () => `string` \| () => `Object` \| () => `Object` \| (`__namedParameters`) => `void` \| (`gl`, `uniformLocations`) => `void` \| () => `string` \| (`options`) => `void` \| () => `boolean` \| (`options`) => `void` \| (`gl`, `fragmentSource`, `vertexSource`) => `Object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| number \| boolean \| number[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 22 more ... \| undefined \| (`value`) => `void` \| (`options`) => `void` \| () => `void`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`getMainParameter`](ColorMatrix.md#getmainparameter)

#### Source

src/filters/BaseFilter.ts:351

***

### getUniformLocations()

> **getUniformLocations**(`gl`, `program`): [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md)

Return WebGL uniform locations for this filter's shader.

#### Parameters

• **gl**: `WebGLRenderingContext`

The GL canvas context used to compile this filter's shader.

• **program**: `WebGLProgram`

This filter's compiled shader program.

#### Returns

[`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md)

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`getUniformLocations`](ColorMatrix.md#getuniformlocations)

#### Source

src/filters/ColorMatrix.ts:102

***

### isNeutralState()

> **isNeutralState**(): `boolean`

Generic isNeutral implementation for one parameter based filters.
Used only in image applyFilters to discard filters that will not have an effect
on the image
Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )

#### Returns

`boolean`

#### Overrides

[`ColorMatrix`](ColorMatrix.md).[`isNeutralState`](ColorMatrix.md#isneutralstate)

#### Source

src/filters/HueRotation.ts:53

***

### retrieveShader()

> **retrieveShader**(`options`): [`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md)

Retrieves the cached shader.

#### Parameters

• **options**: [`TWebGLPipelineState`](../../../type-aliases/TWebGLPipelineState.md)

#### Returns

[`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md)

the compiled program shader

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`retrieveShader`](ColorMatrix.md#retrieveshader)

#### Source

src/filters/BaseFilter.ts:295

***

### sendAttributeData()

> **sendAttributeData**(`gl`, `attributeLocations`, `aPositionData`): `void`

Send attribute data from this filter to its shader program on the GPU.

#### Parameters

• **gl**: `WebGLRenderingContext`

The canvas context used to compile the shader program.

• **attributeLocations**: `Record`\<`string`, `number`\>

A map of shader attribute names to their locations.

• **aPositionData**: `Float32Array`

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`sendAttributeData`](ColorMatrix.md#sendattributedata)

#### Source

src/filters/BaseFilter.ts:177

***

### sendUniformData()

> **sendUniformData**(`gl`, `uniformLocations`): `void`

Send data from this filter to its shader program's uniforms.

#### Parameters

• **gl**: `WebGLRenderingContext`

The GL canvas context used to compile this filter's shader.

• **uniformLocations**: [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md)

A map of string uniform names to WebGLUniformLocation objects

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`sendUniformData`](ColorMatrix.md#senduniformdata)

#### Source

src/filters/ColorMatrix.ts:118

***

### setMainParameter()

> **setMainParameter**(`value`): `void`

#### Parameters

• **value**: `any`

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`setMainParameter`](ColorMatrix.md#setmainparameter)

#### Source

src/filters/BaseFilter.ts:355

***

### setOptions()

> **setOptions**(`__namedParameters`): `void`

#### Parameters

• **\_\_namedParameters**: `Record`\<`string`, `any`\>

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`setOptions`](ColorMatrix.md#setoptions)

#### Source

src/filters/ColorMatrix.ts:52

***

### toJSON()

> **toJSON**(): `Object`

Returns a JSON representation of an instance

#### Returns

`Object`

JSON

##### type

> **type**: `string`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`toJSON`](ColorMatrix.md#tojson)

#### Source

src/filters/BaseFilter.ts:405

***

### toObject()

> **toObject**(): `Object`

Returns object representation of an instance

#### Returns

`Object`

Object representation of an instance

##### type

> **type**: `string`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`toObject`](ColorMatrix.md#toobject)

#### Source

src/filters/BaseFilter.ts:393

***

### unbindAdditionalTexture()

> **unbindAdditionalTexture**(`gl`, `textureUnit`): `void`

#### Parameters

• **gl**: `WebGLRenderingContext`

• **textureUnit**: `number`

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`unbindAdditionalTexture`](ColorMatrix.md#unbindadditionaltexture)

#### Source

src/filters/BaseFilter.ts:345

***

### fromObject()

> **`static`** **fromObject**(`__namedParameters`, `options`): `Promise`\<[`BaseFilter`](BaseFilter.md)\>

#### Parameters

• **\_\_namedParameters**: `Record`\<`string`, `any`\>

• **options**: [`Abortable`](../../../type-aliases/Abortable.md)

#### Returns

`Promise`\<[`BaseFilter`](BaseFilter.md)\>

#### Inherited from

[`ColorMatrix`](ColorMatrix.md).[`fromObject`](ColorMatrix.md#fromobject)

#### Source

src/filters/BaseFilter.ts:410
