---
editUrl: false
next: false
prev: false
title: "CanvasEvents"
---

## Extends

- [`StaticCanvasEvents`](StaticCanvasEvents.md).[`CanvasPointerEvents`](../type-aliases/CanvasPointerEvents.md).`CanvasDnDEvents`.[`MiscEvents`](MiscEvents.md).`CanvasModificationEvents`.`CanvasSelectionEvents`

## Properties

### after:render

> **after:render**: `Object`

#### ctx

> **ctx**: `CanvasRenderingContext2D`

#### Inherited from

[`StaticCanvasEvents`](StaticCanvasEvents.md).[`after:render`](StaticCanvasEvents.md#after:render)

#### Source

src/EventTypeDefs.ts:296

***

### before:path:created

> **before:path:created**: `Object`

#### path

> **path**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Source

src/EventTypeDefs.ts:309

***

### before:render

> **before:render**: `Object`

#### ctx

> **ctx**: `CanvasRenderingContext2D`

#### Inherited from

[`StaticCanvasEvents`](StaticCanvasEvents.md).[`before:render`](StaticCanvasEvents.md#before:render)

#### Source

src/EventTypeDefs.ts:295

***

### before:selection:cleared

> **before:selection:cleared**: `Partial`\<[`TEvent`](TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object`

#### Type declaration

##### deselected

> **deselected**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

#### Inherited from

`CanvasSelectionEvents.before:selection:cleared`

#### Source

src/EventTypeDefs.ts:219

***

### before:transform

> **before:transform**: [`TEvent`](TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object`

#### Type declaration

##### transform

> **transform**: [`Transform`](../type-aliases/Transform.md)

#### Inherited from

`CanvasModificationEvents.before:transform`

#### Source

src/EventTypeDefs.ts:130

***

### canvas:cleared

> **canvas:cleared**: `never`

#### Inherited from

[`StaticCanvasEvents`](StaticCanvasEvents.md).[`canvas:cleared`](StaticCanvasEvents.md#canvas:cleared)

#### Source

src/EventTypeDefs.ts:292

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

### drag

> **drag**: [`DragEventData`](DragEventData.md)

#### Inherited from

`CanvasDnDEvents.drag`

#### Source

src/EventTypeDefs.ts:196

***

### drag:enter

> **drag:enter**: [`DragEventData`](DragEventData.md) & `InEvent`

#### Inherited from

`CanvasDnDEvents.drag:enter`

#### Source

src/EventTypeDefs.ts:207

***

### drag:leave

> **drag:leave**: [`DragEventData`](DragEventData.md) & `OutEvent`

#### Inherited from

`CanvasDnDEvents.drag:leave`

#### Source

src/EventTypeDefs.ts:208

***

### dragend

> **dragend**: [`DragEventData`](DragEventData.md)

#### Inherited from

`CanvasDnDEvents.dragend`

#### Source

src/EventTypeDefs.ts:200

***

### dragenter

> **dragenter**: [`DragEventData`](DragEventData.md) & `InEvent`

#### Inherited from

`CanvasDnDEvents.dragenter`

#### Source

src/EventTypeDefs.ts:198

***

### dragleave

> **dragleave**: [`DragEventData`](DragEventData.md) & `OutEvent`

#### Inherited from

`CanvasDnDEvents.dragleave`

#### Source

src/EventTypeDefs.ts:199

***

### dragover

> **dragover**: [`DragEventData`](DragEventData.md)

#### Inherited from

`CanvasDnDEvents.dragover`

#### Source

src/EventTypeDefs.ts:197

***

### dragstart

> **dragstart**: `TEventWithTarget`\<`DragEvent`\>

#### Inherited from

`CanvasDnDEvents.dragstart`

#### Source

src/EventTypeDefs.ts:195

***

### drop

> **drop**: [`DropEventData`](DropEventData.md)

#### Inherited from

`CanvasDnDEvents.drop`

#### Source

src/EventTypeDefs.ts:202

***

### drop:after

> **drop:after**: [`DropEventData`](DropEventData.md)

#### Inherited from

`CanvasDnDEvents.drop:after`

#### Source

src/EventTypeDefs.ts:203

***

### drop:before

> **drop:before**: [`DropEventData`](DropEventData.md)

#### Inherited from

`CanvasDnDEvents.drop:before`

#### Source

src/EventTypeDefs.ts:201

***

### erasing:end

> **erasing:end**: `Object`

#### drawables

> **drawables**: `Object`

#### drawables.backgroundImage?

> **`optional`** **backgroundImage**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### drawables.overlayImage?

> **`optional`** **overlayImage**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### path

> **path**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### subTargets

> **subTargets**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

#### targets

> **targets**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

#### Source

src/EventTypeDefs.ts:314

***

### erasing:start

> **erasing:start**: `never`

#### Source

src/EventTypeDefs.ts:313

***

### mouse:dblclick

> **mouse:dblclick**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`CanvasPointerEvents.mouse:dblclick`

***

### mouse:down

> **mouse:down**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`CanvasPointerEvents.mouse:down`

***

### mouse:down:before

> **mouse:down:before**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`CanvasPointerEvents.mouse:down:before`

***

### mouse:move

> **mouse:move**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`CanvasPointerEvents.mouse:move`

***

### mouse:move:before

> **mouse:move:before**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>

#### Inherited from

`CanvasPointerEvents.mouse:move:before`

***

### mouse:out

> **mouse:out**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `OutEvent`

#### Inherited from

`CanvasPointerEvents.mouse:out`

***

### mouse:over

> **mouse:over**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `InEvent`

#### Inherited from

`CanvasPointerEvents.mouse:over`

***

### mouse:up

> **mouse:up**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

##### currentTarget?

> **`optional`** **currentTarget**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

##### isClick

> **isClick**: `boolean`

#### Inherited from

`CanvasPointerEvents.mouse:up`

***

### mouse:up:before

> **mouse:up:before**: [`TPointerEventInfo`](TPointerEventInfo.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

##### currentTarget?

> **`optional`** **currentTarget**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

##### isClick

> **isClick**: `boolean`

#### Inherited from

`CanvasPointerEvents.mouse:up:before`

***

### mouse:wheel

> **mouse:wheel**: [`TPointerEventInfo`](TPointerEventInfo.md)\<`WheelEvent`\>

#### Inherited from

`CanvasPointerEvents.mouse:wheel`

***

### object:added

> **object:added**: `Object`

#### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`StaticCanvasEvents`](StaticCanvasEvents.md).[`object:added`](StaticCanvasEvents.md#object:added)

#### Source

src/EventTypeDefs.ts:228

***

### object:layout:after

> **object:layout:after**: [`LayoutAfterEvent`](../type-aliases/LayoutAfterEvent.md) & `Object`

#### Type declaration

##### target

> **target**: [`Group`](../classes/Group.md)

#### Inherited from

[`StaticCanvasEvents`](StaticCanvasEvents.md).[`object:layout:after`](StaticCanvasEvents.md#object:layout:after)

#### Source

src/EventTypeDefs.ts:298

***

### object:layout:before

> **object:layout:before**: [`LayoutBeforeEvent`](../type-aliases/LayoutBeforeEvent.md) & `Object`

#### Type declaration

##### target

> **target**: [`Group`](../classes/Group.md)

#### Inherited from

[`StaticCanvasEvents`](StaticCanvasEvents.md).[`object:layout:before`](StaticCanvasEvents.md#object:layout:before)

#### Source

src/EventTypeDefs.ts:297

***

### object:modified

> **object:modified**: [`ModifiedEvent`](ModifiedEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> \| `Object`

#### Inherited from

`CanvasModificationEvents.object:modified`

***

### object:modifyPoly

> **object:modifyPoly**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object`

#### Type declaration

##### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

`CanvasModificationEvents.object:modifyPoly`

***

### object:moving

> **object:moving**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object`

#### Type declaration

##### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

`CanvasModificationEvents.object:moving`

***

### object:removed

> **object:removed**: `Object`

#### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`StaticCanvasEvents`](StaticCanvasEvents.md).[`object:removed`](StaticCanvasEvents.md#object:removed)

#### Source

src/EventTypeDefs.ts:229

***

### object:resizing

> **object:resizing**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object`

#### Type declaration

##### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

`CanvasModificationEvents.object:resizing`

***

### object:rotating

> **object:rotating**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object`

#### Type declaration

##### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

`CanvasModificationEvents.object:rotating`

***

### object:scaling

> **object:scaling**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object`

#### Type declaration

##### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

`CanvasModificationEvents.object:scaling`

***

### object:skewing

> **object:skewing**: [`BasicTransformEvent`](BasicTransformEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\> & `Object`

#### Type declaration

##### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

`CanvasModificationEvents.object:skewing`

***

### path:created

> **path:created**: `Object`

#### path

> **path**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Source

src/EventTypeDefs.ts:310

***

### selection:cleared

> **selection:cleared**: `Partial`\<[`TEvent`](TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object`

#### Type declaration

##### deselected

> **deselected**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

#### Inherited from

`CanvasSelectionEvents.selection:cleared`

#### Source

src/EventTypeDefs.ts:222

***

### selection:created

> **selection:created**: `Partial`\<[`TEvent`](TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object`

#### Type declaration

##### selected

> **selected**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

#### Inherited from

`CanvasSelectionEvents.selection:created`

#### Source

src/EventTypeDefs.ts:212

***

### selection:updated

> **selection:updated**: `Partial`\<[`TEvent`](TEvent.md)\<[`TPointerEvent`](../type-aliases/TPointerEvent.md)\>\> & `Object`

#### Type declaration

##### deselected

> **deselected**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

##### selected

> **selected**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

#### Inherited from

`CanvasSelectionEvents.selection:updated`

#### Source

src/EventTypeDefs.ts:215

***

### text:changed

> **text:changed**: `Object`

#### target

> **target**: [`IText`](../classes/IText.md)\<`Partial`\<[`ITextProps`](ITextProps.md)\>, [`SerializedITextProps`](SerializedITextProps.md), `ITextEvents`\>

#### Source

src/EventTypeDefs.ts:328

***

### text:editing:entered

> **text:editing:entered**: `Object`

#### target

> **target**: [`IText`](../classes/IText.md)\<`Partial`\<[`ITextProps`](ITextProps.md)\>, [`SerializedITextProps`](SerializedITextProps.md), `ITextEvents`\>

#### Source

src/EventTypeDefs.ts:329

***

### text:editing:exited

> **text:editing:exited**: `Object`

#### target

> **target**: [`IText`](../classes/IText.md)\<`Partial`\<[`ITextProps`](ITextProps.md)\>, [`SerializedITextProps`](SerializedITextProps.md), `ITextEvents`\>

#### Source

src/EventTypeDefs.ts:330

***

### text:selection:changed

> **text:selection:changed**: `Object`

#### target

> **target**: [`IText`](../classes/IText.md)\<`Partial`\<[`ITextProps`](ITextProps.md)\>, [`SerializedITextProps`](SerializedITextProps.md), `ITextEvents`\>

#### Source

src/EventTypeDefs.ts:327
