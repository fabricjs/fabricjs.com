---
editUrl: false
next: false
prev: false
title: "IText"
---

## Fires

changed

## Fires

selection:changed

## Fires

editing:entered

## Fires

editing:exited

## Fires

dragstart

## Fires

drag drag event firing on the drag source

## Fires

dragend

## Fires

copy

## Fires

cut

## Fires

paste

#### Supported key combinations
```
  Move cursor:                    left, right, up, down
  Select character:               shift + left, shift + right
  Select text vertically:         shift + up, shift + down
  Move cursor by word:            alt + left, alt + right
  Select words:                   shift + alt + left, shift + alt + right
  Move cursor to line start/end:  cmd + left, cmd + right or home, end
  Select till start/end of line:  cmd + shift + left, cmd + shift + right or shift + home, shift + end
  Jump to start/end of text:      cmd + up, cmd + down
  Select till start/end of text:  cmd + shift + up, cmd + shift + down or shift + pgUp, shift + pgDown
  Delete character:               backspace
  Delete word:                    alt + backspace
  Delete line:                    cmd + backspace
  Forward delete:                 delete
  Copy text:                      ctrl/cmd + c
  Paste text:                     ctrl/cmd + v
  Cut text:                       ctrl/cmd + x
  Select entire text:             ctrl/cmd + a
  Quit editing                    tab or esc
```

#### Supported mouse/touch combination
```
  Position cursor:                click/touch
  Create selection:               click/touch & drag
  Create selection:               click & shift + click
  Select word:                    double click
  Select line:                    triple click
```

## Extends

- `ITextClickBehavior`\<`Props`, `SProps`, `EventSpec`\>

## Extended by

- [`Textbox`](/api/classes/textbox/)

## Type Parameters

• **Props** *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`ITextProps`](/api/interfaces/itextprops/)\> = `Partial`\<[`ITextProps`](/api/interfaces/itextprops/)\>

• **SProps** *extends* [`SerializedITextProps`](/api/interfaces/serializeditextprops/) = [`SerializedITextProps`](/api/interfaces/serializeditextprops/)

• **EventSpec** *extends* `ITextEvents` = `ITextEvents`

## Implements

- `UniqueITextProps`

## Constructors

### new IText()

> **new IText**\<`Props`, `SProps`, `EventSpec`\>(`text`, `options`?): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

Constructor

#### Parameters

• **text**: `string`

Text string

• **options?**: `Props`

Options object

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

`ITextClickBehavior<Props, SProps, EventSpec>.constructor`

#### Defined in

src/shapes/IText/IText.ts:224

## Properties

### MIN\_TEXT\_WIDTH

> **MIN\_TEXT\_WIDTH**: `number`

contains the min text width to avoid getting 0

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.MIN_TEXT_WIDTH`

#### Defined in

src/shapes/Text/Text.ts:389

***

### \_\_corner?

> `optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

`ITextClickBehavior.__corner`

#### Defined in

src/shapes/Object/InteractiveObject.ts:104

***

### \_\_lineHeights

> **\_\_lineHeights**: `number`[]

#### Inherited from

`ITextClickBehavior.__lineHeights`

#### Defined in

src/shapes/Text/Text.ts:409

***

### \_\_lineWidths

> **\_\_lineWidths**: `number`[]

#### Inherited from

`ITextClickBehavior.__lineWidths`

#### Defined in

src/shapes/Text/Text.ts:410

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

`ITextClickBehavior._controlsVisibility`

#### Defined in

src/shapes/Object/InteractiveObject.ts:111

***

### \_fontSizeMult

> **\_fontSizeMult**: `number`

Text Line proportion to font Size (in pixels)

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior._fontSizeMult`

#### Defined in

src/shapes/Text/Text.ts:337

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

`ITextClickBehavior._scaling`

#### Defined in

src/shapes/Object/InteractiveObject.ts:133

***

### \_text

> **\_text**: `string`[]

#### Inherited from

`ITextClickBehavior._text`

#### Defined in

src/shapes/Text/Text.ts:407

***

### \_textLines

> **\_textLines**: `string`[][]

same as textlines, but each line is an array of graphemes as split by splitByGrapheme

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior._textLines`

#### Defined in

src/shapes/Text/Text.ts:404

***

### \_unwrappedTextLines

> **\_unwrappedTextLines**: `string`[][]

#### Inherited from

`ITextClickBehavior._unwrappedTextLines`

#### Defined in

src/shapes/Text/Text.ts:406

***

### aCoords

> **aCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/itext/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/itext/#calcacoords)

#### Inherited from

`ITextClickBehavior.aCoords`

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

#### Inherited from

`ITextClickBehavior.absolutePositioned`

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

`ITextClickBehavior.angle`

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

`ITextClickBehavior.backgroundColor`

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

`ITextClickBehavior.borderColor`

#### Defined in

src/shapes/Object/InteractiveObject.ts:73

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

`ITextClickBehavior.borderDashArray`

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

`ITextClickBehavior.borderOpacityWhenMoving`

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

`ITextClickBehavior.borderScaleFactor`

#### Defined in

src/shapes/Object/InteractiveObject.ts:76

***

### caching

> **caching**: `boolean`

Indicates whether internal text char widths can be cached

#### Default

```ts

```

#### Defined in

src/shapes/IText/IText.ts:203

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

`ITextClickBehavior.centeredRotation`

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

`ITextClickBehavior.centeredScaling`

#### Defined in

src/shapes/Object/Object.ts:168

***

### charSpacing

> **charSpacing**: `number`

additional space between characters
expressed in thousands of em unit

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.charSpacing`

#### Defined in

src/shapes/Text/Text.ts:345

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

`ITextClickBehavior.clipPath`

#### Defined in

src/shapes/Object/Object.ts:164

***

### clipPathId?

> `optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

`ITextClickBehavior.clipPathId`

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:14

***

### compositionColor

> **compositionColor**: `string`

#### Defined in

src/shapes/IText/IText.ts:196

***

### compositionEnd

> **compositionEnd**: `number`

#### Overrides

`ITextClickBehavior.compositionEnd`

#### Defined in

src/shapes/IText/IText.ts:135

***

### compositionStart

> **compositionStart**: `number`

#### Overrides

`ITextClickBehavior.compositionStart`

#### Defined in

src/shapes/IText/IText.ts:133

***

### controls

> **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

`ITextClickBehavior.controls`

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

`ITextClickBehavior.cornerColor`

#### Defined in

src/shapes/Object/InteractiveObject.ts:67

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

`ITextClickBehavior.cornerDashArray`

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

`ITextClickBehavior.cornerSize`

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

`ITextClickBehavior.cornerStrokeColor`

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

`ITextClickBehavior.cornerStyle`

#### Defined in

src/shapes/Object/InteractiveObject.ts:69

***

### ctrlKeysMapDown

> **ctrlKeysMapDown**: `TKeyMapIText`

For functionalities on keyDown + ctrl || cmd

#### Inherited from

`ITextClickBehavior.ctrlKeysMapDown`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:42

***

### ctrlKeysMapUp

> **ctrlKeysMapUp**: `TKeyMapIText`

For functionalities on keyUp + ctrl || cmd

#### Inherited from

`ITextClickBehavior.ctrlKeysMapUp`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:37

***

### cursorColor

> **cursorColor**: `string`

Color of text cursor color in editing mode.
if not set (default) will take color from the text.
if set to a color value that fabric can understand, it will
be used instead of the color of the text at the current position.

#### Default

```ts

```

#### Defined in

src/shapes/IText/IText.ts:180

***

### cursorDelay

> **cursorDelay**: `number`

Delay between cursor blink (in ms)

#### Default

```ts

```

#### Overrides

`ITextClickBehavior.cursorDelay`

#### Defined in

src/shapes/IText/IText.ts:187

***

### cursorDuration

> **cursorDuration**: `number`

Duration of cursor fade in (in ms)

#### Default

```ts

```

#### Overrides

`ITextClickBehavior.cursorDuration`

#### Defined in

src/shapes/IText/IText.ts:194

***

### cursorWidth

> **cursorWidth**: `number`

Width of cursor (in px)

#### Default

```ts

```

#### Overrides

`ITextClickBehavior.cursorWidth`

#### Defined in

src/shapes/IText/IText.ts:170

***

### deltaY

> **deltaY**: `number`

