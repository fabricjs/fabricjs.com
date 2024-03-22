---
editUrl: false
next: false
prev: false
title: "Intersection"
---

## Constructors

### new Intersection(status)

> **new Intersection**(`status`?): [`Intersection`](Intersection.md)

#### Parameters

• **status?**: [`IntersectionType`](../type-aliases/IntersectionType.md)

#### Returns

[`Intersection`](Intersection.md)

#### Source

src/Intersection.ts:13

## Properties

### points

> **points**: [`Point`](Point.md)[]

#### Source

src/Intersection.ts:9

***

### status?

> **`optional`** **status**: [`IntersectionType`](../type-aliases/IntersectionType.md)

#### Source

src/Intersection.ts:11

## Methods

### intersectLineLine()

> **`static`** **intersectLineLine**(`a1`, `a2`, `b1`, `b2`, `aInfinite`?, `bInfinite`?): [`Intersection`](Intersection.md)

Checks if a line intersects another

#### Parameters

• **a1**: [`Point`](Point.md)

• **a2**: [`Point`](Point.md)

• **b1**: [`Point`](Point.md)

• **b2**: [`Point`](Point.md)

• **aInfinite?**: `boolean`= `true`

check segment intersection by passing `false`

• **bInfinite?**: `boolean`= `true`

check segment intersection by passing `false`

#### Returns

[`Intersection`](Intersection.md)

#### See

 - [line intersection](https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection)
 - [Cramer's rule](https://en.wikipedia.org/wiki/Cramer%27s_rule)

#### Static

#### Source

src/Intersection.ts:127

***

### intersectLinePolygon()

> **`static`** **intersectLinePolygon**(`a1`, `a2`, `points`, `infinite`?): [`Intersection`](Intersection.md)

Checks if line intersects polygon

#### Parameters

• **a1**: [`Point`](Point.md)

point on line

• **a2**: [`Point`](Point.md)

other point on line

• **points**: [`Point`](Point.md)[]

polygon points

• **infinite?**: `boolean`= `true`

check segment intersection by passing `false`

#### Returns

[`Intersection`](Intersection.md)

#### Todo

account for stroke

#### Static

#### See

[intersectSegmentPolygon](Intersection.md#intersectsegmentpolygon) for segment intersection

#### Source

src/Intersection.ts:224

***

### intersectPolygonPolygon()

> **`static`** **intersectPolygonPolygon**(`points1`, `points2`): [`Intersection`](Intersection.md)

Checks if polygon intersects another polygon

#### Parameters

• **points1**: [`Point`](Point.md)[]

• **points2**: [`Point`](Point.md)[]

#### Returns

[`Intersection`](Intersection.md)

#### Todo

account for stroke

#### Static

#### Source

src/Intersection.ts:277

***

### intersectPolygonRectangle()

> **`static`** **intersectPolygonRectangle**(`points`, `r1`, `r2`): [`Intersection`](Intersection.md)

Checks if polygon intersects rectangle

#### Parameters

• **points**: [`Point`](Point.md)[]

polygon points

• **r1**: [`Point`](Point.md)

top left point of rect

• **r2**: [`Point`](Point.md)

bottom right point of rect

#### Returns

[`Intersection`](Intersection.md)

#### Static

#### See

[intersectPolygonPolygon](Intersection.md#intersectpolygonpolygon) for polygon intersection

#### Source

src/Intersection.ts:315

***

### intersectSegmentLine()

> **`static`** **intersectSegmentLine**(`s1`, `s2`, `l1`, `l2`): [`Intersection`](Intersection.md)

Checks if a segment intersects a line

#### Parameters

• **s1**: [`Point`](Point.md)

boundary point of segment

• **s2**: [`Point`](Point.md)

other boundary point of segment

• **l1**: [`Point`](Point.md)

point on line

• **l2**: [`Point`](Point.md)

other point on line

#### Returns

[`Intersection`](Intersection.md)

#### See

[intersectLineLine](Intersection.md#intersectlineline) for line intersection

#### Static

#### Source

src/Intersection.ts:183

***

### intersectSegmentPolygon()

> **`static`** **intersectSegmentPolygon**(`a1`, `a2`, `points`): [`Intersection`](Intersection.md)

Checks if segment intersects polygon

#### Parameters

• **a1**: [`Point`](Point.md)

boundary point of segment

• **a2**: [`Point`](Point.md)

other boundary point of segment

• **points**: [`Point`](Point.md)[]

polygon points

#### Returns

[`Intersection`](Intersection.md)

#### Static

#### See

[intersectLinePolygon](Intersection.md#intersectlinepolygon) for line intersection

#### Source

src/Intersection.ts:259

***

### intersectSegmentSegment()

> **`static`** **intersectSegmentSegment**(`a1`, `a2`, `b1`, `b2`): [`Intersection`](Intersection.md)

Checks if a segment intersects another

#### Parameters

• **a1**: [`Point`](Point.md)

boundary point of segment

• **a2**: [`Point`](Point.md)

other boundary point of segment

• **b1**: [`Point`](Point.md)

boundary point of segment

• **b2**: [`Point`](Point.md)

other boundary point of segment

#### Returns

[`Intersection`](Intersection.md)

#### See

[intersectLineLine](Intersection.md#intersectlineline) for line intersection

#### Static

#### Source

src/Intersection.ts:202

***

### isPointContained()

> **`static`** **isPointContained**(`T`, `A`, `B`, `infinite`?): `boolean`

check if point T is on the segment or line defined between A and B

#### Parameters

• **T**: [`Point`](Point.md)

the point we are checking for

• **A**: [`Point`](Point.md)

one extremity of the segment

• **B**: [`Point`](Point.md)

the other extremity of the segment

• **infinite?**: `boolean`= `false`

if true checks if `T` is on the line defined by `A` and `B`

#### Returns

`boolean`

true if `T` is contained

#### Source

src/Intersection.ts:51

***

### isPointInPolygon()

> **`static`** **isPointInPolygon**(`point`, `points`): `boolean`

Use the ray casting algorithm to determine if point is in the polygon defined by points

#### Parameters

• **point**: [`Point`](Point.md)

• **points**: [`Point`](Point.md)[]

polygon points

#### Returns

`boolean`

#### See

https://en.wikipedia.org/wiki/Point_in_polygon

#### Source

src/Intersection.ts:91
