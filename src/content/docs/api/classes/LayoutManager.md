---
editUrl: false
next: false
prev: false
title: "LayoutManager"
---

## Constructors

### new LayoutManager()

> **new LayoutManager**(`strategy`): [`LayoutManager`](/api/classes/layoutmanager/)

#### Parameters

• **strategy**: [`LayoutStrategy`](/api/classes/layoutstrategy/) = `...`

#### Returns

[`LayoutManager`](/api/classes/layoutmanager/)

#### Defined in

src/LayoutManager/LayoutManager.ts:39

## Properties

### strategy

> **strategy**: [`LayoutStrategy`](/api/classes/layoutstrategy/)

#### Defined in

src/LayoutManager/LayoutManager.ts:37

## Methods

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Defined in

src/LayoutManager/LayoutManager.ts:330

***

### performLayout()

> **performLayout**(`context`): `void`

#### Parameters

• **context**: [`LayoutContext`](/api/type-aliases/layoutcontext/)

#### Returns

`void`

#### Defined in

src/LayoutManager/LayoutManager.ts:44

***

### subscribeTargets()

> **subscribeTargets**(`context`): `void`

#### Parameters

• **context**: [`RegistrationContext`](/api/type-aliases/registrationcontext/) & `Partial`\<[`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)\>

#### Returns

`void`

#### Defined in

src/LayoutManager/LayoutManager.ts:143

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### strategy

> **strategy**: `string`

##### type

> **type**: `string` = `LAYOUT_MANAGER`

#### Defined in

src/LayoutManager/LayoutManager.ts:342

***

### toObject()

> **toObject**(): `object`

#### Returns

`object`

##### strategy

> **strategy**: `string`

##### type

> **type**: `string` = `LAYOUT_MANAGER`

#### Defined in

src/LayoutManager/LayoutManager.ts:335

***

### unsubscribeTargets()

> **unsubscribeTargets**(`context`): `void`

#### Parameters

• **context**: [`RegistrationContext`](/api/type-aliases/registrationcontext/) & `Partial`\<[`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)\>

#### Returns

`void`

#### Defined in

src/LayoutManager/LayoutManager.ts:137