Baseline shift, styles only, keep at 0 for the main text object

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.deltaY`

#### Defined in

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

#### Inherited from

`ITextClickBehavior.direction`

#### Defined in

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

`ITextClickBehavior.dirty`

#### Defined in

src/shapes/Object/Object.ts:193

***

### editable

> **editable**: `boolean`

Indicates whether a text can be edited

#### Default

```ts

```

#### Overrides

`ITextClickBehavior.editable`

#### Defined in

src/shapes/IText/IText.ts:156

***

### editingBorderColor

> **editingBorderColor**: `string`

Border color of text object while it's in editing mode

#### Default

```ts

```

#### Overrides

`ITextClickBehavior.editingBorderColor`

#### Defined in

src/shapes/IText/IText.ts:163

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.evented`

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

#### Inherited from

`ITextClickBehavior.excludeFromExport`

#### Defined in

src/shapes/Object/Object.ts:160

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Inherited from

`ITextClickBehavior.fill`

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

`ITextClickBehavior.fillRule`

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

`ITextClickBehavior.flipX`

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

`ITextClickBehavior.flipY`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:22

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.fontFamily`

#### Defined in

src/shapes/Text/Text.ts:186

***

### fontSize

> **fontSize**: `number`

Font size (in pixels)

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.fontSize`

#### Defined in

src/shapes/Text/Text.ts:172

***

### fontStyle

> **fontStyle**: `string`

Font style . Possible values: "", "normal", "italic" or "oblique".

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.fontStyle`

#### Defined in

src/shapes/Text/Text.ts:222

***

### fontWeight

> **fontWeight**: `string`

Font weight (e.g. bold, normal, 400, 600, 800)

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.fontWeight`

#### Defined in

src/shapes/Text/Text.ts:179

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.globalCompositeOperation`

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

`ITextClickBehavior.hasBorders`

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

`ITextClickBehavior.hasControls`

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

`ITextClickBehavior.height`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:20

***

### hiddenTextarea

> **hiddenTextarea**: `null` \| `HTMLTextAreaElement`

#### Inherited from

`ITextClickBehavior.hiddenTextarea`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:44

***

### hiddenTextareaContainer?

> `optional` **hiddenTextareaContainer**: `null` \| `HTMLElement`

DOM container to append the hiddenTextarea.
An alternative to attaching to the document.body.
Useful to reduce laggish redraw of the full document.body tree and
also with modals event capturing that won't let the textarea take focus.

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.hiddenTextareaContainer`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:54

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Inherited from

`ITextClickBehavior.hoverCursor`

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

`ITextClickBehavior.includeDefaultValues`

#### Defined in

src/shapes/Object/Object.ts:159

***

### initialized?

> `optional` **initialized**: `true`

#### Inherited from

`ITextClickBehavior.initialized`

#### Defined in

src/shapes/Text/Text.ts:411

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

`ITextClickBehavior.inverted`

#### Defined in

src/shapes/Object/Object.ts:165

***

### isEditing

> **isEditing**: `boolean`

Indicates whether text is in editing mode

#### Default

```ts

```

#### Overrides

`ITextClickBehavior.isEditing`

#### Defined in

src/shapes/IText/IText.ts:149

***

### isMoving?

> `optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

`ITextClickBehavior.isMoving`

#### Defined in

src/shapes/Object/InteractiveObject.ts:123

***

### keysMap

> **keysMap**: `TKeyMapIText`

For functionalities on keyDown
Map a special key to a function of the instance/prototype
If you need different behavior for ESC or TAB or arrows, you have to change
this map setting the name of a function that you build on the IText or
your prototype.
the map change will affect all Instances unless you need for only some text Instances
in that case you have to clone this object and assign your Instance.
this.keysMap = Object.assign({}, this.keysMap);
The function must be in IText.prototype.myFunction And will receive event as args[0]

#### Inherited from

`ITextClickBehavior.keysMap`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:30

***

### keysMapRtl

> **keysMapRtl**: `TKeyMapIText`

#### Inherited from

`ITextClickBehavior.keysMapRtl`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:32

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

`ITextClickBehavior.left`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:18

***

### lineHeight

> **lineHeight**: `number`

Line height

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.lineHeight`

#### Defined in

src/shapes/Text/Text.ts:229

***

### linethrough

> **linethrough**: `boolean`

Text decoration linethrough.

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.linethrough`

#### Defined in

src/shapes/Text/Text.ts:207

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.lockMovementX`

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

`ITextClickBehavior.lockMovementY`

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

`ITextClickBehavior.lockRotation`

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

`ITextClickBehavior.lockScalingFlip`

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

`ITextClickBehavior.lockScalingX`

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

`ITextClickBehavior.lockScalingY`

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

`ITextClickBehavior.lockSkewingX`

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

`ITextClickBehavior.lockSkewingY`

#### Defined in

src/shapes/Object/InteractiveObject.ts:61

***

### matrixCache?

> `optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

`ITextClickBehavior.matrixCache`

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

#### Inherited from

`ITextClickBehavior.minScaleLimit`

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

`ITextClickBehavior.moveCursor`

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

`ITextClickBehavior.noScaleCache`

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

`ITextClickBehavior.oCoords`

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

`ITextClickBehavior.objectCaching`

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

`ITextClickBehavior.opacity`

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

`ITextClickBehavior.originX`

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

`ITextClickBehavior.originY`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:28

***

### overline

> **overline**: `boolean`

Text decoration overline.

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.overline`

#### Defined in

src/shapes/Text/Text.ts:200

***

### ownMatrixCache?

> `optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

`ITextClickBehavior.ownMatrixCache`

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

#### Inherited from

`ITextClickBehavior.padding`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:41

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.paintFirst`

#### Defined in

src/shapes/Object/Object.ts:142

***

### parent?

> `optional` **parent**: [`Group`](/api/classes/group/)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

`ITextClickBehavior.parent`

#### Defined in

src/shapes/Object/StackedObject.ts:38

***

### path?

