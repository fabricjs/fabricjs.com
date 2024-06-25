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

- `Collection`\<(`options`?) => [`FabricObject`](/api/classes/fabricobject/)\<[`GroupProps`](/api/interfaces/groupprops/), [`SerializedGroupProps`](/api/interfaces/serializedgroupprops/), [`GroupEvents`](/api/interfaces/groupevents/)\>, `this`\> & [`FabricObject`](/api/classes/fabricobject/)\<[`GroupProps`](/api/interfaces/groupprops/), [`SerializedGroupProps`](/api/interfaces/serializedgroupprops/), [`GroupEvents`](/api/interfaces/groupevents/), `this`\>

## Extended by

- [`ActiveSelection`](/api/classes/activeselection/)

## Implements

- [`GroupProps`](/api/interfaces/groupprops/)

## Constructors

### new Group()

> **new Group**(`objects`?, `options`?): [`Group`](/api/classes/group/)

Constructor

#### Parameters

• **objects?**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[] = `[]`

instance objects

• **options?**: `Partial`\<[`GroupProps`](/api/interfaces/groupprops/)\> = `{}`

Options object

#### Returns

[`Group`](/api/classes/group/)

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).constructor`

#### Defined in

src/shapes/Group.ts:139

## Properties

### \_\_corner?

> `optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).__corner`

#### Defined in

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

#### Defined in

src/shapes/Object/InteractiveObject.ts:111

***

### \_objects

> **\_objects**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[] = `[]`

#### TODO

needs to end up in the constructor too

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._objects`

#### Defined in

