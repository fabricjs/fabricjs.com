---
editUrl: false
next: false
prev: false
title: "multiplyTransformMatrixArray"
---

> **multiplyTransformMatrixArray**(`matrices`, `is2x2`?): [`TMat2D`](../../../type-aliases/TMat2D.md)

Multiplies matrices such that a matrix defines the plane for the rest of the matrices **after** it

`multiplyTransformMatrixArray([A, B, C, D])` is equivalent to `A(B(C(D)))`

## Parameters

• **matrices**: (`undefined` \| `null` \| `false` \| [`TMat2D`](../../../type-aliases/TMat2D.md))[]

an array of matrices

• **is2x2?**: `boolean`

flag to multiply matrices as 2x2 matrices

## Returns

[`TMat2D`](../../../type-aliases/TMat2D.md)

the multiplication product

## Source

src/util/misc/matrix.ts:96