> `optional` **path**: [`Path`](/api/classes/path/)\<`Partial`\<[`PathProps`](/api/interfaces/pathprops/)\>, [`SerializedPathProps`](/api/interfaces/serializedpathprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

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

#### Inherited from

`ITextClickBehavior.path`

#### Defined in

src/shapes/Text/Text.ts:294

***

### pathAlign

> **pathAlign**: [`TPathAlign`](/api/type-aliases/tpathalign/)

How text is aligned to the path. This property determines
the perpendicular position of each character relative to the path.
(one of "baseline", "center", "ascender", "descender")
This feature is in BETA, and its behavior may change

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.pathAlign`

#### Defined in

src/shapes/Text/Text.ts:320

***

### pathSide

> **pathSide**: [`TPathSide`](/api/type-aliases/tpathside/)

Which side of the path the text should be drawn on.
Only used when text has a path

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.pathSide`

#### Defined in

src/shapes/Text/Text.ts:310

***

### pathStartOffset

> **pathStartOffset**: `number`

Offset amount for text path starting position
Only used when text has a path

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.pathStartOffset`

#### Defined in

src/shapes/Text/Text.ts:302

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.perPixelTargetFind`

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

#### Inherited from

`ITextClickBehavior.scaleX`

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

`ITextClickBehavior.scaleY`

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

`ITextClickBehavior.selectable`

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

`ITextClickBehavior.selectionBackgroundColor`

#### Defined in

src/shapes/Object/InteractiveObject.ts:78

***

### selectionColor

> **selectionColor**: `string`

Color of text selection

#### Default

```ts

```

#### Defined in

src/shapes/IText/IText.ts:142

***

### selectionEnd

> **selectionEnd**: `number`

Index where text selection ends

#### Default

```ts

```

#### Implementation of

`UniqueITextProps.selectionEnd`

#### Overrides

`ITextClickBehavior.selectionEnd`

#### Defined in

src/shapes/IText/IText.ts:131

***

### selectionStart

> **selectionStart**: `number`

Index where text selection starts (or where cursor is when there is no selection)

#### Default

```ts

```

#### Implementation of

`UniqueITextProps.selectionStart`

#### Overrides

`ITextClickBehavior.selectionStart`

#### Defined in

src/shapes/IText/IText.ts:124

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

#### Inherited from

`ITextClickBehavior.shadow`

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

`ITextClickBehavior.skewX`

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

`ITextClickBehavior.skewY`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:26

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

The angle that an object will lock to while rotating.

#### Inherited from

`ITextClickBehavior.snapAngle`

#### Defined in

src/shapes/Object/InteractiveObject.ts:52

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

`ITextClickBehavior.snapThreshold`

#### Defined in

src/shapes/Object/InteractiveObject.ts:53

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Inherited from

`ITextClickBehavior.stroke`

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

`ITextClickBehavior.strokeDashArray`

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

`ITextClickBehavior.strokeDashOffset`

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

#### Inherited from

`ITextClickBehavior.strokeLineCap`

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

`ITextClickBehavior.strokeLineJoin`

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

`ITextClickBehavior.strokeMiterLimit`

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

#### Inherited from

`ITextClickBehavior.strokeUniform`

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

`ITextClickBehavior.strokeWidth`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:30

***

### styles

> **styles**: [`TextStyle`](/api/type-aliases/textstyle/)

#### Inherited from

`ITextClickBehavior.styles`

#### Defined in

src/shapes/Text/Text.ts:270

***

### subscript

> **subscript**: `object`

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

#### Inherited from

`ITextClickBehavior.subscript`

#### Defined in

src/shapes/Text/Text.ts:250

***

### superscript

> **superscript**: `object`

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

#### Inherited from

`ITextClickBehavior.superscript`

#### Defined in

src/shapes/Text/Text.ts:234

***

### text

> **text**: `string`

#### Inherited from

`ITextClickBehavior.text`

#### Defined in

src/shapes/Text/Text.ts:165

***

### textAlign

> **textAlign**: `string`

Text alignment. Possible values: "left", "center", "right", "justify",
"justify-left", "justify-center" or "justify-right".

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.textAlign`

#### Defined in

src/shapes/Text/Text.ts:215

***

### textBackgroundColor

> **textBackgroundColor**: `string`

Background color of text lines

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.textBackgroundColor`

#### Defined in

src/shapes/Text/Text.ts:268

***

### textLines

> **textLines**: `string`[]

contains the the text of the object, divided in lines as they are displayed
on screen. Wrapping will divide the text independently of line breaks

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.textLines`

#### Defined in

src/shapes/Text/Text.ts:397

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

`ITextClickBehavior.top`

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

`ITextClickBehavior.touchCornerSize`

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

`ITextClickBehavior.transparentCorners`

#### Defined in

src/shapes/Object/InteractiveObject.ts:66

***

### underline

> **underline**: `boolean`

Text decoration underline.

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.underline`

#### Defined in

src/shapes/Text/Text.ts:193

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.visible`

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

`ITextClickBehavior.width`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:19

***

### ATTRIBUTE\_NAMES

> `static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [FabricText.fromElement](../../../../api/classes/fabrictext/#fromelement))

#### Static

#### Member Of

Text
@see: http://www.w3.org/TR/SVG/text.html#TextElement

#### Inherited from

`ITextClickBehavior.ATTRIBUTE_NAMES`

#### Defined in

src/shapes/Text/Text.ts:1809

***

### \_styleProperties

> `static` **\_styleProperties**: readonly `StylePropertiesType`[] = `styleProperties`

#### Inherited from

`ITextClickBehavior._styleProperties`

#### Defined in

src/shapes/Text/StyledText.ts:30

***

### cacheProperties

> `static` **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

`ITextClickBehavior.cacheProperties`

#### Defined in

src/shapes/Text/Text.ts:413

***

### colorProperties

> `static` **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

`ITextClickBehavior.colorProperties`

#### Defined in

src/shapes/Object/AnimatableObject.ts:20

***

### genericFonts

> `static` **genericFonts**: `string`[]

#### Inherited from

`ITextClickBehavior.genericFonts`

#### Defined in

src/shapes/Text/Text.ts:1793

***

### ownDefaults

> `static` **ownDefaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`IText`](/api/classes/itext/)\<`Partial`\<[`ITextProps`](/api/interfaces/itextprops/)\>, [`SerializedITextProps`](/api/interfaces/serializeditextprops/), `ITextEvents`\>\>\> = `iTextDefaultValues`

#### Overrides

`ITextClickBehavior.ownDefaults`

#### Defined in

src/shapes/IText/IText.ts:205

***

### stateProperties

> `static` **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

`ITextClickBehavior.stateProperties`

#### Defined in

src/shapes/Object/Object.ts:176

***

### type

> `static` **type**: `string` = `'IText'`

#### Overrides

`ITextClickBehavior.type`

#### Defined in

src/shapes/IText/IText.ts:211

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

#### Returns

`string`

#### Overrides

`ITextClickBehavior.type`

#### Defined in

src/shapes/IText/IText.ts:213

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

`ITextClickBehavior._drawClipPath`

#### Defined in

src/shapes/Object/Object.ts:949

***

### \_getFontDeclaration()

> **\_getFontDeclaration**(`__namedParameters`?, `forMeasuring`?): `string`

return font declaration string for canvas context

#### Parameters

• **\_\_namedParameters?**: `Partial`\<`Pick`\<`Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>, `"fontFamily"` \| `"fontSize"` \| `"fontStyle"` \| `"fontWeight"`\>\> = `{}`

• **forMeasuring?**: `boolean`

#### Returns

`string`

font declaration formatted for canvas context.

#### Inherited from

`ITextClickBehavior._getFontDeclaration`

#### Defined in

src/shapes/Text/Text.ts:1656

***

### \_getGraphemeBox()

> **\_getGraphemeBox**(`grapheme`, `lineIndex`, `charIndex`, `prevGrapheme`?, `skipLeft`?): [`GraphemeBBox`](/api/type-aliases/graphemebbox/)

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

[`GraphemeBBox`](/api/type-aliases/graphemebbox/)

grapheme bbox

#### Inherited from

`ITextClickBehavior._getGraphemeBox`

#### Defined in

src/shapes/Text/Text.ts:981

***

### \_getSelectionForOffset()

> **\_getSelectionForOffset**(`e`, `isRight`): `number`

private
Helps finding if the offset should be counted from Start or End

#### Parameters

• **e**: `KeyboardEvent`

Event object

• **isRight**: `boolean`

#### Returns

`number`

#### Inherited from

`ITextClickBehavior._getSelectionForOffset`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:377

***

### \_getWidthOfCharSpacing()

> **\_getWidthOfCharSpacing**(): `number`

#### Returns

`number`

#### Inherited from

`ITextClickBehavior._getWidthOfCharSpacing`

#### Defined in

src/shapes/Text/Text.ts:1523

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

`ITextClickBehavior._limitCacheSize`

#### Defined in

src/shapes/Object/Object.ts:351

***

### \_measureLine()

> **\_measureLine**(`lineIndex`): `object`

measure every grapheme of a line, populating __charBounds

#### Parameters

• **lineIndex**: `number`

#### Returns

`object`

object.width total width of characters

object.numOfSpaces length of chars that match this._reSpacesAndTabs

##### numOfSpaces

> **numOfSpaces**: `number` = `0`

##### width

> **width**: `number`

#### Inherited from

`ITextClickBehavior._measureLine`

#### Defined in

src/shapes/Text/Text.ts:889

***

### \_mouseDownHandler()

> **\_mouseDownHandler**(`__namedParameters`): `void`

Default event handler for the basic functionalities needed on _mouseDown
can be overridden to do something different.
Scope of this implementation is: find the click position, set selectionStart
find selectionEnd, initialize the drawing of either cursor or selection area
initializing a mousedDown on a text area will cancel fabricjs knowledge of
current compositionMode. It will be set to false.

#### Parameters

• **\_\_namedParameters**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._mouseDownHandler`

#### Defined in

src/shapes/IText/ITextClickBehavior.ts:136

***

### \_mouseDownHandlerBefore()

> **\_mouseDownHandlerBefore**(`__namedParameters`): `void`

Default event handler for the basic functionalities needed on mousedown:before
can be overridden to do something different.
Scope of this implementation is: verify the object is already selected when mousing down

#### Parameters

• **\_\_namedParameters**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._mouseDownHandlerBefore`

#### Defined in

src/shapes/IText/ITextClickBehavior.ts:171

***

### \_moveCursorLeftOrRight()

> **\_moveCursorLeftOrRight**(`direction`, `e`): `void`

Moves cursor right or Left, fires event

#### Parameters

• **direction**: `"Left"` \| `"Right"`

'Left', 'Right'

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._moveCursorLeftOrRight`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:639

***

### \_moveCursorUpOrDown()

> **\_moveCursorUpOrDown**(`direction`, `e`): `void`

Moves cursor up or down, fires the events

#### Parameters

• **direction**: `"Up"` \| `"Down"`

'Up' or 'Down'

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._moveCursorUpOrDown`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:477

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._removeCacheCanvas`

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

`ITextClickBehavior._renderControls`

#### Todo

move to interactivity

#### Defined in

src/shapes/Object/InteractiveObject.ts:434

***

### \_renderCursor()

> **\_renderCursor**(`ctx`, `boundaries`, `selectionStart`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **boundaries**: `CursorBoundaries`

• **selectionStart**: `number`

#### Returns

`void`

#### Defined in

src/shapes/IText/IText.ts:498

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._setClippingProperties`

#### Defined in

src/shapes/Object/Object.ts:1087

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `style`): `object`

This function prepare the canvas for a ill style, and fill
need to be sent in as defined

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **style**: `Pick`\<[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>, `"fill"`\>

with ill defined

#### Returns

`object`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Inherited from

`ITextClickBehavior._setFillStyles`

#### Defined in

src/shapes/Text/Text.ts:1336

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `style`): `object`

This function prepare the canvas for a stroke style, and stroke and strokeWidth
need to be sent in as defined

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **style**: `Pick`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/), `"strokeWidth"` \| `"stroke"`\>

with stroke and strokeWidth defined

#### Returns

`object`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Inherited from

`ITextClickBehavior._setStrokeStyles`

#### Defined in

src/shapes/Text/Text.ts:1314

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

`ITextClickBehavior._setupCompositeOperation`

#### Defined in

src/shapes/Object/Object.ts:1541

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

#### Inherited from

`ITextClickBehavior._splitTextIntoLines`

#### Defined in

src/shapes/Text/Text.ts:1724

***

### \_toSVG()

> **\_toSVG**(`reviver`?): `string`[]

Returns svg representation of an instance
This function is implemented in each subclass
This is just because typescript otherwise cryies all the time

#### Parameters

• **reviver?**: [`TSVGReviver`](/api/type-aliases/tsvgreviver/)

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Inherited from

`ITextClickBehavior._toSVG`

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:120

***

### abortCursorAnimation()

> **abortCursorAnimation**(): `void`

Aborts cursor animation, clears all timeouts and clear textarea context if necessary

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.abortCursorAnimation`

#### Defined in

src/shapes/IText/ITextBehavior.ts:183

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

`ITextClickBehavior.addPaintOrder`

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

`ITextClickBehavior.animate`

#### Tutorial

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Defined in

src/shapes/Object/AnimatableObject.ts:34

***

### blur()

> **blur**(): `void`

Override this method to customize cursor behavior on textbox blur

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.blur`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:106

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Inherited from

`ITextClickBehavior.calcACoords`

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

`ITextClickBehavior.calcOCoords`

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

`ITextClickBehavior.calcOwnMatrix`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:501

***

### calcTextHeight()

> **calcTextHeight**(): `number`

Calculate text box height

#### Returns

`number`

#### Inherited from

`ITextClickBehavior.calcTextHeight`

#### Defined in

src/shapes/Text/Text.ts:1042

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

`ITextClickBehavior.calcTransformMatrix`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:473

***

### canDrop()

> **canDrop**(`e`): `boolean`

override this method to control whether instance should/shouldn't become a drop target

#### Parameters

• **e**: `DragEvent`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.canDrop`

#### Defined in

src/shapes/IText/ITextClickBehavior.ts:75

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

`ITextClickBehavior.cleanStyle`

#### Defined in

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

`ITextClickBehavior.clearContextTop`

#### Todo

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Defined in

src/shapes/Object/InteractiveObject.ts:626

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

`ITextClickBehavior.clone`

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

`ITextClickBehavior.cloneAsImage`

#### Todo

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Defined in

src/shapes/Object/Object.ts:1341

***

### complexity()

> **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity

#### Inherited from

`ITextClickBehavior.complexity`

#### Defined in

src/shapes/Text/Text.ts:1789

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

`ITextClickBehavior.containsPoint`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:270

***

### copy()

> **copy**(): `void`

Copies selected text

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.copy`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:295

***

### dispose()

> **dispose**(): `void`

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Overrides

`ITextClickBehavior.dispose`

#### Defined in

src/shapes/IText/IText.ts:694

***

### doubleClickHandler()

> **doubleClickHandler**(`options`): `void`

Default handler for double click, select a word

#### Parameters

• **options**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.doubleClickHandler`

#### Defined in

src/shapes/IText/ITextClickBehavior.ts:111

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

`ITextClickBehavior.drawBorders`

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

`ITextClickBehavior.drawCacheOnCanvas`

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

`ITextClickBehavior.drawClipPathOnCache`

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

`ITextClickBehavior.drawControls`

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

`ITextClickBehavior.drawControlsConnectingLines`

#### Defined in

src/shapes/Object/InteractiveObject.ts:516

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

`ITextClickBehavior.drawObject`

#### Defined in

src/shapes/Object/Object.ts:928

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

`ITextClickBehavior.drawSelectionBackground`

#### Todo

evaluate if make this disappear in favor of a pre-render hook for objects
this was added by Andrea Bogazzi to make possible some feature for work reasons
it seemed a good option, now is an edge case

#### Defined in

src/shapes/Object/InteractiveObject.ts:374

***

### enlargeSpaces()

> **enlargeSpaces**(): `void`

Enlarge space boxes and shift the others

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.enlargeSpaces`

#### Defined in

src/shapes/Text/Text.ts:489

***

### enterEditing()

> **enterEditing**(`e`?): `void`

Enters editing state

#### Parameters

• **e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.enterEditing`

#### Defined in

src/shapes/IText/ITextBehavior.ts:386

***

### exitEditing()

> **exitEditing**(): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

Exits from editing state and fires relevant events

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ITextClickBehavior.exitEditing`

#### Defined in

src/shapes/IText/ITextBehavior.ts:689

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`\>(`other`): `AncestryComparison`

Compare ancestors

#### Type Parameters

• **T** *extends* [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

#### Returns

`AncestryComparison`

an object that represent the ancestry situation.

#### Inherited from

`ITextClickBehavior.findCommonAncestors`

#### Defined in

src/shapes/Object/StackedObject.ts:78

***

### findLineBoundaryLeft()

> **findLineBoundaryLeft**(`startFrom`): `number`

Find new selection index representing start of current line according to current selection index

#### Parameters

• **startFrom**: `number`

Current selection index

#### Returns

`number`

New selection index

#### Inherited from

`ITextClickBehavior.findLineBoundaryLeft`

#### Defined in

src/shapes/IText/ITextBehavior.ts:288

***

### findLineBoundaryRight()

> **findLineBoundaryRight**(`startFrom`): `number`

Find new selection index representing end of current line according to current selection index

#### Parameters

• **startFrom**: `number`

Current selection index

#### Returns

`number`

New selection index

#### Inherited from

`ITextClickBehavior.findLineBoundaryRight`

#### Defined in

src/shapes/IText/ITextBehavior.ts:305

***

### findWordBoundaryLeft()

> **findWordBoundaryLeft**(`startFrom`): `number`

Find new selection index representing start of current word according to current selection index

#### Parameters

• **startFrom**: `number`

Current selection index

#### Returns

`number`

New selection index

#### Inherited from

`ITextClickBehavior.findWordBoundaryLeft`

#### Defined in

src/shapes/IText/ITextBehavior.ts:240

***

### findWordBoundaryRight()

> **findWordBoundaryRight**(`startFrom`): `number`

Find new selection index representing end of current word according to current selection index

#### Parameters

• **startFrom**: `number`

Current selection index

#### Returns

`number`

New selection index

#### Inherited from

`ITextClickBehavior.findWordBoundaryRight`

#### Defined in

src/shapes/IText/ITextBehavior.ts:264

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

`ITextClickBehavior.fire`

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

`ITextClickBehavior.forEachControl`

#### Defined in

src/shapes/Object/InteractiveObject.ts:352

***

### fromGraphemeToStringSelection()

> **fromGraphemeToStringSelection**(`start`, `end`, `graphemes`): `object`

convert from fabric to textarea values

#### Parameters

• **start**: `number`

• **end**: `number`

• **graphemes**: `string`[]

#### Returns

`object`

##### selectionEnd

> **selectionEnd**: `number` = `graphemeStart`

##### selectionStart

> **selectionStart**: `number` = `graphemeStart`

#### Inherited from

`ITextClickBehavior.fromGraphemeToStringSelection`

#### Defined in

src/shapes/IText/ITextBehavior.ts:489

***

### fromStringToGraphemeSelection()

> **fromStringToGraphemeSelection**(`start`, `end`, `text`): `object`

convert from textarea to grapheme indexes

#### Parameters

• **start**: `number`

• **end**: `number`

• **text**: `string`

#### Returns

`object`

##### selectionEnd

> **selectionEnd**: `number` = `graphemeStart`

##### selectionStart

> **selectionStart**: `number` = `graphemeStart`

#### Inherited from

`ITextClickBehavior.fromStringToGraphemeSelection`

#### Defined in

src/shapes/IText/ITextBehavior.ts:472

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

`ITextClickBehavior.get`

#### Defined in

src/CommonMethods.ts:59

***

### get2DCursorLocation()

> **get2DCursorLocation**(`selectionStart`?, `skipWrapping`?): `object`

Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)

#### Parameters

• **selectionStart?**: `number` = `...`

Optional index. When not given, current selectionStart is used.

• **skipWrapping?**: `boolean`

consider the location for unwrapped lines. useful to manage styles.

#### Returns

`object`

##### charIndex

> **charIndex**: `number` = `selectionStart`

##### lineIndex

> **lineIndex**: `number` = `i`

#### Overrides

`ITextClickBehavior.get2DCursorLocation`

#### Defined in

src/shapes/IText/IText.ts:339

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| `object`

#### Returns

`undefined` \| `object`

#### Inherited from

`ITextClickBehavior.getActiveControl`

#### Defined in

src/shapes/Object/InteractiveObject.ts:193

***

### getAncestors()

> **getAncestors**(): `Ancestors`

#### Returns

`Ancestors`

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

`ITextClickBehavior.getAncestors`

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

`ITextClickBehavior.getBoundingRect`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:331

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

`ITextClickBehavior.getCanvasRetinaScaling`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:388

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ITextClickBehavior.getCenterPoint`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:177

***

### getCompleteStyleDeclaration()

> **getCompleteStyleDeclaration**(`lineIndex`, `charIndex`): [`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)

return a new object that contains all the style property for a character
the object returned is newly created

#### Parameters

• **lineIndex**: `number`

of the line where the character is

• **charIndex**: `number`

position of the character on the line

#### Returns

[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)

style object

#### Inherited from

`ITextClickBehavior.getCompleteStyleDeclaration`

#### Defined in

src/shapes/Text/StyledText.ts:279

***

### getCoords()

> **getCoords**(): [`Point`](/api/classes/point/)[]

#### Returns

[`Point`](/api/classes/point/)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

`ITextClickBehavior.getCoords`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:192

***

### getCurrentCharColor()

> **getCurrentCharColor**(): `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

High level function to know the color of the cursor.
the currentChar is the one that precedes the cursor
Returns color (fill) of char at the current cursor
if the text object has a pattern or gradient for filler, it will return that.
Unused by the library, is for the end user

#### Returns

`null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Character color (fill)

#### Defined in

src/shapes/IText/IText.ts:678

***

### getCurrentCharFontSize()

> **getCurrentCharFontSize**(): `number`

High level function to know the height of the cursor.
the currentChar is the one that precedes the cursor
Returns fontSize of char at the current cursor
Unused from the library, is for the end user

#### Returns

`number`

Character font size

#### Defined in

src/shapes/IText/IText.ts:665

***

### getDownCursorOffset()

> **getDownCursorOffset**(`e`, `isRight`): `number`

Gets start offset of a selection

#### Parameters

• **e**: `KeyboardEvent`

Event object

• **isRight**: `boolean`

#### Returns

`number`

#### Inherited from

`ITextClickBehavior.getDownCursorOffset`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:345

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

#### Inherited from

`ITextClickBehavior.getHeightOfChar`

#### Defined in

src/shapes/Text/Text.ts:864

***

### getHeightOfLine()

> **getHeightOfLine**(`lineIndex`): `number`

Calculate height of line at 'lineIndex'

#### Parameters

• **lineIndex**: `number`

index of line to calculate

#### Returns

`number`

#### Inherited from

`ITextClickBehavior.getHeightOfLine`

#### Defined in

src/shapes/Text/Text.ts:1023

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

`ITextClickBehavior.getObjectOpacity`

#### Defined in

src/shapes/Object/Object.ts:666

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ITextClickBehavior.getObjectScaling`

#### Defined in

src/shapes/Object/Object.ts:635

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

`ITextClickBehavior.getPointByOrigin`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:202

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ITextClickBehavior.getRelativeCenterPoint`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:188

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/api/api/classes/itext/getx/#getx)

#### Inherited from

`ITextClickBehavior.getRelativeX`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:103

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x,y position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in parent's coordinate plane

#### Inherited from

`ITextClickBehavior.getRelativeXY`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:164

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/api/api/classes/itext/gety/#gety)

#### Inherited from

`ITextClickBehavior.getRelativeY`

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

`ITextClickBehavior.getScaledHeight`

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

`ITextClickBehavior.getScaledWidth`

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Defined in

src/shapes/Object/ObjectGeometry.ts:340

***

### getSelectedText()

> **getSelectedText**(): `string`

Returns selected text

#### Returns

`string`

#### Inherited from

`ITextClickBehavior.getSelectedText`

#### Defined in

src/shapes/IText/ITextBehavior.ts:231

***

### getSelectionStartFromPointer()

> **getSelectionStartFromPointer**(`e`): `number`

Returns index of a character corresponding to where an object was clicked

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

Event object

#### Returns

`number`

Index of a character

#### Inherited from

`ITextClickBehavior.getSelectionStartFromPointer`

#### Defined in

src/shapes/IText/ITextClickBehavior.ts:246

***

### getSelectionStyles()

> **getSelectionStyles**(`startIndex`, `endIndex`, `complete`?): `Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>[]

Gets style of a current selection/cursor (at the start position)
if startIndex or endIndex are not provided, selectionStart or selectionEnd will be used.

#### Parameters

• **startIndex**: `number` = `...`

Start index to get styles at

• **endIndex**: `number` = `...`

End index to get styles at, if not specified selectionEnd or startIndex + 1

• **complete?**: `boolean`

get full style or not

#### Returns

`Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>[]

styles an array with one, zero or more Style objects

#### Overrides

`ITextClickBehavior.getSelectionStyles`

#### Defined in

src/shapes/IText/IText.ts:312

***

### getSvgCommons()

> **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> & `object`

#### Returns

`string`

#### Inherited from

`ITextClickBehavior.getSvgCommons`

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

`ITextClickBehavior.getSvgFilter`

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

`ITextClickBehavior.getSvgStyles`

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

`ITextClickBehavior.getSvgTransform`

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:103

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](/api/type-aliases/tdegree/)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/api/type-aliases/tdegree/)