src/Collection.ts:21

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._scaling`

#### Defined in

src/shapes/Object/InteractiveObject.ts:133

***

### aCoords

> **aCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

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

#### Defined in

src/shapes/Object/ObjectGeometry.ts:51

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

[`GroupProps`](/api/interfaces/groupprops/).[`absolutePositioned`](/api/interfaces/groupprops/#absolutepositioned)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).absolutePositioned`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`angle`](/api/interfaces/groupprops/#angle)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).angle`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`backgroundColor`](/api/interfaces/groupprops/#backgroundcolor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).backgroundColor`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`borderColor`](/api/interfaces/groupprops/#bordercolor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).borderColor`

#### Defined in

src/shapes/Object/InteractiveObject.ts:73

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`borderDashArray`](/api/interfaces/groupprops/#borderdasharray)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).borderDashArray`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`borderOpacityWhenMoving`](/api/interfaces/groupprops/#borderopacitywhenmoving)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).borderOpacityWhenMoving`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`borderScaleFactor`](/api/interfaces/groupprops/#borderscalefactor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).borderScaleFactor`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`centeredRotation`](/api/interfaces/groupprops/#centeredrotation)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).centeredRotation`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`centeredScaling`](/api/interfaces/groupprops/#centeredscaling)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).centeredScaling`

#### Defined in

src/shapes/Object/Object.ts:168

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`clipPath`](/api/interfaces/groupprops/#clippath)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).clipPath`

#### Defined in

src/shapes/Object/Object.ts:164

***

### clipPathId?

> `optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).clipPathId`

#### Defined in

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`cornerColor`](/api/interfaces/groupprops/#cornercolor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cornerColor`

#### Defined in

src/shapes/Object/InteractiveObject.ts:67

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`cornerDashArray`](/api/interfaces/groupprops/#cornerdasharray)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cornerDashArray`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`cornerSize`](/api/interfaces/groupprops/#cornersize)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cornerSize`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`cornerStrokeColor`](/api/interfaces/groupprops/#cornerstrokecolor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cornerStrokeColor`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`cornerStyle`](/api/interfaces/groupprops/#cornerstyle)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cornerStyle`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).dirty`

#### Defined in

src/shapes/Object/Object.ts:193

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`evented`](/api/interfaces/groupprops/#evented)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).evented`

#### Defined in

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

[`GroupProps`](/api/interfaces/groupprops/).[`excludeFromExport`](/api/interfaces/groupprops/#excludefromexport)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).excludeFromExport`

#### Defined in

src/shapes/Object/Object.ts:160

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

[`GroupProps`](/api/interfaces/groupprops/).[`fill`](/api/interfaces/groupprops/#fill)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).fill`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`fillRule`](/api/interfaces/groupprops/#fillrule)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).fillRule`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`flipX`](/api/interfaces/groupprops/#flipx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).flipX`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`flipY`](/api/interfaces/groupprops/#flipy)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).flipY`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:22

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`globalCompositeOperation`](/api/interfaces/groupprops/#globalcompositeoperation)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).globalCompositeOperation`

#### Defined in

src/shapes/Object/Object.ts:152

***

### hasBorders

> **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`hasBorders`](/api/interfaces/groupprops/#hasborders)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).hasBorders`

#### Defined in

src/shapes/Object/InteractiveObject.ts:77

***

### hasControls

> **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`hasControls`](/api/interfaces/groupprops/#hascontrols)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).hasControls`

#### Defined in

src/shapes/Object/InteractiveObject.ts:71

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`height`](/api/interfaces/groupprops/#height)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).height`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`hoverCursor`](/api/interfaces/groupprops/#hovercursor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).hoverCursor`

#### Defined in

src/shapes/Object/InteractiveObject.ts:85

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`includeDefaultValues`](/api/interfaces/groupprops/#includedefaultvalues)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).includeDefaultValues`

#### Defined in

src/shapes/Object/Object.ts:159

***

### ~~interactive~~

> **interactive**: `boolean`

Used to allow targeting of object inside groups.
set to true if you want to select an object inside a group.\
**REQUIRES** `subTargetCheck` set to true
This will be not removed but slowly replaced with a method setInteractive
that will take care of enabling subTargetCheck and necessary object events.
There is too much attached to group interactivity to just be evaluated by a
boolean in the code

#### Default

```ts

```

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`interactive`](/api/interfaces/groupprops/#interactive)

#### Defined in

src/shapes/Group.ts:108

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

[`GroupProps`](/api/interfaces/groupprops/).[`inverted`](/api/interfaces/groupprops/#inverted)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).inverted`

#### Defined in

src/shapes/Object/Object.ts:165

***

### isMoving?

> `optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isMoving`

#### Defined in

src/shapes/Object/InteractiveObject.ts:123

***

### layoutManager

> **layoutManager**: [`LayoutManager`](/api/classes/layoutmanager/)

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`layoutManager`](/api/interfaces/groupprops/#layoutmanager)

#### Defined in

src/shapes/Group.ts:110

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

[`GroupProps`](/api/interfaces/groupprops/).[`left`](/api/interfaces/groupprops/#left)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).left`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:18

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`lockMovementX`](/api/interfaces/groupprops/#lockmovementx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockMovementX`

#### Defined in

src/shapes/Object/InteractiveObject.ts:55

***

### lockMovementY

> **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`lockMovementY`](/api/interfaces/groupprops/#lockmovementy)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockMovementY`

#### Defined in

src/shapes/Object/InteractiveObject.ts:56

***

### lockRotation

> **lockRotation**: `boolean`

When `true`, object rotation is locked

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`lockRotation`](/api/interfaces/groupprops/#lockrotation)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockRotation`

#### Defined in

src/shapes/Object/InteractiveObject.ts:57

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`lockScalingFlip`](/api/interfaces/groupprops/#lockscalingflip)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockScalingFlip`

#### Defined in

src/shapes/Object/InteractiveObject.ts:62

***

### lockScalingX

> **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`lockScalingX`](/api/interfaces/groupprops/#lockscalingx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockScalingX`

#### Defined in

src/shapes/Object/InteractiveObject.ts:58

***

### lockScalingY

> **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`lockScalingY`](/api/interfaces/groupprops/#lockscalingy)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockScalingY`

#### Defined in

src/shapes/Object/InteractiveObject.ts:59

***

### lockSkewingX

> **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`lockSkewingX`](/api/interfaces/groupprops/#lockskewingx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockSkewingX`

#### Defined in

src/shapes/Object/InteractiveObject.ts:60

***

### lockSkewingY

> **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`lockSkewingY`](/api/interfaces/groupprops/#lockskewingy)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).lockSkewingY`

#### Defined in

src/shapes/Object/InteractiveObject.ts:61

***

### matrixCache?

> `optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).matrixCache`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:61

***

### minScaleLimit

> **minScaleLimit**: `number`

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`minScaleLimit`](/api/interfaces/groupprops/#minscalelimit)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).minScaleLimit`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`moveCursor`](/api/interfaces/groupprops/#movecursor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).moveCursor`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`noScaleCache`](/api/interfaces/groupprops/#noscalecache)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).noScaleCache`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).oCoords`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`objectCaching`](/api/interfaces/groupprops/#objectcaching)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).objectCaching`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`opacity`](/api/interfaces/groupprops/#opacity)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).opacity`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`originX`](/api/interfaces/groupprops/#originx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).originX`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`originY`](/api/interfaces/groupprops/#originy)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).originY`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:28

***

### ownMatrixCache?

> `optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).ownMatrixCache`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:56

***

### padding

> **padding**: `number`

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`padding`](/api/interfaces/groupprops/#padding)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).padding`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:41

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`paintFirst`](/api/interfaces/groupprops/#paintfirst)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).paintFirst`

#### Defined in

src/shapes/Object/Object.ts:142

***

### parent?

> `optional` **parent**: [`Group`](/api/classes/group/)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).parent`

#### Defined in

src/shapes/Object/StackedObject.ts:38

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`perPixelTargetFind`](/api/interfaces/groupprops/#perpixeltargetfind)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).perPixelTargetFind`

#### Defined in

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

[`GroupProps`](/api/interfaces/groupprops/).[`scaleX`](/api/interfaces/groupprops/#scalex)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).scaleX`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`scaleY`](/api/interfaces/groupprops/#scaley)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).scaleY`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`selectable`](/api/interfaces/groupprops/#selectable)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).selectable`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`selectionBackgroundColor`](/api/interfaces/groupprops/#selectionbackgroundcolor)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).selectionBackgroundColor`

#### Defined in

src/shapes/Object/InteractiveObject.ts:78

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`shadow`](/api/interfaces/groupprops/#shadow)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).shadow`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`skewX`](/api/interfaces/groupprops/#skewx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).skewX`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`skewY`](/api/interfaces/groupprops/#skewy)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).skewY`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:26

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

The angle that an object will lock to while rotating.

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`snapAngle`](/api/interfaces/groupprops/#snapangle)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).snapAngle`

#### Defined in

src/shapes/Object/InteractiveObject.ts:52

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`snapThreshold`](/api/interfaces/groupprops/#snapthreshold)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).snapThreshold`

#### Defined in

src/shapes/Object/InteractiveObject.ts:53

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

[`GroupProps`](/api/interfaces/groupprops/).[`stroke`](/api/interfaces/groupprops/#stroke)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).stroke`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`strokeDashArray`](/api/interfaces/groupprops/#strokedasharray)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeDashArray`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`strokeDashOffset`](/api/interfaces/groupprops/#strokedashoffset)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeDashOffset`

#### Defined in

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

[`GroupProps`](/api/interfaces/groupprops/).[`strokeLineCap`](/api/interfaces/groupprops/#strokelinecap)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeLineCap`

#### Defined in

src/shapes/Object/Object.ts:148

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`strokeLineJoin`](/api/interfaces/groupprops/#strokelinejoin)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeLineJoin`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`strokeMiterLimit`](/api/interfaces/groupprops/#strokemiterlimit)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeMiterLimit`

#### Defined in

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

[`GroupProps`](/api/interfaces/groupprops/).[`strokeUniform`](/api/interfaces/groupprops/#strokeuniform)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeUniform`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`strokeWidth`](/api/interfaces/groupprops/#strokewidth)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeWidth`

#### Defined in

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

[`GroupProps`](/api/interfaces/groupprops/).[`subTargetCheck`](/api/interfaces/groupprops/#subtargetcheck)

#### Defined in

src/shapes/Group.ts:94

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

[`GroupProps`](/api/interfaces/groupprops/).[`top`](/api/interfaces/groupprops/#top)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).top`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`touchCornerSize`](/api/interfaces/groupprops/#touchcornersize)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).touchCornerSize`

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

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`transparentCorners`](/api/interfaces/groupprops/#transparentcorners)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).transparentCorners`

#### Defined in

src/shapes/Object/InteractiveObject.ts:66

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`visible`](/api/interfaces/groupprops/#visible)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).visible`

#### Defined in

src/shapes/Object/Object.ts:157

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Implementation of

[`GroupProps`](/api/interfaces/groupprops/).[`width`](/api/interfaces/groupprops/#width)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).width`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:19

***

### cacheProperties

> `static` **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cacheProperties`

#### Defined in

src/shapes/Object/Object.ts:185

***

### colorProperties

> `static` **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).colorProperties`

#### Defined in

src/shapes/Object/AnimatableObject.ts:20

***

### ownDefaults

> `static` **ownDefaults**: `Record`\<`string`, `any`\> = `groupDefaultValues`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).ownDefaults`

#### Defined in

src/shapes/Group.ts:122

***

### stateProperties

> `static` **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).stateProperties`

#### Defined in

src/shapes/Object/Object.ts:176

***

### ~~type~~

> `static` **type**: `string` = `'Group'`

Legacy identifier of the class. Prefer using utils like isType or instanceOf
Will be removed in fabric 7 or 8.
The setter exists because is very hard to catch all the ways in which a type value
could be set in the instance

#### TODO

add sustainable warning message

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).type`

#### Defined in

src/shapes/Group.ts:120

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).type`

#### Defined in

src/shapes/Object/Object.ts:302

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._drawClipPath`

#### Defined in

src/shapes/Object/Object.ts:949

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

#### Defined in

src/shapes/Object/Object.ts:351

***

### \_onObjectAdded()

> **\_onObjectAdded**(`object`): `void`

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`void`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._onObjectAdded`

#### Defined in

src/shapes/Group.ts:258

***

### \_onStackOrderChanged()

> **\_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._onStackOrderChanged`

#### Defined in

src/shapes/Group.ts:288

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

#### Defined in

src/shapes/Object/Object.ts:805

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._renderControls`

#### Todo

move to interactivity

#### Defined in

src/shapes/Object/InteractiveObject.ts:434

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

#### Defined in

src/shapes/Object/Object.ts:1087

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `__namedParameters`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **\_\_namedParameters**: `Pick`\<[`Group`](/api/classes/group/), `"fill"`\>

#### Returns

`void`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._setFillStyles`

#### Defined in

src/shapes/Object/Object.ts:1076

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `decl`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **decl**: `Pick`\<[`Group`](/api/classes/group/), `"strokeDashOffset"` \| `"strokeLineCap"` \| `"strokeLineJoin"` \| `"strokeMiterLimit"` \| `"strokeWidth"` \| `"stroke"`\>

#### Returns

`void`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._setStrokeStyles`

#### Defined in

src/shapes/Object/Object.ts:1034

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

#### Defined in

src/shapes/Object/Object.ts:1541

***

### \_toSVG()

> **\_toSVG**(`reviver`?): `string`[]

Returns svg representation of an instance

#### Parameters

• **reviver?**: [`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg representation.

#### Returns

`string`[]

svg representation of an instance

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._toSVG`

#### Defined in

src/shapes/Group.ts:633

***

### add()

> **add**(...`objects`): `number`

Add objects

#### Parameters

• ...**objects**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Returns

`number`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).add`

#### Defined in

src/shapes/Group.ts:228

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).addPaintOrder`

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:249

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).animate`

#### Tutorial

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Defined in

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

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

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

#### Defined in

src/Collection.ts:240

***

### bringObjectToFront()

> **bringObjectToFront**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the top of the stack of drawn objects

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to send

#### Returns

`boolean`

true if change occurred

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).bringObjectToFront`

#### Defined in

src/Collection.ts:194

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).calcACoords`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:415

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

#### Defined in

src/shapes/Object/InteractiveObject.ts:254

***

### calcOwnMatrix()

> **calcOwnMatrix**(): [`TMat2D`](/api/type-aliases/tmat2d/)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).calcOwnMatrix`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:501

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).calcTransformMatrix`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:473

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

#### Defined in

src/shapes/Object/InteractiveObject.ts:700

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

#### Defined in

src/shapes/Object/InteractiveObject.ts:626

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`Group`](/api/classes/group/)\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`Group`](/api/classes/group/)\>

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).clone`

#### Defined in

src/shapes/Object/Object.ts:1315

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).cloneAsImage`

#### Todo

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Defined in

src/shapes/Object/Object.ts:1341

***

### collectObjects()

> **collectObjects**(`bbox`, `options`): `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Given a bounding box, return all the objects of the collection that are contained in the bounding box.
If `includeIntersecting` is true, return also the objects that intersect the bounding box as well.
This is meant to work with selection. Is not a generic method.

#### Parameters

• **bbox**: [`TBBox`](/api/type-aliases/tbbox/)

a bounding box in scene coordinates

• **options** = `{}`

an object with includeIntersecting

• **options.includeIntersecting?**: `boolean` = `true`

#### Returns

`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

array of objects contained in the bounding box, ordered from top to bottom stacking wise

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).collectObjects`

#### Defined in

src/Collection.ts:326

***

### complexity()

> **complexity**(): `number`

#### Returns

`number`

complexity

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).complexity`

#### Defined in

src/Collection.ts:165

***

### contains()

> **contains**(`object`, `deep`?): `boolean`

Returns true if collection contains an object.\
**Prefer using [FabricObject#isDescendantOf](../../../../api/classes/fabricobject/#isdescendantof) for performance reasons**
instead of `a.contains(b)` use `b.isDescendantOf(a)`

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

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

#### Defined in

src/Collection.ts:148

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).containsPoint`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:270

***

### dispose()

> **dispose**(): `void`

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).dispose`

#### Defined in

src/shapes/Group.ts:601

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).drawBorders`

#### Defined in

src/shapes/Object/InteractiveObject.ts:477

***

### drawCacheOnCanvas()

> **drawCacheOnCanvas**(`this`, `ctx`): `void`

Paint the cached copy of the object on the target context.

#### Parameters

• **this**: `TCachedFabricObject`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).drawCacheOnCanvas`

#### Defined in

src/shapes/Object/Object.ts:967

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).drawClipPathOnCache`

#### Defined in

src/shapes/Object/Object.ts:896

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).drawControls`

#### Defined in

src/shapes/Object/InteractiveObject.ts:549

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).drawControlsConnectingLines`

#### Defined in

src/shapes/Object/InteractiveObject.ts:516

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

#### Defined in

src/shapes/Group.ts:494

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

#### Defined in

src/shapes/Object/InteractiveObject.ts:374

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`\>(`other`): `AncestryComparison`

Compare ancestors

#### Type Parameters

• **T** *extends* [`Group`](/api/classes/group/)

#### Parameters

• **other**: `T`

#### Returns

`AncestryComparison`

an object that represent the ancestry situation.

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).findCommonAncestors`

#### Defined in

src/shapes/Object/StackedObject.ts:78

***

### findNewLowerIndex()

> **findNewLowerIndex**(`object`, `idx`, `intersecting`?): `number`

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **idx**: `number`

• **intersecting?**: `boolean`

#### Returns

`number`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).findNewLowerIndex`

#### Defined in

src/Collection.ts:272

***

### findNewUpperIndex()

> **findNewUpperIndex**(`object`, `idx`, `intersecting`?): `number`

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **idx**: `number`

• **intersecting?**: `boolean`

#### Returns

`number`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).findNewUpperIndex`

