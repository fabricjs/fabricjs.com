---
editUrl: false
next: false
prev: false
title: "transformPath"
---

> **transformPath**(`path`, `transform`, `pathOffset`?): [`TSimplePathData`](../type-aliases/TSimplePathData.md)

Transform a path by transforming each segment.
it has to be a simplified path or it won't work.
WARNING: this depends from pathOffset for correct operation

## Parameters

• **path**: [`TSimplePathData`](../type-aliases/TSimplePathData.md)

fabricJS parsed and simplified path commands

• **transform**: [`TMat2D`](../../../type-aliases/TMat2D.md)

matrix that represent the transformation

• **pathOffset?**: [`Point`](../../../classes/Point.md)

`Path.pathOffset`

## Returns

[`TSimplePathData`](../type-aliases/TSimplePathData.md)

the transformed path

## Source

src/util/path/index.ts:961