#### Inherited from

`ITextClickBehavior.getTotalAngle`

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

`ITextClickBehavior.getTotalObjectScaling`

#### Defined in

src/shapes/Object/Object.ts:652

***

### getUpCursorOffset()

> **getUpCursorOffset**(`e`, `isRight`): `number`

#### Parameters

• **e**: `KeyboardEvent`

Event object

• **isRight**: `boolean`

#### Returns

`number`

#### Inherited from

`ITextClickBehavior.getUpCursorOffset`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:390

***

### getValueOfPropertyAt()

> **getValueOfPropertyAt**\<`T`\>(`lineIndex`, `charIndex`, `property`): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>\[`T`\]

Retrieves the value of property at given character position

#### Type Parameters

• **T** *extends* `StylePropertiesType`

#### Parameters

• **lineIndex**: `number`

the line number

• **charIndex**: `number`

the character number

• **property**: `T`

the property name

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>\[`T`\]

the value of 'property'

#### Inherited from

`ITextClickBehavior.getValueOfPropertyAt`

#### Defined in

src/shapes/Text/Text.ts:1537

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

#### Inherited from

`ITextClickBehavior.getViewportTransform`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:406

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in canvas coordinate plane

#### Inherited from

`ITextClickBehavior.getX`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:74

***

### getXY()

