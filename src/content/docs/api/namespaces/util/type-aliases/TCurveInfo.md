---
editUrl: false
next: false
prev: false
title: "TCurveInfo"
---

> **TCurveInfo**\<`C`\>: [`TPathSegmentInfoCommon`](TPathSegmentInfoCommon.md)\<`C`\> & `Object`

## Type declaration

### angleFinder()

> **angleFinder**: (`pct`) => `number`

Get the angle to a percent

#### Parameters

• **pct**: `number`

#### Returns

`number`

### iterator()

> **iterator**: (`pct`) => [`Point`](../../../classes/Point.md)

Get the Point a certain percent distance along the curve

#### Parameters

• **pct**: `number`

#### Returns

[`Point`](../../../classes/Point.md)

### length

> **length**: `number`

Total length of the curve

## Type parameters

• **C** extends `string`

## Source

src/util/path/typedefs.ts:11
