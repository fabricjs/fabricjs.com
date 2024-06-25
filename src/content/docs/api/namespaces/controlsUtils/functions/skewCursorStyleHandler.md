---
editUrl: false
next: false
prev: false
title: "skewCursorStyleHandler"
---

> **skewCursorStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

## Parameters

• **eventData**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

the javascript event that is causing the scale

• **control**: [`Control`](/api/classes/control/)

the control that is interested in the action

• **fabricObject**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

the fabric object that is interested in the action

## Returns

`string`

a valid css string for the cursor

## Defined in

src/controls/skew.ts:64
