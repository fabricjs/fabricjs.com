---
editUrl: false
next: false
prev: false
title: "addTransformToObject"
---

> **addTransformToObject**(`object`, `transform`): `void`

given an object and a transform, apply the transform to the object.
this is equivalent to change the space where the object is drawn.
Adding to an object a transform that scale by 2 is like scaling it by 2.
This is used when removing an object from an active selection for example.

## Parameters

• **object**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../../../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\>

the object you want to transform

• **transform**: [`TMat2D`](../../../type-aliases/TMat2D.md)

the destination transform

## Returns

`void`

## Source

src/util/misc/objectTransforms.ts:43