#### Defined in

src/Collection.ts:295

***

### fire()

> **fire**\<`K`\>(`eventName`, `options`?): `void`

Fires event with an optional options object

#### Type Parameters

• **K** *extends* keyof [`GroupEvents`](/api/interfaces/groupevents/)

#### Parameters

• **eventName**: `K`

Event name to fire

• **options?**: [`GroupEvents`](/api/interfaces/groupevents/)\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).fire`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).forEachControl`

#### Defined in

src/shapes/Object/InteractiveObject.ts:352

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

#### Defined in

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

#### Defined in

src/CommonMethods.ts:59

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| `object`

#### Returns

`undefined` \| `object`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getActiveControl`

#### Defined in

src/shapes/Object/InteractiveObject.ts:193

***

### getAncestors()

> **getAncestors**(): `Ancestors`

#### Returns

`Ancestors`

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getAncestors`

#### Defined in

src/shapes/Object/StackedObject.ts:61

***

### getBoundingRect()

> **getBoundingRect**(): [`TBBox`](/api/type-aliases/tbbox/)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Returns

[`TBBox`](/api/type-aliases/tbbox/)

Object with left, top, width, height properties

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getBoundingRect`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:331

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getCanvasRetinaScaling`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:388

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getCenterPoint`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:177

***

### getCoords()

> **getCoords**(): [`Point`](/api/classes/point/)[]

#### Returns

[`Point`](/api/classes/point/)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getCoords`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:192

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

