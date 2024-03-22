---
editUrl: false
next: false
prev: false
title: "saveObjectTransform"
---

> **saveObjectTransform**(`target`): `Object`

Extract Object transform values

## Parameters

• **target**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../../../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\>

object to read from

## Returns

`Object`

Components of transform

### angle

> **angle**: [`TDegree`](../../../type-aliases/TDegree.md) = `target.angle`

### flipX

> **flipX**: `boolean` = `target.flipX`

### flipY

> **flipY**: `boolean` = `target.flipY`

### left

> **left**: `number` = `target.left`

### scaleX

> **scaleX**: `number` = `target.scaleX`

### scaleY

> **scaleY**: `number` = `target.scaleY`

### skewX

> **skewX**: `number` = `target.skewX`

### skewY

> **skewY**: `number` = `target.skewY`

### top

> **top**: `number` = `target.top`

## Source

src/util/misc/objectTransforms.ts:86
