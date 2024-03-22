---
editUrl: false
next: false
prev: false
title: "Group"
---

## Fires

object:added

## Fires

object:removed

## Fires

layout:before

## Fires

layout:after

## Extends

- `Collection`\<(`options`?) => [`FabricObject`](FabricObject.md)\<[`GroupProps`](../interfaces/GroupProps.md), [`SerializedGroupProps`](../interfaces/SerializedGroupProps.md), [`GroupEvents`](../interfaces/GroupEvents.md)\>, `this`\> & [`FabricObject`](FabricObject.md)\<[`GroupProps`](../interfaces/GroupProps.md), [`SerializedGroupProps`](../interfaces/SerializedGroupProps.md), [`GroupEvents`](../interfaces/GroupEvents.md), `this`\>

## Implements

- [`GroupProps`](../interfaces/GroupProps.md)

## Constructors

### new Group(objects, options)

> **new Group**(`objects`?, `options`?): [`Group`](Group.md)

Constructor

#### Parameters

• **objects?**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]= `[]`

instance objects

• **options?**: `Partial`\<[`GroupProps`](../interfaces/GroupProps.md)\>= `{}`

Options object

#### Returns

[`Group`](Group.md)

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).constructor`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).__corner`

#### Source

src/shapes/Object/InteractiveObject.ts:104

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._controlsVisibility`

#### Source

src/shapes/Object/InteractiveObject.ts:111

***

### \_objects

> **\_objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] = `[]`

#### TODO

needs to end up in the constructor too

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._objects`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._scaling`

#### Source

src/shapes/Object/InteractiveObject.ts:133

***

### aCoords

> **aCoords**: [`TCornerPoint`](../type-aliases/TCornerPoint.md)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/group/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/group/#calcacoords)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).aCoords`

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

[`GroupProps`](../interfaces/GroupProps.md).[`absolutePositioned`](../interfaces/GroupProps.md#absolutepositioned)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).absolutePositioned`

#### Source

src/shapes/Object/Object.ts:166

***

### activeOn

> **activeOn**: `"down"` \| `"up"`

#### Implementation of

`GroupProps.activeOn`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).activeOn`

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

[`GroupProps`](../interfaces/GroupProps.md).[`angle`](../interfaces/GroupProps.md#angle)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).angle`

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

