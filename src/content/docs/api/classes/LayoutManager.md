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

[src/LayoutManager/LayoutManager.ts:39](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L39)

## Properties

### strategy

> **strategy**: [`LayoutStrategy`](/api/classes/layoutstrategy/)

#### Defined in

[src/LayoutManager/LayoutManager.ts:37](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L37)

## Methods

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:330](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L330)

***

### performLayout()

> **performLayout**(`context`): `void`

#### Parameters

• **context**: [`LayoutContext`](/api/type-aliases/layoutcontext/)

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:44](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L44)

***

### subscribeTargets()

> **subscribeTargets**(`context`): `void`

#### Parameters

• **context**: [`RegistrationContext`](/api/type-aliases/registrationcontext/) & `Partial`\<[`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)\>

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:143](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L143)

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

[src/LayoutManager/LayoutManager.ts:342](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L342)

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

[src/LayoutManager/LayoutManager.ts:335](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L335)

***

### unsubscribeTargets()

> **unsubscribeTargets**(`context`): `void`

#### Parameters

• **context**: [`RegistrationContext`](/api/type-aliases/registrationcontext/) & `Partial`\<[`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)\>

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:137](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L137)
