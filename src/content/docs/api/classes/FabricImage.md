---
editUrl: false
next: false
prev: false
title: "FabricImage"
---

## Tutorial

[http://fabricjs.com/fabric-intro-part-1#images](http://fabricjs.com/fabric-intro-part-1#images)

## Extends

- [`FabricObject`](FabricObject.md)\<`Props`, `SProps`, `EventSpec`\>

## Type parameters

• **Props** extends [`TOptions`](../type-aliases/TOptions.md)\<[`ImageProps`](../interfaces/ImageProps.md)\> = `Partial`\<[`ImageProps`](../interfaces/ImageProps.md)\>

• **SProps** extends [`SerializedImageProps`](../interfaces/SerializedImageProps.md) = [`SerializedImageProps`](../interfaces/SerializedImageProps.md)

• **EventSpec** extends [`ObjectEvents`](../interfaces/ObjectEvents.md) = [`ObjectEvents`](../interfaces/ObjectEvents.md)

## Implements

- [`ImageProps`](../interfaces/ImageProps.md)

## Constructors

### new FabricImage(elementId, options)

> **new FabricImage**\<`Props`, `SProps`, `EventSpec`\>(`elementId`, `options`?): [`FabricImage`](FabricImage.md)\<`Props`, `SProps`, `EventSpec`\>

Constructor
Image can be initialized with any canvas drawable or a string.
The string should be a url and will be loaded as an image.
Canvas and Image element work out of the box, while videos require extra code to work.
Please check video element events for seeking.

#### Parameters

• **elementId**: `string`

• **options?**: `Props`

Options object

#### Returns

[`FabricImage`](FabricImage.md)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

[`FabricObject`](FabricObject.md).[`constructor`](FabricObject.md#constructors)

#### Source

src/shapes/Image.ts:198

### new FabricImage(element, options)

> **new FabricImage**\<`Props`, `SProps`, `EventSpec`\>(`element`, `options`?): [`FabricImage`](FabricImage.md)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **element**: [`ImageSource`](../type-aliases/ImageSource.md)

• **options?**: `Props`

#### Returns

[`FabricImage`](FabricImage.md)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

`FabricObject<Props, SProps, EventSpec>.constructor`

#### Source

src/shapes/Image.ts:199

## Properties

### \_element

> **\_element**: [`ImageSource`](../type-aliases/ImageSource.md)

#### Source

src/shapes/Image.ts:173

***

### \_filteredEl?

> **`optional`** **\_filteredEl**: `HTMLCanvasElement`

#### Source

src/shapes/Image.ts:174

***

### \_originalElement

> **\_originalElement**: [`ImageSource`](../type-aliases/ImageSource.md)

#### Source

src/shapes/Image.ts:175

***

### cacheKey

> **cacheKey**: `string`

key used to retrieve the texture representing this image

#### Since

2.0.0

#### Default

```ts

```

#### Source

src/shapes/Image.ts:139

***

### cropX

> **cropX**: `number`

Image crop in pixels from original image size.

#### Since

2.0.0

#### Default

```ts

```

#### Implementation of

[`ImageProps`](../interfaces/ImageProps.md).[`cropX`](../interfaces/ImageProps.md#cropx)

#### Source

src/shapes/Image.ts:147

***

### cropY

> **cropY**: `number`

Image crop in pixels from original image size.

#### Since

2.0.0

#### Default

```ts

```

#### Implementation of

[`ImageProps`](../interfaces/ImageProps.md).[`cropY`](../interfaces/ImageProps.md#cropy)

#### Source

src/shapes/Image.ts:155

***

### filters

> **filters**: [`BaseFilter`](../namespaces/filters/classes/BaseFilter.md)[]

#### Implementation of

[`ImageProps`](../interfaces/ImageProps.md).[`filters`](../interfaces/ImageProps.md#filters)

#### Source

src/shapes/Image.ts:170

***

### imageSmoothing

> **imageSmoothing**: `boolean`

Indicates whether this canvas will use image smoothing when painting this image.
Also influence if the cacheCanvas for this image uses imageSmoothing

#### Since

4.0.0-beta.11

#### Default

```ts

```

#### Implementation of

[`ImageProps`](../interfaces/ImageProps.md).[`imageSmoothing`](../interfaces/ImageProps.md#imagesmoothing)

#### Source

src/shapes/Image.ts:164

***

### minimumScaleTrigger

> **minimumScaleTrigger**: `number`

minimum scale factor under which any resizeFilter is triggered to resize the image
0 will disable the automatic resize. 1 will trigger automatically always.
number bigger than 1 are not implemented yet.

#### Implementation of

[`ImageProps`](../interfaces/ImageProps.md).[`minimumScaleTrigger`](../interfaces/ImageProps.md#minimumscaletrigger)

#### Source

src/shapes/Image.ts:131

***

### preserveAspectRatio

> **preserveAspectRatio**: `string`

#### Source

src/shapes/Image.ts:166

***

### resizeFilter

> **resizeFilter**: [`Resize`](../namespaces/filters/classes/Resize.md)

#### Implementation of

[`ImageProps`](../interfaces/ImageProps.md).[`resizeFilter`](../interfaces/ImageProps.md#resizefilter)

#### Source

src/shapes/Image.ts:171

***

### srcFromAttribute

> **srcFromAttribute**: `boolean`

When calling [FabricImage.getSrc](../../../../api/classes/fabricimage/#getsrc), return value from element src with `element.getAttribute('src')`.
This allows for relative urls as image src.

#### Since

2.7.0

#### Default

```ts
false
```

#### Implementation of

[`ImageProps`](../interfaces/ImageProps.md).[`srcFromAttribute`](../interfaces/ImageProps.md#srcfromattribute)

#### Source

src/shapes/Image.ts:93

***

### ATTRIBUTE\_NAMES

> **`static`** **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [FabricImage.fromElement](../../../../api/classes/fabricimage/#fromelement))

#### Static

#### See

[http://www.w3.org/TR/SVG/struct.html#ImageElement](http://www.w3.org/TR/SVG/struct.html#ImageElement)

#### Source

src/shapes/Image.ts:773

***

### CSS\_CANVAS

> **`static`** **CSS\_CANVAS**: `string` = `'canvas-img'`

Default CSS class name for canvas

#### Static

#### Default

```ts

```

#### Source

src/shapes/Image.ts:766

***

### cacheProperties

> **`static`** **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Overrides

[`FabricObject`](FabricObject.md).[`cacheProperties`](FabricObject.md#cacheproperties)

#### Source

src/shapes/Image.ts:179

***

### ownDefaults

> **`static`** **ownDefaults**: `Partial`\<[`TClassProperties`](../type-aliases/TClassProperties.md)\<[`FabricImage`](FabricImage.md)\<`Partial`\<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>\> = `imageDefaultValues`

#### Overrides

[`FabricObject`](FabricObject.md).[`ownDefaults`](FabricObject.md#owndefaults)

#### Source

src/shapes/Image.ts:181

***

### type

> **`static`** **type**: `string` = `'Image'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`FabricObject`](FabricObject.md).[`type`](FabricObject.md#type)

#### Source

src/shapes/Image.ts:177

## Methods

### \_renderFill()

> **\_renderFill**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Overrides

`FabricObject._renderFill`

#### Source

src/shapes/Image.ts:626

***

### \_toSVG()

> **\_toSVG**(): `string`[]

Returns svg representation of an instance

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Overrides

[`FabricObject`](FabricObject.md).[`_toSVG`](FabricObject.md#_tosvg)

#### Source

src/shapes/Image.ts:363

***

### applyFilters()

> **applyFilters**(`filters`): `void`

Applies filters assigned to this image (from "filters" array) or from filter param

#### Parameters

• **filters**: [`BaseFilter`](../namespaces/filters/classes/BaseFilter.md)[]= `undefined`

to be applied

#### Returns

`void`

#### Method

applyFilters

#### Source

src/shapes/Image.ts:523

***

### applyResizeFilters()

> **applyResizeFilters**(): `void`

#### Returns

`void`

#### Source

src/shapes/Image.ts:480

***

### dispose()

> **dispose**(): `void`

Delete textures, reference to elements and eventually JSDOM cleanup

#### Returns

`void`

#### Overrides

[`FabricObject`](FabricObject.md).[`dispose`](FabricObject.md#dispose)

#### Source

src/shapes/Image.ts:260

***

### drawCacheOnCanvas()

> **drawCacheOnCanvas**(`this`, `ctx`): `void`

Paint the cached copy of the object on the target context.
it will set the imageSmoothing for the draw operation

#### Parameters

• **this**: `TCachedFabricObject`\<[`FabricImage`](FabricImage.md)\<`Partial`\<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Overrides

[`FabricObject`](FabricObject.md).[`drawCacheOnCanvas`](FabricObject.md#drawcacheoncanvas)

#### Source

src/shapes/Image.ts:601

***

### getCrossOrigin()

> **getCrossOrigin**(): `null` \| `string`

Get the crossOrigin value (of the corresponding image element)

#### Returns

`null` \| `string`

#### Source

src/shapes/Image.ts:278

***

### getElement()

> **getElement**(): [`ImageSource`](../type-aliases/ImageSource.md)

Returns image element which this instance if based on

#### Returns

[`ImageSource`](../type-aliases/ImageSource.md)

#### Source

src/shapes/Image.ts:217

***

### getOriginalSize()

> **getOriginalSize**(): `Object`

Returns original size of an image

#### Returns

`Object`

##### height

> **height**: `any`

##### width

> **width**: `any`

#### Source

src/shapes/Image.ts:288

***

### getSrc()

> **getSrc**(`filtered`?): `string`

Returns source of an image

#### Parameters

• **filtered?**: `boolean`

indicates if the src is needed for svg

#### Returns

`string`

Source of an image

#### Source

src/shapes/Image.ts:433

***

### ~~getSvgSrc()~~

> **getSvgSrc**(`filtered`?): `string`

Alias for getSrc

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **filtered?**: `boolean`

#### Returns

`string`

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Source

src/shapes/Image.ts:455

***

### hasCrop()

> **hasCrop**(): `boolean`

Returns true if an image has crop applied, inspecting values of cropX,cropY,width,height.

#### Returns

`boolean`

#### Source

src/shapes/Image.ts:349

***

### removeTexture()

> **removeTexture**(`key`): `void`

Delete a single texture if in webgl mode

#### Parameters

• **key**: `string`

#### Returns

`void`

#### Source

src/shapes/Image.ts:250

***

### setElement()

> **setElement**(`element`, `size`?): `void`

Sets image element for this instance to a specified one.
If filters defined they are applied to new image.
You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.

#### Parameters

• **element**: [`ImageSource`](../type-aliases/ImageSource.md)

• **size?**: `Partial`\<[`TSize`](../type-aliases/TSize.md)\>= `{}`

Options object

#### Returns

`void`

#### Source

src/shapes/Image.ts:228

***

### setSrc()

> **setSrc**(`src`, `options`?): `Promise`\<`void`\>

Loads and sets source of an image\
**IMPORTANT**: It is recommended to abort loading tasks before calling this method to prevent race conditions and unnecessary networking

#### Parameters

• **src**: `string`

Source string (URL)

• **options?**: [`LoadImageOptions`](../namespaces/util/type-aliases/LoadImageOptions.md)= `{}`

Options object

#### Returns

`Promise`\<`void`\>

#### Source

src/shapes/Image.ts:465

***

### shouldCache()

> **shouldCache**(): `boolean`

Decide if the object should cache or not. Create its own cache level
needsItsOwnCache should be used when the object drawing method requires
a cache step. None of the fabric classes requires it.
Generally you do not cache objects in groups because the group outside is cached.
This is the special image version where we would like to avoid caching where possible.
Essentially images do not benefit from caching. They may require caching, and in that
case we do it. Also caching an image usually ends in a loss of details.
A full performance audit should be done.

#### Returns

`boolean`

#### Overrides

[`FabricObject`](FabricObject.md).[`shouldCache`](FabricObject.md#shouldcache)

#### Source

src/shapes/Image.ts:622

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

• **T** extends `Omit`\<`Props` & [`TClassProperties`](../type-aliases/TClassProperties.md)\<[`FabricImage`](FabricImage.md)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\>

• **K** extends `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[]= `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

Object representation of an instance

#### Overrides

[`FabricObject`](FabricObject.md).[`toObject`](FabricObject.md#toobject)

#### Source

src/shapes/Image.ts:326

***

### toString()

> **toString**(): `string`

Returns string representation of an instance

#### Returns

`string`

String representation of an instance

#### Overrides

[`FabricObject`](FabricObject.md).[`toString`](FabricObject.md#tostring)

#### Source

src/shapes/Image.ts:476

***

### fromElement()

> **`static`** **fromElement**(`element`, `options`?, `cssRules`?): `Promise`\<`null` \| [`FabricImage`](FabricImage.md)\<`Partial`\<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

Returns [FabricImage](../../../../api/classes/fabricimage) instance from an SVG element

#### Parameters

• **element**: `HTMLElement`

Element to parse

• **options?**: [`Abortable`](../type-aliases/Abortable.md)= `{}`

Options object

• **cssRules?**: `CSSRules`

#### Returns

`Promise`\<`null` \| [`FabricImage`](FabricImage.md)\<`Partial`\<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

#### Static

#### Source

src/shapes/Image.ts:840

***

### fromObject()

> **`static`** **fromObject**\<`T`\>(`object`, `options`?): `Promise`\<[`FabricImage`](FabricImage.md)\<`Omit`\<`T`, `"type"` \| `"crossOrigin"` \| `"filters"` \| `"resizeFilter"` \| `"src"`\> & `Object`, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

Creates an instance of FabricImage from its object representation

#### Type parameters

• **T** extends [`TOptions`](../type-aliases/TOptions.md)\<[`SerializedImageProps`](../interfaces/SerializedImageProps.md)\>

#### Parameters

• **object**: `T`

Object to create an instance from

• **options?**: [`Abortable`](../type-aliases/Abortable.md)= `{}`

Options object

#### Returns

`Promise`\<[`FabricImage`](FabricImage.md)\<`Omit`\<`T`, `"type"` \| `"crossOrigin"` \| `"filters"` \| `"resizeFilter"` \| `"src"`\> & `Object`, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

#### Overrides

[`FabricObject`](FabricObject.md).[`fromObject`](FabricObject.md#fromobject)

#### Static

#### Source

src/shapes/Image.ts:793

***

### fromURL()

> **`static`** **fromURL**\<`T`\>(`url`, `__namedParameters`?, `imageOptions`?): `Promise`\<[`FabricImage`](FabricImage.md)\<`Partial`\<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

Creates an instance of Image from an URL string

#### Type parameters

• **T** extends [`TOptions`](../type-aliases/TOptions.md)\<[`ImageProps`](../interfaces/ImageProps.md)\>

#### Parameters

• **url**: `string`

URL to create an image from

• **\_\_namedParameters?**: [`LoadImageOptions`](../namespaces/util/type-aliases/LoadImageOptions.md)= `{}`

• **imageOptions?**: `T`

#### Returns

`Promise`\<[`FabricImage`](FabricImage.md)\<`Partial`\<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

#### Static

#### Source

src/shapes/Image.ts:822

***

### getDefaults()

> **`static`** **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

[`FabricObject`](FabricObject.md).[`getDefaults`](FabricObject.md#getdefaults)

#### Source

src/shapes/Image.ts:183
