---
date: '2023-08-20'
title: 'Core Concepts'
description: 'Core Concepts'
---

# Core Concepts

## State

State is comprised of 2 aspects. The **logical** state and the **visual** state.
The **visual** state is our end game, what the user sees, whereas the **logical** state is what exists under the hood.
The 2 are deeply intertwined. However, in many cases, looking at a problem with this concept in mind produces much simpler and performant solutions.

Caching and erasing are 2 examples that utilize this concept.

_Cheating_ the user to think something is happening by showing a visual outcome (that may not correlate to the **logical** state) is sometimes the best way to solve a problem.

Since we are dealing with 2 states there are cases they fall out of sync.
Flagging an object as `dirty` will sync its visual state on the next render (invalidating its cache, if it is caching).

```ts
object.set({ dirty: true });
```

Syncing its **logical** state is needed for user interactions.

```ts
object.setCoords();
```

## Objects

Objects are shapes with a lifecycle that supports both the **logical** and the **visual** states.

- `Path`
- `Polyline`, `Polygon`
- `Rect`
- `Circle`, `Ellipse`
- `Image`
- `Text`, `IText`, `Textbox`

## Interactions

User interactions drive both **logical** and **visual** state changes.
The standard fabric app is built mainly on interactions.
As such there are many **events** to subscribe to in order to make it easier to achieve complex UX.

```ts
object.on('eventName', ...);
```

### Selection

Fabric supports the following selection modes out of the box:

- Single object selection
- Area selection
- Multi selection

### Controls

Performing state changes on an object is done using its controls.
Fabric exposes the following controls:

- scaling
- rotating
- resizing
- skewing
- translating action

The `Control` API is designed especially for creating custom controls and customizing existing ones.

### Drawing & Brushes

The drawing interaction is controlled by `Canvas#freeDrawingBrush` and `Canvas#isDrawingMode`.
Once the interaction completes an object is created => listen to the `path:created` event for it.

Available brushes:

- `CircleBrush`
- `PatternBrush`
- `PencilBrush`
- `SprayBrush`

### Zoom, Pan & Viewport interactions

Fabric doesn't support these interaction out of the box.
Check out the demo.

### Animations

Animations are another form of state change.
It is possible to animate anything in fabric as long as you sync the state properly.
Remember to cleanup after yourself by aborting running animations.

## Visual State

### Rendering

Rendering is the process in which a canvas or an object redraws itself.
By doing so it syncs the **visual** state.

Keep in mind that rendering can be expensive and therefore can lead to a drop in performance.

Rendering is performed in the parent plane, see [transformations](#transformations).

Objects need a reference to canvas for proper rendering (handled by fabric under the hood).

#### `renderAll` vs. `requestRenderAll`

`renderAll` is sync, `requestRenderAll` is not, both render the canvas.
`requestRenderAll` first request an animation frame before rendering.
Calling `requestRenderAll` repeatedly will have no effect as long as rendering has not started.

### Caching

Caching means rendering an object onto a standalone canvas (called a cache). Then, when rendering occurs we can pull the cache and render it instead of redrawing the object.

Caching is used for 2 reasons:

- Performance\
  We save on redrawing the object if its state did not change.

- Context Isolation\
  Performing complex rendering such as clipping, filtering, using `globalCompositeOperation` etc. need an isolated context to render on in order for the operation to remain isolated and not to affect the entire canvas, so we use the cache.

## I/O

Fabric supports `JSON` and `SVG` serialization.
Take a look at:

|            | In            | Out             |
| ---------- | ------------- | --------------- |
| **`JSON`** | `fromObject`  | `toObject`      |
| **`SVG`**  | `fromElement` | `toSVG`         |
| **`PDF`**  | `N/A`         | Use node canvas |

Use the `classRegistry` to register your own classes for parsing.

If you encounter issues with serialization try changing `NUM_FRACTION_DIGITS`.

## Customization, Subclassing & Mutation

```ts
// subclass
class MyRect extends Rect {

    // override methods
    ...

    // override default values
    getDefaults() {
        return {
            ...super.getDefaults(),
            ...
        }
    }
}
// register subclass for I/O
classRegistry.setClass(MyRect);

// prototype mutation
fabric.Object.prototype.someMethod = function() {
    ...
}

// override default values
fabric.Object.getDefaults = function() {
    return {
        ...
    }
}

```
