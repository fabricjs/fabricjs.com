---
editUrl: false
next: false
prev: false
title: "renderCircleControl"
---

> **renderCircleControl**(`this`, `ctx`, `left`, `top`, `styleOverride`, `fabricObject`): `void`

Render a round control, as per fabric features.
This function is written to respect object properties like transparentCorners, cornerSize
cornerColor, cornerStrokeColor
plus the addition of offsetY and offsetX.

## Parameters

• **this**: [`Control`](/api/classes/control/)

• **ctx**: `CanvasRenderingContext2D`

context to render on

• **left**: `number`

x coordinate where the control center should be

• **top**: `number`

y coordinate where the control center should be

• **styleOverride**: `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>, `"cornerStyle"` \| `"cornerSize"` \| `"cornerColor"` \| `"cornerStrokeColor"` \| `"cornerDashArray"` \| `"transparentCorners"`\>\>

override for FabricObject controls style

• **fabricObject**: `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

the fabric object for which we are rendering controls

## Returns

`void`

## Defined in

[src/controls/controlRendering.ts:37](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/controls/controlRendering.ts#L37)