#### Defined in

src/shapes/Object/Object.ts:666

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getObjectScaling`

#### Defined in

src/shapes/Object/Object.ts:635

***

### getObjects()

> **getObjects**(...`types`?): [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Returns an array of children objects of this instance

#### Parameters

• ...**types?**: `string`[]

When specified, only objects of these types are returned

#### Returns

[`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getObjects`

#### Defined in

src/Collection.ts:108

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getPointByOrigin`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:202

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getRelativeCenterPoint`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:188

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/api/api/classes/group/getx/#getx)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getRelativeX`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:103

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x,y position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in parent's coordinate plane

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getRelativeXY`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:164

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/api/api/classes/group/gety/#gety)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getRelativeY`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:119

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

#### Defined in

src/shapes/Object/ObjectGeometry.ts:349

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

#### Defined in

src/shapes/Object/ObjectGeometry.ts:340

***

### getSvgCommons()

> **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> & `object`

#### Returns

`string`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getSvgCommons`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getSvgFilter`

#### Defined in

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

#### Defined in

src/shapes/Group.ts:648

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getSvgTransform`

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:103

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](/api/type-aliases/tdegree/)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/api/type-aliases/tdegree/)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getTotalAngle`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:396

***

### getTotalObjectScaling()

> **getTotalObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/api/classes/point/)

