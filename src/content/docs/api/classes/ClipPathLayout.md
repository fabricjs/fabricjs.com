---
editUrl: false
next: false
prev: false
title: "ClipPathLayout"
---

Layout will adjust the bounding box to match the clip path bounding box.

## Extends

- [`LayoutStrategy`](LayoutStrategy.md)

## Constructors

### new ClipPathLayout()

> **new ClipPathLayout**(): [`ClipPathLayout`](ClipPathLayout.md)

#### Returns

[`ClipPathLayout`](ClipPathLayout.md)

#### Inherited from

[`LayoutStrategy`](LayoutStrategy.md).[`constructor`](LayoutStrategy.md#constructors)

## Properties

### type

> **`static`** **`readonly`** **type**: `"clip-path"` = `'clip-path'`

override by subclass for persistence (TS does not support `static abstract`)

#### Overrides

[`LayoutStrategy`](LayoutStrategy.md).[`type`](LayoutStrategy.md#type)

#### Source

src/LayoutManager/LayoutStrategies/ClipPathLayout.ts:14

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

#### Overrides

[`LayoutStrategy`](LayoutStrategy.md).[`calcLayoutResult`](LayoutStrategy.md#calclayoutresult)

#### Source

src/LayoutManager/LayoutStrategies/ClipPathLayout.ts:24

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

> **shouldLayoutClipPath**(): `boolean`

#### Returns

`boolean`

#### Overrides

[`LayoutStrategy`](LayoutStrategy.md).[`shouldLayoutClipPath`](LayoutStrategy.md#shouldlayoutclippath)

#### Source

src/LayoutManager/LayoutStrategies/ClipPathLayout.ts:20

***

### shouldPerformLayout()

> **shouldPerformLayout**(`context`): `boolean`

#### Parameters

• **context**: [`StrictLayoutContext`](../type-aliases/StrictLayoutContext.md)

#### Returns

`boolean`

#### Overrides

[`LayoutStrategy`](LayoutStrategy.md).[`shouldPerformLayout`](LayoutStrategy.md#shouldperformlayout)

#### Source

src/LayoutManager/LayoutStrategies/ClipPathLayout.ts:16
