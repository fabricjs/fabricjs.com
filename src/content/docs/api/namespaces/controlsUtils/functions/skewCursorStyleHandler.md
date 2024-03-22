---
editUrl: false
next: false
prev: false
title: "skewCursorStyleHandler"
---

> **skewCursorStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

return the correct cursor style for the skew action

## Parameters

• **eventData**: [`TPointerEvent`](../../../type-aliases/TPointerEvent.md)

the javascript event that is causing the scale

• **control**: [`Control`](../../../classes/Control.md)

the control that is interested in the action

• **fabricObject**: [`FabricObject`](../../../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../../../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../../../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\>

the fabric object that is interested in the action

## Returns

`string`

a valid css string for the cursor

## Source

src/controls/skew.ts:64
