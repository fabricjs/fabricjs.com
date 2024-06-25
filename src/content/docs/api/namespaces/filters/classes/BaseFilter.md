---
editUrl: false
next: false
prev: false
title: "BaseFilter"
---

## Extended by

- [`BlendColor`](/api/namespaces/filters/classes/blendcolor/)
- [`BlendImage`](/api/namespaces/filters/classes/blendimage/)
- [`Blur`](/api/namespaces/filters/classes/blur/)
- [`Brightness`](/api/namespaces/filters/classes/brightness/)
- [`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/)
- [`Composed`](/api/namespaces/filters/classes/composed/)
- [`Contrast`](/api/namespaces/filters/classes/contrast/)
- [`Convolute`](/api/namespaces/filters/classes/convolute/)
- [`Gamma`](/api/namespaces/filters/classes/gamma/)
- [`Grayscale`](/api/namespaces/filters/classes/grayscale/)
- [`Invert`](/api/namespaces/filters/classes/invert/)
- [`Noise`](/api/namespaces/filters/classes/noise/)
- [`Pixelate`](/api/namespaces/filters/classes/pixelate/)
- [`RemoveColor`](/api/namespaces/filters/classes/removecolor/)
- [`Resize`](/api/namespaces/filters/classes/resize/)
- [`Saturation`](/api/namespaces/filters/classes/saturation/)
- [`Vibrance`](/api/namespaces/filters/classes/vibrance/)

## Type Parameters

• **Name** *extends* `string`

• **OwnProps** *extends* `Record`\<`string`, `any`\> = `object`

## Constructors

### new BaseFilter()

> **new BaseFilter**\<`Name`, `OwnProps`\>(`options`?): [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`Name`, `OwnProps`\>

Constructor

#### Parameters

• **options?**: `object` & `Partial`\<`OwnProps`\> & `Record`\<`string`, `any`\> = `{}`

Options object

#### Returns

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`Name`, `OwnProps`\>

#### Defined in

[src/filters/BaseFilter.ts:56](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L56)

## Properties

### defaults

> `static` **defaults**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/filters/BaseFilter.ts:50](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L50)

***

### type

> `static` **type**: `string` = `'BaseFilter'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Defined in

[src/filters/BaseFilter.ts:41](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L41)

***

### uniformLocations

> `static` **uniformLocations**: `string`[] = `[]`

Contains the uniform locations for the fragment shader.
uStepW and uStepH are handled by the BaseFilter, each filter class
needs to specify all the one that are needed

#### Defined in

[src/filters/BaseFilter.ts:48](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L48)

## Accessors

### type

> `get` **type**(): `Name`

Filter type

#### Default

```ts

```

#### Returns

`Name`

#### Defined in

[src/filters/BaseFilter.ts:30](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L30)

## Methods

### \_setupFrameBuffer()

> **\_setupFrameBuffer**(`options`): `void`

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Defined in

[src/filters/BaseFilter.ts:204](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L204)

***

### \_swapTextures()

> **\_swapTextures**(`options`): `void`

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

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

#### Defined in

[src/filters/BaseFilter.ts:264](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L264)

***

### applyTo2d()

> **applyTo2d**(`options`): `void`

#### Parameters

• **options**: [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Defined in

[src/filters/BaseFilter.ts:274](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L274)

***

### applyToWebGL()

> **applyToWebGL**(`options`): `void`

Apply this filter using webgl.

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

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

#### Defined in

[src/filters/BaseFilter.ts:152](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L152)

***

### getCacheKey()

> **getCacheKey**(): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Defined in

[src/filters/BaseFilter.ts:283](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L283)

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

#### Defined in

[src/filters/BaseFilter.ts:168](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L168)

***

### getVertexSource()

> **getVertexSource**(): `string`

#### Returns

`string`

#### Defined in

[src/filters/BaseFilter.ts:71](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L71)

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

#### Defined in

[src/filters/BaseFilter.ts:247](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L247)

***

### retrieveShader()

> **retrieveShader**(`options`): [`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/)

Retrieves the cached shader.

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

[`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/)

the compiled program shader

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

#### Defined in

[src/filters/BaseFilter.ts:191](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L191)

***

### sendUniformData()

> **sendUniformData**(`gl`, `uniformLocations`): `void`

Send uniform data from this filter to its shader program on the GPU.

Intended to be overridden by subclasses.

#### Parameters

• **gl**: `WebGLRenderingContext`

The canvas context used to compile the shader program.

• **uniformLocations**: [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

A map of shader uniform names to their locations.

#### Returns

`void`

#### Defined in

[src/filters/BaseFilter.ts:358](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L358)

***

### toJSON()

> **toJSON**(): `object` & `OwnProps`

Returns a JSON representation of an instance

#### Returns

`object` & `OwnProps`

JSON

#### Defined in

[src/filters/BaseFilter.ts:401](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L401)

***

### toObject()

> **toObject**(): `object` & `OwnProps`

Returns object representation of an instance

#### Returns

`object` & `OwnProps`

Object representation of an instance

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

#### Defined in

[src/filters/BaseFilter.ts:406](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/BaseFilter.ts#L406)
