---
editUrl: false
next: false
prev: false
title: "Textbox"
---

Textbox class, based on IText, allows the user to resize the text rectangle
and wraps lines automatically. Textboxes have their Y scaling locked, the
user can only change width. Height is adjusted automatically based on the
wrapping of lines.

## Extends

- [`IText`](IText.md)\<`Props`, `SProps`, `EventSpec`\>

## Type parameters

• **Props** extends [`TOptions`](../type-aliases/TOptions.md)\<[`TextboxProps`](../interfaces/TextboxProps.md)\> = `Partial`\<[`TextboxProps`](../interfaces/TextboxProps.md)\>

• **SProps** extends [`SerializedTextboxProps`](../interfaces/SerializedTextboxProps.md) = [`SerializedTextboxProps`](../interfaces/SerializedTextboxProps.md)

• **EventSpec** extends `ITextEvents` = `ITextEvents`

## Implements

- `UniqueTextboxProps`

## Constructors

### new Textbox(text, options)

> **new Textbox**\<`Props`, `SProps`, `EventSpec`\>(`text`, `options`?): [`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

Constructor

#### Parameters

• **text**: `string`

Text string

• **options?**: `Props`

Options object

#### Returns

[`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`IText`](IText.md).[`constructor`](IText.md#constructors)

#### Source

src/shapes/IText/IText.ts:225

## Properties

### MIN\_TEXT\_WIDTH

> **MIN\_TEXT\_WIDTH**: `number`

contains the min text width to avoid getting 0

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`MIN_TEXT_WIDTH`](IText.md#min_text_width)

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

[`IText`](IText.md).[`__corner`](IText.md#__corner)

#### Source

src/shapes/Object/InteractiveObject.ts:104

***

### \_\_lineHeights

> **\_\_lineHeights**: `number`[]

#### Inherited from

[`IText`](IText.md).[`__lineHeights`](IText.md#__lineheights)

#### Source

src/shapes/Text/Text.ts:409

***

### \_\_lineWidths

> **\_\_lineWidths**: `number`[]

#### Inherited from

[`IText`](IText.md).[`__lineWidths`](IText.md#__linewidths)

#### Source

src/shapes/Text/Text.ts:410

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[`IText`](IText.md).[`_controlsVisibility`](IText.md#_controlsvisibility)

#### Source

src/shapes/Object/InteractiveObject.ts:111

***

### \_fontSizeMult

> **\_fontSizeMult**: `number`

Text Line proportion to font Size (in pixels)

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`_fontSizeMult`](IText.md#_fontsizemult)

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

[`IText`](IText.md).[`_scaling`](IText.md#_scaling)

#### Source

src/shapes/Object/InteractiveObject.ts:133

***

### \_styleMap

> **\_styleMap**: `StyleMap`

#### Source

src/shapes/Textbox.ts:87

***

### \_text

> **\_text**: `string`[]

#### Inherited from

[`IText`](IText.md).[`_text`](IText.md#_text)

#### Source

src/shapes/Text/Text.ts:407

***

### \_textLines

> **\_textLines**: `string`[][]

same as textlines, but each line is an array of graphemes as split by splitByGrapheme

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`_textLines`](IText.md#_textlines)

#### Source

src/shapes/Text/Text.ts:404

***

### \_unwrappedTextLines

> **\_unwrappedTextLines**: `string`[][]

#### Inherited from

[`IText`](IText.md).[`_unwrappedTextLines`](IText.md#_unwrappedtextlines)

#### Source

src/shapes/Text/Text.ts:406

***

### \_wordJoiners

> **\_wordJoiners**: `RegExp`

#### Implementation of

`UniqueTextboxProps._wordJoiners`

#### Source

src/shapes/Textbox.ts:85

***

### aCoords

> **aCoords**: [`TCornerPoint`](../type-aliases/TCornerPoint.md)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/textbox/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/textbox/#calcacoords)

#### Inherited from

[`IText`](IText.md).[`aCoords`](IText.md#acoords)

#### Source

src/shapes/Object/ObjectGeometry.ts:50

***

### absolutePositioned

> **absolutePositioned**: `boolean`

#### Inherited from

[`IText`](IText.md).[`absolutePositioned`](IText.md#absolutepositioned)

#### Source

src/shapes/Object/Object.ts:166

***

### activeOn

> **activeOn**: `"down"` \| `"up"`

#### Inherited from

[`IText`](IText.md).[`activeOn`](IText.md#activeon)

#### Source

src/shapes/Object/InteractiveObject.ts:83

***

### angle

> **angle**: [`TDegree`](../type-aliases/TDegree.md)

#### Inherited from

[`IText`](IText.md).[`angle`](IText.md#angle)

#### Source

src/shapes/Object/ObjectOrigin.ts:29

***

### backgroundColor

> **backgroundColor**: `string`

#### Inherited from

[`IText`](IText.md).[`backgroundColor`](IText.md#backgroundcolor)

#### Source

src/shapes/Object/Object.ts:153

***

### borderColor

> **borderColor**: `string`

#### Inherited from

[`IText`](IText.md).[`borderColor`](IText.md#bordercolor)

#### Source

src/shapes/Object/InteractiveObject.ts:73

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

#### Inherited from

[`IText`](IText.md).[`borderDashArray`](IText.md#borderdasharray)

#### Source

src/shapes/Object/InteractiveObject.ts:74

***

### borderOpacityWhenMoving

> **borderOpacityWhenMoving**: `number`

#### Inherited from

[`IText`](IText.md).[`borderOpacityWhenMoving`](IText.md#borderopacitywhenmoving)

#### Source

src/shapes/Object/InteractiveObject.ts:75

***

### borderScaleFactor

> **borderScaleFactor**: `number`

#### Inherited from

[`IText`](IText.md).[`borderScaleFactor`](IText.md#borderscalefactor)

#### Source

src/shapes/Object/InteractiveObject.ts:76

***

### caching

> **caching**: `boolean`

Indicates whether internal text char widths can be cached

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`caching`](IText.md#caching)

#### Source

src/shapes/IText/IText.ts:203

***

### canvas?

> **`optional`** **canvas**: [`Canvas`](Canvas.md)

#### Inherited from

[`IText`](IText.md).[`canvas`](IText.md#canvas)

#### Source

src/shapes/Object/InteractiveObject.ts:135

***

### centeredRotation

> **centeredRotation**: `boolean`

#### Inherited from

[`IText`](IText.md).[`centeredRotation`](IText.md#centeredrotation)

#### Source

src/shapes/Object/Object.ts:167

***

### centeredScaling

> **centeredScaling**: `boolean`

#### Inherited from

[`IText`](IText.md).[`centeredScaling`](IText.md#centeredscaling)

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

#### Inherited from

[`IText`](IText.md).[`charSpacing`](IText.md#charspacing)

#### Source

src/shapes/Text/Text.ts:345

***

### clipPath?

> **`optional`** **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Inherited from

[`IText`](IText.md).[`clipPath`](IText.md#clippath)

#### Source

src/shapes/Object/Object.ts:164

***

### clipPathId?

> **`optional`** **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[`IText`](IText.md).[`clipPathId`](IText.md#clippathid)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:14

***

### compositionColor

> **compositionColor**: `string`

#### Inherited from

[`IText`](IText.md).[`compositionColor`](IText.md#compositioncolor)

#### Source

src/shapes/IText/IText.ts:196

***

### compositionEnd

> **compositionEnd**: `number`

#### Inherited from

[`IText`](IText.md).[`compositionEnd`](IText.md#compositionend)

#### Source

src/shapes/IText/IText.ts:135

***

### compositionStart

> **compositionStart**: `number`

#### Inherited from

[`IText`](IText.md).[`compositionStart`](IText.md#compositionstart)

#### Source

src/shapes/IText/IText.ts:133

***

### controls

> **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[`IText`](IText.md).[`controls`](IText.md#controls)

#### Source

src/shapes/Object/InteractiveObject.ts:117

***

### cornerColor

> **cornerColor**: `string`

#### Inherited from

[`IText`](IText.md).[`cornerColor`](IText.md#cornercolor)

#### Source

src/shapes/Object/InteractiveObject.ts:67

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

#### Inherited from

[`IText`](IText.md).[`cornerDashArray`](IText.md#cornerdasharray)

#### Source

src/shapes/Object/InteractiveObject.ts:70

***

### cornerSize

> **cornerSize**: `number`

#### Inherited from

[`IText`](IText.md).[`cornerSize`](IText.md#cornersize)

#### Source

src/shapes/Object/InteractiveObject.ts:64

***

### cornerStrokeColor

> **cornerStrokeColor**: `string`

#### Inherited from

[`IText`](IText.md).[`cornerStrokeColor`](IText.md#cornerstrokecolor)

#### Source

src/shapes/Object/InteractiveObject.ts:68

***

### cornerStyle

> **cornerStyle**: `"circle"` \| `"rect"`

#### Inherited from

[`IText`](IText.md).[`cornerStyle`](IText.md#cornerstyle)

#### Source

src/shapes/Object/InteractiveObject.ts:69

***

### ctrlKeysMapDown

> **ctrlKeysMapDown**: `TKeyMapIText`

For functionalities on keyDown + ctrl || cmd

#### Inherited from

[`IText`](IText.md).[`ctrlKeysMapDown`](IText.md#ctrlkeysmapdown)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:42

***

### ctrlKeysMapUp

> **ctrlKeysMapUp**: `TKeyMapIText`

For functionalities on keyUp + ctrl || cmd

#### Inherited from

[`IText`](IText.md).[`ctrlKeysMapUp`](IText.md#ctrlkeysmapup)

#### Source

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

#### Inherited from

[`IText`](IText.md).[`cursorColor`](IText.md#cursorcolor)

#### Source

src/shapes/IText/IText.ts:180

***

### cursorDelay

> **cursorDelay**: `number`

Delay between cursor blink (in ms)

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`cursorDelay`](IText.md#cursordelay)

#### Source

src/shapes/IText/IText.ts:187

***

### cursorDuration

> **cursorDuration**: `number`

Duration of cursor fade in (in ms)

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`cursorDuration`](IText.md#cursorduration)

#### Source

src/shapes/IText/IText.ts:194

***

### cursorWidth

> **cursorWidth**: `number`

Width of cursor (in px)

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`cursorWidth`](IText.md#cursorwidth)

#### Source

src/shapes/IText/IText.ts:170

***

### deltaY

> **deltaY**: `number`

Baseline shift, styles only, keep at 0 for the main text object

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`deltaY`](IText.md#deltay)

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

#### Inherited from

[`IText`](IText.md).[`direction`](IText.md#direction)

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

[`IText`](IText.md).[`dirty`](IText.md#dirty)

#### Source

src/shapes/Object/Object.ts:193

***

### dynamicMinWidth

> **dynamicMinWidth**: `number`

Minimum calculated width of a textbox, in pixels.
fixed to 2 so that an empty textbox cannot go to 0
and is still selectable without text.

#### Default

```ts

```

#### Implementation of

`UniqueTextboxProps.dynamicMinWidth`

#### Source

src/shapes/Textbox.ts:75

***

### editable

> **editable**: `boolean`

Indicates whether a text can be edited

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`editable`](IText.md#editable)

#### Source

src/shapes/IText/IText.ts:156

***

### editingBorderColor

> **editingBorderColor**: `string`

Border color of text object while it's in editing mode

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`editingBorderColor`](IText.md#editingbordercolor)

#### Source

src/shapes/IText/IText.ts:163

***

### evented

> **evented**: `boolean`

#### Inherited from

[`IText`](IText.md).[`evented`](IText.md#evented)

#### Source

src/shapes/Object/InteractiveObject.ts:81

***

### excludeFromExport

> **excludeFromExport**: `boolean`

#### Inherited from

[`IText`](IText.md).[`excludeFromExport`](IText.md#excludefromexport)

#### Source

src/shapes/Object/Object.ts:160

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Inherited from

[`IText`](IText.md).[`fill`](IText.md#fill)

#### Source

src/shapes/Object/Object.ts:143

***

### fillRule

> **fillRule**: `CanvasFillRule`

#### Inherited from

[`IText`](IText.md).[`fillRule`](IText.md#fillrule)

#### Source

src/shapes/Object/Object.ts:144

***

### flipX

> **flipX**: `boolean`

#### Inherited from

[`IText`](IText.md).[`flipX`](IText.md#flipx)

#### Source

src/shapes/Object/ObjectOrigin.ts:21

***

### flipY

> **flipY**: `boolean`

#### Inherited from

[`IText`](IText.md).[`flipY`](IText.md#flipy)

#### Source

src/shapes/Object/ObjectOrigin.ts:22

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`fontFamily`](IText.md#fontfamily)

#### Source

src/shapes/Text/Text.ts:186

***

### fontSize

> **fontSize**: `number`

Font size (in pixels)

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`fontSize`](IText.md#fontsize)

#### Source

src/shapes/Text/Text.ts:172

***

### fontStyle

> **fontStyle**: `string`

Font style . Possible values: "", "normal", "italic" or "oblique".

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`fontStyle`](IText.md#fontstyle)

#### Source

src/shapes/Text/Text.ts:222

***

### fontWeight

> **fontWeight**: `string`

Font weight (e.g. bold, normal, 400, 600, 800)

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`fontWeight`](IText.md#fontweight)

#### Source

src/shapes/Text/Text.ts:179

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

#### Inherited from

[`IText`](IText.md).[`globalCompositeOperation`](IText.md#globalcompositeoperation)

#### Source

src/shapes/Object/Object.ts:152

***

### hasBorders

> **hasBorders**: `boolean`

#### Inherited from

[`IText`](IText.md).[`hasBorders`](IText.md#hasborders)

#### Source

src/shapes/Object/InteractiveObject.ts:77

***

### hasControls

> **hasControls**: `boolean`

#### Inherited from

[`IText`](IText.md).[`hasControls`](IText.md#hascontrols)

#### Source

src/shapes/Object/InteractiveObject.ts:71

***

### height

> **height**: `number`

#### Inherited from

[`IText`](IText.md).[`height`](IText.md#height)

#### Source

src/shapes/Object/ObjectOrigin.ts:20

***

### hiddenTextarea

> **hiddenTextarea**: `null` \| `HTMLTextAreaElement`

#### Inherited from

[`IText`](IText.md).[`hiddenTextarea`](IText.md#hiddentextarea)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:44

***

### hiddenTextareaContainer?

> **`optional`** **hiddenTextareaContainer**: `null` \| `HTMLElement`

DOM container to append the hiddenTextarea.
An alternative to attaching to the document.body.
Useful to reduce laggish redraw of the full document.body tree and
also with modals event capturing that won't let the textarea take focus.

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`hiddenTextareaContainer`](IText.md#hiddentextareacontainer)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:54

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

#### Inherited from

[`IText`](IText.md).[`hoverCursor`](IText.md#hovercursor)

#### Source

src/shapes/Object/InteractiveObject.ts:85

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

#### Inherited from

[`IText`](IText.md).[`includeDefaultValues`](IText.md#includedefaultvalues)

#### Source

src/shapes/Object/Object.ts:159

***

### initialized?

> **`optional`** **initialized**: `true`

#### Inherited from

[`IText`](IText.md).[`initialized`](IText.md#initialized)

#### Source

src/shapes/Text/Text.ts:411

***

### inverted

> **inverted**: `boolean`

#### Inherited from

[`IText`](IText.md).[`inverted`](IText.md#inverted)

#### Source

src/shapes/Object/Object.ts:165

***

### isEditing

> **isEditing**: `boolean`

Indicates whether text is in editing mode

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`isEditing`](IText.md#isediting)

#### Source

src/shapes/IText/IText.ts:149

***

### isMoving?

> **`optional`** **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[`IText`](IText.md).[`isMoving`](IText.md#ismoving)

#### Source

src/shapes/Object/InteractiveObject.ts:123

***

### isWrapping

> **isWrapping**: `boolean`

#### Source

src/shapes/Textbox.ts:89

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
this.keysMap = Object.assign(\{\}, this.keysMap);
The function must be in IText.prototype.myFunction And will receive event as args[0]

#### Inherited from

[`IText`](IText.md).[`keysMap`](IText.md#keysmap)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:30

***

### keysMapRtl

> **keysMapRtl**: `TKeyMapIText`

#### Inherited from

[`IText`](IText.md).[`keysMapRtl`](IText.md#keysmaprtl)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:32

***

### left

> **left**: `number`

#### Inherited from

[`IText`](IText.md).[`left`](IText.md#left)

#### Source

src/shapes/Object/ObjectOrigin.ts:18

***

### lineHeight

> **lineHeight**: `number`

Line height

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`lineHeight`](IText.md#lineheight)

#### Source

src/shapes/Text/Text.ts:229

***

### linethrough

> **linethrough**: `boolean`

Text decoration linethrough.

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`linethrough`](IText.md#linethrough)

#### Source

src/shapes/Text/Text.ts:207

***

### lockMovementX

> **lockMovementX**: `boolean`

#### Inherited from

[`IText`](IText.md).[`lockMovementX`](IText.md#lockmovementx)

#### Source

src/shapes/Object/InteractiveObject.ts:55

***

### lockMovementY

> **lockMovementY**: `boolean`

#### Inherited from

[`IText`](IText.md).[`lockMovementY`](IText.md#lockmovementy)

#### Source

src/shapes/Object/InteractiveObject.ts:56

***

### lockRotation

> **lockRotation**: `boolean`

#### Inherited from

[`IText`](IText.md).[`lockRotation`](IText.md#lockrotation)

#### Source

src/shapes/Object/InteractiveObject.ts:57

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

#### Inherited from

[`IText`](IText.md).[`lockScalingFlip`](IText.md#lockscalingflip)

#### Source

src/shapes/Object/InteractiveObject.ts:62

***

### lockScalingX

> **lockScalingX**: `boolean`

#### Inherited from

[`IText`](IText.md).[`lockScalingX`](IText.md#lockscalingx)

#### Source

src/shapes/Object/InteractiveObject.ts:58

***

### lockScalingY

> **lockScalingY**: `boolean`

#### Inherited from

[`IText`](IText.md).[`lockScalingY`](IText.md#lockscalingy)

#### Source

src/shapes/Object/InteractiveObject.ts:59

***

### lockSkewingX

> **lockSkewingX**: `boolean`

#### Inherited from

[`IText`](IText.md).[`lockSkewingX`](IText.md#lockskewingx)

#### Source

src/shapes/Object/InteractiveObject.ts:60

***

### lockSkewingY

> **lockSkewingY**: `boolean`

#### Inherited from

[`IText`](IText.md).[`lockSkewingY`](IText.md#lockskewingy)

#### Source

src/shapes/Object/InteractiveObject.ts:61

***

### matrixCache?

> **`optional`** **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[`IText`](IText.md).[`matrixCache`](IText.md#matrixcache)

#### Source

src/shapes/Object/ObjectGeometry.ts:60

***

### minScaleLimit

> **minScaleLimit**: `number`

#### Inherited from

[`IText`](IText.md).[`minScaleLimit`](IText.md#minscalelimit)

#### Source

src/shapes/Object/Object.ts:138

***

### minWidth

> **minWidth**: `number`

Minimum width of textbox, in pixels.

#### Default

```ts

```

#### Implementation of

`UniqueTextboxProps.minWidth`

#### Source

src/shapes/Textbox.ts:66

***

### moveCursor

> **moveCursor**: `null` \| `string`

#### Inherited from

[`IText`](IText.md).[`moveCursor`](IText.md#movecursor)

#### Source

src/shapes/Object/InteractiveObject.ts:86

***

### noScaleCache

> **noScaleCache**: `boolean`

#### Inherited from

[`IText`](IText.md).[`noScaleCache`](IText.md#noscalecache)

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

[`IText`](IText.md).[`oCoords`](IText.md#ocoords)

#### Source

src/shapes/Object/InteractiveObject.ts:94

***

### objectCaching

> **objectCaching**: `boolean`

#### Inherited from

[`IText`](IText.md).[`objectCaching`](IText.md#objectcaching)

#### Source

src/shapes/Object/Object.ts:162

***

### opacity

> **opacity**: `number`

#### Inherited from

[`IText`](IText.md).[`opacity`](IText.md#opacity)

#### Source

src/shapes/Object/Object.ts:140

***

### originX

> **originX**: [`TOriginX`](../type-aliases/TOriginX.md)

#### Inherited from

[`IText`](IText.md).[`originX`](IText.md#originx)

#### Source

src/shapes/Object/ObjectOrigin.ts:27

***

### originY

> **originY**: [`TOriginY`](../type-aliases/TOriginY.md)

#### Inherited from

[`IText`](IText.md).[`originY`](IText.md#originy)

#### Source

src/shapes/Object/ObjectOrigin.ts:28

***

### overline

> **overline**: `boolean`

Text decoration overline.

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`overline`](IText.md#overline)

#### Source

src/shapes/Text/Text.ts:200

***

### ownMatrixCache?

> **`optional`** **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[`IText`](IText.md).[`ownMatrixCache`](IText.md#ownmatrixcache)

#### Source

src/shapes/Object/ObjectGeometry.ts:55

***

### padding

> **padding**: `number`

#### Inherited from

[`IText`](IText.md).[`padding`](IText.md#padding)

#### Source

src/shapes/Object/ObjectGeometry.ts:40

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

#### Inherited from

[`IText`](IText.md).[`paintFirst`](IText.md#paintfirst)

#### Source

src/shapes/Object/Object.ts:142

***

### parent?

> **`optional`** **parent**: [`Group`](Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[`IText`](IText.md).[`parent`](IText.md#parent)

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

#### Inherited from

[`IText`](IText.md).[`path`](IText.md#path)

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

#### Inherited from

[`IText`](IText.md).[`pathAlign`](IText.md#pathalign)

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

#### Inherited from

[`IText`](IText.md).[`pathSide`](IText.md#pathside)

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

#### Inherited from

[`IText`](IText.md).[`pathStartOffset`](IText.md#pathstartoffset)

#### Source

src/shapes/Text/Text.ts:302

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

#### Inherited from

[`IText`](IText.md).[`perPixelTargetFind`](IText.md#perpixeltargetfind)

#### Source

src/shapes/Object/InteractiveObject.ts:82

***

### scaleX

> **scaleX**: `number`

#### Inherited from

[`IText`](IText.md).[`scaleX`](IText.md#scalex)

#### Source

src/shapes/Object/ObjectOrigin.ts:23

***

### scaleY

> **scaleY**: `number`

#### Inherited from

[`IText`](IText.md).[`scaleY`](IText.md#scaley)

#### Source

src/shapes/Object/ObjectOrigin.ts:24

***

### selectable

> **selectable**: `boolean`

#### Inherited from

[`IText`](IText.md).[`selectable`](IText.md#selectable)

#### Source

src/shapes/Object/InteractiveObject.ts:80

***

### selectionBackgroundColor

> **selectionBackgroundColor**: `string`

#### Inherited from

[`IText`](IText.md).[`selectionBackgroundColor`](IText.md#selectionbackgroundcolor)

#### Source

src/shapes/Object/InteractiveObject.ts:78

***

### selectionColor

> **selectionColor**: `string`

Color of text selection

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`selectionColor`](IText.md#selectioncolor)

#### Source

src/shapes/IText/IText.ts:142

***

### selectionEnd

> **selectionEnd**: `number`

Index where text selection ends

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`selectionEnd`](IText.md#selectionend)

#### Source

src/shapes/IText/IText.ts:131

***

### selectionStart

> **selectionStart**: `number`

Index where text selection starts (or where cursor is when there is no selection)

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`selectionStart`](IText.md#selectionstart)

#### Source

src/shapes/IText/IText.ts:124

***

### shadow

> **shadow**: `null` \| [`Shadow`](Shadow.md)

#### Inherited from

[`IText`](IText.md).[`shadow`](IText.md#shadow)

#### Source

src/shapes/Object/Object.ts:155

***

### skewX

> **skewX**: `number`

#### Inherited from

[`IText`](IText.md).[`skewX`](IText.md#skewx)

#### Source

src/shapes/Object/ObjectOrigin.ts:25

***

### skewY

> **skewY**: `number`

#### Inherited from

[`IText`](IText.md).[`skewY`](IText.md#skewy)

#### Source

src/shapes/Object/ObjectOrigin.ts:26

***

### snapAngle?

> **`optional`** **snapAngle**: [`TDegree`](../type-aliases/TDegree.md)

#### Inherited from

[`IText`](IText.md).[`snapAngle`](IText.md#snapangle)

#### Source

src/shapes/Object/InteractiveObject.ts:52

***

### snapThreshold?

> **`optional`** **snapThreshold**: [`TDegree`](../type-aliases/TDegree.md)

#### Inherited from

[`IText`](IText.md).[`snapThreshold`](IText.md#snapthreshold)

#### Source

src/shapes/Object/InteractiveObject.ts:53

***

### splitByGrapheme

> **splitByGrapheme**: `boolean`

Use this boolean property in order to split strings that have no white space concept.
this is a cheap way to help with chinese/japanese

#### Since

2.6.0

#### Implementation of

`UniqueTextboxProps.splitByGrapheme`

#### Source

src/shapes/Textbox.ts:83

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

#### Inherited from

[`IText`](IText.md).[`stroke`](IText.md#stroke)

#### Source

src/shapes/Object/Object.ts:145

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

#### Inherited from

[`IText`](IText.md).[`strokeDashArray`](IText.md#strokedasharray)

#### Source

src/shapes/Object/Object.ts:146

***

### strokeDashOffset

> **strokeDashOffset**: `number`

#### Inherited from

[`IText`](IText.md).[`strokeDashOffset`](IText.md#strokedashoffset)

#### Source

src/shapes/Object/Object.ts:147

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

#### Inherited from

[`IText`](IText.md).[`strokeLineCap`](IText.md#strokelinecap)

#### Source

src/shapes/Object/Object.ts:148

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

#### Inherited from

[`IText`](IText.md).[`strokeLineJoin`](IText.md#strokelinejoin)

#### Source

src/shapes/Object/Object.ts:149

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

#### Inherited from

[`IText`](IText.md).[`strokeMiterLimit`](IText.md#strokemiterlimit)

#### Source

src/shapes/Object/Object.ts:150

***

### strokeUniform

> **strokeUniform**: `boolean`

#### Inherited from

[`IText`](IText.md).[`strokeUniform`](IText.md#strokeuniform)

#### Source

src/shapes/Object/ObjectOrigin.ts:31

***

### strokeWidth

> **strokeWidth**: `number`

#### Inherited from

[`IText`](IText.md).[`strokeWidth`](IText.md#strokewidth)

#### Source

src/shapes/Object/ObjectOrigin.ts:30

***

### styles

> **styles**: [`TextStyle`](../type-aliases/TextStyle.md)

#### Inherited from

[`IText`](IText.md).[`styles`](IText.md#styles)

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

#### Inherited from

[`IText`](IText.md).[`subscript`](IText.md#subscript)

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

#### Inherited from

[`IText`](IText.md).[`superscript`](IText.md#superscript)

#### Source

src/shapes/Text/Text.ts:234

***

### text

> **text**: `string`

#### Inherited from

[`IText`](IText.md).[`text`](IText.md#text)

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

#### Inherited from

[`IText`](IText.md).[`textAlign`](IText.md#textalign)

#### Source

src/shapes/Text/Text.ts:215

***

### textBackgroundColor

> **textBackgroundColor**: `string`

Background color of text lines

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`textBackgroundColor`](IText.md#textbackgroundcolor)

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

#### Inherited from

[`IText`](IText.md).[`textLines`](IText.md#textlines)

#### Source

src/shapes/Text/Text.ts:397

***

### top

> **top**: `number`

#### Inherited from

[`IText`](IText.md).[`top`](IText.md#top)

#### Source

src/shapes/Object/ObjectOrigin.ts:17

***

### touchCornerSize

> **touchCornerSize**: `number`

#### Inherited from

[`IText`](IText.md).[`touchCornerSize`](IText.md#touchcornersize)

#### Source

src/shapes/Object/InteractiveObject.ts:65

***

### transparentCorners

> **transparentCorners**: `boolean`

#### Inherited from

[`IText`](IText.md).[`transparentCorners`](IText.md#transparentcorners)

#### Source

src/shapes/Object/InteractiveObject.ts:66

***

### underline

> **underline**: `boolean`

Text decoration underline.

#### Default

```ts

```

#### Inherited from

[`IText`](IText.md).[`underline`](IText.md#underline)

#### Source

src/shapes/Text/Text.ts:193

***

### visible

> **visible**: `boolean`

#### Inherited from

[`IText`](IText.md).[`visible`](IText.md#visible)

#### Source

src/shapes/Object/Object.ts:157

***

### width

> **width**: `number`

#### Inherited from

[`IText`](IText.md).[`width`](IText.md#width)

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

#### Inherited from

[`IText`](IText.md).[`ATTRIBUTE_NAMES`](IText.md#attribute_names)

#### Source

src/shapes/Text/Text.ts:1803

***

### \_styleProperties

> **`static`** **\_styleProperties**: readonly `StylePropertiesType`[] = `styleProperties`

#### Inherited from

[`IText`](IText.md).[`_styleProperties`](IText.md#_styleproperties)

#### Source

src/shapes/Text/StyledText.ts:30

***

### cacheProperties

> **`static`** **cacheProperties**: `string`[]

#### Inherited from

[`IText`](IText.md).[`cacheProperties`](IText.md#cacheproperties)

#### Source

src/shapes/Text/Text.ts:413

***

### colorProperties

> **`static`** **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[`IText`](IText.md).[`colorProperties`](IText.md#colorproperties)

#### Source

src/shapes/Object/AnimatableObject.ts:20

***

### genericFonts

> **`static`** **genericFonts**: `string`[]

#### Inherited from

[`IText`](IText.md).[`genericFonts`](IText.md#genericfonts)

#### Source

src/shapes/Text/Text.ts:1787

***

### ownDefaults

> **`static`** **ownDefaults**: `Partial`\<[`TClassProperties`](../type-aliases/TClassProperties.md)\<[`Textbox`](Textbox.md)\<`Partial`\<[`TextboxProps`](../interfaces/TextboxProps.md)\>, [`SerializedTextboxProps`](../interfaces/SerializedTextboxProps.md), `ITextEvents`\>\>\> = `textboxDefaultValues`

#### Overrides

[`IText`](IText.md).[`ownDefaults`](IText.md#owndefaults)

#### Source

src/shapes/Textbox.ts:95

***

### stateProperties

> **`static`** **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[`IText`](IText.md).[`stateProperties`](IText.md#stateproperties)

#### Source

src/shapes/Object/Object.ts:176

***

### textLayoutProperties

> **`static`** **textLayoutProperties**: `string`[]

#### Overrides

`IText.textLayoutProperties`

#### Source

src/shapes/Textbox.ts:93

***

### type

> **`static`** **type**: `string` = `'Textbox'`

#### Overrides

[`IText`](IText.md).[`type`](IText.md#type)

#### Source

src/shapes/Textbox.ts:91

## Accessors

### type

> **`get`** **type**(): `string`

#### Returns

`string`

#### Source

src/shapes/IText/IText.ts:213

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

[`IText`](IText.md).[`_drawClipPath`](IText.md#_drawclippath)

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

#### Inherited from

[`IText`](IText.md).[`_getFontDeclaration`](IText.md#_getfontdeclaration)

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

#### Inherited from

[`IText`](IText.md).[`_getGraphemeBox`](IText.md#_getgraphemebox)

#### Source

src/shapes/Text/Text.ts:975

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

[`IText`](IText.md).[`_getSelectionForOffset`](IText.md#_getselectionforoffset)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:377

***

### \_getWidthOfCharSpacing()

> **\_getWidthOfCharSpacing**(): `number`

#### Returns

`number`

#### Inherited from

[`IText`](IText.md).[`_getWidthOfCharSpacing`](IText.md#_getwidthofcharspacing)

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

[`IText`](IText.md).[`_limitCacheSize`](IText.md#_limitcachesize)

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

#### Inherited from

[`IText`](IText.md).[`_measureLine`](IText.md#_measureline)

#### Source

src/shapes/Text/Text.ts:883

***

### \_measureWord()

> **\_measureWord**(`word`, `lineIndex`, `charOffset`): `number`

Helper function to measure a string of text, given its lineIndex and charIndex offset
It gets called when charBounds are not available yet.
Override if necessary
Use with [Textbox#wordSplit](../../../../api/classes/textbox/#wordsplit)

#### Parameters

• **word**: `string`[]

• **lineIndex**: `number`

• **charOffset**: `number`= `0`

#### Returns

`number`

#### Source

src/shapes/Textbox.ts:371

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

• **\_\_namedParameters**: [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`_mouseDownHandler`](IText.md#_mousedownhandler)

#### Source

src/shapes/IText/ITextClickBehavior.ts:127

***

### \_mouseDownHandlerBefore()

> **\_mouseDownHandlerBefore**(`__namedParameters`): `void`

Default event handler for the basic functionalities needed on mousedown:before
can be overridden to do something different.
Scope of this implementation is: verify the object is already selected when mousing down

#### Parameters

• **\_\_namedParameters**: [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`_mouseDownHandlerBefore`](IText.md#_mousedownhandlerbefore)

#### Source

src/shapes/IText/ITextClickBehavior.ts:162

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

[`IText`](IText.md).[`_moveCursorLeftOrRight`](IText.md#_movecursorleftorright)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:638

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

[`IText`](IText.md).[`_moveCursorUpOrDown`](IText.md#_movecursorupordown)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:477

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`_removeCacheCanvas`](IText.md#_removecachecanvas)

#### Source

src/shapes/Object/Object.ts:831

***

### \_removeExtraneousStyles()

> **\_removeExtraneousStyles**(): `void`

#### Returns

`void`

#### Overrides

`IText._removeExtraneousStyles`

#### Source

src/shapes/Textbox.ts:531

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

[`IText`](IText.md).[`_renderControls`](IText.md#_rendercontrols)

#### Todo

move to interactivity

#### Source

src/shapes/Object/InteractiveObject.ts:399

***

### \_renderCursor()

> **\_renderCursor**(`ctx`, `boundaries`, `selectionStart`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **boundaries**: `CursorBoundaries`

• **selectionStart**: `number`

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`_renderCursor`](IText.md#_rendercursor)

#### Source

src/shapes/IText/IText.ts:499

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`_setClippingProperties`](IText.md#_setclippingproperties)

#### Source

src/shapes/Object/Object.ts:1117

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `style`): `Object`

This function prepare the canvas for a ill style, and fill
need to be sent in as defined

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **style**: `Pick`\<[`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>, `"fill"`\>

with ill defined

#### Returns

`Object`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Inherited from

[`IText`](IText.md).[`_setFillStyles`](IText.md#_setfillstyles)

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

#### Inherited from

[`IText`](IText.md).[`_setStrokeStyles`](IText.md#_setstrokestyles)

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

[`IText`](IText.md).[`_setupCompositeOperation`](IText.md#_setupcompositeoperation)

#### Source

src/shapes/Object/Object.ts:1571

***

### \_splitTextIntoLines()

> **\_splitTextIntoLines**(`text`): `TextLinesInfo`

Gets lines of text to render in the Textbox. This function calculates
text wrapping on the fly every time it is called.

#### Parameters

• **text**: `string`

text to split

#### Returns

`TextLinesInfo`

Array of lines in the Textbox.

#### Overrides

[`IText`](IText.md).[`_splitTextIntoLines`](IText.md#_splittextintolines)

#### Source

src/shapes/Textbox.ts:515

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

[`IText`](IText.md).[`_toSVG`](IText.md#_tosvg)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:120

***

### \_wrapText()

> **\_wrapText**(`lines`, `desiredWidth`): `string`[][]

Wraps text using the 'width' property of Textbox. First this function
splits text on newlines, so we preserve newlines entered by the user.
Then it wraps each line using the width of the Textbox by calling
_wrapLine().

#### Parameters

• **lines**: `string`[]

The string array of text that is split into lines

• **desiredWidth**: `number`

width you want to wrap to

#### Returns

`string`[][]

Array of lines

#### Source

src/shapes/Textbox.ts:306

***

### abortCursorAnimation()

> **abortCursorAnimation**(): `void`

Aborts cursor animation, clears all timeouts and clear textarea context if necessary

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`abortCursorAnimation`](IText.md#abortcursoranimation)

#### Source

src/shapes/IText/ITextBehavior.ts:181

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`string`

#### Inherited from

[`IText`](IText.md).[`addPaintOrder`](IText.md#addpaintorder)

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

[`IText`](IText.md).[`animate`](IText.md#animate)

#### Tutorial

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Source

src/shapes/Object/AnimatableObject.ts:34

***

### blur()

> **blur**(): `void`

Override this method to customize cursor behavior on textbox blur

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`blur`](IText.md#blur)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:106

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](../type-aliases/TCornerPoint.md)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](../type-aliases/TCornerPoint.md)

#### Inherited from

[`IText`](IText.md).[`calcACoords`](IText.md#calcacoords)

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

[`IText`](IText.md).[`calcOCoords`](IText.md#calcocoords)

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

[`IText`](IText.md).[`calcOwnMatrix`](IText.md#calcownmatrix)

#### Source

src/shapes/Object/ObjectGeometry.ts:511

***

### calcTextHeight()

> **calcTextHeight**(): `number`

Calculate text box height

#### Returns

`number`

#### Inherited from

[`IText`](IText.md).[`calcTextHeight`](IText.md#calctextheight)

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

[`IText`](IText.md).[`calcTransformMatrix`](IText.md#calctransformmatrix)

#### Source

src/shapes/Object/ObjectGeometry.ts:483

***

### canDrop()

> **canDrop**(`e`): `boolean`

override this method to control whether instance should/shouldn't become a drop target

#### Parameters

• **e**: `DragEvent`

#### Returns

`boolean`

#### Inherited from

[`IText`](IText.md).[`canDrop`](IText.md#candrop)

#### Source

src/shapes/IText/ITextClickBehavior.ts:66

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

[`IText`](IText.md).[`cleanStyle`](IText.md#cleanstyle)

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

[`IText`](IText.md).[`clearContextTop`](IText.md#clearcontexttop)

#### Todo

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Source

src/shapes/Object/InteractiveObject.ts:589

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

[`IText`](IText.md).[`clone`](IText.md#clone)

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

[`IText`](IText.md).[`cloneAsImage`](IText.md#cloneasimage)

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

#### Inherited from

[`IText`](IText.md).[`complexity`](IText.md#complexity)

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

[`IText`](IText.md).[`containsPoint`](IText.md#containspoint)

#### Source

src/shapes/Object/ObjectGeometry.ts:269

***

### copy()

> **copy**(): `void`

Copies selected text

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`copy`](IText.md#copy)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:295

***

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`dispose`](IText.md#dispose)

#### Source

src/shapes/IText/IText.ts:695

***

### doubleClickHandler()

> **doubleClickHandler**(`options`): `void`

Default handler for double click, select a word

#### Parameters

• **options**: [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`doubleClickHandler`](IText.md#doubleclickhandler)

#### Source

src/shapes/IText/ITextClickBehavior.ts:102

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

[`IText`](IText.md).[`drawBorders`](IText.md#drawborders)

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

[`IText`](IText.md).[`drawCacheOnCanvas`](IText.md#drawcacheoncanvas)

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

[`IText`](IText.md).[`drawClipPathOnCache`](IText.md#drawclippathoncache)

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

[`IText`](IText.md).[`drawControls`](IText.md#drawcontrols)

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

[`IText`](IText.md).[`drawControlsConnectingLines`](IText.md#drawcontrolsconnectinglines)

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

[`IText`](IText.md).[`drawObject`](IText.md#drawobject)

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

[`IText`](IText.md).[`drawSelectionBackground`](IText.md#drawselectionbackground)

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

#### Inherited from

[`IText`](IText.md).[`enlargeSpaces`](IText.md#enlargespaces)

#### Source

src/shapes/Text/Text.ts:483

***

### enterEditing()

> **enterEditing**(`e`?): `void`

Enters editing state

#### Parameters

• **e?**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`enterEditing`](IText.md#enterediting)

#### Source

src/shapes/IText/ITextBehavior.ts:378

***

### exitEditing()

> **exitEditing**(): [`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

Exits from editing state and fires relevant events

#### Returns

[`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`IText`](IText.md).[`exitEditing`](IText.md#exitediting)

#### Source

src/shapes/IText/ITextBehavior.ts:681

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`, `S`\>(`other`, `strict`?): `AncestryComparison`\<`S`\>

Compare ancestors

#### Type parameters

• **T** extends [`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

• **S** extends `boolean`

#### Parameters

• **other**: `T`

• **strict?**: `S`

finds only ancestors that are objects (without canvas)

#### Returns

`AncestryComparison`\<`S`\>

an object that represent the ancestry situation.

#### Inherited from

[`IText`](IText.md).[`findCommonAncestors`](IText.md#findcommonancestors)

#### Source

src/shapes/Object/StackedObject.ts:90

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

[`IText`](IText.md).[`findLineBoundaryLeft`](IText.md#findlineboundaryleft)

#### Source

src/shapes/IText/ITextBehavior.ts:282

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

[`IText`](IText.md).[`findLineBoundaryRight`](IText.md#findlineboundaryright)

#### Source

src/shapes/IText/ITextBehavior.ts:299

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

[`IText`](IText.md).[`findWordBoundaryLeft`](IText.md#findwordboundaryleft)

#### Source

src/shapes/IText/ITextBehavior.ts:234

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

[`IText`](IText.md).[`findWordBoundaryRight`](IText.md#findwordboundaryright)

#### Source

src/shapes/IText/ITextBehavior.ts:258

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

[`IText`](IText.md).[`fire`](IText.md#fire)

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

[`IText`](IText.md).[`forEachControl`](IText.md#foreachcontrol)

#### Source

src/shapes/Object/InteractiveObject.ts:317

***

### fromGraphemeToStringSelection()

> **fromGraphemeToStringSelection**(`start`, `end`, `graphemes`): `Object`

convert from fabric to textarea values

#### Parameters

• **start**: `number`

• **end**: `number`

• **graphemes**: `string`[]

#### Returns

`Object`

##### selectionEnd

> **selectionEnd**: `number` = `graphemeStart`

##### selectionStart

> **selectionStart**: `number` = `graphemeStart`

#### Inherited from

[`IText`](IText.md).[`fromGraphemeToStringSelection`](IText.md#fromgraphemetostringselection)

#### Source

src/shapes/IText/ITextBehavior.ts:481

***

### fromStringToGraphemeSelection()

> **fromStringToGraphemeSelection**(`start`, `end`, `text`): `Object`

convert from textarea to grapheme indexes

#### Parameters

• **start**: `number`

• **end**: `number`

• **text**: `string`

#### Returns

`Object`

##### selectionEnd

> **selectionEnd**: `number` = `graphemeStart`

##### selectionStart

> **selectionStart**: `number` = `graphemeStart`

#### Inherited from

[`IText`](IText.md).[`fromStringToGraphemeSelection`](IText.md#fromstringtographemeselection)

#### Source

src/shapes/IText/ITextBehavior.ts:464

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

[`IText`](IText.md).[`get`](IText.md#get)

#### Source

src/CommonMethods.ts:59

***

### get2DCursorLocation()

> **get2DCursorLocation**(`selectionStart`?, `skipWrapping`?): `Object`

Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)

#### Parameters

• **selectionStart?**: `number`= `undefined`

Optional index. When not given, current selectionStart is used.

• **skipWrapping?**: `boolean`

consider the location for unwrapped lines. useful to manage styles.

#### Returns

`Object`

##### charIndex

> **charIndex**: `number` = `selectionStart`

##### lineIndex

> **lineIndex**: `number` = `i`

#### Inherited from

[`IText`](IText.md).[`get2DCursorLocation`](IText.md#get2dcursorlocation)

#### Source

src/shapes/IText/IText.ts:340

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| `Object`

#### Returns

`undefined` \| `Object`

#### Inherited from

[`IText`](IText.md).[`getActiveControl`](IText.md#getactivecontrol)

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

[`IText`](IText.md).[`getAncestors`](IText.md#getancestors)

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

[`IText`](IText.md).[`getBoundingRect`](IText.md#getboundingrect)

#### Source

src/shapes/Object/ObjectGeometry.ts:330

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[`IText`](IText.md).[`getCanvasRetinaScaling`](IText.md#getcanvasretinascaling)

#### Source

src/shapes/Object/ObjectGeometry.ts:387

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](Point.md)

#### Inherited from

[`IText`](IText.md).[`getCenterPoint`](IText.md#getcenterpoint)

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

[`IText`](IText.md).[`getCompleteStyleDeclaration`](IText.md#getcompletestyledeclaration)

#### Source

src/shapes/Text/StyledText.ts:279

***

### getCoords()

> **getCoords**(): [`Point`](Point.md)[]

#### Returns

[`Point`](Point.md)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

[`IText`](IText.md).[`getCoords`](IText.md#getcoords)

#### Source

src/shapes/Object/ObjectGeometry.ts:191

***

### getCurrentCharColor()

> **getCurrentCharColor**(): `null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

High level function to know the color of the cursor.
the currentChar is the one that precedes the cursor
Returns color (fill) of char at the current cursor
if the text object has a pattern or gradient for filler, it will return that.
Unused by the library, is for the end user

#### Returns

`null` \| `string` \| [`TFiller`](../type-aliases/TFiller.md)

Character color (fill)

#### Inherited from

[`IText`](IText.md).[`getCurrentCharColor`](IText.md#getcurrentcharcolor)

#### Source

src/shapes/IText/IText.ts:679

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

#### Inherited from

[`IText`](IText.md).[`getCurrentCharFontSize`](IText.md#getcurrentcharfontsize)

#### Source

src/shapes/IText/IText.ts:666

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

[`IText`](IText.md).[`getDownCursorOffset`](IText.md#getdowncursoroffset)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:345

***

### getGraphemeDataForRender()

> **getGraphemeDataForRender**(`lines`): [`GraphemeData`](../type-aliases/GraphemeData.md)

For each line of text terminated by an hard line stop,
measure each word width and extract the largest word from all.
The returned words here are the one that at the end will be rendered.

#### Parameters

• **lines**: `string`[]

the lines we need to measure

#### Returns

[`GraphemeData`](../type-aliases/GraphemeData.md)

#### Source

src/shapes/Textbox.ts:325

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

[`IText`](IText.md).[`getHeightOfChar`](IText.md#getheightofchar)

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

#### Inherited from

[`IText`](IText.md).[`getHeightOfLine`](IText.md#getheightofline)

#### Source

src/shapes/Text/Text.ts:1017

***

### getMinWidth()

> **getMinWidth**(): `number`

#### Returns

`number`

#### Source

src/shapes/Textbox.ts:527

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[`IText`](IText.md).[`getObjectOpacity`](IText.md#getobjectopacity)

#### Source

src/shapes/Object/Object.ts:690

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](Point.md)

#### Inherited from

[`IText`](IText.md).[`getObjectScaling`](IText.md#getobjectscaling)

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

[`IText`](IText.md).[`getPointByOrigin`](IText.md#getpointbyorigin)

#### Source

src/shapes/Object/ObjectOrigin.ts:199

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](Point.md)

#### Inherited from

[`IText`](IText.md).[`getRelativeCenterPoint`](IText.md#getrelativecenterpoint)

#### Source

src/shapes/Object/ObjectOrigin.ts:185

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](FabricObject.md#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](Textbox.md#getx)

#### Inherited from

[`IText`](IText.md).[`getRelativeX`](IText.md#getrelativex)

#### Source

src/shapes/Object/ObjectGeometry.ts:102

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x,y position according to object's [originX](FabricObject.md#originx) [originY](FabricObject.md#originy) properties in parent's coordinate plane

#### Inherited from

[`IText`](IText.md).[`getRelativeXY`](IText.md#getrelativexy)

#### Source

src/shapes/Object/ObjectGeometry.ts:163

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](FabricObject.md#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](Textbox.md#gety)

#### Inherited from

[`IText`](IText.md).[`getRelativeY`](IText.md#getrelativey)

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

[`IText`](IText.md).[`getScaledHeight`](IText.md#getscaledheight)

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

[`IText`](IText.md).[`getScaledWidth`](IText.md#getscaledwidth)

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Source

src/shapes/Object/ObjectGeometry.ts:339

***

### getSelectedText()

> **getSelectedText**(): `string`

Returns selected text

#### Returns

`string`

#### Inherited from

[`IText`](IText.md).[`getSelectedText`](IText.md#getselectedtext)

#### Source

src/shapes/IText/ITextBehavior.ts:225

***

### getSelectionStartFromPointer()

> **getSelectionStartFromPointer**(`e`): `number`

Returns index of a character corresponding to where an object was clicked

#### Parameters

• **e**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

Event object

#### Returns

`number`

Index of a character

#### Inherited from

[`IText`](IText.md).[`getSelectionStartFromPointer`](IText.md#getselectionstartfrompointer)

#### Source

src/shapes/IText/ITextClickBehavior.ts:237

***

### getSelectionStyles()

> **getSelectionStyles**(`startIndex`, `endIndex`, `complete`?): `Partial`\<[`CompleteTextStyleDeclaration`](../type-aliases/CompleteTextStyleDeclaration.md)\>[]

Gets style of a current selection/cursor (at the start position)
if startIndex or endIndex are not provided, selectionStart or selectionEnd will be used.

#### Parameters

• **startIndex**: `number`= `undefined`

Start index to get styles at

• **endIndex**: `number`= `undefined`

End index to get styles at, if not specified selectionEnd or startIndex + 1

• **complete?**: `boolean`

get full style or not

#### Returns

`Partial`\<[`CompleteTextStyleDeclaration`](../type-aliases/CompleteTextStyleDeclaration.md)\>[]

styles an array with one, zero or more Style objects

#### Inherited from

[`IText`](IText.md).[`getSelectionStyles`](IText.md#getselectionstyles)

#### Source

src/shapes/IText/IText.ts:313

***

### getSvgCommons()

> **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> & `Object`

#### Returns

`string`

#### Inherited from

[`IText`](IText.md).[`getSvgCommons`](IText.md#getsvgcommons)

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

[`IText`](IText.md).[`getSvgFilter`](IText.md#getsvgfilter)

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

[`IText`](IText.md).[`getSvgStyles`](IText.md#getsvgstyles)

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

[`IText`](IText.md).[`getSvgTransform`](IText.md#getsvgtransform)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:103

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](../type-aliases/TDegree.md)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](../type-aliases/TDegree.md)

#### Inherited from

[`IText`](IText.md).[`getTotalAngle`](IText.md#gettotalangle)

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

[`IText`](IText.md).[`getTotalObjectScaling`](IText.md#gettotalobjectscaling)

#### Source

src/shapes/Object/Object.ts:676

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

[`IText`](IText.md).[`getUpCursorOffset`](IText.md#getupcursoroffset)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:390

***

### getValueOfPropertyAt()

> **getValueOfPropertyAt**\<`T`\>(`lineIndex`, `charIndex`, `property`): [`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>\[`T`\]

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

[`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>\[`T`\]

the value of 'property'

#### Inherited from

[`IText`](IText.md).[`getValueOfPropertyAt`](IText.md#getvalueofpropertyat)

#### Source

src/shapes/Text/Text.ts:1531

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](../type-aliases/TMat2D.md)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](../type-aliases/TMat2D.md)

#### Inherited from

[`IText`](IText.md).[`getViewportTransform`](IText.md#getviewporttransform)

#### Source

src/shapes/Object/ObjectGeometry.ts:405

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](FabricObject.md#originx) property in canvas coordinate plane

#### Inherited from

[`IText`](IText.md).[`getX`](IText.md#getx)

#### Source

src/shapes/Object/ObjectGeometry.ts:73

***

### getXY()

> **getXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x position according to object's [originX](FabricObject.md#originx) [originY](FabricObject.md#originy) properties in canvas coordinate plane

#### Inherited from

[`IText`](IText.md).[`getXY`](IText.md#getxy)

#### Source

src/shapes/Object/ObjectGeometry.ts:133

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](FabricObject.md#originy) property in canvas coordinate plane

#### Inherited from

[`IText`](IText.md).[`getY`](IText.md#gety)

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

#### Inherited from

[`IText`](IText.md).[`graphemeSplit`](IText.md#graphemesplit)

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

#### Inherited from

[`IText`](IText.md).[`handleFiller`](IText.md#handlefiller)

#### Source

src/shapes/Text/Text.ts:1268

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`, `strict`?): `boolean`

#### Type parameters

• **T** extends [`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

• **strict?**: `boolean`

checks only ancestors that are objects (without canvas)

#### Returns

`boolean`

#### Inherited from

[`IText`](IText.md).[`hasCommonAncestors`](IText.md#hascommonancestors)

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

[`IText`](IText.md).[`hasFill`](IText.md#hasfill)

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

[`IText`](IText.md).[`hasStroke`](IText.md#hasstroke)

#### Since

3.0.0

#### Source

src/shapes/Object/Object.ts:848

***

### initBehavior()

> **initBehavior**(): `void`

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`initBehavior`](IText.md#initbehavior)

#### Source

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

[`IText`](IText.md).[`initDelayedCursor`](IText.md#initdelayedcursor)

#### Source

src/shapes/IText/ITextBehavior.ts:173

***

### initHiddenTextarea()

> **initHiddenTextarea**(): `void`

Initializes hidden textarea (needed to bring up keyboard in iOS)

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`initHiddenTextarea`](IText.md#inithiddentextarea)

#### Source

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

• **copiedStyle?**: `Partial`\<[`CompleteTextStyleDeclaration`](../type-aliases/CompleteTextStyleDeclaration.md)\>[]

array of style objects

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`insertCharStyleObject`](IText.md#insertcharstyleobject)

#### Source

src/shapes/IText/ITextBehavior.ts:871

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

• **style**: `undefined` \| `Partial`\<[`CompleteTextStyleDeclaration`](../type-aliases/CompleteTextStyleDeclaration.md)\>[]

array of style objects

• **start**: `number`

• **end**: `number`= `start`

default to start + 1

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`insertChars`](IText.md#insertchars)

#### Source

src/shapes/IText/ITextBehavior.ts:1021

***

### insertNewStyleBlock()

> **insertNewStyleBlock**(`insertedText`, `start`, `copiedStyle`?): `void`

Inserts style object(s)

#### Parameters

• **insertedText**: `string`[]

Characters at the location where style is inserted

• **start**: `number`

cursor index for inserting style

• **copiedStyle?**: `Partial`\<[`CompleteTextStyleDeclaration`](../type-aliases/CompleteTextStyleDeclaration.md)\>[]

array of style objects to insert.

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`insertNewStyleBlock`](IText.md#insertnewstyleblock)

#### Source

src/shapes/IText/ITextBehavior.ts:929

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

[`IText`](IText.md).[`insertNewlineStyleObject`](IText.md#insertnewlinestyleobject)

#### Source

src/shapes/IText/ITextBehavior.ts:802

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

[`IText`](IText.md).[`intersectsWithObject`](IText.md#intersectswithobject)

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

[`IText`](IText.md).[`intersectsWithRect`](IText.md#intersectswithrect)

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

[`IText`](IText.md).[`isCacheDirty`](IText.md#iscachedirty)

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

[`IText`](IText.md).[`isContainedWithinObject`](IText.md#iscontainedwithinobject)

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

[`IText`](IText.md).[`isContainedWithinRect`](IText.md#iscontainedwithinrect)

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

[`IText`](IText.md).[`isControlVisible`](IText.md#iscontrolvisible)

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

[`IText`](IText.md).[`isDescendantOf`](IText.md#isdescendantof)

#### Source

src/shapes/Object/StackedObject.ts:52

***

### isEmptyStyles()

> **isEmptyStyles**(`lineIndex`): `boolean`

Returns true if object has no styling or no styling in a line

#### Parameters

• **lineIndex**: `number`

, lineIndex is on wrapped lines.

#### Returns

`boolean`

#### Overrides

[`IText`](IText.md).[`isEmptyStyles`](IText.md#isemptystyles)

#### Source

src/shapes/Textbox.ts:190

***

### isEndOfWrapping()

> **isEndOfWrapping**(`lineIndex`): `boolean`

Detect if the text line is ended with an hard break
text and itext do not have wrapping, return false

#### Parameters

• **lineIndex**: `number`

text to split

#### Returns

`boolean`

#### Overrides

[`IText`](IText.md).[`isEndOfWrapping`](IText.md#isendofwrapping)

#### Source

src/shapes/Textbox.ts:482

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

• **T** extends [`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[`IText`](IText.md).[`isInFrontOf`](IText.md#isinfrontof)

#### Source

src/shapes/Object/StackedObject.ts:169

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`IText`](IText.md).[`isNotVisible`](IText.md#isnotvisible)

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

[`IText`](IText.md).[`isOnScreen`](IText.md#isonscreen)

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

[`IText`](IText.md).[`isOverlapping`](IText.md#isoverlapping)

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

[`IText`](IText.md).[`isPartiallyOnScreen`](IText.md#ispartiallyonscreen)

#### Source

src/shapes/Object/ObjectGeometry.ts:308

***

### isTripleClick()

> **isTripleClick**(`newPointer`): `boolean`

#### Parameters

• **newPointer**: [`XY`](../interfaces/XY.md)

#### Returns

`boolean`

#### Inherited from

[`IText`](IText.md).[`isTripleClick`](IText.md#istripleclick)

#### Source

src/shapes/IText/ITextClickBehavior.ts:90

***

### isType()

> **isType**(...`types`): `boolean`

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

• ...**types**: `string`[]

#### Returns

`boolean`

#### Inherited from

[`IText`](IText.md).[`isType`](IText.md#istype)

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

#### Inherited from

[`IText`](IText.md).[`measureLine`](IText.md#measureline)

#### Source

src/shapes/Text/Text.ts:866

***

### missingNewlineOffset()

> **missingNewlineOffset**(`lineIndex`, `skipWrapping`?): `0` \| `1`

Detect if a line has a linebreak and so we need to account for it when moving
and counting style.
This is important only for splitByGrapheme at the end of wrapping.
If we are not wrapping the offset is always 1

#### Parameters

• **lineIndex**: `number`

• **skipWrapping?**: `boolean`

#### Returns

`0` \| `1`

Number

#### Overrides

[`IText`](IText.md).[`missingNewlineOffset`](IText.md#missingnewlineoffset)

#### Source

src/shapes/Textbox.ts:501

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

[`IText`](IText.md).[`moveCursorDown`](IText.md#movecursordown)

#### Source

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

[`IText`](IText.md).[`moveCursorLeft`](IText.md#movecursorleft)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:535

***

### moveCursorLeftWithShift()

> **moveCursorLeftWithShift**(`e`): `undefined` \| `boolean`

Moves cursor left while keeping selection

#### Parameters

• **e**: `KeyboardEvent`

#### Returns

`undefined` \| `boolean`

#### Inherited from

[`IText`](IText.md).[`moveCursorLeftWithShift`](IText.md#movecursorleftwithshift)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:607

***

### moveCursorLeftWithoutShift()

> **moveCursorLeftWithoutShift**(`e`): `boolean`

Moves cursor left without keeping selection

#### Parameters

• **e**: `KeyboardEvent`

#### Returns

`boolean`

#### Inherited from

[`IText`](IText.md).[`moveCursorLeftWithoutShift`](IText.md#movecursorleftwithoutshift)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:587

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

[`IText`](IText.md).[`moveCursorRight`](IText.md#movecursorright)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:623

***

### moveCursorRightWithShift()

> **moveCursorRightWithShift**(`e`): `undefined` \| `boolean`

Moves cursor right while keeping selection

#### Parameters

• **e**: `KeyboardEvent`

#### Returns

`undefined` \| `boolean`

#### Inherited from

[`IText`](IText.md).[`moveCursorRightWithShift`](IText.md#movecursorrightwithshift)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:655

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

[`IText`](IText.md).[`moveCursorRightWithoutShift`](IText.md#movecursorrightwithoutshift)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:671

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

[`IText`](IText.md).[`moveCursorUp`](IText.md#movecursorup)

#### Source

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

[`IText`](IText.md).[`moveCursorWithShift`](IText.md#movecursorwithshift)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:503

***

### moveCursorWithoutShift()

> **moveCursorWithoutShift**(`offset`): `boolean`

Moves cursor up without shift

#### Parameters

• **offset**: `number`

#### Returns

`boolean`

#### Inherited from

[`IText`](IText.md).[`moveCursorWithoutShift`](IText.md#movecursorwithoutshift)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:520

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

[`IText`](IText.md).[`needsItsOwnCache`](IText.md#needsitsowncache)

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

[`IText`](IText.md).[`off`](IText.md#off)

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

[`IText`](IText.md).[`off`](IText.md#off)

##### Source

src/Observable.ts:125

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

[`IText`](IText.md).[`off`](IText.md#off)

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

[`IText`](IText.md).[`on`](IText.md#on)

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

[`IText`](IText.md).[`on`](IText.md#on)

##### Source

src/Observable.ts:27

***

### onCompositionEnd()

> **onCompositionEnd**(): `void`

Composition end

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`onCompositionEnd`](IText.md#oncompositionend)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:281

***

### onCompositionStart()

> **onCompositionStart**(): `void`

Composition start

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`onCompositionStart`](IText.md#oncompositionstart)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:274

***

### onCompositionUpdate()

> **onCompositionUpdate**(`__namedParameters`): `void`

#### Parameters

• **\_\_namedParameters**: `CompositionEvent`

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`onCompositionUpdate`](IText.md#oncompositionupdate)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:285

***

### onDeselect()

> **onDeselect**(`options`?): `boolean`

#### Parameters

• **options?**

• **options\.e?**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

• **options\.object?**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Returns

`boolean`

#### Inherited from

[`IText`](IText.md).[`onDeselect`](IText.md#ondeselect)

#### Source

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

[`IText`](IText.md).[`onDragStart`](IText.md#ondragstart)

#### See

also DraggableTextDelegate#isActive

#### Source

src/shapes/IText/ITextClickBehavior.ts:59

***

### onInput()

> **onInput**(`this`, `e`): `void`

Handles onInput event

#### Parameters

• **this**: [`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\> & `Object`

• **e**: `Event`

Event object

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`onInput`](IText.md#oninput)

#### Source

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

[`IText`](IText.md).[`onKeyDown`](IText.md#onkeydown)

#### Source

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

[`IText`](IText.md).[`onKeyUp`](IText.md#onkeyup)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:147

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

[`IText`](IText.md).[`onSelect`](IText.md#onselect)

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

[`IText`](IText.md).[`once`](IText.md#once)

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

[`IText`](IText.md).[`once`](IText.md#once)

##### Source

src/Observable.ts:66

***

### paste()

> **paste**(): `void`

Pastes text

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`paste`](IText.md#paste)

#### Source

src/shapes/IText/ITextKeyBehavior.ts:317

***

### removeChars()

> **removeChars**(`start`, `end`): `void`

Removes characters from start/end
start/end ar per grapheme position in _text array.

#### Parameters

• **start**: `number`

• **end**: `number`= `undefined`

default to start + 1

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`removeChars`](IText.md#removechars)

#### Source

src/shapes/IText/ITextBehavior.ts:999

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

[`IText`](IText.md).[`removeStyle`](IText.md#removestyle)

#### Source

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

[`IText`](IText.md).[`removeStyleFromTo`](IText.md#removestylefromto)

#### Source

src/shapes/IText/ITextBehavior.ts:717

***

### renderCache()

> **renderCache**(`options`?): `void`

#### Parameters

• **options?**: `any`

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`renderCache`](IText.md#rendercache)

#### Source

src/shapes/Object/Object.ts:817

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

#### Inherited from

[`IText`](IText.md).[`renderCursor`](IText.md#rendercursor)

#### Source

src/shapes/IText/IText.ts:495

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

#### Inherited from

[`IText`](IText.md).[`renderCursorAt`](IText.md#rendercursorat)

#### Source

src/shapes/IText/IText.ts:485

***

### renderCursorOrSelection()

> **renderCursorOrSelection**(): `void`

Renders cursor or selection (depending on what exists)
it does on the contextTop. If contextTop is not available, do nothing.

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`renderCursorOrSelection`](IText.md#rendercursororselection)

#### Source

src/shapes/IText/IText.ts:375

***

### renderDragSourceEffect()

> **renderDragSourceEffect**(): `void`

Renders drag start text selection

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`renderDragSourceEffect`](IText.md#renderdragsourceeffect)

#### Source

src/shapes/IText/IText.ts:555

***

### renderDropTargetEffect()

> **renderDropTargetEffect**(`e`): `void`

#### Parameters

• **e**: `DragEvent`

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`renderDropTargetEffect`](IText.md#renderdroptargeteffect)

#### Source

src/shapes/IText/IText.ts:565

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

#### Inherited from

[`IText`](IText.md).[`renderSelection`](IText.md#renderselection)

#### Source

src/shapes/IText/IText.ts:540

***

### restartCursorIfNeeded()

> **restartCursorIfNeeded**(): `void`

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`restartCursorIfNeeded`](IText.md#restartcursorifneeded)

#### Source

src/shapes/IText/ITextBehavior.ts:200

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

[`IText`](IText.md).[`rotate`](IText.md#rotate)

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

[`IText`](IText.md).[`scale`](IText.md#scale)

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

[`IText`](IText.md).[`scaleToHeight`](IText.md#scaletoheight)

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

[`IText`](IText.md).[`scaleToWidth`](IText.md#scaletowidth)

#### Source

src/shapes/Object/ObjectGeometry.ts:368

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

[`IText`](IText.md).[`searchWordBoundary`](IText.md#searchwordboundary)

#### Source

src/shapes/IText/ITextBehavior.ts:317

***

### selectAll()

> **selectAll**(): [`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

Selects entire text

#### Returns

[`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`IText`](IText.md).[`selectAll`](IText.md#selectall)

#### Source

src/shapes/IText/ITextBehavior.ts:213

***

### selectLine()

> **selectLine**(`selectionStart`): [`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

Selects a line based on the index

#### Parameters

• **selectionStart**: `number`

Index of a character

#### Returns

[`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`IText`](IText.md).[`selectLine`](IText.md#selectline)

#### Source

src/shapes/IText/ITextBehavior.ts:363

***

### selectWord()

> **selectWord**(`selectionStart`): `void`

Selects a word based on the index

#### Parameters

• **selectionStart**: `number`

Index of a character

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`selectWord`](IText.md#selectword)

#### Source

src/shapes/IText/ITextBehavior.ts:342

***

### set()

> **set**(`key`, `value`?): [`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **key**: `any`

• **value?**: `any`

#### Returns

[`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`IText`](IText.md).[`set`](IText.md#set)

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

[`IText`](IText.md).[`setControlVisible`](IText.md#setcontrolvisible)

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

[`IText`](IText.md).[`setControlsVisibility`](IText.md#setcontrolsvisibility)

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

[`IText`](IText.md).[`setCoords`](IText.md#setcoords)

#### Source

src/shapes/Object/InteractiveObject.ts:307

***

### setCursorByClick()

> **setCursorByClick**(`e`): `void`

Changes cursor location in a text depending on passed pointer (x/y) object

#### Parameters

• **e**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

Event object

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`setCursorByClick`](IText.md#setcursorbyclick)

#### Source

src/shapes/IText/ITextClickBehavior.ts:216

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

[`IText`](IText.md).[`setOnGroup`](IText.md#setongroup)

#### Source

src/shapes/Object/Object.ts:1562

***

### setPathInfo()

> **setPathInfo**(): `void`

If text has a path, it will add the extra information needed
for path and text calculations

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`setPathInfo`](IText.md#setpathinfo)

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

[`IText`](IText.md).[`setPositionByOrigin`](IText.md#setpositionbyorigin)

#### Source

src/shapes/Object/ObjectOrigin.ts:214

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](../../../../api/classes/textbox/#setx)

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`setRelativeX`](IText.md#setrelativex)

#### Source

src/shapes/Object/ObjectGeometry.ts:110

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/textbox/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

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

[`IText`](IText.md).[`setRelativeXY`](IText.md#setrelativexy)

#### Source

src/shapes/Object/ObjectGeometry.ts:173

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](../../../../api/classes/textbox/#sety)

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`setRelativeY`](IText.md#setrelativey)

#### Source

src/shapes/Object/ObjectGeometry.ts:126

***

### setSelectionEnd()

> **setSelectionEnd**(`index`): `void`

Sets selection end (right boundary of a selection)

#### Parameters

• **index**: `number`

Index to set selection end to

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`setSelectionEnd`](IText.md#setselectionend)

#### Source

src/shapes/IText/IText.ts:263

***

### setSelectionStart()

> **setSelectionStart**(`index`): `void`

Sets selection start (left boundary of a selection)

#### Parameters

• **index**: `number`

Index to set selection start to

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`setSelectionStart`](IText.md#setselectionstart)

#### Source

src/shapes/IText/IText.ts:254

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

[`IText`](IText.md).[`setSelectionStartEndWithShift`](IText.md#setselectionstartendwithshift)

#### Source

src/shapes/IText/ITextBehavior.ts:1048

***

### setSelectionStyles()

> **setSelectionStyles**(`styles`?, `startIndex`?, `endIndex`?): `void`

Sets style of a current selection, if no selection exist, do not set anything.

#### Parameters

• **styles?**: `object`

Styles object

• **startIndex?**: `number`= `undefined`

Start index to get styles at

• **endIndex?**: `number`= `undefined`

End index to get styles at, if not specified selectionEnd or startIndex + 1

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`setSelectionStyles`](IText.md#setselectionstyles)

#### Source

src/shapes/IText/IText.ts:327

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

[`IText`](IText.md).[`setSubscript`](IText.md#setsubscript)

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

#### Inherited from

[`IText`](IText.md).[`setSuperscript`](IText.md#setsuperscript)

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

[`IText`](IText.md).[`setX`](IText.md#setx)

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

[`IText`](IText.md).[`setXY`](IText.md#setxy)

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

[`IText`](IText.md).[`setY`](IText.md#sety)

#### Source

src/shapes/Object/ObjectGeometry.ts:94

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

[`IText`](IText.md).[`shiftLineStyles`](IText.md#shiftlinestyles)

#### Source

src/shapes/IText/ITextBehavior.ts:779

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

[`IText`](IText.md).[`shouldCache`](IText.md#shouldcache)

#### Source

src/shapes/Object/Object.ts:900

***

### shouldStartDragging()

> **shouldStartDragging**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`IText`](IText.md).[`shouldStartDragging`](IText.md#shouldstartdragging)

#### Source

src/shapes/IText/ITextClickBehavior.ts:51

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

[`IText`](IText.md).[`strokeBorders`](IText.md#strokeborders)

#### Source

src/shapes/Object/InteractiveObject.ts:363

***

### styleHas()

> **styleHas**(`property`, `lineIndex`): `boolean`

Returns true if object has a style property or has it on a specified line

#### Parameters

• **property**: `StylePropertiesType`

• **lineIndex**: `number`

#### Returns

`boolean`

#### Overrides

[`IText`](IText.md).[`styleHas`](IText.md#stylehas)

#### Source

src/shapes/Textbox.ts:175

***

### toCanvasElement()

> **toCanvasElement**(`options`?): `HTMLCanvasElement`

block cursor/selection logic while rendering the exported canvas

#### Parameters

• **options?**: `ObjectToCanvasElementOptions`

#### Returns

`HTMLCanvasElement`

#### Inherited from

[`IText`](IText.md).[`toCanvasElement`](IText.md#tocanvaselement)

#### Todo

this workaround should be replaced with a more robust solution

#### Source

src/shapes/IText/IText.ts:363

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

[`IText`](IText.md).[`toClipPathSVG`](IText.md#toclippathsvg)

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

[`IText`](IText.md).[`toDataURL`](IText.md#todataurl)

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

[`IText`](IText.md).[`toDatalessObject`](IText.md#todatalessobject)

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

[`IText`](IText.md).[`toJSON`](IText.md#tojson)

#### Source

src/shapes/Object/Object.ts:1521

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

• **T** extends `Omit`\<`Props` & [`TClassProperties`](../type-aliases/TClassProperties.md)\<[`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\>

• **K** extends `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[]= `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

object representation of an instance

#### Overrides

[`IText`](IText.md).[`toObject`](IText.md#toobject)

#### Method

toObject

#### Source

src/shapes/Textbox.ts:555

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

[`IText`](IText.md).[`toSVG`](IText.md#tosvg)

#### Source

src/shapes/Object/FabricObjectSVGExportMixin.ts:129

***

### toString()

> **toString**(): `string`

Returns string representation of an instance

#### Returns

`string`

String representation of text object

#### Inherited from

[`IText`](IText.md).[`toString`](IText.md#tostring)

#### Source

src/shapes/Text/Text.ts:573

***

### toggle()

> **toggle**(`property`): [`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`Textbox`](Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`IText`](IText.md).[`toggle`](IText.md#toggle)

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

[`IText`](IText.md).[`transform`](IText.md#transform)

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

[`IText`](IText.md).[`transformMatrixKey`](IText.md#transformmatrixkey)

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

[`IText`](IText.md).[`translateToCenterPoint`](IText.md#translatetocenterpoint)

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

[`IText`](IText.md).[`translateToGivenOrigin`](IText.md#translatetogivenorigin)

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

[`IText`](IText.md).[`translateToOriginPoint`](IText.md#translatetooriginpoint)

#### Source

src/shapes/Object/ObjectOrigin.ts:152

***

### tripleClickHandler()

> **tripleClickHandler**(`options`): `void`

Default handler for triple click, select a line

#### Parameters

• **options**: [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`tripleClickHandler`](IText.md#tripleclickhandler)

#### Source

src/shapes/IText/ITextClickBehavior.ts:112

***

### updateSelectionOnMouseMove()

> **updateSelectionOnMouseMove**(`e`): `void`

called by [Canvas#textEditingManager](../../../../api/classes/canvas/#texteditingmanager)

#### Parameters

• **e**: [`TPointerEvent`](../type-aliases/TPointerEvent.md)

#### Returns

`void`

#### Inherited from

[`IText`](IText.md).[`updateSelectionOnMouseMove`](IText.md#updateselectiononmousemove)

#### Source

src/shapes/IText/ITextBehavior.ts:410

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

[`IText`](IText.md).[`willDrawShadow`](IText.md#willdrawshadow)

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Source

src/shapes/Object/Object.ts:913

***

### wordSplit()

> **wordSplit**(`value`): `string`[]

Override this method to customize word splitting
Use with [Textbox#_measureWord](../../../../api/classes/textbox/#_measureword)

#### Parameters

• **value**: `string`

#### Returns

`string`[]

array of words

#### Source

src/shapes/Textbox.ts:395

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

[`IText`](IText.md).[`_fromObject`](IText.md#_fromobject)

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

#### Inherited from

[`IText`](IText.md).[`fromElement`](IText.md#fromelement)

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

#### Inherited from

[`IText`](IText.md).[`fromObject`](IText.md#fromobject)

#### Source

src/shapes/Text/Text.ts:1901

***

### getDefaults()

> **`static`** **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

[`IText`](IText.md).[`getDefaults`](IText.md#getdefaults)

#### Source

src/shapes/Textbox.ts:97
