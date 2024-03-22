---
editUrl: false
next: false
prev: false
title: "BlendImage"
---

Image Blend filter class

## Example

```ts
const filter = new filters.BlendColor({
 color: '#000',
 mode: 'multiply'
});

const filter = new BlendImage({
 image: fabricImageObject,
 mode: 'multiply',
 alpha: 0.5
});
object.filters.push(filter);
object.applyFilters();
canvas.renderAll();
```

## Extends

- [`BaseFilter`](BaseFilter.md)

## Constructors

### new BlendImage(options)

> **new BlendImage**(`options`?): [`BlendImage`](BlendImage.md)

Constructor

#### Parameters

• **options?**: `Record`\<`string`, `any`\>= `{}`

Options object

#### Returns

[`BlendImage`](BlendImage.md)

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`constructor`](BaseFilter.md#constructors)

#### Source

src/filters/BaseFilter.ts:58

## Properties

### alpha

> **alpha**: `number`

alpha value. represent the strength of the blend image operation.
not implemented.

#### Source

src/filters/BlendImage.ts:62

***

### image

> **image**: [`FabricImage`](../../../classes/FabricImage.md)\<`Partial`\<[`ImageProps`](../../../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../../../interfaces/SerializedImageProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\>

Color to make the blend operation with. default to a reddish color since black or white
gives always strong result.

#### Source

src/filters/BlendImage.ts:54

***

### mode

> **mode**: `TBlendImageMode`

#### Source

src/filters/BlendImage.ts:56

***

### defaults

> **`static`** **defaults**: `Partial`\<[`TClassProperties`](../../../type-aliases/TClassProperties.md)\<[`BlendImage`](BlendImage.md)\>\> = `blendImageDefaultValues`

#### Overrides

[`BaseFilter`](BaseFilter.md).[`defaults`](BaseFilter.md#defaults)

#### Source

src/filters/BlendImage.ts:66

***

### type

> **`static`** **type**: `string` = `'BlendImage'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`BaseFilter`](BaseFilter.md).[`type`](BaseFilter.md#type)

#### Source

src/filters/BlendImage.ts:64

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

Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.

#### Parameters

• **options**: [`T2DPipelineState`](../../../type-aliases/T2DPipelineState.md)

#### Returns

`void`

#### Overrides

[`BaseFilter`](BaseFilter.md).[`applyTo2d`](BaseFilter.md#applyto2d)

#### Source

src/filters/BlendImage.ts:116

***

### applyToWebGL()

> **applyToWebGL**(`options`): `void`

Apply this filter using webgl.

#### Parameters

• **options**: [`TWebGLPipelineState`](../../../type-aliases/TWebGLPipelineState.md)

#### Returns

`void`

#### Overrides

[`BaseFilter`](BaseFilter.md).[`applyToWebGL`](BaseFilter.md#applytowebgl)

#### Source

src/filters/BlendImage.ts:76

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

### calculateMatrix()

> **calculateMatrix**(): `number`[]

Calculate a transformMatrix to adapt the image to blend over

#### Returns

`number`[]

#### Source

src/filters/BlendImage.ts:94

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

### createTexture()

> **createTexture**(`backend`, `image`): `null` \| `WebGLTexture`

#### Parameters

• **backend**: [`WebGLFilterBackend`](../../../classes/WebGLFilterBackend.md)

• **image**: [`FabricImage`](../../../classes/FabricImage.md)\<`Partial`\<[`ImageProps`](../../../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../../../interfaces/SerializedImageProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\>

#### Returns

`null` \| `WebGLTexture`

#### Source

src/filters/BlendImage.ts:84

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

src/filters/BlendImage.ts:68

***

### getFragmentSource()

> **getFragmentSource**(): `string`

#### Returns

`string`

#### Overrides

`BaseFilter.getFragmentSource`

#### Source

src/filters/BlendImage.ts:72

***

### getMainParameter()

> **getMainParameter**(): `undefined` \| `string` \| `number` \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](../../../type-aliases/TWebGLAttributeLocationMap.md) \| (`options`) => [`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md) \| (`options`?) => `boolean` \| [`FabricImage`](../../../classes/FabricImage.md)\<`Partial`\<[`ImageProps`](../../../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../../../interfaces/SerializedImageProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\> \| () => `Object` \| () => `Object` \| (`backend`, `image`) => `null` \| `WebGLTexture` \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md) \| (`gl`, `uniformLocations`) => `void` \| () => `string` \| () => `string` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `fragmentSource`, `vertexSource`) => `Object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| number \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ((options: TWebGLPipelineState) =\> TWebGLProgramCacheItem) \| ... 22 more ... \| undefined \| (`value`) => `void` \| (`options`) => `void` \| () => `number`[]

#### Returns

`undefined` \| `string` \| `number` \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](../../../type-aliases/TWebGLAttributeLocationMap.md) \| (`options`) => [`TWebGLProgramCacheItem`](../../../type-aliases/TWebGLProgramCacheItem.md) \| (`options`?) => `boolean` \| [`FabricImage`](../../../classes/FabricImage.md)\<`Partial`\<[`ImageProps`](../../../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../../../interfaces/SerializedImageProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\> \| () => `Object` \| () => `Object` \| (`backend`, `image`) => `null` \| `WebGLTexture` \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](../../../type-aliases/TWebGLUniformLocationMap.md) \| (`gl`, `uniformLocations`) => `void` \| () => `string` \| () => `string` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `fragmentSource`, `vertexSource`) => `Object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| number \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ((options: TWebGLPipelineState) =\> TWebGLProgramCacheItem) \| ... 22 more ... \| undefined \| (`value`) => `void` \| (`options`) => `void` \| () => `number`[]

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

src/filters/BlendImage.ts:173

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

#### Inherited from

[`BaseFilter`](BaseFilter.md).[`isNeutralState`](BaseFilter.md#isneutralstate)

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

src/filters/BlendImage.ts:189

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

##### alpha

> **alpha**: `number`

##### image

> **image**: `Pick`\<`Omit`\<`Partial`\<[`ImageProps`](../../../interfaces/ImageProps.md)\> & [`TClassProperties`](../../../type-aliases/TClassProperties.md)\<[`FabricImage`](../../../classes/FabricImage.md)\<`Partial`\<[`ImageProps`](../../../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../../../interfaces/SerializedImageProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\>\>, keyof [`SerializedImageProps`](../../../interfaces/SerializedImageProps.md)\>, `never`\> & [`SerializedImageProps`](../../../interfaces/SerializedImageProps.md)

##### mode

> **mode**: `TBlendImageMode`

##### type

> **type**: `string`

#### Overrides

[`BaseFilter`](BaseFilter.md).[`toObject`](BaseFilter.md#toobject)

#### Source

src/filters/BlendImage.ts:202

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

Create filter instance from an object representation

#### Parameters

• **object**: `Record`\<`string`, `any`\>

Object to create an instance from

• **options?**

• **options\.signal?**: `AbortSignal`

handle aborting image loading, see https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal

#### Returns

`Promise`\<[`BaseFilter`](BaseFilter.md)\>

#### Overrides

[`BaseFilter`](BaseFilter.md).[`fromObject`](BaseFilter.md#fromobject)

#### Static

#### Source

src/filters/BlendImage.ts:219
