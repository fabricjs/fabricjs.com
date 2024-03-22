---
editUrl: false
next: false
prev: false
title: "StaticCanvasEvents"
---

## Extends

- [`CollectionEvents`](CollectionEvents.md)

## Properties

### after:render

> **after:render**: `Object`

#### ctx

> **ctx**: `CanvasRenderingContext2D`

#### Source

src/EventTypeDefs.ts:296

***

### before:render

> **before:render**: `Object`

#### ctx

> **ctx**: `CanvasRenderingContext2D`

#### Source

src/EventTypeDefs.ts:295

***

### canvas:cleared

> **canvas:cleared**: `never`

#### Source

src/EventTypeDefs.ts:292

***

### object:added

> **object:added**: `Object`

#### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`CollectionEvents`](CollectionEvents.md).[`object:added`](CollectionEvents.md#object:added)

#### Source

src/EventTypeDefs.ts:228

***

### object:layout:after

> **object:layout:after**: [`LayoutAfterEvent`](../type-aliases/LayoutAfterEvent.md) & `Object`

#### Type declaration

##### target

> **target**: [`Group`](../classes/Group.md)

#### Source

src/EventTypeDefs.ts:298

***

### object:layout:before

> **object:layout:before**: [`LayoutBeforeEvent`](../type-aliases/LayoutBeforeEvent.md) & `Object`

#### Type declaration

##### target

> **target**: [`Group`](../classes/Group.md)

#### Source

src/EventTypeDefs.ts:297

***

### object:removed

> **object:removed**: `Object`

#### target

> **target**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[`CollectionEvents`](CollectionEvents.md).[`object:removed`](CollectionEvents.md#object:removed)

#### Source

src/EventTypeDefs.ts:229
