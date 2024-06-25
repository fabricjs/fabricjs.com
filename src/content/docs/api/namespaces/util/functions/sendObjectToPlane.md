---
editUrl: false
next: false
prev: false
title: "sendObjectToPlane"
---

> **sendObjectToPlane**(`object`, `from`?, `to`?): [`TMat2D`](/api/type-aliases/tmat2d/)

## Parameters

• **object**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **from?**: [`TMat2D`](/api/type-aliases/tmat2d/)

plane matrix containing object. Passing `undefined` is equivalent to passing the identity matrix, which means `object` is a direct child of canvas.

• **to?**: [`TMat2D`](/api/type-aliases/tmat2d/)

destination plane matrix to contain object. Passing `undefined` means `object` should be sent to the canvas coordinate plane.

## Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

the transform matrix that was applied to `object`

## Defined in

src/util/misc/planeChange.ts:81
