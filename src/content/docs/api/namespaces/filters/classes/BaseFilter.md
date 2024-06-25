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

## Constructors

### new BaseFilter()

> **new BaseFilter**(`options`?): [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)

Constructor

#### Parameters

• **options?**: `Record`\<`string`, `any`\> = `{}`

Options object

#### Returns

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)

#### Defined in

src/filters/BaseFilter.ts:58

## Properties

### defaults

> `static` **defaults**: `Record`\<`string`, `any`\>

#### Defined in

src/filters/BaseFilter.ts:38

***

### type

> `static` **type**: `string` = `'BaseFilter'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Defined in

src/filters/BaseFilter.ts:36

## Accessors

### type

> `get` **type**(): `string`

Filter type

#### Default

```ts

```

#### Returns

`string`

#### Defined in

src/filters/BaseFilter.ts:25

## Methods

### \_setupFrameBuffer()

> **\_setupFrameBuffer**(`options`): `void`

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Defined in

src/filters/BaseFilter.ts:190

***

### \_swapTextures()

> **\_swapTextures**(`options`): `void`

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Defined in

src/filters/BaseFilter.ts:217

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

src/filters/BaseFilter.ts:265

***

### applyTo2d()

> **applyTo2d**(`options`): `void`

#### Parameters

• **options**: [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Defined in

src/filters/BaseFilter.ts:275

***

### applyToWebGL()

> **applyToWebGL**(`options`): `void`

Apply this filter using webgl.

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Defined in

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

#### Defined in

src/filters/BaseFilter.ts:334

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

src/filters/BaseFilter.ts:380

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

src/filters/BaseFilter.ts:77

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

src/filters/BaseFilter.ts:146

***

### getCacheKey()

> **getCacheKey**(): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Defined in

src/filters/BaseFilter.ts:284

***

### getMainParameter()

> **getMainParameter**(): `undefined` \| `string` \| (`options`) => `void` \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/) \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/) \| (`gl`, `uniformLocations`) => `void` \| (`options`) => `void` \| (`options`) => [`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/) \| () => `object` \| (`options`?) => `boolean` \| (`gl`, `fragmentSource`, `vertexSource`) => `object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| () => `string` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| ((options: TWebGLPipelineState \| T2DPipelineState) =\> void) \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLUniformLocationMap) \| ... 18 more ... \| undefined \| () => `object` \| (`value`) => `void` \| (`options`) => `void`

#### Returns

`undefined` \| `string` \| (`options`) => `void` \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/) \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/) \| (`gl`, `uniformLocations`) => `void` \| (`options`) => `void` \| (`options`) => [`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/) \| () => `object` \| (`options`?) => `boolean` \| (`gl`, `fragmentSource`, `vertexSource`) => `object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| () => `string` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| ((options: TWebGLPipelineState \| T2DPipelineState) =\> void) \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLUniformLocationMap) \| ... 18 more ... \| undefined \| () => `object` \| (`value`) => `void` \| (`options`) => `void`

#### Defined in

src/filters/BaseFilter.ts:351

***

### getUniformLocations()

> **getUniformLocations**(`gl`, `program`): [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

Return a map of uniform names to WebGLUniformLocation objects.

Intended to be overridden by subclasses.

#### Parameters

• **gl**: `WebGLRenderingContext`

The canvas context used to compile the shader program.

• **program**: `WebGLProgram`

The shader program from which to take uniform locations.

#### Returns

[`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

A map of uniform names to uniform locations.

#### Defined in

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

#### Defined in

src/filters/BaseFilter.ts:233

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

#### Defined in

src/filters/BaseFilter.ts:177

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

src/filters/BaseFilter.ts:369

***

### setMainParameter()

> **setMainParameter**(`value`): `void`

#### Parameters

• **value**: `any`

#### Returns

`void`

#### Defined in

src/filters/BaseFilter.ts:355

***

### toJSON()

> **toJSON**(): `object`

Returns a JSON representation of an instance

#### Returns

`object`

JSON

##### type

> **type**: `string`

#### Defined in

src/filters/BaseFilter.ts:405

***

### toObject()

> **toObject**(): `object`

Returns object representation of an instance

#### Returns

`object`

Object representation of an instance

##### type

> **type**: `string`

#### Defined in

src/filters/BaseFilter.ts:393

***

### unbindAdditionalTexture()

> **unbindAdditionalTexture**(`gl`, `textureUnit`): `void`

#### Parameters

• **gl**: `WebGLRenderingContext`

• **textureUnit**: `number`

#### Returns

`void`

#### Defined in

src/filters/BaseFilter.ts:345

***

### fromObject()

> `static` **fromObject**(`__namedParameters`, `options`): `Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\>

#### Parameters

• **\_\_namedParameters**: `Record`\<`string`, `any`\>

• **options**: [`Abortable`](/api/type-aliases/abortable/)

#### Returns

`Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\>

#### Defined in

src/filters/BaseFilter.ts:410
