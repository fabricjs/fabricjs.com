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

- [`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/)\<`"HueRotation"`, `HueRotationOwnProps`\>

## Constructors

### new HueRotation()

> **new HueRotation**(`options`?): [`HueRotation`](/api/namespaces/filters/classes/huerotation/)

Constructor

#### Parameters

• **options?**: `object` & `Partial`\<`HueRotationOwnProps`\> & `Record`\<`string`, `any`\> = `{}`

Options object

#### Returns

[`HueRotation`](/api/namespaces/filters/classes/huerotation/)

#### Inherited from

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`constructor`](/api/namespaces/filters/classes/colormatrix/#constructors)

#### Defined in

src/filters/BaseFilter.ts:56

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

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`colorsOnly`](/api/namespaces/filters/classes/colormatrix/#colorsonly)

#### Defined in

src/filters/ColorMatrix.ts:56

***

### matrix

> **matrix**: [`TMatColorMatrix`](/api/type-aliases/tmatcolormatrix/)

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

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`matrix`](/api/namespaces/filters/classes/colormatrix/#matrix)

#### Defined in

src/filters/ColorMatrix.ts:48

***

### rotation

> **rotation**: `number`

HueRotation value, from -1 to 1.

#### Defined in

src/filters/HueRotation.ts:31

***

### defaults

> `static` **defaults**: `HueRotationOwnProps` = `hueRotationDefaultValues`

#### Overrides

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`defaults`](/api/namespaces/filters/classes/colormatrix/#defaults)

#### Defined in

src/filters/HueRotation.ts:35

***

### type

> `static` **type**: `string` = `'HueRotation'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`type`](/api/namespaces/filters/classes/colormatrix/#type)

#### Defined in

src/filters/HueRotation.ts:33

***

### uniformLocations

> `static` **uniformLocations**: `string`[]

Contains the uniform locations for the fragment shader.
uStepW and uStepH are handled by the BaseFilter, each filter class
needs to specify all the one that are needed

#### Inherited from

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`uniformLocations`](/api/namespaces/filters/classes/colormatrix/#uniformlocations)

#### Defined in

src/filters/ColorMatrix.ts:62

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

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`type`](/api/namespaces/filters/classes/colormatrix/#type-1)

#### Defined in

src/filters/BaseFilter.ts:30

## Methods

### \_setupFrameBuffer()

> **\_setupFrameBuffer**(`options`): `void`

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`_setupFrameBuffer`](/api/namespaces/filters/classes/colormatrix/#_setupframebuffer)

#### Defined in

src/filters/BaseFilter.ts:204

***

### \_swapTextures()

> **\_swapTextures**(`options`): `void`

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`_swapTextures`](/api/namespaces/filters/classes/colormatrix/#_swaptextures)

#### Defined in

src/filters/BaseFilter.ts:231

***

### applyTo()

> **applyTo**(`options`): `void`

Apply this filter to the input image data provided.

Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/) \| [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Overrides

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`applyTo`](/api/namespaces/filters/classes/colormatrix/#applyto)

#### Defined in

src/filters/HueRotation.ts:60

***

### applyTo2d()

> **applyTo2d**(`options`): `void`

Apply the ColorMatrix operation to a Uint8Array representing the pixels of an image.

#### Parameters

• **options**: [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`applyTo2d`](/api/namespaces/filters/classes/colormatrix/#applyto2d)

#### Defined in

src/filters/ColorMatrix.ts:74

***

### applyToWebGL()

> **applyToWebGL**(`options`): `void`

Apply this filter using webgl.

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`applyToWebGL`](/api/namespaces/filters/classes/colormatrix/#applytowebgl)

#### Defined in

src/filters/BaseFilter.ts:314

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

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`bindAdditionalTexture`](/api/namespaces/filters/classes/colormatrix/#bindadditionaltexture)

#### Defined in

src/filters/BaseFilter.ts:333

***

### calculateMatrix()

> **calculateMatrix**(): `void`

#### Returns

`void`

#### Defined in

src/filters/HueRotation.ts:37

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

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`createHelpLayer`](/api/namespaces/filters/classes/colormatrix/#createhelplayer)

#### Defined in

src/filters/BaseFilter.ts:369

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

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`createProgram`](/api/namespaces/filters/classes/colormatrix/#createprogram)

#### Defined in

src/filters/BaseFilter.ts:82

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

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`getAttributeLocations`](/api/namespaces/filters/classes/colormatrix/#getattributelocations)

#### Defined in

src/filters/BaseFilter.ts:152

***

### getCacheKey()

> **getCacheKey**(): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Inherited from

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`getCacheKey`](/api/namespaces/filters/classes/colormatrix/#getcachekey)

#### Defined in

src/filters/BaseFilter.ts:283

***

### getFragmentSource()

> **getFragmentSource**(): `string`

#### Returns

`string`

#### Inherited from

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`getFragmentSource`](/api/namespaces/filters/classes/colormatrix/#getfragmentsource)

#### Defined in

src/filters/ColorMatrix.ts:64

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

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`getUniformLocations`](/api/namespaces/filters/classes/colormatrix/#getuniformlocations)

#### Defined in

src/filters/BaseFilter.ts:168

***

### getVertexSource()

> **getVertexSource**(): `string`

#### Returns

`string`

#### Inherited from

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`getVertexSource`](/api/namespaces/filters/classes/colormatrix/#getvertexsource)

#### Defined in

src/filters/BaseFilter.ts:71

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

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`isNeutralState`](/api/namespaces/filters/classes/colormatrix/#isneutralstate)

#### Defined in

src/filters/HueRotation.ts:56

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

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`retrieveShader`](/api/namespaces/filters/classes/colormatrix/#retrieveshader)

#### Defined in

src/filters/BaseFilter.ts:294

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

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`sendAttributeData`](/api/namespaces/filters/classes/colormatrix/#sendattributedata)

#### Defined in

src/filters/BaseFilter.ts:191

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

#### Inherited from

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`sendUniformData`](/api/namespaces/filters/classes/colormatrix/#senduniformdata)

#### Defined in

src/filters/ColorMatrix.ts:106

***

### toJSON()

> **toJSON**(): `object` & `HueRotationOwnProps`

Returns a JSON representation of an instance

#### Returns

`object` & `HueRotationOwnProps`

JSON

#### Inherited from

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`toJSON`](/api/namespaces/filters/classes/colormatrix/#tojson)

#### Defined in

src/filters/BaseFilter.ts:401

***

### toObject()

> **toObject**(): `object`

Returns object representation of an instance

#### Returns

`object`

Object representation of an instance

##### rotation

> **rotation**: `number`

##### type

> **type**: `"HueRotation"`

#### Overrides

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`toObject`](/api/namespaces/filters/classes/colormatrix/#toobject)

#### Defined in

src/filters/HueRotation.ts:66

***

### unbindAdditionalTexture()

> **unbindAdditionalTexture**(`gl`, `textureUnit`): `void`

#### Parameters

• **gl**: `WebGLRenderingContext`

• **textureUnit**: `number`

#### Returns

`void`

#### Inherited from

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`unbindAdditionalTexture`](/api/namespaces/filters/classes/colormatrix/#unbindadditionaltexture)

#### Defined in

src/filters/BaseFilter.ts:344

***

### fromObject()

> `static` **fromObject**(`__namedParameters`, `options`): `Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`, `object`\>\>

#### Parameters

• **\_\_namedParameters**: `Record`\<`string`, `any`\>

• **options**: [`Abortable`](/api/type-aliases/abortable/)

#### Returns

`Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`, `object`\>\>

#### Inherited from

[`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/).[`fromObject`](/api/namespaces/filters/classes/colormatrix/#fromobject)

#### Defined in

src/filters/BaseFilter.ts:406