object with scaleX and scaleY properties

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getTotalObjectScaling`

#### Defined in

src/shapes/Object/Object.ts:652

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getViewportTransform`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:406

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in canvas coordinate plane

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getX`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:74

***

### getXY()

> **getXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in canvas coordinate plane

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getXY`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:134

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in canvas coordinate plane

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getY`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:88

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`): `boolean`

#### Type Parameters

• **T** *extends* [`Group`](/api/classes/group/)

#### Parameters

• **other**: `T`

#### Returns

`boolean`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).hasCommonAncestors`

#### Defined in

src/shapes/Object/StackedObject.ts:143

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

#### Defined in

src/shapes/Object/Object.ts:836

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

#### Defined in

src/shapes/Object/Object.ts:820

***

### insertAt()

> **insertAt**(`index`, ...`objects`): `number`

Inserts an object into collection at specified index

#### Parameters

• **index**: `number`

Index to insert object at

• ...**objects**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Object to insert

#### Returns

`number`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).insertAt`

#### Defined in

src/shapes/Group.ts:240

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).intersectsWithObject`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:220

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).intersectsWithRect`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:206

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isCacheDirty`

#### Defined in

src/shapes/Object/Object.ts:981

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isContainedWithinObject`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:239

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isContainedWithinRect`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:247

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

#### Defined in

src/shapes/Object/InteractiveObject.ts:583

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

#### Defined in

src/shapes/Object/StackedObject.ts:46

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

#### Defined in

src/Collection.ts:128

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type Parameters

• **T** *extends* [`Group`](/api/classes/group/)

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

#### Defined in

src/shapes/Object/StackedObject.ts:153

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isNotVisible`

