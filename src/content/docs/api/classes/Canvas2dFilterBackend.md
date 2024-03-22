---
editUrl: false
next: false
prev: false
title: "Canvas2dFilterBackend"
---

## Constructors

### new Canvas2dFilterBackend()

> **new Canvas2dFilterBackend**(): [`Canvas2dFilterBackend`](Canvas2dFilterBackend.md)

#### Returns

[`Canvas2dFilterBackend`](Canvas2dFilterBackend.md)

## Properties

### resources

> **resources**: [`TPipelineResources`](../type-aliases/TPipelineResources.md) = `{}`

Experimental. This object is a sort of repository of help layers used to avoid
of recreating them during frequent filtering. If you are previewing a filter with
a slider you probably do not want to create help layers every filter step.
in this object there will be appended some canvases, created once, resized sometimes
cleared never. Clearing is left to the developer.

#### Source

src/filters/Canvas2dFilterBackend.ts:15

## Methods

### applyFilters()

> **applyFilters**(`filters`, `sourceElement`, `sourceWidth`, `sourceHeight`, `targetCanvas`): `void` \| [`T2DPipelineState`](../type-aliases/T2DPipelineState.md)

Apply a set of filters against a source image and draw the filtered output
to the provided destination canvas.

#### Parameters

• **filters**: [`BaseFilter`](../namespaces/filters/classes/BaseFilter.md)[]

The filter to apply.

• **sourceElement**: `CanvasImageSource`

The source to be filtered.

• **sourceWidth**: `number`

The width of the source input.

• **sourceHeight**: `number`

The height of the source input.

• **targetCanvas**: `HTMLCanvasElement`

The destination for filtered output to be drawn.

#### Returns

`void` \| [`T2DPipelineState`](../type-aliases/T2DPipelineState.md)

#### Source

src/filters/Canvas2dFilterBackend.ts:27
