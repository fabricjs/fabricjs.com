---
editUrl: false
next: false
prev: false
title: "findScaleToCover"
---

> **findScaleToCover**(`source`, `destination`): `number`

Finds the scale for the object source to cover entirely the object destination,
keeping aspect ratio intact.
respect the total allowed area for the cache.

## Parameters

• **source**: [`TSize`](../../../type-aliases/TSize.md)

natural unscaled size of the object

• **destination**: [`TSize`](../../../type-aliases/TSize.md)

natural unscaled size of the object

## Returns

`number`

scale factor to apply to source to cover destination

## Source

src/util/misc/findScaleTo.ts:25
