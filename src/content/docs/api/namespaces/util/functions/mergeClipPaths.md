---
editUrl: false
next: false
prev: false
title: "mergeClipPaths"
---

> **mergeClipPaths**(`c1`, `c2`): [`Group`](../../../classes/Group.md)

Merges 2 clip paths into one visually equal clip path

**IMPORTANT**:\
Does **NOT** clone the arguments, clone them proir if necessary.

Creates a wrapper (group) that contains one clip path and is clipped by the other so content is kept where both overlap.
Use this method if both the clip paths may have nested clip paths of their own, so assigning one to the other's clip path property is not possible.

In order to handle the `inverted` property we follow logic described in the following cases:\
**(1)** both clip paths are inverted - the clip paths pass the inverted prop to the wrapper and loose it themselves.\
**(2)** one is inverted and the other isn't - the wrapper shouldn't become inverted and the inverted clip path must clip the non inverted one to produce an identical visual effect.\
**(3)** both clip paths are not inverted - wrapper and clip paths remain unchanged.

## Parameters

• **c1**: [`FabricObject`](../../../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../../../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../../../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\>

• **c2**: [`FabricObject`](../../../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../../../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../../../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\>

## Returns

[`Group`](../../../classes/Group.md)

merged clip path

## Member Of

fabric.util

## Source

src/util/misc/mergeClipPaths.ts:23
