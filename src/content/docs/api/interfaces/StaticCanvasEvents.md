---
editUrl: false
next: false
prev: false
title: "StaticCanvasEvents"
---

## Extends

- [`CollectionEvents`](/api/interfaces/collectionevents/)

## Extended by

- [`CanvasEvents`](/api/interfaces/canvasevents/)

## Properties

### after:render

> **after:render**: `object`

#### ctx

> **ctx**: `CanvasRenderingContext2D`

#### Defined in

src/EventTypeDefs.ts:296

***

### before:render

> **before:render**: `object`

#### ctx

> **ctx**: `CanvasRenderingContext2D`

#### Defined in

src/EventTypeDefs.ts:295

***

### canvas:cleared

> **canvas:cleared**: `never`

#### Defined in

src/EventTypeDefs.ts:292

***

### object:added

> **object:added**: `object`

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:added`](/api/interfaces/collectionevents/#object:added)

#### Defined in

src/EventTypeDefs.ts:228

***

### object:layout:after

> **object:layout:after**: [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/) & `object`

#### Type declaration

##### target

> **target**: [`Group`](/api/classes/group/)

#### Defined in

src/EventTypeDefs.ts:298

***

### object:layout:before

> **object:layout:before**: [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) & `object`

#### Type declaration

##### target

> **target**: [`Group`](/api/classes/group/)

#### Defined in

src/EventTypeDefs.ts:297

***

### object:removed

> **object:removed**: `object`

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:removed`](/api/interfaces/collectionevents/#object:removed)

#### Defined in

src/EventTypeDefs.ts:229
