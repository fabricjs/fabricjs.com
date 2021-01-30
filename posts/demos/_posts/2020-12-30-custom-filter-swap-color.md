---
layout: demoV4
title: Create a custom filter that swap colors
codepen: true
---
### How to create a custom filter to process your images

Fabric has a boiler plate file to start your new filter.
I decided to call this filter SwapColor, so i start from this file [boilerplate](https://github.com/fabricjs/fabric.js/blob/master/src/filters/filter_boilerplate.js) duplicate it, and first thing you can do is replace all the instances of `MyFilter` with `SwapColor`.

Then start coding your real code.

The idea behind this filter is that would start simple, take a color in the picture and swap with another, if the match exactly.
We need to write this code both for the JS part and for the WEBGL part.

### Prerequisites

The standard one parameter filter is able to save/restore itself using the `mainParameter` argument, but this one needs 2 of them.
So we delete any reference to `mainParameter` and we add a couple of things.

The filters needs to handle the source color and the destination color, so we add some basic information to our empty boilerplate.

```js
/**
 * SwapColor colorSource, a css color
 * @param {String} colorSource
 * @default
 */
colorSource: 'rgb(255, 0, 0)',

/**
 * SwapColor colorSource, a css color
 * @param {String} colorDestination
 * @default
 */
colorDestination: 'rgb(0, 255, 0)',
```

On top of that the filter needs to be able to store and restore itself.

```js
/**
 * Returns object representation of an instance
 * @return {Object} Object representation of an instance
 */
toObject: function() {
  return fabric.util.object.extend(this.callSuper('toObject'), {
    colorSource: this.colorSource,
    colorDestination: this.colorDestination,
  });
}
```

And now we should make the filter work in 2DCanvas and WebGL.

### 2DCanvas routine for pixel swapping

Inside the filter class, `applyTo2d` is the function you have to look at for the standard non WebGL support.
This code is rarely needed if you run from browser, useful if you run also in node, but anyway fabricJs is now supporting both modes,
so if you want to write a filter, better you handle both of them.

The logic is simple, for each pixel, if the color match, swap it with the destination one.
To determine if a color match, we use `fabric.Color` to parse a css color string and we compare the first 3 components.

```js
/**
* Apply the SwapColor operation to a Uint8ClampedArray representing the pixels of an image.
*
* @param {Object} options
* @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
*/
applyTo2d: function(options) {
  var imageData = options.imageData,
      data = imageData.data, i, len = data.length,
      // fabric.Color to get the r,g,b values from any supported color string
      source = new fabric.Color(this.colorSource).getSource(),
      destination = new fabric.Color(this.colorDestination).getSource();
  for (i = 0; i < len; i += 4) {
    if (data[i] === source[0] && data[i + 1] === source[1] && data[i + 2] === source[2]) {
      data[i] = destination[0];
      data[i + 1] = destination[1];
      data[i + 2] = destination[2];
    }
  }
},
```

That's all for the 2D canvas part.

### The WebGL part

If you are comfortable with WebGL this part will look super easy, if not there are some concept to grasp.
**Disclaimer**: I'm not great at WebGL and this code reflect how fabricJS is wrapping the basic functionalities in reusable pieces.

First of all you have to setup the variables injecton in the webgl shader, this is done with the couple `getUniformLocations` and `sendUniformData`.
The `getUniformLocations` will define how those variables are called in the shader, while `sendUniformData` will be responsible to bind data to them. Writing `sendUniformData` is definetely the hardest part since you have to know which type of variable you are using. In our case we are changing color strings in array of 4 number between 1 and 0, and to do so we need to use the `gl.uniform4fv` function.

```js
/**
 * Return WebGL uniform locations for this filter's shader.
 *
 * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
 * @param {WebGLShaderProgram} program This filter's compiled shader program.
 */
getUniformLocations: function(gl, program) {
  return {
    uColorSource: gl.getUniformLocation(program, 'colorSource'),
    uColorDestination: gl.getUniformLocation(program, 'colorDestination'),
  };
},

/**
 * Send data from this filter to its shader program's uniforms.
 *
 * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
 * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
 */
sendUniformData: function(gl, uniformLocations) {
  var source = new fabric.Color(this.colorSource).getSource(),
      destination = new fabric.Color(this.colorDestination).getSource();
  // colors in webgl needs to have components between 0 and 1 and not from 0 to 255
  source[0] /= 255;
  source[1] /= 255;
  source[2] /= 255;
  destination[0] /= 255;
  destination[1] /= 255;
  destination[2] /= 255;
  gl.uniform4fv(uniformLocations.uColorSource, source);
  gl.uniform4fv(uniformLocations.uColorDestination, destination);
},
```

And then of course the webgl shader source is needed.

```js
/**
 * Fragment source for the SwapColor program
 */
fragmentSource: 'precision highp float;\n' +
  'uniform sampler2D uTexture;\n' +
  'uniform vec4 colorSource;\n' +
  'uniform vec4 colorDestination;\n' +
  'varying vec2 vTexCoord;\n' +
  'void main() {\n' +
    'vec4 color = texture2D(uTexture, vTexCoord);\n' +
    'vec3 delta = abs(colorSource.rgb - color.rgb);\n' +
    'gl_FragColor = length(delta) < 0.02 ? colorDestination.rgba : color;\n' +
  '}',
```


### Let's see it in action

And then scroll down for follow ups!

<div
  class="codepen-later"
  data-editable="true"
  data-height="700"
  data-default-tab="js,result"
>
<pre data-lang="css" data-options-autoprefixer="true"></pre>
<pre data-lang="html">
  <input type="color" id="colorSource" value="#00ff36" />
  <input type="color" id="colorDestination" value="#23278a" />
  <canvas id="canvas" width="500" height="620" ></canvas>
</pre>
<pre data-lang="js">

(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      filters = fabric.Image.filters,
      createClass = fabric.util.createClass;

  /**
   * SwapColor filter class
   * @class fabric.Image.filters.SwapColor
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.SwapColor#initialize} for constructor definition
   * @example
   * var filter = new fabric.Image.filters.SwapColor({
   *   colorSource: 'orange',
   *   colorDestination: 'rgb(232, 12, 11)',
   * });
   * object.filters.push(filter);
   * object.applyFilters();
   */
  filters.SwapColor = createClass(filters.BaseFilter, /** @lends fabric.Image.filters.SwapColor.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'SwapColor',

    /**
     * Fragment source for the SwapColor program
     */
    fragmentSource: 'precision highp float;\n' +
      'uniform sampler2D uTexture;\n' +
      'uniform vec4 colorSource;\n' +
      'uniform vec4 colorDestination;\n' +
      'varying vec2 vTexCoord;\n' +
      'void main() {\n' +
        'vec4 color = texture2D(uTexture, vTexCoord);\n' +
        'vec3 delta = abs(colorSource.rgb - color.rgb);\n' +
        'gl_FragColor = length(delta) < 0.02 ? colorDestination.rgba : color;\n' +
      '}',

    /**
     * SwapColor colorSource, a css color
     * @param {String} colorSource
     * @default
     */
    colorSource: 'rgb(255, 0, 0)',

    /**
     * SwapColor colorSource, a css color
     * @param {String} colorDestination
     * @default
     */
    colorDestination: 'rgb(0, 255, 0)',


    /**
    * Apply the SwapColor operation to a Uint8ClampedArray representing the pixels of an image.
    *
    * @param {Object} options
    * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
    */
    applyTo2d: function(options) {
      var imageData = options.imageData,
          data = imageData.data, i, len = data.length,
          source = new fabric.Color(this.colorSource).getSource(),
          destination = new fabric.Color(this.colorDestination).getSource();
      for (i = 0; i < len; i += 4) {
        if (data[i] === source[0] && data[i + 1] === source[1] && data[i + 2] === source[2]) {
          data[i] = destination[0];
          data[i + 1] = destination[1];
          data[i + 2] = destination[2];
        }
      }
    },

    /**
     * Return WebGL uniform locations for this filter's shader.
     *
     * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
     * @param {WebGLShaderProgram} program This filter's compiled shader program.
     */
    getUniformLocations: function(gl, program) {
      return {
        uColorSource: gl.getUniformLocation(program, 'colorSource'),
        uColorDestination: gl.getUniformLocation(program, 'colorDestination'),
      };
    },

    /**
     * Send data from this filter to its shader program's uniforms.
     *
     * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
     * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
     */
    sendUniformData: function(gl, uniformLocations) {
      var source = new fabric.Color(this.colorSource).getSource(),
          destination = new fabric.Color(this.colorDestination).getSource();
      source[0] /= 255;
      source[1] /= 255;
      source[2] /= 255;
      destination[0] /= 255;
      destination[1] /= 255;
      destination[2] /= 255;
      gl.uniform4fv(uniformLocations.uColorSource, source);
      gl.uniform4fv(uniformLocations.uColorDestination, destination);
    },

    isNeutralState: function() {
      return this.colorSource === this.colorDestination;
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return fabric.util.object.extend(this.callSuper('toObject'), {
        colorSource: this.colorSource,
        colorDestination: this.colorDestination,
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @param {function} [callback] to be invoked after filter creation
   * @return {fabric.Image.filters.SwapColor} Instance of fabric.Image.filters.SwapColor
   */
  fabric.Image.filters.SwapColor.fromObject = fabric.Image.filters.BaseFilter.fromObject;

})(typeof exports !== 'undefined' ? exports : this);


  var colorSourceHandler = function(evt) {
    swapColorFilter.colorSource = evt.target.value;
    globalImage.applyFilters();
    canvas.requestRenderAll();
  };
  document.getElementById('colorSource').addEventListener('change', colorSourceHandler);

  var colorDestinationDark = function(evt) {
    swapColorFilter.colorDestination = evt.target.value;
    console.log(swapColorFilter.colorDestination);
    globalImage.applyFilters();
    canvas.requestRenderAll();
  };
  document.getElementById('colorDestination').addEventListener('change', colorDestinationDark);

  var globalImage;
	var canvas = new fabric.Canvas('canvas');
  var swapColorFilter = new fabric.Image.filters.SwapColor();
  fabric.Image.fromURL('https://ip.webmasterapi.com/api/imageproxy/http://fabricjs.com/assets/mononoke.jpg', function(image) {
    globalImage = image;
    image.filters = [swapColorFilter];
    image.scaleToWidth(480);
    image.applyFilters();
    canvas.add(image);
  }, { crossOrigin: 'anonymous' });
</pre>
</div>

### Improving the filter

to be continued...
