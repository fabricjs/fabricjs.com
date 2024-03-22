---
editUrl: false
next: false
prev: false
title: "isBetweenVectors"
---

> **isBetweenVectors**(`t`, `a`, `b`): `boolean`

Checks if the vector is between two others. It is considered
to be inside when the vector to be tested is between the
initial vector and the final vector (included) in a counterclockwise direction.

## Parameters

• **t**: [`Point`](../../../classes/Point.md)

vector to be tested

• **a**: [`Point`](../../../classes/Point.md)

initial vector

• **b**: [`Point`](../../../classes/Point.md)

final vector

## Returns

`boolean`

true if the vector is among the others

## Source

src/util/misc/vectors.ts:94
