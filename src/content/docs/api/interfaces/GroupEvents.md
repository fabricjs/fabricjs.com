---
editUrl: false
next: false
prev: false
title: "GroupEvents"
---

## Extends

- [`ObjectEvents`](ObjectEvents.md).[`CollectionEvents`](CollectionEvents.md)

## Properties

### added

> **added**: `Object`

#### target

> **target**: [`Canvas`](../classes/Canvas.md) \| [`Group`](../classes/Group.md) \| [`StaticCanvas`](../classes/StaticCanvas.md)\<[`StaticCanvasEvents`](StaticCanvasEvents.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`added`](ObjectEvents.md#added)

#### Source

src/EventTypeDefs.ts:283

***

### contextmenu

> **contextmenu**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`contextmenu`](ObjectEvents.md#contextmenu)

#### Source

src/EventTypeDefs.ts:266

***

### contextmenu:before

> **contextmenu:before**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`contextmenu:before`](ObjectEvents.md#contextmenu:before)

#### Source

src/EventTypeDefs.ts:265

***

### deselected

> **deselected**: `Partial`\<[`TEvent`](TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object`

#### Type declaration

##### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`deselected`](ObjectEvents.md#deselected)

#### Source

src/EventTypeDefs.ts:278

***

### drag

> **drag**: [`DragEventData`](DragEventData.md)

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`drag`](ObjectEvents.md#drag)

#### Source

src/EventTypeDefs.ts:196

***

### dragend

> **dragend**: [`DragEventData`](DragEventData.md)

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`dragend`](ObjectEvents.md#dragend)

#### Source

src/EventTypeDefs.ts:200

***

### dragenter

> **dragenter**: [`DragEventData`](DragEventData.md) & `InEvent`

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`dragenter`](ObjectEvents.md#dragenter)

#### Source

src/EventTypeDefs.ts:198

***

### dragleave

> **dragleave**: [`DragEventData`](DragEventData.md) & `OutEvent`

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`dragleave`](ObjectEvents.md#dragleave)

#### Source

src/EventTypeDefs.ts:199

***

### dragover

> **dragover**: [`DragEventData`](DragEventData.md)

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`dragover`](ObjectEvents.md#dragover)

#### Source

src/EventTypeDefs.ts:197

***

### dragstart

> **dragstart**: `TEventWithTarget`\<`DragEvent`\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`dragstart`](ObjectEvents.md#dragstart)

#### Source

src/EventTypeDefs.ts:195

***

### drop

> **drop**: [`DropEventData`](DropEventData.md)

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`drop`](ObjectEvents.md#drop)

#### Source

src/EventTypeDefs.ts:202

***

### drop:after

> **drop:after**: [`DropEventData`](DropEventData.md)

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`drop:after`](ObjectEvents.md#drop:after)

#### Source

src/EventTypeDefs.ts:203

***

### drop:before

> **drop:before**: [`DropEventData`](DropEventData.md)

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`drop:before`](ObjectEvents.md#drop:before)

#### Source

src/EventTypeDefs.ts:201

***

### erasing:end

> **erasing:end**: `Object`

#### path

> **path**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`erasing:end`](ObjectEvents.md#erasing:end)

#### Source

src/EventTypeDefs.ts:287

***

### layout:after

> **layout:after**: [`LayoutAfterEvent`](../type-aliases/LayoutAfterEvent.md)

#### Source

src/shapes/Group.ts:46

***

### layout:before

> **layout:before**: [`LayoutBeforeEvent`](../type-aliases/LayoutBeforeEvent.md)

#### Source

src/shapes/Group.ts:45

***

### modified

> **modified**: [`ModifiedEvent`](ModifiedEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`modified`](ObjectEvents.md#modified)

***

### modifyPoly

> **modifyPoly**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`modifyPoly`](ObjectEvents.md#modifypoly)

***

### mousedblclick

> **mousedblclick**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`mousedblclick`](ObjectEvents.md#mousedblclick)

***

### mousedown

> **mousedown**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`mousedown`](ObjectEvents.md#mousedown)

***

### mousedown:before

> **mousedown:before**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`mousedown:before`](ObjectEvents.md#mousedown:before)

***

### mousemove

> **mousemove**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`mousemove`](ObjectEvents.md#mousemove)

***

### mousemove:before

> **mousemove:before**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`mousemove:before`](ObjectEvents.md#mousemove:before)

***

### mouseout

> **mouseout**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `OutEvent`

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`mouseout`](ObjectEvents.md#mouseout)

***

### mouseover

> **mouseover**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `InEvent`

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`mouseover`](ObjectEvents.md#mouseover)

***

### mouseup

> **mouseup**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

##### currentTarget?

> **`optional`** **currentTarget**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

##### isClick

> **isClick**: `boolean`

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`mouseup`](ObjectEvents.md#mouseup)

***

### mouseup:before

> **mouseup:before**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

##### currentTarget?

> **`optional`** **currentTarget**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

##### isClick

> **isClick**: `boolean`

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`mouseup:before`](ObjectEvents.md#mouseup:before)

***

### mousewheel

> **mousewheel**: [`TPointerEventInfo`](TPointerEventInfo.md)\<`WheelEvent`\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`mousewheel`](ObjectEvents.md#mousewheel)

***

### moving

> **moving**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`moving`](ObjectEvents.md#moving)

***

### object:added

> **object:added**: `Object`

#### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`CollectionEvents`](CollectionEvents.md).[`object:added`](CollectionEvents.md#object:added)

#### Source

src/EventTypeDefs.ts:228

***

### object:removed

> **object:removed**: `Object`

#### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`CollectionEvents`](CollectionEvents.md).[`object:removed`](CollectionEvents.md#object:removed)

#### Source

src/EventTypeDefs.ts:229

***

### removed

> **removed**: `Object`

#### target

> **target**: [`Canvas`](../classes/Canvas.md) \| [`Group`](../classes/Group.md) \| [`StaticCanvas`](../classes/StaticCanvas.md)\<[`StaticCanvasEvents`](StaticCanvasEvents.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`removed`](ObjectEvents.md#removed)

#### Source

src/EventTypeDefs.ts:284

***

### resizing

> **resizing**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`resizing`](ObjectEvents.md#resizing)

***

### rotating

> **rotating**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`rotating`](ObjectEvents.md#rotating)

***

### scaling

> **scaling**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`scaling`](ObjectEvents.md#scaling)

***

### selected

> **selected**: `Partial`\<[`TEvent`](TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object`

#### Type declaration

##### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`selected`](ObjectEvents.md#selected)

#### Source

src/EventTypeDefs.ts:275

***

### skewing

> **skewing**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

[`ObjectEvents`](ObjectEvents.md).[`skewing`](ObjectEvents.md#skewing)
