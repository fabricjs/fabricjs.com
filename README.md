### Not familiar with Fabric?

Best place to start is by going through **[4-part tutorial](/articles)**

### How to navigate the docs?

Here's a hierarchy of Fabric's **object model**, to make it easier:

#### Main rendering surface

- [fabric.Canvas](/docs/fabric.Canvas.html)
- [fabric.StaticCanvas](/docs/fabric.StaticCanvas.html)

#### Things to fill objects with

- [fabric.Color](/docs/fabric.Color.html)
- [fabric.Gradient](/docs/fabric.Gradient.html)
- [fabric.Pattern](/docs/fabric.Pattern.html)
- [fabric.Shadow](/docs/fabric.Shadow.html)

#### 2D shapes inheriting from fabric.Object

- [fabric.Object](/docs/fabric.Object.html)
  - [fabric.Line](/docs/fabric.Line.html)
  - [fabric.Circle](/docs/fabric.Circle.html)
  - [fabric.Triangle](/docs/fabric.Triangle.html)
  - [fabric.Ellipse](/docs/fabric.Triangle.html)
  - [fabric.Rect](/docs/fabric.Rect.html)
  - [fabric.Polyline](/docs/fabric.Polyline.html)
  - [fabric.Polygon](/docs/fabric.Polygon.html)
  - [fabric.Group](/docs/fabric.Group.html)
  - [fabric.Text](/docs/fabric.Text.html)
      - [fabric.IText](/docs/fabric.IText.html)
  - [fabric.Image](/docs/fabric.Image.html)
      - [fabric.Image.filters](/docs/fabric.Image.filters.html)
        - [BaseFilter](/docs/fabric.Image.filters.BaseFilter.html)
        - [Brightness](/docs/fabric.Image.filters.Brightness.html)
        - [Convolute](/docs/fabric.Image.filters.Convolute.html)
        - [GradientTransparency](/docs/fabric.Image.filters.GradientTransparency.html)
        - [Grayscale](/docs/fabric.Image.filters.Grayscale.html)
        - [Invert](/docs/fabric.Image.filters.Invert.html)
        - [Mask](/docs/fabric.Image.filters.Mask.html)
        - [Noise](/docs/fabric.Image.filters.Noise.html)
        - [Pixelate](/docs/fabric.Image.filters.Pixelate.html)
        - [RemoveWhite](/docs/fabric.Image.filters.RemoveWhite.html)
        - [Sepia](/docs/fabric.Image.filters.Sepia.html)
        - [Sepia2](/docs/fabric.Image.filters.Sepia2.html)
        - [Tint](/docs/fabric.Image.filters.Tint.html)
  - [fabric.Path](/docs/fabric.Path.html)
      - [fabric.PathGroup](/docs/fabric.PathGroup.html)

#### 2D entities NOT inheriting from fabric.Object

- [fabric.Point](/docs/fabric.Point.html)
- [fabric.Intersection](/docs/fabric.Intersection.html)

#### Main fabric namespace

- [fabric](/docs/fabric.html)
    - [fabric.Observable](/docs/fabric.Observable.html)
    - [fabric.Collection](/docs/fabric.Collection.html)

#### Fabric utilities and helpers

- [fabric.util](/docs/fabric.util.html)
    - [fabric.util.object](/docs/fabric.util.object.html)
    - [fabric.util.array](/docs/fabric.util.array.html)
    - [fabric.util.string](/docs/fabric.util.string.html)
    - [fabric.util.ease](/docs/fabric.util.ease.html)

#### Fabric freedrawing brushes

- [fabric.BaseBrush](/docs/fabric.BaseBrush.html)
    - [fabric.PencilBrush](/docs/fabric.PencilBrush.html)
    - [fabric.CircleBrush](/docs/fabric.CircleBrush.html)
    - [fabric.SprayBrush](/docs/fabric.SprayBrush.html)
    - [fabric.PatternBrush](/docs/fabric.PatternBrush.html)
