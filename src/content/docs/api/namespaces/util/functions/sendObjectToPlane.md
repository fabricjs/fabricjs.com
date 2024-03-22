---
editUrl: false
next: false
prev: false
title: "sendObjectToPlane"
---

> **sendObjectToPlane**(`object`, `from`?, `to`?): [`TMat2D`](../../../type-aliases/TMat2D.md)

A util that abstracts applying transform to objects.\
Sends `object` to the destination coordinate plane by applying the relevant transformations.\
Changes the space/plane where `object` is drawn.\
From the canvas/viewer's perspective `object` remains unchanged.

## Parameters

• **object**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](../../../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../../../interfaces/ObjectEvents.md)\>

• **from?**: [`TMat2D`](../../../type-aliases/TMat2D.md)

plane matrix containing object. Passing `undefined` is equivalent to passing the identity matrix, which means `object` is a direct child of canvas.

• **to?**: [`TMat2D`](../../../type-aliases/TMat2D.md)

destination plane matrix to contain object. Passing `undefined` means `object` should be sent to the canvas coordinate plane.

## Returns

[`TMat2D`](../../../type-aliases/TMat2D.md)

the transform matrix that was applied to `object`

## Example

```ts
let obj, obj2;
let clipPath = new Circle({ radius: 50 });
obj.clipPath = clipPath;
// render
sendObjectToPlane(clipPath, obj.calcTransformMatrix(), obj2.calcTransformMatrix());
obj.clipPath = undefined;
obj2.clipPath = clipPath;
// render, clipPath now clips obj2 but seems unchanged from the eyes of the viewer
```

## Example

```ts
let obj, existingObj;
let clipPath = new Circle({ radius: 50 });
obj.clipPath = clipPath;
let transformTo = multiplyTransformMatrices(obj.calcTransformMatrix(), clipPath.calcTransformMatrix());
sendObjectToPlane(existingObj, existingObj.group?.calcTransformMatrix(), transformTo);
clipPath.clipPath = existingObj;
```

## Source

src/util/misc/planeChange.ts:81
