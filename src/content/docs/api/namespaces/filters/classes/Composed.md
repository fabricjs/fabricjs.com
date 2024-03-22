---
editUrl: false
next: false
prev: false
title: "Composed"
---

A container class that knows how to apply a sequence of filters to an input image.

## Extends

- [`BaseFilter`](BaseFilter.md)

## Constructors

### new Composed(__namedParameters)

> **new Composed**(`__namedParameters`): [`Composed`](Composed.md)

#### Parameters

• **\_\_namedParameters**: `Object` & `Record`\<`string`, `any`\>= `{}`

#### Returns

[`Composed`](Composed.md)

#### Overrides

[`BaseFilter`](BaseFilter.md).[`constructor`](BaseFilter.md#constructors)

#### Source

src/filters/Composed.ts:17

## Properties

### subFilters

> **subFilters**: [`BaseFilter`](BaseFilter.md)[]

A non sparse array of filters to apply

#### Source

src/filters/Composed.ts:13

***

### defaults

> **`static`** **defaults**: `Record`\<`string`, `any`\>

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`defaults`](BaseFilter.md#defaults)

#### Source

src/filters/BaseFilter.ts:38

***

### type

> **`static`** **type**: `string` = `'Composed'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`BaseFilter`](BaseFilter.md).[`type`](BaseFilter.md#type)

#### Source

src/filters/Composed.ts:15

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

[`BaseFilter`](BaseFilter.md).[`_setupFrameBuffer`](BaseFilter.md#_setupframebuffer)

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

[`BaseFilter`](BaseFilter.md).[`_swapTextures`](BaseFilter.md#_swaptextures)

#### Source

src/filters/BaseFilter.ts:217

***

### applyTo()

> **applyTo**(`options`): `void`

Apply this container's filters to the input image provided.

#### Parameters

• **options**: [`TWebGLPipelineState`](../../../type-aliases/TWebGLPipelineState.md) \| [`T2DPipelineState`](../../../type-aliases/T2DPipelineState.md)

#### Returns

`void`

#### Overrides

[`BaseFilter`](BaseFilter.md).[`applyTo`](BaseFilter.md#applyto)

#### Source

src/filters/Composed.ts:31

***

### applyTo2d()

> **applyTo2d**(`options`): `void`

#### Parameters

• **options**: [`T2DPipelineState`](../../../type-aliases/T2DPipelineState.md)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`applyTo2d`](BaseFilter.md#applyto2d)

#### Source

src/filters/BaseFilter.ts:275

***

### applyToWebGL()

> **applyToWebGL**(`options`): `void`

Apply this filter using webgl.

#### Parameters

• **options**: [`TWebGLPipelineState`](../../../type-aliases/TWebGLPipelineState.md)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`applyToWebGL`](BaseFilter.md#applytowebgl)

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

[`BaseFilter`](BaseFilter.md).[`bindAdditionalTexture`](BaseFilter.md#bindadditionaltexture)

#### Source

src/filters/BaseFilter.ts:334

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

[`BaseFilter`](BaseFilter.md).[`createHelpLayer`](BaseFilter.md#createhelplayer)

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

[`BaseFilter`](BaseFilter.md).[`createProgram`](BaseFilter.md#createprogram)

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

[`BaseFilter`](BaseFilter.md).[`getAttributeLocations`](BaseFilter.md#getattributelocations)

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

[`BaseFilter`](BaseFilter.md).[`getCacheKey`](BaseFilter.md#getcachekey)

#### Source

src/filters/BaseFilter.ts:284

***

### getMainParameter()

> **getMainParameter**(): `undefined` \| `string` \| [`BaseFilter`](BaseFilter.md)[] \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md) \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](../../../type-aliases/TWebGLAttributeLocationMap.md) \| (`gl`, `uniformLocations`) => `void` \| (`options`) => `void` \| (`options`) => [`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md) \| (`gl`, `fragmentSource`, `vertexSource`) => `Object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| () => `boolean` \| (`options`) => `void` \| () => `string` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| BaseFilter[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLUniformLocationMap) \| ... 19 more ... \| undefined \| () => `Object` \| () => `Object` \| (`value`) => `void` \| (`options`) => `void`

#### Returns

`undefined` \| `string` \| [`BaseFilter`](BaseFilter.md)[] \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md) \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](../../../type-aliases/TWebGLAttributeLocationMap.md) \| (`gl`, `uniformLocations`) => `void` \| (`options`) => `void` \| (`options`) => [`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md) \| (`gl`, `fragmentSource`, `vertexSource`) => `Object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| () => `boolean` \| (`options`) => `void` \| () => `string` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| BaseFilter[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLUniformLocationMap) \| ... 19 more ... \| undefined \| () => `Object` \| () => `Object` \| (`value`) => `void` \| (`options`) => `void`

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`getMainParameter`](BaseFilter.md#getmainparameter)

#### Source

src/filters/BaseFilter.ts:351

***

### getUniformLocations()

> **getUniformLocations**(`gl`, `program`): [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md)

Return a map of uniform names to WebGLUniformLocation objects.

Intended to be overridden by subclasses.

#### Parameters

• **gl**: `WebGLRenderingContext`

The canvas context used to compile the shader program.

• **program**: `WebGLProgram`

The shader program from which to take uniform locations.

#### Returns

[`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md)