#### Defined in

src/shapes/Object/Object.ts:745

***

### isOnACache()

> **isOnACache**(): `boolean`

Check if instance or its group are caching, recursively up

#### Returns

`boolean`

#### Defined in

src/shapes/Group.ts:486

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

#### Defined in

src/shapes/Object/ObjectGeometry.ts:279

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).isOverlapping`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:257

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

#### Defined in

src/shapes/Object/ObjectGeometry.ts:309

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

#### Defined in

src/shapes/Object/Object.ts:1472

***

### item()

> **item**(`index`): [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Returns object at specified index

#### Parameters

• **index**: `number`

#### Returns

[`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

object at index

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).item`

#### Defined in

src/Collection.ts:120

***

### moveObjectTo()

> **moveObjectTo**(`object`, `index`): `boolean`

Moves an object to specified level in stack of drawn objects

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

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

#### Defined in

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

#### Defined in

src/shapes/Object/Object.ts:848

***

### off()

#### off(eventName, handler)

> **off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

##### Type Parameters

• **K** *extends* keyof [`GroupEvents`](/api/interfaces/groupevents/)

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

##### Defined in

src/Observable.ts:120

#### off(handlers)

> **off**(`handlers`): `void`

unsubscribe event listeners

##### Parameters

• **handlers**: `EventRegistryObject`\<[`GroupEvents`](/api/interfaces/groupevents/)\>

handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`void`

##### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).off`