[`GroupProps`](../interfaces/GroupProps.md).[`backgroundColor`](../interfaces/GroupProps.md#backgroundcolor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).backgroundColor`

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

[`GroupProps`](../interfaces/GroupProps.md).[`borderColor`](../interfaces/GroupProps.md#bordercolor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).borderColor`

#### Source

src/shapes/Object/InteractiveObject.ts:73

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`borderDashArray`](../interfaces/GroupProps.md#borderdasharray)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).borderDashArray`

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

[`GroupProps`](../interfaces/GroupProps.md).[`borderOpacityWhenMoving`](../interfaces/GroupProps.md#borderopacitywhenmoving)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).borderOpacityWhenMoving`

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

[`GroupProps`](../interfaces/GroupProps.md).[`borderScaleFactor`](../interfaces/GroupProps.md#borderscalefactor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).borderScaleFactor`

#### Source

src/shapes/Object/InteractiveObject.ts:76

***

### canvas?

> **`optional`** **canvas**: [`Canvas`](Canvas.md)

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`canvas`](../interfaces/GroupProps.md#canvas)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).canvas`

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

[`GroupProps`](../interfaces/GroupProps.md).[`centeredRotation`](../interfaces/GroupProps.md#centeredrotation)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).centeredRotation`

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

[`GroupProps`](../interfaces/GroupProps.md).[`centeredScaling`](../interfaces/GroupProps.md#centeredscaling)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).centeredScaling`

#### Source

src/shapes/Object/Object.ts:168

***

### clipPath?

> **`optional`** **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`clipPath`](../interfaces/GroupProps.md#clippath)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).clipPath`

#### Source

src/shapes/Object/Object.ts:164

***

### clipPathId?

> **`optional`** **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).clipPathId`

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:14

***

### controls

> **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).controls`

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

[`GroupProps`](../interfaces/GroupProps.md).[`cornerColor`](../interfaces/GroupProps.md#cornercolor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cornerColor`

#### Source

src/shapes/Object/InteractiveObject.ts:67

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`cornerDashArray`](../interfaces/GroupProps.md#cornerdasharray)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cornerDashArray`

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

[`GroupProps`](../interfaces/GroupProps.md).[`cornerSize`](../interfaces/GroupProps.md#cornersize)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cornerSize`

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

[`GroupProps`](../interfaces/GroupProps.md).[`cornerStrokeColor`](../interfaces/GroupProps.md#cornerstrokecolor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cornerStrokeColor`

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

[`GroupProps`](../interfaces/GroupProps.md).[`cornerStyle`](../interfaces/GroupProps.md#cornerstyle)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cornerStyle`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).dirty`

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

[`GroupProps`](../interfaces/GroupProps.md).[`evented`](../interfaces/GroupProps.md#evented)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).evented`

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

[`GroupProps`](../interfaces/GroupProps.md).[`excludeFromExport`](../interfaces/GroupProps.md#excludefromexport)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).excludeFromExport`

#### Source

src/shapes/Object/Object.ts:160

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`fill`](../interfaces/GroupProps.md#fill)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).fill`

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

[`GroupProps`](../interfaces/GroupProps.md).[`fillRule`](../interfaces/GroupProps.md#fillrule)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).fillRule`

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

[`GroupProps`](../interfaces/GroupProps.md).[`flipX`](../interfaces/GroupProps.md#flipx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).flipX`

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

[`GroupProps`](../interfaces/GroupProps.md).[`flipY`](../interfaces/GroupProps.md#flipy)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).flipY`

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

[`GroupProps`](../interfaces/GroupProps.md).[`globalCompositeOperation`](../interfaces/GroupProps.md#globalcompositeoperation)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).globalCompositeOperation`

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

[`GroupProps`](../interfaces/GroupProps.md).[`hasBorders`](../interfaces/GroupProps.md#hasborders)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).hasBorders`

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

[`GroupProps`](../interfaces/GroupProps.md).[`hasControls`](../interfaces/GroupProps.md#hascontrols)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).hasControls`

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

[`GroupProps`](../interfaces/GroupProps.md).[`height`](../interfaces/GroupProps.md#height)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).height`

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

[`GroupProps`](../interfaces/GroupProps.md).[`hoverCursor`](../interfaces/GroupProps.md#hovercursor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).hoverCursor`

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

[`GroupProps`](../interfaces/GroupProps.md).[`includeDefaultValues`](../interfaces/GroupProps.md#includedefaultvalues)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).includeDefaultValues`

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

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`interactive`](../interfaces/GroupProps.md#interactive)

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

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`inverted`](../interfaces/GroupProps.md#inverted)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).inverted`

#### Source

src/shapes/Object/Object.ts:165

***

### isMoving?

> **`optional`** **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isMoving`

#### Source

src/shapes/Object/InteractiveObject.ts:123

***

### layoutManager

> **layoutManager**: [`LayoutManager`](LayoutManager.md)

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`layoutManager`](../interfaces/GroupProps.md#layoutmanager)

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

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`left`](../interfaces/GroupProps.md#left)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).left`

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

[`GroupProps`](../interfaces/GroupProps.md).[`lockMovementX`](../interfaces/GroupProps.md#lockmovementx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockMovementX`

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

[`GroupProps`](../interfaces/GroupProps.md).[`lockMovementY`](../interfaces/GroupProps.md#lockmovementy)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockMovementY`

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

[`GroupProps`](../interfaces/GroupProps.md).[`lockRotation`](../interfaces/GroupProps.md#lockrotation)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockRotation`

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

[`GroupProps`](../interfaces/GroupProps.md).[`lockScalingFlip`](../interfaces/GroupProps.md#lockscalingflip)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockScalingFlip`

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

[`GroupProps`](../interfaces/GroupProps.md).[`lockScalingX`](../interfaces/GroupProps.md#lockscalingx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockScalingX`

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

[`GroupProps`](../interfaces/GroupProps.md).[`lockScalingY`](../interfaces/GroupProps.md#lockscalingy)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockScalingY`

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

[`GroupProps`](../interfaces/GroupProps.md).[`lockSkewingX`](../interfaces/GroupProps.md#lockskewingx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockSkewingX`

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

[`GroupProps`](../interfaces/GroupProps.md).[`lockSkewingY`](../interfaces/GroupProps.md#lockskewingy)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockSkewingY`

#### Source

src/shapes/Object/InteractiveObject.ts:61

***

### matrixCache?

> **`optional`** **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).matrixCache`

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

[`GroupProps`](../interfaces/GroupProps.md).[`minScaleLimit`](../interfaces/GroupProps.md#minscalelimit)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).minScaleLimit`

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

[`GroupProps`](../interfaces/GroupProps.md).[`moveCursor`](../interfaces/GroupProps.md#movecursor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).moveCursor`

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

[`GroupProps`](../interfaces/GroupProps.md).[`noScaleCache`](../interfaces/GroupProps.md#noscalecache)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).noScaleCache`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).oCoords`

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

[`GroupProps`](../interfaces/GroupProps.md).[`objectCaching`](../interfaces/GroupProps.md#objectcaching)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).objectCaching`

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

[`GroupProps`](../interfaces/GroupProps.md).[`opacity`](../interfaces/GroupProps.md#opacity)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).opacity`

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

[`GroupProps`](../interfaces/GroupProps.md).[`originX`](../interfaces/GroupProps.md#originx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).originX`

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

[`GroupProps`](../interfaces/GroupProps.md).[`originY`](../interfaces/GroupProps.md#originy)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).originY`

#### Source

src/shapes/Object/ObjectOrigin.ts:28

***

### ownMatrixCache?

> **`optional`** **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).ownMatrixCache`

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

[`GroupProps`](../interfaces/GroupProps.md).[`padding`](../interfaces/GroupProps.md#padding)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).padding`

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

[`GroupProps`](../interfaces/GroupProps.md).[`paintFirst`](../interfaces/GroupProps.md#paintfirst)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).paintFirst`

#### Source

src/shapes/Object/Object.ts:142

***

### parent?

> **`optional`** **parent**: [`Group`](Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).parent`

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

[`GroupProps`](../interfaces/GroupProps.md).[`perPixelTargetFind`](../interfaces/GroupProps.md#perpixeltargetfind)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).perPixelTargetFind`

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

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`scaleX`](../interfaces/GroupProps.md#scalex)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).scaleX`

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

[`GroupProps`](../interfaces/GroupProps.md).[`scaleY`](../interfaces/GroupProps.md#scaley)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).scaleY`

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

[`GroupProps`](../interfaces/GroupProps.md).[`selectable`](../interfaces/GroupProps.md#selectable)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).selectable`

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

[`GroupProps`](../interfaces/GroupProps.md).[`selectionBackgroundColor`](../interfaces/GroupProps.md#selectionbackgroundcolor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).selectionBackgroundColor`

#### Source

src/shapes/Object/InteractiveObject.ts:78

***

### shadow

> **shadow**: `null` \| [`Shadow`](Shadow.md)

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`shadow`](../interfaces/GroupProps.md#shadow)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).shadow`

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

[`GroupProps`](../interfaces/GroupProps.md).[`skewX`](../interfaces/GroupProps.md#skewx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).skewX`

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

[`GroupProps`](../interfaces/GroupProps.md).[`skewY`](../interfaces/GroupProps.md#skewy)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).skewY`

#### Source

src/shapes/Object/ObjectOrigin.ts:26

***

### snapAngle?

> **`optional`** **snapAngle**: [`TDegree`](../type-aliases/TDegree.md)

The angle that an object will lock to while rotating.

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`snapAngle`](../interfaces/GroupProps.md#snapangle)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).snapAngle`

#### Source

src/shapes/Object/InteractiveObject.ts:52

***

### snapThreshold?

> **`optional`** **snapThreshold**: [`TDegree`](../type-aliases/TDegree.md)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`snapThreshold`](../interfaces/GroupProps.md#snapthreshold)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).snapThreshold`

#### Source

src/shapes/Object/InteractiveObject.ts:53

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`stroke`](../interfaces/GroupProps.md#stroke)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).stroke`

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

[`GroupProps`](../interfaces/GroupProps.md).[`strokeDashArray`](../interfaces/GroupProps.md#strokedasharray)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeDashArray`

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

[`GroupProps`](../interfaces/GroupProps.md).[`strokeDashOffset`](../interfaces/GroupProps.md#strokedashoffset)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeDashOffset`

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

[`GroupProps`](../interfaces/GroupProps.md).[`strokeLineCap`](../interfaces/GroupProps.md#strokelinecap)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeLineCap`

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

[`GroupProps`](../interfaces/GroupProps.md).[`strokeLineJoin`](../interfaces/GroupProps.md#strokelinejoin)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeLineJoin`

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

[`GroupProps`](../interfaces/GroupProps.md).[`strokeMiterLimit`](../interfaces/GroupProps.md#strokemiterlimit)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeMiterLimit`

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

[`GroupProps`](../interfaces/GroupProps.md).[`strokeUniform`](../interfaces/GroupProps.md#strokeuniform)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeUniform`

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

[`GroupProps`](../interfaces/GroupProps.md).[`strokeWidth`](../interfaces/GroupProps.md#strokewidth)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeWidth`

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

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`subTargetCheck`](../interfaces/GroupProps.md#subtargetcheck)

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

#### Implementation of

[`GroupProps`](../interfaces/GroupProps.md).[`top`](../interfaces/GroupProps.md#top)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).top`

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

[`GroupProps`](../interfaces/GroupProps.md).[`touchCornerSize`](../interfaces/GroupProps.md#touchcornersize)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).touchCornerSize`

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

[`GroupProps`](../interfaces/GroupProps.md).[`transparentCorners`](../interfaces/GroupProps.md#transparentcorners)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).transparentCorners`

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

[`GroupProps`](../interfaces/GroupProps.md).[`visible`](../interfaces/GroupProps.md#visible)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).visible`

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

[`GroupProps`](../interfaces/GroupProps.md).[`width`](../interfaces/GroupProps.md#width)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).width`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cacheProperties`

#### Source

src/shapes/Object/Object.ts:185

***

### colorProperties

> **`static`** **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).colorProperties`

#### Source

src/shapes/Object/AnimatableObject.ts:20

***

### ownDefaults

> **`static`** **ownDefaults**: `Record`\<`string`, `any`\> = `groupDefaultValues`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).ownDefaults`

#### Source

src/shapes/Group.ts:112

***

### stateProperties

> **`static`** **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).stateProperties`

#### Source

src/shapes/Object/Object.ts:176

***

### type

> **`static`** **type**: `string` = `'Group'`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).type`

#### Source

src/shapes/Group.ts:110

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._drawClipPath`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._limitCacheSize`

#### Source

src/shapes/Object/Object.ts:372

***

### \_onObjectAdded()

> **\_onObjectAdded**(`object`): `void`

#### Parameters

• **object**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`void`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._onObjectAdded`

#### Source

src/shapes/Group.ts:229

***

### \_onStackOrderChanged()

> **\_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._onStackOrderChanged`

#### Source

src/shapes/Group.ts:259

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._removeCacheCanvas`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._renderControls`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._setClippingProperties`

#### Source

src/shapes/Object/Object.ts:1117

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `__namedParameters`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **\_\_namedParameters**: `Pick`\<[`Group`](Group.md), `"fill"`\>

#### Returns

`void`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._setFillStyles`

#### Source

src/shapes/Object/Object.ts:1106

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `decl`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **decl**: `Pick`\<[`Group`](Group.md), `"strokeDashOffset"` \| `"strokeLineCap"` \| `"strokeLineJoin"` \| `"strokeMiterLimit"` \| `"strokeWidth"` \| `"stroke"`\>

#### Returns

`void`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._setStrokeStyles`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._setupCompositeOperation`

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

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._toSVG`

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

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).add`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).addPaintOrder`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).animate`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).bringObjectForward`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).bringObjectToFront`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).calcACoords`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).calcOCoords`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).calcOwnMatrix`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).calcTransformMatrix`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).canDrop`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).clearContextTop`

#### Todo

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Source

src/shapes/Object/InteractiveObject.ts:589

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`Group`](Group.md)\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`Group`](Group.md)\>

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).clone`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cloneAsImage`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).collectObjects`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).complexity`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).contains`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).containsPoint`

#### Source

src/shapes/Object/ObjectGeometry.ts:269

***

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).dispose`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).drawBorders`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).drawCacheOnCanvas`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).drawClipPathOnCache`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).drawControls`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).drawControlsConnectingLines`

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

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).drawObject`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).drawSelectionBackground`

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

• **T** extends [`Group`](Group.md)

• **S** extends `boolean`

#### Parameters

• **other**: `T`

• **strict?**: `S`

finds only ancestors that are objects (without canvas)

#### Returns

`AncestryComparison`\<`S`\>

an object that represent the ancestry situation.

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).findCommonAncestors`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).findNewLowerIndex`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).findNewUpperIndex`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).fire`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).forEachControl`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).forEachObject`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).get`

#### Source

src/CommonMethods.ts:59

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| `Object`

#### Returns

`undefined` \| `Object`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getActiveControl`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getAncestors`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getBoundingRect`

#### Source

src/shapes/Object/ObjectGeometry.ts:330

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getCanvasRetinaScaling`

#### Source

src/shapes/Object/ObjectGeometry.ts:387

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](Point.md)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getCenterPoint`

#### Source

src/shapes/Object/ObjectOrigin.ts:174

***

### getCoords()

> **getCoords**(): [`Point`](Point.md)[]

#### Returns

[`Point`](Point.md)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getCoords`

#### Source

src/shapes/Object/ObjectGeometry.ts:191

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getObjectOpacity`

#### Source

src/shapes/Object/Object.ts:690

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](Point.md)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getObjectScaling`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getObjects`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getPointByOrigin`

#### Source

src/shapes/Object/ObjectOrigin.ts:199

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](Point.md)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getRelativeCenterPoint`

#### Source

src/shapes/Object/ObjectOrigin.ts:185

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](FabricObject.md#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](Group.md#getx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getRelativeX`

#### Source

src/shapes/Object/ObjectGeometry.ts:102

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x,y position according to object's [originX](FabricObject.md#originx) [originY](FabricObject.md#originy) properties in parent's coordinate plane

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getRelativeXY`

#### Source

src/shapes/Object/ObjectGeometry.ts:163

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](FabricObject.md#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](Group.md#gety)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getRelativeY`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getScaledHeight`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getScaledWidth`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getSvgCommons`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getSvgFilter`

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:76

***

### getSvgStyles()

> **getSvgStyles**(): `string`

Returns styles-string for svg-export, specific version for group

#### Returns

`string`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getSvgStyles`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getSvgTransform`

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:103

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](../type-aliases/TDegree.md)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](../type-aliases/TDegree.md)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getTotalAngle`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getTotalObjectScaling`

#### Source

src/shapes/Object/Object.ts:676

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](../type-aliases/TMat2D.md)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](../type-aliases/TMat2D.md)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getViewportTransform`

#### Source

src/shapes/Object/ObjectGeometry.ts:405

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](FabricObject.md#originx) property in canvas coordinate plane

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getX`

#### Source

src/shapes/Object/ObjectGeometry.ts:73

***

### getXY()

> **getXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x position according to object's [originX](FabricObject.md#originx) [originY](FabricObject.md#originy) properties in canvas coordinate plane

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getXY`

#### Source

src/shapes/Object/ObjectGeometry.ts:133

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](FabricObject.md#originy) property in canvas coordinate plane

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getY`

#### Source

src/shapes/Object/ObjectGeometry.ts:87

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`, `strict`?): `boolean`

#### Type parameters

• **T** extends [`Group`](Group.md)

#### Parameters

• **other**: `T`

• **strict?**: `boolean`

checks only ancestors that are objects (without canvas)

#### Returns

`boolean`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).hasCommonAncestors`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).hasFill`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).hasStroke`

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

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).insertAt`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).intersectsWithObject`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).intersectsWithRect`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isCacheDirty`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isContainedWithinObject`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isContainedWithinRect`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isControlVisible`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isDescendantOf`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isEmpty`

#### Source

src/Collection.ts:128

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

• **T** extends [`Group`](Group.md)

#### Parameters

• **other**: `T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isInFrontOf`

#### Source

src/shapes/Object/StackedObject.ts:169

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isNotVisible`

#### Source

src/shapes/Object/Object.ts:771

***

### isOnACache()

> **isOnACache**(): `boolean`

Check if instance or its group are caching, recursively up

#### Returns

`boolean`

#### Source

src/shapes/Group.ts:456

***

### isOnScreen()

> **isOnScreen**(): `boolean`

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isOnScreen`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isOverlapping`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isPartiallyOnScreen`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isType`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).item`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).moveObjectTo`

#### Source

src/Collection.ts:262

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).needsItsOwnCache`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).off`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).off`

##### Source

src/Observable.ts:125

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).off`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).on`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).on`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).onDeselect`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).onDragStart`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).onSelect`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).once`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).once`

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

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).remove`

#### Source

src/shapes/Group.ts:223

***

### removeAll()

> **removeAll**(): [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Remove all objects

#### Returns

[`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

removed objects

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

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).render`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).renderCache`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).renderDragSourceEffect`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).renderDropTargetEffect`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).rotate`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).scale`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).scaleToHeight`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).scaleToWidth`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).sendObjectBackwards`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).sendObjectToBack`

#### Source

src/Collection.ts:178

***

### set()

> **set**(`key`, `value`?): [`Group`](Group.md)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `any`\>

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`Group`](Group.md)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).set`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setControlVisible`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setControlsVisibility`

#### Source

src/shapes/Object/InteractiveObject.ts:573

***

### setCoords()

> **setCoords**(): `void`

#### Returns

`void`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setCoords`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setOnGroup`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setPositionByOrigin`

#### Source

src/shapes/Object/ObjectOrigin.ts:214

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](../../../../api/classes/group/#setx)

#### Returns

`void`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setRelativeX`

#### Source

src/shapes/Object/ObjectGeometry.ts:110

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/group/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setRelativeXY`

#### Source

src/shapes/Object/ObjectGeometry.ts:173

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](../../../../api/classes/group/#sety)

#### Returns

`void`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setRelativeY`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setX`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setXY`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setY`

#### Source

src/shapes/Object/ObjectGeometry.ts:94

***

### shouldCache()

> **shouldCache**(): `boolean`

Decide if the object should cache or not. Create its own cache level
needsItsOwnCache should be used when the object drawing method requires
a cache step. None of the fabric classes requires it.
Generally you do not cache objects in groups because the group is already cached.

#### Returns

`boolean`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).shouldCache`

#### Source

src/shapes/Group.ts:423

***

### shouldStartDragging()

> **shouldStartDragging**(): `boolean`

Override to customize Drag behavior
Fired from Canvas#_onMouseMove

#### Returns

`boolean`

true in order for the window to start a drag session

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).shouldStartDragging`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).size`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeBorders`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toCanvasElement`

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

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toClipPathSVG`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toDataURL`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toDatalessObject`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toJSON`

#### Source

src/shapes/Object/Object.ts:1521

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & [`SerializedGroupProps`](../interfaces/SerializedGroupProps.md)

Returns object representation of an instance

#### Type parameters

• **T** extends `Omit`\<[`GroupProps`](../interfaces/GroupProps.md) & [`TClassProperties`](../type-aliases/TClassProperties.md)\<[`Group`](Group.md)\>, keyof [`SerializedGroupProps`](../interfaces/SerializedGroupProps.md)\>

• **K** extends `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[]= `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & [`SerializedGroupProps`](../interfaces/SerializedGroupProps.md)

object representation of an instance

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toObject`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toSVG`

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:129

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toString`

#### Source

src/shapes/Group.ts:567

***

### toggle()

> **toggle**(`property`): [`Group`](Group.md)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`Group`](Group.md)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toggle`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).transform`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).transformMatrixKey`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).translateToCenterPoint`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).translateToGivenOrigin`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).translateToOriginPoint`

#### Source

src/shapes/Object/ObjectOrigin.ts:152

***

### triggerLayout()

> **triggerLayout**(`options`): `void`

#### Parameters

• **options**: [`ImperativeLayoutOptions`](../type-aliases/ImperativeLayoutOptions.md)= `{}`

#### Returns

`void`

#### Source

src/shapes/Group.ts:493

***

### willDrawShadow()

> **willDrawShadow**(): `boolean`

Check if this object or a child object will cast a shadow

#### Returns

`boolean`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).willDrawShadow`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._fromObject`

#### Source

src/shapes/Object/Object.ts:1600

***

### getDefaults()

> **`static`** **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getDefaults`

#### Source

src/shapes/Group.ts:116
