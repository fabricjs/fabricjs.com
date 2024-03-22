---
editUrl: false
next: false
prev: false
title: "createRotateMatrix"
---

> **createRotateMatrix**(`angle`, `pivotPoint`?): [`TMat2D`](../../../type-aliases/TMat2D.md)

Generate a rotation matrix around around a point (x,y), defaulting to (0,0)

A matrix in the form of
[cos(a) -sin(a) -x*cos(a)+y*sin(a)+x]
[sin(a)  cos(a) -x*sin(a)-y*cos(a)+y]
[0       0      1                 ]

## Parameters

• **angle**: [`TRotateMatrixArgs`](../type-aliases/TRotateMatrixArgs.md)= `{}`

rotation in degrees

• **pivotPoint?**: `Partial`\<[`XY`](../../../interfaces/XY.md)\>= `{}`

pivot point to rotate around

## Returns

[`TMat2D`](../../../type-aliases/TMat2D.md)

matrix

## Source

src/util/misc/matrix.ts:167
