---
editUrl: false
next: false
prev: false
title: "getFilterBackend"
---

> **getFilterBackend**(`strict`?): `FilterBackend`

Get the current fabricJS filter backend  or initialize one if not available yet

## Parameters

• **strict?**: `boolean` = `true`

pass `true` to create the backend if it wasn't created yet (default behavior),
pass `false` to get the backend ref without mutating it

## Returns

`FilterBackend`

## Defined in

[src/filters/FilterBackend.ts:29](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/filters/FilterBackend.ts#L29)
