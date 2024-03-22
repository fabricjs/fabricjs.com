---
editUrl: false
next: false
prev: false
title: "LayoutManager"
---

## Constructors

### new LayoutManager(strategy)

> **new LayoutManager**(`strategy`): [`LayoutManager`](LayoutManager.md)

#### Parameters

• **strategy**: [`LayoutStrategy`](LayoutStrategy.md)= `undefined`

#### Returns

[`LayoutManager`](LayoutManager.md)

#### Source

src/LayoutManager/LayoutManager.ts:39

## Properties

### strategy

> **strategy**: [`LayoutStrategy`](LayoutStrategy.md)

#### Source

src/LayoutManager/LayoutManager.ts:37

## Methods

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Source

src/LayoutManager/LayoutManager.ts:309

***

### performLayout()

> **performLayout**(`context`): `void`

#### Parameters

• **context**: [`LayoutContext`](../type-aliases/LayoutContext.md)

#### Returns

`void`

#### Source

src/LayoutManager/LayoutManager.ts:44

***

### subscribeTargets()

> **subscribeTargets**(`context`): `void`

#### Parameters

• **context**: [`RegistrationContext`](../type-aliases/RegistrationContext.md) & `Partial`\<[`StrictLayoutContext`](../type-aliases/StrictLayoutContext.md)\>

#### Returns

`void`

#### Source

src/LayoutManager/LayoutManager.ts:123

***

### toJSON()

> **toJSON**(): `Object`

#### Returns

`Object`

##### strategy

> **strategy**: `string`

##### type

> **type**: `string` = `LAYOUT_MANAGER`

#### Source

src/LayoutManager/LayoutManager.ts:321

***

### toObject()

> **toObject**(): `Object`

#### Returns

`Object`

##### strategy

> **strategy**: `string`

##### type

> **type**: `string` = `LAYOUT_MANAGER`

#### Source

src/LayoutManager/LayoutManager.ts:314

***

### unsubscribeTargets()

> **unsubscribeTargets**(`context`): `void`

#### Parameters

• **context**: [`RegistrationContext`](../type-aliases/RegistrationContext.md) & `Partial`\<[`StrictLayoutContext`](../type-aliases/StrictLayoutContext.md)\>

#### Returns

`void`

#### Source

src/LayoutManager/LayoutManager.ts:117