##### Defined in

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

##### Defined in

src/Observable.ts:129

***

### on()

#### on(eventName, handler)

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

##### Type Parameters

• **K** *extends* keyof [`GroupEvents`](/api/interfaces/groupevents/)

• **E** *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `object` \| `object` \| `object` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| [`DropEventData`](/api/interfaces/dropeventdata/) \| `SimpleEventHandler`\<`Event`\> \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| `object` \| `object` \| [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) \| [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/)

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

##### Defined in

src/Observable.ts:23

#### on(handlers)

> **on**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`GroupEvents`](/api/interfaces/groupevents/)\>

##### Returns

`VoidFunction`

##### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).on`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).onDeselect`

#### Defined in

src/shapes/Object/InteractiveObject.ts:657

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

#### Defined in

src/shapes/Object/InteractiveObject.ts:690

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).onSelect`

#### Defined in

src/shapes/Object/InteractiveObject.ts:671

***

### once()

#### once(eventName, handler)

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

##### Type Parameters

• **K** *extends* keyof [`GroupEvents`](/api/interfaces/groupevents/)

• **E** *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `object` \| `object` \| `object` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| [`DropEventData`](/api/interfaces/dropeventdata/) \| `SimpleEventHandler`\<`Event`\> \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| `object` \| `object` \| [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) \| [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/)

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

##### Defined in

src/Observable.ts:62

#### once(handlers)

> **once**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`GroupEvents`](/api/interfaces/groupevents/)\>

##### Returns

`VoidFunction`

##### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).once`

##### Defined in

src/Observable.ts:66

***

### remove()

