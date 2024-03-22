---
editUrl: false
next: false
prev: false
title: "parsePath"
---

> **parsePath**(`pathString`): [`TComplexPathData`](../type-aliases/TComplexPathData.md)

## Parameters

• **pathString**: `string`

## Returns

[`TComplexPathData`](../type-aliases/TComplexPathData.md)

An array of SVG path commands

## Example

```ts
parsePath('M 3 4 Q 3 5 2 1 4 0 Q 9 12 2 1 4 0') === [
  ['M', 3, 4],
  ['Q', 3, 5, 2, 1, 4, 0],
  ['Q', 9, 12, 2, 1, 4, 0],
];
```

## Source

src/util/path/index.ts:844
