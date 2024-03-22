---
editUrl: false
next: false
prev: false
title: "sizeAfterTransform"
---

> **sizeAfterTransform**(`width`, `height`, `t`): [`Point`](../../../classes/Point.md)

given a width and height, return the size of the bounding box
that can contains the box with width/height with applied transform.
Use to calculate the boxes around objects for controls.

## Parameters

• **width**: `number`

• **height**: `number`

• **t**: [`TMat2D`](../../../type-aliases/TMat2D.md)

## Returns

[`Point`](../../../classes/Point.md)

size

## Source

src/util/misc/objectTransforms.ts:107