> **getXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in canvas coordinate plane

#### Inherited from

`ITextClickBehavior.getXY`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:134

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in canvas coordinate plane

#### Inherited from

`ITextClickBehavior.getY`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:88

***

### graphemeSplit()

> **graphemeSplit**(`value`): `string`[]

Override this method to customize grapheme splitting

#### Parameters

• **value**: `string`

#### Returns

`string`[]

array of graphemes

#### Inherited from

`ITextClickBehavior.graphemeSplit`

#### Todo

the util `graphemeSplit` needs to be injectable in some way.
is more comfortable to inject the correct util rather than having to override text
in the middle of the prototype chain

#### Defined in

src/shapes/Text/Text.ts:1715

***

### handleFiller()

> **handleFiller**\<`T`\>(`ctx`, `property`, `filler`): `object`

#### Type Parameters

• **T** *extends* `"fill"` \| `"stroke"`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **property**: \`$\{T\}Style\`

• **filler**: `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Returns

`object`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Inherited from

`ITextClickBehavior.handleFiller`

#### Defined in

src/shapes/Text/Text.ts:1274

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`): `boolean`

#### Type Parameters

• **T** *extends* [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.hasCommonAncestors`

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

`ITextClickBehavior.hasFill`

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

`ITextClickBehavior.hasStroke`

