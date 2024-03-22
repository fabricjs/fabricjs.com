---
editUrl: false
next: false
prev: false
title: "scaleOrSkewActionName"
---

> **scaleOrSkewActionName**(`eventData`, `control`, `fabricObject`): `""` \| [`TAxisKey`](../../../type-aliases/TAxisKey.md)\<`"scale"` \| `"skew"`\>

Inspect event, control and fabricObject to return the correct action name

## Parameters

• **eventData**: [`TPointerEvent`](../../../type-aliases/TPointerEvent.md)

the javascript event that is causing the scale

• **control**: [`Control`](../../../classes/Control.md)

the control that is interested in the action

• **fabricObject**: [`FabricObject`](../../../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../../../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../../../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\>

the fabric object that is interested in the action

## Returns

`""` \| [`TAxisKey`](../../../type-aliases/TAxisKey.md)\<`"scale"` \| `"skew"`\>

an action name

## Source

src/controls/scaleSkew.ts:23
