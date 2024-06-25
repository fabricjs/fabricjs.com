---
editUrl: false
next: false
prev: false
title: "GroupEvents"
---

## Extends

- [`ObjectEvents`](/api/interfaces/objectevents/).[`CollectionEvents`](/api/interfaces/collectionevents/)

## Properties

### added

> **added**: `object`

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`added`](/api/interfaces/objectevents/#added)

#### Defined in

[src/EventTypeDefs.ts:285](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L285)

***

### contextmenu

> **contextmenu**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`contextmenu`](/api/interfaces/objectevents/#contextmenu)

#### Defined in

[src/EventTypeDefs.ts:268](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L268)

***

### contextmenu:before

> **contextmenu:before**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`contextmenu:before`](/api/interfaces/objectevents/#contextmenu:before)

#### Defined in

[src/EventTypeDefs.ts:267](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L267)

***

### deselected

> **deselected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`deselected`](/api/interfaces/objectevents/#deselected)

#### Defined in

[src/EventTypeDefs.ts:280](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L280)

***

### drag

> **drag**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`drag`](/api/interfaces/objectevents/#drag)

#### Defined in

[src/EventTypeDefs.ts:198](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L198)

***

### dragend

> **dragend**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragend`](/api/interfaces/objectevents/#dragend)

#### Defined in

[src/EventTypeDefs.ts:202](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L202)

***

### dragenter

> **dragenter**: [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent`

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragenter`](/api/interfaces/objectevents/#dragenter)

#### Defined in

[src/EventTypeDefs.ts:200](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L200)

***

### dragleave

> **dragleave**: [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent`

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragleave`](/api/interfaces/objectevents/#dragleave)

#### Defined in

[src/EventTypeDefs.ts:201](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L201)

***

### dragover

> **dragover**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragover`](/api/interfaces/objectevents/#dragover)

#### Defined in

[src/EventTypeDefs.ts:199](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L199)

***

### dragstart

> **dragstart**: `TEventWithTarget`\<`DragEvent`\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragstart`](/api/interfaces/objectevents/#dragstart)

#### Defined in

[src/EventTypeDefs.ts:197](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L197)

***

### drop

> **drop**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`drop`](/api/interfaces/objectevents/#drop)

#### Defined in

[src/EventTypeDefs.ts:204](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L204)

***

### drop:after

> **drop:after**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`drop:after`](/api/interfaces/objectevents/#drop:after)

#### Defined in

[src/EventTypeDefs.ts:205](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L205)

***

### drop:before

> **drop:before**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`drop:before`](/api/interfaces/objectevents/#drop:before)

#### Defined in

[src/EventTypeDefs.ts:203](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L203)

***

### erasing:end

> **erasing:end**: `object`

#### path

> **path**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`erasing:end`](/api/interfaces/objectevents/#erasing:end)

#### Defined in

[src/EventTypeDefs.ts:289](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L289)

***

### layout:after

> **layout:after**: [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/)

#### Defined in

[src/shapes/Group.ts:51](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Group.ts#L51)

***

### layout:before

> **layout:before**: [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/)

#### Defined in

[src/shapes/Group.ts:50](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/shapes/Group.ts#L50)

***

### modified

> **modified**: [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`modified`](/api/interfaces/objectevents/#modified)

#### Defined in

[src/EventTypeDefs.ts:121](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L121)

***

### modifyPoly

> **modifyPoly**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`modifyPoly`](/api/interfaces/objectevents/#modifypoly)

#### Defined in

[src/EventTypeDefs.ts:120](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L120)

***

### mousedblclick

> **mousedblclick**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousedblclick`](/api/interfaces/objectevents/#mousedblclick)

***

### mousedown

> **mousedown**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousedown`](/api/interfaces/objectevents/#mousedown)

***

### mousedown:before

> **mousedown:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousedown:before`](/api/interfaces/objectevents/#mousedown:before)

***

### mousemove

> **mousemove**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousemove`](/api/interfaces/objectevents/#mousemove)

***

### mousemove:before

> **mousemove:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousemove:before`](/api/interfaces/objectevents/#mousemove:before)

***

### mouseout

> **mouseout**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent`

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mouseout`](/api/interfaces/objectevents/#mouseout)

***

### mouseover

> **mouseover**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent`

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mouseover`](/api/interfaces/objectevents/#mouseover)

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

[`ObjectEvents`](/api/interfaces/objectevents/).[`mouseup`](/api/interfaces/objectevents/#mouseup)

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

[`ObjectEvents`](/api/interfaces/objectevents/).[`mouseup:before`](/api/interfaces/objectevents/#mouseup:before)

***

### mousewheel

> **mousewheel**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousewheel`](/api/interfaces/objectevents/#mousewheel)

***

### moving

> **moving**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`moving`](/api/interfaces/objectevents/#moving)

#### Defined in

[src/EventTypeDefs.ts:115](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L115)

***

### object:added

> **object:added**: `object`

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:added`](/api/interfaces/collectionevents/#object:added)

#### Defined in

[src/EventTypeDefs.ts:230](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L230)

***

### object:removed

> **object:removed**: `object`

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:removed`](/api/interfaces/collectionevents/#object:removed)

#### Defined in

[src/EventTypeDefs.ts:231](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L231)

***

### removed

> **removed**: `object`

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`removed`](/api/interfaces/objectevents/#removed)

#### Defined in

[src/EventTypeDefs.ts:286](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L286)

***

### resizing

> **resizing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`resizing`](/api/interfaces/objectevents/#resizing)

#### Defined in

[src/EventTypeDefs.ts:119](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L119)

***

### rotating

> **rotating**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`rotating`](/api/interfaces/objectevents/#rotating)

#### Defined in

[src/EventTypeDefs.ts:117](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L117)

***

### scaling

> **scaling**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`scaling`](/api/interfaces/objectevents/#scaling)

#### Defined in

[src/EventTypeDefs.ts:116](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L116)

***

### selected

> **selected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`selected`](/api/interfaces/objectevents/#selected)

#### Defined in

[src/EventTypeDefs.ts:277](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L277)

***

### skewing

> **skewing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`skewing`](/api/interfaces/objectevents/#skewing)

#### Defined in

[src/EventTypeDefs.ts:118](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L118)
