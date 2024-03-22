---
editUrl: false
next: false
prev: false
title: "FixedLayout"
---

Layout will keep target's initial size.

## Extends

- [`LayoutStrategy`](LayoutStrategy.md)

## Constructors

### new FixedLayout()

> **new FixedLayout**(): [`FixedLayout`](FixedLayout.md)

#### Returns

[`FixedLayout`](FixedLayout.md)

#### Inherited from

[`LayoutStrategy`](LayoutStrategy.md).[`constructor`](LayoutStrategy.md#constructors)

## Properties

### type

> **`static`** **`readonly`** **type**: `"fixed"` = `'fixed'`

override by subclass for persistence (TS does not support `static abstract`)

#### Overrides

[`LayoutStrategy`](LayoutStrategy.md).[`type`](LayoutStrategy.md#type)

#### Source

src/LayoutManager/LayoutStrategies/FixedLayout.ts:14

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

> **getInitialSize**(`__namedParameters`, `__namedParameters`): [`Point`](Point.md)

respect target's initial size

#### Parameters

• **\_\_namedParameters**: [`StrictLayoutContext`](../type-aliases/StrictLayoutContext.md) & [`CommonLayoutContext`](../type-aliases/CommonLayoutContext.md) & `Object`

• **\_\_namedParameters**: `Pick`\<[`LayoutStrategyResult`](../type-aliases/LayoutStrategyResult.md), `"center"` \| `"size"`\>

#### Returns

[`Point`](Point.md)

#### Overrides

[`LayoutStrategy`](LayoutStrategy.md).[`getInitialSize`](LayoutStrategy.md#getinitialsize)

#### Source

src/LayoutManager/LayoutStrategies/FixedLayout.ts:19

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

#### Parameters

• **context**: [`StrictLayoutContext`](../type-aliases/StrictLayoutContext.md)

#### Returns

`boolean`

#### Inherited from

[`LayoutStrategy`](LayoutStrategy.md).[`shouldPerformLayout`](LayoutStrategy.md#shouldperformlayout)

#### Source

src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:40
