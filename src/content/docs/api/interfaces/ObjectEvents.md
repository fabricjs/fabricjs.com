---
editUrl: false
next: false
prev: false
title: "ObjectEvents"
---

## Extends

- [`ObjectPointerEvents`](/api/type-aliases/objectpointerevents/).`DnDEvents`.[`MiscEvents`](/api/interfaces/miscevents/).`ObjectModificationEvents`

## Extended by

- [`GroupEvents`](/api/interfaces/groupevents/)

## Properties

### added

> **added**: `object`

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

#### Defined in

[src/EventTypeDefs.ts:285](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L285)

***

### contextmenu

> **contextmenu**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[`MiscEvents`](/api/interfaces/miscevents/).[`contextmenu`](/api/interfaces/miscevents/#contextmenu)

#### Defined in

[src/EventTypeDefs.ts:268](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L268)

***

### contextmenu:before

> **contextmenu:before**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[`MiscEvents`](/api/interfaces/miscevents/).[`contextmenu:before`](/api/interfaces/miscevents/#contextmenu:before)

#### Defined in

[src/EventTypeDefs.ts:267](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L267)

***

### deselected

> **deselected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Defined in

[src/EventTypeDefs.ts:280](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L280)

***

### drag

> **drag**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

`DnDEvents.drag`

#### Defined in

[src/EventTypeDefs.ts:198](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L198)

***

### dragend

> **dragend**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

`DnDEvents.dragend`

#### Defined in

[src/EventTypeDefs.ts:202](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L202)

***

### dragenter

> **dragenter**: [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent`

#### Inherited from

`DnDEvents.dragenter`

#### Defined in

[src/EventTypeDefs.ts:200](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L200)

***

### dragleave

> **dragleave**: [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent`

#### Inherited from

`DnDEvents.dragleave`

#### Defined in

[src/EventTypeDefs.ts:201](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L201)

***

### dragover

> **dragover**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

`DnDEvents.dragover`

#### Defined in

[src/EventTypeDefs.ts:199](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L199)

***

### dragstart

> **dragstart**: `TEventWithTarget`\<`DragEvent`\>

#### Inherited from

`DnDEvents.dragstart`

#### Defined in

[src/EventTypeDefs.ts:197](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L197)

***

### drop

> **drop**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

`DnDEvents.drop`

#### Defined in

[src/EventTypeDefs.ts:204](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L204)

***

### drop:after

> **drop:after**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

`DnDEvents.drop:after`

#### Defined in

[src/EventTypeDefs.ts:205](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L205)

***

### drop:before

> **drop:before**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

`DnDEvents.drop:before`

#### Defined in

[src/EventTypeDefs.ts:203](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L203)

***

### erasing:end

> **erasing:end**: `object`

#### path

> **path**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Defined in

[src/EventTypeDefs.ts:289](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L289)

***

### modified

> **modified**: [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.modified`

#### Defined in

[src/EventTypeDefs.ts:121](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L121)

***

### modifyPoly

> **modifyPoly**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.modifyPoly`

#### Defined in

[src/EventTypeDefs.ts:120](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L120)

***

### mousedblclick

> **mousedblclick**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectPointerEvents.mousedblclick`

***

### mousedown

> **mousedown**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectPointerEvents.mousedown`

***

### mousedown:before

> **mousedown:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectPointerEvents.mousedown:before`

***

### mousemove

> **mousemove**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectPointerEvents.mousemove`

***

### mousemove:before

> **mousemove:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectPointerEvents.mousemove:before`

***

### mouseout

> **mouseout**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent`

#### Inherited from

`ObjectPointerEvents.mouseout`

***

### mouseover

> **mouseover**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent`

#### Inherited from

`ObjectPointerEvents.mouseover`

***

### mouseup

> **mouseup**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

##### currentTarget?

> `optional` **currentTarget**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

##### isClick

> **isClick**: `boolean`

#### Inherited from

`ObjectPointerEvents.mouseup`

***

### mouseup:before

> **mouseup:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

##### currentTarget?

> `optional` **currentTarget**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

##### isClick

> **isClick**: `boolean`

#### Inherited from

`ObjectPointerEvents.mouseup:before`

***

### mousewheel

> **mousewheel**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\>

#### Inherited from

`ObjectPointerEvents.mousewheel`

***

### moving

> **moving**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.moving`

#### Defined in

[src/EventTypeDefs.ts:115](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L115)

***

### removed

> **removed**: `object`

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

#### Defined in

[src/EventTypeDefs.ts:286](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L286)

***

### resizing

> **resizing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.resizing`

#### Defined in

[src/EventTypeDefs.ts:119](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L119)

***

### rotating

> **rotating**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.rotating`

#### Defined in

[src/EventTypeDefs.ts:117](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L117)

***

### scaling

> **scaling**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.scaling`

#### Defined in

[src/EventTypeDefs.ts:116](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L116)

***

### selected

> **selected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Defined in

[src/EventTypeDefs.ts:277](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L277)

***

### skewing

> **skewing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.skewing`

#### Defined in

[src/EventTypeDefs.ts:118](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L118)
