---
editUrl: false
next: false
prev: false
title: "calcPlaneChangeMatrix"
---

> **calcPlaneChangeMatrix**(`from`?, `to`?): [`TMat2D`](../../../type-aliases/TMat2D.md)

We are actually looking for the transformation from the destination plane to the source plane (change of basis matrix)\
The object will exist on the destination plane and we want it to seem unchanged by it so we invert the destination matrix (`to`) and then apply the source matrix (`from`)

## Parameters

• **from?**: [`TMat2D`](../../../type-aliases/TMat2D.md)= `iMatrix`

• **to?**: [`TMat2D`](../../../type-aliases/TMat2D.md)= `iMatrix`

## Returns

[`TMat2D`](../../../type-aliases/TMat2D.md)

## Source

src/util/misc/planeChange.ts:15
