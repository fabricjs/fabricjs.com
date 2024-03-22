---
editUrl: false
next: false
prev: false
title: "Grayscale"
---

Grayscale image filter class

## Example

```ts
const filter = new Grayscale();
object.filters.push(filter);
object.applyFilters();
```

## Extends

- [`BaseFilter`](BaseFilter.md)

## Constructors

### new Grayscale(options)

> **new Grayscale**(`options`?): [`Grayscale`](Grayscale.md)

Constructor

#### Parameters

• **options?**: `Record`\<`string`, `any`\>= `{}`

Options object

#### Returns

[`Grayscale`](Grayscale.md)

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`constructor`](BaseFilter.md#constructors)

#### Source

src/filters/BaseFilter.ts:58

## Properties

### mode

> **mode**: `TGrayscaleMode`

#### Source

src/filters/Grayscale.ts:22

***

### defaults

> **`static`** **defaults**: `Partial`\<[`TClassProperties`](../../../type-aliases/TClassProperties.md)\<[`Grayscale`](Grayscale.md)\>\> = `grayscaleDefaultValues`

#### Overrides

[`BaseFilter`](BaseFilter.md).[`defaults`](BaseFilter.md#defaults)

#### Source

src/filters/Grayscale.ts:26

***

### type

> **`static`** **type**: `string` = `'Grayscale'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`BaseFilter`](BaseFilter.md).[`type`](BaseFilter.md#type)

#### Source

src/filters/Grayscale.ts:24

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

Apply this filter to the input image data provided.

Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

• **options**: [`TWebGLPipelineState`](../../../type-aliases/TWebGLPipelineState.md) \| [`T2DPipelineState`](../../../type-aliases/T2DPipelineState.md)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`applyTo`](BaseFilter.md#applyto)

#### Source

src/filters/BaseFilter.ts:265

***

### applyTo2d()

> **applyTo2d**(`options`): `void`

Apply the Grayscale operation to a Uint8Array representing the pixels of an image.

#### Parameters

• **options**: [`T2DPipelineState`](../../../type-aliases/T2DPipelineState.md)

#### Returns

`void`

#### Overrides

[`BaseFilter`](BaseFilter.md).[`applyTo2d`](BaseFilter.md#applyto2d)

#### Source

src/filters/Grayscale.ts:34

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

#### Overrides

[`BaseFilter`](BaseFilter.md).[`getCacheKey`](BaseFilter.md#getcachekey)

#### Source

src/filters/Grayscale.ts:57

***

### getFragmentSource()

> **getFragmentSource**(): `string`

#### Returns

`string`

#### Overrides

`BaseFilter.getFragmentSource`

#### Source

src/filters/Grayscale.ts:61

***

### getMainParameter()

> **getMainParameter**(): `undefined` \| `string` \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](../../../type-aliases/TWebGLAttributeLocationMap.md) \| (`options`) => [`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md) \| () => `Object` \| () => `Object` \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md) \| (`gl`, `uniformLocations`) => `void` \| () => `string` \| () => `string` \| (`options`) => `void` \| () => `boolean` \| (`options`) => `void` \| (`gl`, `fragmentSource`, `vertexSource`) => `Object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ((options: TWebGLPipelineState) =\> TWebGLProgramCacheItem) \| ... 19 more ... \| undefined \| (`value`) => `void` \| (`options`) => `void`

#### Returns

`undefined` \| `string` \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](../../../type-aliases/TWebGLAttributeLocationMap.md) \| (`options`) => [`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md) \| () => `Object` \| () => `Object` \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md) \| (`gl`, `uniformLocations`) => `void` \| () => `string` \| () => `string` \| (`options`) => `void` \| () => `boolean` \| (`options`) => `void` \| (`gl`, `fragmentSource`, `vertexSource`) => `Object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ((options: TWebGLPipelineState) =\> TWebGLProgramCacheItem) \| ... 19 more ... \| undefined \| (`value`) => `void` \| (`options`) => `void`

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`getMainParameter`](BaseFilter.md#getmainparameter)

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

#### Overrides

[`BaseFilter`](BaseFilter.md).[`getUniformLocations`](BaseFilter.md#getuniformlocations)

#### Source

src/filters/Grayscale.ts:71

***

### isNeutralState()

> **isNeutralState**(): `boolean`

Grayscale filter isNeutralState implementation
The filter is never neutral
on the image

#### Returns

`boolean`

#### Overrides

[`BaseFilter`](BaseFilter.md).[`isNeutralState`](BaseFilter.md#isneutralstate)

#### Source

src/filters/Grayscale.ts:99

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

Send data from this filter to its shader program's uniforms.

#### Parameters

• **gl**: `WebGLRenderingContext`

The GL canvas context used to compile this filter's shader.

• **uniformLocations**: [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md)

A map of string uniform names to WebGLUniformLocation objects

#### Returns

`void`

#### Overrides

[`BaseFilter`](BaseFilter.md).[`sendUniformData`](BaseFilter.md#senduniformdata)

#### Source

src/filters/Grayscale.ts:86

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

Returns object representation of an instance

#### Returns

`Object`

Object representation of an instance

##### type

> **type**: `string`

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`toObject`](BaseFilter.md#toobject)

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

[`BaseFilter`](BaseFilter.md).[`unbindAdditionalTexture`](BaseFilter.md#unbindadditionaltexture)

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

[`BaseFilter`](BaseFilter.md).[`fromObject`](BaseFilter.md#fromobject)

#### Source

src/filters/BaseFilter.ts:410
