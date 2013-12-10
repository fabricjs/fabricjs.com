var Kitchensink = Backbone.Model.extend({

  initialize: function() {

    _.bindAll(this, 'triggerChange');

    this.canvas = new fabric.Canvas('canvas');

    this.initBrushes();
    this.initPattern();
    this.addTexts();

    if (document.location.search.indexOf('guidelines') > -1) {
      initCenteringGuidelines(this.canvas);
      initAligningGuidelines(this.canvas);
    }

    this.initCustomization();
    this.initChangeEvents();
  },

  initCustomization: function() {
    if (typeof Cufon !== 'undefined' && Cufon.fonts.delicious) {
      Cufon.fonts.delicious.offsetLeft = 75;
      Cufon.fonts.delicious.offsetTop = 25;
    }

    if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
      fabric.Object.prototype.cornerSize = 30;
    }

    fabric.Object.prototype.transparentCorners = false;
  },

  initChangeEvents: function() {
    this.canvas
      .on('object:selected', this.triggerChange)
      .on('group:selected', this.triggerChange)
      .on('path:created', this.triggerChange)
      .on('object:added', this.triggerChange)
      .on('selection:cleared', this.triggerChange);
  },

  triggerChange: function() {
    this.trigger('change');
  },

  getSelected: function() {
    return this.canvas.getActiveObject();
  },

  getStyle: function(object, styleName) {
    return (object.getSelectionStyles && object.isEditing)
      ? object.getSelectionStyles()[styleName]
      : object[styleName];
  },

  setStyle: function(object, styleName, value) {
    if (object.setSelectionStyles && object.isEditing) {
      var style = { };
      style[styleName] = value;
      object.setSelectionStyles(style);
      object.setCoords();
    }
    else {
      object[styleName] = value;
    }
    this.triggerChange();
    this.canvas.renderAll();
  },

  addTexts: function() {
    var iText = new fabric.IText('lorem ipsum\ndolor\nsit Amet\nconsectetur', {
      left: 100,
      top: 150,
      fontFamily: 'Helvetica',
      fill: '#333',
      styles: {
        0: {
          0: { fill: 'red', fontSize: 20 },
          1: { fill: 'red', fontSize: 30 },
          2: { fill: 'red', fontSize: 40 },
          3: { fill: 'red', fontSize: 50 },
          4: { fill: 'red', fontSize: 60 },

          6: { textBackgroundColor: 'yellow' },
          7: { textBackgroundColor: 'yellow' },
          8: { textBackgroundColor: 'yellow' },
          9: { textBackgroundColor: 'yellow' }
        },
        1: {
          0: { textDecoration: 'underline' },
          1: { textDecoration: 'underline' },
          2: { fill: 'green', fontStyle: 'italic', textDecoration: 'underline' },
          3: { fill: 'green', fontStyle: 'italic', textDecoration: 'underline' },
          4: { fill: 'green', fontStyle: 'italic', textDecoration: 'underline' }
        },
        2: {
          0: { fill: 'blue', fontWeight: 'bold' },
          1: { fill: 'blue', fontWeight: 'bold' },
          2: { fill: 'blue', fontWeight: 'bold' },

          4: { fontFamily: 'Courier', textDecoration: 'line-through' },
          5: { fontFamily: 'Courier', textDecoration: 'line-through' },
          6: { fontFamily: 'Courier', textDecoration: 'line-through' },
          7: { fontFamily: 'Courier', textDecoration: 'line-through' }
        },
        3: {
          0: { fontFamily: 'Impact', fill: '#666', textDecoration: 'line-through' },
          1: { fontFamily: 'Impact', fill: '#666', textDecoration: 'line-through' },
          2: { fontFamily: 'Impact', fill: '#666', textDecoration: 'line-through' },
          3: { fontFamily: 'Impact', fill: '#666', textDecoration: 'line-through' },
          4: { fontFamily: 'Impact', fill: '#666', textDecoration: 'line-through' }
        }
      }
    });

    var iText2 = new fabric.IText('foo bar\nbaz\nquux', {
      left: 400,
      top: 150,
      fontFamily: 'Helvetica',
      fill: '#333',
      styles: {
        0: {
          0: { fill: 'red' },
          1: { fill: 'red' },
          2: { fill: 'red' }
        },
        2: {
          0: { fill: 'blue' },
          1: { fill: 'blue' },
          2: { fill: 'blue' },
          3: { fill: 'blue' }
        }
      }
    });

    this.canvas.add(iText, iText2);
  },

  initBrushes: function() {
    if (!fabric.PatternBrush) return;

    this.initVLinePatternBrush();
    this.initHLinePatternBrush();
    this.initSquarePatternBrush();
    this.initDiamondPatternBrush();
    this.initImagePatternBrush();
  },

  initPattern: function() {
    this.pattern = window.__pattern = new fabric.Pattern({
      source: '/assets/escheresque.png',
      repeat: 'repeat'
    });
  },

  initImagePatternBrush: function() {
    var img = new Image();
    img.src = '../assets/honey_im_subtle.png';

    var texturePatternBrush = new fabric.PatternBrush(this.canvas);
    texturePatternBrush.source = img;
  },

  initDiamondPatternBrush: function() {
    var diamondPatternBrush = new fabric.PatternBrush(this.canvas);
    diamondPatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 5;
      var patternCanvas = fabric.document.createElement('canvas');
      var rect = new fabric.Rect({
        width: squareWidth,
        height: squareWidth,
        angle: 45,
        fill: this.color
      });

      var canvasWidth = rect.getBoundingRectWidth();

      patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
      rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });

      var ctx = patternCanvas.getContext('2d');
      rect.render(ctx);

      return patternCanvas;
    };
  },

  initSquarePatternBrush: function() {
    var squarePatternBrush = new fabric.PatternBrush(this.canvas);
    squarePatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 2;

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
      var ctx = patternCanvas.getContext('2d');

      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, squareWidth, squareWidth);

      return patternCanvas;
    };
  },

  initVLinePatternBrush: function() {
    this.vLinePatternBrush = new fabric.PatternBrush(this.canvas);
    this.vLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(10, 5);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };
  },

  initHLinePatternBrush: function() {
    var hLinePatternBrush = new fabric.PatternBrush(this.canvas);
    hLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(5, 0);
      ctx.lineTo(5, 10);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };
  },

  setBackgroundColor: function(value) {
    this.canvas.backgroundColor = value;
    this.canvas.renderAll();
  },

  addRect: function() {
    var coord = getRandomLeftTop();

    this.canvas.add(new fabric.Rect({
      left: coord.left,
      top: coord.top,
      fill: '#' + getRandomColor(),
      width: 50,
      height: 50,
      opacity: 0.8
    }));
  },

  addCircle: function() {
    var coord = getRandomLeftTop();

    this.canvas.add(new fabric.Circle({
      left: coord.left,
      top: coord.top,
      fill: '#' + getRandomColor(),
      radius: 50,
      opacity: 0.8
    }));
  },

  addTriangle: function() {
    var coord = getRandomLeftTop();

    this.canvas.add(new fabric.Triangle({
      left: coord.left,
      top: coord.top,
      fill: '#' + getRandomColor(),
      width: 50,
      height: 50,
      opacity: 0.8
    }));
  },

  addLine: function() {
    var coord = getRandomLeftTop();

    this.canvas.add(new fabric.Line([ 50, 100, 200, 200], {
      left: coord.left,
      top: coord.top,
      stroke: '#' + getRandomColor()
    }));
  },

  addPolygon: function() {
    var coord = getRandomLeftTop();

    this.canvas.add(new fabric.Polygon([
      {x: 185, y: 0},
      {x: 250, y: 100},
      {x: 385, y: 170},
      {x: 0, y: 245} ], {
        left: coord.left,
        top: coord.top,
        fill: '#' + getRandomColor()
      }));
  },

  addImage: function(imageName, minScale, maxScale) {
    var coord = getRandomLeftTop();

    fabric.Image.fromURL('../assets/' + imageName, function(image) {

      image.set({
        left: coord.left,
        top: coord.top,
        angle: getRandomInt(-10, 10)
      })
      .scale(getRandomNum(minScale, maxScale))
      .setCoords();

      this.canvas.add(image);
    });
  },

  addShape: function(shapeName) {
    var coord = getRandomLeftTop();
    var _this = this;

    fabric.loadSVGFromURL('../assets/' + shapeName + '.svg', function(objects, options) {

      var loadedObject = fabric.util.groupSVGElements(objects, options);

      loadedObject.set({
        left: coord.left,
        top: coord.top,
        angle: getRandomInt(-10, 10)
      })
      .setCoords();

      _this.canvas.add(loadedObject);
    });
  },

  addText: function() {
    var text = 'Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua.\n' +
      'Ut enim ad minim veniam,\nquis nostrud exercitation ullamco\nlaboris nisi ut aliquip ex ea commodo consequat.';

    var textSample = new fabric.Text(text.slice(0, getRandomInt(0, text.length)), {
      left: getRandomInt(350, 400),
      top: getRandomInt(350, 400),
      fontFamily: 'helvetica',
      angle: getRandomInt(-10, 10),
      fill: '#' + getRandomColor(),
      scaleX: 0.5,
      scaleY: 0.5,
      fontWeight: '',
      originX: 'left',
      hasRotatingPoint: true,
      centerTransform: true
    });

    this.canvas.add(textSample);
  },

  removeSelected: function() {
    var activeObject = this.canvas.getActiveObject(),
        activeGroup = this.canvas.getActiveGroup(),
        _this = this;

    if (activeGroup) {
      var objectsInGroup = activeGroup.getObjects();
      this.canvas.discardActiveGroup();
      objectsInGroup.forEach(function(object) {
        _this.canvas.remove(object);
      });
    }
    else if (activeObject) {
      this.canvas.remove(activeObject);
    }
  },

  setOpacity: function(value) {
    var activeObject = this.canvas.getActiveObject(),
        activeGroup = this.canvas.getActiveGroup();

    if (activeObject || activeGroup) {
      this.setStyle(activeObject || activeGroup, 'opacity', value);
    }

    this.canvas.calcOffset();
  },

  setFill: function(value) {
    var activeObject = this.canvas.getActiveObject(),
        activeGroup = this.canvas.getActiveGroup();

    if (activeObject || activeGroup) {
      this.setStyle(activeObject || activeGroup, 'fill', value);
      this.canvas.renderAll();
    }

    this.canvas.calcOffset();
  },

  toSVG: function() {
    return 'data:image/svg+xml;utf8,' +
           encodeURIComponent(this.canvas.toSVG());
  },

  toJSON: function() {
    return JSON.stringify(this.canvas);
  },

  toDataURL: function() {
    return this.canvas.toDataURL('png');
  },

  toggleHorizontalLock: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockMovementX = !activeObject.lockMovementX;
    }
  },

  toggleVerticalLock: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockMovementY = !activeObject.lockMovementY;
    }
  },

  toggleScaleLockX: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockScalingX = !activeObject.lockScalingX;
    }
  },

  toggleScaleLockY: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockScalingY = !activeObject.lockScalingY;
    }
  },

  toggleRotationLock: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockRotation = !activeObject.lockRotation;
    }
  },

  patternify: function() {
    var obj = this.canvas.getActiveObject();
    var _this = this;

    if (!obj) return;

    if (obj.fill instanceof fabric.Pattern) {
      obj.fill = null;
    }
    else {
      if (obj instanceof fabric.PathGroup) {
        obj.getObjects().forEach(function(o) { o.fill = _this.pattern; });
      }
      else {
        obj.fill = _this.pattern;
      }
    }
    this.canvas.renderAll();
  },

  clip: function() {
    var obj = this.canvas.getActiveObject();
    if (!obj) return;

    if (obj.clipTo) {
      obj.clipTo = null;
    }
    else {
      var radius = obj.width < obj.height ? (obj.width / 2) : (obj.height / 2);
      obj.clipTo = function (ctx) {
        ctx.arc(0, 0, radius, 0, Math.PI * 2, true);
      };
    }
    this.canvas.renderAll();
  },

  shadowify: function() {
    var obj = this.canvas.getActiveObject();
    if (!obj) return;

    if (obj.shadow) {
      obj.shadow = null;
    }
    else {
      obj.setShadow({
        color: 'rgba(0,0,0,0.3)',
        blur: 10,
        offsetX: 10,
        offsetY: 10
      });
    }
    this.canvas.renderAll();
  },

  gradientify: function() {
    var obj = this.canvas.getActiveObject();
    if (!obj) return;

    obj.setGradient('fill', {
      x1: 0,
      y1: 0,
      x2: (getRandomInt(0, 1) ? 0 : obj.width),
      y2: (getRandomInt(0, 1) ? 0 : obj.height),
      colorStops: {
        0: '#' + getRandomColor(),
        1: '#' + getRandomColor()
      }
    });
    this.canvas.renderAll();
  },

  setOriginX: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.set('originX', value).setCoords();
      this.canvas.renderAll();
    }
  },

  setOriginY: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.set('originY', value).setCoords();
      this.canvas.renderAll();
    }
  },

  loadSVG: function(svg) {
    var _this = this;
    fabric.loadSVGFromString(svg, function(objects, options) {
      var obj = fabric.util.groupSVGElements(objects, options);
      _this.canvas.add(obj).centerObject(obj).renderAll();
      obj.setCoords();
    });
  },

  loadSVGWithoutGrouping: function(svg) {
    var _this = this;
    fabric.loadSVGFromString(svg, function(objects) {
      _this.canvas.add.apply(_this.canvas, objects);
      _this.canvas.renderAll();
    });
  },

  changeLineHeight: function(value) {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      activeObject.setLineHeight(value);
      this.canvas.renderAll();
    }
  },

  toggleUnderline: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {

      var isUnderline = (this.getStyle(activeObject, 'textDecoration') || '').indexOf('underline') > -1;
      this.setStyle(activeObject, 'textDecoration', isUnderline ? '' : 'underline');

      this.canvas.renderAll();
    }
  },

  toggleLineThrough: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {

      var isLinethrough = (this.getStyle(activeObject, 'textDecoration') || '').indexOf('line-through') > -1;
      this.setStyle(activeObject, 'textDecoration', isLinethrough ? '' : 'line-through');

      this.canvas.renderAll();
    }
  },

  toggleOverline: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {

      var isOverline = (this.getStyle(activeObject, 'textDecoration') || '').indexOf('overline') > -1;
      this.setStyle(activeObject, 'textDecoration', isOverline ? '' : 'overline');

      this.canvas.renderAll();
    }
  },

  toggleBold: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {

      var isBold = this.getStyle(activeObject, 'fontWeight') === 'bold';
      this.setStyle(activeObject, 'fontWeight', isBold ? '' : 'bold');

      this.canvas.renderAll();
    }
  },

  toggleItalic: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {

      var isItalic = this.getStyle(activeObject, 'fontStyle') === 'italic';
      this.setStyle(activeObject, 'fontStyle', isItalic ? '' : 'italic');

      this.canvas.renderAll();
    }
  },

  switchTextAlign: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      value = value.toLowerCase();
      activeObject.textAlign = value;

      this.canvas._adjustPosition &&
      this.canvas._adjustPosition(activeObject, value === 'justify' ? 'left' : value);

      this.canvas.renderAll();
    }
  },

  getText: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      return activeObject.text;
    }
  },

  updateText: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (!activeObject) return;

    if (!value) {
      this.canvas.discardActiveObject();
    }
    else {
      activeObject.setText(value);
    }
    this.canvas.renderAll();
  },

  setFontFamily: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      this.setStyle(activeObject, 'fontFamily', value.toLowerCase());
      this.canvas.renderAll();
    }
  },

  setObjectBackgroundColor: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      activeObject.backgroundColor = value;
      this.canvas.renderAll();
    }
  },

  setTextBackgroundColor: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      this.setStyle(activeObject, 'textBackgroundColor', value);
      this.canvas.renderAll();
    }
  },

  setFontSize: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      this.setStyle(activeObject, 'fontSize', value);
      this.canvas.renderAll();
    }
  },

  setStrokeColor: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      this.setStyle(activeObject, 'stroke', value);
      this.canvas.renderAll();
    }
  },

  setStrokeWidth: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      this.setStyle(activeObject, 'strokeWidth', value);
      this.canvas.renderAll();
    }
  },

  sendBackwards: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      this.canvas.sendBackwards(activeObject);
    }
  },

  sendToBack: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      this.canvas.sendToBack(activeObject);
    }
  },

  bringForward: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      this.canvas.bringForward(activeObject);
    }
  },

  bringToFront: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      this.canvas.bringToFront(activeObject);
    }
  },

  toggleFreeDrawingMode: function() {
    this.canvas.isDrawingMode = !this.canvas.isDrawingMode;
  },

  isDrawingMode: function() {
    return this.canvas.isDrawingMode;
  },

  setFreeDrawingBrush: function(type, color, width, shadowBlur) {
    if (type === 'hline') {
      this.canvas.freeDrawingBrush = vLinePatternBrush;
    }
    else if (type === 'vline') {
      this.canvas.freeDrawingBrush = hLinePatternBrush;
    }
    else if (type === 'square') {
      this.canvas.freeDrawingBrush = squarePatternBrush;
    }
    else if (type === 'diamond') {
      this.canvas.freeDrawingBrush = diamondPatternBrush;
    }
    else if (type === 'texture') {
      this.canvas.freeDrawingBrush = texturePatternBrush;
    }
    else {
      this.canvas.freeDrawingBrush = new fabric[type + 'Brush'](this.canvas);
    }

    if (this.canvas.freeDrawingBrush) {
      this.canvas.freeDrawingBrush.color = color;
      this.canvas.freeDrawingBrush.width = width || 1;
      this.canvas.freeDrawingBrush.shadowBlur = shadowBlur || 0;
    }
  },

  complexity: function() {
    return this.canvas.complexity();
  },

  clear: function() {
    this.canvas.clear();
  }
});

var kitchensink = new Kitchensink();
