---
editUrl: false
next: false
prev: false
title: "Polygon"
---

## Extends

- [`Polyline`](/api/classes/polyline/)

## Constructors

### new Polygon()

> **new Polygon**(`points`, `options`?): [`Polygon`](/api/classes/polygon/)

Constructor

#### Parameters

• **points**: [`XY`](/api/interfaces/xy/)[] = `[]`

Array of points (where each point is an object with x and y)

• **options?**: `Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\> = `...`

Options object

#### Returns

[`Polygon`](/api/classes/polygon/)

thisArg

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`constructor`](/api/classes/polyline/#constructors)

#### Example

```ts
var poly = new Polyline([
    { x: 10, y: 10 },
    { x: 50, y: 30 },
    { x: 40, y: 70 },
    { x: 60, y: 50 },
    { x: 100, y: 150 },
    { x: 40, y: 100 }
  ], {
  stroke: 'red',
  left: 100,
  top: 100
});
```

#### Defined in

src/shapes/Polyline.ts:113

## Properties

### \_\_corner?

> `optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`__corner`](/api/classes/polyline/#__corner)

#### Defined in

src/shapes/Object/InteractiveObject.ts:104

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_controlsVisibility`](/api/classes/polyline/#_controlsvisibility)

#### Defined in

src/shapes/Object/InteractiveObject.ts:111

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

[`Polyline`](/api/classes/polyline/).[`_scaling`](/api/classes/polyline/#_scaling)

#### Defined in

src/shapes/Object/InteractiveObject.ts:133

***

### aCoords

> **aCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/polygon/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/polygon/#calcacoords)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`aCoords`](/api/classes/polyline/#acoords)

#### Defined in

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`absolutePositioned`](/api/classes/polyline/#absolutepositioned)

#### Defined in

src/shapes/Object/Object.ts:166

***

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`angle`](/api/classes/polyline/#angle)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:29

***

### backgroundColor

> **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`backgroundColor`](/api/classes/polyline/#backgroundcolor)

#### Defined in

src/shapes/Object/Object.ts:153

***

### borderColor

> **borderColor**: `string`

Color of controlling borders of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`borderColor`](/api/classes/polyline/#bordercolor)

#### Defined in

src/shapes/Object/InteractiveObject.ts:73

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`borderDashArray`](/api/classes/polyline/#borderdasharray)

#### Defined in

src/shapes/Object/InteractiveObject.ts:74

***

### borderOpacityWhenMoving

> **borderOpacityWhenMoving**: `number`

Opacity of object's controlling borders when object is active and moving

#### Default

```ts
0.4
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`borderOpacityWhenMoving`](/api/classes/polyline/#borderopacitywhenmoving)

#### Defined in

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`borderScaleFactor`](/api/classes/polyline/#borderscalefactor)

#### Defined in

src/shapes/Object/InteractiveObject.ts:76

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`centeredRotation`](/api/classes/polyline/#centeredrotation)

#### Defined in

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`centeredScaling`](/api/classes/polyline/#centeredscaling)

#### Defined in

src/shapes/Object/Object.ts:168

***

### clipPath?

> `optional` **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`clipPath`](/api/classes/polyline/#clippath)

#### Defined in

src/shapes/Object/Object.ts:164

***

### clipPathId?

> `optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`clipPathId`](/api/classes/polyline/#clippathid)

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:14

***

### controls

> **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`controls`](/api/classes/polyline/#controls)

#### Defined in

src/shapes/Object/InteractiveObject.ts:117

***

### cornerColor

> **cornerColor**: `string`

Color of controlling corners of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerColor`](/api/classes/polyline/#cornercolor)

#### Defined in

src/shapes/Object/InteractiveObject.ts:67

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerDashArray`](/api/classes/polyline/#cornerdasharray)

#### Defined in

src/shapes/Object/InteractiveObject.ts:70

***

### cornerSize

> **cornerSize**: `number`

Size of object's controlling corners (in pixels)

#### Default

```ts
13
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerSize`](/api/classes/polyline/#cornersize)

#### Defined in

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerStrokeColor`](/api/classes/polyline/#cornerstrokecolor)

#### Defined in

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerStyle`](/api/classes/polyline/#cornerstyle)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`dirty`](/api/classes/polyline/#dirty)

#### Defined in

src/shapes/Object/Object.ts:193

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`evented`](/api/classes/polyline/#evented)

#### Defined in

src/shapes/Object/InteractiveObject.ts:81

***

### ~~exactBoundingBox~~

> **exactBoundingBox**: `boolean`

WARNING: Feature in progress
Calculate the exact bounding box taking in account strokeWidth on acute angles
this will be turned to true by default on fabric 6.0
maybe will be left in as an optimization since calculations may be slow

#### Default

```ts
false
```

:::caution[Deprecated]
transient option soon to be removed in favor of a different design
:::

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`exactBoundingBox`](/api/classes/polyline/#exactboundingbox)

#### Defined in

src/shapes/Polyline.ts:57

***

### excludeFromExport

> **excludeFromExport**: `boolean`

When `true`, object is not exported in OBJECT/JSON

#### Since

1.6.3

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`excludeFromExport`](/api/classes/polyline/#excludefromexport)

#### Defined in

src/shapes/Object/Object.ts:160

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fill`](/api/classes/polyline/#fill)

#### Defined in

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fillRule`](/api/classes/polyline/#fillrule)

#### Defined in

src/shapes/Object/Object.ts:144

***

### flipX

> **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`flipX`](/api/classes/polyline/#flipx)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:21

***

### flipY

> **flipY**: `boolean`

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`flipY`](/api/classes/polyline/#flipy)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:22

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`globalCompositeOperation`](/api/classes/polyline/#globalcompositeoperation)

#### Defined in

src/shapes/Object/Object.ts:152

***

### hasBorders

> **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hasBorders`](/api/classes/polyline/#hasborders)

#### Defined in

src/shapes/Object/InteractiveObject.ts:77

***

### hasControls

> **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hasControls`](/api/classes/polyline/#hascontrols)

#### Defined in

src/shapes/Object/InteractiveObject.ts:71

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`height`](/api/classes/polyline/#height)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:20

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hoverCursor`](/api/classes/polyline/#hovercursor)

#### Defined in

src/shapes/Object/InteractiveObject.ts:85

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`includeDefaultValues`](/api/classes/polyline/#includedefaultvalues)

#### Defined in

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`inverted`](/api/classes/polyline/#inverted)

#### Defined in

src/shapes/Object/Object.ts:165

***

### isMoving?

> `optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isMoving`](/api/classes/polyline/#ismoving)

#### Defined in

src/shapes/Object/InteractiveObject.ts:123

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`left`](/api/classes/polyline/#left)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:18

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockMovementX`](/api/classes/polyline/#lockmovementx)

#### Defined in

src/shapes/Object/InteractiveObject.ts:55

***

### lockMovementY

> **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockMovementY`](/api/classes/polyline/#lockmovementy)

#### Defined in

src/shapes/Object/InteractiveObject.ts:56

***

### lockRotation

> **lockRotation**: `boolean`

When `true`, object rotation is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockRotation`](/api/classes/polyline/#lockrotation)

#### Defined in

src/shapes/Object/InteractiveObject.ts:57

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockScalingFlip`](/api/classes/polyline/#lockscalingflip)

#### Defined in

src/shapes/Object/InteractiveObject.ts:62

***

### lockScalingX

> **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockScalingX`](/api/classes/polyline/#lockscalingx)

#### Defined in

src/shapes/Object/InteractiveObject.ts:58

***

### lockScalingY

> **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockScalingY`](/api/classes/polyline/#lockscalingy)

#### Defined in

src/shapes/Object/InteractiveObject.ts:59

***

### lockSkewingX

> **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockSkewingX`](/api/classes/polyline/#lockskewingx)

#### Defined in

src/shapes/Object/InteractiveObject.ts:60

***

### lockSkewingY

> **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockSkewingY`](/api/classes/polyline/#lockskewingy)

#### Defined in

src/shapes/Object/InteractiveObject.ts:61

***

### matrixCache?

> `optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`matrixCache`](/api/classes/polyline/#matrixcache)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:60

***

### minScaleLimit

> **minScaleLimit**: `number`

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`minScaleLimit`](/api/classes/polyline/#minscalelimit)

#### Defined in

src/shapes/Object/Object.ts:138

***

### moveCursor

> **moveCursor**: `null` \| `string`

Default cursor value used when moving this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`moveCursor`](/api/classes/polyline/#movecursor)

#### Defined in

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`noScaleCache`](/api/classes/polyline/#noscalecache)

#### Defined in

src/shapes/Object/InteractiveObject.ts:50

***

### oCoords

> **oCoords**: `Record`\<`string`, `TOCoord`\>

The object's controls' position in viewport coordinates
Calculated by [Control#positionHandler](../../../../api/classes/control/#positionhandler) and [Control#calcCornerCoords](../../../../api/classes/control/#calccornercoords), depending on [padding](../../../../api/classes/fabricobject/#padding).
`corner/touchCorner` describe the 4 points forming the interactive area of the corner.
Used to draw and locate controls.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`oCoords`](/api/classes/polyline/#ocoords)

#### Defined in

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`objectCaching`](/api/classes/polyline/#objectcaching)

#### Defined in

src/shapes/Object/Object.ts:162

***

### opacity

> **opacity**: `number`

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`opacity`](/api/classes/polyline/#opacity)

#### Defined in

src/shapes/Object/Object.ts:140

***

### originX

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin of transformation of an object (`left`, `center`, `right`  or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'left'
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`originX`](/api/classes/polyline/#originx)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:27

***

### originY

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin of transformation of an object (`top`, `center`, `bottom` or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'top'
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`originY`](/api/classes/polyline/#originy)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:28

***

### ownMatrixCache?

> `optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`ownMatrixCache`](/api/classes/polyline/#ownmatrixcache)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:55

***

### padding

> **padding**: `number`

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`padding`](/api/classes/polyline/#padding)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:40

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`paintFirst`](/api/classes/polyline/#paintfirst)

#### Defined in

src/shapes/Object/Object.ts:142

***

### parent?

> `optional` **parent**: [`Group`](/api/classes/group/)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`parent`](/api/classes/polyline/#parent)

#### Defined in

src/shapes/Object/StackedObject.ts:44

***

### pathOffset

> **pathOffset**: [`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`pathOffset`](/api/classes/polyline/#pathoffset)

#### Defined in

src/shapes/Polyline.ts:86

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`perPixelTargetFind`](/api/classes/polyline/#perpixeltargetfind)

#### Defined in

src/shapes/Object/InteractiveObject.ts:82

***

### points

> **points**: [`XY`](/api/interfaces/xy/)[]

Points array

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`points`](/api/classes/polyline/#points)

#### Defined in

src/shapes/Polyline.ts:46

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`scaleX`](/api/classes/polyline/#scalex)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:23

***

### scaleY

> **scaleY**: `number`

Object scale factor (vertical)

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`scaleY`](/api/classes/polyline/#scaley)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:24

***

### selectable

> **selectable**: `boolean`

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`selectable`](/api/classes/polyline/#selectable)

#### Defined in

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`selectionBackgroundColor`](/api/classes/polyline/#selectionbackgroundcolor)

#### Defined in

src/shapes/Object/InteractiveObject.ts:78

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`shadow`](/api/classes/polyline/#shadow)

#### Defined in

src/shapes/Object/Object.ts:155

***

### skewX

> **skewX**: `number`

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`skewX`](/api/classes/polyline/#skewx)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:25

***

### skewY

> **skewY**: `number`

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`skewY`](/api/classes/polyline/#skewy)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:26

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

The angle that an object will lock to while rotating.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`snapAngle`](/api/classes/polyline/#snapangle)

#### Defined in

src/shapes/Object/InteractiveObject.ts:52

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`snapThreshold`](/api/classes/polyline/#snapthreshold)

#### Defined in

src/shapes/Object/InteractiveObject.ts:53

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`stroke`](/api/classes/polyline/#stroke)

#### Defined in

src/shapes/Object/Object.ts:145

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeDashArray`](/api/classes/polyline/#strokedasharray)

#### Defined in

src/shapes/Object/Object.ts:146

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Line offset of an object's stroke

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeDashOffset`](/api/classes/polyline/#strokedashoffset)

#### Defined in

src/shapes/Object/Object.ts:147

***

### strokeDiff

> **strokeDiff**: [`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeDiff`](/api/classes/polyline/#strokediff)

#### Defined in

src/shapes/Polyline.ts:92

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeLineCap`](/api/classes/polyline/#strokelinecap)

#### Defined in

src/shapes/Object/Object.ts:148

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeLineJoin`](/api/classes/polyline/#strokelinejoin)

#### Defined in

src/shapes/Object/Object.ts:149

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeMiterLimit`](/api/classes/polyline/#strokemiterlimit)

#### Defined in

src/shapes/Object/Object.ts:150

***

### strokeOffset

> **strokeOffset**: [`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeOffset`](/api/classes/polyline/#strokeoffset)

#### Defined in

src/shapes/Polyline.ts:88

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeUniform`](/api/classes/polyline/#strokeuniform)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:31

***

### strokeWidth

> **strokeWidth**: `number`

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeWidth`](/api/classes/polyline/#strokewidth)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:30

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`top`](/api/classes/polyline/#top)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:17

***

### touchCornerSize

> **touchCornerSize**: `number`

Size of object's controlling corners when touch interaction is detected

#### Default

```ts
24
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`touchCornerSize`](/api/classes/polyline/#touchcornersize)

#### Defined in

src/shapes/Object/InteractiveObject.ts:65

***

### transparentCorners

> **transparentCorners**: `boolean`

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

#### Default

```ts
true
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`transparentCorners`](/api/classes/polyline/#transparentcorners)

#### Defined in

src/shapes/Object/InteractiveObject.ts:66

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`visible`](/api/classes/polyline/#visible)

#### Defined in

src/shapes/Object/Object.ts:157

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`width`](/api/classes/polyline/#width)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:19

***

### ATTRIBUTE\_NAMES

> `static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [Polyline.fromElement](../../../../api/classes/polyline/#fromelement))

#### Static

#### Member Of

Polyline
@see: http://www.w3.org/TR/SVG/shapes.html#PolylineElement

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`ATTRIBUTE_NAMES`](/api/classes/polyline/#attribute_names)

#### Defined in

src/shapes/Polyline.ts:383

***

### cacheProperties

> `static` **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cacheProperties`](/api/classes/polyline/#cacheproperties)

#### Defined in

src/shapes/Polyline.ts:90

***

### colorProperties

> `static` **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`colorProperties`](/api/classes/polyline/#colorproperties)

#### Defined in

src/shapes/Object/AnimatableObject.ts:20

***

### layoutProperties

> `static` **layoutProperties**: keyof [`Polyline`](/api/classes/polyline/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

A list of properties that if changed trigger a recalculation of dimensions

#### Todo

check if you really need to recalculate for all cases

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`layoutProperties`](/api/classes/polyline/#layoutproperties)

#### Defined in

src/shapes/Polyline.ts:75

***

### ownDefaults

> `static` **ownDefaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`Polyline`](/api/classes/polyline/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>\> = `polylineDefaultValues`

#### Overrides

[`Polyline`](/api/classes/polyline/).[`ownDefaults`](/api/classes/polyline/#owndefaults)

#### Defined in

src/shapes/Polygon.ts:5

***

### stateProperties

> `static` **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`stateProperties`](/api/classes/polyline/#stateproperties)

#### Defined in

src/shapes/Object/Object.ts:176

***

### type

> `static` **type**: `string` = `'Polygon'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`Polyline`](/api/classes/polyline/).[`type`](/api/classes/polyline/#type)

#### Defined in

src/shapes/Polygon.ts:7

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

[`Polyline`](/api/classes/polyline/).[`type`](/api/classes/polyline/#type-1)

#### Defined in

src/shapes/Object/Object.ts:320

## Methods

### \_drawClipPath()

> **\_drawClipPath**(`ctx`, `clipPath`?): `void`

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **clipPath?**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_drawClipPath`](/api/classes/polyline/#_drawclippath)

#### Defined in

src/shapes/Object/Object.ts:977

***

### \_getNonTransformedDimensions()

> **\_getNonTransformedDimensions**(): [`Point`](/api/classes/point/)

stroke is taken in account in size

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_getNonTransformedDimensions`](/api/classes/polyline/#_getnontransformeddimensions)

#### Defined in

src/shapes/Polyline.ts:228

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

[`Polyline`](/api/classes/polyline/).[`_limitCacheSize`](/api/classes/polyline/#_limitcachesize)

#### Defined in

src/shapes/Object/Object.ts:372

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_removeCacheCanvas`](/api/classes/polyline/#_removecachecanvas)

#### Defined in

src/shapes/Object/Object.ts:831

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

[`Polyline`](/api/classes/polyline/).[`_renderControls`](/api/classes/polyline/#_rendercontrols)

#### Todo

move to interactivity

#### Defined in

src/shapes/Object/InteractiveObject.ts:399

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_setClippingProperties`](/api/classes/polyline/#_setclippingproperties)

#### Defined in

src/shapes/Object/Object.ts:1117

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `__namedParameters`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **\_\_namedParameters**: `Pick`\<[`Polygon`](/api/classes/polygon/), `"fill"`\>

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_setFillStyles`](/api/classes/polyline/#_setfillstyles)

#### Defined in

src/shapes/Object/Object.ts:1106

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `decl`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **decl**: `Pick`\<[`Polygon`](/api/classes/polygon/), `"strokeDashOffset"` \| `"strokeLineCap"` \| `"strokeLineJoin"` \| `"strokeMiterLimit"` \| `"strokeWidth"` \| `"stroke"`\>

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_setStrokeStyles`](/api/classes/polyline/#_setstrokestyles)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`_setupCompositeOperation`](/api/classes/polyline/#_setupcompositeoperation)

#### Defined in

src/shapes/Object/Object.ts:1571

***

### \_toSVG()

> **\_toSVG**(): `string`[]

Returns svg representation of an instance

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_toSVG`](/api/classes/polyline/#_tosvg)

#### Defined in

src/shapes/Polyline.ts:318

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`addPaintOrder`](/api/classes/polyline/#addpaintorder)

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:249

***

### animate()

> **animate**\<`T`\>(`animatable`, `options`?): `Record`\<`string`, [`TAnimation`](/api/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

Animates object's properties

#### Type Parameters

• **T** *extends* `number` \| [`TColorArg`](/api/type-aliases/tcolorarg/) \| `number`[]

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

[`Polyline`](/api/classes/polyline/).[`animate`](/api/classes/polyline/#animate)

#### Tutorial

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Defined in

src/shapes/Object/AnimatableObject.ts:34

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`calcACoords`](/api/classes/polyline/#calcacoords)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`calcOCoords`](/api/classes/polyline/#calcocoords)

#### Defined in

src/shapes/Object/InteractiveObject.ts:224

***

### calcOwnMatrix()

> **calcOwnMatrix**(): [`TMat2D`](/api/type-aliases/tmat2d/)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`calcOwnMatrix`](/api/classes/polyline/#calcownmatrix)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:511

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

[`Polyline`](/api/classes/polyline/).[`calcTransformMatrix`](/api/classes/polyline/#calctransformmatrix)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`canDrop`](/api/classes/polyline/#candrop)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`clearContextTop`](/api/classes/polyline/#clearcontexttop)

#### Todo

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Defined in

src/shapes/Object/InteractiveObject.ts:589

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`Polygon`](/api/classes/polygon/)\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`Polygon`](/api/classes/polygon/)\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`clone`](/api/classes/polyline/#clone)

#### Defined in

src/shapes/Object/Object.ts:1345

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

[`Polyline`](/api/classes/polyline/).[`cloneAsImage`](/api/classes/polyline/#cloneasimage)

#### Todo

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Defined in

src/shapes/Object/Object.ts:1371

***

### complexity()

> **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity of this instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`complexity`](/api/classes/polyline/#complexity)

#### Defined in

src/shapes/Polyline.ts:371

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

[`Polyline`](/api/classes/polyline/).[`containsPoint`](/api/classes/polyline/#containspoint)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:269

***

### dispose()

> **dispose**(): `void`

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`dispose`](/api/classes/polyline/#dispose)

#### Defined in

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

• **options**: `Required`\<`Omit`\<[`TComposeMatrixArgs`](/api/namespaces/util/type-aliases/tcomposematrixargs/), `"flipX"` \| `"flipY"`\>\>

object representing current object parameters

• **styleOverride?**: `TStyleOverride`

object to override the object style

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawBorders`](/api/classes/polyline/#drawborders)

#### Defined in

src/shapes/Object/InteractiveObject.ts:442

***

### drawCacheOnCanvas()

> **drawCacheOnCanvas**(`this`, `ctx`): `void`

Paint the cached copy of the object on the target context.

#### Parameters

• **this**: `TCachedFabricObject`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawCacheOnCanvas`](/api/classes/polyline/#drawcacheoncanvas)

#### Defined in

src/shapes/Object/Object.ts:995

***

### drawClipPathOnCache()

> **drawClipPathOnCache**(`ctx`, `clipPath`): `void`

Execute the drawing operation for an object clipPath

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **clipPath**: `TCachedFabricObject`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawClipPathOnCache`](/api/classes/polyline/#drawclippathoncache)

#### Defined in

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

• **styleOverride**: `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>, `"cornerStyle"` \| `"cornerSize"` \| `"cornerColor"` \| `"cornerStrokeColor"` \| `"cornerDashArray"` \| `"transparentCorners"`\>\> = `{}`

object to override the object style

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawControls`](/api/classes/polyline/#drawcontrols)

#### Defined in

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

• **size**: [`Point`](/api/classes/point/)

object size x = width, y = height

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawControlsConnectingLines`](/api/classes/polyline/#drawcontrolsconnectinglines)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`drawObject`](/api/classes/polyline/#drawobject)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`drawSelectionBackground`](/api/classes/polyline/#drawselectionbackground)

#### Todo

evaluate if make this disappear in favor of a pre-render hook for objects
this was added by Andrea Bogazzi to make possible some feature for work reasons
it seemed a good option, now is an edge case

#### Defined in

src/shapes/Object/InteractiveObject.ts:339

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`, `S`\>(`other`, `strict`?): `AncestryComparison`\<`S`\>

Compare ancestors

#### Type Parameters

• **T** *extends* [`Polygon`](/api/classes/polygon/)

• **S** *extends* `boolean`

#### Parameters

• **other**: `T`

• **strict?**: `S`

finds only ancestors that are objects (without canvas)

#### Returns

`AncestryComparison`\<`S`\>

an object that represent the ancestry situation.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`findCommonAncestors`](/api/classes/polyline/#findcommonancestors)

#### Defined in

src/shapes/Object/StackedObject.ts:90

***

### fire()

> **fire**\<`K`\>(`eventName`, `options`?): `void`

Fires event with an optional options object

#### Type Parameters

• **K** *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

#### Parameters

• **eventName**: `K`

Event name to fire

• **options?**: [`ObjectEvents`](/api/interfaces/objectevents/)\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fire`](/api/classes/polyline/#fire)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`forEachControl`](/api/classes/polyline/#foreachcontrol)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`get`](/api/classes/polyline/#get)

#### Defined in

src/CommonMethods.ts:59

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| `object`

#### Returns

`undefined` \| `object`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getActiveControl`](/api/classes/polyline/#getactivecontrol)

#### Defined in

src/shapes/Object/InteractiveObject.ts:170

***

### getAncestors()

> **getAncestors**\<`T`\>(`strict`?): `Ancestors`\<`T`\>

#### Type Parameters

• **T** *extends* `boolean`

#### Parameters

• **strict?**: `T`

returns only ancestors that are objects (without canvas)

#### Returns

`Ancestors`\<`T`\>

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getAncestors`](/api/classes/polyline/#getancestors)

#### Defined in

src/shapes/Object/StackedObject.ts:69

***

### getBoundingRect()

> **getBoundingRect**(): [`TBBox`](/api/type-aliases/tbbox/)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Returns

[`TBBox`](/api/type-aliases/tbbox/)

Object with left, top, width, height properties

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getBoundingRect`](/api/classes/polyline/#getboundingrect)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:330

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getCanvasRetinaScaling`](/api/classes/polyline/#getcanvasretinascaling)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:387

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getCenterPoint`](/api/classes/polyline/#getcenterpoint)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:174

***

### getCoords()

> **getCoords**(): [`Point`](/api/classes/point/)[]

#### Returns

[`Point`](/api/classes/point/)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getCoords`](/api/classes/polyline/#getcoords)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:191

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getObjectOpacity`](/api/classes/polyline/#getobjectopacity)

#### Defined in

src/shapes/Object/Object.ts:690

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getObjectScaling`](/api/classes/polyline/#getobjectscaling)

#### Defined in

src/shapes/Object/Object.ts:659

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

[`Polyline`](/api/classes/polyline/).[`getPointByOrigin`](/api/classes/polyline/#getpointbyorigin)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:199

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getRelativeCenterPoint`](/api/classes/polyline/#getrelativecenterpoint)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:185

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/api/api/classes/polygon/getx/#getx)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getRelativeX`](/api/classes/polyline/#getrelativex)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:102

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x,y position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in parent's coordinate plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getRelativeXY`](/api/classes/polyline/#getrelativexy)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:163

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/api/api/classes/polygon/gety/#gety)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getRelativeY`](/api/classes/polyline/#getrelativey)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:118

***

### getScaledHeight()

> **getScaledHeight**(): `number`

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getScaledHeight`](/api/classes/polyline/#getscaledheight)

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Defined in

src/shapes/Object/ObjectGeometry.ts:348

***

### getScaledWidth()

> **getScaledWidth**(): `number`

Returns width of an object's bounding box counting transformations

#### Returns

`number`

width value

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getScaledWidth`](/api/classes/polyline/#getscaledwidth)

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Defined in

src/shapes/Object/ObjectGeometry.ts:339

***

### getSvgCommons()

> **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> & `object`

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getSvgCommons`](/api/classes/polyline/#getsvgcommons)

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:84

***

### getSvgFilter()

> **getSvgFilter**(`this`): `string`

Returns filter for svg shadow

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getSvgFilter`](/api/classes/polyline/#getsvgfilter)

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:76

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

[`Polyline`](/api/classes/polyline/).[`getSvgStyles`](/api/classes/polyline/#getsvgstyles)

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:21

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

[`Polyline`](/api/classes/polyline/).[`getSvgTransform`](/api/classes/polyline/#getsvgtransform)

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:103

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](/api/type-aliases/tdegree/)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/api/type-aliases/tdegree/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getTotalAngle`](/api/classes/polyline/#gettotalangle)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:395

***

### getTotalObjectScaling()

> **getTotalObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/api/classes/point/)

object with scaleX and scaleY properties

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getTotalObjectScaling`](/api/classes/polyline/#gettotalobjectscaling)

#### Defined in

src/shapes/Object/Object.ts:676

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getViewportTransform`](/api/classes/polyline/#getviewporttransform)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:405

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in canvas coordinate plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getX`](/api/classes/polyline/#getx)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:73

***

### getXY()

> **getXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in canvas coordinate plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getXY`](/api/classes/polyline/#getxy)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:133

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in canvas coordinate plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getY`](/api/classes/polyline/#gety)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:87

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`, `strict`?): `boolean`

#### Type Parameters

• **T** *extends* [`Polygon`](/api/classes/polygon/)

#### Parameters

• **other**: `T`

• **strict?**: `boolean`

checks only ancestors that are objects (without canvas)

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hasCommonAncestors`](/api/classes/polyline/#hascommonancestors)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`hasFill`](/api/classes/polyline/#hasfill)

#### Since

3.0.0

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`hasStroke`](/api/classes/polyline/#hasstroke)

#### Since

3.0.0

#### Defined in

src/shapes/Object/Object.ts:848

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

[`Polyline`](/api/classes/polyline/).[`intersectsWithObject`](/api/classes/polyline/#intersectswithobject)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:219

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

[`Polyline`](/api/classes/polyline/).[`intersectsWithRect`](/api/classes/polyline/#intersectswithrect)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:205

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

[`Polyline`](/api/classes/polyline/).[`isCacheDirty`](/api/classes/polyline/#iscachedirty)

#### Defined in

src/shapes/Object/Object.ts:1009

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

[`Polyline`](/api/classes/polyline/).[`isContainedWithinObject`](/api/classes/polyline/#iscontainedwithinobject)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:238

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

[`Polyline`](/api/classes/polyline/).[`isContainedWithinRect`](/api/classes/polyline/#iscontainedwithinrect)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`isControlVisible`](/api/classes/polyline/#iscontrolvisible)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`isDescendantOf`](/api/classes/polyline/#isdescendantof)

#### Defined in

src/shapes/Object/StackedObject.ts:52

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type Parameters

• **T** *extends* [`Polygon`](/api/classes/polygon/)

#### Parameters

• **other**: `T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isInFrontOf`](/api/classes/polyline/#isinfrontof)

#### Defined in

src/shapes/Object/StackedObject.ts:169

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isNotVisible`](/api/classes/polyline/#isnotvisible)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`isOnScreen`](/api/classes/polyline/#isonscreen)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:278

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

[`Polyline`](/api/classes/polyline/).[`isOverlapping`](/api/classes/polyline/#isoverlapping)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:256

***

### isPartiallyOnScreen()

> **isPartiallyOnScreen**(): `boolean`

Checks if object is partially contained within the canvas with current viewportTransform

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isPartiallyOnScreen`](/api/classes/polyline/#ispartiallyonscreen)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`isType`](/api/classes/polyline/#istype)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`needsItsOwnCache`](/api/classes/polyline/#needsitsowncache)

#### Defined in

src/shapes/Object/Object.ts:876

***

### off()

#### off(eventName, handler)

> **off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

##### Type Parameters

• **K** *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

##### Parameters

• **eventName**: `K`

event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`any`\>

event listener to unsubscribe

##### Returns

`void`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`off`](/api/classes/polyline/#off)

##### Defined in

src/Observable.ts:120

#### off(handlers)

> **off**(`handlers`): `void`

unsubscribe event listeners

##### Parameters

• **handlers**: `EventRegistryObject`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`void`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`off`](/api/classes/polyline/#off)

##### Defined in

src/Observable.ts:125

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`off`](/api/classes/polyline/#off)

##### Defined in

src/Observable.ts:129

***

### on()

#### on(eventName, handler)

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

##### Type Parameters

• **K** *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

• **E** *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `object` \| `object` \| `object` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| [`DropEventData`](/api/interfaces/dropeventdata/) \| `SimpleEventHandler`\<`Event`\>

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`on`](/api/classes/polyline/#on)

##### Alias

on

##### Defined in

src/Observable.ts:23

#### on(handlers)

> **on**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

##### Returns

`VoidFunction`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`on`](/api/classes/polyline/#on)

##### Defined in

src/Observable.ts:27

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

[`Polyline`](/api/classes/polyline/).[`onDeselect`](/api/classes/polyline/#ondeselect)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`onDragStart`](/api/classes/polyline/#ondragstart)

#### Defined in

src/shapes/Object/InteractiveObject.ts:653

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

[`Polyline`](/api/classes/polyline/).[`onSelect`](/api/classes/polyline/#onselect)

#### Defined in

src/shapes/Object/InteractiveObject.ts:634

***

### once()

#### once(eventName, handler)

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

##### Type Parameters

• **K** *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

• **E** *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `object` \| `object` \| `object` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| [`DropEventData`](/api/interfaces/dropeventdata/) \| `SimpleEventHandler`\<`Event`\>

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`once`](/api/classes/polyline/#once)

##### Alias

once

##### Defined in

src/Observable.ts:62

#### once(handlers)

> **once**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

##### Returns

`VoidFunction`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`once`](/api/classes/polyline/#once)

##### Defined in

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

[`Polyline`](/api/classes/polyline/).[`render`](/api/classes/polyline/#render)

#### Defined in

src/shapes/Object/Object.ts:783

***

### renderCache()

> **renderCache**(`options`?): `void`

#### Parameters

• **options?**: `any`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`renderCache`](/api/classes/polyline/#rendercache)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`renderDragSourceEffect`](/api/classes/polyline/#renderdragsourceeffect)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`renderDropTargetEffect`](/api/classes/polyline/#renderdroptargeteffect)

#### Defined in

src/shapes/Object/InteractiveObject.ts:686

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

[`Polyline`](/api/classes/polyline/).[`rotate`](/api/classes/polyline/#rotate)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`scale`](/api/classes/polyline/#scale)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`scaleToHeight`](/api/classes/polyline/#scaletoheight)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`scaleToWidth`](/api/classes/polyline/#scaletowidth)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:368

***

### set()

> **set**(`key`, `value`?): [`Polygon`](/api/classes/polygon/)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `any`\>

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`Polygon`](/api/classes/polygon/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`set`](/api/classes/polyline/#set)

#### Defined in

src/CommonMethods.ts:29

***

### setBoundingBox()

> **setBoundingBox**(`adjustPosition`?): `void`

#### Parameters

• **adjustPosition?**: `boolean`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setBoundingBox`](/api/classes/polyline/#setboundingbox)

#### Defined in

src/shapes/Polyline.ts:206

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

[`Polyline`](/api/classes/polyline/).[`setControlVisible`](/api/classes/polyline/#setcontrolvisible)

#### Todo

discuss this overlap of priority here with the team. Andrea Bogazzi for details

#### Defined in

src/shapes/Object/InteractiveObject.ts:561

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

[`Polyline`](/api/classes/polyline/).[`setControlsVisibility`](/api/classes/polyline/#setcontrolsvisibility)

#### Defined in

src/shapes/Object/InteractiveObject.ts:573

***

### setCoords()

> **setCoords**(): `void`

set controls' coordinates as well
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setCoords`](/api/classes/polyline/#setcoords)

#### Defined in

src/shapes/Object/InteractiveObject.ts:307

***

### setDimensions()

> **setDimensions**(): `void`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setDimensions`](/api/classes/polyline/#setdimensions)

#### Defined in

src/shapes/Polyline.ts:202

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

[`Polyline`](/api/classes/polyline/).[`setOnGroup`](/api/classes/polyline/#setongroup)

#### Defined in

src/shapes/Object/Object.ts:1562

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

[`Polyline`](/api/classes/polyline/).[`setPositionByOrigin`](/api/classes/polyline/#setpositionbyorigin)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:214

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](../../../../api/classes/polygon/#setx)

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setRelativeX`](/api/classes/polyline/#setrelativex)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:110

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/polygon/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

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

[`Polyline`](/api/classes/polyline/).[`setRelativeXY`](/api/classes/polyline/#setrelativexy)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:173

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](../../../../api/classes/polygon/#sety)

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setRelativeY`](/api/classes/polyline/#setrelativey)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`setX`](/api/classes/polyline/#setx)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:80

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

[`Polyline`](/api/classes/polyline/).[`setXY`](/api/classes/polyline/#setxy)

#### Example

```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`setY`](/api/classes/polyline/#sety)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`shouldCache`](/api/classes/polyline/#shouldcache)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`shouldStartDragging`](/api/classes/polyline/#shouldstartdragging)

#### Defined in

src/shapes/Object/InteractiveObject.ts:644

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

[`Polyline`](/api/classes/polyline/).[`strokeBorders`](/api/classes/polyline/#strokeborders)

#### Defined in

src/shapes/Object/InteractiveObject.ts:363

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

[`Polyline`](/api/classes/polyline/).[`toCanvasElement`](/api/classes/polyline/#tocanvaselement)

#### Defined in

src/shapes/Object/Object.ts:1393

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

[`Polyline`](/api/classes/polyline/).[`toClipPathSVG`](/api/classes/polyline/#toclippathsvg)

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:143

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

[`Polyline`](/api/classes/polyline/).[`toDataURL`](/api/classes/polyline/#todataurl)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`toDatalessObject`](/api/classes/polyline/#todatalessobject)

#### Defined in

src/shapes/Object/Object.ts:611

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toJSON`](/api/classes/polyline/#tojson)

#### Defined in

src/shapes/Object/Object.ts:1521

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/)

Returns object representation of an instance

#### Type Parameters

• **T** *extends* `Omit`\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\> & [`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`Polygon`](/api/classes/polygon/)\>, keyof [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/)\>

• **K** *extends* `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[] = `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/)

Object representation of an instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toObject`](/api/classes/polyline/#toobject)

#### Defined in

src/shapes/Polyline.ts:303

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

[`Polyline`](/api/classes/polyline/).[`toSVG`](/api/classes/polyline/#tosvg)

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:129

***

### toString()

> **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toString`](/api/classes/polyline/#tostring)

#### Defined in

src/shapes/Object/Object.ts:651

***

### toggle()

> **toggle**(`property`): [`Polygon`](/api/classes/polygon/)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`Polygon`](/api/classes/polygon/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toggle`](/api/classes/polyline/#toggle)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`transform`](/api/classes/polyline/#transform)

#### Defined in

src/shapes/Object/Object.ts:533

***

### transformMatrixKey()

> **transformMatrixKey**(`skipGroup`): `string`

#### Parameters

• **skipGroup**: `boolean` = `false`

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`transformMatrixKey`](/api/classes/polyline/#transformmatrixkey)

#### Defined in

src/shapes/Object/ObjectGeometry.ts:440

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

[`Polyline`](/api/classes/polyline/).[`translateToCenterPoint`](/api/classes/polyline/#translatetocenterpoint)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:127

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

[`Polyline`](/api/classes/polyline/).[`translateToGivenOrigin`](/api/classes/polyline/#translatetogivenorigin)

#### Defined in

src/shapes/Object/ObjectOrigin.ts:99

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

[`Polyline`](/api/classes/polyline/).[`translateToOriginPoint`](/api/classes/polyline/#translatetooriginpoint)

#### Defined in

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

[`Polyline`](/api/classes/polyline/).[`willDrawShadow`](/api/classes/polyline/#willdrawshadow)

#### Defined in

src/shapes/Object/Object.ts:913

***

### \_fromObject()

> `static` **\_fromObject**\<`S`\>(`__namedParameters`, `__namedParameters`): `Promise`\<`S`\>

#### Type Parameters

• **S** *extends* `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

• **\_\_namedParameters**: `Record`\<`string`, `unknown`\>

• **\_\_namedParameters**: [`Abortable`](/api/type-aliases/abortable/) & `object` = `{}`

#### Returns

`Promise`\<`S`\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_fromObject`](/api/classes/polyline/#_fromobject)

#### Defined in

src/shapes/Object/Object.ts:1600

***

### fromElement()

> `static` **fromElement**(`element`, `options`?, `cssRules`?): `Promise`\<[`Polyline`](/api/classes/polyline/)\<`object`, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

Returns Polyline instance from an SVG element

#### Parameters

• **element**: `HTMLElement`

Element to parser

• **options?**: [`Abortable`](/api/type-aliases/abortable/)

Options object

• **cssRules?**: `CSSRules`

#### Returns

`Promise`\<[`Polyline`](/api/classes/polyline/)\<`object`, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fromElement`](/api/classes/polyline/#fromelement)

#### Static

#### Member Of

Polyline

#### Defined in

src/shapes/Polyline.ts:392

***

### fromObject()

> `static` **fromObject**\<`T`\>(`object`): `Promise`\<[`Polyline`](/api/classes/polyline/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

Returns Polyline instance from an object representation

#### Type Parameters

• **T** *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/)\>

#### Parameters

• **object**: `T`

Object to create an instance from

#### Returns

`Promise`\<[`Polyline`](/api/classes/polyline/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fromObject`](/api/classes/polyline/#fromobject)

#### Static

#### Member Of

Polyline

#### Defined in

src/shapes/Polyline.ts:420

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

[`Polyline`](/api/classes/polyline/).[`getDefaults`](/api/classes/polyline/#getdefaults)

#### Defined in

src/shapes/Polygon.ts:9
