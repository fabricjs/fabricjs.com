---
editUrl: false
next: false
prev: false
title: "WebGLFilterBackend"
---

## Constructors

### new WebGLFilterBackend()

> **new WebGLFilterBackend**(`__namedParameters`): [`WebGLFilterBackend`](/api/classes/webglfilterbackend/)

#### Parameters

• **\_\_namedParameters** = `{}`

• **\_\_namedParameters.tileSize**: `undefined` \| `number` = `config.textureSize`

#### Returns

[`WebGLFilterBackend`](/api/classes/webglfilterbackend/)

#### Defined in

src/filters/WebGLFilterBackend.ts:56

## Properties

### aPosition

> **aPosition**: `Float32Array`

Define ...

#### Defined in

src/filters/WebGLFilterBackend.ts:17

***

### canvas

> **canvas**: `HTMLCanvasElement`

#### Defined in

src/filters/WebGLFilterBackend.ts:25

***

### gl

> **gl**: `WebGLRenderingContext`

The Webgl context that will execute the operations for filtering

#### Defined in

src/filters/WebGLFilterBackend.ts:30

***

### gpuInfo

> **gpuInfo**: `any`

Contains GPU info for debug

#### Defined in

src/filters/WebGLFilterBackend.ts:45

***

### imageBuffer?

> `optional` **imageBuffer**: `ArrayBuffer`

If GLPut data is the fastest operation, or if forced, this buffer will be used
to transfer the data back in the 2d logic

#### Defined in

src/filters/WebGLFilterBackend.ts:23

***

### programCache

> **programCache**: `any`

Keyed map for shader cache

#### Defined in

src/filters/WebGLFilterBackend.ts:35

***

### resources

> **resources**: [`TPipelineResources`](/api/type-aliases/tpipelineresources/) = `{}`

Experimental. This object is a sort of repository of help layers used to avoid
of recreating them during frequent filtering. If you are previewing a filter with
a slider you probably do not want to create help layers every filter step.
in this object there will be appended some canvases, created once, resized sometimes
cleared never. Clearing is left to the developer.

#### Defined in

src/filters/WebGLFilterBackend.ts:54

***

### textureCache

> **textureCache**: [`TTextureCache`](/api/type-aliases/ttexturecache/)

Keyed map for texture cache

#### Defined in

src/filters/WebGLFilterBackend.ts:40

***

### tileSize

> **tileSize**: `number`

#### Defined in

src/filters/WebGLFilterBackend.ts:12

## Methods

### applyFilters()

> **applyFilters**(`filters`, `source`, `width`, `height`, `targetCanvas`, `cacheKey`?): `undefined` \| [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

Attempts to apply the requested filters to the source provided, drawing the filtered output
to the provided target canvas.

#### Parameters

• **filters**: [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`, `Record`\<`string`, `any`\>\>[]

The filters to apply.

• **source**: `TexImageSource`

The source to be filtered.

• **width**: `number`

The width of the source input.

• **height**: `number`

The height of the source input.

• **targetCanvas**: `HTMLCanvasElement`

The destination for filtered output to be drawn.

• **cacheKey?**: `string`

A key used to cache resources related to the source. If
omitted, caching will be skipped.

#### Returns

`undefined` \| [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Defined in

src/filters/WebGLFilterBackend.ts:108

***

### captureGPUInfo()

> **captureGPUInfo**(): `any`

Attempt to extract GPU information strings from a WebGL context.

Useful information when debugging or blacklisting specific GPUs.

#### Returns

`any`

A GPU info object with renderer and vendor strings.

#### Defined in

src/filters/WebGLFilterBackend.ts:382

***

### clearWebGLCaches()

> **clearWebGLCaches**(): `void`

Wipe out WebGL-related caches.

#### Returns

`void`

#### Defined in

src/filters/WebGLFilterBackend.ts:197

***

### copyGLTo2D()

> **copyGLTo2D**(`gl`, `pipelineState`): `void`

Copy an input WebGL canvas on to an output 2D canvas.

The WebGL canvas is assumed to be upside down, with the top-left pixel of the
desired output image appearing in the bottom-left corner of the WebGL canvas.

#### Parameters

• **gl**: `WebGLRenderingContext`

• **pipelineState**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

The 2D target canvas to copy on to.

#### Returns

`void`

#### Defined in

src/filters/WebGLFilterBackend.ts:322

***

### copyGLTo2DPutImageData()

> **copyGLTo2DPutImageData**(`this`, `gl`, `pipelineState`): `void`

Copy an input WebGL canvas on to an output 2D canvas using 2d canvas' putImageData
API. Measurably faster than using ctx.drawImage in Firefox (version 54 on OSX Sierra).

#### Parameters

• **this**: `Required`\<[`WebGLFilterBackend`](/api/classes/webglfilterbackend/)\>

• **gl**: `WebGLRenderingContext`

• **pipelineState**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

The 2D target canvas to copy on to.

#### Returns

`void`

#### Defined in

src/filters/WebGLFilterBackend.ts:354

***

### createTexture()

> **createTexture**(`gl`, `width`, `height`, `textureImageSource`?, `filter`?): `null` \| `WebGLTexture`

Create a WebGL texture object.

Accepts specific dimensions to initialize the texture to or a source image.

#### Parameters

• **gl**: `WebGLRenderingContext`

The GL context to use for creating the texture.

• **width**: `number`

The width to initialize the texture at.

• **height**: `number`

The height to initialize the texture.

• **textureImageSource?**: `TexImageSource`

A source for the texture data.

• **filter?**: `9728` \| `9729`

gl.NEAREST default or gl.LINEAR filters for the texture.
This filter is very useful for LUTs filters. If you need interpolation use gl.LINEAR

#### Returns

`null` \| `WebGLTexture`

#### Defined in

src/filters/WebGLFilterBackend.ts:215

***

### createWebGLCanvas()

> **createWebGLCanvas**(`width`, `height`): `void`

Create a canvas element and associated WebGL context and attaches them as
class properties to the GLFilterBackend class.

#### Parameters

• **width**: `number`

• **height**: `number`

#### Returns

`void`

#### Defined in

src/filters/WebGLFilterBackend.ts:74

***

### dispose()

> **dispose**(): `void`

Detach event listeners, remove references, and clean up caches.

#### Returns

`void`

#### Defined in

src/filters/WebGLFilterBackend.ts:182

***

### evictCachesForKey()

> **evictCachesForKey**(`cacheKey`): `void`

Clear out cached resources related to a source image that has been
filtered previously.

#### Parameters

• **cacheKey**: `string`

The cache key provided when the source image was filtered.

#### Returns

`void`

#### Defined in

src/filters/WebGLFilterBackend.ts:306

***

### getCachedTexture()

> **getCachedTexture**(`uniqueId`, `textureImageSource`, `filter`?): `null` \| `WebGLTexture`

Can be optionally used to get a texture from the cache array

If an existing texture is not found, a new texture is created and cached.

#### Parameters

• **uniqueId**: `string`

A cache key to use to find an existing texture.

• **textureImageSource**: `TexImageSource`

A source to use to create the
texture cache entry if one does not already exist.

• **filter?**: `9728` \| `9729`

#### Returns

`null` \| `WebGLTexture`

#### Defined in

src/filters/WebGLFilterBackend.ts:275

***

### setupGLContext()

> **setupGLContext**(`width`, `height`): `void`

Setup a WebGL context suitable for filtering, and bind any needed event handlers.

#### Parameters

• **width**: `number`

• **height**: `number`

#### Returns

`void`

#### Defined in

src/filters/WebGLFilterBackend.ts:65
