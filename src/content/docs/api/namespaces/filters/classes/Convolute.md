---
editUrl: false
next: false
prev: false
title: "Convolute"
---

Adapted from <a href="http://www.html5rocks.com/en/tutorials/canvas/imagefilters/">html5rocks article</a>

## Examples

```ts
const filter = new Convolute({
  matrix: [ 0, -1,  0,
           -1,  5, -1,
            0, -1,  0 ]
});
object.filters.push(filter);
object.applyFilters();
canvas.renderAll();
```

```ts
const filter = new Convolute({
  matrix: [ 1/9, 1/9, 1/9,
            1/9, 1/9, 1/9,
            1/9, 1/9, 1/9 ]
});
object.filters.push(filter);
object.applyFilters();
canvas.renderAll();
```

```ts
const filter = new Convolute({
  matrix: [ 1,   1,  1,
            1, 0.7, -1,
           -1,  -1, -1 ]
});
object.filters.push(filter);
object.applyFilters();
canvas.renderAll();
```

```ts
const filter = new Convolute({
  opaque: true,
  matrix: [ 1,   1,  1,
            1, 0.7, -1,
           -1,  -1, -1 ]
});
object.filters.push(filter);
object.applyFilters();
canvas.renderAll();
```

## Extends

- [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)

## Constructors

### new Convolute()

> **new Convolute**(`options`?): [`Convolute`](/api/namespaces/filters/classes/convolute/)

Constructor

#### Parameters

• **options?**: `Record`\<`string`, `any`\> = `{}`

Options object

#### Returns

[`Convolute`](/api/namespaces/filters/classes/convolute/)

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`constructor`](/api/namespaces/filters/classes/basefilter/#constructors)

#### Defined in

src/filters/BaseFilter.ts:58

## Properties

### matrix

> **matrix**: `number`[]

#### Defined in

src/filters/Convolute.ts:61

***

### opaque

> **opaque**: `boolean`

#### Defined in

src/filters/Convolute.ts:56

***

### defaults

> `static` **defaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`Convolute`](/api/namespaces/filters/classes/convolute/)\>\> = `convoluteDefaultValues`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`defaults`](/api/namespaces/filters/classes/basefilter/#defaults)

#### Defined in

src/filters/Convolute.ts:65

***

### type

> `static` **type**: `string` = `'Convolute'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`type`](/api/namespaces/filters/classes/basefilter/#type)

#### Defined in

src/filters/Convolute.ts:63

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

Apply this filter to the input image data provided.

Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/) \| [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`applyTo`](/api/namespaces/filters/classes/basefilter/#applyto)

#### Defined in

src/filters/BaseFilter.ts:265

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

src/filters/Convolute.ts:83

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

> **getCacheKey**(): `"Convolute_3_1"` \| `"Convolute_3_0"` \| `"Convolute_5_1"` \| `"Convolute_5_0"` \| `"Convolute_7_1"` \| `"Convolute_7_0"` \| `"Convolute_9_1"` \| `"Convolute_9_0"`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`"Convolute_3_1"` \| `"Convolute_3_0"` \| `"Convolute_5_1"` \| `"Convolute_5_0"` \| `"Convolute_7_1"` \| `"Convolute_7_0"` \| `"Convolute_9_1"` \| `"Convolute_9_0"`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getCacheKey`](/api/namespaces/filters/classes/basefilter/#getcachekey)

#### Defined in

src/filters/Convolute.ts:67

***

### getFragmentSource()

> **getFragmentSource**(): `string`

#### Returns

`string`

#### Overrides

`BaseFilter.getFragmentSource`

#### Defined in

src/filters/Convolute.ts:73

***

### getMainParameter()

> **getMainParameter**(): `undefined` \| `string` \| `boolean` \| `number`[] \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/) \| (`options`) => [`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/) \| (`options`?) => `boolean` \| () => `object` \| () => `object` \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/) \| (`gl`, `uniformLocations`) => `void` \| () => `"Convolute_3_1"` \| `"Convolute_3_0"` \| `"Convolute_5_1"` \| `"Convolute_5_0"` \| `"Convolute_7_1"` \| `"Convolute_7_0"` \| `"Convolute_9_1"` \| `"Convolute_9_0"` \| () => `string` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `fragmentSource`, `vertexSource`) => `object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| boolean \| number\[\] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 20 more ... \| undefined \| (`value`) => `void` \| (`options`) => `void`

#### Returns

`undefined` \| `string` \| `boolean` \| `number`[] \| (`gl`, `program`) => [`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/) \| (`options`) => [`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/) \| (`options`?) => `boolean` \| () => `object` \| () => `object` \| (`gl`, `program`) => [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/) \| (`gl`, `uniformLocations`) => `void` \| () => `"Convolute_3_1"` \| `"Convolute_3_0"` \| `"Convolute_5_1"` \| `"Convolute_5_0"` \| `"Convolute_7_1"` \| `"Convolute_7_0"` \| `"Convolute_9_1"` \| `"Convolute_9_0"` \| () => `string` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `fragmentSource`, `vertexSource`) => `object` \| (`gl`, `attributeLocations`, `aPositionData`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`options`) => `void` \| (`gl`, `texture`, `textureUnit`) => `void` \| (`gl`, `textureUnit`) => `void` \| () => string \| boolean \| number\[\] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 20 more ... \| undefined \| (`value`) => `void` \| (`options`) => `void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getMainParameter`](/api/namespaces/filters/classes/basefilter/#getmainparameter)

#### Defined in

src/filters/BaseFilter.ts:351

***

### getUniformLocations()

> **getUniformLocations**(`gl`, `program`): [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

Return WebGL uniform locations for this filter's shader.

#### Parameters

• **gl**: `WebGLRenderingContext`

The GL canvas context used to compile this filter's shader.

• **program**: `WebGLProgram`

This filter's compiled shader program.

#### Returns

[`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getUniformLocations`](/api/namespaces/filters/classes/basefilter/#getuniformlocations)

#### Defined in

src/filters/Convolute.ts:148

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

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`isNeutralState`](/api/namespaces/filters/classes/basefilter/#isneutralstate)

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

src/filters/Convolute.ts:166

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

##### matrix

> **matrix**: `number`[]

##### opaque

> **opaque**: `boolean`

##### type

> **type**: `string`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`toObject`](/api/namespaces/filters/classes/basefilter/#toobject)

#### Defined in

src/filters/Convolute.ts:177

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
