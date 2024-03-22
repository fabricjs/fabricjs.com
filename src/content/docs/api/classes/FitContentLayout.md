---
editUrl: false
next: false
prev: false
title: "FitContentLayout"
---

Layout will adjust the bounding box to fit target's objects.

## Extends

- [`LayoutStrategy`](LayoutStrategy.md)

## Constructors

### new FitContentLayout()

> **new FitContentLayout**(): [`FitContentLayout`](FitContentLayout.md)

#### Returns

[`FitContentLayout`](FitContentLayout.md)

#### Inherited from

[`LayoutStrategy`](LayoutStrategy.md).[`constructor`](LayoutStrategy.md#constructors)

## Properties

### type

> **`static`** **`readonly`** **type**: `"fit-content"` = `'fit-content'`

override by subclass for persistence (TS does not support `static abstract`)

#### Overrides

[`LayoutStrategy`](LayoutStrategy.md).[`type`](LayoutStrategy.md#type)

#### Source

src/LayoutManager/LayoutStrategies/FitContentLayout.ts:9

## Methods

### calcBoundingBox()

> **calcBoundingBox**(`objects`, `context`): `undefined` \| [`LayoutStrategyResult`](../type-aliases/LayoutStrategyResult.md)

Override this method to customize layout.

#### Parameters

• **objects**: [`FabricObject`](FabricObject.md)\<`Partial`\<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

• **context**: [`StrictLayoutContext`](../type-aliases/StrictLayoutContext.md)

#### Returns

`undefined` \| [`LayoutStrategyResult`](../type-aliases/LayoutStrategyResult.md)

#### Inherited from

[`LayoutStrategy`](LayoutStrategy.md).[`calcBoundingBox`](LayoutStrategy.md#calcboundingbox)

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

#### Inherited from

[`LayoutStrategy`](LayoutStrategy.md).[`calcLayoutResult`](LayoutStrategy.md#calclayoutresult)

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

#### Inherited from

[`LayoutStrategy`](LayoutStrategy.md).[`getInitialSize`](LayoutStrategy.md#getinitialsize)

#### Source

src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:56

***

### shouldLayoutClipPath()

> **shouldLayoutClipPath**(`__namedParameters`): `undefined` \| `boolean`

#### Parameters

• **\_\_namedParameters**: [`StrictLayoutContext`](../type-aliases/StrictLayoutContext.md)

#### Returns

`undefined` \| `boolean`

#### Inherited from

[`LayoutStrategy`](LayoutStrategy.md).[`shouldLayoutClipPath`](LayoutStrategy.md#shouldlayoutclippath)

#### Source

src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:48

***

### shouldPerformLayout()

> **shouldPerformLayout**(`context`): `boolean`

layout on all triggers
Override at will

#### Parameters

• **context**: [`StrictLayoutContext`](../type-aliases/StrictLayoutContext.md)

#### Returns

`boolean`

#### Overrides

[`LayoutStrategy`](LayoutStrategy.md).[`shouldPerformLayout`](LayoutStrategy.md#shouldperformlayout)

#### Source

src/LayoutManager/LayoutStrategies/FitContentLayout.ts:16
