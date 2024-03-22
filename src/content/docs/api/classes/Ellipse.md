---
editUrl: false
next: false
prev: false
title: "Ellipse"
---

## Extends

- [`FabricObject`](FabricObject.md)\<`Props`, `SProps`, `EventSpec`\>

## Type parameters

• **Props** extends [`TOptions`](../type-aliases/TOptions.md)\<[`EllipseProps`](../interfaces/EllipseProps.md)\> = `Partial`\<[`EllipseProps`](../interfaces/EllipseProps.md)\>

• **SProps** extends [`SerializedEllipseProps`](../interfaces/SerializedEllipseProps.md) = [`SerializedEllipseProps`](../interfaces/SerializedEllipseProps.md)

• **EventSpec** extends [`ObjectEvents`](../interfaces/ObjectEvents.md) = [`ObjectEvents`](../interfaces/ObjectEvents.md)

## Implements

- [`EllipseProps`](../interfaces/EllipseProps.md)

## Constructors

### new Ellipse(options)

> **new Ellipse**\<`Props`, `SProps`, `EventSpec`\>(`options`?): [`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>

Constructor

#### Parameters

• **options?**: `Props`= `undefined`

Options object

#### Returns

[`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`FabricObject`](FabricObject.md).[`constructor`](FabricObject.md#constructors)

#### Source

src/shapes/Object/Object.ts:336

## Properties

### \_\_corner?

> **`optional`** **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[`FabricObject`](FabricObject.md).[`__corner`](FabricObject.md#__corner)

#### Source

src/shapes/Object/InteractiveObject.ts:104

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[`FabricObject`](FabricObject.md).[`_controlsVisibility`](FabricObject.md#_controlsvisibility)

#### Source

src/shapes/Object/InteractiveObject.ts:111

***

### \_scaling?

> **`optional`** **\_scaling**: `boolean`

A boolean used from the gesture module to keep tracking of a scaling
action when there is no scaling transform in place.
This is an edge case and is used twice in all codebase.
Probably added to keep track of some performance issues

#### TODO

use git blame to investigate why it was added
DON'T USE IT. WE WILL TRY TO REMOVE IT

#### Inherited from

[`FabricObject`](FabricObject.md).[`_scaling`](FabricObject.md#_scaling)

#### Source

src/shapes/Object/InteractiveObject.ts:133

***

### aCoords

> **aCoords**: [`TCornerPoint`](../type-aliases/TCornerPoint.md)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/ellipse/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/ellipse/#calcacoords)

#### Inherited from

[`FabricObject`](FabricObject.md).[`aCoords`](FabricObject.md#acoords)

#### Source

src/shapes/Object/ObjectGeometry.ts:50

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

[`EllipseProps`](../interfaces/EllipseProps.md).[`absolutePositioned`](../interfaces/EllipseProps.md#absolutepositioned)

#### Inherited from

[`FabricObject`](FabricObject.md).[`absolutePositioned`](FabricObject.md#absolutepositioned)

#### Source

src/shapes/Object/Object.ts:166

***

### activeOn

> **activeOn**: `"down"` \| `"up"`

#### Implementation of

`EllipseProps.activeOn`

#### Inherited from

[`FabricObject`](FabricObject.md).[`activeOn`](FabricObject.md#activeon)

#### Source

src/shapes/Object/InteractiveObject.ts:83

***

### angle

> **angle**: [`TDegree`](../type-aliases/TDegree.md)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`angle`](../interfaces/EllipseProps.md#angle)

#### Inherited from

[`FabricObject`](FabricObject.md).[`angle`](FabricObject.md#angle)

#### Source

src/shapes/Object/ObjectOrigin.ts:29

***

### backgroundColor

> **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`backgroundColor`](../interfaces/EllipseProps.md#backgroundcolor)

#### Inherited from

[`FabricObject`](FabricObject.md).[`backgroundColor`](FabricObject.md#backgroundcolor)

#### Source

src/shapes/Object/Object.ts:153

***

### borderColor

> **borderColor**: `string`

Color of controlling borders of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`borderColor`](../interfaces/EllipseProps.md#bordercolor)

#### Inherited from

[`FabricObject`](FabricObject.md).[`borderColor`](FabricObject.md#bordercolor)

#### Source

src/shapes/Object/InteractiveObject.ts:73

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`borderDashArray`](../interfaces/EllipseProps.md#borderdasharray)

#### Inherited from

[`FabricObject`](FabricObject.md).[`borderDashArray`](FabricObject.md#borderdasharray)

#### Source

src/shapes/Object/InteractiveObject.ts:74

***

### borderOpacityWhenMoving

> **borderOpacityWhenMoving**: `number`

Opacity of object's controlling borders when object is active and moving

#### Default

```ts
0.4
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`borderOpacityWhenMoving`](../interfaces/EllipseProps.md#borderopacitywhenmoving)

#### Inherited from

[`FabricObject`](FabricObject.md).[`borderOpacityWhenMoving`](FabricObject.md#borderopacitywhenmoving)

#### Source

src/shapes/Object/InteractiveObject.ts:75

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

[`EllipseProps`](../interfaces/EllipseProps.md).[`borderScaleFactor`](../interfaces/EllipseProps.md#borderscalefactor)

#### Inherited from

[`FabricObject`](FabricObject.md).[`borderScaleFactor`](FabricObject.md#borderscalefactor)

#### Source

src/shapes/Object/InteractiveObject.ts:76

***

### canvas?

> **`optional`** **canvas**: [`Canvas`](Canvas.md)

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`canvas`](../interfaces/EllipseProps.md#canvas)

#### Inherited from

[`FabricObject`](FabricObject.md).[`canvas`](FabricObject.md#canvas)

#### Source

src/shapes/Object/InteractiveObject.ts:135

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

[`EllipseProps`](../interfaces/EllipseProps.md).[`centeredRotation`](../interfaces/EllipseProps.md#centeredrotation)

#### Inherited from

[`FabricObject`](FabricObject.md).[`centeredRotation`](FabricObject.md#centeredrotation)

#### Source

src/shapes/Object/Object.ts:167

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

[`EllipseProps`](../interfaces/EllipseProps.md).[`centeredScaling`](../interfaces/EllipseProps.md#centeredscaling)

#### Inherited from

[`FabricObject`](FabricObject.md).[`centeredScaling`](FabricObject.md#centeredscaling)

#### Source

src/shapes/Object/Object.ts:168

***

### clipPath?

> **`optional`** **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`clipPath`](../interfaces/EllipseProps.md#clippath)

#### Inherited from

[`FabricObject`](FabricObject.md).[`clipPath`](FabricObject.md#clippath)

#### Source

src/shapes/Object/Object.ts:164

***

### clipPathId?

> **`optional`** **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[`FabricObject`](FabricObject.md).[`clipPathId`](FabricObject.md#clippathid)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:14

***

### controls

> **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[`FabricObject`](FabricObject.md).[`controls`](FabricObject.md#controls)

#### Source

src/shapes/Object/InteractiveObject.ts:117

***

### cornerColor

> **cornerColor**: `string`

Color of controlling corners of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`cornerColor`](../interfaces/EllipseProps.md#cornercolor)

#### Inherited from

[`FabricObject`](FabricObject.md).[`cornerColor`](FabricObject.md#cornercolor)

#### Source

src/shapes/Object/InteractiveObject.ts:67

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`cornerDashArray`](../interfaces/EllipseProps.md#cornerdasharray)

#### Inherited from

[`FabricObject`](FabricObject.md).[`cornerDashArray`](FabricObject.md#cornerdasharray)

#### Source

src/shapes/Object/InteractiveObject.ts:70

***

### cornerSize

> **cornerSize**: `number`

Size of object's controlling corners (in pixels)

#### Default

```ts
13
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`cornerSize`](../interfaces/EllipseProps.md#cornersize)

#### Inherited from

[`FabricObject`](FabricObject.md).[`cornerSize`](FabricObject.md#cornersize)

#### Source

src/shapes/Object/InteractiveObject.ts:64

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

[`EllipseProps`](../interfaces/EllipseProps.md).[`cornerStrokeColor`](../interfaces/EllipseProps.md#cornerstrokecolor)

#### Inherited from

[`FabricObject`](FabricObject.md).[`cornerStrokeColor`](FabricObject.md#cornerstrokecolor)

#### Source

src/shapes/Object/InteractiveObject.ts:68

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

[`EllipseProps`](../interfaces/EllipseProps.md).[`cornerStyle`](../interfaces/EllipseProps.md#cornerstyle)

#### Inherited from

[`FabricObject`](FabricObject.md).[`cornerStyle`](FabricObject.md#cornerstyle)

#### Source

src/shapes/Object/InteractiveObject.ts:69

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

[`FabricObject`](FabricObject.md).[`dirty`](FabricObject.md#dirty)

#### Source

src/shapes/Object/Object.ts:193

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`evented`](../interfaces/EllipseProps.md#evented)

#### Inherited from

[`FabricObject`](FabricObject.md).[`evented`](FabricObject.md#evented)

#### Source

src/shapes/Object/InteractiveObject.ts:81

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

[`EllipseProps`](../interfaces/EllipseProps.md).[`excludeFromExport`](../interfaces/EllipseProps.md#excludefromexport)

#### Inherited from

[`FabricObject`](FabricObject.md).[`excludeFromExport`](FabricObject.md#excludefromexport)

#### Source

src/shapes/Object/Object.ts:160

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`fill`](../interfaces/EllipseProps.md#fill)

#### Inherited from

[`FabricObject`](FabricObject.md).[`fill`](FabricObject.md#fill)

#### Source

src/shapes/Object/Object.ts:143

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

[`EllipseProps`](../interfaces/EllipseProps.md).[`fillRule`](../interfaces/EllipseProps.md#fillrule)

#### Inherited from

[`FabricObject`](FabricObject.md).[`fillRule`](FabricObject.md#fillrule)

#### Source

src/shapes/Object/Object.ts:144

***

### flipX

> **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`flipX`](../interfaces/EllipseProps.md#flipx)

#### Inherited from

[`FabricObject`](FabricObject.md).[`flipX`](FabricObject.md#flipx)

#### Source

src/shapes/Object/ObjectOrigin.ts:21

***

### flipY

> **flipY**: `boolean`

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`flipY`](../interfaces/EllipseProps.md#flipy)

#### Inherited from

[`FabricObject`](FabricObject.md).[`flipY`](FabricObject.md#flipy)

#### Source

src/shapes/Object/ObjectOrigin.ts:22

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`globalCompositeOperation`](../interfaces/EllipseProps.md#globalcompositeoperation)

#### Inherited from

[`FabricObject`](FabricObject.md).[`globalCompositeOperation`](FabricObject.md#globalcompositeoperation)

#### Source

src/shapes/Object/Object.ts:152

***

### hasBorders

> **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`hasBorders`](../interfaces/EllipseProps.md#hasborders)

#### Inherited from

[`FabricObject`](FabricObject.md).[`hasBorders`](FabricObject.md#hasborders)

#### Source

src/shapes/Object/InteractiveObject.ts:77

***

### hasControls

> **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`hasControls`](../interfaces/EllipseProps.md#hascontrols)

#### Inherited from

[`FabricObject`](FabricObject.md).[`hasControls`](FabricObject.md#hascontrols)

#### Source

src/shapes/Object/InteractiveObject.ts:71

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`height`](../interfaces/EllipseProps.md#height)

#### Inherited from

[`FabricObject`](FabricObject.md).[`height`](FabricObject.md#height)

#### Source

src/shapes/Object/ObjectOrigin.ts:20

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`hoverCursor`](../interfaces/EllipseProps.md#hovercursor)

#### Inherited from

[`FabricObject`](FabricObject.md).[`hoverCursor`](FabricObject.md#hovercursor)

#### Source

src/shapes/Object/InteractiveObject.ts:85

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`includeDefaultValues`](../interfaces/EllipseProps.md#includedefaultvalues)

#### Inherited from

[`FabricObject`](FabricObject.md).[`includeDefaultValues`](FabricObject.md#includedefaultvalues)

#### Source

src/shapes/Object/Object.ts:159

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

[`EllipseProps`](../interfaces/EllipseProps.md).[`inverted`](../interfaces/EllipseProps.md#inverted)

#### Inherited from

[`FabricObject`](FabricObject.md).[`inverted`](FabricObject.md#inverted)

#### Source

src/shapes/Object/Object.ts:165

***

### isMoving?

> **`optional`** **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[`FabricObject`](FabricObject.md).[`isMoving`](FabricObject.md#ismoving)

#### Source

src/shapes/Object/InteractiveObject.ts:123

***

### left

> **left**: `number`

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [originX](../../../../api/classes/interfaces/fabricobjectprops/#originx)

#### Default

```ts
0
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`left`](../interfaces/EllipseProps.md#left)

#### Inherited from

[`FabricObject`](FabricObject.md).[`left`](FabricObject.md#left)

#### Source

src/shapes/Object/ObjectOrigin.ts:18

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`lockMovementX`](../interfaces/EllipseProps.md#lockmovementx)

#### Inherited from

[`FabricObject`](FabricObject.md).[`lockMovementX`](FabricObject.md#lockmovementx)

#### Source

src/shapes/Object/InteractiveObject.ts:55

***

### lockMovementY

> **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`lockMovementY`](../interfaces/EllipseProps.md#lockmovementy)

#### Inherited from

[`FabricObject`](FabricObject.md).[`lockMovementY`](FabricObject.md#lockmovementy)

#### Source

src/shapes/Object/InteractiveObject.ts:56

***

### lockRotation

> **lockRotation**: `boolean`

When `true`, object rotation is locked

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`lockRotation`](../interfaces/EllipseProps.md#lockrotation)

#### Inherited from

[`FabricObject`](FabricObject.md).[`lockRotation`](FabricObject.md#lockrotation)

#### Source

src/shapes/Object/InteractiveObject.ts:57

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`lockScalingFlip`](../interfaces/EllipseProps.md#lockscalingflip)

#### Inherited from

[`FabricObject`](FabricObject.md).[`lockScalingFlip`](FabricObject.md#lockscalingflip)

#### Source

src/shapes/Object/InteractiveObject.ts:62

***

### lockScalingX

> **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`lockScalingX`](../interfaces/EllipseProps.md#lockscalingx)

#### Inherited from

[`FabricObject`](FabricObject.md).[`lockScalingX`](FabricObject.md#lockscalingx)

#### Source

src/shapes/Object/InteractiveObject.ts:58

***

### lockScalingY

> **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`lockScalingY`](../interfaces/EllipseProps.md#lockscalingy)

#### Inherited from

[`FabricObject`](FabricObject.md).[`lockScalingY`](FabricObject.md#lockscalingy)

#### Source

src/shapes/Object/InteractiveObject.ts:59

***

### lockSkewingX

> **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`lockSkewingX`](../interfaces/EllipseProps.md#lockskewingx)

#### Inherited from

[`FabricObject`](FabricObject.md).[`lockSkewingX`](FabricObject.md#lockskewingx)

#### Source

src/shapes/Object/InteractiveObject.ts:60

***

### lockSkewingY

> **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`lockSkewingY`](../interfaces/EllipseProps.md#lockskewingy)

#### Inherited from

[`FabricObject`](FabricObject.md).[`lockSkewingY`](FabricObject.md#lockskewingy)

#### Source

src/shapes/Object/InteractiveObject.ts:61

***

### matrixCache?

> **`optional`** **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[`FabricObject`](FabricObject.md).[`matrixCache`](FabricObject.md#matrixcache)

#### Source

src/shapes/Object/ObjectGeometry.ts:60

***

### minScaleLimit

> **minScaleLimit**: `number`

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`minScaleLimit`](../interfaces/EllipseProps.md#minscalelimit)

#### Inherited from

[`FabricObject`](FabricObject.md).[`minScaleLimit`](FabricObject.md#minscalelimit)

#### Source

src/shapes/Object/Object.ts:138

***

### moveCursor

> **moveCursor**: `null` \| `string`

Default cursor value used when moving this object on canvas

#### Default

```ts
null
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`moveCursor`](../interfaces/EllipseProps.md#movecursor)

#### Inherited from

[`FabricObject`](FabricObject.md).[`moveCursor`](FabricObject.md#movecursor)

#### Source

src/shapes/Object/InteractiveObject.ts:86

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

[`EllipseProps`](../interfaces/EllipseProps.md).[`noScaleCache`](../interfaces/EllipseProps.md#noscalecache)

#### Inherited from

[`FabricObject`](FabricObject.md).[`noScaleCache`](FabricObject.md#noscalecache)

#### Source

src/shapes/Object/InteractiveObject.ts:50

***

### oCoords

> **oCoords**: `Record`\<`string`, `TOCoord`\>

The object's controls' position in viewport coordinates
Calculated by [Control#positionHandler](../../../../api/classes/control/#positionhandler) and [Control#calcCornerCoords](../../../../api/classes/control/#calccornercoords), depending on [padding](../../../../api/classes/fabricobject/#padding).
`corner/touchCorner` describe the 4 points forming the interactive area of the corner.
Used to draw and locate controls.

#### Inherited from

[`FabricObject`](FabricObject.md).[`oCoords`](FabricObject.md#ocoords)

#### Source

src/shapes/Object/InteractiveObject.ts:94

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

[`EllipseProps`](../interfaces/EllipseProps.md).[`objectCaching`](../interfaces/EllipseProps.md#objectcaching)

#### Inherited from

[`FabricObject`](FabricObject.md).[`objectCaching`](FabricObject.md#objectcaching)

#### Source

src/shapes/Object/Object.ts:162

***

### opacity

> **opacity**: `number`

Opacity of an object

#### Default

```ts
1
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`opacity`](../interfaces/EllipseProps.md#opacity)

#### Inherited from

[`FabricObject`](FabricObject.md).[`opacity`](FabricObject.md#opacity)

#### Source

src/shapes/Object/Object.ts:140

***

### originX

> **originX**: [`TOriginX`](../type-aliases/TOriginX.md)

Horizontal origin of transformation of an object (`left`, `center`, `right`  or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'left'
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`originX`](../interfaces/EllipseProps.md#originx)

#### Inherited from

[`FabricObject`](FabricObject.md).[`originX`](FabricObject.md#originx)

#### Source

src/shapes/Object/ObjectOrigin.ts:27

***

### originY

> **originY**: [`TOriginY`](../type-aliases/TOriginY.md)

Vertical origin of transformation of an object (`top`, `center`, `bottom` or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'top'
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`originY`](../interfaces/EllipseProps.md#originy)

#### Inherited from

[`FabricObject`](FabricObject.md).[`originY`](FabricObject.md#originy)

#### Source

src/shapes/Object/ObjectOrigin.ts:28

***

### ownMatrixCache?

> **`optional`** **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[`FabricObject`](FabricObject.md).[`ownMatrixCache`](FabricObject.md#ownmatrixcache)

#### Source

src/shapes/Object/ObjectGeometry.ts:55

***

### padding

> **padding**: `number`

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`padding`](../interfaces/EllipseProps.md#padding)

#### Inherited from

[`FabricObject`](FabricObject.md).[`padding`](FabricObject.md#padding)

#### Source

src/shapes/Object/ObjectGeometry.ts:40

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`paintFirst`](../interfaces/EllipseProps.md#paintfirst)

#### Inherited from

[`FabricObject`](FabricObject.md).[`paintFirst`](FabricObject.md#paintfirst)

#### Source

src/shapes/Object/Object.ts:142

***

### parent?

> **`optional`** **parent**: [`Group`](Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[`FabricObject`](FabricObject.md).[`parent`](FabricObject.md#parent)

#### Source

src/shapes/Object/StackedObject.ts:44

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`perPixelTargetFind`](../interfaces/EllipseProps.md#perpixeltargetfind)

#### Inherited from

[`FabricObject`](FabricObject.md).[`perPixelTargetFind`](FabricObject.md#perpixeltargetfind)

#### Source

src/shapes/Object/InteractiveObject.ts:82

***

### rx

> **rx**: `number`

Horizontal radius

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`rx`](../interfaces/EllipseProps.md#rx)

#### Source

src/shapes/Ellipse.ts:42

***

### ry

> **ry**: `number`

Vertical radius

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`ry`](../interfaces/EllipseProps.md#ry)

#### Source

src/shapes/Ellipse.ts:49

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`scaleX`](../interfaces/EllipseProps.md#scalex)

#### Inherited from

[`FabricObject`](FabricObject.md).[`scaleX`](FabricObject.md#scalex)

#### Source

src/shapes/Object/ObjectOrigin.ts:23

***

### scaleY

> **scaleY**: `number`

Object scale factor (vertical)

#### Default

```ts
1
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`scaleY`](../interfaces/EllipseProps.md#scaley)

#### Inherited from

[`FabricObject`](FabricObject.md).[`scaleY`](FabricObject.md#scaley)

#### Source

src/shapes/Object/ObjectOrigin.ts:24

***

### selectable

> **selectable**: `boolean`

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`selectable`](../interfaces/EllipseProps.md#selectable)

#### Inherited from

[`FabricObject`](FabricObject.md).[`selectable`](FabricObject.md#selectable)

#### Source

src/shapes/Object/InteractiveObject.ts:80

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

[`EllipseProps`](../interfaces/EllipseProps.md).[`selectionBackgroundColor`](../interfaces/EllipseProps.md#selectionbackgroundcolor)

#### Inherited from

[`FabricObject`](FabricObject.md).[`selectionBackgroundColor`](FabricObject.md#selectionbackgroundcolor)

#### Source

src/shapes/Object/InteractiveObject.ts:78

***

### shadow

> **shadow**: `null` \| [`Shadow`](Shadow.md)

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`shadow`](../interfaces/EllipseProps.md#shadow)

#### Inherited from

[`FabricObject`](FabricObject.md).[`shadow`](FabricObject.md#shadow)

#### Source

src/shapes/Object/Object.ts:155

***

### skewX

> **skewX**: `number`

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`skewX`](../interfaces/EllipseProps.md#skewx)

#### Inherited from

[`FabricObject`](FabricObject.md).[`skewX`](FabricObject.md#skewx)

#### Source

src/shapes/Object/ObjectOrigin.ts:25

***

### skewY

> **skewY**: `number`

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`skewY`](../interfaces/EllipseProps.md#skewy)

#### Inherited from

[`FabricObject`](FabricObject.md).[`skewY`](FabricObject.md#skewy)

#### Source

src/shapes/Object/ObjectOrigin.ts:26

***

### snapAngle?

> **`optional`** **snapAngle**: [`TDegree`](../type-aliases/TDegree.md)

The angle that an object will lock to while rotating.

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`snapAngle`](../interfaces/EllipseProps.md#snapangle)

#### Inherited from

[`FabricObject`](FabricObject.md).[`snapAngle`](FabricObject.md#snapangle)

#### Source

src/shapes/Object/InteractiveObject.ts:52

***

### snapThreshold?

> **`optional`** **snapThreshold**: [`TDegree`](../type-aliases/TDegree.md)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`snapThreshold`](../interfaces/EllipseProps.md#snapthreshold)

#### Inherited from

[`FabricObject`](FabricObject.md).[`snapThreshold`](FabricObject.md#snapthreshold)

#### Source

src/shapes/Object/InteractiveObject.ts:53

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`stroke`](../interfaces/EllipseProps.md#stroke)

#### Inherited from

[`FabricObject`](FabricObject.md).[`stroke`](FabricObject.md#stroke)

#### Source

src/shapes/Object/Object.ts:145

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`strokeDashArray`](../interfaces/EllipseProps.md#strokedasharray)

#### Inherited from

[`FabricObject`](FabricObject.md).[`strokeDashArray`](FabricObject.md#strokedasharray)

#### Source

src/shapes/Object/Object.ts:146

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Line offset of an object's stroke

#### Default

```ts
0
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`strokeDashOffset`](../interfaces/EllipseProps.md#strokedashoffset)

#### Inherited from

[`FabricObject`](FabricObject.md).[`strokeDashOffset`](FabricObject.md#strokedashoffset)

#### Source

src/shapes/Object/Object.ts:147

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`strokeLineCap`](../interfaces/EllipseProps.md#strokelinecap)

#### Inherited from

[`FabricObject`](FabricObject.md).[`strokeLineCap`](FabricObject.md#strokelinecap)

#### Source

src/shapes/Object/Object.ts:148

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`strokeLineJoin`](../interfaces/EllipseProps.md#strokelinejoin)

#### Inherited from

[`FabricObject`](FabricObject.md).[`strokeLineJoin`](FabricObject.md#strokelinejoin)

#### Source

src/shapes/Object/Object.ts:149

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`strokeMiterLimit`](../interfaces/EllipseProps.md#strokemiterlimit)

#### Inherited from

[`FabricObject`](FabricObject.md).[`strokeMiterLimit`](FabricObject.md#strokemiterlimit)

#### Source

src/shapes/Object/Object.ts:150

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

[`EllipseProps`](../interfaces/EllipseProps.md).[`strokeUniform`](../interfaces/EllipseProps.md#strokeuniform)

#### Inherited from

[`FabricObject`](FabricObject.md).[`strokeUniform`](FabricObject.md#strokeuniform)

#### Source

src/shapes/Object/ObjectOrigin.ts:31

***

### strokeWidth

> **strokeWidth**: `number`

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`strokeWidth`](../interfaces/EllipseProps.md#strokewidth)

#### Inherited from

[`FabricObject`](FabricObject.md).[`strokeWidth`](FabricObject.md#strokewidth)

#### Source

src/shapes/Object/ObjectOrigin.ts:30

***

### top

> **top**: `number`

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [originY](../../../../api/classes/interfaces/fabricobjectprops/#originy)

#### Default

```ts
0
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`top`](../interfaces/EllipseProps.md#top)

#### Inherited from

[`FabricObject`](FabricObject.md).[`top`](FabricObject.md#top)

#### Source

src/shapes/Object/ObjectOrigin.ts:17

***

### touchCornerSize

> **touchCornerSize**: `number`

Size of object's controlling corners when touch interaction is detected

#### Default

```ts
24
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`touchCornerSize`](../interfaces/EllipseProps.md#touchcornersize)

#### Inherited from

[`FabricObject`](FabricObject.md).[`touchCornerSize`](FabricObject.md#touchcornersize)

#### Source

src/shapes/Object/InteractiveObject.ts:65

***

### transparentCorners

> **transparentCorners**: `boolean`

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

#### Default

```ts
true
```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`transparentCorners`](../interfaces/EllipseProps.md#transparentcorners)

#### Inherited from

[`FabricObject`](FabricObject.md).[`transparentCorners`](FabricObject.md#transparentcorners)

#### Source

src/shapes/Object/InteractiveObject.ts:66

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`visible`](../interfaces/EllipseProps.md#visible)

#### Inherited from

[`FabricObject`](FabricObject.md).[`visible`](FabricObject.md#visible)

#### Source

src/shapes/Object/Object.ts:157

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Implementation of

[`EllipseProps`](../interfaces/EllipseProps.md).[`width`](../interfaces/EllipseProps.md#width)

#### Inherited from

[`FabricObject`](FabricObject.md).[`width`](FabricObject.md#width)

#### Source

src/shapes/Object/ObjectOrigin.ts:19

***

### ATTRIBUTE\_NAMES

> **`static`** **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [Ellipse.fromElement](../../../../api/classes/ellipse/#fromelement))

#### Static

#### Member Of

Ellipse

#### See

http://www.w3.org/TR/SVG/shapes.html#EllipseElement

#### Source

src/shapes/Ellipse.ts:148

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

src/shapes/Ellipse.ts:53

***

### colorProperties

> **`static`** **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[`FabricObject`](FabricObject.md).[`colorProperties`](FabricObject.md#colorproperties)

#### Source

src/shapes/Object/AnimatableObject.ts:20

***

### ownDefaults

> **`static`** **ownDefaults**: `Partial`\<[`TClassProperties`](../type-aliases/TClassProperties.md)\<[`Ellipse`](Ellipse.md)\<`Partial`\<[`EllipseProps`](../interfaces/EllipseProps.md)\>, [`SerializedEllipseProps`](../interfaces/SerializedEllipseProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>\> = `ellipseDefaultValues`

#### Overrides

[`FabricObject`](FabricObject.md).[`ownDefaults`](FabricObject.md#owndefaults)

#### Source

src/shapes/Ellipse.ts:55

***

### stateProperties

> **`static`** **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[`FabricObject`](FabricObject.md).[`stateProperties`](FabricObject.md#stateproperties)

#### Source

src/shapes/Object/Object.ts:176

***

### type

> **`static`** **type**: `string` = `'Ellipse'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`FabricObject`](FabricObject.md).[`type`](FabricObject.md#type)

#### Source

src/shapes/Ellipse.ts:51

## Accessors

### type

> **`get`** **type**(): `string`

Legacy identifier of the class. Prefer using utils like isType or instanceOf
Will be removed in fabric 7 or 8.
The setter exists because is very hard to catch all the ways in which a type value
could be set in the instance

#### TODO

add sustainable warning message

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

> **`set`** **type**(`value`): `void`

#### Parameters

• **value**: `string`

#### Returns

`string`

#### Source

src/shapes/Object/Object.ts:320

## Methods

### \_drawClipPath()

> **\_drawClipPath**(`ctx`, `clipPath`?): `void`

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **clipPath?**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`_drawClipPath`](FabricObject.md#_drawclippath)

#### Source

src/shapes/Object/Object.ts:977

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

[`FabricObject`](FabricObject.md).[`_limitCacheSize`](FabricObject.md#_limitcachesize)

#### Source

src/shapes/Object/Object.ts:372

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`_removeCacheCanvas`](FabricObject.md#_removecachecanvas)

#### Source

src/shapes/Object/Object.ts:831

***

### \_renderControls()

> **\_renderControls**(`ctx`, `styleOverride`?): `void`

Renders controls and borders for the object
the context here is not transformed

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **styleOverride?**: `TStyleOverride`= `{}`

properties to override the object style

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`_renderControls`](FabricObject.md#_rendercontrols)

#### Todo

move to interactivity

#### Source

src/shapes/Object/InteractiveObject.ts:399

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`_setClippingProperties`](FabricObject.md#_setclippingproperties)

#### Source

src/shapes/Object/Object.ts:1117

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `__namedParameters`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **\_\_namedParameters**: `Pick`\<[`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>, `"fill"`\>

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`_setFillStyles`](FabricObject.md#_setfillstyles)

#### Source

src/shapes/Object/Object.ts:1106

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `decl`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **decl**: `Pick`\<[`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>, `"strokeDashOffset"` \| `"strokeLineCap"` \| `"strokeLineJoin"` \| `"strokeMiterLimit"` \| `"strokeWidth"` \| `"stroke"`\>

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`_setStrokeStyles`](FabricObject.md#_setstrokestyles)

#### Source

src/shapes/Object/Object.ts:1064

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

[`FabricObject`](FabricObject.md).[`_setupCompositeOperation`](FabricObject.md#_setupcompositeoperation)

#### Source

src/shapes/Object/Object.ts:1571

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

src/shapes/Ellipse.ts:119

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`string`

#### Inherited from

[`FabricObject`](FabricObject.md).[`addPaintOrder`](FabricObject.md#addpaintorder)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:249

***

### animate()

> **animate**\<`T`\>(`animatable`, `options`?): `Record`\<`string`, [`TAnimation`](../namespaces/util/type-aliases/TAnimation.md)\<`T`\>\>

Animates object's properties

#### Type parameters

• **T** extends `number` \| [`TColorArg`](../type-aliases/TColorArg.md) \| `number`[]

#### Parameters

• **animatable**: `Record`\<`string`, `T`\>

map of keys and end values

• **options?**: `Partial`\<[`AnimationOptions`](../namespaces/util/type-aliases/AnimationOptions.md)\<`T`\>\>

#### Returns

`Record`\<`string`, [`TAnimation`](../namespaces/util/type-aliases/TAnimation.md)\<`T`\>\>

map of animation contexts

As object — multiple properties

object.animate(\{ left: ..., top: ... \});
object.animate(\{ left: ..., top: ... \}, \{ duration: ... \});

#### Inherited from

[`FabricObject`](FabricObject.md).[`animate`](FabricObject.md#animate)

#### Tutorial

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Source

src/shapes/Object/AnimatableObject.ts:34

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](../type-aliases/TCornerPoint.md)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](../type-aliases/TCornerPoint.md)

#### Inherited from

[`FabricObject`](FabricObject.md).[`calcACoords`](FabricObject.md#calcacoords)

#### Source

src/shapes/Object/ObjectGeometry.ts:414

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

[`FabricObject`](FabricObject.md).[`calcOCoords`](FabricObject.md#calcocoords)

#### Source

src/shapes/Object/InteractiveObject.ts:224

***

### calcOwnMatrix()

> **calcOwnMatrix**(): [`TMat2D`](../type-aliases/TMat2D.md)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](../type-aliases/TMat2D.md)

transform matrix for the object

#### Inherited from

[`FabricObject`](FabricObject.md).[`calcOwnMatrix`](FabricObject.md#calcownmatrix)

#### Source

src/shapes/Object/ObjectGeometry.ts:511

***

### calcTransformMatrix()

> **calcTransformMatrix**(`skipGroup`?): [`TMat2D`](../type-aliases/TMat2D.md)

calculate transform matrix that represents the current transformations from the
object's properties.

#### Parameters

• **skipGroup?**: `boolean`= `false`

return transform matrix for object not counting parent transformations
There are some situation in which this is useful to avoid the fake rotation.

#### Returns

[`TMat2D`](../type-aliases/TMat2D.md)

transform matrix for the object

#### Inherited from

[`FabricObject`](FabricObject.md).[`calcTransformMatrix`](FabricObject.md#calctransformmatrix)

#### Source

src/shapes/Object/ObjectGeometry.ts:483

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

[`FabricObject`](FabricObject.md).[`canDrop`](FabricObject.md#candrop)

#### Source

src/shapes/Object/InteractiveObject.ts:663

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

[`FabricObject`](FabricObject.md).[`clearContextTop`](FabricObject.md#clearcontexttop)

#### Todo

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Source

src/shapes/Object/InteractiveObject.ts:589

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

[`FabricObject`](FabricObject.md).[`clone`](FabricObject.md#clone)

#### Source

src/shapes/Object/Object.ts:1345

***

### cloneAsImage()

> **cloneAsImage**(`options`?): [`FabricImage`](FabricImage.md)\<`Partial`\<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

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

[`FabricImage`](FabricImage.md)\<`Partial`\<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object cloned as image.

#### Inherited from

[`FabricObject`](FabricObject.md).[`cloneAsImage`](FabricObject.md#cloneasimage)

#### Todo

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Source

src/shapes/Object/Object.ts:1371

***

### complexity()

> **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity of this instance (is 1 unless subclassed)

#### Inherited from

[`FabricObject`](FabricObject.md).[`complexity`](FabricObject.md#complexity)

#### Source

src/shapes/Object/Object.ts:1513

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Checks if point is inside the object

#### Parameters

• **point**: [`Point`](Point.md)

Point to check against

#### Returns

`boolean`

true if point is inside the object

#### Inherited from

[`FabricObject`](FabricObject.md).[`containsPoint`](FabricObject.md#containspoint)

#### Source

src/shapes/Object/ObjectGeometry.ts:269

***

### dispose()

> **dispose**(): `void`

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`dispose`](FabricObject.md#dispose)

#### Source

src/shapes/Object/Object.ts:1581

***

### drawBorders()

> **drawBorders**(`ctx`, `options`, `styleOverride`?): `void`

Draws borders of an object's bounding box.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

• **options**: `Required`\<`Omit`\<[`TComposeMatrixArgs`](../namespaces/util/type-aliases/TComposeMatrixArgs.md), `"flipX"` \| `"flipY"`\>\>

object representing current object parameters

• **styleOverride?**: `TStyleOverride`

object to override the object style

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`drawBorders`](FabricObject.md#drawborders)

#### Source

src/shapes/Object/InteractiveObject.ts:442

***

### drawCacheOnCanvas()

> **drawCacheOnCanvas**(`this`, `ctx`): `void`

Paint the cached copy of the object on the target context.

#### Parameters

• **this**: `TCachedFabricObject`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`drawCacheOnCanvas`](FabricObject.md#drawcacheoncanvas)

#### Source

src/shapes/Object/Object.ts:995

***

### drawClipPathOnCache()

> **drawClipPathOnCache**(`ctx`, `clipPath`): `void`

Execute the drawing operation for an object clipPath

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **clipPath**: `TCachedFabricObject`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`drawClipPathOnCache`](FabricObject.md#drawclippathoncache)

#### Source

src/shapes/Object/Object.ts:924

***

### drawControls()

> **drawControls**(`ctx`, `styleOverride`): `void`

Draws corners of an object's bounding box.
Requires public properties: width, height
Requires public options: cornerSize, padding

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

• **styleOverride**: `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>, `"cornerStyle"` \| `"cornerSize"` \| `"cornerColor"` \| `"cornerStrokeColor"` \| `"cornerDashArray"` \| `"transparentCorners"`\>\>= `{}`

object to override the object style

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`drawControls`](FabricObject.md#drawcontrols)

#### Source

src/shapes/Object/InteractiveObject.ts:511

***

### drawControlsConnectingLines()

> **drawControlsConnectingLines**(`ctx`, `size`): `void`

Draws lines from a borders of an object's bounding box to controls that have `withConnection` property set.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

• **size**: [`Point`](Point.md)

object size x = width, y = height

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`drawControlsConnectingLines`](FabricObject.md#drawcontrolsconnectinglines)

#### Source

src/shapes/Object/InteractiveObject.ts:481

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

[`FabricObject`](FabricObject.md).[`drawObject`](FabricObject.md#drawobject)

#### Source

src/shapes/Object/Object.ts:956

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

[`FabricObject`](FabricObject.md).[`drawSelectionBackground`](FabricObject.md#drawselectionbackground)

#### Todo

evaluate if make this disappear in favor of a pre-render hook for objects
this was added by Andrea Bogazzi to make possible some feature for work reasons
it seemed a good option, now is an edge case

#### Source

src/shapes/Object/InteractiveObject.ts:339

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`, `S`\>(`other`, `strict`?): `AncestryComparison`\<`S`\>

Compare ancestors

#### Type parameters

• **T** extends [`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>

• **S** extends `boolean`

#### Parameters

• **other**: `T`

• **strict?**: `S`

finds only ancestors that are objects (without canvas)

#### Returns

`AncestryComparison`\<`S`\>

an object that represent the ancestry situation.

#### Inherited from

[`FabricObject`](FabricObject.md).[`findCommonAncestors`](FabricObject.md#findcommonancestors)

#### Source

src/shapes/Object/StackedObject.ts:90

***

### fire()

> **fire**\<`K`\>(`eventName`, `options`?): `void`

Fires event with an optional options object

#### Type parameters

• **K** extends `string` \| `number` \| `symbol`

#### Parameters

• **eventName**: `K`

Event name to fire

• **options?**: `EventSpec`\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`fire`](FabricObject.md#fire)

#### Source

src/Observable.ts:159

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

[`FabricObject`](FabricObject.md).[`forEachControl`](FabricObject.md#foreachcontrol)

#### Source

src/shapes/Object/InteractiveObject.ts:317

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

[`FabricObject`](FabricObject.md).[`get`](FabricObject.md#get)

#### Source

src/CommonMethods.ts:59

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| `Object`

#### Returns

`undefined` \| `Object`

#### Inherited from

[`FabricObject`](FabricObject.md).[`getActiveControl`](FabricObject.md#getactivecontrol)

#### Source

src/shapes/Object/InteractiveObject.ts:170

***

### getAncestors()

> **getAncestors**\<`T`\>(`strict`?): `Ancestors`\<`T`\>

#### Type parameters

• **T** extends `boolean`

#### Parameters

• **strict?**: `T`

returns only ancestors that are objects (without canvas)

#### Returns

`Ancestors`\<`T`\>

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

[`FabricObject`](FabricObject.md).[`getAncestors`](FabricObject.md#getancestors)

#### Source

src/shapes/Object/StackedObject.ts:69

***

### getBoundingRect()

> **getBoundingRect**(): [`TBBox`](../type-aliases/TBBox.md)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Returns

[`TBBox`](../type-aliases/TBBox.md)

Object with left, top, width, height properties

#### Inherited from

[`FabricObject`](FabricObject.md).[`getBoundingRect`](FabricObject.md#getboundingrect)

#### Source

src/shapes/Object/ObjectGeometry.ts:330

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[`FabricObject`](FabricObject.md).[`getCanvasRetinaScaling`](FabricObject.md#getcanvasretinascaling)

#### Source

src/shapes/Object/ObjectGeometry.ts:387

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](Point.md)

#### Inherited from

[`FabricObject`](FabricObject.md).[`getCenterPoint`](FabricObject.md#getcenterpoint)

#### Source

src/shapes/Object/ObjectOrigin.ts:174

***

### getCoords()

> **getCoords**(): [`Point`](Point.md)[]

#### Returns

[`Point`](Point.md)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

[`FabricObject`](FabricObject.md).[`getCoords`](FabricObject.md#getcoords)

#### Source

src/shapes/Object/ObjectGeometry.ts:191

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[`FabricObject`](FabricObject.md).[`getObjectOpacity`](FabricObject.md#getobjectopacity)

#### Source

src/shapes/Object/Object.ts:690

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](Point.md)

#### Inherited from

[`FabricObject`](FabricObject.md).[`getObjectScaling`](FabricObject.md#getobjectscaling)

#### Source

src/shapes/Object/Object.ts:659

***

### getPointByOrigin()

> **getPointByOrigin**(`originX`, `originY`): [`Point`](Point.md)

Returns the coordinates of the object as if it has a different origin

#### Parameters

• **originX**: [`TOriginX`](../type-aliases/TOriginX.md)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](../type-aliases/TOriginY.md)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](Point.md)

#### Inherited from

[`FabricObject`](FabricObject.md).[`getPointByOrigin`](FabricObject.md#getpointbyorigin)

#### Source

src/shapes/Object/ObjectOrigin.ts:199

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](Point.md)

#### Inherited from

[`FabricObject`](FabricObject.md).[`getRelativeCenterPoint`](FabricObject.md#getrelativecenterpoint)

#### Source

src/shapes/Object/ObjectOrigin.ts:185

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](FabricObject.md#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](Ellipse.md#getx)

#### Inherited from

[`FabricObject`](FabricObject.md).[`getRelativeX`](FabricObject.md#getrelativex)

#### Source

src/shapes/Object/ObjectGeometry.ts:102

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x,y position according to object's [originX](FabricObject.md#originx) [originY](FabricObject.md#originy) properties in parent's coordinate plane

#### Inherited from

[`FabricObject`](FabricObject.md).[`getRelativeXY`](FabricObject.md#getrelativexy)

#### Source

src/shapes/Object/ObjectGeometry.ts:163

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](FabricObject.md#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](Ellipse.md#gety)

#### Inherited from

[`FabricObject`](FabricObject.md).[`getRelativeY`](FabricObject.md#getrelativey)

#### Source

src/shapes/Object/ObjectGeometry.ts:118

***

### getRx()

> **getRx**(): `number`

Returns horizontal radius of an object (according to how an object is scaled)

#### Returns

`number`

#### Source

src/shapes/Ellipse.ts:90

***

### getRy()

> **getRy**(): `number`

Returns Vertical radius of an object (according to how an object is scaled)

#### Returns

`number`

#### Source

src/shapes/Ellipse.ts:98

***

### getScaledHeight()

> **getScaledHeight**(): `number`

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

#### Inherited from

[`FabricObject`](FabricObject.md).[`getScaledHeight`](FabricObject.md#getscaledheight)

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Source

src/shapes/Object/ObjectGeometry.ts:348

***

### getScaledWidth()

> **getScaledWidth**(): `number`

Returns width of an object's bounding box counting transformations

#### Returns

`number`

width value

#### Inherited from

[`FabricObject`](FabricObject.md).[`getScaledWidth`](FabricObject.md#getscaledwidth)

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Source

src/shapes/Object/ObjectGeometry.ts:339

***

### getSvgCommons()

> **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> & `Object`

#### Returns

`string`

#### Inherited from

[`FabricObject`](FabricObject.md).[`getSvgCommons`](FabricObject.md#getsvgcommons)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:84

***

### getSvgFilter()

> **getSvgFilter**(`this`): `string`

Returns filter for svg shadow

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`string`

#### Inherited from

[`FabricObject`](FabricObject.md).[`getSvgFilter`](FabricObject.md#getsvgfilter)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:76

***

### getSvgStyles()

> **getSvgStyles**(`this`, `skipShadow`?): `string`

Returns styles-string for svg-export

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

• **skipShadow?**: `boolean`

a boolean to skip shadow filter output

#### Returns

`string`

#### Inherited from

[`FabricObject`](FabricObject.md).[`getSvgStyles`](FabricObject.md#getsvgstyles)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:21

***

### getSvgTransform()

> **getSvgTransform**(`this`, `full`?, `additionalTransform`?): `string`

Returns transform-string for svg-export

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

• **full?**: `boolean`

• **additionalTransform?**: `string`= `''`

#### Returns

`string`

#### Inherited from

[`FabricObject`](FabricObject.md).[`getSvgTransform`](FabricObject.md#getsvgtransform)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:103

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](../type-aliases/TDegree.md)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](../type-aliases/TDegree.md)

#### Inherited from

[`FabricObject`](FabricObject.md).[`getTotalAngle`](FabricObject.md#gettotalangle)

#### Source

src/shapes/Object/ObjectGeometry.ts:395

***

### getTotalObjectScaling()

> **getTotalObjectScaling**(): [`Point`](Point.md)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](Point.md)

object with scaleX and scaleY properties

#### Inherited from

[`FabricObject`](FabricObject.md).[`getTotalObjectScaling`](FabricObject.md#gettotalobjectscaling)

#### Source

src/shapes/Object/Object.ts:676

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](../type-aliases/TMat2D.md)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](../type-aliases/TMat2D.md)

#### Inherited from

[`FabricObject`](FabricObject.md).[`getViewportTransform`](FabricObject.md#getviewporttransform)

#### Source

src/shapes/Object/ObjectGeometry.ts:405

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](FabricObject.md#originx) property in canvas coordinate plane

#### Inherited from

[`FabricObject`](FabricObject.md).[`getX`](FabricObject.md#getx)

#### Source

src/shapes/Object/ObjectGeometry.ts:73

***

### getXY()

> **getXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x position according to object's [originX](FabricObject.md#originx) [originY](FabricObject.md#originy) properties in canvas coordinate plane

#### Inherited from

[`FabricObject`](FabricObject.md).[`getXY`](FabricObject.md#getxy)

#### Source

src/shapes/Object/ObjectGeometry.ts:133

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](FabricObject.md#originy) property in canvas coordinate plane

#### Inherited from

[`FabricObject`](FabricObject.md).[`getY`](FabricObject.md#gety)

#### Source

src/shapes/Object/ObjectGeometry.ts:87

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`, `strict`?): `boolean`

#### Type parameters

• **T** extends [`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

• **strict?**: `boolean`

checks only ancestors that are objects (without canvas)

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](FabricObject.md).[`hasCommonAncestors`](FabricObject.md#hascommonancestors)

#### Source

src/shapes/Object/StackedObject.ts:159

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

[`FabricObject`](FabricObject.md).[`hasFill`](FabricObject.md#hasfill)

#### Since

3.0.0

#### Source

src/shapes/Object/Object.ts:864

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

[`FabricObject`](FabricObject.md).[`hasStroke`](FabricObject.md#hasstroke)

#### Since

3.0.0

#### Source

src/shapes/Object/Object.ts:848

***

### intersectsWithObject()

> **intersectsWithObject**(`other`): `boolean`

Checks if object intersects with another object

#### Parameters

• **other**: `ObjectGeometry`\<[`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to test

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

[`FabricObject`](FabricObject.md).[`intersectsWithObject`](FabricObject.md#intersectswithobject)

#### Source

src/shapes/Object/ObjectGeometry.ts:219

***

### intersectsWithRect()

> **intersectsWithRect**(`tl`, `br`): `boolean`

Checks if object intersects with the scene rect formed by tl and br

#### Parameters

• **tl**: [`Point`](Point.md)

• **br**: [`Point`](Point.md)

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](FabricObject.md).[`intersectsWithRect`](FabricObject.md#intersectswithrect)

#### Source

src/shapes/Object/ObjectGeometry.ts:205

***

### isCacheDirty()

> **isCacheDirty**(`skipCanvas`): `boolean`

Check if cache is dirty

#### Parameters

• **skipCanvas**: `boolean`= `false`

skip canvas checks because this object is painted
on parent canvas.

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](FabricObject.md).[`isCacheDirty`](FabricObject.md#iscachedirty)

#### Source

src/shapes/Object/Object.ts:1009

***

### isContainedWithinObject()

> **isContainedWithinObject**(`other`): `boolean`

Checks if object is fully contained within area of another object

#### Parameters

• **other**: `ObjectGeometry`\<[`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to test

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

[`FabricObject`](FabricObject.md).[`isContainedWithinObject`](FabricObject.md#iscontainedwithinobject)

#### Source

src/shapes/Object/ObjectGeometry.ts:238

***

### isContainedWithinRect()

> **isContainedWithinRect**(`tl`, `br`): `boolean`

Checks if object is fully contained within the scene rect formed by tl and br

#### Parameters

• **tl**: [`Point`](Point.md)

• **br**: [`Point`](Point.md)

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](FabricObject.md).[`isContainedWithinRect`](FabricObject.md#iscontainedwithinrect)

#### Source

src/shapes/Object/ObjectGeometry.ts:246

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

[`FabricObject`](FabricObject.md).[`isControlVisible`](FabricObject.md#iscontrolvisible)

#### Source

src/shapes/Object/InteractiveObject.ts:546

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

[`FabricObject`](FabricObject.md).[`isDescendantOf`](FabricObject.md#isdescendantof)

#### Source

src/shapes/Object/StackedObject.ts:52

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

• **T** extends [`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[`FabricObject`](FabricObject.md).[`isInFrontOf`](FabricObject.md#isinfrontof)

#### Source

src/shapes/Object/StackedObject.ts:169

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](FabricObject.md).[`isNotVisible`](FabricObject.md#isnotvisible)

#### Source

src/shapes/Object/Object.ts:771

***

### isOnScreen()

> **isOnScreen**(): `boolean`

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

[`FabricObject`](FabricObject.md).[`isOnScreen`](FabricObject.md#isonscreen)

#### Source

src/shapes/Object/ObjectGeometry.ts:278

***

### isOverlapping()

> **isOverlapping**\<`T`\>(`other`): `boolean`

#### Type parameters

• **T** extends `ObjectGeometry`\<[`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Parameters

• **other**: `T`

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](FabricObject.md).[`isOverlapping`](FabricObject.md#isoverlapping)

#### Source

src/shapes/Object/ObjectGeometry.ts:256

***

### isPartiallyOnScreen()

> **isPartiallyOnScreen**(): `boolean`

Checks if object is partially contained within the canvas with current viewportTransform

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

[`FabricObject`](FabricObject.md).[`isPartiallyOnScreen`](FabricObject.md#ispartiallyonscreen)

#### Source

src/shapes/Object/ObjectGeometry.ts:308

***

### isType()

> **isType**(...`types`): `boolean`

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

• ...**types**: `string`[]

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](FabricObject.md).[`isType`](FabricObject.md#istype)

#### Source

src/shapes/Object/Object.ts:1502

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

[`FabricObject`](FabricObject.md).[`needsItsOwnCache`](FabricObject.md#needsitsowncache)

#### Source

src/shapes/Object/Object.ts:876

***

### off()

#### off(eventName, handler)

> **off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

##### Type parameters

• **K** extends `string` \| `number` \| `symbol`

##### Parameters

• **eventName**: `K`

event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`any`\>

event listener to unsubscribe

##### Returns

`void`

##### Inherited from

[`FabricObject`](FabricObject.md).[`off`](FabricObject.md#off)

##### Source

src/Observable.ts:120

#### off(handlers)

> **off**(`handlers`): `void`

unsubscribe event listeners

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

handlers key/value pairs (eg. \{'after:render': handler, 'selection:cleared': handler\})

##### Returns

`void`

##### Inherited from

[`FabricObject`](FabricObject.md).[`off`](FabricObject.md#off)

##### Source

src/Observable.ts:125

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

[`FabricObject`](FabricObject.md).[`off`](FabricObject.md#off)

##### Source

src/Observable.ts:129

***

### on()

#### on(eventName, handler)

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

##### Type parameters

• **K** extends `string` \| `number` \| `symbol`

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

[`FabricObject`](FabricObject.md).[`on`](FabricObject.md#on)

##### Alias

on

##### Source

src/Observable.ts:23

#### on(handlers)

> **on**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

##### Returns

`VoidFunction`

##### Inherited from

[`FabricObject`](FabricObject.md).[`on`](FabricObject.md#on)

##### Source

src/Observable.ts:27

***

### onDeselect()

> **onDeselect**(`options`?): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to deselect this object. If the function returns true, the process is cancelled

#### Parameters

• **options?**

options sent from the upper functions

• **options\.e?**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

event if the process is generated by an event

• **options\.object?**: `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

next object we are setting as active, and reason why
this is being deselected

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](FabricObject.md).[`onDeselect`](FabricObject.md#ondeselect)

#### Source

src/shapes/Object/InteractiveObject.ts:620

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

[`FabricObject`](FabricObject.md).[`onDragStart`](FabricObject.md#ondragstart)

#### Source

src/shapes/Object/InteractiveObject.ts:653

***

### onSelect()

> **onSelect**(`options`?): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to select this object. If the function returns true, the process is cancelled

#### Parameters

• **options?**

options sent from the upper functions

• **options\.e?**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

event if the process is generated by an event

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](FabricObject.md).[`onSelect`](FabricObject.md#onselect)

#### Source

src/shapes/Object/InteractiveObject.ts:634

***

### once()

#### once(eventName, handler)

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

##### Type parameters

• **K** extends `string` \| `number` \| `symbol`

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

[`FabricObject`](FabricObject.md).[`once`](FabricObject.md#once)

##### Alias

once

##### Source

src/Observable.ts:62

#### once(handlers)

> **once**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

##### Returns

`VoidFunction`

##### Inherited from

[`FabricObject`](FabricObject.md).[`once`](FabricObject.md#once)

##### Source

src/Observable.ts:66

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

[`FabricObject`](FabricObject.md).[`render`](FabricObject.md#render)

#### Source

src/shapes/Object/Object.ts:783

***

### renderCache()

> **renderCache**(`options`?): `void`

#### Parameters

• **options?**: `any`

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`renderCache`](FabricObject.md#rendercache)

#### Source

src/shapes/Object/Object.ts:817

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

[`FabricObject`](FabricObject.md).[`renderDragSourceEffect`](FabricObject.md#renderdragsourceeffect)

#### Source

src/shapes/Object/InteractiveObject.ts:674

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

[`FabricObject`](FabricObject.md).[`renderDropTargetEffect`](FabricObject.md#renderdroptargeteffect)

#### Source

src/shapes/Object/InteractiveObject.ts:686

***

### rotate()

> **rotate**(`angle`): `void`

Sets "angle" of an instance with centered rotation

#### Parameters

• **angle**: [`TDegree`](../type-aliases/TDegree.md)

Angle value (in degrees)

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`rotate`](FabricObject.md#rotate)

#### Source

src/shapes/Object/Object.ts:1530

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

[`FabricObject`](FabricObject.md).[`scale`](FabricObject.md#scale)

#### Source

src/shapes/Object/ObjectGeometry.ts:357

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

[`FabricObject`](FabricObject.md).[`scaleToHeight`](FabricObject.md#scaletoheight)

#### Source

src/shapes/Object/ObjectGeometry.ts:380

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

[`FabricObject`](FabricObject.md).[`scaleToWidth`](FabricObject.md#scaletowidth)

#### Source

src/shapes/Object/ObjectGeometry.ts:368

***

### set()

> **set**(`key`, `value`?): [`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `any`\>

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`FabricObject`](FabricObject.md).[`set`](FabricObject.md#set)

#### Source

src/CommonMethods.ts:29

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

[`FabricObject`](FabricObject.md).[`setControlVisible`](FabricObject.md#setcontrolvisible)

#### Todo

discuss this overlap of priority here with the team. Andrea Bogazzi for details

#### Source

src/shapes/Object/InteractiveObject.ts:561

***

### setControlsVisibility()

> **setControlsVisibility**(`options`?): `void`

Sets the visibility state of object controls, this is just a bulk option for setControlVisible;

#### Parameters

• **options?**: `Record`\<`string`, `boolean`\>= `{}`

with an optional key per control
example: \{Boolean\} [options.bl] true to enable the bottom-left control, false to disable it

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`setControlsVisibility`](FabricObject.md#setcontrolsvisibility)

#### Source

src/shapes/Object/InteractiveObject.ts:573

***

### setCoords()

> **setCoords**(): `void`

set controls' coordinates as well
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`setCoords`](FabricObject.md#setcoords)

#### Source

src/shapes/Object/InteractiveObject.ts:307

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

[`FabricObject`](FabricObject.md).[`setOnGroup`](FabricObject.md#setongroup)

#### Source

src/shapes/Object/Object.ts:1562

***

### setPositionByOrigin()

> **setPositionByOrigin**(`pos`, `originX`, `originY`): `void`

Sets the position of the object taking into consideration the object's origin

#### Parameters

• **pos**: [`Point`](Point.md)

The new position of the object

• **originX**: [`TOriginX`](../type-aliases/TOriginX.md)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](../type-aliases/TOriginY.md)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`setPositionByOrigin`](FabricObject.md#setpositionbyorigin)

#### Source

src/shapes/Object/ObjectOrigin.ts:214

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](../../../../api/classes/ellipse/#setx)

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`setRelativeX`](FabricObject.md#setrelativex)

#### Source

src/shapes/Object/ObjectGeometry.ts:110

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/ellipse/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

• **point**: [`Point`](Point.md)

position according to object's originX originY properties in parent's coordinate plane

• **originX?**: [`TOriginX`](../type-aliases/TOriginX.md)= `undefined`

Horizontal origin: 'left', 'center' or 'right'

• **originY?**: [`TOriginY`](../type-aliases/TOriginY.md)= `undefined`

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`setRelativeXY`](FabricObject.md#setrelativexy)

#### Source

src/shapes/Object/ObjectGeometry.ts:173

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](../../../../api/classes/ellipse/#sety)

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`setRelativeY`](FabricObject.md#setrelativey)

#### Source

src/shapes/Object/ObjectGeometry.ts:126

***

### setX()

> **setX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`setX`](FabricObject.md#setx)

#### Source

src/shapes/Object/ObjectGeometry.ts:80

***

### setXY()

> **setXY**(`point`, `originX`?, `originY`?): `void`

Set an object position to a particular point, the point is intended in absolute ( canvas ) coordinate.
You can specify originX and originY values,
that otherwise are the object's current values.

#### Parameters

• **point**: [`Point`](Point.md)

position in canvas coordinate plane

• **originX?**: [`TOriginX`](../type-aliases/TOriginX.md)

Horizontal origin: 'left', 'center' or 'right'

• **originY?**: [`TOriginY`](../type-aliases/TOriginY.md)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`setXY`](FabricObject.md#setxy)

#### Example

```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Source

src/shapes/Object/ObjectGeometry.ts:150

***

### setY()

> **setY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`setY`](FabricObject.md#sety)

#### Source

src/shapes/Object/ObjectGeometry.ts:94

***

### shouldCache()

> **shouldCache**(): `boolean`

Decide if the object should cache or not. Create its own cache level
objectCaching is a global flag, wins over everything
needsItsOwnCache should be used when the object drawing method requires
a cache step. None of the fabric classes requires it.
Generally you do not cache objects in groups because the group outside is cached.
Read as: cache if is needed, or if the feature is enabled but we are not already caching.

#### Returns

`boolean`

#### Inherited from

[`FabricObject`](FabricObject.md).[`shouldCache`](FabricObject.md#shouldcache)

#### Source

src/shapes/Object/Object.ts:900

***

### shouldStartDragging()

> **shouldStartDragging**(): `boolean`

Override to customize Drag behavior
Fired from Canvas#_onMouseMove

#### Returns

`boolean`

true in order for the window to start a drag session

#### Inherited from

[`FabricObject`](FabricObject.md).[`shouldStartDragging`](FabricObject.md#shouldstartdragging)

#### Source

src/shapes/Object/InteractiveObject.ts:644

***

### strokeBorders()

> **strokeBorders**(`ctx`, `size`): `void`

override this function in order to customize the drawing of the control box, e.g. rounded corners, different border style.

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

ctx is rotated and translated so that (0,0) is at object's center

• **size**: [`Point`](Point.md)

the control box size used

#### Returns

`void`

#### Inherited from

[`FabricObject`](FabricObject.md).[`strokeBorders`](FabricObject.md#strokeborders)

#### Source

src/shapes/Object/InteractiveObject.ts:363

***

### toCanvasElement()

> **toCanvasElement**(`options`): `HTMLCanvasElement`

Converts an object into a HTMLCanvas element

#### Parameters

• **options**: `ObjectToCanvasElementOptions`= `{}`

Options object

#### Returns

`HTMLCanvasElement`

Returns DOM element `<canvas>` with the FabricObject

#### Inherited from

[`FabricObject`](FabricObject.md).[`toCanvasElement`](FabricObject.md#tocanvaselement)

#### Source

src/shapes/Object/Object.ts:1393

***

### toClipPathSVG()

> **toClipPathSVG**(`this`, `reviver`?): `string`

Returns svg clipPath representation of an instance

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

• **reviver?**: [`TSVGReviver`](../type-aliases/TSVGReviver.md)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Inherited from

[`FabricObject`](FabricObject.md).[`toClipPathSVG`](FabricObject.md#toclippathsvg)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:143

***

### toDataURL()

> **toDataURL**(`options`): `string`

Converts an object into a data-url-like string

#### Parameters

• **options**: `toDataURLOptions`= `{}`

Options object

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

#### Inherited from

[`FabricObject`](FabricObject.md).[`toDataURL`](FabricObject.md#todataurl)

#### Source

src/shapes/Object/Object.ts:1489

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

[`FabricObject`](FabricObject.md).[`toDatalessObject`](FabricObject.md#todatalessobject)

#### Source

src/shapes/Object/Object.ts:611

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

[`FabricObject`](FabricObject.md).[`toJSON`](FabricObject.md#tojson)

#### Source

src/shapes/Object/Object.ts:1521

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

• **T** extends `Omit`\<`Props` & [`TClassProperties`](../type-aliases/TClassProperties.md)\<[`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\>

• **K** extends `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[]= `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

object representation of an instance

#### Overrides

[`FabricObject`](FabricObject.md).[`toObject`](FabricObject.md#toobject)

#### Source

src/shapes/Ellipse.ts:107

***

### toSVG()

> **toSVG**(`this`, `reviver`?): `string`

Returns svg representation of an instance

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

• **reviver?**: [`TSVGReviver`](../type-aliases/TSVGReviver.md)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Inherited from

[`FabricObject`](FabricObject.md).[`toSVG`](FabricObject.md#tosvg)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:129

***

### toString()

> **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

#### Inherited from

[`FabricObject`](FabricObject.md).[`toString`](FabricObject.md#tostring)

#### Source

src/shapes/Object/Object.ts:651

***

### toggle()

> **toggle**(`property`): [`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`Ellipse`](Ellipse.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`FabricObject`](FabricObject.md).[`toggle`](FabricObject.md#toggle)

#### Source

src/CommonMethods.ts:46

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

[`FabricObject`](FabricObject.md).[`transform`](FabricObject.md#transform)

#### Source

src/shapes/Object/Object.ts:533

***

### transformMatrixKey()

> **transformMatrixKey**(`skipGroup`): `string`

#### Parameters

• **skipGroup**: `boolean`= `false`

#### Returns

`string`

#### Inherited from

[`FabricObject`](FabricObject.md).[`transformMatrixKey`](FabricObject.md#transformmatrixkey)

#### Source

src/shapes/Object/ObjectGeometry.ts:440

***

### translateToCenterPoint()

> **translateToCenterPoint**(`point`, `originX`, `originY`): [`Point`](Point.md)

Translates the coordinates from origin to center coordinates (based on the object's dimensions)

#### Parameters

• **point**: [`Point`](Point.md)

The point which corresponds to the originX and originY params

• **originX**: [`TOriginX`](../type-aliases/TOriginX.md)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](../type-aliases/TOriginY.md)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](Point.md)

#### Inherited from

[`FabricObject`](FabricObject.md).[`translateToCenterPoint`](FabricObject.md#translatetocenterpoint)

#### Source

src/shapes/Object/ObjectOrigin.ts:127

***

### translateToGivenOrigin()

> **translateToGivenOrigin**(`point`, `fromOriginX`, `fromOriginY`, `toOriginX`, `toOriginY`): [`Point`](Point.md)

Translates the coordinates from a set of origin to another (based on the object's dimensions)

#### Parameters

• **point**: [`Point`](Point.md)

The point which corresponds to the originX and originY params

• **fromOriginX**: [`TOriginX`](../type-aliases/TOriginX.md)

Horizontal origin: 'left', 'center' or 'right'

• **fromOriginY**: [`TOriginY`](../type-aliases/TOriginY.md)

Vertical origin: 'top', 'center' or 'bottom'

• **toOriginX**: [`TOriginX`](../type-aliases/TOriginX.md)

Horizontal origin: 'left', 'center' or 'right'

• **toOriginY**: [`TOriginY`](../type-aliases/TOriginY.md)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](Point.md)

#### Inherited from

[`FabricObject`](FabricObject.md).[`translateToGivenOrigin`](FabricObject.md#translatetogivenorigin)

#### Source

src/shapes/Object/ObjectOrigin.ts:99

***

### translateToOriginPoint()

> **translateToOriginPoint**(`center`, `originX`, `originY`): [`Point`](Point.md)

Translates the coordinates from center to origin coordinates (based on the object's dimensions)

#### Parameters

• **center**: [`Point`](Point.md)

The point which corresponds to center of the object

• **originX**: [`TOriginX`](../type-aliases/TOriginX.md)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](../type-aliases/TOriginY.md)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](Point.md)

#### Inherited from

[`FabricObject`](FabricObject.md).[`translateToOriginPoint`](FabricObject.md#translatetooriginpoint)

#### Source

src/shapes/Object/ObjectOrigin.ts:152

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

[`FabricObject`](FabricObject.md).[`willDrawShadow`](FabricObject.md#willdrawshadow)

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Source

src/shapes/Object/Object.ts:913

***

### \_fromObject()

> **`static`** **\_fromObject**\<`S`\>(`__namedParameters`, `__namedParameters`): `Promise`\<`S`\>

#### Type parameters

• **S** extends `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Parameters

• **\_\_namedParameters**: `Record`\<`string`, `unknown`\>

• **\_\_namedParameters**: [`Abortable`](../type-aliases/Abortable.md) & `Object`= `{}`

#### Returns

`Promise`\<`S`\>

#### Inherited from

[`FabricObject`](FabricObject.md).[`_fromObject`](FabricObject.md#_fromobject)

#### Source

src/shapes/Object/Object.ts:1600

***

### fromElement()

> **`static`** **fromElement**(`element`, `options`, `cssRules`?): `Promise`\<[`Ellipse`](Ellipse.md)\<`Record`\<`string`, `any`\>, [`SerializedEllipseProps`](../interfaces/SerializedEllipseProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

Returns [Ellipse](../../../../api/classes/ellipse) instance from an SVG element

#### Parameters

• **element**: `HTMLElement`

Element to parse

• **options**: [`Abortable`](../type-aliases/Abortable.md)

• **cssRules?**: `CSSRules`

#### Returns

`Promise`\<[`Ellipse`](Ellipse.md)\<`Record`\<`string`, `any`\>, [`SerializedEllipseProps`](../interfaces/SerializedEllipseProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

#### Static

#### Member Of

Ellipse

#### Source

src/shapes/Ellipse.ts:157

***

### fromObject()

> **`static`** **fromObject**\<`T`\>(`object`, `options`?): `Promise`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

#### Type parameters

• **T** extends [`TOptions`](../type-aliases/TOptions.md)\<[`SerializedObjectProps`](../interfaces/SerializedObjectProps.md)\>

#### Parameters

• **object**: `T`

• **options?**: [`Abortable`](../type-aliases/Abortable.md)

#### Returns

`Promise`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

#### Inherited from

[`FabricObject`](FabricObject.md).[`fromObject`](FabricObject.md#fromobject)

#### Source

src/shapes/Object/Object.ts:1627

***

### getDefaults()

> **`static`** **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

[`FabricObject`](FabricObject.md).[`getDefaults`](FabricObject.md#getdefaults)

#### Source

src/shapes/Ellipse.ts:57