#### Since

3.0.0

#### Defined in

src/shapes/Object/Object.ts:820

***

### initBehavior()

> **initBehavior**(): `void`

Initializes all the interactive behavior of IText

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.initBehavior`

#### Defined in

src/shapes/IText/ITextClickBehavior.ts:30

***

### initDelayedCursor()

> **initDelayedCursor**(`restart`?): `void`

Initializes delayed cursor

#### Parameters

• **restart?**: `boolean`

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.initDelayedCursor`

#### Defined in

src/shapes/IText/ITextBehavior.ts:175

***

### initHiddenTextarea()

> **initHiddenTextarea**(): `void`

Initializes hidden textarea (needed to bring up keyboard in iOS)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.initHiddenTextarea`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:63

***

### insertCharStyleObject()

> **insertCharStyleObject**(`lineIndex`, `charIndex`, `quantity`, `copiedStyle`?): `void`

Inserts style object for a given line/char index

#### Parameters

• **lineIndex**: `number`

Index of a line

• **charIndex**: `number`

Index of a char

• **quantity**: `number`

number Style object to insert, if given

• **copiedStyle?**: `Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>[]

array of style objects

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.insertCharStyleObject`

#### Defined in

src/shapes/IText/ITextBehavior.ts:880

***

### insertChars()

> **insertChars**(`text`, `style`, `start`, `end`): `void`

insert characters at start position, before start position.
start  equal 1 it means the text get inserted between actual grapheme 0 and 1
if style array is provided, it must be as the same length of text in graphemes
if end is provided and is bigger than start, old text is replaced.
start/end ar per grapheme position in _text array.

#### Parameters

• **text**: `string`

text to insert

• **style**: `undefined` \| `Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>[]

array of style objects

• **start**: `number`

• **end**: `number` = `start`

default to start + 1

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.insertChars`

#### Defined in

src/shapes/IText/ITextBehavior.ts:1030

***

### insertNewStyleBlock()

> **insertNewStyleBlock**(`insertedText`, `start`, `copiedStyle`?): `void`

Inserts style object(s)

#### Parameters

• **insertedText**: `string`[]

Characters at the location where style is inserted

• **start**: `number`

cursor index for inserting style

• **copiedStyle?**: `Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>[]

array of style objects to insert.

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.insertNewStyleBlock`

#### Defined in

src/shapes/IText/ITextBehavior.ts:938

***

### insertNewlineStyleObject()

> **insertNewlineStyleObject**(`lineIndex`, `charIndex`, `qty`, `copiedStyle`?): `void`

Handle insertion of more consecutive style lines for when one or more
newlines gets added to the text. Since current style needs to be shifted
first we shift the current style of the number lines needed, then we add
new lines from the last to the first.

#### Parameters

• **lineIndex**: `number`

Index of a line

• **charIndex**: `number`

Index of a char

• **qty**: `number`

number of lines to add

• **copiedStyle?**

Array of objects styles

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.insertNewlineStyleObject`

#### Defined in

src/shapes/IText/ITextBehavior.ts:811

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

`ITextClickBehavior.intersectsWithObject`

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

`ITextClickBehavior.intersectsWithRect`

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

`ITextClickBehavior.isCacheDirty`

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

`ITextClickBehavior.isContainedWithinObject`

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

`ITextClickBehavior.isContainedWithinRect`

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

`ITextClickBehavior.isControlVisible`

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

`ITextClickBehavior.isDescendantOf`

#### Defined in

src/shapes/Object/StackedObject.ts:46

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

`ITextClickBehavior.isEmptyStyles`

#### Defined in

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

#### Inherited from

`ITextClickBehavior.isEndOfWrapping`

#### Defined in

src/shapes/Text/Text.ts:533

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type Parameters

