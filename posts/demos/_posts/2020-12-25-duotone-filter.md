---
layout: demoV4
title: Composed filter for duotone effect
codepen: true
---
### Use the Composed filter to create a duotone effect in fabric.js

Fabric has a `Composed` filter that can be used to mix together different effects in a single one.
This is not much different than adding more than one filter in the `.filters` property of an image, but it comes handy when you want to define those 3 effects as a single block of effects with a meaning.

### The duotone effect

The duotone effect is obtained reducing an image to two main tones, that contrast each other.
A sort of black and white, but  moving from color A to color B rather than from black to white.

In some tutorials like this [one](https://codeburst.io/build-spotifys-colorizer-effect-with-javascript-35cb75fc638c) is shown how to create it with the standard canvas api.

The logic is as follow:
- take a picture
- make it black and white
- blend a light color with multiply mode
- blend a dark color with lighten mode

What follow is a simple fabricJS implementation.
On top of the canvas we placed 2 color pickers, to change the implementation values to play with different outputs.

In the JS part of the codepen, try to swap the `Grayscale` filter with a `BlackWhite` filter for a stronger effect.

<div
  class="codepen-later"
  data-editable="true"
  data-height="700"
  data-default-tab="js,result"
>
<pre data-lang="css" data-options-autoprefixer="true"></pre>
<pre data-lang="html">
  <input type="color" id="colorLight" value="#00ff36" />
  <input type="color" id="colorDark" value="#23278a" />
  <canvas id="canvas" width="500" height="620" ></canvas>
</pre>
<pre data-lang="js">
  var colorHandlerLight = function(evt) {
    duotoneFilter.subFilters[1].color = evt.target.value;
    globalImage.applyFilters();
    canvas.requestRenderAll();
  };
  document.getElementById('colorLight').addEventListener('change', colorHandlerLight);
  var colorHandlerDark = function(evt) {
    duotoneFilter.subFilters[2].color = evt.target.value;
    globalImage.applyFilters();
    canvas.requestRenderAll();
  };
  document.getElementById('colorDark').addEventListener('change', colorHandlerDark);
  var globalImage;
	var canvas = new fabric.Canvas('canvas');
  var duotoneFilter = new fabric.Image.filters.Composed({
    subFilters: [
      new fabric.Image.filters.Grayscale({ mode: 'luminosity' }), // make it black and white
      new fabric.Image.filters.BlendColor({ color: '#00ff36' }), // apply light color
      new fabric.Image.filters.BlendColor({ color: '#23278a', mode: 'lighten' }), // apply a darker color
    ]
  });
  fabric.Image.fromURL('http://fabricjs.com/assets/pug.jpg', function(image) {
    globalImage = image;
    image.filters = [duotoneFilter];
    image.scaleToWidth(480);
    image.applyFilters();
    canvas.add(image);
  }, { crossOrigin: 'anonymous' });
</pre>
</div>