A map of uniform names to uniform locations.

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`getUniformLocations`](BaseFilter.md#getuniformlocations)

#### Source

src/filters/BaseFilter.ts:164

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

[`BaseFilter`](BaseFilter.md).[`isNeutralState`](BaseFilter.md#isneutralstate)

#### Source

src/filters/Composed.ts:52

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

[`BaseFilter`](BaseFilter.md).[`retrieveShader`](BaseFilter.md#retrieveshader)

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

[`BaseFilter`](BaseFilter.md).[`sendAttributeData`](BaseFilter.md#sendattributedata)

#### Source

src/filters/BaseFilter.ts:177

***

### sendUniformData()

> **sendUniformData**(`gl`, `uniformLocations`): `void`

Send uniform data from this filter to its shader program on the GPU.

Intended to be overridden by subclasses.

#### Parameters

• **gl**: `WebGLRenderingContext`

The canvas context used to compile the shader program.

• **uniformLocations**: [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md)

A map of shader uniform names to their locations.

#### Returns

`void`

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`sendUniformData`](BaseFilter.md#senduniformdata)

#### Source

src/filters/BaseFilter.ts:369

***

### setMainParameter()

> **setMainParameter**(`value`): `void`

#### Parameters

• **value**: `any`

#### Returns

`void`

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`setMainParameter`](BaseFilter.md#setmainparameter)

#### Source

src/filters/BaseFilter.ts:355

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

[`BaseFilter`](BaseFilter.md).[`toJSON`](BaseFilter.md#tojson)

#### Source

src/filters/BaseFilter.ts:405

***

### toObject()

> **toObject**(): `Object`

Serialize this filter into JSON.

#### Returns

`Object`

A JSON representation of this filter.

##### subFilters

> **subFilters**: `Object`[]

##### type

> **type**: `string`

#### Overrides

[`BaseFilter`](BaseFilter.md).[`toObject`](BaseFilter.md#toobject)

#### Source

src/filters/Composed.ts:45

***

### unbindAdditionalTexture()

> **unbindAdditionalTexture**(`gl`, `textureUnit`): `void`

#### Parameters

• **gl**: `WebGLRenderingContext`

• **textureUnit**: `number`

#### Returns

`void`

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`unbindAdditionalTexture`](BaseFilter.md#unbindadditionaltexture)

#### Source

src/filters/BaseFilter.ts:345

***

### fromObject()

> **`static`** **fromObject**(`object`, `options`?): `Promise`\<[`BaseFilter`](BaseFilter.md)\>

Deserialize a JSON definition of a ComposedFilter into a concrete instance.

#### Parameters

• **object**: `Record`\<`string`, `any`\>

Object to create an instance from

• **options?**

• **options\.signal?**: `AbortSignal`

handle aborting `BlendImage` filter loading, see https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal

#### Returns

`Promise`\<[`BaseFilter`](BaseFilter.md)\>

#### Overrides

[`BaseFilter`](BaseFilter.md).[`fromObject`](BaseFilter.md#fromobject)

#### Static

#### Source

src/filters/Composed.ts:64