> **remove**(...`objects`): [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Remove objects

#### Parameters

• ...**objects**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Returns

[`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

removed objects

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).remove`

#### Defined in

src/shapes/Group.ts:252

***

### removeAll()

> **removeAll**(): [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Remove all objects

#### Returns

[`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

removed objects

#### Defined in

src/shapes/Group.ts:319

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

#### Defined in

src/shapes/Group.ts:535

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

#### Defined in

src/shapes/Object/Object.ts:791

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

#### Defined in

src/shapes/Object/InteractiveObject.ts:711

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

#### Defined in

src/shapes/Object/InteractiveObject.ts:723

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).rotate`

#### Defined in

src/shapes/Object/Object.ts:1500

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

#### Defined in

src/shapes/Object/ObjectGeometry.ts:358

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

#### Defined in

src/shapes/Object/ObjectGeometry.ts:381

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

#### Defined in

src/shapes/Object/ObjectGeometry.ts:369

***

### sendObjectBackwards()

> **sendObjectBackwards**(`object`, `intersecting`?): `boolean`

Moves an object or a selection down in stack of drawn objects
An optional parameter, `intersecting` allows to move the object in behind
the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

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

#### Defined in

src/Collection.ts:214

***

### sendObjectToBack()

> **sendObjectToBack**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the bottom of the stack of drawn objects

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to send to back

#### Returns

`boolean`

true if change occurred

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).sendObjectToBack`

#### Defined in

src/Collection.ts:178

***

### set()

> **set**(`key`, `value`?): [`Group`](/api/classes/group/)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `any`\>

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`Group`](/api/classes/group/)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).set`

#### Defined in

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

#### Defined in

src/shapes/Object/InteractiveObject.ts:598

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setControlsVisibility`

#### Defined in

src/shapes/Object/InteractiveObject.ts:610

***

### setCoords()

> **setCoords**(): `void`

#### Returns

`void`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setCoords`

#### Defined in

src/shapes/Group.ts:517

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

#### Defined in

src/shapes/Object/Object.ts:1532

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setPositionByOrigin`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:217

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

#### Defined in

src/shapes/Object/ObjectGeometry.ts:111

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/group/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setRelativeXY`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:174

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

#### Defined in

src/shapes/Object/ObjectGeometry.ts:127

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

#### Defined in

src/shapes/Object/ObjectGeometry.ts:81

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).setXY`

#### Example

```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Defined in

src/shapes/Object/ObjectGeometry.ts:151

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

#### Defined in

src/shapes/Object/ObjectGeometry.ts:95

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

#### Defined in

src/shapes/Group.ts:453

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).shouldStartDragging`

#### Defined in

src/shapes/Object/InteractiveObject.ts:681

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

#### Defined in

src/Collection.ts:136

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).strokeBorders`

#### Defined in

src/shapes/Object/InteractiveObject.ts:398

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toCanvasElement`

#### Defined in

src/shapes/Object/Object.ts:1363

***

### toClipPathSVG()

> **toClipPathSVG**(`reviver`?): `string`

Returns svg clipPath representation of an instance

#### Parameters

• **reviver?**: [`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toClipPathSVG`

#### Defined in

src/shapes/Group.ts:662

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toDataURL`

#### Defined in

src/shapes/Object/Object.ts:1459

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

#### Defined in

src/shapes/Object/Object.ts:587

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

#### Defined in

src/shapes/Object/Object.ts:1491

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & [`SerializedGroupProps`](/api/interfaces/serializedgroupprops/)

Returns object representation of an instance

#### Type Parameters

• **T** *extends* `Omit`\<[`GroupProps`](/api/interfaces/groupprops/) & [`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`Group`](/api/classes/group/)\>, keyof [`SerializedGroupProps`](/api/interfaces/serializedgroupprops/)\>

• **K** *extends* `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[] = `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & [`SerializedGroupProps`](/api/interfaces/serializedgroupprops/)

object representation of an instance

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toObject`

#### Defined in

src/shapes/Group.ts:572

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toSVG`

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:129

***

### toString()

> **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toString`

#### Defined in

src/shapes/Group.ts:597

***

### toggle()

> **toggle**(`property`): [`Group`](/api/classes/group/)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`Group`](/api/classes/group/)

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).toggle`

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).transform`

#### Defined in

src/shapes/Object/Object.ts:509

***

### transformMatrixKey()

> **transformMatrixKey**(`skipGroup`): `number`[]

#### Parameters

• **skipGroup**: `boolean` = `false`

#### Returns

`number`[]

#### Inherited from

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).transformMatrixKey`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:441

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).translateToCenterPoint`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:130

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).translateToGivenOrigin`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:102

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).translateToOriginPoint`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:155

***

### triggerLayout()

> **triggerLayout**(`options`): `void`

#### Parameters

• **options**: [`ImperativeLayoutOptions`](/api/type-aliases/imperativelayoutoptions/) = `{}`

#### Returns

`void`

#### Defined in

src/shapes/Group.ts:523

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

#### Defined in

src/shapes/Group.ts:470

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  )._fromObject`

#### Defined in

src/shapes/Object/Object.ts:1570

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

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).createControls`

#### Defined in

src/shapes/Object/InteractiveObject.ts:166

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

`createCollectionMixin(
    FabricObject<GroupProps, SerializedGroupProps, GroupEvents>
  ).getDefaults`

#### Defined in

src/shapes/Group.ts:126
