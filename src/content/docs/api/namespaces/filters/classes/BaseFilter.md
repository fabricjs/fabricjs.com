---
editUrl: false
next: false
prev: false
title: "BaseFilter"
---

## Extended by

- [`BlendColor`](BlendColor.md)
- [`BlendImage`](BlendImage.md)
- [`Blur`](Blur.md)
- [`Brightness`](Brightness.md)
- [`ColorMatrix`](ColorMatrix.md)
- [`Composed`](Composed.md)
- [`Contrast`](Contrast.md)
- [`Convolute`](Convolute.md)
- [`Gamma`](Gamma.md)
- [`Grayscale`](Grayscale.md)
- [`Invert`](Invert.md)
- [`Noise`](Noise.md)
- [`Pixelate`](Pixelate.md)
- [`RemoveColor`](RemoveColor.md)
- [`Resize`](Resize.md)
- [`Saturation`](Saturation.md)
- [`Vibrance`](Vibrance.md)

## Constructors

### new BaseFilter(options)

> **new BaseFilter**(`options`?): [`BaseFilter`](BaseFilter.md)

Constructor

#### Parameters

• **options?**: `Record`\<`string`, `any`\>= `{}`

Options object

#### Returns

[`BaseFilter`](BaseFilter.md)

#### Source

src/filters/BaseFilter.ts:58

## Properties

### defaults

> **`static`** **defaults**: `Record`\<`string`, `any`\>

#### Source

src/filters/BaseFilter.ts:38

***

### type

> **`static`** **type**: `string` = `'BaseFilter'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Source

src/filters/BaseFilter.ts:36

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

#### Source

src/filters/BaseFilter.ts:190

***

### \_swapTextures()

> **\_swapTextures**(`options`): `void`

#### Parameters

• **options**: [`TWebGLPipelineState`](../../../type-aliases/TWebGLPipelineState.md)

#### Returns

`void`

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

#### Source

src/filters/BaseFilter.ts:265

***

### applyTo2d()

> **applyTo2d**(`options`): `void`

#### Parameters

• **options**: [`T2DPipelineState`](../../../type-aliases/T2DPipelineState.md)

#### Returns

`void`

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

#### Source

src/filters/BaseFilter.ts:146

***

### getCacheKey()

> **getCacheKey**(): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Source

src/filters/BaseFilter.ts:284

***

### getMainParameter()

> **getMainParameter**(): `undefined` \| `string` \| (`options`) => `void` \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md) \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](../../../type-aliases/TWebGLAttributeLocationMap.md) \| (`gl`, `uniformLocations`) => `void` \| (`options`) => `void` \| (`options`) => [`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md) \| () => `Object` \| (`options`?) => `boolean` \| (`gl`, `fragmentSource`, `vertexSource`) => `Object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| () => `string` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| ((options: TWebGLPipelineState \| T2DPipelineState) =\> void) \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLUniformLocationMap) \| ... 18 more ... \| undefined \| () => `Object` \| (`value`) => `void` \| (`options`) => `void`

#### Returns

`undefined` \| `string` \| (`options`) => `void` \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md) \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](../../../type-aliases/TWebGLAttributeLocationMap.md) \| (`gl`, `uniformLocations`) => `void` \| (`options`) => `void` \| (`options`) => [`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md) \| () => `Object` \| (`options`?) => `boolean` \| (`gl`, `fragmentSource`, `vertexSource`) => `Object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| () => `string` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| ((options: TWebGLPipelineState \| T2DPipelineState) =\> void) \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLUniformLocationMap) \| ... 18 more ... \| undefined \| () => `Object` \| (`value`) => `void` \| (`options`) => `void`

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

#### Source

src/filters/BaseFilter.ts:164

***

### isNeutralState()

> **isNeutralState**(`options`?): `boolean`

Generic isNeutral implementation for one parameter based filters.
Used only in image applyFilters to discard filters that will not have an effect
on the image
Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )

#### Parameters

• **options?**: `any`

#### Returns

`boolean`

#### Source

src/filters/BaseFilter.ts:233

***

### retrieveShader()

> **retrieveShader**(`options`): [`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md)

Retrieves the cached shader.

#### Parameters

• **options**: [`TWebGLPipelineState`](../../../type-aliases/TWebGLPipelineState.md)

#### Returns

[`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md)

the compiled program shader

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

#### Source

src/filters/BaseFilter.ts:369

***

### setMainParameter()

> **setMainParameter**(`value`): `void`

#### Parameters

• **value**: `any`

#### Returns

`void`

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

#### Source

src/filters/BaseFilter.ts:410
