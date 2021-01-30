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
