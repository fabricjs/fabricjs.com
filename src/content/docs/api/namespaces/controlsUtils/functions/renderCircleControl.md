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

• **this**: [`Control`](../../../classes/Control.md)

• **ctx**: `CanvasRenderingContext2D`

context to render on

• **left**: `number`

x coordinate where the control center should be

• **top**: `number`

y coordinate where the control center should be

• **styleOverride**: `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](../../../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../../../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\>, `"cornerStyle"` \| `"cornerSize"` \| `"cornerColor"` \| `"cornerStrokeColor"` \| `"cornerDashArray"` \| `"transparentCorners"`\>\>

override for FabricObject controls style

• **fabricObject**: `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](../../../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../../../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\>

the fabric object for which we are rendering controls

## Returns

`void`

## Source

src/controls/controlRendering.ts:37
