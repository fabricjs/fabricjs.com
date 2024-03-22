---
editUrl: false
next: false
prev: false
title: "getSmoothPathFromPoints"
---

> **getSmoothPathFromPoints**(`points`, `correction`?): [`TSimplePathData`](../type-aliases/TSimplePathData.md)

Converts points to a smooth SVG path

## Parameters

• **points**: [`Point`](../../../classes/Point.md)[]

Array of points

• **correction?**: `number`= `0`

Apply a correction to the path (usually we use `width / 1000`). If value is undefined 0 is used as the correction value.

## Returns

[`TSimplePathData`](../type-aliases/TSimplePathData.md)

An array of SVG path commands

## Source

src/util/path/index.ts:905
