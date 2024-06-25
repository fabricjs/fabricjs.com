---
editUrl: false
next: false
prev: false
title: "scaleOrSkewActionName"
---

> **scaleOrSkewActionName**(`eventData`, `control`, `fabricObject`): `""` \| [`TAxisKey`](/api/type-aliases/taxiskey/)\<`"scale"` \| `"skew"`\>

## Parameters

• **eventData**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

the javascript event that is causing the scale

• **control**: [`Control`](/api/classes/control/)

the control that is interested in the action

• **fabricObject**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

the fabric object that is interested in the action

## Returns

`""` \| [`TAxisKey`](/api/type-aliases/taxiskey/)\<`"scale"` \| `"skew"`\>

an action name

## Defined in

[src/controls/scaleSkew.ts:23](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/controls/scaleSkew.ts#L23)