• **T** *extends* [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

`ITextClickBehavior.isInFrontOf`

#### Defined in

src/shapes/Object/StackedObject.ts:153

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.isNotVisible`

#### Defined in

src/shapes/Object/Object.ts:745

***

### isOnScreen()

> **isOnScreen**(): `boolean`

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

`ITextClickBehavior.isOnScreen`

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

`ITextClickBehavior.isOverlapping`

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

`ITextClickBehavior.isPartiallyOnScreen`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:309

***

### isTripleClick()

> **isTripleClick**(`newPointer`): `boolean`

#### Parameters

• **newPointer**: [`XY`](/api/interfaces/xy/)

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.isTripleClick`

#### Defined in

src/shapes/IText/ITextClickBehavior.ts:99

***

### isType()

> **isType**(...`types`): `boolean`

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

• ...**types**: `string`[]

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.isType`

#### Defined in

src/shapes/Object/Object.ts:1472

***

### measureLine()

> **measureLine**(`lineIndex`): `object`

measure a text line measuring all characters.

#### Parameters

• **lineIndex**: `number`

line number

#### Returns

`object`

##### numOfSpaces

> **numOfSpaces**: `number` = `0`

##### width

> **width**: `number`

#### Inherited from

`ITextClickBehavior.measureLine`

#### Defined in

src/shapes/Text/Text.ts:872

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

#### Inherited from

`ITextClickBehavior.missingNewlineOffset`

#### Defined in

src/shapes/Text/Text.ts:543

***

### moveCursorDown()

> **moveCursorDown**(`e`): `void`

Moves cursor down

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.moveCursorDown`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:451

***

### moveCursorLeft()

> **moveCursorLeft**(`e`): `void`

Moves cursor left

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.moveCursorLeft`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:536

***

### moveCursorLeftWithShift()

> **moveCursorLeftWithShift**(`e`): `undefined` \| `boolean`

Moves cursor left while keeping selection

#### Parameters

• **e**: `KeyboardEvent`

#### Returns

`undefined` \| `boolean`

#### Inherited from

`ITextClickBehavior.moveCursorLeftWithShift`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:608

***

### moveCursorLeftWithoutShift()

> **moveCursorLeftWithoutShift**(`e`): `boolean`

Moves cursor left without keeping selection

#### Parameters

• **e**: `KeyboardEvent`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.moveCursorLeftWithoutShift`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:588

***

### moveCursorRight()

> **moveCursorRight**(`e`): `void`

Moves cursor right

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.moveCursorRight`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:624

***

### moveCursorRightWithShift()

> **moveCursorRightWithShift**(`e`): `undefined` \| `boolean`

Moves cursor right while keeping selection

#### Parameters

• **e**: `KeyboardEvent`

#### Returns

`undefined` \| `boolean`

#### Inherited from

`ITextClickBehavior.moveCursorRightWithShift`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:658

***

### moveCursorRightWithoutShift()

> **moveCursorRightWithoutShift**(`e`): `boolean`

Moves cursor right without keeping selection

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.moveCursorRightWithoutShift`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:674

***

### moveCursorUp()

> **moveCursorUp**(`e`): `void`

Moves cursor up

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.moveCursorUp`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:465

***

### moveCursorWithShift()

> **moveCursorWithShift**(`offset`): `boolean`

Moves cursor with shift

#### Parameters

• **offset**: `number`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.moveCursorWithShift`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:504

***

### moveCursorWithoutShift()

> **moveCursorWithoutShift**(`offset`): `boolean`

Moves cursor up without shift

#### Parameters

• **offset**: `number`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.moveCursorWithoutShift`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:521

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

`ITextClickBehavior.needsItsOwnCache`

#### Defined in

src/shapes/Object/Object.ts:848

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

`ITextClickBehavior.off`

##### Defined in

src/Observable.ts:120

#### off(handlers)

> **off**(`handlers`): `void`

unsubscribe event listeners

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`void`

##### Inherited from

`ITextClickBehavior.off`

##### Defined in

src/Observable.ts:125

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

`ITextClickBehavior.off`

##### Defined in

src/Observable.ts:129

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

`ITextClickBehavior.on`

##### Alias

on

##### Defined in

src/Observable.ts:23

#### on(handlers)

> **on**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

##### Returns

`VoidFunction`

##### Inherited from

`ITextClickBehavior.on`

##### Defined in

src/Observable.ts:27

***

### onCompositionEnd()

> **onCompositionEnd**(): `void`

Composition end

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.onCompositionEnd`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:281

***

### onCompositionStart()

> **onCompositionStart**(): `void`

Composition start

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.onCompositionStart`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:274

***

### onCompositionUpdate()

> **onCompositionUpdate**(`__namedParameters`): `void`

#### Parameters

• **\_\_namedParameters**: `CompositionEvent`

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.onCompositionUpdate`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:285

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

• **options.object?**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

next object we are setting as active, and reason why
this is being deselected

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.onDeselect`

#### Defined in

src/shapes/IText/ITextBehavior.ts:111

***

### onDragStart()

> **onDragStart**(`e`): `boolean`

override this method to control whether instance should/shouldn't become a drag source,

#### Parameters

• **e**: `DragEvent`

#### Returns

`boolean`

should handle event

#### Inherited from

`ITextClickBehavior.onDragStart`

#### See

also DraggableTextDelegate#isActive
To prevent drag and drop between objects both shouldStartDragging and onDragStart should return false

#### Defined in

src/shapes/IText/ITextClickBehavior.ts:68

***

### onInput()

> **onInput**(`this`, `e`): `void`

Handles onInput event

#### Parameters

• **this**: [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\> & `object`

• **e**: `Event`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.onInput`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:167

***

### onKeyDown()

> **onKeyDown**(`e`): `void`

Handles keydown event
only used for arrows and combination of modifier keys.

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.onKeyDown`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:115

***

### onKeyUp()

> **onKeyUp**(`e`): `void`

Handles keyup event
We handle KeyUp because ie11 and edge have difficulties copy/pasting
if a copy/cut event fired, keyup is dismissed

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.onKeyUp`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:147

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

`ITextClickBehavior.onSelect`

#### Defined in

src/shapes/Object/InteractiveObject.ts:671

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

`ITextClickBehavior.once`

##### Alias

once

##### Defined in

src/Observable.ts:62

#### once(handlers)

> **once**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

##### Returns

`VoidFunction`

##### Inherited from

`ITextClickBehavior.once`

##### Defined in

src/Observable.ts:66

***

### paste()

> **paste**(): `void`

Pastes text

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.paste`

#### Defined in

src/shapes/IText/ITextKeyBehavior.ts:317

***

### removeChars()

> **removeChars**(`start`, `end`): `void`

Removes characters from start/end
start/end ar per grapheme position in _text array.

#### Parameters

• **start**: `number`

• **end**: `number` = `...`

default to start + 1

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.removeChars`

#### Defined in

src/shapes/IText/ITextBehavior.ts:1008

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

`ITextClickBehavior.removeStyle`

#### Defined in

src/shapes/Text/StyledText.ts:165

***

### removeStyleFromTo()

> **removeStyleFromTo**(`start`, `end`): `void`

remove and reflow a style block from start to end.

#### Parameters

• **start**: `number`

linear start position for removal (included in removal)

• **end**: `number`

linear end position for removal ( excluded from removal )

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.removeStyleFromTo`

#### Defined in

src/shapes/IText/ITextBehavior.ts:726

***

### renderCache()

> **renderCache**(`options`?): `void`

#### Parameters

• **options?**: `any`

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.renderCache`

#### Defined in

src/shapes/Object/Object.ts:791

***

### renderCursor()

> **renderCursor**(`ctx`, `boundaries`): `void`

Renders cursor

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

transformed context to draw on

• **boundaries**: `CursorBoundaries`

#### Returns

`void`

#### Defined in

src/shapes/IText/IText.ts:494

***

### renderCursorAt()

> **renderCursorAt**(`selectionStart`): `void`

Renders cursor on context Top, outside the animation cycle, on request
Used for the drag/drop effect.
If contextTop is not available, do nothing.

#### Parameters

• **selectionStart**: `number`

#### Returns

`void`

#### Defined in

src/shapes/IText/IText.ts:484

***

### renderCursorOrSelection()

> **renderCursorOrSelection**(): `void`

Renders cursor or selection (depending on what exists)
it does on the contextTop. If contextTop is not available, do nothing.

#### Returns

`void`

#### Overrides

`ITextClickBehavior.renderCursorOrSelection`

#### Defined in

src/shapes/IText/IText.ts:374

***

### renderDragSourceEffect()

> **renderDragSourceEffect**(): `void`

Renders drag start text selection

#### Returns

`void`

#### Overrides

`ITextClickBehavior.renderDragSourceEffect`

#### Defined in

src/shapes/IText/IText.ts:554

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

#### Overrides

`ITextClickBehavior.renderDropTargetEffect`

#### Defined in

src/shapes/IText/IText.ts:564

***

### renderSelection()

> **renderSelection**(`ctx`, `boundaries`): `void`

Renders text selection

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

transformed context to draw on

• **boundaries**: `CursorBoundaries`

Object with left/top/leftOffset/topOffset

#### Returns

`void`

#### Defined in

src/shapes/IText/IText.ts:539

***

### restartCursorIfNeeded()

> **restartCursorIfNeeded**(): `void`

Restart tue cursor animation if either is in complete state ( between animations )
or if it never started before

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.restartCursorIfNeeded`

#### Defined in

src/shapes/IText/ITextBehavior.ts:206

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

`ITextClickBehavior.rotate`

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

`ITextClickBehavior.scale`

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

`ITextClickBehavior.scaleToHeight`

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

`ITextClickBehavior.scaleToWidth`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:369

***

### searchWordBoundary()

> **searchWordBoundary**(`selectionStart`, `direction`): `number`

Finds index corresponding to beginning or end of a word

#### Parameters

• **selectionStart**: `number`

Index of a character

• **direction**: `-1` \| `1`

1 or -1

#### Returns

`number`

Index of the beginning or end of a word

#### Inherited from

`ITextClickBehavior.searchWordBoundary`

#### Defined in

src/shapes/IText/ITextBehavior.ts:323

***

### selectAll()

> **selectAll**(): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

Selects entire text

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ITextClickBehavior.selectAll`

#### Defined in

src/shapes/IText/ITextBehavior.ts:219

***

### selectLine()

> **selectLine**(`selectionStart`?): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

TODO fix: selectionStart set as 0 will be ignored?
Selects a line based on the index

#### Parameters

• **selectionStart?**: `number`

Index of a character

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ITextClickBehavior.selectLine`

#### Defined in

src/shapes/IText/ITextBehavior.ts:371

***

### selectWord()

> **selectWord**(`selectionStart`?): `void`

TODO fix: selectionStart set as 0 will be ignored?
Selects a word based on the index

#### Parameters

• **selectionStart?**: `number`

Index of a character

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.selectWord`

#### Defined in

src/shapes/IText/ITextBehavior.ts:349

***

### set()

> **set**(`key`, `value`?): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `any`

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ITextClickBehavior.set`

#### Defined in

src/shapes/Text/Text.ts:1758

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

`ITextClickBehavior.setControlVisible`

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

`ITextClickBehavior.setControlsVisibility`

#### Defined in

src/shapes/Object/InteractiveObject.ts:610

***

### setCoords()

> **setCoords**(): `void`

set controls' coordinates as well
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setCoords`

#### Defined in

src/shapes/Object/InteractiveObject.ts:342

***

### setCursorByClick()

> **setCursorByClick**(`e`): `void`

Changes cursor location in a text depending on passed pointer (x/y) object

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setCursorByClick`

#### Defined in

src/shapes/IText/ITextClickBehavior.ts:225

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

`ITextClickBehavior.setOnGroup`

#### Defined in

src/shapes/Object/Object.ts:1532

***

### setPathInfo()

> **setPathInfo**(): `void`

If text has a path, it will add the extra information needed
for path and text calculations

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setPathInfo`

#### Defined in

src/shapes/Text/Text.ts:443

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

`ITextClickBehavior.setPositionByOrigin`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:217

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](../../../../api/classes/itext/#setx)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setRelativeX`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:111

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/itext/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

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

`ITextClickBehavior.setRelativeXY`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:174

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](../../../../api/classes/itext/#sety)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setRelativeY`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:127

***

### setSelectionEnd()

> **setSelectionEnd**(`index`): `void`

Sets selection end (right boundary of a selection)

#### Parameters

• **index**: `number`

Index to set selection end to

#### Returns

`void`

#### Defined in

src/shapes/IText/IText.ts:262

***

### setSelectionStart()

> **setSelectionStart**(`index`): `void`

Sets selection start (left boundary of a selection)

#### Parameters

• **index**: `number`

Index to set selection start to

#### Returns

`void`

#### Defined in

src/shapes/IText/IText.ts:253

***

### setSelectionStartEndWithShift()

> **setSelectionStartEndWithShift**(`start`, `end`, `newSelection`): `void`

Set the selectionStart and selectionEnd according to the new position of cursor
mimic the key - mouse navigation when shift is pressed.

#### Parameters

• **start**: `number`

• **end**: `number`

• **newSelection**: `number`

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setSelectionStartEndWithShift`

#### Defined in

src/shapes/IText/ITextBehavior.ts:1057

***

### setSelectionStyles()

> **setSelectionStyles**(`styles`?, `startIndex`?, `endIndex`?): `void`

Sets style of a current selection, if no selection exist, do not set anything.

#### Parameters

• **styles?**: `object`

Styles object

• **startIndex?**: `number` = `...`

Start index to get styles at

• **endIndex?**: `number` = `...`

End index to get styles at, if not specified selectionEnd or startIndex + 1

#### Returns

`void`

#### Overrides

`ITextClickBehavior.setSelectionStyles`

#### Defined in

src/shapes/IText/IText.ts:326

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

#### Inherited from

`ITextClickBehavior.setSubscript`

#### Defined in

src/shapes/Text/Text.ts:1415

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

#### Inherited from

`ITextClickBehavior.setSuperscript`

#### Defined in

src/shapes/Text/Text.ts:1406

***

### setX()

> **setX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setX`

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

`ITextClickBehavior.setXY`

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

`ITextClickBehavior.setY`

#### Defined in

src/shapes/Object/ObjectGeometry.ts:95

***

### shiftLineStyles()

> **shiftLineStyles**(`lineIndex`, `offset`): `void`

Shifts line styles up or down

#### Parameters

• **lineIndex**: `number`

Index of a line

• **offset**: `number`

Can any number?

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.shiftLineStyles`

#### Defined in

src/shapes/IText/ITextBehavior.ts:788

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

`ITextClickBehavior.shouldCache`

#### Defined in

src/shapes/Object/Object.ts:872

***

### shouldStartDragging()

> **shouldStartDragging**(): `boolean`

If this method returns true a mouse move operation over a text selection
will not prevent the native mouse event allowing the browser to start a drag operation.
shouldStartDragging can be read 'do not prevent default for mouse move event'
To prevent drag and drop between objects both shouldStartDragging and onDragStart should return false

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.shouldStartDragging`

#### Defined in

src/shapes/IText/ITextClickBehavior.ts:58

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

`ITextClickBehavior.strokeBorders`

#### Defined in

src/shapes/Object/InteractiveObject.ts:398

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

`ITextClickBehavior.styleHas`

#### Defined in

src/shapes/Text/StyledText.ts:70

***

### toCanvasElement()

> **toCanvasElement**(`options`?): `HTMLCanvasElement`

block cursor/selection logic while rendering the exported canvas

#### Parameters

• **options?**: `ObjectToCanvasElementOptions`

#### Returns

`HTMLCanvasElement`

#### Overrides

`ITextClickBehavior.toCanvasElement`

#### Todo

this workaround should be replaced with a more robust solution

#### Defined in

src/shapes/IText/IText.ts:362

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

`ITextClickBehavior.toClipPathSVG`

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

`ITextClickBehavior.toDataURL`

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

`ITextClickBehavior.toDatalessObject`

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

`ITextClickBehavior.toJSON`

#### Defined in

src/shapes/Object/Object.ts:1491

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type Parameters

• **T** *extends* `Omit`\<`Props` & [`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\>

• **K** *extends* `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[] = `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

Object representation of an instance

#### Inherited from

`ITextClickBehavior.toObject`

#### Defined in

src/shapes/Text/Text.ts:1747

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

`ITextClickBehavior.toSVG`

#### Defined in

src/shapes/Object/FabricObjectSVGExportMixin.ts:129

***

### toString()

> **toString**(): `string`

Returns string representation of an instance

#### Returns

`string`

String representation of text object

#### Inherited from

`ITextClickBehavior.toString`

#### Defined in

src/shapes/Text/Text.ts:579

***

### toggle()

> **toggle**(`property`): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ITextClickBehavior.toggle`

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

`ITextClickBehavior.transform`

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

`ITextClickBehavior.transformMatrixKey`

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

`ITextClickBehavior.translateToCenterPoint`

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

`ITextClickBehavior.translateToGivenOrigin`

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

`ITextClickBehavior.translateToOriginPoint`

#### Defined in

src/shapes/Object/ObjectOrigin.ts:155

***

### tripleClickHandler()

> **tripleClickHandler**(`options`): `void`

Default handler for triple click, select a line

#### Parameters

• **options**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.tripleClickHandler`

#### Defined in

src/shapes/IText/ITextClickBehavior.ts:121

***

### updateSelectionOnMouseMove()

> **updateSelectionOnMouseMove**(`e`): `void`

called by [Canvas#textEditingManager](../../../../api/classes/canvas/#texteditingmanager)

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.updateSelectionOnMouseMove`

#### Defined in

src/shapes/IText/ITextBehavior.ts:418

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

`ITextClickBehavior.willDrawShadow`

#### Defined in

src/shapes/Object/Object.ts:885

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

`ITextClickBehavior._fromObject`

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

`ITextClickBehavior.createControls`

#### Defined in

src/shapes/Object/InteractiveObject.ts:166

***

### fromElement()

> `static` **fromElement**(`element`, `options`?, `cssRules`?): `Promise`\<[`FabricText`](/api/classes/fabrictext/)\<`object`, [`SerializedTextProps`](/api/interfaces/serializedtextprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

Returns FabricText instance from an SVG element (<b>not yet implemented</b>)

#### Parameters

• **element**: `HTMLElement`

Element to parse

• **options?**: [`Abortable`](/api/type-aliases/abortable/)

Options object

• **cssRules?**: `CSSRules`

#### Returns

`Promise`\<[`FabricText`](/api/classes/fabrictext/)\<`object`, [`SerializedTextProps`](/api/interfaces/serializedtextprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Inherited from

`ITextClickBehavior.fromElement`

#### Static

#### Member Of

Text

#### Defined in

src/shapes/Text/Text.ts:1830

***

### fromObject()

> `static` **fromObject**\<`T`, `S`\>(`object`): `Promise`\<`S`\>

Returns FabricText instance from an object representation

#### Type Parameters

• **T** *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`SerializedTextProps`](/api/interfaces/serializedtextprops/)\>

• **S** *extends* [`FabricText`](/api/classes/fabrictext/)\<`Partial`\<[`TextProps`](/api/interfaces/textprops/)\>, [`SerializedTextProps`](/api/interfaces/serializedtextprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

• **object**: `T`

plain js Object to create an instance from

#### Returns

`Promise`\<`S`\>

#### Inherited from

`ITextClickBehavior.fromObject`

#### Defined in

src/shapes/Text/Text.ts:1907

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

`ITextClickBehavior.getDefaults`

#### Defined in

src/shapes/IText/IText.ts:207
