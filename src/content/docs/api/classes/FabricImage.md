---
editUrl: false
next: false
prev: false
title: "FabricImage"
---

## Tutorial

[http://fabricjs.com/fabric-intro-part-1#images](http://fabricjs.com/fabric-intro-part-1#images)

## Extends

- [`FabricObject`](/api/classes/fabricobject/)\<`Props`, `SProps`, `EventSpec`\>

## Type Parameters

• **Props** *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`ImageProps`](/api/interfaces/imageprops/)\> = `Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>

• **SProps** *extends* [`SerializedImageProps`](/api/interfaces/serializedimageprops/) = [`SerializedImageProps`](/api/interfaces/serializedimageprops/)

• **EventSpec** *extends* [`ObjectEvents`](/api/interfaces/objectevents/) = [`ObjectEvents`](/api/interfaces/objectevents/)

## Implements

- [`ImageProps`](/api/interfaces/imageprops/)

## Constructors

### new FabricImage()

> **new FabricImage**\<`Props`, `SProps`, `EventSpec`\>(`elementId`, `options`?): [`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>

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

[`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

[`FabricObject`](/api/classes/fabricobject/).[`constructor`](/api/classes/fabricobject/#constructors)

#### Defined in

[src/shapes/Image.ts:197](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L197)

### new FabricImage()

> **new FabricImage**\<`Props`, `SProps`, `EventSpec`\>(`element`, `options`?): [`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **element**: [`ImageSource`](/api/type-aliases/imagesource/)

• **options?**: `Props`

#### Returns

[`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

`FabricObject<Props, SProps, EventSpec>.constructor`

#### Defined in

[src/shapes/Image.ts:198](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L198)

## Properties

### \_\_corner?

> `optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`__corner`](/api/classes/fabricobject/#__corner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:104](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L104)

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`_controlsVisibility`](/api/classes/fabricobject/#_controlsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:111](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L111)

***

### \_element

> **\_element**: [`ImageSource`](/api/type-aliases/imagesource/)

#### Defined in

[src/shapes/Image.ts:172](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L172)

***

### \_filteredEl?

> `optional` **\_filteredEl**: `HTMLCanvasElement`

#### Defined in

[src/shapes/Image.ts:173](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L173)

***

### \_originalElement

> **\_originalElement**: [`ImageSource`](/api/type-aliases/imagesource/)

#### Defined in

[src/shapes/Image.ts:174](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L174)

***

### \_scaling?

> `optional` **\_scaling**: `boolean`

A boolean used from the gesture module to keep tracking of a scaling
action when there is no scaling transform in place.
This is an edge case and is used twice in all codebase.
Probably added to keep track of some performance issues

#### TODO

use git blame to investigate why it was added
DON'T USE IT. WE WILL TRY TO REMOVE IT

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`_scaling`](/api/classes/fabricobject/#_scaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:133](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L133)

***

### aCoords

> **aCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/fabricimage/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/fabricimage/#calcacoords)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`aCoords`](/api/classes/fabricobject/#acoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:51](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L51)

***

### absolutePositioned

> **absolutePositioned**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will have its top and left relative to canvas, and will
not be influenced by the object transform. This will make the clipPath relative
to the canvas, but clipping just a particular object.
WARNING this is beta, this feature may change or be renamed.
since 2.4.0

#### Default

```ts
false
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`absolutePositioned`](/api/interfaces/imageprops/#absolutepositioned)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`absolutePositioned`](/api/classes/fabricobject/#absolutepositioned)

#### Defined in

[src/shapes/Object/Object.ts:166](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L166)

***

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`angle`](/api/interfaces/imageprops/#angle)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`angle`](/api/classes/fabricobject/#angle)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:29](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L29)

***

### backgroundColor

> **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`backgroundColor`](/api/interfaces/imageprops/#backgroundcolor)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`backgroundColor`](/api/classes/fabricobject/#backgroundcolor)

#### Defined in

[src/shapes/Object/Object.ts:153](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L153)

***

### borderColor

> **borderColor**: `string`

Color of controlling borders of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`borderColor`](/api/interfaces/imageprops/#bordercolor)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`borderColor`](/api/classes/fabricobject/#bordercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:73](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L73)

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`borderDashArray`](/api/interfaces/imageprops/#borderdasharray)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`borderDashArray`](/api/classes/fabricobject/#borderdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L74)

***

### borderOpacityWhenMoving

> **borderOpacityWhenMoving**: `number`

Opacity of object's controlling borders when object is active and moving

#### Default

```ts
0.4
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`borderOpacityWhenMoving`](/api/interfaces/imageprops/#borderopacitywhenmoving)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`borderOpacityWhenMoving`](/api/classes/fabricobject/#borderopacitywhenmoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L75)

***

### borderScaleFactor

> **borderScaleFactor**: `number`

Scale factor of object's controlling borders
bigger number will make a thicker border
border is 1, so this is basically a border thickness
since there is no way to change the border itself.

#### Default

```ts
1
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`borderScaleFactor`](/api/interfaces/imageprops/#borderscalefactor)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`borderScaleFactor`](/api/classes/fabricobject/#borderscalefactor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L76)

***

### cacheKey

> **cacheKey**: `string`

key used to retrieve the texture representing this image

#### Since

2.0.0

#### Default

```ts

```

#### Defined in

[src/shapes/Image.ts:138](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L138)

***

### centeredRotation

> **centeredRotation**: `boolean`

When `true` the object will rotate on its center.
When `false` will rotate around the origin point defined by originX and originY.
The value of this property is IGNORED during a transform if the canvas has already
centeredRotation set to `true`
The object method `rotate` will always consider this property and never the canvas's one.

#### Since

1.3.4

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`centeredRotation`](/api/interfaces/imageprops/#centeredrotation)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`centeredRotation`](/api/classes/fabricobject/#centeredrotation)

#### Defined in

[src/shapes/Object/Object.ts:167](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L167)

***

### centeredScaling

> **centeredScaling**: `boolean`

When true, this object will use center point as the origin of transformation
when being scaled via the controls.

#### Since

1.3.4

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`centeredScaling`](/api/interfaces/imageprops/#centeredscaling)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`centeredScaling`](/api/classes/fabricobject/#centeredscaling)

#### Defined in

[src/shapes/Object/Object.ts:168](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L168)

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`clipPath`](/api/interfaces/imageprops/#clippath)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`clipPath`](/api/classes/fabricobject/#clippath)

#### Defined in

[src/shapes/Object/Object.ts:164](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L164)

***

### clipPathId?

> `optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`clipPathId`](/api/classes/fabricobject/#clippathid)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

***

### controls

> **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`controls`](/api/classes/fabricobject/#controls)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:117](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L117)

***

### cornerColor

> **cornerColor**: `string`

Color of controlling corners of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`cornerColor`](/api/interfaces/imageprops/#cornercolor)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`cornerColor`](/api/classes/fabricobject/#cornercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L67)

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`cornerDashArray`](/api/interfaces/imageprops/#cornerdasharray)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`cornerDashArray`](/api/classes/fabricobject/#cornerdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L70)

***

### cornerSize

> **cornerSize**: `number`

Size of object's controlling corners (in pixels)

#### Default

```ts
13
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`cornerSize`](/api/interfaces/imageprops/#cornersize)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`cornerSize`](/api/classes/fabricobject/#cornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:64](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L64)

***

### cornerStrokeColor

> **cornerStrokeColor**: `string`

Color of controlling corners of an object (when it's active and transparentCorners false)

#### Since

1.6.2

#### Default

```ts
null
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`cornerStrokeColor`](/api/interfaces/imageprops/#cornerstrokecolor)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`cornerStrokeColor`](/api/classes/fabricobject/#cornerstrokecolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L68)

***

### ~~cornerStyle~~

> **cornerStyle**: `"circle"` \| `"rect"`

Specify style of control, 'rect' or 'circle'
This is deprecated. In the future there will be a standard control render
And you can swap it with one of the alternative proposed with the control api

#### Since

1.6.2

#### Default

```ts
rect
```

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`cornerStyle`](/api/interfaces/imageprops/#cornerstyle)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`cornerStyle`](/api/classes/fabricobject/#cornerstyle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L69)

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

[`ImageProps`](/api/interfaces/imageprops/).[`cropX`](/api/interfaces/imageprops/#cropx)

#### Defined in

[src/shapes/Image.ts:146](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L146)

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

[`ImageProps`](/api/interfaces/imageprops/).[`cropY`](/api/interfaces/imageprops/#cropy)

#### Defined in

[src/shapes/Image.ts:154](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L154)

***

### dirty

> **dirty**: `boolean`

When set to `true`, object's cache will be rerendered next render call.
since 1.7.0

#### Default

```ts
true
```

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`dirty`](/api/classes/fabricobject/#dirty)

#### Defined in

[src/shapes/Object/Object.ts:193](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L193)

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`evented`](/api/interfaces/imageprops/#evented)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`evented`](/api/classes/fabricobject/#evented)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L81)

***

### excludeFromExport

> **excludeFromExport**: `boolean`

When `true`, object is not exported in OBJECT/JSON

#### Since

1.6.3

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`excludeFromExport`](/api/interfaces/imageprops/#excludefromexport)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`excludeFromExport`](/api/classes/fabricobject/#excludefromexport)

#### Defined in

[src/shapes/Object/Object.ts:160](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L160)

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`fill`](/api/interfaces/imageprops/#fill)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`fill`](/api/classes/fabricobject/#fill)

#### Defined in

[src/shapes/Object/Object.ts:143](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L143)

***

### fillRule

> **fillRule**: `CanvasFillRule`

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

#### Default

```ts
nonzero
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`fillRule`](/api/interfaces/imageprops/#fillrule)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`fillRule`](/api/classes/fabricobject/#fillrule)

#### Defined in

[src/shapes/Object/Object.ts:144](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L144)

***

### filters

> **filters**: [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`, `Record`\<`string`, `any`\>\>[]

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`filters`](/api/interfaces/imageprops/#filters)

#### Defined in

[src/shapes/Image.ts:169](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L169)

***

### flipX

> **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`flipX`](/api/interfaces/imageprops/#flipx)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`flipX`](/api/classes/fabricobject/#flipx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:21](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L21)

***

### flipY

> **flipY**: `boolean`

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`flipY`](/api/interfaces/imageprops/#flipy)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`flipY`](/api/classes/fabricobject/#flipy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:22](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L22)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`globalCompositeOperation`](/api/interfaces/imageprops/#globalcompositeoperation)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`globalCompositeOperation`](/api/classes/fabricobject/#globalcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:152](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L152)

***

### hasBorders

> **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`hasBorders`](/api/interfaces/imageprops/#hasborders)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`hasBorders`](/api/classes/fabricobject/#hasborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L77)

***

### hasControls

> **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`hasControls`](/api/interfaces/imageprops/#hascontrols)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`hasControls`](/api/classes/fabricobject/#hascontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:71](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L71)

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`height`](/api/interfaces/imageprops/#height)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`height`](/api/classes/fabricobject/#height)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:20](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L20)

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`hoverCursor`](/api/interfaces/imageprops/#hovercursor)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`hoverCursor`](/api/classes/fabricobject/#hovercursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:85](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L85)

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

[`ImageProps`](/api/interfaces/imageprops/).[`imageSmoothing`](/api/interfaces/imageprops/#imagesmoothing)

#### Defined in

[src/shapes/Image.ts:163](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L163)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`includeDefaultValues`](/api/interfaces/imageprops/#includedefaultvalues)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`includeDefaultValues`](/api/classes/fabricobject/#includedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:159](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L159)

***

### inverted

> **inverted**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will make the object clip to the outside of the clipPath
since 2.4.0

#### Default

```ts
false
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`inverted`](/api/interfaces/imageprops/#inverted)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`inverted`](/api/classes/fabricobject/#inverted)

#### Defined in

[src/shapes/Object/Object.ts:165](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L165)

***

### isMoving?

> `optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`isMoving`](/api/classes/fabricobject/#ismoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:123](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L123)

***

### left

> **left**: `number`

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [originX](../../../../api/interfaces/fabricobjectprops/#originx)

#### Default

```ts
0
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`left`](/api/interfaces/imageprops/#left)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`left`](/api/classes/fabricobject/#left)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:18](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L18)

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`lockMovementX`](/api/interfaces/imageprops/#lockmovementx)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`lockMovementX`](/api/classes/fabricobject/#lockmovementx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:55](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L55)

***

### lockMovementY

> **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`lockMovementY`](/api/interfaces/imageprops/#lockmovementy)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`lockMovementY`](/api/classes/fabricobject/#lockmovementy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:56](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L56)

***

### lockRotation

> **lockRotation**: `boolean`

When `true`, object rotation is locked

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`lockRotation`](/api/interfaces/imageprops/#lockrotation)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`lockRotation`](/api/classes/fabricobject/#lockrotation)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:57](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L57)

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`lockScalingFlip`](/api/interfaces/imageprops/#lockscalingflip)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`lockScalingFlip`](/api/classes/fabricobject/#lockscalingflip)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:62](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L62)

***

### lockScalingX

> **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`lockScalingX`](/api/interfaces/imageprops/#lockscalingx)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`lockScalingX`](/api/classes/fabricobject/#lockscalingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L58)

***

### lockScalingY

> **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`lockScalingY`](/api/interfaces/imageprops/#lockscalingy)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`lockScalingY`](/api/classes/fabricobject/#lockscalingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:59](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L59)

***

### lockSkewingX

> **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`lockSkewingX`](/api/interfaces/imageprops/#lockskewingx)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`lockSkewingX`](/api/classes/fabricobject/#lockskewingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L60)

***

### lockSkewingY

> **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`lockSkewingY`](/api/interfaces/imageprops/#lockskewingy)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`lockSkewingY`](/api/classes/fabricobject/#lockskewingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L61)

***

### matrixCache?

> `optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`matrixCache`](/api/classes/fabricobject/#matrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:61](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L61)

***

### minScaleLimit

> **minScaleLimit**: `number`

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`minScaleLimit`](/api/interfaces/imageprops/#minscalelimit)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`minScaleLimit`](/api/classes/fabricobject/#minscalelimit)

#### Defined in

[src/shapes/Object/Object.ts:138](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L138)

***

### minimumScaleTrigger

> **minimumScaleTrigger**: `number`

minimum scale factor under which any resizeFilter is triggered to resize the image
0 will disable the automatic resize. 1 will trigger automatically always.
number bigger than 1 are not implemented yet.

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`minimumScaleTrigger`](/api/interfaces/imageprops/#minimumscaletrigger)

#### Defined in

[src/shapes/Image.ts:130](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L130)

***

### moveCursor

> **moveCursor**: `null` \| `string`

Default cursor value used when moving this object on canvas

#### Default

```ts
null
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`moveCursor`](/api/interfaces/imageprops/#movecursor)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`moveCursor`](/api/classes/fabricobject/#movecursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L86)

***

### noScaleCache

> **noScaleCache**: `boolean`

When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
too much and will be redrawn with correct details at the end of scaling.
this setting is performance and application dependant.
default to true
since 1.7.0

#### Default

```ts
true
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`noScaleCache`](/api/interfaces/imageprops/#noscalecache)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`noScaleCache`](/api/classes/fabricobject/#noscalecache)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:50](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L50)

***

### oCoords

> **oCoords**: `Record`\<`string`, `TOCoord`\>

The object's controls' position in viewport coordinates
Calculated by [Control#positionHandler](../../../../api/classes/control/#positionhandler) and [Control#calcCornerCoords](../../../../api/classes/control/#calccornercoords), depending on [padding](../../../../api/classes/fabricobject/#padding).
`corner/touchCorner` describe the 4 points forming the interactive area of the corner.
Used to draw and locate controls.

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`oCoords`](/api/classes/fabricobject/#ocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:94](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L94)

***

### objectCaching

> **objectCaching**: `boolean`

When `true`, object is cached on an additional canvas.
When `false`, object is not cached unless necessary ( clipPath )
default to true

#### Since

1.7.0

#### Default

```ts
true
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`objectCaching`](/api/interfaces/imageprops/#objectcaching)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`objectCaching`](/api/classes/fabricobject/#objectcaching)

#### Defined in

[src/shapes/Object/Object.ts:162](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L162)

***

### opacity

> **opacity**: `number`

Opacity of an object

#### Default

```ts
1
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`opacity`](/api/interfaces/imageprops/#opacity)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`opacity`](/api/classes/fabricobject/#opacity)

#### Defined in

[src/shapes/Object/Object.ts:140](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L140)

***

### originX

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin of transformation of an object (`left`, `center`, `right`  or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'left'
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`originX`](/api/interfaces/imageprops/#originx)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`originX`](/api/classes/fabricobject/#originx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:27](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L27)

***

### originY

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin of transformation of an object (`top`, `center`, `bottom` or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'top'
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`originY`](/api/interfaces/imageprops/#originy)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`originY`](/api/classes/fabricobject/#originy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:28](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L28)

***

### ownMatrixCache?

> `optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`ownMatrixCache`](/api/classes/fabricobject/#ownmatrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:56](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L56)

***

### padding

> **padding**: `number`

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`padding`](/api/interfaces/imageprops/#padding)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`padding`](/api/classes/fabricobject/#padding)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:41](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L41)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`paintFirst`](/api/interfaces/imageprops/#paintfirst)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`paintFirst`](/api/classes/fabricobject/#paintfirst)

#### Defined in

[src/shapes/Object/Object.ts:142](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L142)

***

### parent?

> `optional` **parent**: [`Group`](/api/classes/group/)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`parent`](/api/classes/fabricobject/#parent)

#### Defined in

[src/shapes/Object/StackedObject.ts:38](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/StackedObject.ts#L38)

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`perPixelTargetFind`](/api/interfaces/imageprops/#perpixeltargetfind)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`perPixelTargetFind`](/api/classes/fabricobject/#perpixeltargetfind)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L82)

***

### preserveAspectRatio

> **preserveAspectRatio**: `string`

#### Defined in

[src/shapes/Image.ts:165](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L165)

***

### resizeFilter

> **resizeFilter**: [`Resize`](/api/namespaces/filters/classes/resize/)

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`resizeFilter`](/api/interfaces/imageprops/#resizefilter)

#### Defined in

[src/shapes/Image.ts:170](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L170)

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`scaleX`](/api/interfaces/imageprops/#scalex)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`scaleX`](/api/classes/fabricobject/#scalex)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:23](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L23)

***

### scaleY

> **scaleY**: `number`

Object scale factor (vertical)

#### Default

```ts
1
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`scaleY`](/api/interfaces/imageprops/#scaley)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`scaleY`](/api/classes/fabricobject/#scaley)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:24](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L24)

***

### selectable

> **selectable**: `boolean`

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`selectable`](/api/interfaces/imageprops/#selectable)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`selectable`](/api/classes/fabricobject/#selectable)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:80](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L80)

***

### ~~selectionBackgroundColor~~

> **selectionBackgroundColor**: `string`

Selection Background color of an object. colored layer behind the object when it is active.
does not mix good with globalCompositeOperation methods.

#### Default

```ts

```

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`selectionBackgroundColor`](/api/interfaces/imageprops/#selectionbackgroundcolor)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`selectionBackgroundColor`](/api/classes/fabricobject/#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L78)

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`shadow`](/api/interfaces/imageprops/#shadow)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`shadow`](/api/classes/fabricobject/#shadow)

#### Defined in

[src/shapes/Object/Object.ts:155](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L155)

***

### skewX

> **skewX**: `number`

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`skewX`](/api/interfaces/imageprops/#skewx)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`skewX`](/api/classes/fabricobject/#skewx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:25](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L25)

***

### skewY

> **skewY**: `number`

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`skewY`](/api/interfaces/imageprops/#skewy)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`skewY`](/api/classes/fabricobject/#skewy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:26](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L26)

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

The angle that an object will lock to while rotating.

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`snapAngle`](/api/interfaces/imageprops/#snapangle)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`snapAngle`](/api/classes/fabricobject/#snapangle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:52](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L52)

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`snapThreshold`](/api/interfaces/imageprops/#snapthreshold)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`snapThreshold`](/api/classes/fabricobject/#snapthreshold)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:53](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L53)

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

[`ImageProps`](/api/interfaces/imageprops/).[`srcFromAttribute`](/api/interfaces/imageprops/#srcfromattribute)

#### Defined in

[src/shapes/Image.ts:92](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L92)

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`stroke`](/api/interfaces/imageprops/#stroke)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`stroke`](/api/classes/fabricobject/#stroke)

#### Defined in

[src/shapes/Object/Object.ts:145](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L145)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`strokeDashArray`](/api/interfaces/imageprops/#strokedasharray)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`strokeDashArray`](/api/classes/fabricobject/#strokedasharray)

#### Defined in

[src/shapes/Object/Object.ts:146](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L146)

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Line offset of an object's stroke

#### Default

```ts
0
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`strokeDashOffset`](/api/interfaces/imageprops/#strokedashoffset)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`strokeDashOffset`](/api/classes/fabricobject/#strokedashoffset)

#### Defined in

[src/shapes/Object/Object.ts:147](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L147)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`strokeLineCap`](/api/interfaces/imageprops/#strokelinecap)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`strokeLineCap`](/api/classes/fabricobject/#strokelinecap)

#### Defined in

[src/shapes/Object/Object.ts:148](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L148)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`strokeLineJoin`](/api/interfaces/imageprops/#strokelinejoin)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`strokeLineJoin`](/api/classes/fabricobject/#strokelinejoin)

#### Defined in

[src/shapes/Object/Object.ts:149](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L149)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`strokeMiterLimit`](/api/interfaces/imageprops/#strokemiterlimit)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`strokeMiterLimit`](/api/classes/fabricobject/#strokemiterlimit)

#### Defined in

[src/shapes/Object/Object.ts:150](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L150)

***

### strokeUniform

> **strokeUniform**: `boolean`

When `false`, the stoke width will scale with the object.
When `true`, the stroke will always match the exact pixel size entered for stroke width.
this Property does not work on Text classes or drawing call that uses strokeText,fillText methods
default to false

#### Since

2.6.0

#### Default

```ts
false
```

#### Default

```ts
false
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`strokeUniform`](/api/interfaces/imageprops/#strokeuniform)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`strokeUniform`](/api/classes/fabricobject/#strokeuniform)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:31](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L31)

***

### strokeWidth

> **strokeWidth**: `number`

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`strokeWidth`](/api/interfaces/imageprops/#strokewidth)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`strokeWidth`](/api/classes/fabricobject/#strokewidth)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:30](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L30)

***

### top

> **top**: `number`

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [originY](../../../../api/interfaces/fabricobjectprops/#originy)

#### Default

```ts
0
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`top`](/api/interfaces/imageprops/#top)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`top`](/api/classes/fabricobject/#top)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:17](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L17)

***

### touchCornerSize

> **touchCornerSize**: `number`

Size of object's controlling corners when touch interaction is detected

#### Default

```ts
24
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`touchCornerSize`](/api/interfaces/imageprops/#touchcornersize)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`touchCornerSize`](/api/classes/fabricobject/#touchcornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L65)

***

### transparentCorners

> **transparentCorners**: `boolean`

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

#### Default

```ts
true
```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`transparentCorners`](/api/interfaces/imageprops/#transparentcorners)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`transparentCorners`](/api/classes/fabricobject/#transparentcorners)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L66)

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`visible`](/api/interfaces/imageprops/#visible)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`visible`](/api/classes/fabricobject/#visible)

#### Defined in

[src/shapes/Object/Object.ts:157](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L157)

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Implementation of

[`ImageProps`](/api/interfaces/imageprops/).[`width`](/api/interfaces/imageprops/#width)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`width`](/api/classes/fabricobject/#width)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:19](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L19)

***

### ATTRIBUTE\_NAMES

> `static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [FabricImage.fromElement](../../../../api/classes/fabricimage/#fromelement))

#### Static

#### See

[http://www.w3.org/TR/SVG/struct.html#ImageElement](http://www.w3.org/TR/SVG/struct.html#ImageElement)

#### Defined in

[src/shapes/Image.ts:777](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L777)

***

### CSS\_CANVAS

> `static` **CSS\_CANVAS**: `string` = `'canvas-img'`

Default CSS class name for canvas

#### Static

#### Default

```ts

```

#### Defined in

[src/shapes/Image.ts:770](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L770)

***

### cacheProperties

> `static` **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Overrides

[`FabricObject`](/api/classes/fabricobject/).[`cacheProperties`](/api/classes/fabricobject/#cacheproperties)

#### Defined in

[src/shapes/Image.ts:178](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L178)

***

### colorProperties

> `static` **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`colorProperties`](/api/classes/fabricobject/#colorproperties)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:20](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/AnimatableObject.ts#L20)

***

### ownDefaults

> `static` **ownDefaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>\> = `imageDefaultValues`

#### Overrides

[`FabricObject`](/api/classes/fabricobject/).[`ownDefaults`](/api/classes/fabricobject/#owndefaults)

#### Defined in

[src/shapes/Image.ts:180](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L180)

***

### stateProperties

> `static` **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`stateProperties`](/api/classes/fabricobject/#stateproperties)

#### Defined in

[src/shapes/Object/Object.ts:176](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L176)

***

### type

> `static` **type**: `string` = `'Image'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`FabricObject`](/api/classes/fabricobject/).[`type`](/api/classes/fabricobject/#type)

#### Defined in

[src/shapes/Image.ts:176](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L176)

## Accessors

### type

> `get` **type**(): `string`

Legacy identifier of the class. Prefer using utils like isType or instanceOf
Will be removed in fabric 7 or 8.
The setter exists because is very hard to catch all the ways in which a type value
could be set in the instance

#### TODO

add sustainable warning message

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

> `set` **type**(`value`): `void`

#### Parameters

• **value**: `string`

#### Returns

`string`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`type`](/api/classes/fabricobject/#type-1)

#### Defined in

[src/shapes/Object/Object.ts:302](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L302)

## Methods

### \_drawClipPath()

> **\_drawClipPath**(`ctx`, `clipPath`?): `void`

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **clipPath?**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`_drawClipPath`](/api/classes/fabricobject/#_drawclippath)

#### Defined in

[src/shapes/Object/Object.ts:949](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L949)

***

### \_limitCacheSize()

> **\_limitCacheSize**(`dims`): `any`

Limit the cache dimensions so that X * Y do not cross config.perfLimitSizeTotal
and each side do not cross fabric.cacheSideLimit
those numbers are configurable so that you can get as much detail as you want
making bargain with performances.

#### Parameters

• **dims**: `any`

#### Returns

`any`

.width width of canvas

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`_limitCacheSize`](/api/classes/fabricobject/#_limitcachesize)

#### Defined in

[src/shapes/Object/Object.ts:351](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L351)

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`_removeCacheCanvas`](/api/classes/fabricobject/#_removecachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:805](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L805)

***

### \_renderControls()

> **\_renderControls**(`ctx`, `styleOverride`?): `void`

Renders controls and borders for the object
the context here is not transformed

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **styleOverride?**: `TStyleOverride` = `{}`

properties to override the object style

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`_renderControls`](/api/classes/fabricobject/#_rendercontrols)

#### Todo

move to interactivity

#### Defined in

[src/shapes/Object/InteractiveObject.ts:434](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L434)

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`_setClippingProperties`](/api/classes/fabricobject/#_setclippingproperties)

#### Defined in

[src/shapes/Object/Object.ts:1087](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1087)

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `__namedParameters`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **\_\_namedParameters**: `Pick`\<[`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>, `"fill"`\>

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`_setFillStyles`](/api/classes/fabricobject/#_setfillstyles)

#### Defined in

[src/shapes/Object/Object.ts:1076](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1076)

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `decl`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **decl**: `Pick`\<[`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>, `"strokeDashOffset"` \| `"strokeLineCap"` \| `"strokeLineJoin"` \| `"strokeMiterLimit"` \| `"strokeWidth"` \| `"stroke"`\>

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`_setStrokeStyles`](/api/classes/fabricobject/#_setstrokestyles)

#### Defined in

[src/shapes/Object/Object.ts:1034](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1034)

***

### \_setupCompositeOperation()

> **\_setupCompositeOperation**(`ctx`): `void`

Sets canvas globalCompositeOperation for specific object
custom composition operation for the particular object can be specified using globalCompositeOperation property

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Rendering canvas context

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`_setupCompositeOperation`](/api/classes/fabricobject/#_setupcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:1541](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1541)

***

### \_toSVG()

> **\_toSVG**(): `string`[]

Returns svg representation of an instance

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Overrides

[`FabricObject`](/api/classes/fabricobject/).[`_toSVG`](/api/classes/fabricobject/#_tosvg)

#### Defined in

[src/shapes/Image.ts:365](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L365)

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`addPaintOrder`](/api/classes/fabricobject/#addpaintorder)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:249](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/FabricObjectSVGExportMixin.ts#L249)

***

### animate()

> **animate**\<`T`\>(`animatable`, `options`?): `Record`\<`string`, [`TAnimation`](/api/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

Animates object's properties

#### Type Parameters

• **T** *extends* `number` \| `number`[] \| [`TColorArg`](/api/type-aliases/tcolorarg/)

#### Parameters

• **animatable**: `Record`\<`string`, `T`\>

map of keys and end values

• **options?**: `Partial`\<[`AnimationOptions`](/api/namespaces/util/type-aliases/animationoptions/)\<`T`\>\>

#### Returns

`Record`\<`string`, [`TAnimation`](/api/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

map of animation contexts

As object — multiple properties

object.animate({ left: ..., top: ... });
object.animate({ left: ..., top: ... }, { duration: ... });

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`animate`](/api/classes/fabricobject/#animate)

#### Tutorial

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:34](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/AnimatableObject.ts#L34)

***

### applyFilters()

> **applyFilters**(`filters`): `void`

Applies filters assigned to this image (from "filters" array) or from filter param

#### Parameters

• **filters**: [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`, `Record`\<`string`, `any`\>\>[] = `...`

to be applied

#### Returns

`void`

#### Method

applyFilters

#### Defined in

[src/shapes/Image.ts:525](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L525)

***

### applyResizeFilters()

> **applyResizeFilters**(): `void`

#### Returns

`void`

#### Defined in

[src/shapes/Image.ts:482](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L482)

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`calcACoords`](/api/classes/fabricobject/#calcacoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:415](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L415)

***

### calcOCoords()

> **calcOCoords**(): `Record`\<`string`, `TOCoord`\>

Calculates the coordinates of the center of each control plus the corners of the control itself
This basically just delegates to each control positionHandler
WARNING: changing what is passed to positionHandler is a breaking change, since position handler
is a public api and should be done just if extremely necessary

#### Returns

`Record`\<`string`, `TOCoord`\>

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`calcOCoords`](/api/classes/fabricobject/#calcocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:254](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L254)

***

### calcOwnMatrix()

> **calcOwnMatrix**(): [`TMat2D`](/api/type-aliases/tmat2d/)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`calcOwnMatrix`](/api/classes/fabricobject/#calcownmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:501](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L501)

***

### calcTransformMatrix()

> **calcTransformMatrix**(`skipGroup`?): [`TMat2D`](/api/type-aliases/tmat2d/)

calculate transform matrix that represents the current transformations from the
object's properties.

#### Parameters

• **skipGroup?**: `boolean` = `false`

return transform matrix for object not counting parent transformations
There are some situation in which this is useful to avoid the fake rotation.

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`calcTransformMatrix`](/api/classes/fabricobject/#calctransformmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:473](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L473)

***

### canDrop()

> **canDrop**(`e`): `boolean`

Override to customize drag and drop behavior

#### Parameters

• **e**: `DragEvent`

#### Returns

`boolean`

true if the object currently dragged can be dropped on the target

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`canDrop`](/api/classes/fabricobject/#candrop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:700](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L700)

***

### clearContextTop()

> **clearContextTop**(`restoreManually`?): `undefined` \| `CanvasRenderingContext2D`

Clears the canvas.contextTop in a specific area that corresponds to the object's bounding box
that is in the canvas.contextContainer.
This function is used to clear pieces of contextTop where we render ephemeral effects on top of the object.
Example: blinking cursor text selection, drag effects.

#### Parameters

• **restoreManually?**: `boolean`

When true won't restore the context after clear, in order to draw something else.

#### Returns

`undefined` \| `CanvasRenderingContext2D`

canvas.contextTop that is either still transformed
with the object transformMatrix, or restored to neutral transform

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`clearContextTop`](/api/classes/fabricobject/#clearcontexttop)

#### Todo

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Defined in

[src/shapes/Object/InteractiveObject.ts:626](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L626)

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`clone`](/api/classes/fabricobject/#clone)

#### Defined in

[src/shapes/Object/Object.ts:1315](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1315)

***

### cloneAsImage()

> **cloneAsImage**(`options`?): [`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Creates an instance of Image out of an object
makes use of toCanvasElement.
Once this method was based on toDataUrl and loadImage, so it also had a quality
and format option. toCanvasElement is faster and produce no loss of quality.
If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it.
toCanvasElement and then toBlob from the obtained canvas is also a good option.

#### Parameters

• **options?**: `ObjectToCanvasElementOptions`

for clone as image, passed to toDataURL

#### Returns

[`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object cloned as image.

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`cloneAsImage`](/api/classes/fabricobject/#cloneasimage)

#### Todo

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Defined in

[src/shapes/Object/Object.ts:1341](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1341)

***

### complexity()

> **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity of this instance (is 1 unless subclassed)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`complexity`](/api/classes/fabricobject/#complexity)

#### Defined in

[src/shapes/Object/Object.ts:1483](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1483)

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Checks if point is inside the object

#### Parameters

• **point**: [`Point`](/api/classes/point/)

Point to check against

#### Returns

`boolean`

true if point is inside the object

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`containsPoint`](/api/classes/fabricobject/#containspoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:270](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L270)

***

### dispose()

> **dispose**(): `void`

Delete textures, reference to elements and eventually JSDOM cleanup

#### Returns

`void`

#### Overrides

[`FabricObject`](/api/classes/fabricobject/).[`dispose`](/api/classes/fabricobject/#dispose)

#### Defined in

[src/shapes/Image.ts:262](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L262)

***

### drawBorders()

> **drawBorders**(`ctx`, `options`, `styleOverride`?): `void`

Draws borders of an object's bounding box.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

• **options**: `Required`\<`Omit`\<[`TComposeMatrixArgs`](/api/namespaces/util/type-aliases/tcomposematrixargs/), `"flipX"` \| `"flipY"`\>\>

object representing current object parameters

• **styleOverride?**: `TStyleOverride`

object to override the object style

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`drawBorders`](/api/classes/fabricobject/#drawborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:477](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L477)

***

### drawCacheOnCanvas()

> **drawCacheOnCanvas**(`this`, `ctx`): `void`

Paint the cached copy of the object on the target context.
it will set the imageSmoothing for the draw operation

#### Parameters

• **this**: `TCachedFabricObject`\<[`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Overrides

[`FabricObject`](/api/classes/fabricobject/).[`drawCacheOnCanvas`](/api/classes/fabricobject/#drawcacheoncanvas)

#### Defined in

[src/shapes/Image.ts:605](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L605)

***

### drawClipPathOnCache()

> **drawClipPathOnCache**(`ctx`, `clipPath`): `void`

Execute the drawing operation for an object clipPath

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **clipPath**: `TCachedFabricObject`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`drawClipPathOnCache`](/api/classes/fabricobject/#drawclippathoncache)

#### Defined in

[src/shapes/Object/Object.ts:896](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L896)

***

### drawControls()

> **drawControls**(`ctx`, `styleOverride`): `void`

Draws corners of an object's bounding box.
Requires public properties: width, height
Requires public options: cornerSize, padding
Be aware that since fabric 6.0 this function does not call setCoords anymore.
setCoords needs to be called manually if the object of which we are rendering controls
is outside the standard selection and transform process.

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

• **styleOverride**: `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>, `"cornerStyle"` \| `"cornerSize"` \| `"cornerColor"` \| `"cornerStrokeColor"` \| `"cornerDashArray"` \| `"transparentCorners"`\>\> = `{}`

object to override the object style

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`drawControls`](/api/classes/fabricobject/#drawcontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:549](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L549)

***

### drawControlsConnectingLines()

> **drawControlsConnectingLines**(`ctx`, `size`): `void`

Draws lines from a borders of an object's bounding box to controls that have `withConnection` property set.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

• **size**: [`Point`](/api/classes/point/)

object size x = width, y = height

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`drawControlsConnectingLines`](/api/classes/fabricobject/#drawcontrolsconnectinglines)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:516](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L516)

***

### drawObject()

> **drawObject**(`ctx`, `forClipping`?): `void`

Execute the drawing operation for an object on a specified context

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **forClipping?**: `boolean`

apply clipping styles

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`drawObject`](/api/classes/fabricobject/#drawobject)

#### Defined in

[src/shapes/Object/Object.ts:928](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L928)

***

### drawSelectionBackground()

> **drawSelectionBackground**(`ctx`): `void`

Draws a colored layer behind the object, inside its selection borders.
Requires public options: padding, selectionBackgroundColor
this function is called when the context is transformed
has checks to be skipped when the object is on a staticCanvas

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`drawSelectionBackground`](/api/classes/fabricobject/#drawselectionbackground)

#### Todo

evaluate if make this disappear in favor of a pre-render hook for objects
this was added by Andrea Bogazzi to make possible some feature for work reasons
it seemed a good option, now is an edge case

#### Defined in

[src/shapes/Object/InteractiveObject.ts:374](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L374)

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`\>(`other`): `AncestryComparison`

Compare ancestors

#### Type Parameters

• **T** *extends* [`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

#### Returns

`AncestryComparison`

an object that represent the ancestry situation.

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`findCommonAncestors`](/api/classes/fabricobject/#findcommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:78](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/StackedObject.ts#L78)

***

### fire()

> **fire**\<`K`\>(`eventName`, `options`?): `void`

Fires event with an optional options object

#### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **eventName**: `K`

Event name to fire

• **options?**: `EventSpec`\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`fire`](/api/classes/fabricobject/#fire)

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Observable.ts#L159)

***

### forEachControl()

> **forEachControl**(`fn`): `void`

Calls a function for each control. The function gets called,
with the control, the control's key and the object that is calling the iterator

#### Parameters

• **fn**

function to iterate over the controls over

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`forEachControl`](/api/classes/fabricobject/#foreachcontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:352](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L352)

***

### get()

> **get**(`property`): `any`

Basic getter

#### Parameters

• **property**: `string`

Property name

#### Returns

`any`

value of a property

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`get`](/api/classes/fabricobject/#get)

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/CommonMethods.ts#L59)

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| `object`

#### Returns

`undefined` \| `object`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getActiveControl`](/api/classes/fabricobject/#getactivecontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:193](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L193)

***

### getAncestors()

> **getAncestors**(): `Ancestors`

#### Returns

`Ancestors`

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getAncestors`](/api/classes/fabricobject/#getancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:61](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/StackedObject.ts#L61)

***

### getBoundingRect()

> **getBoundingRect**(): [`TBBox`](/api/type-aliases/tbbox/)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Returns

[`TBBox`](/api/type-aliases/tbbox/)

Object with left, top, width, height properties

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getBoundingRect`](/api/classes/fabricobject/#getboundingrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:331](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L331)

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getCanvasRetinaScaling`](/api/classes/fabricobject/#getcanvasretinascaling)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:388](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L388)

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getCenterPoint`](/api/classes/fabricobject/#getcenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:177](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L177)

***

### getCoords()

> **getCoords**(): [`Point`](/api/classes/point/)[]

#### Returns

[`Point`](/api/classes/point/)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getCoords`](/api/classes/fabricobject/#getcoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:192](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L192)

***

### getCrossOrigin()

> **getCrossOrigin**(): `null` \| `string`

Get the crossOrigin value (of the corresponding image element)

#### Returns

`null` \| `string`

#### Defined in

[src/shapes/Image.ts:280](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L280)

***

### getElement()

> **getElement**(): [`ImageSource`](/api/type-aliases/imagesource/)

Returns image element which this instance if based on

#### Returns

[`ImageSource`](/api/type-aliases/imagesource/)

#### Defined in

[src/shapes/Image.ts:219](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L219)

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getObjectOpacity`](/api/classes/fabricobject/#getobjectopacity)

#### Defined in

[src/shapes/Object/Object.ts:666](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L666)

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getObjectScaling`](/api/classes/fabricobject/#getobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:635](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L635)

***

### getOriginalSize()

> **getOriginalSize**(): `object`

Returns original size of an image

#### Returns

`object`

##### height

> **height**: `any`

##### width

> **width**: `any`

#### Defined in

[src/shapes/Image.ts:290](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L290)

***

### getPointByOrigin()

> **getPointByOrigin**(`originX`, `originY`): [`Point`](/api/classes/point/)

Returns the coordinates of the object as if it has a different origin

#### Parameters

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getPointByOrigin`](/api/classes/fabricobject/#getpointbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:202](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L202)

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getRelativeCenterPoint`](/api/classes/fabricobject/#getrelativecenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:188](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L188)

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/api/api/classes/fabricimage/getx/#getx)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getRelativeX`](/api/classes/fabricobject/#getrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:103](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L103)

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x,y position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in parent's coordinate plane

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getRelativeXY`](/api/classes/fabricobject/#getrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:164](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L164)

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/api/api/classes/fabricimage/gety/#gety)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getRelativeY`](/api/classes/fabricobject/#getrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:119](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L119)

***

### getScaledHeight()

> **getScaledHeight**(): `number`

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getScaledHeight`](/api/classes/fabricobject/#getscaledheight)

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:349](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L349)

***

### getScaledWidth()

> **getScaledWidth**(): `number`

Returns width of an object's bounding box counting transformations

#### Returns

`number`

width value

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getScaledWidth`](/api/classes/fabricobject/#getscaledwidth)

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:340](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L340)

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

#### Defined in

[src/shapes/Image.ts:435](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L435)

***

### getSvgCommons()

> **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> & `object`

#### Returns

`string`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getSvgCommons`](/api/classes/fabricobject/#getsvgcommons)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:84](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/FabricObjectSVGExportMixin.ts#L84)

***

### getSvgFilter()

> **getSvgFilter**(`this`): `string`

Returns filter for svg shadow

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getSvgFilter`](/api/classes/fabricobject/#getsvgfilter)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:76](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/FabricObjectSVGExportMixin.ts#L76)

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

#### Defined in

[src/shapes/Image.ts:457](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L457)

***

### getSvgStyles()

> **getSvgStyles**(`this`, `skipShadow`?): `string`

Returns styles-string for svg-export

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **skipShadow?**: `boolean`

a boolean to skip shadow filter output

#### Returns

`string`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getSvgStyles`](/api/classes/fabricobject/#getsvgstyles)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:21](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/FabricObjectSVGExportMixin.ts#L21)

***

### getSvgTransform()

> **getSvgTransform**(`this`, `full`?, `additionalTransform`?): `string`

Returns transform-string for svg-export

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **full?**: `boolean`

• **additionalTransform?**: `string` = `''`

#### Returns

`string`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getSvgTransform`](/api/classes/fabricobject/#getsvgtransform)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](/api/type-aliases/tdegree/)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/api/type-aliases/tdegree/)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getTotalAngle`](/api/classes/fabricobject/#gettotalangle)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:396](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L396)

***

### getTotalObjectScaling()

> **getTotalObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/api/classes/point/)

object with scaleX and scaleY properties

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getTotalObjectScaling`](/api/classes/fabricobject/#gettotalobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:652](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L652)

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getViewportTransform`](/api/classes/fabricobject/#getviewporttransform)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:406](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L406)

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in canvas coordinate plane

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getX`](/api/classes/fabricobject/#getx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:74](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L74)

***

### getXY()

> **getXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in canvas coordinate plane

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getXY`](/api/classes/fabricobject/#getxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:134](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L134)

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in canvas coordinate plane

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`getY`](/api/classes/fabricobject/#gety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:88](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L88)

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`): `boolean`

#### Type Parameters

• **T** *extends* [`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`hasCommonAncestors`](/api/classes/fabricobject/#hascommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:143](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/StackedObject.ts#L143)

***

### hasCrop()

> **hasCrop**(): `boolean`

Returns true if an image has crop applied, inspecting values of cropX,cropY,width,height.

#### Returns

`boolean`

#### Defined in

[src/shapes/Image.ts:351](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L351)

***

### hasFill()

> **hasFill**(): `null` \| `boolean` \| `""`

return true if the object will draw a fill
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when fill happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the fill is invisible.

#### Returns

`null` \| `boolean` \| `""`

Boolean

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`hasFill`](/api/classes/fabricobject/#hasfill)

#### Since

3.0.0

#### Defined in

[src/shapes/Object/Object.ts:836](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L836)

***

### hasStroke()

> **hasStroke**(): `null` \| `boolean` \| `""`

return true if the object will draw a stroke
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when stroke happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the stroke is invisible.

#### Returns

`null` \| `boolean` \| `""`

Boolean

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`hasStroke`](/api/classes/fabricobject/#hasstroke)

#### Since

3.0.0

#### Defined in

[src/shapes/Object/Object.ts:820](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L820)

***

### intersectsWithObject()

> **intersectsWithObject**(`other`): `boolean`

Checks if object intersects with another object

#### Parameters

• **other**: `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to test

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`intersectsWithObject`](/api/classes/fabricobject/#intersectswithobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:220](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L220)

***

### intersectsWithRect()

> **intersectsWithRect**(`tl`, `br`): `boolean`

Checks if object intersects with the scene rect formed by tl and br

#### Parameters

• **tl**: [`Point`](/api/classes/point/)

• **br**: [`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`intersectsWithRect`](/api/classes/fabricobject/#intersectswithrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:206](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L206)

***

### isCacheDirty()

> **isCacheDirty**(`skipCanvas`): `boolean`

Check if cache is dirty

#### Parameters

• **skipCanvas**: `boolean` = `false`

skip canvas checks because this object is painted
on parent canvas.

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`isCacheDirty`](/api/classes/fabricobject/#iscachedirty)

#### Defined in

[src/shapes/Object/Object.ts:981](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L981)

***

### isContainedWithinObject()

> **isContainedWithinObject**(`other`): `boolean`

Checks if object is fully contained within area of another object

#### Parameters

• **other**: `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to test

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`isContainedWithinObject`](/api/classes/fabricobject/#iscontainedwithinobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:239](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L239)

***

### isContainedWithinRect()

> **isContainedWithinRect**(`tl`, `br`): `boolean`

Checks if object is fully contained within the scene rect formed by tl and br

#### Parameters

• **tl**: [`Point`](/api/classes/point/)

• **br**: [`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`isContainedWithinRect`](/api/classes/fabricobject/#iscontainedwithinrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:247](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L247)

***

### isControlVisible()

> **isControlVisible**(`controlKey`): `boolean`

Returns true if the specified control is visible, false otherwise.

#### Parameters

• **controlKey**: `string`

The key of the control. Possible values are usually 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr',
but since the control api allow for any control name, can be any string.

#### Returns

`boolean`

true if the specified control is visible, false otherwise

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`isControlVisible`](/api/classes/fabricobject/#iscontrolvisible)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:583](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L583)

***

### isDescendantOf()

> **isDescendantOf**(`target`): `boolean`

Checks if object is descendant of target
Should be used instead of [Group.contains](../../../../api/classes/group/#contains) or [StaticCanvas.contains](../../../../api/classes/staticcanvas/#contains) for performance reasons

#### Parameters

• **target**: `TAncestor`

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`isDescendantOf`](/api/classes/fabricobject/#isdescendantof)

#### Defined in

[src/shapes/Object/StackedObject.ts:46](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/StackedObject.ts#L46)

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type Parameters

• **T** *extends* [`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`isInFrontOf`](/api/classes/fabricobject/#isinfrontof)

#### Defined in

[src/shapes/Object/StackedObject.ts:153](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/StackedObject.ts#L153)

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`isNotVisible`](/api/classes/fabricobject/#isnotvisible)

#### Defined in

[src/shapes/Object/Object.ts:745](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L745)

***

### isOnScreen()

> **isOnScreen**(): `boolean`

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`isOnScreen`](/api/classes/fabricobject/#isonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:279](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L279)

***

### isOverlapping()

> **isOverlapping**\<`T`\>(`other`): `boolean`

#### Type Parameters

• **T** *extends* `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

• **other**: `T`

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`isOverlapping`](/api/classes/fabricobject/#isoverlapping)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:257](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L257)

***

### isPartiallyOnScreen()

> **isPartiallyOnScreen**(): `boolean`

Checks if object is partially contained within the canvas with current viewportTransform

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`isPartiallyOnScreen`](/api/classes/fabricobject/#ispartiallyonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:309](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L309)

***

### isType()

> **isType**(...`types`): `boolean`

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

• ...**types**: `string`[]

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`isType`](/api/classes/fabricobject/#istype)

#### Defined in

[src/shapes/Object/Object.ts:1472](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1472)

***

### needsItsOwnCache()

> **needsItsOwnCache**(): `boolean`

When set to `true`, force the object to have its own cache, even if it is inside a group
it may be needed when your object behave in a particular way on the cache and always needs
its own isolated canvas to render correctly.
Created to be overridden
since 1.7.12

#### Returns

`boolean`

Boolean

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`needsItsOwnCache`](/api/classes/fabricobject/#needsitsowncache)

#### Defined in

[src/shapes/Object/Object.ts:848](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L848)

***

### off()

#### off(eventName, handler)

> **off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

##### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **eventName**: `K`

event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`any`\>

event listener to unsubscribe

##### Returns

`void`

##### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`off`](/api/classes/fabricobject/#off)

##### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Observable.ts#L120)

#### off(handlers)

> **off**(`handlers`): `void`

unsubscribe event listeners

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`void`

##### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`off`](/api/classes/fabricobject/#off)

##### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Observable.ts#L125)

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`off`](/api/classes/fabricobject/#off)

##### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Observable.ts#L129)

***

### on()

#### on(eventName, handler)

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

##### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

• **E**

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`on`](/api/classes/fabricobject/#on)

##### Alias

on

##### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Observable.ts#L23)

#### on(handlers)

> **on**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

##### Returns

`VoidFunction`

##### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`on`](/api/classes/fabricobject/#on)

##### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Observable.ts#L27)

***

### onDeselect()

> **onDeselect**(`options`?): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to deselect this object. If the function returns true, the process is cancelled

#### Parameters

• **options?**

options sent from the upper functions

• **options.e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

event if the process is generated by an event

• **options.object?**: `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

next object we are setting as active, and reason why
this is being deselected

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`onDeselect`](/api/classes/fabricobject/#ondeselect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:657](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L657)

***

### onDragStart()

> **onDragStart**(`e`): `boolean`

Override to customize Drag behavior\
Fired once a drag session has started

#### Parameters

• **e**: `DragEvent`

#### Returns

`boolean`

true to handle the drag event

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`onDragStart`](/api/classes/fabricobject/#ondragstart)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:690](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L690)

***

### onSelect()

> **onSelect**(`options`?): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to select this object. If the function returns true, the process is cancelled

#### Parameters

• **options?**

options sent from the upper functions

• **options.e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

event if the process is generated by an event

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`onSelect`](/api/classes/fabricobject/#onselect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:671](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L671)

***

### once()

#### once(eventName, handler)

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

##### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

• **E**

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`once`](/api/classes/fabricobject/#once)

##### Alias

once

##### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Observable.ts#L62)

#### once(handlers)

> **once**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

##### Returns

`VoidFunction`

##### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`once`](/api/classes/fabricobject/#once)

##### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Observable.ts#L66)

***

### removeTexture()

> **removeTexture**(`key`): `void`

Delete a single texture if in webgl mode

#### Parameters

• **key**: `string`

#### Returns

`void`

#### Defined in

[src/shapes/Image.ts:252](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L252)

***

### render()

> **render**(`ctx`): `void`

Renders an object on a specified context

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`render`](/api/classes/fabricobject/#render)

#### Defined in

[src/shapes/Object/Object.ts:757](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L757)

***

### renderCache()

> **renderCache**(`options`?): `void`

#### Parameters

• **options?**: `any`

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`renderCache`](/api/classes/fabricobject/#rendercache)

#### Defined in

[src/shapes/Object/Object.ts:791](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L791)

***

### renderDragSourceEffect()

> **renderDragSourceEffect**(`e`): `void`

Override to customize drag and drop behavior
render a specific effect when an object is the source of a drag event
example: render the selection status for the part of text that is being dragged from a text object

#### Parameters

• **e**: `DragEvent`

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`renderDragSourceEffect`](/api/classes/fabricobject/#renderdragsourceeffect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:711](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L711)

***

### renderDropTargetEffect()

> **renderDropTargetEffect**(`e`): `void`

Override to customize drag and drop behavior
render a specific effect when an object is the target of a drag event
used to show that the underly object can receive a drop, or to show how the
object will change when dropping. example: show the cursor where the text is about to be dropped

#### Parameters

• **e**: `DragEvent`

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`renderDropTargetEffect`](/api/classes/fabricobject/#renderdroptargeteffect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:723](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L723)

***

### rotate()

> **rotate**(`angle`): `void`

Sets "angle" of an instance with centered rotation

#### Parameters

• **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle value (in degrees)

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`rotate`](/api/classes/fabricobject/#rotate)

#### Defined in

[src/shapes/Object/Object.ts:1500](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1500)

***

### scale()

> **scale**(`value`): `void`

Scales an object (equally by x and y)

#### Parameters

• **value**: `number`

Scale factor

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`scale`](/api/classes/fabricobject/#scale)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:358](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L358)

***

### scaleToHeight()

> **scaleToHeight**(`value`): `void`

Scales an object to a given height, with respect to bounding box (scaling by x/y equally)

#### Parameters

• **value**: `number`

New height value

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`scaleToHeight`](/api/classes/fabricobject/#scaletoheight)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:381](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L381)

***

### scaleToWidth()

> **scaleToWidth**(`value`): `void`

Scales an object to a given width, with respect to bounding box (scaling by x/y equally)

#### Parameters

• **value**: `number`

New width value

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`scaleToWidth`](/api/classes/fabricobject/#scaletowidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:369](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L369)

***

### set()

> **set**(`key`, `value`?): [`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `any`\>

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`set`](/api/classes/fabricobject/#set)

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/CommonMethods.ts#L29)

***

### setControlVisible()

> **setControlVisible**(`controlKey`, `visible`): `void`

Sets the visibility of the specified control.
please do not use.

#### Parameters

• **controlKey**: `string`

The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
but since the control api allow for any control name, can be any string.

• **visible**: `boolean`

true to set the specified control visible, false otherwise

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`setControlVisible`](/api/classes/fabricobject/#setcontrolvisible)

#### Todo

discuss this overlap of priority here with the team. Andrea Bogazzi for details

#### Defined in

[src/shapes/Object/InteractiveObject.ts:598](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L598)

***

### setControlsVisibility()

> **setControlsVisibility**(`options`?): `void`

Sets the visibility state of object controls, this is just a bulk option for setControlVisible;

#### Parameters

• **options?**: `Record`\<`string`, `boolean`\> = `{}`

with an optional key per control
example: {Boolean} [options.bl] true to enable the bottom-left control, false to disable it

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`setControlsVisibility`](/api/classes/fabricobject/#setcontrolsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:610](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L610)

***

### setCoords()

> **setCoords**(): `void`

set controls' coordinates as well
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`setCoords`](/api/classes/fabricobject/#setcoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:342](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L342)

***

### setElement()

> **setElement**(`element`, `size`?): `void`

Sets image element for this instance to a specified one.
If filters defined they are applied to new image.
You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.

#### Parameters

• **element**: [`ImageSource`](/api/type-aliases/imagesource/)

• **size?**: `Partial`\<[`TSize`](/api/type-aliases/tsize/)\> = `{}`

Options object

#### Returns

`void`

#### Defined in

[src/shapes/Image.ts:230](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L230)

***

### setOnGroup()

> **setOnGroup**(): `void`

This callback function is called by the parent group of an object every
time a non-delegated property changes on the group. It is passed the key
and value as parameters. Not adding in this function's signature to avoid
Travis build error about unused variables.

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`setOnGroup`](/api/classes/fabricobject/#setongroup)

#### Defined in

[src/shapes/Object/Object.ts:1532](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1532)

***

### setPositionByOrigin()

> **setPositionByOrigin**(`pos`, `originX`, `originY`): `void`

Sets the position of the object taking into consideration the object's origin

#### Parameters

• **pos**: [`Point`](/api/classes/point/)

The new position of the object

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`setPositionByOrigin`](/api/classes/fabricobject/#setpositionbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:217](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L217)

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](../../../../api/classes/fabricimage/#setx)

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`setRelativeX`](/api/classes/fabricobject/#setrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:111](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L111)

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/fabricimage/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

• **point**: [`Point`](/api/classes/point/)

position according to object's originX originY properties in parent's coordinate plane

• **originX?**: [`TOriginX`](/api/type-aliases/toriginx/) = `...`

Horizontal origin: 'left', 'center' or 'right'

• **originY?**: [`TOriginY`](/api/type-aliases/toriginy/) = `...`

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`setRelativeXY`](/api/classes/fabricobject/#setrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:174](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L174)

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](../../../../api/classes/fabricimage/#sety)

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`setRelativeY`](/api/classes/fabricobject/#setrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:127](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L127)

***

### setSrc()

> **setSrc**(`src`, `options`?): `Promise`\<`void`\>

Loads and sets source of an image\
**IMPORTANT**: It is recommended to abort loading tasks before calling this method to prevent race conditions and unnecessary networking

#### Parameters

• **src**: `string`

Source string (URL)

• **options?**: [`LoadImageOptions`](/api/namespaces/util/type-aliases/loadimageoptions/) = `{}`

Options object

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/shapes/Image.ts:467](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L467)

***

### setX()

> **setX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`setX`](/api/classes/fabricobject/#setx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:81](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L81)

***

### setXY()

> **setXY**(`point`, `originX`?, `originY`?): `void`

Set an object position to a particular point, the point is intended in absolute ( canvas ) coordinate.
You can specify originX and originY values,
that otherwise are the object's current values.

#### Parameters

• **point**: [`Point`](/api/classes/point/)

position in canvas coordinate plane

• **originX?**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY?**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`setXY`](/api/classes/fabricobject/#setxy)

#### Example

```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:151](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L151)

***

### setY()

> **setY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`setY`](/api/classes/fabricobject/#sety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:95](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L95)

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

[`FabricObject`](/api/classes/fabricobject/).[`shouldCache`](/api/classes/fabricobject/#shouldcache)

#### Defined in

[src/shapes/Image.ts:626](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L626)

***

### shouldStartDragging()

> **shouldStartDragging**(`e`): `boolean`

Override to customize Drag behavior
Fired from Canvas#_onMouseMove

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

`boolean`

true in order for the window to start a drag session

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`shouldStartDragging`](/api/classes/fabricobject/#shouldstartdragging)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:681](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L681)

***

### strokeBorders()

> **strokeBorders**(`ctx`, `size`): `void`

override this function in order to customize the drawing of the control box, e.g. rounded corners, different border style.

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

ctx is rotated and translated so that (0,0) is at object's center

• **size**: [`Point`](/api/classes/point/)

the control box size used

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`strokeBorders`](/api/classes/fabricobject/#strokeborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:398](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L398)

***

### toCanvasElement()

> **toCanvasElement**(`options`): `HTMLCanvasElement`

Converts an object into a HTMLCanvas element

#### Parameters

• **options**: `ObjectToCanvasElementOptions` = `{}`

Options object

#### Returns

`HTMLCanvasElement`

Returns DOM element <canvas> with the FabricObject

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`toCanvasElement`](/api/classes/fabricobject/#tocanvaselement)

#### Defined in

[src/shapes/Object/Object.ts:1363](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1363)

***

### toClipPathSVG()

> **toClipPathSVG**(`this`, `reviver`?): `string`

Returns svg clipPath representation of an instance

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **reviver?**: [`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`toClipPathSVG`](/api/classes/fabricobject/#toclippathsvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:143](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/FabricObjectSVGExportMixin.ts#L143)

***

### toDataURL()

> **toDataURL**(`options`): `string`

Converts an object into a data-url-like string

#### Parameters

• **options**: `toDataURLOptions` = `{}`

Options object

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`toDataURL`](/api/classes/fabricobject/#todataurl)

#### Defined in

[src/shapes/Object/Object.ts:1459](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1459)

***

### toDatalessObject()

> **toDatalessObject**(`propertiesToInclude`?): `any`

Returns (dataless) object representation of an instance

#### Parameters

• **propertiesToInclude?**: `any`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

Object representation of an instance

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`toDatalessObject`](/api/classes/fabricobject/#todatalessobject)

#### Defined in

[src/shapes/Object/Object.ts:587](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L587)

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`toJSON`](/api/classes/fabricobject/#tojson)

#### Defined in

[src/shapes/Object/Object.ts:1491](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1491)

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type Parameters

• **T** *extends* `Omit`\<`Props` & [`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\>

• **K** *extends* `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[] = `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

Object representation of an instance

#### Overrides

[`FabricObject`](/api/classes/fabricobject/).[`toObject`](/api/classes/fabricobject/#toobject)

#### Defined in

[src/shapes/Image.ts:328](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L328)

***

### toSVG()

> **toSVG**(`this`, `reviver`?): `string`

Returns svg representation of an instance

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **reviver?**: [`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`toSVG`](/api/classes/fabricobject/#tosvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

***

### toString()

> **toString**(): `string`

Returns string representation of an instance

#### Returns

`string`

String representation of an instance

#### Overrides

[`FabricObject`](/api/classes/fabricobject/).[`toString`](/api/classes/fabricobject/#tostring)

#### Defined in

[src/shapes/Image.ts:478](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L478)

***

### toggle()

> **toggle**(`property`): [`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`FabricImage`](/api/classes/fabricimage/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`toggle`](/api/classes/fabricobject/#toggle)

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/CommonMethods.ts#L46)

***

### transform()

> **transform**(`ctx`): `void`

Transforms context when rendering an object

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context

#### Returns

`void`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`transform`](/api/classes/fabricobject/#transform)

#### Defined in

[src/shapes/Object/Object.ts:509](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L509)

***

### transformMatrixKey()

> **transformMatrixKey**(`skipGroup`): `number`[]

#### Parameters

• **skipGroup**: `boolean` = `false`

#### Returns

`number`[]

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`transformMatrixKey`](/api/classes/fabricobject/#transformmatrixkey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:441](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L441)

***

### translateToCenterPoint()

> **translateToCenterPoint**(`point`, `originX`, `originY`): [`Point`](/api/classes/point/)

Translates the coordinates from origin to center coordinates (based on the object's dimensions)

#### Parameters

• **point**: [`Point`](/api/classes/point/)

The point which corresponds to the originX and originY params

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`translateToCenterPoint`](/api/classes/fabricobject/#translatetocenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:130](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L130)

***

### translateToGivenOrigin()

> **translateToGivenOrigin**(`point`, `fromOriginX`, `fromOriginY`, `toOriginX`, `toOriginY`): [`Point`](/api/classes/point/)

Translates the coordinates from a set of origin to another (based on the object's dimensions)

#### Parameters

• **point**: [`Point`](/api/classes/point/)

The point which corresponds to the originX and originY params

• **fromOriginX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **fromOriginY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

• **toOriginX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **toOriginY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`translateToGivenOrigin`](/api/classes/fabricobject/#translatetogivenorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:102](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L102)

***

### translateToOriginPoint()

> **translateToOriginPoint**(`center`, `originX`, `originY`): [`Point`](/api/classes/point/)

Translates the coordinates from center to origin coordinates (based on the object's dimensions)

#### Parameters

• **center**: [`Point`](/api/classes/point/)

The point which corresponds to center of the object

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`translateToOriginPoint`](/api/classes/fabricobject/#translatetooriginpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:155](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L155)

***

### ~~willDrawShadow()~~

> **willDrawShadow**(): `boolean`

Check if this object will cast a shadow with an offset.
used by Group.shouldCache to know if child has a shadow recursively

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`willDrawShadow`](/api/classes/fabricobject/#willdrawshadow)

#### Defined in

[src/shapes/Object/Object.ts:885](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L885)

***

### \_fromObject()

> `static` **\_fromObject**\<`S`\>(`__namedParameters`, `__namedParameters`): `Promise`\<`S`\>

#### Type Parameters

• **S** *extends* [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

• **\_\_namedParameters**: `Record`\<`string`, `unknown`\>

• **\_\_namedParameters**: [`Abortable`](/api/type-aliases/abortable/) & `object` = `{}`

#### Returns

`Promise`\<`S`\>

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`_fromObject`](/api/classes/fabricobject/#_fromobject)

#### Defined in

[src/shapes/Object/Object.ts:1570](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1570)

***

### createControls()

> `static` **createControls**(): `object`

Creates the default control object.
If you prefer to have on instance of controls shared among all objects
make this function return an empty object and add controls to the ownDefaults

#### Returns

`object`

##### controls

> **controls**: `Record`\<`string`, [`Control`](/api/classes/control/)\>

#### Inherited from

[`FabricObject`](/api/classes/fabricobject/).[`createControls`](/api/classes/fabricobject/#createcontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:166](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L166)

***

### fromElement()

> `static` **fromElement**(`element`, `options`?, `cssRules`?): `Promise`\<`null` \| [`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

Returns [FabricImage](../../../../api/classes/fabricimage) instance from an SVG element

#### Parameters

• **element**: `HTMLElement`

Element to parse

• **options?**: [`Abortable`](/api/type-aliases/abortable/) = `{}`

Options object

• **cssRules?**: `CSSRules`

#### Returns

`Promise`\<`null` \| [`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Static

#### Defined in

[src/shapes/Image.ts:844](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L844)

***

### fromObject()

> `static` **fromObject**\<`T`\>(`object`, `options`?): `Promise`\<[`FabricImage`](/api/classes/fabricimage/)\<`Omit`\<`T`, `"type"` \| `"crossOrigin"` \| `"filters"` \| `"resizeFilter"` \| `"src"`\> & `object`, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

Creates an instance of FabricImage from its object representation

#### Type Parameters

• **T** *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`SerializedImageProps`](/api/interfaces/serializedimageprops/)\>

#### Parameters

• **object**: `T`

Object to create an instance from

• **options?**: [`Abortable`](/api/type-aliases/abortable/)

Options object

#### Returns

`Promise`\<[`FabricImage`](/api/classes/fabricimage/)\<`Omit`\<`T`, `"type"` \| `"crossOrigin"` \| `"filters"` \| `"resizeFilter"` \| `"src"`\> & `object`, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Overrides

[`FabricObject`](/api/classes/fabricobject/).[`fromObject`](/api/classes/fabricobject/#fromobject)

#### Static

#### Defined in

[src/shapes/Image.ts:797](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L797)

***

### fromURL()

> `static` **fromURL**\<`T`\>(`url`, `__namedParameters`?, `imageOptions`?): `Promise`\<[`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

Creates an instance of Image from an URL string

#### Type Parameters

• **T** *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`ImageProps`](/api/interfaces/imageprops/)\>

#### Parameters

• **url**: `string`

URL to create an image from

• **\_\_namedParameters?**: [`LoadImageOptions`](/api/namespaces/util/type-aliases/loadimageoptions/) = `{}`

• **imageOptions?**: `T`

#### Returns

`Promise`\<[`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Static

#### Defined in

[src/shapes/Image.ts:826](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L826)

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

[`FabricObject`](/api/classes/fabricobject/).[`getDefaults`](/api/classes/fabricobject/#getdefaults)

#### Defined in

[src/shapes/Image.ts:182](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Image.ts#L182)
