---
editUrl: false
next: false
prev: false
title: "Noise"
---

Noise filter class

## Example

```ts
const filter = new Noise({
  noise: 700
});
object.filters.push(filter);
object.applyFilters();
canvas.renderAll();
```

## Extends

- [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`"Noise"`, `NoiseOwnProps`\>

## Constructors

### new Noise()

> **new Noise**(`options`?): [`Noise`](/api/namespaces/filters/classes/noise/)

Constructor

#### Parameters

• **options?**: `object` & `Partial`\<`NoiseOwnProps`\> & `Record`\<`string`, `any`\> = `{}`

Options object

#### Returns

[`Noise`](/api/namespaces/filters/classes/noise/)

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`constructor`](/api/namespaces/filters/classes/basefilter/#constructors)

#### Defined in

[src/filters/BaseFilter.ts:56](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L56)

## Properties

### noise

> **noise**: `number`

Noise value, from

#### Param

#### Default

```ts

```

#### Defined in

[src/filters/Noise.ts:30](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/Noise.ts#L30)

***

### defaults

> `static` **defaults**: `NoiseOwnProps` = `noiseDefaultValues`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`defaults`](/api/namespaces/filters/classes/basefilter/#defaults)

#### Defined in

[src/filters/Noise.ts:34](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/Noise.ts#L34)

***

### type

> `static` **type**: `string` = `'Noise'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`type`](/api/namespaces/filters/classes/basefilter/#type)

#### Defined in

[src/filters/Noise.ts:32](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/Noise.ts#L32)

***

### uniformLocations

> `static` **uniformLocations**: `string`[]

Contains the uniform locations for the fragment shader.
uStepW and uStepH are handled by the BaseFilter, each filter class
needs to specify all the one that are needed

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`uniformLocations`](/api/namespaces/filters/classes/basefilter/#uniformlocations)

#### Defined in

[src/filters/Noise.ts:36](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/Noise.ts#L36)

## Accessors

### type

> `get` **type**(): `Name`

Filter type

#### Default

```ts

```

#### Returns

`Name`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`type`](/api/namespaces/filters/classes/basefilter/#type-1)

#### Defined in

[src/filters/BaseFilter.ts:30](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L30)

## Methods

### \_setupFrameBuffer()

> **\_setupFrameBuffer**(`options`): `void`

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`_setupFrameBuffer`](/api/namespaces/filters/classes/basefilter/#_setupframebuffer)

#### Defined in

[src/filters/BaseFilter.ts:204](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L204)

***

### \_swapTextures()

> **\_swapTextures**(`options`): `void`

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`_swapTextures`](/api/namespaces/filters/classes/basefilter/#_swaptextures)

#### Defined in

[src/filters/BaseFilter.ts:231](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L231)

***

### applyTo()

> **applyTo**(`options`): `void`

Apply this filter to the input image data provided.

Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/) \| [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`applyTo`](/api/namespaces/filters/classes/basefilter/#applyto)

#### Defined in

[src/filters/BaseFilter.ts:264](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L264)

***

### applyTo2d()

> **applyTo2d**(`options`): `void`

Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.

#### Parameters

• **options**: [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`applyTo2d`](/api/namespaces/filters/classes/basefilter/#applyto2d)

#### Defined in

[src/filters/Noise.ts:48](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/Noise.ts#L48)

***

### applyToWebGL()

> **applyToWebGL**(`options`): `void`

Apply this filter using webgl.

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`applyToWebGL`](/api/namespaces/filters/classes/basefilter/#applytowebgl)

#### Defined in

[src/filters/BaseFilter.ts:314](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L314)

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

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`bindAdditionalTexture`](/api/namespaces/filters/classes/basefilter/#bindadditionaltexture)

#### Defined in

[src/filters/BaseFilter.ts:333](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L333)

***

### createHelpLayer()

> **createHelpLayer**(`options`): `void`

If needed by a 2d filter, this functions can create an helper canvas to be used
remember that options.targetCanvas is available for use till end of chain.

#### Parameters

• **options**: [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`createHelpLayer`](/api/namespaces/filters/classes/basefilter/#createhelplayer)

#### Defined in

[src/filters/BaseFilter.ts:369](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L369)

***

### createProgram()

> **createProgram**(`gl`, `fragmentSource`, `vertexSource`): `object`

Compile this filter's shader program.

#### Parameters

• **gl**: `WebGLRenderingContext`

The GL canvas context to use for shader compilation.

• **fragmentSource**: `string` = `...`

fragmentShader source for compilation

• **vertexSource**: `string` = `...`

vertexShader source for compilation

#### Returns

`object`

##### attributeLocations

> **attributeLocations**: [`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/)

##### program

> **program**: `WebGLProgram`

##### uniformLocations

> **uniformLocations**: [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`createProgram`](/api/namespaces/filters/classes/basefilter/#createprogram)

#### Defined in

[src/filters/BaseFilter.ts:82](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L82)

***

### getAttributeLocations()

> **getAttributeLocations**(`gl`, `program`): [`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/)

Return a map of attribute names to WebGLAttributeLocation objects.

#### Parameters

• **gl**: `WebGLRenderingContext`

The canvas context used to compile the shader program.

• **program**: `WebGLProgram`

The shader program from which to take attribute locations.

#### Returns

[`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/)

A map of attribute names to attribute locations.

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getAttributeLocations`](/api/namespaces/filters/classes/basefilter/#getattributelocations)

#### Defined in

[src/filters/BaseFilter.ts:152](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L152)

***

### getCacheKey()

> **getCacheKey**(): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getCacheKey`](/api/namespaces/filters/classes/basefilter/#getcachekey)

#### Defined in

[src/filters/BaseFilter.ts:283](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L283)

***

### getFragmentSource()

> **getFragmentSource**(): `string`

#### Returns

`string`

#### Overrides

`BaseFilter.getFragmentSource`

#### Defined in

[src/filters/Noise.ts:38](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/Noise.ts#L38)

***

### getUniformLocations()

> **getUniformLocations**(`gl`, `program`): [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

Return a map of uniform names to WebGLUniformLocation objects.

#### Parameters

• **gl**: `WebGLRenderingContext`

The canvas context used to compile the shader program.

• **program**: `WebGLProgram`

The shader program from which to take uniform locations.

#### Returns

[`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

A map of uniform names to uniform locations.

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getUniformLocations`](/api/namespaces/filters/classes/basefilter/#getuniformlocations)

#### Defined in

[src/filters/BaseFilter.ts:168](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L168)

***

### getVertexSource()

> **getVertexSource**(): `string`

#### Returns

`string`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getVertexSource`](/api/namespaces/filters/classes/basefilter/#getvertexsource)

#### Defined in

[src/filters/BaseFilter.ts:71](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L71)

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

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`isNeutralState`](/api/namespaces/filters/classes/basefilter/#isneutralstate)

#### Defined in

[src/filters/Noise.ts:72](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/Noise.ts#L72)

***

### retrieveShader()

> **retrieveShader**(`options`): [`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/)

Retrieves the cached shader.

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

[`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/)

the compiled program shader

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`retrieveShader`](/api/namespaces/filters/classes/basefilter/#retrieveshader)

#### Defined in

[src/filters/BaseFilter.ts:294](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L294)

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

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`sendAttributeData`](/api/namespaces/filters/classes/basefilter/#sendattributedata)

#### Defined in

[src/filters/BaseFilter.ts:191](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L191)

***

### sendUniformData()

> **sendUniformData**(`gl`, `uniformLocations`): `void`

Send data from this filter to its shader program's uniforms.

#### Parameters

• **gl**: `WebGLRenderingContext`

The GL canvas context used to compile this filter's shader.

• **uniformLocations**: [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

A map of string uniform names to WebGLUniformLocation objects

#### Returns

`void`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`sendUniformData`](/api/namespaces/filters/classes/basefilter/#senduniformdata)

#### Defined in

[src/filters/Noise.ts:64](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/Noise.ts#L64)

***

### toJSON()

> **toJSON**(): `object` & `NoiseOwnProps`

Returns a JSON representation of an instance

#### Returns

`object` & `NoiseOwnProps`

JSON

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`toJSON`](/api/namespaces/filters/classes/basefilter/#tojson)

#### Defined in

[src/filters/BaseFilter.ts:401](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L401)

***

### toObject()

> **toObject**(): `object` & `NoiseOwnProps`

Returns object representation of an instance

#### Returns

`object` & `NoiseOwnProps`

Object representation of an instance

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`toObject`](/api/namespaces/filters/classes/basefilter/#toobject)

#### Defined in

[src/filters/BaseFilter.ts:382](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L382)

***

### unbindAdditionalTexture()

> **unbindAdditionalTexture**(`gl`, `textureUnit`): `void`

#### Parameters

• **gl**: `WebGLRenderingContext`

• **textureUnit**: `number`

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`unbindAdditionalTexture`](/api/namespaces/filters/classes/basefilter/#unbindadditionaltexture)

#### Defined in

[src/filters/BaseFilter.ts:344](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L344)

***

### fromObject()

> `static` **fromObject**(`__namedParameters`, `options`): `Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`, `object`\>\>

#### Parameters

• **\_\_namedParameters**: `Record`\<`string`, `any`\>

• **options**: [`Abortable`](/api/type-aliases/abortable/)

#### Returns

`Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`, `object`\>\>

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`fromObject`](/api/namespaces/filters/classes/basefilter/#fromobject)

#### Defined in

[src/filters/BaseFilter.ts:406](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L406)
