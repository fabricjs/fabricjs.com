---
editUrl: false
next: false
prev: false
title: "LayoutStrategy"
---

Exposes a main public method [calcLayoutResult](../../../../api/classes/layoutstrategy/#calclayoutresult) that is used by the `LayoutManager` to perform layout.
Returning `undefined` signals the `LayoutManager` to skip the layout.

In charge of calculating the bounding box of the passed objects.

## Extended by

- [`ClipPathLayout`](ClipPathLayout.md)
- [`FitContentLayout`](FitContentLayout.md)
- [`FixedLayout`](FixedLayout.md)

## Constructors

### new LayoutStrategy()

> **new LayoutStrategy**(): [`LayoutStrategy`](LayoutStrategy.md)

#### Returns

[`LayoutStrategy`](LayoutStrategy.md)

## Properties

### type

> **`static`** **type**: `string` = `'strategy'`

override by subclass for persistence (TS does not support `static abstract`)

#### Source

src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:25

## Methods

### calcBoundingBox()

> **calcBoundingBox**(`objects`, `context`): `undefined` \| [`LayoutStrategyResult`](../type-aliases/LayoutStrategyResult.md)

Override this method to customize layout.

#### Parameters

• **objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

• **context**: [`StrictLayoutContext`](../type-aliases/StrictLayoutContext.md)

#### Returns

`undefined` \| [`LayoutStrategyResult`](../type-aliases/LayoutStrategyResult.md)

#### Source

src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:66

***

### calcLayoutResult()

> **calcLayoutResult**(`context`, `objects`): `undefined` \| [`LayoutStrategyResult`](../type-aliases/LayoutStrategyResult.md)

Used by the `LayoutManager` to perform layout

#### Parameters

• **context**: [`StrictLayoutContext`](../type-aliases/StrictLayoutContext.md)

• **objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Returns

`undefined` \| [`LayoutStrategyResult`](../type-aliases/LayoutStrategyResult.md)

layout result **OR** `undefined` to skip layout

#### Source

src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:31

***

### getInitialSize()

> **getInitialSize**(`context`, `result`): [`Point`](Point.md)

#### Parameters

• **context**: [`StrictLayoutContext`](../type-aliases/StrictLayoutContext.md) & [`CommonLayoutContext`](../type-aliases/CommonLayoutContext.md) & `Object`

• **result**: `Pick`\<[`LayoutStrategyResult`](../type-aliases/LayoutStrategyResult.md), `"center"` \| `"size"`\>

#### Returns

[`Point`](Point.md)

#### Source

src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:56

***

### shouldLayoutClipPath()

> **shouldLayoutClipPath**(`__namedParameters`): `undefined` \| `boolean`

#### Parameters

• **\_\_namedParameters**: [`StrictLayoutContext`](../type-aliases/StrictLayoutContext.md)

#### Returns

`undefined` \| `boolean`

#### Source

src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:48

***

### shouldPerformLayout()

> **shouldPerformLayout**(`context`): `boolean`

#### Parameters

• **context**: [`StrictLayoutContext`](../type-aliases/StrictLayoutContext.md)

#### Returns

`boolean`

#### Source

src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:40
