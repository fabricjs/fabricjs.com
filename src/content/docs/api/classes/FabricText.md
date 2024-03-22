---
editUrl: false
next: false
prev: false
title: "FabricText"
---

Text class

## Tutorial

[http://fabricjs.com/fabric-intro-part-2#text](http://fabricjs.com/fabric-intro-part-2#text)

## Extends

- `StyledText`\<`Props`, `SProps`, `EventSpec`\>

## Type parameters

• **Props** extends [`TOptions`](../type-aliases/TOptions.md)\<[`TextProps`](../interfaces/TextProps.md)\> = `Partial`\<[`TextProps`](../interfaces/TextProps.md)\>

• **SProps** extends [`SerializedTextProps`](../interfaces/SerializedTextProps.md) = [`SerializedTextProps`](../interfaces/SerializedTextProps.md)

• **EventSpec** extends [`ObjectEvents`](../interfaces/ObjectEvents.md) = [`ObjectEvents`](../interfaces/ObjectEvents.md)

## Implements

- `UniqueTextProps`

## Constructors

### new FabricText(text, options)

> **new FabricText**\<`Props`, `SProps`, `EventSpec`\>(`text`, `options`): [`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **text**: `string`

• **options**: `Props`= `undefined`

#### Returns

[`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

`StyledText<Props, SProps, EventSpec>.constructor`

#### Source

src/shapes/Text/Text.ts:423

## Properties

### MIN\_TEXT\_WIDTH

> **MIN\_TEXT\_WIDTH**: `number`

contains the min text width to avoid getting 0

#### Default

```ts

```

#### Source

src/shapes/Text/Text.ts:389

***

### \_\_corner?

> **`optional`** **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

`StyledText.__corner`

#### Source

src/shapes/Object/InteractiveObject.ts:104

***

### \_\_lineHeights

> **\_\_lineHeights**: `number`[]

#### Source

src/shapes/Text/Text.ts:409

***

### \_\_lineWidths

> **\_\_lineWidths**: `number`[]

#### Source

src/shapes/Text/Text.ts:410

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

`StyledText._controlsVisibility`

#### Source

src/shapes/Object/InteractiveObject.ts:111

***

### \_fontSizeMult

> **\_fontSizeMult**: `number`

Text Line proportion to font Size (in pixels)

#### Default

```ts

```

#### Source

src/shapes/Text/Text.ts:337

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

`StyledText._scaling`

#### Source

src/shapes/Object/InteractiveObject.ts:133

***

### \_text

> **\_text**: `string`[]

#### Source

src/shapes/Text/Text.ts:407

***

### \_textLines

> **\_textLines**: `string`[][]

same as textlines, but each line is an array of graphemes as split by splitByGrapheme

#### Default

```ts

```

#### Overrides

`StyledText._textLines`

#### Source

src/shapes/Text/Text.ts:404

***

### \_unwrappedTextLines

> **\_unwrappedTextLines**: `string`[][]

#### Source

src/shapes/Text/Text.ts:406

***

### aCoords

> **aCoords**: [`TCornerPoint`](../type-aliases/TCornerPoint.md)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/fabrictext/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/fabrictext/#calcacoords)

#### Inherited from

`StyledText.aCoords`

#### Source

src/shapes/Object/ObjectGeometry.ts:50

***

### absolutePositioned

> **absolutePositioned**: `boolean`

#### Inherited from

`StyledText.absolutePositioned`

#### Source

src/shapes/Object/Object.ts:166

***

### activeOn

> **activeOn**: `"down"` \| `"up"`

#### Inherited from

`StyledText.activeOn`

#### Source

src/shapes/Object/InteractiveObject.ts:83

***

### angle

> **angle**: [`TDegree`](../type-aliases/TDegree.md)

#### Inherited from

`StyledText.angle`

#### Source

src/shapes/Object/ObjectOrigin.ts:29

***

### backgroundColor

> **backgroundColor**: `string`

#### Inherited from

`StyledText.backgroundColor`

#### Source

src/shapes/Object/Object.ts:153

***

### borderColor

> **borderColor**: `string`

#### Inherited from

`StyledText.borderColor`

#### Source

src/shapes/Object/InteractiveObject.ts:73

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

#### Inherited from

`StyledText.borderDashArray`

#### Source

src/shapes/Object/InteractiveObject.ts:74

***

### borderOpacityWhenMoving

> **borderOpacityWhenMoving**: `number`

#### Inherited from

`StyledText.borderOpacityWhenMoving`

#### Source

src/shapes/Object/InteractiveObject.ts:75

***

### borderScaleFactor

> **borderScaleFactor**: `number`

#### Inherited from

`StyledText.borderScaleFactor`

#### Source

src/shapes/Object/InteractiveObject.ts:76

***

### canvas?

> **`optional`** **canvas**: [`Canvas`](Canvas.md)

#### Inherited from

`StyledText.canvas`

#### Source

src/shapes/Object/InteractiveObject.ts:135

***

### centeredRotation

> **centeredRotation**: `boolean`

#### Inherited from

`StyledText.centeredRotation`

#### Source

src/shapes/Object/Object.ts:167

***

### centeredScaling

> **centeredScaling**: `boolean`

#### Inherited from

`StyledText.centeredScaling`

#### Source

src/shapes/Object/Object.ts:168

***

### charSpacing

> **charSpacing**: `number`

additional space between characters
expressed in thousands of em unit

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.charSpacing`

#### Source

src/shapes/Text/Text.ts:345

***

### clipPath?

> **`optional`** **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Inherited from

`StyledText.clipPath`

#### Source

src/shapes/Object/Object.ts:164

***

### clipPathId?

> **`optional`** **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

`StyledText.clipPathId`

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:14

***

### controls

> **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

`StyledText.controls`

#### Source

src/shapes/Object/InteractiveObject.ts:117

***

### cornerColor

> **cornerColor**: `string`

#### Inherited from

`StyledText.cornerColor`

#### Source

src/shapes/Object/InteractiveObject.ts:67

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

#### Inherited from

`StyledText.cornerDashArray`

#### Source

src/shapes/Object/InteractiveObject.ts:70

***

### cornerSize

> **cornerSize**: `number`

#### Inherited from

`StyledText.cornerSize`

#### Source

src/shapes/Object/InteractiveObject.ts:64

***

### cornerStrokeColor

> **cornerStrokeColor**: `string`

#### Inherited from

`StyledText.cornerStrokeColor`

#### Source

src/shapes/Object/InteractiveObject.ts:68

***

### cornerStyle

> **cornerStyle**: `"circle"` \| `"rect"`

#### Inherited from

`StyledText.cornerStyle`

#### Source

src/shapes/Object/InteractiveObject.ts:69

***

### cursorWidth

> **cursorWidth**: `number`

#### Source

src/shapes/Text/Text.ts:408

***

### deltaY

> **deltaY**: `number`

Baseline shift, styles only, keep at 0 for the main text object

#### Default

```ts

```

#### Source

src/shapes/Text/Text.ts:352

***

### direction

> **direction**: `CanvasDirection`

WARNING: EXPERIMENTAL. NOT SUPPORTED YET
determine the direction of the text.
This has to be set manually together with textAlign and originX for proper
experience.
some interesting link for the future
https://www.w3.org/International/questions/qa-bidi-unicode-controls

#### Since

4.5.0

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.direction`

#### Source

src/shapes/Text/Text.ts:365

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

`StyledText.dirty`

#### Source

src/shapes/Object/Object.ts:193

***

### evented

> **evented**: `boolean`

#### Inherited from

`StyledText.evented`

#### Source

src/shapes/Object/InteractiveObject.ts:81

***

### excludeFromExport

> **excludeFromExport**: `boolean`

#### Inherited from

`StyledText.excludeFromExport`

#### Source

src/shapes/Object/Object.ts:160

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Inherited from

`StyledText.fill`

#### Source

src/shapes/Object/Object.ts:143

***

### fillRule

> **fillRule**: `CanvasFillRule`

#### Inherited from

`StyledText.fillRule`

#### Source

src/shapes/Object/Object.ts:144

***

### flipX

> **flipX**: `boolean`

#### Inherited from

`StyledText.flipX`

#### Source

src/shapes/Object/ObjectOrigin.ts:21

***

### flipY

> **flipY**: `boolean`

#### Inherited from

`StyledText.flipY`

#### Source

src/shapes/Object/ObjectOrigin.ts:22

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.fontFamily`

#### Source

src/shapes/Text/Text.ts:186

***

### fontSize

> **fontSize**: `number`

Font size (in pixels)

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.fontSize`

#### Source

src/shapes/Text/Text.ts:172

***

### fontStyle

> **fontStyle**: `string`

Font style . Possible values: "", "normal", "italic" or "oblique".

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.fontStyle`

#### Source

src/shapes/Text/Text.ts:222

***

### fontWeight

> **fontWeight**: `string`

Font weight (e.g. bold, normal, 400, 600, 800)

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.fontWeight`

#### Source

src/shapes/Text/Text.ts:179

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

#### Inherited from

`StyledText.globalCompositeOperation`

#### Source

src/shapes/Object/Object.ts:152

***

### hasBorders

> **hasBorders**: `boolean`

#### Inherited from

`StyledText.hasBorders`

#### Source

src/shapes/Object/InteractiveObject.ts:77

***

### hasControls

> **hasControls**: `boolean`

#### Inherited from

`StyledText.hasControls`

#### Source

src/shapes/Object/InteractiveObject.ts:71

***

### height

> **height**: `number`

#### Inherited from

`StyledText.height`

#### Source

src/shapes/Object/ObjectOrigin.ts:20

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

#### Inherited from

`StyledText.hoverCursor`

#### Source

src/shapes/Object/InteractiveObject.ts:85

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

#### Inherited from

`StyledText.includeDefaultValues`

#### Source

src/shapes/Object/Object.ts:159

***

### initialized?

> **`optional`** **initialized**: `true`

#### Source

src/shapes/Text/Text.ts:411

***

### inverted

> **inverted**: `boolean`

#### Inherited from

`StyledText.inverted`

#### Source

src/shapes/Object/Object.ts:165

***

### isMoving?

> **`optional`** **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

`StyledText.isMoving`

#### Source

src/shapes/Object/InteractiveObject.ts:123

***

### left

> **left**: `number`

#### Inherited from

`StyledText.left`

#### Source

src/shapes/Object/ObjectOrigin.ts:18

***

### lineHeight

> **lineHeight**: `number`

Line height

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.lineHeight`

#### Source

src/shapes/Text/Text.ts:229

***

### linethrough

> **linethrough**: `boolean`

Text decoration linethrough.

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.linethrough`

#### Source

src/shapes/Text/Text.ts:207

***

### lockMovementX

> **lockMovementX**: `boolean`

#### Inherited from

`StyledText.lockMovementX`

#### Source

src/shapes/Object/InteractiveObject.ts:55

***

### lockMovementY

> **lockMovementY**: `boolean`

#### Inherited from

`StyledText.lockMovementY`

#### Source

src/shapes/Object/InteractiveObject.ts:56

***

### lockRotation

> **lockRotation**: `boolean`

#### Inherited from

`StyledText.lockRotation`

#### Source

src/shapes/Object/InteractiveObject.ts:57

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

#### Inherited from

`StyledText.lockScalingFlip`

#### Source

src/shapes/Object/InteractiveObject.ts:62

***

### lockScalingX

> **lockScalingX**: `boolean`

#### Inherited from

`StyledText.lockScalingX`

#### Source

src/shapes/Object/InteractiveObject.ts:58

***

### lockScalingY

> **lockScalingY**: `boolean`

#### Inherited from

`StyledText.lockScalingY`

#### Source

src/shapes/Object/InteractiveObject.ts:59

***

### lockSkewingX

> **lockSkewingX**: `boolean`

#### Inherited from

`StyledText.lockSkewingX`

#### Source

src/shapes/Object/InteractiveObject.ts:60

***

### lockSkewingY

> **lockSkewingY**: `boolean`

#### Inherited from

`StyledText.lockSkewingY`

#### Source

src/shapes/Object/InteractiveObject.ts:61

***

### matrixCache?

> **`optional`** **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

`StyledText.matrixCache`

#### Source

src/shapes/Object/ObjectGeometry.ts:60

***

### minScaleLimit

> **minScaleLimit**: `number`

#### Inherited from

`StyledText.minScaleLimit`

#### Source

src/shapes/Object/Object.ts:138

***

### moveCursor

> **moveCursor**: `null` \| `string`

#### Inherited from

`StyledText.moveCursor`

#### Source

src/shapes/Object/InteractiveObject.ts:86

***

### noScaleCache

> **noScaleCache**: `boolean`

#### Inherited from

`StyledText.noScaleCache`

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

`StyledText.oCoords`

#### Source

src/shapes/Object/InteractiveObject.ts:94

***

### objectCaching

> **objectCaching**: `boolean`

#### Inherited from

`StyledText.objectCaching`

#### Source

src/shapes/Object/Object.ts:162

***

### opacity

> **opacity**: `number`

#### Inherited from

`StyledText.opacity`

#### Source

src/shapes/Object/Object.ts:140

***

### originX

> **originX**: [`TOriginX`](../type-aliases/TOriginX.md)

#### Inherited from

`StyledText.originX`

#### Source

src/shapes/Object/ObjectOrigin.ts:27

***

### originY

> **originY**: [`TOriginY`](../type-aliases/TOriginY.md)

#### Inherited from

`StyledText.originY`

#### Source

src/shapes/Object/ObjectOrigin.ts:28

***

### overline

> **overline**: `boolean`

Text decoration overline.

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.overline`

#### Source

src/shapes/Text/Text.ts:200

***

### ownMatrixCache?

> **`optional`** **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

`StyledText.ownMatrixCache`

#### Source

src/shapes/Object/ObjectGeometry.ts:55

***

### padding

> **padding**: `number`

#### Inherited from

`StyledText.padding`

#### Source

src/shapes/Object/ObjectGeometry.ts:40

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

#### Inherited from

`StyledText.paintFirst`

#### Source

src/shapes/Object/Object.ts:142

***

### parent?

> **`optional`** **parent**: [`Group`](Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

`StyledText.parent`

#### Source

src/shapes/Object/StackedObject.ts:44

***

### path?

> **`optional`** **path**: [`Path`](Path.md)\<`Partial`\<[`PathProps`](../interfaces/PathProps.md)\>, [`SerializedPathProps`](../interfaces/SerializedPathProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Path that the text should follow.
since 4.6.0 the path will be drawn automatically.
if you want to make the path visible, give it a stroke and strokeWidth or fill value
if you want it to be hidden, assign visible = false to the path.
This feature is in BETA, and SVG import/export is not yet supported.

#### Example

```ts
const textPath = new Text('Text on a path', {
    top: 150,
    left: 150,
    textAlign: 'center',
    charSpacing: -50,
    path: new Path('M 0 0 C 50 -100 150 -100 200 0', {
        strokeWidth: 1,
        visible: false
    }),
    pathSide: 'left',
    pathStartOffset: 0
});
```

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.path`

#### Source

src/shapes/Text/Text.ts:294

***

### pathAlign

> **pathAlign**: [`TPathAlign`](../type-aliases/TPathAlign.md)

How text is aligned to the path. This property determines
the perpendicular position of each character relative to the path.
(one of "baseline", "center", "ascender", "descender")
This feature is in BETA, and its behavior may change

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.pathAlign`

#### Source

src/shapes/Text/Text.ts:320

***

### pathSide

> **pathSide**: [`TPathSide`](../type-aliases/TPathSide.md)

Which side of the path the text should be drawn on.
Only used when text has a path

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.pathSide`

#### Source

src/shapes/Text/Text.ts:310

***

### pathStartOffset

> **pathStartOffset**: `number`

Offset amount for text path starting position
Only used when text has a path

#### Default

```ts

```

#### Source

src/shapes/Text/Text.ts:302

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

#### Inherited from

`StyledText.perPixelTargetFind`

#### Source

src/shapes/Object/InteractiveObject.ts:82

***

### scaleX

> **scaleX**: `number`

#### Inherited from

`StyledText.scaleX`

#### Source

src/shapes/Object/ObjectOrigin.ts:23

***

### scaleY

> **scaleY**: `number`

#### Inherited from

`StyledText.scaleY`

#### Source

src/shapes/Object/ObjectOrigin.ts:24

***

### selectable

> **selectable**: `boolean`

#### Inherited from

`StyledText.selectable`

#### Source

src/shapes/Object/InteractiveObject.ts:80

***

### selectionBackgroundColor

> **selectionBackgroundColor**: `string`

#### Inherited from

`StyledText.selectionBackgroundColor`

#### Source

src/shapes/Object/InteractiveObject.ts:78

***

### shadow

> **shadow**: `null` \| [`Shadow`](Shadow.md)

#### Inherited from

`StyledText.shadow`

#### Source

src/shapes/Object/Object.ts:155

***

### skewX

> **skewX**: `number`

#### Inherited from

`StyledText.skewX`

#### Source

src/shapes/Object/ObjectOrigin.ts:25

***

### skewY

> **skewY**: `number`

#### Inherited from

`StyledText.skewY`

#### Source

src/shapes/Object/ObjectOrigin.ts:26

***

### snapAngle?

> **`optional`** **snapAngle**: [`TDegree`](../type-aliases/TDegree.md)

#### Inherited from

`StyledText.snapAngle`

#### Source

src/shapes/Object/InteractiveObject.ts:52

***

### snapThreshold?

> **`optional`** **snapThreshold**: [`TDegree`](../type-aliases/TDegree.md)

#### Inherited from

`StyledText.snapThreshold`

#### Source

src/shapes/Object/InteractiveObject.ts:53

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Inherited from

`StyledText.stroke`

#### Source

src/shapes/Object/Object.ts:145

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

#### Inherited from

`StyledText.strokeDashArray`

#### Source

src/shapes/Object/Object.ts:146

***

### strokeDashOffset

> **strokeDashOffset**: `number`

#### Inherited from

`StyledText.strokeDashOffset`

#### Source

src/shapes/Object/Object.ts:147

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

#### Inherited from

`StyledText.strokeLineCap`

#### Source

src/shapes/Object/Object.ts:148

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

#### Inherited from

`StyledText.strokeLineJoin`

#### Source

src/shapes/Object/Object.ts:149

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

#### Inherited from

`StyledText.strokeMiterLimit`

#### Source

src/shapes/Object/Object.ts:150

***

### strokeUniform

> **strokeUniform**: `boolean`

#### Inherited from

`StyledText.strokeUniform`

#### Source

src/shapes/Object/ObjectOrigin.ts:31

***

### strokeWidth

> **strokeWidth**: `number`

#### Inherited from

`StyledText.strokeWidth`

#### Source

src/shapes/Object/ObjectOrigin.ts:30

***

### styles

> **styles**: [`TextStyle`](../type-aliases/TextStyle.md)

#### Overrides

`StyledText.styles`

#### Source

src/shapes/Text/Text.ts:270

***

### subscript

> **subscript**: `Object`

Subscript schema object (minimum overlap)

#### baseline

> **baseline**: `number`

baseline-shift factor (downwards)

##### Default

```ts
0.11
```

#### size

> **size**: `number`

fontSize factor

##### Default

```ts
0.6
```

#### Source

src/shapes/Text/Text.ts:250

***

### superscript

> **superscript**: `Object`

Superscript schema object (minimum overlap)

#### baseline

> **baseline**: `number`

baseline-shift factor (upwards)

##### Default

```ts
-0.35
```

#### size

> **size**: `number`

fontSize factor

##### Default

```ts
0.6
```

#### Source

src/shapes/Text/Text.ts:234

***

### text

> **text**: `string`

#### Source

src/shapes/Text/Text.ts:165

***

### textAlign

> **textAlign**: `string`

Text alignment. Possible values: "left", "center", "right", "justify",
"justify-left", "justify-center" or "justify-right".

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.textAlign`

#### Source

src/shapes/Text/Text.ts:215

***

### textBackgroundColor

> **textBackgroundColor**: `string`

Background color of text lines

#### Default

```ts

```

#### Source

src/shapes/Text/Text.ts:268

***

### textLines

> **textLines**: `string`[]

contains the the text of the object, divided in lines as they are displayed
on screen. Wrapping will divide the text independently of line breaks

#### Default

```ts

```

#### Source

src/shapes/Text/Text.ts:397

***

### top

> **top**: `number`

#### Inherited from

`StyledText.top`

#### Source

src/shapes/Object/ObjectOrigin.ts:17

***

### touchCornerSize

> **touchCornerSize**: `number`

#### Inherited from

`StyledText.touchCornerSize`

#### Source

src/shapes/Object/InteractiveObject.ts:65

***

### transparentCorners

> **transparentCorners**: `boolean`

#### Inherited from

`StyledText.transparentCorners`

#### Source

src/shapes/Object/InteractiveObject.ts:66

***

### underline

> **underline**: `boolean`

Text decoration underline.

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.underline`

#### Source

src/shapes/Text/Text.ts:193

***

### visible

> **visible**: `boolean`

#### Inherited from

`StyledText.visible`

#### Source

src/shapes/Object/Object.ts:157

***

### width

> **width**: `number`

#### Inherited from

`StyledText.width`

#### Source

src/shapes/Object/ObjectOrigin.ts:19

***

### ATTRIBUTE\_NAMES

> **`static`** **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [FabricText.fromElement](../../../../api/classes/fabrictext/#fromelement))

#### Static

#### Member Of

Text
@see: http://www.w3.org/TR/SVG/text.html#TextElement

#### Source

src/shapes/Text/Text.ts:1803

***

### \_styleProperties

> **`static`** **\_styleProperties**: readonly `StylePropertiesType`[] = `styleProperties`

#### Inherited from

`StyledText._styleProperties`

#### Source

src/shapes/Text/StyledText.ts:30

***

### cacheProperties

> **`static`** **cacheProperties**: `string`[]

#### Overrides

`StyledText.cacheProperties`

#### Source

src/shapes/Text/Text.ts:413

***

### colorProperties

> **`static`** **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

`StyledText.colorProperties`

#### Source

src/shapes/Object/AnimatableObject.ts:20

***

### genericFonts

> **`static`** **genericFonts**: `string`[]

#### Source

src/shapes/Text/Text.ts:1787

***

### ownDefaults

> **`static`** **ownDefaults**: `Partial`\<[`TClassProperties`](../type-aliases/TClassProperties.md)\<[`FabricText`](FabricText.md)\<`Partial`\<[`TextProps`](../interfaces/TextProps.md)\>, [`SerializedTextProps`](../interfaces/SerializedTextProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>\> = `textDefaultValues`

#### Overrides

`StyledText.ownDefaults`

#### Source

src/shapes/Text/Text.ts:415

***

### stateProperties

> **`static`** **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

`StyledText.stateProperties`

#### Source

src/shapes/Object/Object.ts:176

***

### type

> **`static`** **type**: `string` = `'Text'`

#### Overrides

`StyledText.type`

#### Source

src/shapes/Text/Text.ts:417

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

`StyledText._drawClipPath`

#### Source

src/shapes/Object/Object.ts:977

***

### \_getFontDeclaration()

> **\_getFontDeclaration**(`__namedParameters`?, `forMeasuring`?): `string`

return font declaration string for canvas context

#### Parameters

• **\_\_namedParameters?**: `Partial`\<`Pick`\<`Partial`\<[`CompleteTextStyleDeclaration`](../type-aliases/CompleteTextStyleDeclaration.md)\>, `"fontFamily"` \| `"fontSize"` \| `"fontStyle"` \| `"fontWeight"`\>\>= `{}`

• **forMeasuring?**: `boolean`

#### Returns

`string`

font declaration formatted for canvas context.

#### Source

src/shapes/Text/Text.ts:1650

***

### \_getGraphemeBox()

> **\_getGraphemeBox**(`grapheme`, `lineIndex`, `charIndex`, `prevGrapheme`?, `skipLeft`?): [`GraphemeBBox`](../type-aliases/GraphemeBBox.md)

#### Parameters

• **grapheme**: `string`

to be measured

• **lineIndex**: `number`

index of the line where the char is

• **charIndex**: `number`

position in the line

• **prevGrapheme?**: `string`

character preceding the one to be measured

• **skipLeft?**: `boolean`

#### Returns

[`GraphemeBBox`](../type-aliases/GraphemeBBox.md)

grapheme bbox

#### Source

src/shapes/Text/Text.ts:975

***

### \_getWidthOfCharSpacing()

> **\_getWidthOfCharSpacing**(): `number`

#### Returns

`number`

#### Source

src/shapes/Text/Text.ts:1517

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

`StyledText._limitCacheSize`

#### Source

src/shapes/Object/Object.ts:372

***

### \_measureLine()

> **\_measureLine**(`lineIndex`): `Object`

measure every grapheme of a line, populating __charBounds

#### Parameters

• **lineIndex**: `number`

#### Returns

`Object`

object.width total width of characters

object.numOfSpaces length of chars that match this._reSpacesAndTabs

##### numOfSpaces

> **numOfSpaces**: `number` = `0`

##### width

> **width**: `number`

#### Source

src/shapes/Text/Text.ts:883

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

`StyledText._removeCacheCanvas`

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

`StyledText._renderControls`

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

`StyledText._setClippingProperties`

#### Source

src/shapes/Object/Object.ts:1117

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `style`): `Object`

This function prepare the canvas for a ill style, and fill
need to be sent in as defined

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **style**: `Pick`\<[`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>, `"fill"`\>

with ill defined

#### Returns

`Object`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Overrides

`StyledText._setFillStyles`

#### Source

src/shapes/Text/Text.ts:1330

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `style`): `Object`

This function prepare the canvas for a stroke style, and stroke and strokeWidth
need to be sent in as defined

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **style**: `Pick`\<[`CompleteTextStyleDeclaration`](../type-aliases/CompleteTextStyleDeclaration.md), `"strokeWidth"` \| `"stroke"`\>

with stroke and strokeWidth defined

#### Returns

`Object`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Overrides

`StyledText._setStrokeStyles`

#### Source

src/shapes/Text/Text.ts:1308

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

`StyledText._setupCompositeOperation`

#### Source

src/shapes/Object/Object.ts:1571

***

### \_splitTextIntoLines()

> **\_splitTextIntoLines**(`text`): `TextLinesInfo`

Returns the text as an array of lines.

#### Parameters

• **text**: `string`

text to split

#### Returns

`TextLinesInfo`

Lines in the text

#### Source

src/shapes/Text/Text.ts:1718

***

### \_toSVG()

> **\_toSVG**(`reviver`?): `string`[]

Returns svg representation of an instance
This function is implemented in each subclass
This is just because typescript otherwise cryies all the time

#### Parameters

• **reviver?**: [`TSVGReviver`](../type-aliases/TSVGReviver.md)

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Inherited from

`StyledText._toSVG`

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:120

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`string`

#### Inherited from

`StyledText.addPaintOrder`

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

`StyledText.animate`

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

`StyledText.calcACoords`

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

`StyledText.calcOCoords`

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

`StyledText.calcOwnMatrix`

#### Source

src/shapes/Object/ObjectGeometry.ts:511

***

### calcTextHeight()

> **calcTextHeight**(): `number`

Calculate text box height

#### Returns

`number`

#### Source

src/shapes/Text/Text.ts:1036

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

`StyledText.calcTransformMatrix`

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

`StyledText.canDrop`

#### Source

src/shapes/Object/InteractiveObject.ts:663

***

### cleanStyle()

> **cleanStyle**(`property`): `undefined` \| `false`

Check if characters in a text have a value for a property
whose value matches the textbox's value for that property.  If so,
the character-level property is deleted.  If the character
has no other properties, then it is also deleted.  Finally,
if the line containing that character has no other characters
then it also is deleted.

#### Parameters

• **property**: `StylePropertiesType`

The property to compare between characters and text.

#### Returns

`undefined` \| `false`

#### Inherited from

`StyledText.cleanStyle`

#### Source

src/shapes/Text/StyledText.ts:103

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

`StyledText.clearContextTop`

#### Todo

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Source

src/shapes/Object/InteractiveObject.ts:589

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

`StyledText.clone`

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

`StyledText.cloneAsImage`

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

complexity

#### Overrides

`StyledText.complexity`

#### Source

src/shapes/Text/Text.ts:1783

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

`StyledText.containsPoint`

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

`StyledText.dispose`

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

`StyledText.drawBorders`

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

`StyledText.drawCacheOnCanvas`

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

`StyledText.drawClipPathOnCache`

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

`StyledText.drawControls`

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

`StyledText.drawControlsConnectingLines`

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

`StyledText.drawObject`

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

`StyledText.drawSelectionBackground`

#### Todo

evaluate if make this disappear in favor of a pre-render hook for objects
this was added by Andrea Bogazzi to make possible some feature for work reasons
it seemed a good option, now is an edge case

#### Source

src/shapes/Object/InteractiveObject.ts:339

***

### enlargeSpaces()

> **enlargeSpaces**(): `void`

Enlarge space boxes and shift the others

#### Returns

`void`

#### Source

src/shapes/Text/Text.ts:483

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`, `S`\>(`other`, `strict`?): `AncestryComparison`\<`S`\>

Compare ancestors

#### Type parameters

• **T** extends [`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

• **S** extends `boolean`

#### Parameters

• **other**: `T`

• **strict?**: `S`

finds only ancestors that are objects (without canvas)

#### Returns

`AncestryComparison`\<`S`\>

an object that represent the ancestry situation.

#### Inherited from

`StyledText.findCommonAncestors`

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

`StyledText.fire`

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

`StyledText.forEachControl`

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

`StyledText.get`

#### Source

src/CommonMethods.ts:59

***

### get2DCursorLocation()

> **get2DCursorLocation**(`selectionStart`, `skipWrapping`?): `Object`

Returns 2d representation (lineIndex and charIndex) of cursor

#### Parameters

• **selectionStart**: `number`

• **skipWrapping?**: `boolean`

consider the location for unwrapped lines. useful to manage styles.

#### Returns

`Object`

##### charIndex

> **charIndex**: `number` = `selectionStart`

##### lineIndex

> **lineIndex**: `number` = `i`

#### Overrides

`StyledText.get2DCursorLocation`

#### Source

src/shapes/Text/Text.ts:547

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| `Object`

#### Returns

`undefined` \| `Object`

#### Inherited from

`StyledText.getActiveControl`

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

`StyledText.getAncestors`

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

`StyledText.getBoundingRect`

#### Source

src/shapes/Object/ObjectGeometry.ts:330

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

`StyledText.getCanvasRetinaScaling`

#### Source

src/shapes/Object/ObjectGeometry.ts:387

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](Point.md)

#### Inherited from

`StyledText.getCenterPoint`

#### Source

src/shapes/Object/ObjectOrigin.ts:174

***

### getCompleteStyleDeclaration()

> **getCompleteStyleDeclaration**(`lineIndex`, `charIndex`): [`CompleteTextStyleDeclaration`](../type-aliases/CompleteTextStyleDeclaration.md)

return a new object that contains all the style property for a character
the object returned is newly created

#### Parameters

• **lineIndex**: `number`

of the line where the character is

• **charIndex**: `number`

position of the character on the line

#### Returns

[`CompleteTextStyleDeclaration`](../type-aliases/CompleteTextStyleDeclaration.md)

style object

#### Inherited from

`StyledText.getCompleteStyleDeclaration`

#### Source

src/shapes/Text/StyledText.ts:279

***

### getCoords()

> **getCoords**(): [`Point`](Point.md)[]

#### Returns

[`Point`](Point.md)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

`StyledText.getCoords`

#### Source

src/shapes/Object/ObjectGeometry.ts:191

***

### getHeightOfChar()

> **getHeightOfChar**(`line`, `_char`): `number`

Computes height of character at given position

#### Parameters

• **line**: `number`

the line index number

• **\_char**: `number`

the character index number

#### Returns

`number`

fontSize of the character

#### Source

src/shapes/Text/Text.ts:858

***

### getHeightOfLine()

> **getHeightOfLine**(`lineIndex`): `number`

Calculate height of line at 'lineIndex'

#### Parameters

• **lineIndex**: `number`

index of line to calculate

#### Returns

`number`

#### Source

src/shapes/Text/Text.ts:1017

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

`StyledText.getObjectOpacity`

#### Source

src/shapes/Object/Object.ts:690

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](Point.md)

#### Inherited from

`StyledText.getObjectScaling`

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

`StyledText.getPointByOrigin`

#### Source

src/shapes/Object/ObjectOrigin.ts:199

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](Point.md)

#### Inherited from

`StyledText.getRelativeCenterPoint`

#### Source

src/shapes/Object/ObjectOrigin.ts:185

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](FabricObject.md#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](FabricText.md#getx)

#### Inherited from

`StyledText.getRelativeX`

#### Source

src/shapes/Object/ObjectGeometry.ts:102

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x,y position according to object's [originX](FabricObject.md#originx) [originY](FabricObject.md#originy) properties in parent's coordinate plane

#### Inherited from

`StyledText.getRelativeXY`

#### Source

src/shapes/Object/ObjectGeometry.ts:163

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](FabricObject.md#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](FabricText.md#gety)

#### Inherited from

`StyledText.getRelativeY`

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

`StyledText.getScaledHeight`

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

`StyledText.getScaledWidth`

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Source

src/shapes/Object/ObjectGeometry.ts:339

***

### getSelectionStyles()

> **getSelectionStyles**(`startIndex`, `endIndex`?, `complete`?): `Partial`\<[`CompleteTextStyleDeclaration`](../type-aliases/CompleteTextStyleDeclaration.md)\>[]

Gets style of a current selection/cursor (at the start position)

#### Parameters

• **startIndex**: `number`

Start index to get styles at

• **endIndex?**: `number`

End index to get styles at, if not specified startIndex + 1

• **complete?**: `boolean`

get full style or not

#### Returns

`Partial`\<[`CompleteTextStyleDeclaration`](../type-aliases/CompleteTextStyleDeclaration.md)\>[]

styles an array with one, zero or more Style objects

#### Inherited from

`StyledText.getSelectionStyles`

#### Source

src/shapes/Text/StyledText.ts:213

***

### getSvgCommons()

> **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> & `Object`

#### Returns

`string`

#### Inherited from

`StyledText.getSvgCommons`

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

`StyledText.getSvgFilter`

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

`StyledText.getSvgStyles`

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

`StyledText.getSvgTransform`

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:103

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](../type-aliases/TDegree.md)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](../type-aliases/TDegree.md)

#### Inherited from

`StyledText.getTotalAngle`

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

`StyledText.getTotalObjectScaling`

#### Source

src/shapes/Object/Object.ts:676

***

### getValueOfPropertyAt()

> **getValueOfPropertyAt**\<`T`\>(`lineIndex`, `charIndex`, `property`): [`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>\[`T`\]

Retrieves the value of property at given character position

#### Type parameters

• **T** extends `StylePropertiesType`

#### Parameters

• **lineIndex**: `number`

the line number

• **charIndex**: `number`

the character number

• **property**: `T`

the property name

#### Returns

[`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>\[`T`\]

the value of 'property'

#### Source

src/shapes/Text/Text.ts:1531

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](../type-aliases/TMat2D.md)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](../type-aliases/TMat2D.md)

#### Inherited from

`StyledText.getViewportTransform`

#### Source

src/shapes/Object/ObjectGeometry.ts:405

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](FabricObject.md#originx) property in canvas coordinate plane

#### Inherited from

`StyledText.getX`

#### Source

src/shapes/Object/ObjectGeometry.ts:73

***

### getXY()

> **getXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x position according to object's [originX](FabricObject.md#originx) [originY](FabricObject.md#originy) properties in canvas coordinate plane

#### Inherited from

`StyledText.getXY`

#### Source

src/shapes/Object/ObjectGeometry.ts:133

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](FabricObject.md#originy) property in canvas coordinate plane

#### Inherited from

`StyledText.getY`

#### Source

src/shapes/Object/ObjectGeometry.ts:87

***

### graphemeSplit()

> **graphemeSplit**(`value`): `string`[]

Override this method to customize grapheme splitting

#### Parameters

• **value**: `string`

#### Returns

`string`[]

array of graphemes

#### Todo

the util `graphemeSplit` needs to be injectable in some way.
is more comfortable to inject the correct util rather than having to override text
in the middle of the prototype chain

#### Source

src/shapes/Text/Text.ts:1709

***

### handleFiller()

> **handleFiller**\<`T`\>(`ctx`, `property`, `filler`): `Object`

#### Type parameters

• **T** extends `"fill"` \| `"stroke"`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **property**: ```${T}Style```

• **filler**: `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Returns

`Object`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Source

src/shapes/Text/Text.ts:1268

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`, `strict`?): `boolean`

#### Type parameters

• **T** extends [`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

• **strict?**: `boolean`

checks only ancestors that are objects (without canvas)

#### Returns

`boolean`

#### Inherited from

`StyledText.hasCommonAncestors`

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

`StyledText.hasFill`

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

`StyledText.hasStroke`

#### Since

3.0.0

#### Source

src/shapes/Object/Object.ts:848

***

### initDimensions()

> **initDimensions**(): `void`

Initialize or update text dimensions.
Updates this.width and this.height with the proper values.
Does not return dimensions.

#### Returns

`void`

#### Source

src/shapes/Text/Text.ts:462

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

`StyledText.intersectsWithObject`

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

`StyledText.intersectsWithRect`

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

`StyledText.isCacheDirty`

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

`StyledText.isContainedWithinObject`

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

`StyledText.isContainedWithinRect`

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

`StyledText.isControlVisible`

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

`StyledText.isDescendantOf`

#### Source

src/shapes/Object/StackedObject.ts:52

***

### isEmptyStyles()

> **isEmptyStyles**(`lineIndex`?): `boolean`

Returns true if object has no styling or no styling in a line

#### Parameters

• **lineIndex?**: `number`

, lineIndex is on wrapped lines.

#### Returns

`boolean`

#### Inherited from

`StyledText.isEmptyStyles`

#### Source

src/shapes/Text/StyledText.ts:41

***

### isEndOfWrapping()

> **isEndOfWrapping**(`lineIndex`): `boolean`

Detect if the text line is ended with an hard break
text and itext do not have wrapping, return false

#### Parameters

• **lineIndex**: `number`

#### Returns

`boolean`

#### Source

src/shapes/Text/Text.ts:527

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

• **T** extends [`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

`StyledText.isInFrontOf`

#### Source

src/shapes/Object/StackedObject.ts:169

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`StyledText.isNotVisible`

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

`StyledText.isOnScreen`

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

`StyledText.isOverlapping`

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

`StyledText.isPartiallyOnScreen`

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

`StyledText.isType`

#### Source

src/shapes/Object/Object.ts:1502

***

### measureLine()

> **measureLine**(`lineIndex`): `Object`

measure a text line measuring all characters.

#### Parameters

• **lineIndex**: `number`

line number

#### Returns

`Object`

##### numOfSpaces

> **numOfSpaces**: `number` = `0`

##### width

> **width**: `number`

#### Source

src/shapes/Text/Text.ts:866

***

### missingNewlineOffset()

> **missingNewlineOffset**(`lineIndex`, `skipWrapping`?): `0` \| `1`

Detect if a line has a linebreak and so we need to account for it when moving
and counting style.
It return always 1 for text and Itext. Textbox has its own implementation

#### Parameters

• **lineIndex**: `number`

• **skipWrapping?**: `boolean`

#### Returns

`0` \| `1`

Number

#### Source

src/shapes/Text/Text.ts:537

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

`StyledText.needsItsOwnCache`

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

`StyledText.off`

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

`StyledText.off`

##### Source

src/Observable.ts:125

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

`StyledText.off`

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

`StyledText.on`

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

`StyledText.on`

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

`StyledText.onDeselect`

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

`StyledText.onDragStart`

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

`StyledText.onSelect`

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

`StyledText.once`

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

`StyledText.once`

##### Source

src/Observable.ts:66

***

### removeStyle()

> **removeStyle**(`property`): `void`

Remove a style property or properties from all individual character styles
in a text object.  Deletes the character style object if it contains no other style
props.  Deletes a line style object if it contains no other character styles.

#### Parameters

• **property**: `StylePropertiesType`

#### Returns

`void`

#### Inherited from

`StyledText.removeStyle`

#### Source

src/shapes/Text/StyledText.ts:165

***

### render()

> **render**(`ctx`): `void`

Renders text instance on a specified context

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Overrides

`StyledText.render`

#### Source

src/shapes/Text/Text.ts:1683

***

### renderCache()

> **renderCache**(`options`?): `void`

#### Parameters

• **options?**: `any`

#### Returns

`void`

#### Inherited from

`StyledText.renderCache`

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

`StyledText.renderDragSourceEffect`

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

`StyledText.renderDropTargetEffect`

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

`StyledText.rotate`

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

`StyledText.scale`

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

`StyledText.scaleToHeight`

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

`StyledText.scaleToWidth`

#### Source

src/shapes/Object/ObjectGeometry.ts:368

***

### set()

> **set**(`key`, `value`?): [`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **key**: `any`

• **value?**: `any`

#### Returns

[`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

`StyledText.set`

#### Source

src/shapes/Text/Text.ts:1752

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

`StyledText.setControlVisible`

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

`StyledText.setControlsVisibility`

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

`StyledText.setCoords`

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

`StyledText.setOnGroup`

#### Source

src/shapes/Object/Object.ts:1562

***

### setPathInfo()

> **setPathInfo**(): `void`

If text has a path, it will add the extra information needed
for path and text calculations

#### Returns

`void`

#### Source

src/shapes/Text/Text.ts:437

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

`StyledText.setPositionByOrigin`

#### Source

src/shapes/Object/ObjectOrigin.ts:214

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](../../../../api/classes/fabrictext/#setx)

#### Returns

`void`

#### Inherited from

`StyledText.setRelativeX`

#### Source

src/shapes/Object/ObjectGeometry.ts:110

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/fabrictext/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

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

`StyledText.setRelativeXY`

#### Source

src/shapes/Object/ObjectGeometry.ts:173

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](../../../../api/classes/fabrictext/#sety)

#### Returns

`void`

#### Inherited from

`StyledText.setRelativeY`

#### Source

src/shapes/Object/ObjectGeometry.ts:126

***

### setSelectionStyles()

> **setSelectionStyles**(`styles`, `startIndex`, `endIndex`?): `void`

Sets style of a current selection, if no selection exist, do not set anything.

#### Parameters

• **styles**: `object`

Styles object

• **startIndex**: `number`

Start index to get styles at

• **endIndex?**: `number`

End index to get styles at, if not specified startIndex + 1

#### Returns

`void`

#### Inherited from

`StyledText.setSelectionStyles`

#### Source

src/shapes/Text/StyledText.ts:245

***

### setSubscript()

> **setSubscript**(`start`, `end`): `void`

Turns the character into an 'inferior figure' (i.e. 'subscript')

#### Parameters

• **start**: `number`

selection start

• **end**: `number`

selection end

#### Returns

`void`

#### Source

src/shapes/Text/Text.ts:1409

***

### setSuperscript()

> **setSuperscript**(`start`, `end`): `void`

Turns the character into a 'superior figure' (i.e. 'superscript')

#### Parameters

• **start**: `number`

selection start

• **end**: `number`

selection end

#### Returns

`void`

#### Source

src/shapes/Text/Text.ts:1400

***

### setX()

> **setX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

`StyledText.setX`

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

`StyledText.setXY`

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

`StyledText.setY`

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

`StyledText.shouldCache`

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

`StyledText.shouldStartDragging`

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

`StyledText.strokeBorders`

#### Source

src/shapes/Object/InteractiveObject.ts:363

***

### styleHas()

> **styleHas**(`property`, `lineIndex`?): `boolean`

Returns true if object has a style property or has it ina specified line
This function is used to detect if a text will use a particular property or not.

#### Parameters

• **property**: `StylePropertiesType`

to check for

• **lineIndex?**: `number`

to check the style on

#### Returns

`boolean`

#### Inherited from

`StyledText.styleHas`

#### Source

src/shapes/Text/StyledText.ts:70

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

`StyledText.toCanvasElement`

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

`StyledText.toClipPathSVG`

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

`StyledText.toDataURL`

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

`StyledText.toDatalessObject`

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

`StyledText.toJSON`

#### Source

src/shapes/Object/Object.ts:1521

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

• **T** extends `Omit`\<`Props` & [`TClassProperties`](../type-aliases/TClassProperties.md)\<[`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\>

• **K** extends `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[]= `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

Object representation of an instance

#### Overrides

`StyledText.toObject`

#### Source

src/shapes/Text/Text.ts:1741

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

`StyledText.toSVG`

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:129

***

### toString()

> **toString**(): `string`

Returns string representation of an instance

#### Returns

`string`

String representation of text object

#### Overrides

`StyledText.toString`

#### Source

src/shapes/Text/Text.ts:573

***

### toggle()

> **toggle**(`property`): [`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`FabricText`](FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`StyledText.toggle`

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

`StyledText.transform`

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

`StyledText.transformMatrixKey`

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

`StyledText.translateToCenterPoint`

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

`StyledText.translateToGivenOrigin`

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

`StyledText.translateToOriginPoint`

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

`StyledText.willDrawShadow`

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

`StyledText._fromObject`

#### Source

src/shapes/Object/Object.ts:1600

***

### fromElement()

> **`static`** **fromElement**(`element`, `options`?, `cssRules`?): `Promise`\<[`FabricText`](FabricText.md)\<`Object`, [`SerializedTextProps`](../interfaces/SerializedTextProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

Returns FabricText instance from an SVG element (<b>not yet implemented</b>)

#### Parameters

• **element**: `HTMLElement`

Element to parse

• **options?**: [`Abortable`](../type-aliases/Abortable.md)

Options object

• **cssRules?**: `CSSRules`

#### Returns

`Promise`\<[`FabricText`](FabricText.md)\<`Object`, [`SerializedTextProps`](../interfaces/SerializedTextProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

#### Static

#### Member Of

Text

#### Source

src/shapes/Text/Text.ts:1824

***

### fromObject()

> **`static`** **fromObject**\<`T`, `S`\>(`object`): `Promise`\<`S`\>

Returns FabricText instance from an object representation

#### Type parameters

• **T** extends [`TOptions`](../type-aliases/TOptions.md)\<[`SerializedTextProps`](../interfaces/SerializedTextProps.md)\>

• **S** extends [`FabricText`](FabricText.md)\<`Partial`\<[`TextProps`](../interfaces/TextProps.md)\>, [`SerializedTextProps`](../interfaces/SerializedTextProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Parameters

• **object**: `T`

plain js Object to create an instance from

#### Returns

`Promise`\<`S`\>

#### Overrides

`StyledText.fromObject`

#### Source

src/shapes/Text/Text.ts:1901

***

### getDefaults()

> **`static`** **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

`StyledText.getDefaults`

#### Source

src/shapes/Text/Text.ts:419
