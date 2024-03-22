---
editUrl: false
next: false
prev: false
title: "makePathSimpler"
---

> **makePathSimpler**(`path`): [`TSimplePathData`](../type-aliases/TSimplePathData.md)

This function takes a parsed SVG path and makes it simpler for fabricJS logic.
Simplification consist of:
- All commands converted to absolute (lowercase to uppercase)
- S converted to C
- T converted to Q
- A converted to C

## Parameters

• **path**: [`TComplexPathData`](../type-aliases/TComplexPathData.md)

the array of commands of a parsed SVG path for `Path`

## Returns

[`TSimplePathData`](../type-aliases/TSimplePathData.md)

the simplified array of commands of a parsed SVG path for `Path`
TODO: figure out how to remove the type assertions in a nice way

## Source

src/util/path/index.ts:351
