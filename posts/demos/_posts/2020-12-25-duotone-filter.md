---
layout: demoV4
title: Composed filter for duotone effect
codepen: true
---
### Use the Composed filter to create a duotone effect in fabric.js

Fabric has a `Composed` filter that can be used to mix together different effects into a single one.
This is not much different than adding more than one filter in the `.filters` property of an image, but it comes handy when you want to define those 3 effects as a single block of effects with a meaning.

### The duotone effect

The duotone effect is obtained by reducing an image to two main tones that contrast with each other. This is similar to a black and white image, but mixing color A and color B rather than black to white.

Some tutorials such as this [one](https://codeburst.io/build-spotifys-colorizer-effect-with-javascript-35cb75fc638c) demonstrate how to create this effect with the standard canvas api.

The logic is as follow:
1. take a picture
2. make it black and white
3. blend a light color with multiply mode
4. blend a dark color with lighten mode

What follows is a simple FabricJS implementation of this technique.
Above the canvas we place two color pickers in order to change the input values to obtain different outputs.

Tip: In the JS part of the codepen, try to swap the `Grayscale` filter with a `BlackWhite` filter for a stronger effect.

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
