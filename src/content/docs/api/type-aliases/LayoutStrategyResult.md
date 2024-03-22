---
editUrl: false
next: false
prev: false
title: "LayoutStrategyResult"
---

> **LayoutStrategyResult**: `Object`

## Type declaration

### center

> **center**: [`Point`](../classes/Point.md)

new center point as measured by the **containing** plane (same as `left` with `originX` set to `center`)

### correction?

> **`optional`** **correction**: [`Point`](../classes/Point.md)

correction vector to translate objects by, measured in the same plane as `center`

Since objects are measured relative to the group's center, once the group's size changes we must apply a correction to
the objects' positions so that they relate to the new center.
In other words, this value makes it possible to layout objects relative to the tl corner, for instance, but not only.

### relativeCorrection?

> **`optional`** **relativeCorrection**: [`Point`](../classes/Point.md)

correction vector to translate objects by as measured by the plane

### size

> **size**: [`Point`](../classes/Point.md)

new width and height of the layout target

## Source

src/LayoutManager/types.ts:28
