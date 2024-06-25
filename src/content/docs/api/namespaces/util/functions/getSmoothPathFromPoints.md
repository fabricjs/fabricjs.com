---
editUrl: false
next: false
prev: false
title: "getSmoothPathFromPoints"
---

> **getSmoothPathFromPoints**(`points`, `correction`?): [`TSimplePathData`](/api/namespaces/util/type-aliases/tsimplepathdata/)

## Parameters

• **points**: [`Point`](/api/classes/point/)[]

Array of points

• **correction?**: `number` = `0`

Apply a correction to the path (usually we use `width / 1000`). If value is undefined 0 is used as the correction value.

## Returns

[`TSimplePathData`](/api/namespaces/util/type-aliases/tsimplepathdata/)

An array of SVG path commands

## Defined in

[src/util/path/index.ts:907](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/util/path/index.ts#L907)
