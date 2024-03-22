---
editUrl: false
next: false
prev: false
title: "ObjectEvents"
---

## Extends

- [`ObjectPointerEvents`](../type-aliases/ObjectPointerEvents.md).`DnDEvents`.[`MiscEvents`](MiscEvents.md).`ObjectModificationEvents`

## Properties

### added

> **added**: `Object`

#### target

> **target**: [`Canvas`](../classes/Canvas.md) \| [`Group`](../classes/Group.md) \| [`StaticCanvas`](../classes/StaticCanvas.md)\<[`StaticCanvasEvents`](StaticCanvasEvents.md)\>

#### Source

src/EventTypeDefs.ts:283

***

### contextmenu

> **contextmenu**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[`MiscEvents`](MiscEvents.md).[`contextmenu`](MiscEvents.md#contextmenu)

#### Source

src/EventTypeDefs.ts:266

***

### contextmenu:before

> **contextmenu:before**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[`MiscEvents`](MiscEvents.md).[`contextmenu:before`](MiscEvents.md#contextmenu:before)

#### Source

src/EventTypeDefs.ts:265

***

### deselected

> **deselected**: `Partial`\<[`TEvent`](TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object`

#### Type declaration

##### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Source

src/EventTypeDefs.ts:278

***

### drag

> **drag**: [`DragEventData`](DragEventData.md)

#### Inherited from

`DnDEvents.drag`

#### Source

src/EventTypeDefs.ts:196

***

### dragend

> **dragend**: [`DragEventData`](DragEventData.md)

#### Inherited from

`DnDEvents.dragend`

#### Source

src/EventTypeDefs.ts:200

***

### dragenter

> **dragenter**: [`DragEventData`](DragEventData.md) & `InEvent`

#### Inherited from

`DnDEvents.dragenter`

#### Source

src/EventTypeDefs.ts:198

***

### dragleave

> **dragleave**: [`DragEventData`](DragEventData.md) & `OutEvent`

#### Inherited from

`DnDEvents.dragleave`

#### Source

src/EventTypeDefs.ts:199

***

### dragover

> **dragover**: [`DragEventData`](DragEventData.md)

#### Inherited from

`DnDEvents.dragover`

#### Source

src/EventTypeDefs.ts:197

***

### dragstart

> **dragstart**: `TEventWithTarget`\<`DragEvent`\>

#### Inherited from

`DnDEvents.dragstart`

#### Source

src/EventTypeDefs.ts:195

***

### drop

> **drop**: [`DropEventData`](DropEventData.md)

#### Inherited from

`DnDEvents.drop`

#### Source

src/EventTypeDefs.ts:202

***

### drop:after

> **drop:after**: [`DropEventData`](DropEventData.md)

#### Inherited from

`DnDEvents.drop:after`

#### Source

src/EventTypeDefs.ts:203

***

### drop:before

> **drop:before**: [`DropEventData`](DropEventData.md)

#### Inherited from

`DnDEvents.drop:before`

#### Source

src/EventTypeDefs.ts:201

***

### erasing:end

> **erasing:end**: `Object`

#### path

> **path**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Source

src/EventTypeDefs.ts:287

***

### modified

> **modified**: [`ModifiedEvent`](ModifiedEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`ObjectModificationEvents.modified`

***

### modifyPoly

> **modifyPoly**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`ObjectModificationEvents.modifyPoly`

***

### mousedblclick

> **mousedblclick**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`ObjectPointerEvents.mousedblclick`

***

### mousedown

> **mousedown**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`ObjectPointerEvents.mousedown`

***

### mousedown:before

> **mousedown:before**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`ObjectPointerEvents.mousedown:before`

***

### mousemove

> **mousemove**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`ObjectPointerEvents.mousemove`

***

### mousemove:before

> **mousemove:before**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`ObjectPointerEvents.mousemove:before`

***

### mouseout

> **mouseout**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `OutEvent`

#### Inherited from

`ObjectPointerEvents.mouseout`

***

### mouseover

> **mouseover**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `InEvent`

#### Inherited from

`ObjectPointerEvents.mouseover`

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

`ObjectPointerEvents.mouseup`

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

`ObjectPointerEvents.mouseup:before`

***

### mousewheel

> **mousewheel**: [`TPointerEventInfo`](TPointerEventInfo.md)\<`WheelEvent`\>

#### Inherited from

`ObjectPointerEvents.mousewheel`

***

### moving

> **moving**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`ObjectModificationEvents.moving`

***

### removed

> **removed**: `Object`

#### target

> **target**: [`Canvas`](../classes/Canvas.md) \| [`Group`](../classes/Group.md) \| [`StaticCanvas`](../classes/StaticCanvas.md)\<[`StaticCanvasEvents`](StaticCanvasEvents.md)\>

#### Source

src/EventTypeDefs.ts:284

***

### resizing

> **resizing**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`ObjectModificationEvents.resizing`

***

### rotating

> **rotating**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`ObjectModificationEvents.rotating`

***

### scaling

> **scaling**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`ObjectModificationEvents.scaling`

***

### selected

> **selected**: `Partial`\<[`TEvent`](TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object`

#### Type declaration

##### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Source

src/EventTypeDefs.ts:275

***

### skewing

> **skewing**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`ObjectModificationEvents.skewing`
