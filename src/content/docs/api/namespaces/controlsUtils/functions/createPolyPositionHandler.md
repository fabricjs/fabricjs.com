---
editUrl: false
next: false
prev: false
title: "createPolyPositionHandler"
---

> **createPolyPositionHandler**(`pointIndex`): (`dim`, `finalMatrix`, `polyObject`) => [`Point`](../../../classes/Point.md)

This function locates the controls.
It'll be used both for drawing and for interaction.

## Parameters

• **pointIndex**: `number`

## Returns

`Function`

> ### Parameters
>
> • **dim**: [`Point`](../../../classes/Point.md)
>
> • **finalMatrix**: [`TMat2D`](../../../type-aliases/TMat2D.md)
>
> • **polyObject**: [`Polyline`](../../../classes/Polyline.md)\<`Partial`\<[`FabricObjectProps`](../../../interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](../../../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\>
>
> ### Returns
>
> [`Point`](../../../classes/Point.md)
>

## Source

src/controls/polyControl.ts:23
