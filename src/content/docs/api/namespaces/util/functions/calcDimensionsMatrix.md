---
editUrl: false
next: false
prev: false
title: "calcDimensionsMatrix"
---

> **calcDimensionsMatrix**(`options`): [`TMat2D`](../../../type-aliases/TMat2D.md)

Returns a transform matrix starting from an object of the same kind of
the one returned from qrDecompose, useful also if you want to calculate some
transformations from an object that is not enlived yet.
is called DimensionsTransformMatrix because those properties are the one that influence
the size of the resulting box of the object.

## Parameters

• **options**: [`TScaleMatrixArgs`](../type-aliases/TScaleMatrixArgs.md)

## Returns

[`TMat2D`](../../../type-aliases/TMat2D.md)

transform matrix

## Source

src/util/misc/matrix.ts:272
