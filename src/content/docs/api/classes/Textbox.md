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

- [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

## Type Parameters

• **Props** *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`TextboxProps`](/api/interfaces/textboxprops/)\> = `Partial`\<[`TextboxProps`](/api/interfaces/textboxprops/)\>

• **SProps** *extends* [`SerializedTextboxProps`](/api/interfaces/serializedtextboxprops/) = [`SerializedTextboxProps`](/api/interfaces/serializedtextboxprops/)

• **EventSpec** *extends* `ITextEvents` = `ITextEvents`

## Implements

- `UniqueTextboxProps`

## Constructors

### new Textbox()

> **new Textbox**\<`Props`, `SProps`, `EventSpec`\>(`text`, `options`?): [`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

Constructor

#### Parameters

• **text**: `string`

Text string

• **options?**: `Props`

Options object

#### Returns

[`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

[`IText`](/api/classes/itext/).[`constructor`](/api/classes/itext/#constructors)

#### Defined in

[src/shapes/Textbox.ts:110](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L110)

## Properties

### MIN\_TEXT\_WIDTH

> **MIN\_TEXT\_WIDTH**: `number`

contains the min text width to avoid getting 0

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`MIN_TEXT_WIDTH`](/api/classes/itext/#min_text_width)

#### Defined in

[src/shapes/Text/Text.ts:389](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L389)

***

### \_\_corner?

> `optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[`IText`](/api/classes/itext/).[`__corner`](/api/classes/itext/#__corner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:104](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L104)

***

### \_\_lineHeights

> **\_\_lineHeights**: `number`[]

#### Inherited from

[`IText`](/api/classes/itext/).[`__lineHeights`](/api/classes/itext/#__lineheights)

#### Defined in

[src/shapes/Text/Text.ts:409](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L409)

***

### \_\_lineWidths

> **\_\_lineWidths**: `number`[]

#### Inherited from

[`IText`](/api/classes/itext/).[`__lineWidths`](/api/classes/itext/#__linewidths)

#### Defined in

[src/shapes/Text/Text.ts:410](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L410)

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[`IText`](/api/classes/itext/).[`_controlsVisibility`](/api/classes/itext/#_controlsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:111](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L111)

***

### \_fontSizeMult

> **\_fontSizeMult**: `number`

Text Line proportion to font Size (in pixels)

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`_fontSizeMult`](/api/classes/itext/#_fontsizemult)

#### Defined in

[src/shapes/Text/Text.ts:337](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L337)

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

[`IText`](/api/classes/itext/).[`_scaling`](/api/classes/itext/#_scaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:133](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L133)

***

### \_styleMap

> **\_styleMap**: `StyleMap`

#### Defined in

[src/shapes/Textbox.ts:88](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L88)

***

### \_text

> **\_text**: `string`[]

#### Inherited from

[`IText`](/api/classes/itext/).[`_text`](/api/classes/itext/#_text)

#### Defined in

[src/shapes/Text/Text.ts:407](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L407)

***

### \_textLines

> **\_textLines**: `string`[][]

same as textlines, but each line is an array of graphemes as split by splitByGrapheme

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`_textLines`](/api/classes/itext/#_textlines)

#### Defined in

[src/shapes/Text/Text.ts:404](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L404)

***

### \_unwrappedTextLines

> **\_unwrappedTextLines**: `string`[][]

#### Inherited from

[`IText`](/api/classes/itext/).[`_unwrappedTextLines`](/api/classes/itext/#_unwrappedtextlines)

#### Defined in

[src/shapes/Text/Text.ts:406](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L406)

***

### \_wordJoiners

> **\_wordJoiners**: `RegExp`

#### Implementation of

`UniqueTextboxProps._wordJoiners`

#### Defined in

[src/shapes/Textbox.ts:86](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L86)

***

### aCoords

> **aCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/textbox/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/textbox/#calcacoords)

#### Inherited from

[`IText`](/api/classes/itext/).[`aCoords`](/api/classes/itext/#acoords)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`absolutePositioned`](/api/classes/itext/#absolutepositioned)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`angle`](/api/classes/itext/#angle)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`backgroundColor`](/api/classes/itext/#backgroundcolor)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`borderColor`](/api/classes/itext/#bordercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:73](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L73)

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`IText`](/api/classes/itext/).[`borderDashArray`](/api/classes/itext/#borderdasharray)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`borderOpacityWhenMoving`](/api/classes/itext/#borderopacitywhenmoving)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`borderScaleFactor`](/api/classes/itext/#borderscalefactor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L76)

***

### caching

> **caching**: `boolean`

Indicates whether internal text char widths can be cached

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`caching`](/api/classes/itext/#caching)

#### Defined in

[src/shapes/IText/IText.ts:203](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L203)

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

[`IText`](/api/classes/itext/).[`centeredRotation`](/api/classes/itext/#centeredrotation)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`centeredScaling`](/api/classes/itext/#centeredscaling)

#### Defined in

[src/shapes/Object/Object.ts:168](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L168)

***

### charSpacing

> **charSpacing**: `number`

additional space between characters
expressed in thousands of em unit

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`charSpacing`](/api/classes/itext/#charspacing)

#### Defined in

[src/shapes/Text/Text.ts:345](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L345)

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`IText`](/api/classes/itext/).[`clipPath`](/api/classes/itext/#clippath)

#### Defined in

[src/shapes/Object/Object.ts:164](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L164)

***

### clipPathId?

> `optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[`IText`](/api/classes/itext/).[`clipPathId`](/api/classes/itext/#clippathid)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

***

### compositionColor

> **compositionColor**: `string`

#### Inherited from

[`IText`](/api/classes/itext/).[`compositionColor`](/api/classes/itext/#compositioncolor)

#### Defined in

[src/shapes/IText/IText.ts:196](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L196)

***

### compositionEnd

> **compositionEnd**: `number`

#### Inherited from

[`IText`](/api/classes/itext/).[`compositionEnd`](/api/classes/itext/#compositionend)

#### Defined in

[src/shapes/IText/IText.ts:135](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L135)

***

### compositionStart

> **compositionStart**: `number`

#### Inherited from

[`IText`](/api/classes/itext/).[`compositionStart`](/api/classes/itext/#compositionstart)

#### Defined in

[src/shapes/IText/IText.ts:133](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L133)

***

### controls

> **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[`IText`](/api/classes/itext/).[`controls`](/api/classes/itext/#controls)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`cornerColor`](/api/classes/itext/#cornercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L67)

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`IText`](/api/classes/itext/).[`cornerDashArray`](/api/classes/itext/#cornerdasharray)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`cornerSize`](/api/classes/itext/#cornersize)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`cornerStrokeColor`](/api/classes/itext/#cornerstrokecolor)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`cornerStyle`](/api/classes/itext/#cornerstyle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L69)

***

### ctrlKeysMapDown

> **ctrlKeysMapDown**: `TKeyMapIText`

For functionalities on keyDown + ctrl || cmd

#### Inherited from

[`IText`](/api/classes/itext/).[`ctrlKeysMapDown`](/api/classes/itext/#ctrlkeysmapdown)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:42](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L42)

***

### ctrlKeysMapUp

> **ctrlKeysMapUp**: `TKeyMapIText`

For functionalities on keyUp + ctrl || cmd

#### Inherited from

[`IText`](/api/classes/itext/).[`ctrlKeysMapUp`](/api/classes/itext/#ctrlkeysmapup)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:37](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L37)

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

[`IText`](/api/classes/itext/).[`cursorColor`](/api/classes/itext/#cursorcolor)

#### Defined in

[src/shapes/IText/IText.ts:180](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L180)

***

### cursorDelay

> **cursorDelay**: `number`

Delay between cursor blink (in ms)

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`cursorDelay`](/api/classes/itext/#cursordelay)

#### Defined in

[src/shapes/IText/IText.ts:187](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L187)

***

### cursorDuration

> **cursorDuration**: `number`

Duration of cursor fade in (in ms)

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`cursorDuration`](/api/classes/itext/#cursorduration)

#### Defined in

[src/shapes/IText/IText.ts:194](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L194)

***

### cursorWidth

> **cursorWidth**: `number`

Width of cursor (in px)

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`cursorWidth`](/api/classes/itext/#cursorwidth)

#### Defined in

[src/shapes/IText/IText.ts:170](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L170)

***

### deltaY

> **deltaY**: `number`

Baseline shift, styles only, keep at 0 for the main text object

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`deltaY`](/api/classes/itext/#deltay)

#### Defined in

[src/shapes/Text/Text.ts:352](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L352)

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

[`IText`](/api/classes/itext/).[`direction`](/api/classes/itext/#direction)

#### Defined in

[src/shapes/Text/Text.ts:365](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L365)

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

[`IText`](/api/classes/itext/).[`dirty`](/api/classes/itext/#dirty)

#### Defined in

[src/shapes/Object/Object.ts:193](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L193)

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

#### Defined in

[src/shapes/Textbox.ts:76](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L76)

***

### editable

> **editable**: `boolean`

Indicates whether a text can be edited

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`editable`](/api/classes/itext/#editable)

#### Defined in

[src/shapes/IText/IText.ts:156](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L156)

***

### editingBorderColor

> **editingBorderColor**: `string`

Border color of text object while it's in editing mode

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`editingBorderColor`](/api/classes/itext/#editingbordercolor)

#### Defined in

[src/shapes/IText/IText.ts:163](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L163)

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`evented`](/api/classes/itext/#evented)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`excludeFromExport`](/api/classes/itext/#excludefromexport)

#### Defined in

[src/shapes/Object/Object.ts:160](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L160)

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Inherited from

[`IText`](/api/classes/itext/).[`fill`](/api/classes/itext/#fill)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`fillRule`](/api/classes/itext/#fillrule)

#### Defined in

[src/shapes/Object/Object.ts:144](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L144)

***

### flipX

> **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

[`IText`](/api/classes/itext/).[`flipX`](/api/classes/itext/#flipx)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`flipY`](/api/classes/itext/#flipy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:22](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L22)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`fontFamily`](/api/classes/itext/#fontfamily)

#### Defined in

[src/shapes/Text/Text.ts:186](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L186)

***

### fontSize

> **fontSize**: `number`

Font size (in pixels)

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`fontSize`](/api/classes/itext/#fontsize)

#### Defined in

[src/shapes/Text/Text.ts:172](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L172)

***

### fontStyle

> **fontStyle**: `string`

Font style . Possible values: "", "normal", "italic" or "oblique".

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`fontStyle`](/api/classes/itext/#fontstyle)

#### Defined in

[src/shapes/Text/Text.ts:222](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L222)

***

### fontWeight

> **fontWeight**: `string`

Font weight (e.g. bold, normal, 400, 600, 800)

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`fontWeight`](/api/classes/itext/#fontweight)

#### Defined in

[src/shapes/Text/Text.ts:179](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L179)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`globalCompositeOperation`](/api/classes/itext/#globalcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:152](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L152)

***

### hasBorders

> **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`hasBorders`](/api/classes/itext/#hasborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L77)

***

### hasControls

> **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`hasControls`](/api/classes/itext/#hascontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:71](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L71)

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`height`](/api/classes/itext/#height)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:20](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L20)

***

### hiddenTextarea

> **hiddenTextarea**: `null` \| `HTMLTextAreaElement`

#### Inherited from

[`IText`](/api/classes/itext/).[`hiddenTextarea`](/api/classes/itext/#hiddentextarea)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:44](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L44)

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

[`IText`](/api/classes/itext/).[`hiddenTextareaContainer`](/api/classes/itext/#hiddentextareacontainer)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:54](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L54)

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`IText`](/api/classes/itext/).[`hoverCursor`](/api/classes/itext/#hovercursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:85](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L85)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`includeDefaultValues`](/api/classes/itext/#includedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:159](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L159)

***

### initialized?

> `optional` **initialized**: `true`

#### Inherited from

[`IText`](/api/classes/itext/).[`initialized`](/api/classes/itext/#initialized)

#### Defined in

[src/shapes/Text/Text.ts:411](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L411)

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

[`IText`](/api/classes/itext/).[`inverted`](/api/classes/itext/#inverted)

#### Defined in

[src/shapes/Object/Object.ts:165](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L165)

***

### isEditing

> **isEditing**: `boolean`

Indicates whether text is in editing mode

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`isEditing`](/api/classes/itext/#isediting)

#### Defined in

[src/shapes/IText/IText.ts:149](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L149)

***

### isMoving?

> `optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[`IText`](/api/classes/itext/).[`isMoving`](/api/classes/itext/#ismoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:123](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L123)

***

### isWrapping

> **isWrapping**: `boolean`

#### Defined in

[src/shapes/Textbox.ts:90](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L90)

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

[`IText`](/api/classes/itext/).[`keysMap`](/api/classes/itext/#keysmap)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:30](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L30)

***

### keysMapRtl

> **keysMapRtl**: `TKeyMapIText`

#### Inherited from

[`IText`](/api/classes/itext/).[`keysMapRtl`](/api/classes/itext/#keysmaprtl)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:32](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L32)

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

[`IText`](/api/classes/itext/).[`left`](/api/classes/itext/#left)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:18](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L18)

***

### lineHeight

> **lineHeight**: `number`

Line height

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`lineHeight`](/api/classes/itext/#lineheight)

#### Defined in

[src/shapes/Text/Text.ts:229](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L229)

***

### linethrough

> **linethrough**: `boolean`

Text decoration linethrough.

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`linethrough`](/api/classes/itext/#linethrough)

#### Defined in

[src/shapes/Text/Text.ts:207](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L207)

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`lockMovementX`](/api/classes/itext/#lockmovementx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:55](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L55)

***

### lockMovementY

> **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`lockMovementY`](/api/classes/itext/#lockmovementy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:56](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L56)

***

### lockRotation

> **lockRotation**: `boolean`

When `true`, object rotation is locked

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`lockRotation`](/api/classes/itext/#lockrotation)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:57](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L57)

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`lockScalingFlip`](/api/classes/itext/#lockscalingflip)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:62](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L62)

***

### lockScalingX

> **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`lockScalingX`](/api/classes/itext/#lockscalingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L58)

***

### lockScalingY

> **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`lockScalingY`](/api/classes/itext/#lockscalingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:59](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L59)

***

### lockSkewingX

> **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`lockSkewingX`](/api/classes/itext/#lockskewingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L60)

***

### lockSkewingY

> **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`lockSkewingY`](/api/classes/itext/#lockskewingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L61)

***

### matrixCache?

> `optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[`IText`](/api/classes/itext/).[`matrixCache`](/api/classes/itext/#matrixcache)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`minScaleLimit`](/api/classes/itext/#minscalelimit)

#### Defined in

[src/shapes/Object/Object.ts:138](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L138)

***

### minWidth

> **minWidth**: `number`

Minimum width of textbox, in pixels.

#### Default

```ts

```

#### Implementation of

`UniqueTextboxProps.minWidth`

#### Defined in

[src/shapes/Textbox.ts:67](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L67)

***

### moveCursor

> **moveCursor**: `null` \| `string`

Default cursor value used when moving this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`IText`](/api/classes/itext/).[`moveCursor`](/api/classes/itext/#movecursor)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`noScaleCache`](/api/classes/itext/#noscalecache)

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

[`IText`](/api/classes/itext/).[`oCoords`](/api/classes/itext/#ocoords)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`objectCaching`](/api/classes/itext/#objectcaching)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`opacity`](/api/classes/itext/#opacity)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`originX`](/api/classes/itext/#originx)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`originY`](/api/classes/itext/#originy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:28](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L28)

***

### overline

> **overline**: `boolean`

Text decoration overline.

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`overline`](/api/classes/itext/#overline)

#### Defined in

[src/shapes/Text/Text.ts:200](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L200)

***

### ownMatrixCache?

> `optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[`IText`](/api/classes/itext/).[`ownMatrixCache`](/api/classes/itext/#ownmatrixcache)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`padding`](/api/classes/itext/#padding)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:41](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L41)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`paintFirst`](/api/classes/itext/#paintfirst)

#### Defined in

[src/shapes/Object/Object.ts:142](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L142)

***

### parent?

> `optional` **parent**: [`Group`](/api/classes/group/)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[`IText`](/api/classes/itext/).[`parent`](/api/classes/itext/#parent)

#### Defined in

[src/shapes/Object/StackedObject.ts:38](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/StackedObject.ts#L38)

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

[`IText`](/api/classes/itext/).[`path`](/api/classes/itext/#path)

#### Defined in

[src/shapes/Text/Text.ts:294](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L294)

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

[`IText`](/api/classes/itext/).[`pathAlign`](/api/classes/itext/#pathalign)

#### Defined in

[src/shapes/Text/Text.ts:320](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L320)

***

### pathSide

> **pathSide**: [`TPathSide`](/api/type-aliases/tpathside/)

Which side of the path the text should be drawn on.
Only used when text has a path

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`pathSide`](/api/classes/itext/#pathside)

#### Defined in

[src/shapes/Text/Text.ts:310](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L310)

***

### pathStartOffset

> **pathStartOffset**: `number`

Offset amount for text path starting position
Only used when text has a path

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`pathStartOffset`](/api/classes/itext/#pathstartoffset)

#### Defined in

[src/shapes/Text/Text.ts:302](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L302)

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`perPixelTargetFind`](/api/classes/itext/#perpixeltargetfind)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L82)

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`IText`](/api/classes/itext/).[`scaleX`](/api/classes/itext/#scalex)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`scaleY`](/api/classes/itext/#scaley)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`selectable`](/api/classes/itext/#selectable)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`selectionBackgroundColor`](/api/classes/itext/#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L78)

***

### selectionColor

> **selectionColor**: `string`

Color of text selection

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`selectionColor`](/api/classes/itext/#selectioncolor)

#### Defined in

[src/shapes/IText/IText.ts:142](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L142)

***

### selectionEnd

> **selectionEnd**: `number`

Index where text selection ends

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`selectionEnd`](/api/classes/itext/#selectionend)

#### Defined in

[src/shapes/IText/IText.ts:131](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L131)

***

### selectionStart

> **selectionStart**: `number`

Index where text selection starts (or where cursor is when there is no selection)

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`selectionStart`](/api/classes/itext/#selectionstart)

#### Defined in

[src/shapes/IText/IText.ts:124](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L124)

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

#### Inherited from

[`IText`](/api/classes/itext/).[`shadow`](/api/classes/itext/#shadow)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`skewX`](/api/classes/itext/#skewx)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`skewY`](/api/classes/itext/#skewy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:26](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L26)

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

The angle that an object will lock to while rotating.

#### Inherited from

[`IText`](/api/classes/itext/).[`snapAngle`](/api/classes/itext/#snapangle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:52](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L52)

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`IText`](/api/classes/itext/).[`snapThreshold`](/api/classes/itext/#snapthreshold)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:53](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L53)

***

### splitByGrapheme

> **splitByGrapheme**: `boolean`

Use this boolean property in order to split strings that have no white space concept.
this is a cheap way to help with chinese/japanese

#### Since

2.6.0

#### Implementation of

`UniqueTextboxProps.splitByGrapheme`

#### Defined in

[src/shapes/Textbox.ts:84](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L84)

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Inherited from

[`IText`](/api/classes/itext/).[`stroke`](/api/classes/itext/#stroke)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`strokeDashArray`](/api/classes/itext/#strokedasharray)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`strokeDashOffset`](/api/classes/itext/#strokedashoffset)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`strokeLineCap`](/api/classes/itext/#strokelinecap)

#### Defined in

[src/shapes/Object/Object.ts:148](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L148)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`strokeLineJoin`](/api/classes/itext/#strokelinejoin)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`strokeMiterLimit`](/api/classes/itext/#strokemiterlimit)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`strokeUniform`](/api/classes/itext/#strokeuniform)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`strokeWidth`](/api/classes/itext/#strokewidth)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:30](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L30)

***

### styles

> **styles**: [`TextStyle`](/api/type-aliases/textstyle/)

#### Inherited from

[`IText`](/api/classes/itext/).[`styles`](/api/classes/itext/#styles)

#### Defined in

[src/shapes/Text/Text.ts:270](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L270)

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

[`IText`](/api/classes/itext/).[`subscript`](/api/classes/itext/#subscript)

#### Defined in

[src/shapes/Text/Text.ts:250](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L250)

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

[`IText`](/api/classes/itext/).[`superscript`](/api/classes/itext/#superscript)

#### Defined in

[src/shapes/Text/Text.ts:234](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L234)

***

### text

> **text**: `string`

#### Inherited from

[`IText`](/api/classes/itext/).[`text`](/api/classes/itext/#text)

#### Defined in

[src/shapes/Text/Text.ts:165](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L165)

***

### textAlign

> **textAlign**: `string`

Text alignment. Possible values: "left", "center", "right", "justify",
"justify-left", "justify-center" or "justify-right".

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`textAlign`](/api/classes/itext/#textalign)

#### Defined in

[src/shapes/Text/Text.ts:215](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L215)

***

### textBackgroundColor

> **textBackgroundColor**: `string`

Background color of text lines

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`textBackgroundColor`](/api/classes/itext/#textbackgroundcolor)

#### Defined in

[src/shapes/Text/Text.ts:268](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L268)

***

### textLines

> **textLines**: `string`[]

contains the the text of the object, divided in lines as they are displayed
on screen. Wrapping will divide the text independently of line breaks

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`textLines`](/api/classes/itext/#textlines)

#### Defined in

[src/shapes/Text/Text.ts:397](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L397)

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

[`IText`](/api/classes/itext/).[`top`](/api/classes/itext/#top)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`touchCornerSize`](/api/classes/itext/#touchcornersize)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`transparentCorners`](/api/classes/itext/#transparentcorners)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L66)

***

### underline

> **underline**: `boolean`

Text decoration underline.

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`underline`](/api/classes/itext/#underline)

#### Defined in

[src/shapes/Text/Text.ts:193](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L193)

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`visible`](/api/classes/itext/#visible)

#### Defined in

[src/shapes/Object/Object.ts:157](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L157)

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Inherited from

[`IText`](/api/classes/itext/).[`width`](/api/classes/itext/#width)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:19](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L19)

***

### ATTRIBUTE\_NAMES

> `static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [FabricText.fromElement](../../../../api/classes/fabrictext/#fromelement))

#### Static

#### Member Of

Text
@see: http://www.w3.org/TR/SVG/text.html#TextElement

#### Inherited from

[`IText`](/api/classes/itext/).[`ATTRIBUTE_NAMES`](/api/classes/itext/#attribute_names)

#### Defined in

[src/shapes/Text/Text.ts:1809](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1809)

***

### \_styleProperties

> `static` **\_styleProperties**: readonly `StylePropertiesType`[] = `styleProperties`

#### Inherited from

[`IText`](/api/classes/itext/).[`_styleProperties`](/api/classes/itext/#_styleproperties)

#### Defined in

[src/shapes/Text/StyledText.ts:30](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/StyledText.ts#L30)

***

### cacheProperties

> `static` **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

[`IText`](/api/classes/itext/).[`cacheProperties`](/api/classes/itext/#cacheproperties)

#### Defined in

[src/shapes/Text/Text.ts:413](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L413)

***

### colorProperties

> `static` **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[`IText`](/api/classes/itext/).[`colorProperties`](/api/classes/itext/#colorproperties)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:20](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/AnimatableObject.ts#L20)

***

### genericFonts

> `static` **genericFonts**: `string`[]

#### Inherited from

[`IText`](/api/classes/itext/).[`genericFonts`](/api/classes/itext/#genericfonts)

#### Defined in

[src/shapes/Text/Text.ts:1793](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1793)

***

### ownDefaults

> `static` **ownDefaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`Textbox`](/api/classes/textbox/)\<`Partial`\<[`TextboxProps`](/api/interfaces/textboxprops/)\>, [`SerializedTextboxProps`](/api/interfaces/serializedtextboxprops/), `ITextEvents`\>\>\> = `textboxDefaultValues`

#### Overrides

[`IText`](/api/classes/itext/).[`ownDefaults`](/api/classes/itext/#owndefaults)

#### Defined in

[src/shapes/Textbox.ts:96](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L96)

***

### stateProperties

> `static` **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[`IText`](/api/classes/itext/).[`stateProperties`](/api/classes/itext/#stateproperties)

#### Defined in

[src/shapes/Object/Object.ts:176](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L176)

***

### type

> `static` **type**: `string` = `'Textbox'`

#### Overrides

[`IText`](/api/classes/itext/).[`type`](/api/classes/itext/#type)

#### Defined in

[src/shapes/Textbox.ts:92](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L92)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`type`](/api/classes/itext/#type-1)

#### Defined in

[src/shapes/IText/IText.ts:213](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L213)

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

[`IText`](/api/classes/itext/).[`_drawClipPath`](/api/classes/itext/#_drawclippath)

#### Defined in

[src/shapes/Object/Object.ts:949](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L949)

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

[`IText`](/api/classes/itext/).[`_getFontDeclaration`](/api/classes/itext/#_getfontdeclaration)

#### Defined in

[src/shapes/Text/Text.ts:1656](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1656)

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

[`IText`](/api/classes/itext/).[`_getGraphemeBox`](/api/classes/itext/#_getgraphemebox)

#### Defined in

[src/shapes/Text/Text.ts:981](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L981)

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

[`IText`](/api/classes/itext/).[`_getSelectionForOffset`](/api/classes/itext/#_getselectionforoffset)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:377](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L377)

***

### \_getWidthOfCharSpacing()

> **\_getWidthOfCharSpacing**(): `number`

#### Returns

`number`

#### Inherited from

[`IText`](/api/classes/itext/).[`_getWidthOfCharSpacing`](/api/classes/itext/#_getwidthofcharspacing)

#### Defined in

[src/shapes/Text/Text.ts:1523](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1523)

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

[`IText`](/api/classes/itext/).[`_limitCacheSize`](/api/classes/itext/#_limitcachesize)

#### Defined in

[src/shapes/Object/Object.ts:351](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L351)

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

[`IText`](/api/classes/itext/).[`_measureLine`](/api/classes/itext/#_measureline)

#### Defined in

[src/shapes/Text/Text.ts:889](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L889)

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

• **charOffset**: `number` = `0`

#### Returns

`number`

#### Defined in

[src/shapes/Textbox.ts:389](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L389)

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

[`IText`](/api/classes/itext/).[`_mouseDownHandler`](/api/classes/itext/#_mousedownhandler)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:136](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextClickBehavior.ts#L136)

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

[`IText`](/api/classes/itext/).[`_mouseDownHandlerBefore`](/api/classes/itext/#_mousedownhandlerbefore)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:171](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextClickBehavior.ts#L171)

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

[`IText`](/api/classes/itext/).[`_moveCursorLeftOrRight`](/api/classes/itext/#_movecursorleftorright)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:639](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L639)

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

[`IText`](/api/classes/itext/).[`_moveCursorUpOrDown`](/api/classes/itext/#_movecursorupordown)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:477](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L477)

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`_removeCacheCanvas`](/api/classes/itext/#_removecachecanvas)

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

[`IText`](/api/classes/itext/).[`_renderControls`](/api/classes/itext/#_rendercontrols)

#### Todo

move to interactivity

#### Defined in

[src/shapes/Object/InteractiveObject.ts:434](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L434)

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

[`IText`](/api/classes/itext/).[`_renderCursor`](/api/classes/itext/#_rendercursor)

#### Defined in

[src/shapes/IText/IText.ts:498](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L498)

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`_setClippingProperties`](/api/classes/itext/#_setclippingproperties)

#### Defined in

[src/shapes/Object/Object.ts:1087](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1087)

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `style`): `object`

This function prepare the canvas for a ill style, and fill
need to be sent in as defined

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **style**: `Pick`\<[`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>, `"fill"`\>

with ill defined

#### Returns

`object`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Inherited from

[`IText`](/api/classes/itext/).[`_setFillStyles`](/api/classes/itext/#_setfillstyles)

#### Defined in

[src/shapes/Text/Text.ts:1336](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1336)

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

[`IText`](/api/classes/itext/).[`_setStrokeStyles`](/api/classes/itext/#_setstrokestyles)

#### Defined in

[src/shapes/Text/Text.ts:1314](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1314)

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

[`IText`](/api/classes/itext/).[`_setupCompositeOperation`](/api/classes/itext/#_setupcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:1541](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1541)

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

[`IText`](/api/classes/itext/).[`_splitTextIntoLines`](/api/classes/itext/#_splittextintolines)

#### Defined in

[src/shapes/Textbox.ts:533](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L533)

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

[`IText`](/api/classes/itext/).[`_toSVG`](/api/classes/itext/#_tosvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:120](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/FabricObjectSVGExportMixin.ts#L120)

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

#### Defined in

[src/shapes/Textbox.ts:324](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L324)

***

### abortCursorAnimation()

> **abortCursorAnimation**(): `void`

Aborts cursor animation, clears all timeouts and clear textarea context if necessary

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`abortCursorAnimation`](/api/classes/itext/#abortcursoranimation)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:183](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L183)

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

[`IText`](/api/classes/itext/).[`addPaintOrder`](/api/classes/itext/#addpaintorder)

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

[`IText`](/api/classes/itext/).[`animate`](/api/classes/itext/#animate)

#### Tutorial

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:34](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/AnimatableObject.ts#L34)

***

### blur()

> **blur**(): `void`

Override this method to customize cursor behavior on textbox blur

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`blur`](/api/classes/itext/#blur)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:106](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L106)

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Inherited from

[`IText`](/api/classes/itext/).[`calcACoords`](/api/classes/itext/#calcacoords)

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

[`IText`](/api/classes/itext/).[`calcOCoords`](/api/classes/itext/#calcocoords)

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

[`IText`](/api/classes/itext/).[`calcOwnMatrix`](/api/classes/itext/#calcownmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:501](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L501)

***

### calcTextHeight()

> **calcTextHeight**(): `number`

Calculate text box height

#### Returns

`number`

#### Inherited from

[`IText`](/api/classes/itext/).[`calcTextHeight`](/api/classes/itext/#calctextheight)

#### Defined in

[src/shapes/Text/Text.ts:1042](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1042)

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

[`IText`](/api/classes/itext/).[`calcTransformMatrix`](/api/classes/itext/#calctransformmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:473](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L473)

***

### canDrop()

> **canDrop**(`e`): `boolean`

override this method to control whether instance should/shouldn't become a drop target

#### Parameters

• **e**: `DragEvent`

#### Returns

`boolean`

#### Inherited from

[`IText`](/api/classes/itext/).[`canDrop`](/api/classes/itext/#candrop)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:75](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextClickBehavior.ts#L75)

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

[`IText`](/api/classes/itext/).[`cleanStyle`](/api/classes/itext/#cleanstyle)

#### Defined in

[src/shapes/Text/StyledText.ts:103](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/StyledText.ts#L103)

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

[`IText`](/api/classes/itext/).[`clearContextTop`](/api/classes/itext/#clearcontexttop)

#### Todo

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Defined in

[src/shapes/Object/InteractiveObject.ts:626](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L626)

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

[`IText`](/api/classes/itext/).[`clone`](/api/classes/itext/#clone)

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

[`IText`](/api/classes/itext/).[`cloneAsImage`](/api/classes/itext/#cloneasimage)

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

complexity

#### Inherited from

[`IText`](/api/classes/itext/).[`complexity`](/api/classes/itext/#complexity)

#### Defined in

[src/shapes/Text/Text.ts:1789](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1789)

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

[`IText`](/api/classes/itext/).[`containsPoint`](/api/classes/itext/#containspoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:270](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L270)

***

### copy()

> **copy**(): `void`

Copies selected text

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`copy`](/api/classes/itext/#copy)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:295](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L295)

***

### dispose()

> **dispose**(): `void`

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`dispose`](/api/classes/itext/#dispose)

#### Defined in

[src/shapes/IText/IText.ts:694](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L694)

***

### doubleClickHandler()

> **doubleClickHandler**(`options`): `void`

Default handler for double click, select a word

#### Parameters

• **options**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`doubleClickHandler`](/api/classes/itext/#doubleclickhandler)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:111](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextClickBehavior.ts#L111)

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

[`IText`](/api/classes/itext/).[`drawBorders`](/api/classes/itext/#drawborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:477](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L477)

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

[`IText`](/api/classes/itext/).[`drawCacheOnCanvas`](/api/classes/itext/#drawcacheoncanvas)

#### Defined in

[src/shapes/Object/Object.ts:967](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L967)

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

[`IText`](/api/classes/itext/).[`drawClipPathOnCache`](/api/classes/itext/#drawclippathoncache)

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

[`IText`](/api/classes/itext/).[`drawControls`](/api/classes/itext/#drawcontrols)

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

[`IText`](/api/classes/itext/).[`drawControlsConnectingLines`](/api/classes/itext/#drawcontrolsconnectinglines)

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

[`IText`](/api/classes/itext/).[`drawObject`](/api/classes/itext/#drawobject)

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

[`IText`](/api/classes/itext/).[`drawSelectionBackground`](/api/classes/itext/#drawselectionbackground)

#### Todo

evaluate if make this disappear in favor of a pre-render hook for objects
this was added by Andrea Bogazzi to make possible some feature for work reasons
it seemed a good option, now is an edge case

#### Defined in

[src/shapes/Object/InteractiveObject.ts:374](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L374)

***

### enlargeSpaces()

> **enlargeSpaces**(): `void`

Enlarge space boxes and shift the others

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`enlargeSpaces`](/api/classes/itext/#enlargespaces)

#### Defined in

[src/shapes/Text/Text.ts:489](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L489)

***

### enterEditing()

> **enterEditing**(`e`?): `void`

Enters editing state

#### Parameters

• **e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`enterEditing`](/api/classes/itext/#enterediting)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:386](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L386)

***

### exitEditing()

> **exitEditing**(): [`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

Exits from editing state and fires relevant events

#### Returns

[`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`IText`](/api/classes/itext/).[`exitEditing`](/api/classes/itext/#exitediting)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:689](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L689)

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`\>(`other`): `AncestryComparison`

Compare ancestors

#### Type Parameters

• **T** *extends* [`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

#### Returns

`AncestryComparison`

an object that represent the ancestry situation.

#### Inherited from

[`IText`](/api/classes/itext/).[`findCommonAncestors`](/api/classes/itext/#findcommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:78](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/StackedObject.ts#L78)

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

[`IText`](/api/classes/itext/).[`findLineBoundaryLeft`](/api/classes/itext/#findlineboundaryleft)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:288](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L288)

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

[`IText`](/api/classes/itext/).[`findLineBoundaryRight`](/api/classes/itext/#findlineboundaryright)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:305](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L305)

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

[`IText`](/api/classes/itext/).[`findWordBoundaryLeft`](/api/classes/itext/#findwordboundaryleft)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:240](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L240)

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

[`IText`](/api/classes/itext/).[`findWordBoundaryRight`](/api/classes/itext/#findwordboundaryright)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:264](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L264)

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

[`IText`](/api/classes/itext/).[`fire`](/api/classes/itext/#fire)

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

[`IText`](/api/classes/itext/).[`forEachControl`](/api/classes/itext/#foreachcontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:352](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L352)

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

[`IText`](/api/classes/itext/).[`fromGraphemeToStringSelection`](/api/classes/itext/#fromgraphemetostringselection)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:489](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L489)

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

[`IText`](/api/classes/itext/).[`fromStringToGraphemeSelection`](/api/classes/itext/#fromstringtographemeselection)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:472](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L472)

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

[`IText`](/api/classes/itext/).[`get`](/api/classes/itext/#get)

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/CommonMethods.ts#L59)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`get2DCursorLocation`](/api/classes/itext/#get2dcursorlocation)

#### Defined in

[src/shapes/IText/IText.ts:339](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L339)

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| `object`

#### Returns

`undefined` \| `object`

#### Inherited from

[`IText`](/api/classes/itext/).[`getActiveControl`](/api/classes/itext/#getactivecontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:193](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L193)

***

### getAncestors()

> **getAncestors**(): `Ancestors`

#### Returns

`Ancestors`

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

[`IText`](/api/classes/itext/).[`getAncestors`](/api/classes/itext/#getancestors)

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

[`IText`](/api/classes/itext/).[`getBoundingRect`](/api/classes/itext/#getboundingrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:331](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L331)

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[`IText`](/api/classes/itext/).[`getCanvasRetinaScaling`](/api/classes/itext/#getcanvasretinascaling)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:388](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L388)

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`IText`](/api/classes/itext/).[`getCenterPoint`](/api/classes/itext/#getcenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:177](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L177)

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

[`IText`](/api/classes/itext/).[`getCompleteStyleDeclaration`](/api/classes/itext/#getcompletestyledeclaration)

#### Defined in

[src/shapes/Text/StyledText.ts:279](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/StyledText.ts#L279)

***

### getCoords()

> **getCoords**(): [`Point`](/api/classes/point/)[]

#### Returns

[`Point`](/api/classes/point/)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

[`IText`](/api/classes/itext/).[`getCoords`](/api/classes/itext/#getcoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:192](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L192)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`getCurrentCharColor`](/api/classes/itext/#getcurrentcharcolor)

#### Defined in

[src/shapes/IText/IText.ts:678](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L678)

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

[`IText`](/api/classes/itext/).[`getCurrentCharFontSize`](/api/classes/itext/#getcurrentcharfontsize)

#### Defined in

[src/shapes/IText/IText.ts:665](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L665)

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

[`IText`](/api/classes/itext/).[`getDownCursorOffset`](/api/classes/itext/#getdowncursoroffset)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:345](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L345)

***

### getGraphemeDataForRender()

> **getGraphemeDataForRender**(`lines`): [`GraphemeData`](/api/type-aliases/graphemedata/)

For each line of text terminated by an hard line stop,
measure each word width and extract the largest word from all.
The returned words here are the one that at the end will be rendered.

#### Parameters

• **lines**: `string`[]

the lines we need to measure

#### Returns

[`GraphemeData`](/api/type-aliases/graphemedata/)

#### Defined in

[src/shapes/Textbox.ts:343](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L343)

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

[`IText`](/api/classes/itext/).[`getHeightOfChar`](/api/classes/itext/#getheightofchar)

#### Defined in

[src/shapes/Text/Text.ts:864](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L864)

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

[`IText`](/api/classes/itext/).[`getHeightOfLine`](/api/classes/itext/#getheightofline)

#### Defined in

[src/shapes/Text/Text.ts:1023](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1023)

***

### getMinWidth()

> **getMinWidth**(): `number`

#### Returns

`number`

#### Defined in

[src/shapes/Textbox.ts:545](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L545)

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[`IText`](/api/classes/itext/).[`getObjectOpacity`](/api/classes/itext/#getobjectopacity)

#### Defined in

[src/shapes/Object/Object.ts:666](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L666)

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`IText`](/api/classes/itext/).[`getObjectScaling`](/api/classes/itext/#getobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:635](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L635)

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

[`IText`](/api/classes/itext/).[`getPointByOrigin`](/api/classes/itext/#getpointbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:202](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L202)

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`IText`](/api/classes/itext/).[`getRelativeCenterPoint`](/api/classes/itext/#getrelativecenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:188](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L188)

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/api/api/classes/textbox/getx/#getx)

#### Inherited from

[`IText`](/api/classes/itext/).[`getRelativeX`](/api/classes/itext/#getrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:103](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L103)

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x,y position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in parent's coordinate plane

#### Inherited from

[`IText`](/api/classes/itext/).[`getRelativeXY`](/api/classes/itext/#getrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:164](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L164)

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/api/api/classes/textbox/gety/#gety)

#### Inherited from

[`IText`](/api/classes/itext/).[`getRelativeY`](/api/classes/itext/#getrelativey)

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

[`IText`](/api/classes/itext/).[`getScaledHeight`](/api/classes/itext/#getscaledheight)

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

[`IText`](/api/classes/itext/).[`getScaledWidth`](/api/classes/itext/#getscaledwidth)

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:340](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L340)

***

### getSelectedText()

> **getSelectedText**(): `string`

Returns selected text

#### Returns

`string`

#### Inherited from

[`IText`](/api/classes/itext/).[`getSelectedText`](/api/classes/itext/#getselectedtext)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:231](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L231)

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

[`IText`](/api/classes/itext/).[`getSelectionStartFromPointer`](/api/classes/itext/#getselectionstartfrompointer)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:246](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextClickBehavior.ts#L246)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`getSelectionStyles`](/api/classes/itext/#getselectionstyles)

#### Defined in

[src/shapes/IText/IText.ts:312](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L312)

***

### getSvgCommons()

> **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> & `object`

#### Returns

`string`

#### Inherited from

[`IText`](/api/classes/itext/).[`getSvgCommons`](/api/classes/itext/#getsvgcommons)

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

[`IText`](/api/classes/itext/).[`getSvgFilter`](/api/classes/itext/#getsvgfilter)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:76](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/FabricObjectSVGExportMixin.ts#L76)

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

[`IText`](/api/classes/itext/).[`getSvgStyles`](/api/classes/itext/#getsvgstyles)

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

[`IText`](/api/classes/itext/).[`getSvgTransform`](/api/classes/itext/#getsvgtransform)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](/api/type-aliases/tdegree/)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/api/type-aliases/tdegree/)

#### Inherited from

[`IText`](/api/classes/itext/).[`getTotalAngle`](/api/classes/itext/#gettotalangle)

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

[`IText`](/api/classes/itext/).[`getTotalObjectScaling`](/api/classes/itext/#gettotalobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:652](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L652)

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

[`IText`](/api/classes/itext/).[`getUpCursorOffset`](/api/classes/itext/#getupcursoroffset)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:390](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L390)

***

### getValueOfPropertyAt()

> **getValueOfPropertyAt**\<`T`\>(`lineIndex`, `charIndex`, `property`): [`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>\[`T`\]

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

[`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>\[`T`\]

the value of 'property'

#### Inherited from

[`IText`](/api/classes/itext/).[`getValueOfPropertyAt`](/api/classes/itext/#getvalueofpropertyat)

#### Defined in

[src/shapes/Text/Text.ts:1537](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1537)

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

#### Inherited from

[`IText`](/api/classes/itext/).[`getViewportTransform`](/api/classes/itext/#getviewporttransform)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:406](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L406)

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in canvas coordinate plane

#### Inherited from

[`IText`](/api/classes/itext/).[`getX`](/api/classes/itext/#getx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:74](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L74)

***

### getXY()

> **getXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in canvas coordinate plane

#### Inherited from

[`IText`](/api/classes/itext/).[`getXY`](/api/classes/itext/#getxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:134](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L134)

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in canvas coordinate plane

#### Inherited from

[`IText`](/api/classes/itext/).[`getY`](/api/classes/itext/#gety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:88](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L88)

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

[`IText`](/api/classes/itext/).[`graphemeSplit`](/api/classes/itext/#graphemesplit)

#### Todo

the util `graphemeSplit` needs to be injectable in some way.
is more comfortable to inject the correct util rather than having to override text
in the middle of the prototype chain

#### Defined in

[src/shapes/Text/Text.ts:1715](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1715)

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

[`IText`](/api/classes/itext/).[`handleFiller`](/api/classes/itext/#handlefiller)

#### Defined in

[src/shapes/Text/Text.ts:1274](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1274)

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`): `boolean`

#### Type Parameters

• **T** *extends* [`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

#### Returns

`boolean`

#### Inherited from

[`IText`](/api/classes/itext/).[`hasCommonAncestors`](/api/classes/itext/#hascommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:143](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/StackedObject.ts#L143)

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

[`IText`](/api/classes/itext/).[`hasFill`](/api/classes/itext/#hasfill)

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

[`IText`](/api/classes/itext/).[`hasStroke`](/api/classes/itext/#hasstroke)

#### Since

3.0.0

#### Defined in

[src/shapes/Object/Object.ts:820](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L820)

***

### initBehavior()

> **initBehavior**(): `void`

Initializes all the interactive behavior of IText

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`initBehavior`](/api/classes/itext/#initbehavior)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:30](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextClickBehavior.ts#L30)

***

### initDelayedCursor()

> **initDelayedCursor**(`restart`?): `void`

Initializes delayed cursor

#### Parameters

• **restart?**: `boolean`

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`initDelayedCursor`](/api/classes/itext/#initdelayedcursor)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:175](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L175)

***

### initHiddenTextarea()

> **initHiddenTextarea**(): `void`

Initializes hidden textarea (needed to bring up keyboard in iOS)

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`initHiddenTextarea`](/api/classes/itext/#inithiddentextarea)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:63](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L63)

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

[`IText`](/api/classes/itext/).[`insertCharStyleObject`](/api/classes/itext/#insertcharstyleobject)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:880](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L880)

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

[`IText`](/api/classes/itext/).[`insertChars`](/api/classes/itext/#insertchars)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:1030](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L1030)

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

[`IText`](/api/classes/itext/).[`insertNewStyleBlock`](/api/classes/itext/#insertnewstyleblock)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:938](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L938)

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

[`IText`](/api/classes/itext/).[`insertNewlineStyleObject`](/api/classes/itext/#insertnewlinestyleobject)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:811](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L811)

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

[`IText`](/api/classes/itext/).[`intersectsWithObject`](/api/classes/itext/#intersectswithobject)

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

[`IText`](/api/classes/itext/).[`intersectsWithRect`](/api/classes/itext/#intersectswithrect)

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

[`IText`](/api/classes/itext/).[`isCacheDirty`](/api/classes/itext/#iscachedirty)

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

[`IText`](/api/classes/itext/).[`isContainedWithinObject`](/api/classes/itext/#iscontainedwithinobject)

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

[`IText`](/api/classes/itext/).[`isContainedWithinRect`](/api/classes/itext/#iscontainedwithinrect)

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

[`IText`](/api/classes/itext/).[`isControlVisible`](/api/classes/itext/#iscontrolvisible)

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

[`IText`](/api/classes/itext/).[`isDescendantOf`](/api/classes/itext/#isdescendantof)

#### Defined in

[src/shapes/Object/StackedObject.ts:46](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/StackedObject.ts#L46)

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

[`IText`](/api/classes/itext/).[`isEmptyStyles`](/api/classes/itext/#isemptystyles)

#### Defined in

[src/shapes/Textbox.ts:208](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L208)

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

[`IText`](/api/classes/itext/).[`isEndOfWrapping`](/api/classes/itext/#isendofwrapping)

#### Defined in

[src/shapes/Textbox.ts:500](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L500)

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type Parameters

• **T** *extends* [`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[`IText`](/api/classes/itext/).[`isInFrontOf`](/api/classes/itext/#isinfrontof)

#### Defined in

[src/shapes/Object/StackedObject.ts:153](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/StackedObject.ts#L153)

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`IText`](/api/classes/itext/).[`isNotVisible`](/api/classes/itext/#isnotvisible)

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

[`IText`](/api/classes/itext/).[`isOnScreen`](/api/classes/itext/#isonscreen)

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

[`IText`](/api/classes/itext/).[`isOverlapping`](/api/classes/itext/#isoverlapping)

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

[`IText`](/api/classes/itext/).[`isPartiallyOnScreen`](/api/classes/itext/#ispartiallyonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:309](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L309)

***

### isTripleClick()

> **isTripleClick**(`newPointer`): `boolean`

#### Parameters

• **newPointer**: [`XY`](/api/interfaces/xy/)

#### Returns

`boolean`

#### Inherited from

[`IText`](/api/classes/itext/).[`isTripleClick`](/api/classes/itext/#istripleclick)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:99](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextClickBehavior.ts#L99)

***

### isType()

> **isType**(...`types`): `boolean`

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

• ...**types**: `string`[]

#### Returns

`boolean`

#### Inherited from

[`IText`](/api/classes/itext/).[`isType`](/api/classes/itext/#istype)

#### Defined in

[src/shapes/Object/Object.ts:1472](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1472)

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

[`IText`](/api/classes/itext/).[`measureLine`](/api/classes/itext/#measureline)

#### Defined in

[src/shapes/Text/Text.ts:872](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L872)

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

[`IText`](/api/classes/itext/).[`missingNewlineOffset`](/api/classes/itext/#missingnewlineoffset)

#### Defined in

[src/shapes/Textbox.ts:519](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L519)

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

[`IText`](/api/classes/itext/).[`moveCursorDown`](/api/classes/itext/#movecursordown)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:451](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L451)

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

[`IText`](/api/classes/itext/).[`moveCursorLeft`](/api/classes/itext/#movecursorleft)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:536](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L536)

***

### moveCursorLeftWithShift()

> **moveCursorLeftWithShift**(`e`): `undefined` \| `boolean`

Moves cursor left while keeping selection

#### Parameters

• **e**: `KeyboardEvent`

#### Returns

`undefined` \| `boolean`

#### Inherited from

[`IText`](/api/classes/itext/).[`moveCursorLeftWithShift`](/api/classes/itext/#movecursorleftwithshift)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:608](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L608)

***

### moveCursorLeftWithoutShift()

> **moveCursorLeftWithoutShift**(`e`): `boolean`

Moves cursor left without keeping selection

#### Parameters

• **e**: `KeyboardEvent`

#### Returns

`boolean`

#### Inherited from

[`IText`](/api/classes/itext/).[`moveCursorLeftWithoutShift`](/api/classes/itext/#movecursorleftwithoutshift)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:588](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L588)

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

[`IText`](/api/classes/itext/).[`moveCursorRight`](/api/classes/itext/#movecursorright)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:624](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L624)

***

### moveCursorRightWithShift()

> **moveCursorRightWithShift**(`e`): `undefined` \| `boolean`

Moves cursor right while keeping selection

#### Parameters

• **e**: `KeyboardEvent`

#### Returns

`undefined` \| `boolean`

#### Inherited from

[`IText`](/api/classes/itext/).[`moveCursorRightWithShift`](/api/classes/itext/#movecursorrightwithshift)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:658](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L658)

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

[`IText`](/api/classes/itext/).[`moveCursorRightWithoutShift`](/api/classes/itext/#movecursorrightwithoutshift)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:674](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L674)

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

[`IText`](/api/classes/itext/).[`moveCursorUp`](/api/classes/itext/#movecursorup)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:465](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L465)

***

### moveCursorWithShift()

> **moveCursorWithShift**(`offset`): `boolean`

Moves cursor with shift

#### Parameters

• **offset**: `number`

#### Returns

`boolean`

#### Inherited from

[`IText`](/api/classes/itext/).[`moveCursorWithShift`](/api/classes/itext/#movecursorwithshift)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:504](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L504)

***

### moveCursorWithoutShift()

> **moveCursorWithoutShift**(`offset`): `boolean`

Moves cursor up without shift

#### Parameters

• **offset**: `number`

#### Returns

`boolean`

#### Inherited from

[`IText`](/api/classes/itext/).[`moveCursorWithoutShift`](/api/classes/itext/#movecursorwithoutshift)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:521](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L521)

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

[`IText`](/api/classes/itext/).[`needsItsOwnCache`](/api/classes/itext/#needsitsowncache)

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

[`IText`](/api/classes/itext/).[`off`](/api/classes/itext/#off)

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

[`IText`](/api/classes/itext/).[`off`](/api/classes/itext/#off)

##### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Observable.ts#L125)

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

[`IText`](/api/classes/itext/).[`off`](/api/classes/itext/#off)

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

[`IText`](/api/classes/itext/).[`on`](/api/classes/itext/#on)

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

[`IText`](/api/classes/itext/).[`on`](/api/classes/itext/#on)

##### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Observable.ts#L27)

***

### onCompositionEnd()

> **onCompositionEnd**(): `void`

Composition end

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`onCompositionEnd`](/api/classes/itext/#oncompositionend)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:281](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L281)

***

### onCompositionStart()

> **onCompositionStart**(): `void`

Composition start

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`onCompositionStart`](/api/classes/itext/#oncompositionstart)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:274](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L274)

***

### onCompositionUpdate()

> **onCompositionUpdate**(`__namedParameters`): `void`

#### Parameters

• **\_\_namedParameters**: `CompositionEvent`

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`onCompositionUpdate`](/api/classes/itext/#oncompositionupdate)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:285](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L285)

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

[`IText`](/api/classes/itext/).[`onDeselect`](/api/classes/itext/#ondeselect)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:111](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L111)

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

[`IText`](/api/classes/itext/).[`onDragStart`](/api/classes/itext/#ondragstart)

#### See

also DraggableTextDelegate#isActive
To prevent drag and drop between objects both shouldStartDragging and onDragStart should return false

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:68](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextClickBehavior.ts#L68)

***

### onInput()

> **onInput**(`this`, `e`): `void`

Handles onInput event

#### Parameters

• **this**: [`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\> & `object`

• **e**: `Event`

Event object

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`onInput`](/api/classes/itext/#oninput)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:167](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L167)

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

[`IText`](/api/classes/itext/).[`onKeyDown`](/api/classes/itext/#onkeydown)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:115](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L115)

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

[`IText`](/api/classes/itext/).[`onKeyUp`](/api/classes/itext/#onkeyup)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:147](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L147)

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

[`IText`](/api/classes/itext/).[`onSelect`](/api/classes/itext/#onselect)

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

[`IText`](/api/classes/itext/).[`once`](/api/classes/itext/#once)

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

[`IText`](/api/classes/itext/).[`once`](/api/classes/itext/#once)

##### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/Observable.ts#L66)

***

### paste()

> **paste**(): `void`

Pastes text

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`paste`](/api/classes/itext/#paste)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:317](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextKeyBehavior.ts#L317)

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

[`IText`](/api/classes/itext/).[`removeChars`](/api/classes/itext/#removechars)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:1008](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L1008)

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

[`IText`](/api/classes/itext/).[`removeStyle`](/api/classes/itext/#removestyle)

#### Defined in

[src/shapes/Text/StyledText.ts:165](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/StyledText.ts#L165)

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

[`IText`](/api/classes/itext/).[`removeStyleFromTo`](/api/classes/itext/#removestylefromto)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:726](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L726)

***

### renderCache()

> **renderCache**(`options`?): `void`

#### Parameters

• **options?**: `any`

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`renderCache`](/api/classes/itext/#rendercache)

#### Defined in

[src/shapes/Object/Object.ts:791](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L791)

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

[`IText`](/api/classes/itext/).[`renderCursor`](/api/classes/itext/#rendercursor)

#### Defined in

[src/shapes/IText/IText.ts:494](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L494)

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

[`IText`](/api/classes/itext/).[`renderCursorAt`](/api/classes/itext/#rendercursorat)

#### Defined in

[src/shapes/IText/IText.ts:484](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L484)

***

### renderCursorOrSelection()

> **renderCursorOrSelection**(): `void`

Renders cursor or selection (depending on what exists)
it does on the contextTop. If contextTop is not available, do nothing.

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`renderCursorOrSelection`](/api/classes/itext/#rendercursororselection)

#### Defined in

[src/shapes/IText/IText.ts:374](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L374)

***

### renderDragSourceEffect()

> **renderDragSourceEffect**(): `void`

Renders drag start text selection

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`renderDragSourceEffect`](/api/classes/itext/#renderdragsourceeffect)

#### Defined in

[src/shapes/IText/IText.ts:554](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L554)

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

[`IText`](/api/classes/itext/).[`renderDropTargetEffect`](/api/classes/itext/#renderdroptargeteffect)

#### Defined in

[src/shapes/IText/IText.ts:564](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L564)

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

[`IText`](/api/classes/itext/).[`renderSelection`](/api/classes/itext/#renderselection)

#### Defined in

[src/shapes/IText/IText.ts:539](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L539)

***

### restartCursorIfNeeded()

> **restartCursorIfNeeded**(): `void`

Restart tue cursor animation if either is in complete state ( between animations )
or if it never started before

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`restartCursorIfNeeded`](/api/classes/itext/#restartcursorifneeded)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:206](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L206)

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

[`IText`](/api/classes/itext/).[`rotate`](/api/classes/itext/#rotate)

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

[`IText`](/api/classes/itext/).[`scale`](/api/classes/itext/#scale)

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

[`IText`](/api/classes/itext/).[`scaleToHeight`](/api/classes/itext/#scaletoheight)

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

[`IText`](/api/classes/itext/).[`scaleToWidth`](/api/classes/itext/#scaletowidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:369](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L369)

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

[`IText`](/api/classes/itext/).[`searchWordBoundary`](/api/classes/itext/#searchwordboundary)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:323](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L323)

***

### selectAll()

> **selectAll**(): [`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

Selects entire text

#### Returns

[`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`IText`](/api/classes/itext/).[`selectAll`](/api/classes/itext/#selectall)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:219](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L219)

***

### selectLine()

> **selectLine**(`selectionStart`?): [`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

TODO fix: selectionStart set as 0 will be ignored?
Selects a line based on the index

#### Parameters

• **selectionStart?**: `number`

Index of a character

#### Returns

[`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`IText`](/api/classes/itext/).[`selectLine`](/api/classes/itext/#selectline)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:371](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L371)

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

[`IText`](/api/classes/itext/).[`selectWord`](/api/classes/itext/#selectword)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:349](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L349)

***

### set()

> **set**(`key`, `value`?): [`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `any`

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`IText`](/api/classes/itext/).[`set`](/api/classes/itext/#set)

#### Defined in

[src/shapes/Text/Text.ts:1758](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1758)

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

[`IText`](/api/classes/itext/).[`setControlVisible`](/api/classes/itext/#setcontrolvisible)

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

[`IText`](/api/classes/itext/).[`setControlsVisibility`](/api/classes/itext/#setcontrolsvisibility)

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

[`IText`](/api/classes/itext/).[`setCoords`](/api/classes/itext/#setcoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:342](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L342)

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

[`IText`](/api/classes/itext/).[`setCursorByClick`](/api/classes/itext/#setcursorbyclick)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:225](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextClickBehavior.ts#L225)

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

[`IText`](/api/classes/itext/).[`setOnGroup`](/api/classes/itext/#setongroup)

#### Defined in

[src/shapes/Object/Object.ts:1532](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1532)

***

### setPathInfo()

> **setPathInfo**(): `void`

If text has a path, it will add the extra information needed
for path and text calculations

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`setPathInfo`](/api/classes/itext/#setpathinfo)

#### Defined in

[src/shapes/Text/Text.ts:443](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L443)

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

[`IText`](/api/classes/itext/).[`setPositionByOrigin`](/api/classes/itext/#setpositionbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:217](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L217)

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

[`IText`](/api/classes/itext/).[`setRelativeX`](/api/classes/itext/#setrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:111](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L111)

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/textbox/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

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

[`IText`](/api/classes/itext/).[`setRelativeXY`](/api/classes/itext/#setrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:174](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L174)

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

[`IText`](/api/classes/itext/).[`setRelativeY`](/api/classes/itext/#setrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:127](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L127)

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

[`IText`](/api/classes/itext/).[`setSelectionEnd`](/api/classes/itext/#setselectionend)

#### Defined in

[src/shapes/IText/IText.ts:262](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L262)

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

[`IText`](/api/classes/itext/).[`setSelectionStart`](/api/classes/itext/#setselectionstart)

#### Defined in

[src/shapes/IText/IText.ts:253](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L253)

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

[`IText`](/api/classes/itext/).[`setSelectionStartEndWithShift`](/api/classes/itext/#setselectionstartendwithshift)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:1057](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L1057)

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

#### Inherited from

[`IText`](/api/classes/itext/).[`setSelectionStyles`](/api/classes/itext/#setselectionstyles)

#### Defined in

[src/shapes/IText/IText.ts:326](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L326)

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

[`IText`](/api/classes/itext/).[`setSubscript`](/api/classes/itext/#setsubscript)

#### Defined in

[src/shapes/Text/Text.ts:1415](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1415)

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

[`IText`](/api/classes/itext/).[`setSuperscript`](/api/classes/itext/#setsuperscript)

#### Defined in

[src/shapes/Text/Text.ts:1406](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1406)

***

### setX()

> **setX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`setX`](/api/classes/itext/#setx)

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

[`IText`](/api/classes/itext/).[`setXY`](/api/classes/itext/#setxy)

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

[`IText`](/api/classes/itext/).[`setY`](/api/classes/itext/#sety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:95](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectGeometry.ts#L95)

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

[`IText`](/api/classes/itext/).[`shiftLineStyles`](/api/classes/itext/#shiftlinestyles)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:788](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L788)

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

[`IText`](/api/classes/itext/).[`shouldCache`](/api/classes/itext/#shouldcache)

#### Defined in

[src/shapes/Object/Object.ts:872](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L872)

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

[`IText`](/api/classes/itext/).[`shouldStartDragging`](/api/classes/itext/#shouldstartdragging)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:58](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextClickBehavior.ts#L58)

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

[`IText`](/api/classes/itext/).[`strokeBorders`](/api/classes/itext/#strokeborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:398](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/InteractiveObject.ts#L398)

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

[`IText`](/api/classes/itext/).[`styleHas`](/api/classes/itext/#stylehas)

#### Defined in

[src/shapes/Textbox.ts:193](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L193)

***

### toCanvasElement()

> **toCanvasElement**(`options`?): `HTMLCanvasElement`

block cursor/selection logic while rendering the exported canvas

#### Parameters

• **options?**: `ObjectToCanvasElementOptions`

#### Returns

`HTMLCanvasElement`

#### Inherited from

[`IText`](/api/classes/itext/).[`toCanvasElement`](/api/classes/itext/#tocanvaselement)

#### Todo

this workaround should be replaced with a more robust solution

#### Defined in

[src/shapes/IText/IText.ts:362](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/IText.ts#L362)

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

[`IText`](/api/classes/itext/).[`toClipPathSVG`](/api/classes/itext/#toclippathsvg)

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

[`IText`](/api/classes/itext/).[`toDataURL`](/api/classes/itext/#todataurl)

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

[`IText`](/api/classes/itext/).[`toDatalessObject`](/api/classes/itext/#todatalessobject)

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

[`IText`](/api/classes/itext/).[`toJSON`](/api/classes/itext/#tojson)

#### Defined in

[src/shapes/Object/Object.ts:1491](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1491)

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type Parameters

• **T** *extends* `Omit`\<`Props` & [`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\>

• **K** *extends* `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[] = `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

object representation of an instance

#### Overrides

[`IText`](/api/classes/itext/).[`toObject`](/api/classes/itext/#toobject)

#### Method

toObject

#### Defined in

[src/shapes/Textbox.ts:573](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L573)

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

[`IText`](/api/classes/itext/).[`toSVG`](/api/classes/itext/#tosvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

***

### toString()

> **toString**(): `string`

Returns string representation of an instance

#### Returns

`string`

String representation of text object

#### Inherited from

[`IText`](/api/classes/itext/).[`toString`](/api/classes/itext/#tostring)

#### Defined in

[src/shapes/Text/Text.ts:579](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L579)

***

### toggle()

> **toggle**(`property`): [`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`Textbox`](/api/classes/textbox/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[`IText`](/api/classes/itext/).[`toggle`](/api/classes/itext/#toggle)

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

[`IText`](/api/classes/itext/).[`transform`](/api/classes/itext/#transform)

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

[`IText`](/api/classes/itext/).[`transformMatrixKey`](/api/classes/itext/#transformmatrixkey)

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

[`IText`](/api/classes/itext/).[`translateToCenterPoint`](/api/classes/itext/#translatetocenterpoint)

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

[`IText`](/api/classes/itext/).[`translateToGivenOrigin`](/api/classes/itext/#translatetogivenorigin)

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

[`IText`](/api/classes/itext/).[`translateToOriginPoint`](/api/classes/itext/#translatetooriginpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:155](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/ObjectOrigin.ts#L155)

***

### tripleClickHandler()

> **tripleClickHandler**(`options`): `void`

Default handler for triple click, select a line

#### Parameters

• **options**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`tripleClickHandler`](/api/classes/itext/#tripleclickhandler)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:121](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextClickBehavior.ts#L121)

***

### updateSelectionOnMouseMove()

> **updateSelectionOnMouseMove**(`e`): `void`

called by [Canvas#textEditingManager](../../../../api/classes/canvas/#texteditingmanager)

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

`void`

#### Inherited from

[`IText`](/api/classes/itext/).[`updateSelectionOnMouseMove`](/api/classes/itext/#updateselectiononmousemove)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:418](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/IText/ITextBehavior.ts#L418)

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

[`IText`](/api/classes/itext/).[`willDrawShadow`](/api/classes/itext/#willdrawshadow)

#### Defined in

[src/shapes/Object/Object.ts:885](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L885)

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

#### Defined in

[src/shapes/Textbox.ts:413](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L413)

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

[`IText`](/api/classes/itext/).[`_fromObject`](/api/classes/itext/#_fromobject)

#### Defined in

[src/shapes/Object/Object.ts:1570](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Object/Object.ts#L1570)

***

### createControls()

> `static` **createControls**(): `object`

Creates the default control object.
If you prefer to have on instance of controls shared among all objects
make this function return an empty object and add controls to the ownDefaults object

#### Returns

`object`

##### controls

> **controls**: `Record`\<`string`, [`Control`](/api/classes/control/)\>

#### Overrides

[`IText`](/api/classes/itext/).[`createControls`](/api/classes/itext/#createcontrols)

#### Defined in

[src/shapes/Textbox.ts:119](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L119)

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

[`IText`](/api/classes/itext/).[`fromElement`](/api/classes/itext/#fromelement)

#### Static

#### Member Of

Text

#### Defined in

[src/shapes/Text/Text.ts:1830](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1830)

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

[`IText`](/api/classes/itext/).[`fromObject`](/api/classes/itext/#fromobject)

#### Defined in

[src/shapes/Text/Text.ts:1907](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Text/Text.ts#L1907)

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

[`IText`](/api/classes/itext/).[`getDefaults`](/api/classes/itext/#getdefaults)

#### Defined in

[src/shapes/Textbox.ts:98](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Textbox.ts#L98)
