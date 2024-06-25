---
editUrl: false
next: false
prev: false
title: "Resize"
---

Resize image filter class

## Example

```ts
const filter = new Resize();
object.filters.push(filter);
object.applyFilters(canvas.renderAll.bind(canvas));
```

## Extends

- [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)

## Constructors

### new Resize()

> **new Resize**(`options`?): [`Resize`](/api/namespaces/filters/classes/resize/)

Constructor

#### Parameters

• **options?**: `Record`\<`string`, `any`\> = `{}`

Options object

#### Returns

[`Resize`](/api/namespaces/filters/classes/resize/)

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`constructor`](/api/namespaces/filters/classes/basefilter/#constructors)

#### Defined in

src/filters/BaseFilter.ts:58

## Properties

### fragmentSourceTOP

> **fragmentSourceTOP**: `string`

#### Defined in

src/filters/Resize.ts:82

***

### lanczosLobes

> **lanczosLobes**: `number`

LanczosLobes parameter for lanczos filter, valid for resizeType lanczos

#### Param

#### Default

```ts

```

#### Defined in

src/filters/Resize.ts:80

***

### resizeType

> **resizeType**: [`TResizeType`](/api/namespaces/filters/type-aliases/tresizetype/)

Resize type
for webgl resizeType is just lanczos, for canvas2d can be:
bilinear, hermite, sliceHack, lanczos.

#### Default

```ts

```

#### Defined in

src/filters/Resize.ts:59

***

### scaleX

> **scaleX**: `number`

Scale factor for resizing, x axis

#### Param

#### Default

```ts

```

#### Defined in

src/filters/Resize.ts:66

***

### scaleY

> **scaleY**: `number`

Scale factor for resizing, y axis

#### Param

#### Default

```ts

```

#### Defined in

src/filters/Resize.ts:73

***

### defaults

> `static` **defaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`Resize`](/api/namespaces/filters/classes/resize/)\>\> = `resizeDefaultValues`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`defaults`](/api/namespaces/filters/classes/basefilter/#defaults)

#### Defined in

src/filters/Resize.ts:86

***

### type

> `static` **type**: `string` = `'Resize'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`type`](/api/namespaces/filters/classes/basefilter/#type)

#### Defined in

src/filters/Resize.ts:84

## Accessors

### type

> `get` **type**(): `string`

Filter type

#### Default

```ts

```

#### Returns

`string`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`type`](/api/namespaces/filters/classes/basefilter/#type-1)

#### Defined in

src/filters/BaseFilter.ts:25

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

src/filters/BaseFilter.ts:190

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

src/filters/BaseFilter.ts:217

***

### applyTo()

> **applyTo**(`options`): `void`

Apply the resize filter to the image
Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/) \| [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`applyTo`](/api/namespaces/filters/classes/basefilter/#applyto)

#### Defined in

src/filters/Resize.ts:207

***

### applyTo2d()

> **applyTo2d**(`this`, `options`): `void`

#### Parameters

• **this**: `ResizeDuring2DResize`

• **options**: [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`applyTo2d`](/api/namespaces/filters/classes/basefilter/#applyto2d)

#### Defined in

src/filters/Resize.ts:233

***

### applyToForWebgl()

> **applyToForWebgl**(`this`, `options`): `void`

#### Parameters

• **this**: `ResizeDuringWEBGLResize`

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Defined in

src/filters/Resize.ts:173

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

src/filters/BaseFilter.ts:315

***

### bilinearFiltering()

> **bilinearFiltering**(`this`, `options`, `oW`, `oH`, `dW`, `dH`): `ImageData`

bilinearFiltering

#### Parameters

• **this**: `ResizeDuring2DResize`

• **options**: [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

• **oW**: `number`

Original Width

• **oH**: `number`

Original Height

• **dW**: `number`

Destination Width

• **dH**: `number`

Destination Height

#### Returns

`ImageData`

#### Defined in

src/filters/Resize.ts:427

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

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`createHelpLayer`](/api/namespaces/filters/classes/basefilter/#createhelplayer)

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

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`createProgram`](/api/namespaces/filters/classes/basefilter/#createprogram)

#### Defined in

src/filters/BaseFilter.ts:77

***

### generateShader()

> **generateShader**(`filterWindow`): `string`

Generate vertex and shader sources from the necessary steps numbers

#### Parameters

• **filterWindow**: `number`

#### Returns

`string`

#### Defined in

src/filters/Resize.ts:149

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

src/filters/BaseFilter.ts:146

***

### getCacheKey()

> **getCacheKey**(`this`): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Parameters

• **this**: `ResizeDuringWEBGLResize`

#### Returns

`string`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getCacheKey`](/api/namespaces/filters/classes/basefilter/#getcachekey)

#### Defined in

src/filters/Resize.ts:124

***

### getFilterWindow()

> **getFilterWindow**(`this`): `number`

#### Parameters

• **this**: `ResizeDuringWEBGLResize`

#### Returns

`number`

#### Defined in

src/filters/Resize.ts:119

***

### getFragmentSource()

> **getFragmentSource**(`this`): `string`

#### Parameters

• **this**: `ResizeDuringWEBGLResize`

#### Returns

`string`

#### Overrides

`BaseFilter.getFragmentSource`

#### Defined in

src/filters/Resize.ts:129

***

### getMainParameter()

> **getMainParameter**(): `undefined` \| `string` \| `number` \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/) \| (`options`) => [`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/) \| () => `object` \| () => `object` \| (`gl`, `program`) => `object` \| (`this`, `gl`, `uniformLocations`) => `void` \| (`this`) => `number` \| (`this`) => `string` \| (`this`) => `string` \| (`this`) => `any`[] \| (`filterWindow`) => `string` \| (`this`, `options`) => `void` \| (`options`) => `void` \| () => `boolean` \| (`lobes`) => (`x`) => `number` \| (`this`, `options`) => `void` \| (`options`, `oW`, `oH`, `dW`, `dH`) => `ImageData` \| (`this`, `options`, `oW`, `oH`, `dW`, `dH`) => `ImageData` \| (`this`, `options`, `oW`, `oH`, `dW`, `dH`) => `ImageData` \| (`this`, `options`, `oW`, `oH`, `dW`, `dH`) => `ImageData` \| (`gl`, `fragmentSource`, `vertexSource`) => `object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| number \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ((options: TWebGLPipelineState) =\> TWebGLProgramCacheItem) \| ... 28 more ... \| undefined \| (`value`) => `void` \| (`options`) => `void`

#### Returns

`undefined` \| `string` \| `number` \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/) \| (`options`) => [`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/) \| () => `object` \| () => `object` \| (`gl`, `program`) => `object` \| (`this`, `gl`, `uniformLocations`) => `void` \| (`this`) => `number` \| (`this`) => `string` \| (`this`) => `string` \| (`this`) => `any`[] \| (`filterWindow`) => `string` \| (`this`, `options`) => `void` \| (`options`) => `void` \| () => `boolean` \| (`lobes`) => (`x`) => `number` \| (`this`, `options`) => `void` \| (`options`, `oW`, `oH`, `dW`, `dH`) => `ImageData` \| (`this`, `options`, `oW`, `oH`, `dW`, `dH`) => `ImageData` \| (`this`, `options`, `oW`, `oH`, `dW`, `dH`) => `ImageData` \| (`this`, `options`, `oW`, `oH`, `dW`, `dH`) => `ImageData` \| (`gl`, `fragmentSource`, `vertexSource`) => `object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| number \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ((options: TWebGLPipelineState) =\> TWebGLProgramCacheItem) \| ... 28 more ... \| undefined \| (`value`) => `void` \| (`options`) => `void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getMainParameter`](/api/namespaces/filters/classes/basefilter/#getmainparameter)

#### Defined in

src/filters/BaseFilter.ts:351

***

### getTaps()

> **getTaps**(`this`): `any`[]

#### Parameters

• **this**: `ResizeDuringWEBGLResize`

#### Returns

`any`[]

#### Defined in

src/filters/Resize.ts:134

***

### getUniformLocations()

> **getUniformLocations**(`gl`, `program`): `object`

Return WebGL uniform locations for this filter's shader.

#### Parameters

• **gl**: `WebGLRenderingContext`

The GL canvas context used to compile this filter's shader.

• **program**: `WebGLProgram`

This filter's compiled shader program.

#### Returns

`object`

##### uDelta

> **uDelta**: `null` \| `WebGLUniformLocation`

##### uTaps

> **uTaps**: `null` \| `WebGLUniformLocation`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getUniformLocations`](/api/namespaces/filters/classes/basefilter/#getuniformlocations)

#### Defined in

src/filters/Resize.ts:94

***

### hermiteFastResize()

> **hermiteFastResize**(`this`, `options`, `oW`, `oH`, `dW`, `dH`): `ImageData`

hermiteFastResize

#### Parameters

• **this**: `ResizeDuring2DResize`

• **options**: [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

• **oW**: `number`

Original Width

• **oH**: `number`

Original Height

• **dW**: `number`

Destination Width

• **dH**: `number`

Destination Height

#### Returns

`ImageData`

#### Defined in

src/filters/Resize.ts:490

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

src/filters/Resize.ts:215

***

### lanczosCreate()

> **lanczosCreate**(`lobes`): (`x`) => `number`

#### Parameters

• **lobes**: `number`

#### Returns

`Function`

##### Parameters

• **x**: `number`

##### Returns

`number`

#### Defined in

src/filters/Resize.ts:219

***

### lanczosResize()

> **lanczosResize**(`this`, `options`, `oW`, `oH`, `dW`, `dH`): `ImageData`

Filter lanczosResize

#### Parameters

• **this**: `ResizeDuring2DResize`

• **options**: [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

• **oW**: `number`

Original Width

• **oH**: `number`

Original Height

• **dW**: `number`

Destination Width

• **dH**: `number`

Destination Height

#### Returns

`ImageData`

#### Defined in

src/filters/Resize.ts:336

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

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`sendAttributeData`](/api/namespaces/filters/classes/basefilter/#sendattributedata)

#### Defined in

src/filters/BaseFilter.ts:177

***

### sendUniformData()

> **sendUniformData**(`this`, `gl`, `uniformLocations`): `void`

Send data from this filter to its shader program's uniforms.

#### Parameters

• **this**: `ResizeDuringWEBGLResize`

• **gl**: `WebGLRenderingContext`

The GL canvas context used to compile this filter's shader.

• **uniformLocations**: [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

A map of string uniform names to WebGLUniformLocation objects

#### Returns

`void`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`sendUniformData`](/api/namespaces/filters/classes/basefilter/#senduniformdata)

#### Defined in

src/filters/Resize.ts:107

***

### setMainParameter()

> **setMainParameter**(`value`): `void`

#### Parameters

• **value**: `any`

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`setMainParameter`](/api/namespaces/filters/classes/basefilter/#setmainparameter)

#### Defined in

src/filters/BaseFilter.ts:355

***

### sliceByTwo()

> **sliceByTwo**(`options`, `oW`, `oH`, `dW`, `dH`): `ImageData`

Filter sliceByTwo

#### Parameters

• **options**: [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

• **oW**: `number`

Original Width

• **oH**: `number`

Original Height

• **dW**: `number`

Destination Width

• **dH**: `number`

Destination Height

#### Returns

`ImageData`

#### Defined in

src/filters/Resize.ts:271

***

### toJSON()

> **toJSON**(): `object`

Returns a JSON representation of an instance

#### Returns

`object`

JSON

##### type

> **type**: `string`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`toJSON`](/api/namespaces/filters/classes/basefilter/#tojson)

#### Defined in

src/filters/BaseFilter.ts:405

***

### toObject()

> **toObject**(): `object`

Returns object representation of an instance

#### Returns

`object`

Object representation of an instance

##### lanczosLobes

> **lanczosLobes**: `number`

##### resizeType

> **resizeType**: [`TResizeType`](/api/namespaces/filters/type-aliases/tresizetype/)

##### scaleX

> **scaleX**: `number`

##### scaleY

> **scaleY**: `number`

##### type

> **type**: `string`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`toObject`](/api/namespaces/filters/classes/basefilter/#toobject)

#### Defined in

src/filters/Resize.ts:560

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

src/filters/BaseFilter.ts:345

***

### fromObject()

> `static` **fromObject**(`__namedParameters`, `options`): `Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\>

#### Parameters

• **\_\_namedParameters**: `Record`\<`string`, `any`\>

• **options**: [`Abortable`](/api/type-aliases/abortable/)

#### Returns

`Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\>

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`fromObject`](/api/namespaces/filters/classes/basefilter/#fromobject)

#### Defined in

src/filters/BaseFilter.ts:410
