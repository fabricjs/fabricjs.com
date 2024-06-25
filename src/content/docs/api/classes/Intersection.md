---
editUrl: false
next: false
prev: false
title: "Intersection"
---

## Constructors

### new Intersection()

> **new Intersection**(`status`?): [`Intersection`](/api/classes/intersection/)

#### Parameters

• **status?**: [`IntersectionType`](/api/type-aliases/intersectiontype/)

#### Returns

[`Intersection`](/api/classes/intersection/)

#### Defined in

src/Intersection.ts:13

## Properties

### points

> **points**: [`Point`](/api/classes/point/)[]

#### Defined in

src/Intersection.ts:9

***

### status?

> `optional` **status**: [`IntersectionType`](/api/type-aliases/intersectiontype/)

#### Defined in

src/Intersection.ts:11

## Methods

### intersectLineLine()

> `static` **intersectLineLine**(`a1`, `a2`, `b1`, `b2`, `aInfinite`?, `bInfinite`?): [`Intersection`](/api/classes/intersection/)

Checks if a line intersects another

#### Parameters

• **a1**: [`Point`](/api/classes/point/)

• **a2**: [`Point`](/api/classes/point/)

• **b1**: [`Point`](/api/classes/point/)

• **b2**: [`Point`](/api/classes/point/)

• **aInfinite?**: `boolean` = `true`

check segment intersection by passing `false`

• **bInfinite?**: `boolean` = `true`

check segment intersection by passing `false`

#### Returns

[`Intersection`](/api/classes/intersection/)

#### See

 - [line intersection](https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection)
 - [Cramer's rule](https://en.wikipedia.org/wiki/Cramer%27s_rule)

#### Static

#### Defined in

src/Intersection.ts:127

***

### intersectLinePolygon()

> `static` **intersectLinePolygon**(`a1`, `a2`, `points`, `infinite`?): [`Intersection`](/api/classes/intersection/)

Checks if line intersects polygon

#### Parameters

• **a1**: [`Point`](/api/classes/point/)

point on line

• **a2**: [`Point`](/api/classes/point/)

other point on line

• **points**: [`Point`](/api/classes/point/)[]

polygon points

• **infinite?**: `boolean` = `true`

check segment intersection by passing `false`

#### Returns

[`Intersection`](/api/classes/intersection/)

#### Todo

account for stroke

#### Static

#### See

[intersectSegmentPolygon](../../../../api/classes/intersection/#intersectsegmentpolygon) for segment intersection

#### Defined in

src/Intersection.ts:224

***

### intersectPolygonPolygon()

> `static` **intersectPolygonPolygon**(`points1`, `points2`): [`Intersection`](/api/classes/intersection/)

Checks if polygon intersects another polygon

#### Parameters

• **points1**: [`Point`](/api/classes/point/)[]

• **points2**: [`Point`](/api/classes/point/)[]

#### Returns

[`Intersection`](/api/classes/intersection/)

#### Todo

account for stroke

#### Static

#### Defined in

src/Intersection.ts:277

***

### intersectPolygonRectangle()

> `static` **intersectPolygonRectangle**(`points`, `r1`, `r2`): [`Intersection`](/api/classes/intersection/)

Checks if polygon intersects rectangle

#### Parameters

• **points**: [`Point`](/api/classes/point/)[]

polygon points

• **r1**: [`Point`](/api/classes/point/)

top left point of rect

• **r2**: [`Point`](/api/classes/point/)

bottom right point of rect

#### Returns

[`Intersection`](/api/classes/intersection/)

#### Static

#### See

[intersectPolygonPolygon](../../../../api/classes/intersection/#intersectpolygonpolygon) for polygon intersection

#### Defined in

src/Intersection.ts:315

***

### intersectSegmentLine()

> `static` **intersectSegmentLine**(`s1`, `s2`, `l1`, `l2`): [`Intersection`](/api/classes/intersection/)

Checks if a segment intersects a line

#### Parameters

• **s1**: [`Point`](/api/classes/point/)

boundary point of segment

• **s2**: [`Point`](/api/classes/point/)

other boundary point of segment

• **l1**: [`Point`](/api/classes/point/)

point on line

• **l2**: [`Point`](/api/classes/point/)

other point on line

#### Returns

[`Intersection`](/api/classes/intersection/)

#### See

[intersectLineLine](../../../../api/classes/intersection/#intersectlineline) for line intersection

#### Static

#### Defined in

src/Intersection.ts:183

***

### intersectSegmentPolygon()

> `static` **intersectSegmentPolygon**(`a1`, `a2`, `points`): [`Intersection`](/api/classes/intersection/)

Checks if segment intersects polygon

#### Parameters

• **a1**: [`Point`](/api/classes/point/)

boundary point of segment

• **a2**: [`Point`](/api/classes/point/)

other boundary point of segment

• **points**: [`Point`](/api/classes/point/)[]

polygon points

#### Returns

[`Intersection`](/api/classes/intersection/)

#### Static

#### See

[intersectLinePolygon](../../../../api/classes/intersection/#intersectlinepolygon) for line intersection

#### Defined in

src/Intersection.ts:259

***

### intersectSegmentSegment()

> `static` **intersectSegmentSegment**(`a1`, `a2`, `b1`, `b2`): [`Intersection`](/api/classes/intersection/)

Checks if a segment intersects another

#### Parameters

• **a1**: [`Point`](/api/classes/point/)

boundary point of segment

• **a2**: [`Point`](/api/classes/point/)

other boundary point of segment

• **b1**: [`Point`](/api/classes/point/)

boundary point of segment

• **b2**: [`Point`](/api/classes/point/)

other boundary point of segment

#### Returns

[`Intersection`](/api/classes/intersection/)

#### See

[intersectLineLine](../../../../api/classes/intersection/#intersectlineline) for line intersection

#### Static

#### Defined in

src/Intersection.ts:202

***

### isPointContained()

> `static` **isPointContained**(`T`, `A`, `B`, `infinite`?): `boolean`

check if point T is on the segment or line defined between A and B

#### Parameters

• **T**: [`Point`](/api/classes/point/)

the point we are checking for

• **A**: [`Point`](/api/classes/point/)

one extremity of the segment

• **B**: [`Point`](/api/classes/point/)

the other extremity of the segment

• **infinite?**: `boolean` = `false`

if true checks if `T` is on the line defined by `A` and `B`

#### Returns

`boolean`

true if `T` is contained

#### Defined in

src/Intersection.ts:51

***

### isPointInPolygon()

> `static` **isPointInPolygon**(`point`, `points`): `boolean`

Use the ray casting algorithm to determine if point is in the polygon defined by points

#### Parameters

• **point**: [`Point`](/api/classes/point/)

• **points**: [`Point`](/api/classes/point/)[]

polygon points

#### Returns

`boolean`

#### See

https://en.wikipedia.org/wiki/Point_in_polygon

#### Defined in

src/Intersection.ts:91
