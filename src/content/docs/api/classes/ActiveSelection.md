---
editUrl: false
next: false
prev: false
title: "ActiveSelection"
---

Used by Canvas to manage selection.

## Example

```ts
class MyActiveSelection extends ActiveSelection {
  ...
}

// override the default `ActiveSelection` class
classRegistry.setClass(MyActiveSelection)
```

## Extends

- [`Group`](Group.md)

## Constructors

### new ActiveSelection(objects, options)

> **new ActiveSelection**(`objects`?, `options`?): [`ActiveSelection`](ActiveSelection.md)

Constructor

#### Parameters

• **objects?**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]= `[]`

instance objects

• **options?**: `Partial`\<[`GroupProps`](../interfaces/GroupProps.md)\>= `{}`

Options object

#### Returns

[`ActiveSelection`](ActiveSelection.md)

#### Inherited from

[`Group`](Group.md).[`constructor`](Group.md#constructors)

#### Source

src/shapes/Group.ts:129

## Properties

### \_\_corner?

> **`optional`** **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[`Group`](Group.md).[`__corner`](Group.md#__corner)

#### Source

src/shapes/Object/InteractiveObject.ts:104

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[`Group`](Group.md).[`_controlsVisibility`](Group.md#_controlsvisibility)

#### Source

src/shapes/Object/InteractiveObject.ts:111

***

### \_objects

> **\_objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] = `[]`

#### TODO

needs to end up in the constructor too

#### Inherited from

[`Group`](Group.md).[`_objects`](Group.md#_objects)

#### Source

src/Collection.ts:21

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

[`Group`](Group.md).[`_scaling`](Group.md#_scaling)

#### Source

src/shapes/Object/InteractiveObject.ts:133

***

### aCoords

> **aCoords**: [`TCornerPoint`](../type-aliases/TCornerPoint.md)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/activeselection/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/activeselection/#calcacoords)

#### Inherited from

[`Group`](Group.md).[`aCoords`](Group.md#acoords)

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

#### Inherited from

[`Group`](Group.md).[`absolutePositioned`](Group.md#absolutepositioned)

#### Source

src/shapes/Object/Object.ts:166

***

### activeOn

> **activeOn**: `"down"` \| `"up"`

#### Inherited from

[`Group`](Group.md).[`activeOn`](Group.md#activeon)

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

#### Inherited from

[`Group`](Group.md).[`angle`](Group.md#angle)

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

#### Inherited from

[`Group`](Group.md).[`backgroundColor`](Group.md#backgroundcolor)

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

#### Inherited from

[`Group`](Group.md).[`borderColor`](Group.md#bordercolor)

#### Source

src/shapes/Object/InteractiveObject.ts:73

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`Group`](Group.md).[`borderDashArray`](Group.md#borderdasharray)

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

#### Inherited from

[`Group`](Group.md).[`borderOpacityWhenMoving`](Group.md#borderopacitywhenmoving)

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

#### Inherited from

[`Group`](Group.md).[`borderScaleFactor`](Group.md#borderscalefactor)

#### Source

src/shapes/Object/InteractiveObject.ts:76

***

### canvas?

> **`optional`** **canvas**: [`Canvas`](Canvas.md)

#### Inherited from

[`Group`](Group.md).[`canvas`](Group.md#canvas)

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

#### Inherited from

[`Group`](Group.md).[`centeredRotation`](Group.md#centeredrotation)

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

#### Inherited from

[`Group`](Group.md).[`centeredScaling`](Group.md#centeredscaling)

#### Source

src/shapes/Object/Object.ts:168

***

### clipPath?

> **`optional`** **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Inherited from

[`Group`](Group.md).[`clipPath`](Group.md#clippath)

#### Source

src/shapes/Object/Object.ts:164

***

### clipPathId?

> **`optional`** **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[`Group`](Group.md).[`clipPathId`](Group.md#clippathid)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:14

***

### controls

> **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[`Group`](Group.md).[`controls`](Group.md#controls)

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

#### Inherited from

[`Group`](Group.md).[`cornerColor`](Group.md#cornercolor)

#### Source

src/shapes/Object/InteractiveObject.ts:67

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`Group`](Group.md).[`cornerDashArray`](Group.md#cornerdasharray)

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

#### Inherited from

[`Group`](Group.md).[`cornerSize`](Group.md#cornersize)

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

#### Inherited from

[`Group`](Group.md).[`cornerStrokeColor`](Group.md#cornerstrokecolor)

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

#### Inherited from

[`Group`](Group.md).[`cornerStyle`](Group.md#cornerstyle)

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

[`Group`](Group.md).[`dirty`](Group.md#dirty)

#### Source

src/shapes/Object/Object.ts:193

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`evented`](Group.md#evented)

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

#### Inherited from

[`Group`](Group.md).[`excludeFromExport`](Group.md#excludefromexport)

#### Source

src/shapes/Object/Object.ts:160

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Inherited from

[`Group`](Group.md).[`fill`](Group.md#fill)

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

#### Inherited from

[`Group`](Group.md).[`fillRule`](Group.md#fillrule)

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

#### Inherited from

[`Group`](Group.md).[`flipX`](Group.md#flipx)

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

#### Inherited from

[`Group`](Group.md).[`flipY`](Group.md#flipy)

#### Source

src/shapes/Object/ObjectOrigin.ts:22

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`globalCompositeOperation`](Group.md#globalcompositeoperation)

#### Source

src/shapes/Object/Object.ts:152

***

### hasBorders

> **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`hasBorders`](Group.md#hasborders)

#### Source

src/shapes/Object/InteractiveObject.ts:77

***

### hasControls

> **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`hasControls`](Group.md#hascontrols)

#### Source

src/shapes/Object/InteractiveObject.ts:71

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`height`](Group.md#height)

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

#### Inherited from

[`Group`](Group.md).[`hoverCursor`](Group.md#hovercursor)

#### Source

src/shapes/Object/InteractiveObject.ts:85

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`includeDefaultValues`](Group.md#includedefaultvalues)

#### Source

src/shapes/Object/Object.ts:159

***

### interactive

> **interactive**: `boolean`

Used to allow targeting of object inside groups.
set to true if you want to select an object inside a group.\
**REQUIRES** `subTargetCheck` set to true

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`interactive`](Group.md#interactive)

#### Source

src/shapes/Group.ts:98

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

[`Group`](Group.md).[`inverted`](Group.md#inverted)

#### Source

src/shapes/Object/Object.ts:165

***

### isMoving?

> **`optional`** **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[`Group`](Group.md).[`isMoving`](Group.md#ismoving)

#### Source

src/shapes/Object/InteractiveObject.ts:123

***

### layoutManager

> **layoutManager**: [`LayoutManager`](LayoutManager.md)

#### Inherited from

[`Group`](Group.md).[`layoutManager`](Group.md#layoutmanager)

#### Source

src/shapes/Group.ts:100

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

#### Inherited from

[`Group`](Group.md).[`left`](Group.md#left)

#### Source

src/shapes/Object/ObjectOrigin.ts:18

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`lockMovementX`](Group.md#lockmovementx)

#### Source

src/shapes/Object/InteractiveObject.ts:55

***

### lockMovementY

> **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`lockMovementY`](Group.md#lockmovementy)

#### Source

src/shapes/Object/InteractiveObject.ts:56

***

### lockRotation

> **lockRotation**: `boolean`

When `true`, object rotation is locked

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`lockRotation`](Group.md#lockrotation)

#### Source

src/shapes/Object/InteractiveObject.ts:57

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`lockScalingFlip`](Group.md#lockscalingflip)

#### Source

src/shapes/Object/InteractiveObject.ts:62

***

### lockScalingX

> **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`lockScalingX`](Group.md#lockscalingx)

#### Source

src/shapes/Object/InteractiveObject.ts:58

***

### lockScalingY

> **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`lockScalingY`](Group.md#lockscalingy)

#### Source

src/shapes/Object/InteractiveObject.ts:59

***

### lockSkewingX

> **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`lockSkewingX`](Group.md#lockskewingx)

#### Source

src/shapes/Object/InteractiveObject.ts:60

***

### lockSkewingY

> **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`lockSkewingY`](Group.md#lockskewingy)

#### Source

src/shapes/Object/InteractiveObject.ts:61

***

### matrixCache?

> **`optional`** **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[`Group`](Group.md).[`matrixCache`](Group.md#matrixcache)

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

#### Inherited from

[`Group`](Group.md).[`minScaleLimit`](Group.md#minscalelimit)

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

#### Inherited from

[`Group`](Group.md).[`moveCursor`](Group.md#movecursor)

#### Source

src/shapes/Object/InteractiveObject.ts:86

***

### multiSelectionStacking

> **multiSelectionStacking**: [`MultiSelectionStacking`](../type-aliases/MultiSelectionStacking.md)

controls how selected objects are added during a multiselection event
- `canvas-stacking` adds the selected object to the active selection while respecting canvas object stacking order
- `selection-order` adds the selected object to the top of the stack,
meaning that the stack is ordered by the order in which objects were selected

#### Default

`canvas-stacking`

#### Source

src/shapes/ActiveSelection.ts:51

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

[`Group`](Group.md).[`noScaleCache`](Group.md#noscalecache)

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

[`Group`](Group.md).[`oCoords`](Group.md#ocoords)

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

#### Inherited from

[`Group`](Group.md).[`objectCaching`](Group.md#objectcaching)

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

#### Inherited from

[`Group`](Group.md).[`opacity`](Group.md#opacity)

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

#### Inherited from

[`Group`](Group.md).[`originX`](Group.md#originx)

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

#### Inherited from

[`Group`](Group.md).[`originY`](Group.md#originy)

#### Source

src/shapes/Object/ObjectOrigin.ts:28

***

### ownMatrixCache?

> **`optional`** **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[`Group`](Group.md).[`ownMatrixCache`](Group.md#ownmatrixcache)

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

#### Inherited from

[`Group`](Group.md).[`padding`](Group.md#padding)

#### Source

src/shapes/Object/ObjectGeometry.ts:40

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`paintFirst`](Group.md#paintfirst)

#### Source

src/shapes/Object/Object.ts:142

***

### parent?

> **`optional`** **parent**: [`Group`](Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[`Group`](Group.md).[`parent`](Group.md#parent)

#### Source

src/shapes/Object/StackedObject.ts:44

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`perPixelTargetFind`](Group.md#perpixeltargetfind)

#### Source

src/shapes/Object/InteractiveObject.ts:82

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`Group`](Group.md).[`scaleX`](Group.md#scalex)

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

#### Inherited from

[`Group`](Group.md).[`scaleY`](Group.md#scaley)

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

#### Inherited from

[`Group`](Group.md).[`selectable`](Group.md#selectable)

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

#### Inherited from

[`Group`](Group.md).[`selectionBackgroundColor`](Group.md#selectionbackgroundcolor)

#### Source

src/shapes/Object/InteractiveObject.ts:78

***

### shadow

> **shadow**: `null` \| [`Shadow`](Shadow.md)

#### Inherited from

[`Group`](Group.md).[`shadow`](Group.md#shadow)

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

#### Inherited from

[`Group`](Group.md).[`skewX`](Group.md#skewx)

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

#### Inherited from

[`Group`](Group.md).[`skewY`](Group.md#skewy)

#### Source

src/shapes/Object/ObjectOrigin.ts:26

***

### snapAngle?

> **`optional`** **snapAngle**: [`TDegree`](../type-aliases/TDegree.md)

The angle that an object will lock to while rotating.

#### Inherited from

[`Group`](Group.md).[`snapAngle`](Group.md#snapangle)

#### Source

src/shapes/Object/InteractiveObject.ts:52

***

### snapThreshold?

> **`optional`** **snapThreshold**: [`TDegree`](../type-aliases/TDegree.md)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`Group`](Group.md).[`snapThreshold`](Group.md#snapthreshold)

#### Source

src/shapes/Object/InteractiveObject.ts:53

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Inherited from

[`Group`](Group.md).[`stroke`](Group.md#stroke)

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

#### Inherited from

[`Group`](Group.md).[`strokeDashArray`](Group.md#strokedasharray)

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

#### Inherited from

[`Group`](Group.md).[`strokeDashOffset`](Group.md#strokedashoffset)

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

#### Inherited from

[`Group`](Group.md).[`strokeLineCap`](Group.md#strokelinecap)

#### Source

src/shapes/Object/Object.ts:148

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`strokeLineJoin`](Group.md#strokelinejoin)

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

#### Inherited from

[`Group`](Group.md).[`strokeMiterLimit`](Group.md#strokemiterlimit)

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

#### Inherited from

[`Group`](Group.md).[`strokeUniform`](Group.md#strokeuniform)

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

#### Inherited from

[`Group`](Group.md).[`strokeWidth`](Group.md#strokewidth)

#### Source

src/shapes/Object/ObjectOrigin.ts:30

***

### subTargetCheck

> **subTargetCheck**: `boolean`

Used to optimize performance
set to `false` if you don't need contained objects to be targets of events

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`subTargetCheck`](Group.md#subtargetcheck)

#### Source

src/shapes/Group.ts:89

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

#### Inherited from

[`Group`](Group.md).[`top`](Group.md#top)

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

#### Inherited from

[`Group`](Group.md).[`touchCornerSize`](Group.md#touchcornersize)

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

#### Inherited from

[`Group`](Group.md).[`transparentCorners`](Group.md#transparentcorners)

#### Source

src/shapes/Object/InteractiveObject.ts:66

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`visible`](Group.md#visible)

#### Source

src/shapes/Object/Object.ts:157

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Inherited from

[`Group`](Group.md).[`width`](Group.md#width)

#### Source

src/shapes/Object/ObjectOrigin.ts:19

***

### cacheProperties

> **`static`** **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

[`Group`](Group.md).[`cacheProperties`](Group.md#cacheproperties)

#### Source

src/shapes/Object/Object.ts:185

***

### colorProperties

> **`static`** **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[`Group`](Group.md).[`colorProperties`](Group.md#colorproperties)

#### Source

src/shapes/Object/AnimatableObject.ts:20

***

### ownDefaults

> **`static`** **ownDefaults**: `Partial`\<[`TClassProperties`](../type-aliases/TClassProperties.md)\<[`ActiveSelection`](ActiveSelection.md)\>\> = `activeSelectionDefaultValues`

#### Overrides

[`Group`](Group.md).[`ownDefaults`](Group.md#owndefaults)

#### Source

src/shapes/ActiveSelection.ts:38

***

### stateProperties

> **`static`** **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[`Group`](Group.md).[`stateProperties`](Group.md#stateproperties)

#### Source

src/shapes/Object/Object.ts:176

***

### type

> **`static`** **type**: `string` = `'ActiveSelection'`

#### Overrides

[`Group`](Group.md).[`type`](Group.md#type)

#### Source

src/shapes/ActiveSelection.ts:36

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

[`Group`](Group.md).[`_drawClipPath`](Group.md#_drawclippath)

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

[`Group`](Group.md).[`_limitCacheSize`](Group.md#_limitcachesize)

#### Source

src/shapes/Object/Object.ts:372

***

### \_onObjectAdded()

> **\_onObjectAdded**(`object`): `void`

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`_onObjectAdded`](Group.md#_onobjectadded)

#### Source

src/shapes/Group.ts:229

***

### \_onStackOrderChanged()

> **\_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`_onStackOrderChanged`](Group.md#_onstackorderchanged)

#### Source

src/shapes/Group.ts:259

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`_removeCacheCanvas`](Group.md#_removecachecanvas)

#### Source

src/shapes/Object/Object.ts:831

***

### \_renderControls()

> **\_renderControls**(`ctx`, `styleOverride`?, `childrenOverride`?): `void`

Renders controls and borders for the object

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **styleOverride?**: `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>, `"cornerStyle"` \| `"cornerSize"` \| `"cornerColor"` \| `"cornerStrokeColor"` \| `"cornerDashArray"` \| `"transparentCorners"`\>\>

properties to override the object style

• **childrenOverride?**: `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>, `"cornerStyle"` \| `"cornerSize"` \| `"cornerColor"` \| `"cornerStrokeColor"` \| `"cornerDashArray"` \| `"transparentCorners"`\>\>

properties to override the children overrides

#### Returns

`void`

#### Overrides

[`Group`](Group.md).[`_renderControls`](Group.md#_rendercontrols)

#### Source

src/shapes/ActiveSelection.ts:215

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`_setClippingProperties`](Group.md#_setclippingproperties)

#### Source

src/shapes/Object/Object.ts:1117

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `__namedParameters`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **\_\_namedParameters**: `Pick`\<[`ActiveSelection`](ActiveSelection.md), `"fill"`\>

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`_setFillStyles`](Group.md#_setfillstyles)

#### Source

src/shapes/Object/Object.ts:1106

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `decl`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **decl**: `Pick`\<[`ActiveSelection`](ActiveSelection.md), `"strokeDashOffset"` \| `"strokeLineCap"` \| `"strokeLineJoin"` \| `"strokeMiterLimit"` \| `"strokeWidth"` \| `"stroke"`\>

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`_setStrokeStyles`](Group.md#_setstrokestyles)

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

[`Group`](Group.md).[`_setupCompositeOperation`](Group.md#_setupcompositeoperation)

#### Source

src/shapes/Object/Object.ts:1571

***

### \_toSVG()

> **\_toSVG**(`reviver`?): `string`[]

Returns svg representation of an instance

#### Parameters

• **reviver?**: [`TSVGReviver`](../type-aliases/TSVGReviver.md)

Method for further parsing of svg representation.

#### Returns

`string`[]

svg representation of an instance

#### Inherited from

[`Group`](Group.md).[`_toSVG`](Group.md#_tosvg)

#### Source

src/shapes/Group.ts:603

***

### add()

> **add**(...`objects`): `number`

Add objects

#### Parameters

• ...**objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Returns

`number`

#### Inherited from

[`Group`](Group.md).[`add`](Group.md#add)

#### Source

src/shapes/Group.ts:199

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`string`

#### Inherited from

[`Group`](Group.md).[`addPaintOrder`](Group.md#addpaintorder)

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

[`Group`](Group.md).[`animate`](Group.md#animate)

#### Tutorial

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Source

src/shapes/Object/AnimatableObject.ts:34

***

### bringObjectForward()

> **bringObjectForward**(`object`, `intersecting`?): `boolean`

Moves an object or a selection up in stack of drawn objects
An optional parameter, intersecting allows to move the object in front
of the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to send

• **intersecting?**: `boolean`

If `true`, send object in front of next upper intersecting object

#### Returns

`boolean`

true if change occurred

#### Inherited from

[`Group`](Group.md).[`bringObjectForward`](Group.md#bringobjectforward)

#### Source

src/Collection.ts:240

***

### bringObjectToFront()

> **bringObjectToFront**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the top of the stack of drawn objects

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to send

#### Returns

`boolean`

true if change occurred

#### Inherited from

[`Group`](Group.md).[`bringObjectToFront`](Group.md#bringobjecttofront)

#### Source

src/Collection.ts:194

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](../type-aliases/TCornerPoint.md)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](../type-aliases/TCornerPoint.md)

#### Inherited from

[`Group`](Group.md).[`calcACoords`](Group.md#calcacoords)

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

[`Group`](Group.md).[`calcOCoords`](Group.md#calcocoords)

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

[`Group`](Group.md).[`calcOwnMatrix`](Group.md#calcownmatrix)

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

[`Group`](Group.md).[`calcTransformMatrix`](Group.md#calctransformmatrix)

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

[`Group`](Group.md).[`canDrop`](Group.md#candrop)

#### Source

src/shapes/Object/InteractiveObject.ts:663

***

### canEnterGroup()

> **canEnterGroup**(`object`): `boolean`

block ancestors/descendants of selected objects from being selected to prevent a circular object tree

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`boolean`

#### Overrides

`Group.canEnterGroup`

#### Source

src/shapes/ActiveSelection.ts:93

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

[`Group`](Group.md).[`clearContextTop`](Group.md#clearcontexttop)

#### Todo

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Source

src/shapes/Object/InteractiveObject.ts:589

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`ActiveSelection`](ActiveSelection.md)\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`ActiveSelection`](ActiveSelection.md)\>

#### Inherited from

[`Group`](Group.md).[`clone`](Group.md#clone)

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

[`Group`](Group.md).[`cloneAsImage`](Group.md#cloneasimage)

#### Todo

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Source

src/shapes/Object/Object.ts:1371

***

### collectObjects()

> **collectObjects**(`bbox`, `options`): `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Given a bounding box, return all the objects of the collection that are contained in the bounding box.
If `includeIntersecting` is true, return also the objects that intersect the bounding box as well.
This is meant to work with selection. Is not a generic method.

#### Parameters

• **bbox**: [`TBBox`](../type-aliases/TBBox.md)

a bounding box in scene coordinates

• **options**= `{}`

an object with includeIntersecting

• **options\.includeIntersecting?**: `boolean`= `true`

#### Returns

`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

array of objects contained in the bounding box, ordered from top to bottom stacking wise

#### Inherited from

[`Group`](Group.md).[`collectObjects`](Group.md#collectobjects)

#### Source

src/Collection.ts:326

***

### complexity()

> **complexity**(): `number`

Returns number representation of a collection complexity

#### Returns

`number`

complexity

#### Inherited from

[`Group`](Group.md).[`complexity`](Group.md#complexity)

#### Source

src/Collection.ts:165

***

### contains()

> **contains**(`object`, `deep`?): `boolean`

Returns true if collection contains an object.\
**Prefer using [FabricObject#isDescendantOf](../../../../api/classes/fabricobject/#isdescendantof) for performance reasons**
instead of `a.contains(b)` use `b.isDescendantOf(a)`

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to check against

• **deep?**: `boolean`

`true` to check all descendants, `false` to check only `_objects`

#### Returns

`boolean`

`true` if collection contains an object

#### Inherited from

[`Group`](Group.md).[`contains`](Group.md#contains)

#### Source

src/Collection.ts:148

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

[`Group`](Group.md).[`containsPoint`](Group.md#containspoint)

#### Source

src/shapes/Object/ObjectGeometry.ts:269

***

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`dispose`](Group.md#dispose)

#### Source

src/shapes/Group.ts:571

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

[`Group`](Group.md).[`drawBorders`](Group.md#drawborders)

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

[`Group`](Group.md).[`drawCacheOnCanvas`](Group.md#drawcacheoncanvas)

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

[`Group`](Group.md).[`drawClipPathOnCache`](Group.md#drawclippathoncache)

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

[`Group`](Group.md).[`drawControls`](Group.md#drawcontrols)

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

[`Group`](Group.md).[`drawControlsConnectingLines`](Group.md#drawcontrolsconnectinglines)

#### Source

src/shapes/Object/InteractiveObject.ts:481

***

### drawObject()

> **drawObject**(`ctx`): `void`

Execute the drawing operation for an object on a specified context

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`drawObject`](Group.md#drawobject)

#### Source

src/shapes/Group.ts:464

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

[`Group`](Group.md).[`drawSelectionBackground`](Group.md#drawselectionbackground)

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

• **T** extends [`ActiveSelection`](ActiveSelection.md)

• **S** extends `boolean`

#### Parameters

• **other**: `T`

• **strict?**: `S`

finds only ancestors that are objects (without canvas)

#### Returns

`AncestryComparison`\<`S`\>

an object that represent the ancestry situation.

#### Inherited from

[`Group`](Group.md).[`findCommonAncestors`](Group.md#findcommonancestors)

#### Source

src/shapes/Object/StackedObject.ts:90

***

### findNewLowerIndex()

> **findNewLowerIndex**(`object`, `idx`, `intersecting`?): `number`

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

• **idx**: `number`

• **intersecting?**: `boolean`

#### Returns

`number`

#### Inherited from

[`Group`](Group.md).[`findNewLowerIndex`](Group.md#findnewlowerindex)

#### Source

src/Collection.ts:272

***

### findNewUpperIndex()

> **findNewUpperIndex**(`object`, `idx`, `intersecting`?): `number`

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

• **idx**: `number`

• **intersecting?**: `boolean`

#### Returns

`number`

#### Inherited from

[`Group`](Group.md).[`findNewUpperIndex`](Group.md#findnewupperindex)

#### Source

src/Collection.ts:295

***

### fire()

> **fire**\<`K`\>(`eventName`, `options`?): `void`

Fires event with an optional options object

#### Type parameters

• **K** extends keyof [`GroupEvents`](../interfaces/GroupEvents.md)

#### Parameters

• **eventName**: `K`

Event name to fire

• **options?**: [`GroupEvents`](../interfaces/GroupEvents.md)\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`fire`](Group.md#fire)

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

[`Group`](Group.md).[`forEachControl`](Group.md#foreachcontrol)

#### Source

src/shapes/Object/InteractiveObject.ts:317

***

### forEachObject()

> **forEachObject**(`callback`): `void`

Executes given function for each object in this group
A simple shortcut for getObjects().forEach, before es6 was more complicated,
now is just a shortcut.

#### Parameters

• **callback**

Callback invoked with current object as first argument,
                  index - as second and an array of all objects - as third.

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`forEachObject`](Group.md#foreachobject)

#### Source

src/Collection.ts:91

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

[`Group`](Group.md).[`get`](Group.md#get)

#### Source

src/CommonMethods.ts:59

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| `Object`

#### Returns

`undefined` \| `Object`

#### Inherited from

[`Group`](Group.md).[`getActiveControl`](Group.md#getactivecontrol)

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

[`Group`](Group.md).[`getAncestors`](Group.md#getancestors)

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

[`Group`](Group.md).[`getBoundingRect`](Group.md#getboundingrect)

#### Source

src/shapes/Object/ObjectGeometry.ts:330

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[`Group`](Group.md).[`getCanvasRetinaScaling`](Group.md#getcanvasretinascaling)

#### Source

src/shapes/Object/ObjectGeometry.ts:387

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](Point.md)

#### Inherited from

[`Group`](Group.md).[`getCenterPoint`](Group.md#getcenterpoint)

#### Source

src/shapes/Object/ObjectOrigin.ts:174

***

### getCoords()

> **getCoords**(): [`Point`](Point.md)[]

#### Returns

[`Point`](Point.md)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

[`Group`](Group.md).[`getCoords`](Group.md#getcoords)

#### Source

src/shapes/Object/ObjectGeometry.ts:191

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[`Group`](Group.md).[`getObjectOpacity`](Group.md#getobjectopacity)

#### Source

src/shapes/Object/Object.ts:690

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](Point.md)

#### Inherited from

[`Group`](Group.md).[`getObjectScaling`](Group.md#getobjectscaling)

#### Source

src/shapes/Object/Object.ts:659

***

### getObjects()

> **getObjects**(...`types`?): [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Returns an array of children objects of this instance

#### Parameters

• ...**types?**: `string`[]

When specified, only objects of these types are returned

#### Returns

[`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Inherited from

[`Group`](Group.md).[`getObjects`](Group.md#getobjects)

#### Source

src/Collection.ts:108

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

[`Group`](Group.md).[`getPointByOrigin`](Group.md#getpointbyorigin)

#### Source

src/shapes/Object/ObjectOrigin.ts:199

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](Point.md)

#### Inherited from

[`Group`](Group.md).[`getRelativeCenterPoint`](Group.md#getrelativecenterpoint)

#### Source

src/shapes/Object/ObjectOrigin.ts:185

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](FabricObject.md#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](ActiveSelection.md#getx)

#### Inherited from

[`Group`](Group.md).[`getRelativeX`](Group.md#getrelativex)

#### Source

src/shapes/Object/ObjectGeometry.ts:102

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x,y position according to object's [originX](FabricObject.md#originx) [originY](FabricObject.md#originy) properties in parent's coordinate plane

#### Inherited from

[`Group`](Group.md).[`getRelativeXY`](Group.md#getrelativexy)

#### Source

src/shapes/Object/ObjectGeometry.ts:163

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](FabricObject.md#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](ActiveSelection.md#gety)

#### Inherited from

[`Group`](Group.md).[`getRelativeY`](Group.md#getrelativey)

#### Source

src/shapes/Object/ObjectGeometry.ts:118

***

### getScaledHeight()

> **getScaledHeight**(): `number`

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

#### Inherited from

[`Group`](Group.md).[`getScaledHeight`](Group.md#getscaledheight)

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

[`Group`](Group.md).[`getScaledWidth`](Group.md#getscaledwidth)

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

[`Group`](Group.md).[`getSvgCommons`](Group.md#getsvgcommons)

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

[`Group`](Group.md).[`getSvgFilter`](Group.md#getsvgfilter)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:76

***

### getSvgStyles()

> **getSvgStyles**(): `string`

Returns styles-string for svg-export, specific version for group

#### Returns

`string`

#### Inherited from

[`Group`](Group.md).[`getSvgStyles`](Group.md#getsvgstyles)

#### Source

src/shapes/Group.ts:618

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

[`Group`](Group.md).[`getSvgTransform`](Group.md#getsvgtransform)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:103

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](../type-aliases/TDegree.md)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](../type-aliases/TDegree.md)

#### Inherited from

[`Group`](Group.md).[`getTotalAngle`](Group.md#gettotalangle)

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

[`Group`](Group.md).[`getTotalObjectScaling`](Group.md#gettotalobjectscaling)

#### Source

src/shapes/Object/Object.ts:676

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](../type-aliases/TMat2D.md)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](../type-aliases/TMat2D.md)

#### Inherited from

[`Group`](Group.md).[`getViewportTransform`](Group.md#getviewporttransform)

#### Source

src/shapes/Object/ObjectGeometry.ts:405

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](FabricObject.md#originx) property in canvas coordinate plane

#### Inherited from

[`Group`](Group.md).[`getX`](Group.md#getx)

#### Source

src/shapes/Object/ObjectGeometry.ts:73

***

### getXY()

> **getXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x position according to object's [originX](FabricObject.md#originx) [originY](FabricObject.md#originy) properties in canvas coordinate plane

#### Inherited from

[`Group`](Group.md).[`getXY`](Group.md#getxy)

#### Source

src/shapes/Object/ObjectGeometry.ts:133

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](FabricObject.md#originy) property in canvas coordinate plane

#### Inherited from

[`Group`](Group.md).[`getY`](Group.md#gety)

#### Source

src/shapes/Object/ObjectGeometry.ts:87

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`, `strict`?): `boolean`

#### Type parameters

• **T** extends [`ActiveSelection`](ActiveSelection.md)

#### Parameters

• **other**: `T`

• **strict?**: `boolean`

checks only ancestors that are objects (without canvas)

#### Returns

`boolean`

#### Inherited from

[`Group`](Group.md).[`hasCommonAncestors`](Group.md#hascommonancestors)

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

[`Group`](Group.md).[`hasFill`](Group.md#hasfill)

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

[`Group`](Group.md).[`hasStroke`](Group.md#hasstroke)

#### Since

3.0.0

#### Source

src/shapes/Object/Object.ts:848

***

### insertAt()

> **insertAt**(`index`, ...`objects`): `number`

Inserts an object into collection at specified index

#### Parameters

• **index**: `number`

Index to insert object at

• ...**objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Object to insert

#### Returns

`number`

#### Inherited from

[`Group`](Group.md).[`insertAt`](Group.md#insertat)

#### Source

src/shapes/Group.ts:211

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

[`Group`](Group.md).[`intersectsWithObject`](Group.md#intersectswithobject)

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

[`Group`](Group.md).[`intersectsWithRect`](Group.md#intersectswithrect)

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

[`Group`](Group.md).[`isCacheDirty`](Group.md#iscachedirty)

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

[`Group`](Group.md).[`isContainedWithinObject`](Group.md#iscontainedwithinobject)

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

[`Group`](Group.md).[`isContainedWithinRect`](Group.md#iscontainedwithinrect)

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

[`Group`](Group.md).[`isControlVisible`](Group.md#iscontrolvisible)

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

[`Group`](Group.md).[`isDescendantOf`](Group.md#isdescendantof)

#### Source

src/shapes/Object/StackedObject.ts:52

***

### isEmpty()

> **isEmpty**(): `boolean`

Returns true if collection contains no objects

#### Returns

`boolean`

true if collection is empty

#### Inherited from

[`Group`](Group.md).[`isEmpty`](Group.md#isempty)

#### Source

src/Collection.ts:128

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

• **T** extends [`ActiveSelection`](ActiveSelection.md)

#### Parameters

• **other**: `T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[`Group`](Group.md).[`isInFrontOf`](Group.md#isinfrontof)

#### Source

src/shapes/Object/StackedObject.ts:169

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Group`](Group.md).[`isNotVisible`](Group.md#isnotvisible)

#### Source

src/shapes/Object/Object.ts:771

***

### isOnACache()

> **isOnACache**(): `boolean`

Check if this group or its parent group are caching, recursively up

#### Returns

`boolean`

#### Overrides

[`Group`](Group.md).[`isOnACache`](Group.md#isonacache)

#### Source

src/shapes/ActiveSelection.ts:205

***

### isOnScreen()

> **isOnScreen**(): `boolean`

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

[`Group`](Group.md).[`isOnScreen`](Group.md#isonscreen)

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

[`Group`](Group.md).[`isOverlapping`](Group.md#isoverlapping)

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

[`Group`](Group.md).[`isPartiallyOnScreen`](Group.md#ispartiallyonscreen)

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

[`Group`](Group.md).[`isType`](Group.md#istype)

#### Source

src/shapes/Object/Object.ts:1502

***

### item()

> **item**(`index`): [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Returns object at specified index

#### Parameters

• **index**: `number`

#### Returns

[`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

object at index

#### Inherited from

[`Group`](Group.md).[`item`](Group.md#item)

#### Source

src/Collection.ts:120

***

### moveObjectTo()

> **moveObjectTo**(`object`, `index`): `boolean`

Moves an object to specified level in stack of drawn objects

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to send

• **index**: `number`

Position to move to

#### Returns

`boolean`

true if change occurred

#### Inherited from

[`Group`](Group.md).[`moveObjectTo`](Group.md#moveobjectto)

#### Source

src/Collection.ts:262

***

### multiSelectAdd()

> **multiSelectAdd**(...`targets`): `void`

Adds objects with respect to [multiSelectionStacking](../../../../api/classes/activeselection/#multiselectionstacking)

#### Parameters

• ...**targets**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

object to add to selection

#### Returns

`void`

#### Source

src/shapes/ActiveSelection.ts:72

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

[`Group`](Group.md).[`needsItsOwnCache`](Group.md#needsitsowncache)

#### Source

src/shapes/Object/Object.ts:876

***

### off()

#### off(eventName, handler)

> **off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

##### Type parameters

• **K** extends keyof [`GroupEvents`](../interfaces/GroupEvents.md)

##### Parameters

• **eventName**: `K`

event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`any`\>

event listener to unsubscribe

##### Returns

`void`

##### Inherited from

[`Group`](Group.md).[`off`](Group.md#off)

##### Source

src/Observable.ts:120

#### off(handlers)

> **off**(`handlers`): `void`

unsubscribe event listeners

##### Parameters

• **handlers**: `EventRegistryObject`\<[`GroupEvents`](../interfaces/GroupEvents.md)\>

handlers key/value pairs (eg. \{'after:render': handler, 'selection:cleared': handler\})

##### Returns

`void`

##### Inherited from

[`Group`](Group.md).[`off`](Group.md#off)

##### Source

src/Observable.ts:125

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

[`Group`](Group.md).[`off`](Group.md#off)

##### Source

src/Observable.ts:129

***

### on()

#### on(eventName, handler)

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

##### Type parameters

• **K** extends keyof [`GroupEvents`](../interfaces/GroupEvents.md)

• **E** extends [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<`WheelEvent`\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `InEvent` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `OutEvent` \| [`BasicTransformEvent`](../interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> \| [`ModifiedEvent`](../interfaces/ModifiedEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> \| `Partial`\<[`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object` \| `Partial`\<[`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object` \| `Object` \| `Object` \| `Object` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](../interfaces/DragEventData.md) \| [`DragEventData`](../interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](../interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](../interfaces/DropEventData.md) \| `SimpleEventHandler`\<`Event`\> \| `Object` \| `Object` \| [`LayoutBeforeEvent`](../type-aliases/LayoutBeforeEvent.md) \| [`LayoutAfterEvent`](../type-aliases/LayoutAfterEvent.md)

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Inherited from

[`Group`](Group.md).[`on`](Group.md#on)

##### Alias

on

##### Source

src/Observable.ts:23

#### on(handlers)

> **on**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`GroupEvents`](../interfaces/GroupEvents.md)\>

##### Returns

`VoidFunction`

##### Inherited from

[`Group`](Group.md).[`on`](Group.md#on)

##### Source

src/Observable.ts:27

***

### onDeselect()

> **onDeselect**(): `boolean`

remove all objects

#### Returns

`boolean`

#### Overrides

[`Group`](Group.md).[`onDeselect`](Group.md#ondeselect)

#### Source

src/shapes/ActiveSelection.ts:176

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

[`Group`](Group.md).[`onDragStart`](Group.md#ondragstart)

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

[`Group`](Group.md).[`onSelect`](Group.md#onselect)

#### Source

src/shapes/Object/InteractiveObject.ts:634

***

### once()

#### once(eventName, handler)

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

##### Type parameters

• **K** extends keyof [`GroupEvents`](../interfaces/GroupEvents.md)

• **E** extends [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<`WheelEvent`\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `InEvent` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `OutEvent` \| [`BasicTransformEvent`](../interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> \| [`ModifiedEvent`](../interfaces/ModifiedEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> \| `Partial`\<[`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object` \| `Partial`\<[`TEvent`](../interfaces/TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object` \| `Object` \| `Object` \| `Object` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](../interfaces/DragEventData.md) \| [`DragEventData`](../interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](../interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](../interfaces/DropEventData.md) \| `SimpleEventHandler`\<`Event`\> \| `Object` \| `Object` \| [`LayoutBeforeEvent`](../type-aliases/LayoutBeforeEvent.md) \| [`LayoutAfterEvent`](../type-aliases/LayoutAfterEvent.md)

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Inherited from

[`Group`](Group.md).[`once`](Group.md#once)

##### Alias

once

##### Source

src/Observable.ts:62

#### once(handlers)

> **once**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`GroupEvents`](../interfaces/GroupEvents.md)\>

##### Returns

`VoidFunction`

##### Inherited from

[`Group`](Group.md).[`once`](Group.md#once)

##### Source

src/Observable.ts:66

***

### remove()

> **remove**(...`objects`): [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Remove objects

#### Parameters

• ...**objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Returns

[`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

removed objects

#### Inherited from

[`Group`](Group.md).[`remove`](Group.md#remove)

#### Source

src/shapes/Group.ts:223

***

### removeAll()

> **removeAll**(): [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Remove all objects

#### Returns

[`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

removed objects

#### Inherited from

[`Group`](Group.md).[`removeAll`](Group.md#removeall)

#### Source

src/shapes/Group.ts:290

***

### render()

> **render**(`ctx`): `void`

Renders instance on a given context

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

context to render instance on

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`render`](Group.md#render)

#### Source

src/shapes/Group.ts:505

***

### renderCache()

> **renderCache**(`options`?): `void`

#### Parameters

• **options?**: `any`

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`renderCache`](Group.md#rendercache)

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

[`Group`](Group.md).[`renderDragSourceEffect`](Group.md#renderdragsourceeffect)

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

[`Group`](Group.md).[`renderDropTargetEffect`](Group.md#renderdroptargeteffect)

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

[`Group`](Group.md).[`rotate`](Group.md#rotate)

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

[`Group`](Group.md).[`scale`](Group.md#scale)

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

[`Group`](Group.md).[`scaleToHeight`](Group.md#scaletoheight)

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

[`Group`](Group.md).[`scaleToWidth`](Group.md#scaletowidth)

#### Source

src/shapes/Object/ObjectGeometry.ts:368

***

### sendObjectBackwards()

> **sendObjectBackwards**(`object`, `intersecting`?): `boolean`

Moves an object or a selection down in stack of drawn objects
An optional parameter, `intersecting` allows to move the object in behind
the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to send

• **intersecting?**: `boolean`

If `true`, send object behind next lower intersecting object

#### Returns

`boolean`

true if change occurred

#### Inherited from

[`Group`](Group.md).[`sendObjectBackwards`](Group.md#sendobjectbackwards)

#### Source

src/Collection.ts:214

***

### sendObjectToBack()

> **sendObjectToBack**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the bottom of the stack of drawn objects

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object to send to back

#### Returns

`boolean`

true if change occurred

#### Inherited from

[`Group`](Group.md).[`sendObjectToBack`](Group.md#sendobjecttoback)

#### Source

src/Collection.ts:178

***

### set()

> **set**(`key`, `value`?): [`ActiveSelection`](ActiveSelection.md)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `any`\>

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`ActiveSelection`](ActiveSelection.md)

#### Inherited from

[`Group`](Group.md).[`set`](Group.md#set)

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

[`Group`](Group.md).[`setControlVisible`](Group.md#setcontrolvisible)

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

[`Group`](Group.md).[`setControlsVisibility`](Group.md#setcontrolsvisibility)

#### Source

src/shapes/Object/InteractiveObject.ts:573

***

### setCoords()

> **setCoords**(): `void`

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`setCoords`](Group.md#setcoords)

#### Source

src/shapes/Group.ts:487

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

[`Group`](Group.md).[`setOnGroup`](Group.md#setongroup)

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

[`Group`](Group.md).[`setPositionByOrigin`](Group.md#setpositionbyorigin)

#### Source

src/shapes/Object/ObjectOrigin.ts:214

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](../../../../api/classes/activeselection/#setx)

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`setRelativeX`](Group.md#setrelativex)

#### Source

src/shapes/Object/ObjectGeometry.ts:110

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/activeselection/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

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

[`Group`](Group.md).[`setRelativeXY`](Group.md#setrelativexy)

#### Source

src/shapes/Object/ObjectGeometry.ts:173

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](../../../../api/classes/activeselection/#sety)

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`setRelativeY`](Group.md#setrelativey)

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

[`Group`](Group.md).[`setX`](Group.md#setx)

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

[`Group`](Group.md).[`setXY`](Group.md#setxy)

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

[`Group`](Group.md).[`setY`](Group.md#sety)

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

#### Returns

`boolean`

#### Overrides

[`Group`](Group.md).[`shouldCache`](Group.md#shouldcache)

#### Source

src/shapes/ActiveSelection.ts:197

***

### shouldStartDragging()

> **shouldStartDragging**(): `boolean`

Override to customize Drag behavior
Fired from Canvas#_onMouseMove

#### Returns

`boolean`

true in order for the window to start a drag session

#### Inherited from

[`Group`](Group.md).[`shouldStartDragging`](Group.md#shouldstartdragging)

#### Source

src/shapes/Object/InteractiveObject.ts:644

***

### size()

> **size**(): `number`

Returns a size of a collection (i.e: length of an array containing its objects)

#### Returns

`number`

Collection size

#### Inherited from

[`Group`](Group.md).[`size`](Group.md#size)

#### Source

src/Collection.ts:136

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

[`Group`](Group.md).[`strokeBorders`](Group.md#strokeborders)

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

[`Group`](Group.md).[`toCanvasElement`](Group.md#tocanvaselement)

#### Source

src/shapes/Object/Object.ts:1393

***

### toClipPathSVG()

> **toClipPathSVG**(`reviver`?): `string`

Returns svg clipPath representation of an instance

#### Parameters

• **reviver?**: [`TSVGReviver`](../type-aliases/TSVGReviver.md)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Inherited from

[`Group`](Group.md).[`toClipPathSVG`](Group.md#toclippathsvg)

#### Source

src/shapes/Group.ts:632

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

[`Group`](Group.md).[`toDataURL`](Group.md#todataurl)

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

[`Group`](Group.md).[`toDatalessObject`](Group.md#todatalessobject)

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

[`Group`](Group.md).[`toJSON`](Group.md#tojson)

#### Source

src/shapes/Object/Object.ts:1521

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & [`SerializedGroupProps`](../interfaces/SerializedGroupProps.md)

Returns object representation of an instance

#### Type parameters

• **T** extends `Omit`\<[`GroupProps`](../interfaces/GroupProps.md) & [`TClassProperties`](../type-aliases/TClassProperties.md)\<[`ActiveSelection`](ActiveSelection.md)\>, keyof [`SerializedGroupProps`](../interfaces/SerializedGroupProps.md)\>

• **K** extends `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[]= `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & [`SerializedGroupProps`](../interfaces/SerializedGroupProps.md)

object representation of an instance

#### Inherited from

[`Group`](Group.md).[`toObject`](Group.md#toobject)

#### Source

src/shapes/Group.ts:542

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

[`Group`](Group.md).[`toSVG`](Group.md#tosvg)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:129

***

### toString()

> **toString**(): `string`

Returns string representation of a group

#### Returns

`string`

#### Overrides

[`Group`](Group.md).[`toString`](Group.md#tostring)

#### Source

src/shapes/ActiveSelection.ts:185

***

### toggle()

> **toggle**(`property`): [`ActiveSelection`](ActiveSelection.md)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`ActiveSelection`](ActiveSelection.md)

#### Inherited from

[`Group`](Group.md).[`toggle`](Group.md#toggle)

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

[`Group`](Group.md).[`transform`](Group.md#transform)

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

[`Group`](Group.md).[`transformMatrixKey`](Group.md#transformmatrixkey)

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

[`Group`](Group.md).[`translateToCenterPoint`](Group.md#translatetocenterpoint)

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

[`Group`](Group.md).[`translateToGivenOrigin`](Group.md#translatetogivenorigin)

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

[`Group`](Group.md).[`translateToOriginPoint`](Group.md#translatetooriginpoint)

#### Source

src/shapes/Object/ObjectOrigin.ts:152

***

### triggerLayout()

> **triggerLayout**(`options`): `void`

#### Parameters

• **options**: [`ImperativeLayoutOptions`](../type-aliases/ImperativeLayoutOptions.md)= `{}`

#### Returns

`void`

#### Inherited from

[`Group`](Group.md).[`triggerLayout`](Group.md#triggerlayout)

#### Source

src/shapes/Group.ts:493

***

### willDrawShadow()

> **willDrawShadow**(): `boolean`

Check if this object or a child object will cast a shadow

#### Returns

`boolean`

#### Inherited from

[`Group`](Group.md).[`willDrawShadow`](Group.md#willdrawshadow)

#### Source

src/shapes/Group.ts:440

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

[`Group`](Group.md).[`_fromObject`](Group.md#_fromobject)

#### Source

src/shapes/Object/Object.ts:1600

***

### getDefaults()

> **`static`** **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

[`Group`](Group.md).[`getDefaults`](Group.md#getdefaults)

#### Source

src/shapes/ActiveSelection.ts:40
