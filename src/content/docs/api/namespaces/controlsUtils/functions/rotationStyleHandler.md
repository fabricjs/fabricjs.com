---
editUrl: false
next: false
prev: false
title: "rotationStyleHandler"
---

> **rotationStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

Find the correct style for the control that is used for rotation.
this function is very simple and it just take care of not-allowed or standard cursor

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

src/controls/rotate.ts:18
