var Kitchensink = Backbone.Model.extend({

  consoleSVGValue: (
    '<?xml version="1.0" standalone="no"?>' +
      '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
    '<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">' +
      '<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/>' +
    '</svg>'
  ),

  consoleValue: (
    '// clear canvas\n' +
    'canvas.clear();\n\n' +
    '// remove currently selected object\n' +
    'canvas.remove(canvas.getActiveObject());\n\n' +
    '// add red rectangle\n' +
    'canvas.add(new fabric.Rect({\n' +
    '  width: 50,\n' +
    '  height: 50,\n' +
    '  left: 50,\n' +
    '  top: 50,\n' +
    "  fill: 'rgb(255,0,0)'\n" +
    '}));\n\n' +
    '// add green, half-transparent circle\n' +
    'canvas.add(new fabric.Circle({\n' +
    '  radius: 40,\n' +
    '  left: 50,\n' +
    '  top: 50,\n' +
    "  fill: 'rgb(0,255,0)',\n" +
    '  opacity: 0.5\n' +
    '}));\n'
  ),

  initialize: function() {

    _.bindAll(this,
      'triggerChange', 'removeSelected',
      'clip', 'gradientify', 'shadowify', 'patternify',
      'sendBackwards', 'sendToBack', 'bringForward', 'bringToFront',
      'addRect', 'addCircle', 'addLine', 'addTriangle', 'addPolygon', 'addText',
      'addImage1', 'addImage2', 'addImage3', 'confirmClear',
      '_loadSVGWithoutGrouping', '_loadSVG', 'execute', 'maybeLoadShape');

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

    this.freeDrawingMode = 'Pencil';
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
  setSelected: function() { },

  getStyle: function(styleName, object) {
    object = object || this.canvas.getActiveObject();
    if (!object) return '';

    return (object.getSelectionStyles && object.isEditing)
      ? (object.getSelectionStyles()[styleName] || '')
      : (object[styleName] || '');
  },

  setStyle: function(styleName, value, object) {
    object = object || this.canvas.getActiveObject();
    if (!object) return;

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

  getCanvasBgColor: function() {
    return this.canvas.backgroundColor;
  },
  setCanvasBgColor: function(value) {
    this.canvas.backgroundColor = value;
    this.canvas.renderAll();
    this.triggerChange();
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
    var _this = this;

    fabric.Image.fromURL('../assets/' + imageName, function(image) {

      image.set({
        left: coord.left,
        top: coord.top,
        angle: getRandomInt(-10, 10)
      })
      .scale(getRandomNum(minScale, maxScale))
      .setCoords();

      _this.canvas.add(image);
    });
  },

  addImage1: function() {
    this.addImage('pug.jpg', 0.1, 0.25);
  },
  addImage2: function() {
    this.addImage('logo.png', 0.1, 1);
  },
  addImage3: function() {
    this.addImage('printio.png', 0.5, 0.75);
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

  getOpacity: function() {
    return this.getStyle('opacity') * 100;
  },
  setOpacity: function(value) {
    this.setStyle('opacity', parseInt(value, 10) / 100);
  },

  getFill: function() {
    return this.getStyle('fill');
  },
  setFill: function(value) {
    this.setStyle('fill', value);
  },

  getHorizontalLock: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      return activeObject.lockMovementX;
    }
  },
  setHorizontalLock: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockMovementX = value;
      this.triggerChange();
    }
  },

  getVerticalLock: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      return activeObject.lockMovementY;
    }
  },
  setVerticalLock: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockMovementY = value;
      this.triggerChange();
    }
  },

  getScaleLockX: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      return activeObject.lockScalingX;
    }
  },
  setScaleLockX: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockScalingX = value;
      this.triggerChange();
    }
  },

  getScaleLockY: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      return activeObject.lockScalingY;
    }
  },
  setScaleLockY: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockScalingY = value;
      this.triggerChange();
    }
  },

  getRotationLock: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      return activeObject.lockRotation;
    }
  },
  setRotationLock: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockRotation = value;
      this.triggerChange();
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

  getOriginX: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      return activeObject.get('originX');
    }
  },
  setOriginX: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.set('originX', value).setCoords();
      this.canvas.renderAll();
      this.triggerChange();
    }
  },

  getOriginY: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      return activeObject.get('originY');
    }
  },
  setOriginY: function(value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject.set('originY', value).setCoords();
      this.canvas.renderAll();
      this.triggerChange();
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

  getLineHeight: function() {
    return this.getStyle('lineHeight');
  },
  setLineHeight: function(value) {
    this.setStyle('lineHeight', value);
  },

  getUnderline: function() {
    return this.getStyle('textDecoration');
  },
  setUnderline: function(value) {
    this.setStyle('textDecoration', value ? 'underline' : '');
  },

  getLineThrough: function() {
    return this.getStyle('textDecoration');
  },
  setLineThrough: function(value) {
    this.setStyle('textDecoration', value ? 'line-through' : '');
  },

  getOverline: function() {
    return this.getStyle('textDecoration');
  },
  setOverline: function(value) {
    this.setStyle('textDecoration', value ? 'overline' : '');
  },

  getBold: function() {
    return this.getStyle('fontWeight');
  },
  setBold: function(value) {
    this.setStyle('fontWeight', value ? 'bold' : '');
  },

  getItalic: function() {
    return this.getStyle('fontStyle');
  },
  setItalic: function(value) {
    this.setStyle('fontStyle', value ? 'italic' : '');
  },

  getTextAlign: function() {
    return capitalize(this.getStyle('textAlign'));
  },
  setTextAlign: function(value) {
    this.setStyle('textAlign', value.toLowerCase());
  },

  getFontFamily: function() {
    return this.getStyle('fontFamily').toLowerCase();
  },
  setFontFamily: function(value) {
    this.setStyle('fontFamily', value.toLowerCase());
  },

  getFontSize: function() {
    return this.getStyle('fontSize');
  },
  setFontSize: function(value) {
    this.setStyle('fontSize', value);
  },

  getText: function() {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      return activeObject.text;
    }
  },
  setText: function(value) {
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

  getBgColor: function() {
    return this.getStyle('backgroundColor');
  },
  setBgColor: function(value) {
    this.setStyle('backgroundColor', value);
  },

  getTextBgColor: function() {
    return this.getStyle('textBackgroundColor');
  },
  setTextBgColor: function(value) {
    this.setStyle('textBackgroundColor', value);
  },

  getStrokeColor: function() {
    return this.getStyle('stroke');
  },
  setStrokeColor: function(value) {
    this.setStyle('stroke', value);
  },

  getStrokeWidth: function() {
    return this.getStyle('strokeWidth');
  },
  setStrokeWidth: function(value) {
    this.setStyle('strokeWidth', parseInt(value, 10));
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

  getFreeDrawingMode: function() {
    return this.canvas.isDrawingMode;
  },
  setFreeDrawingMode: function(value) {
    this.canvas.isDrawingMode = !!value;
    this.triggerChange();
  },

  getDrawingMode: function() {
    return this.freeDrawingMode;
  },
  setDrawingMode: function(type) {
    this.freeDrawingMode = type;

    if (type === 'hline') {
      this.canvas.freeDrawingBrush = this.vLinePatternBrush;
    }
    else if (type === 'vline') {
      this.canvas.freeDrawingBrush = this.hLinePatternBrush;
    }
    else if (type === 'square') {
      this.canvas.freeDrawingBrush = this.squarePatternBrush;
    }
    else if (type === 'diamond') {
      this.canvas.freeDrawingBrush = this.diamondPatternBrush;
    }
    else if (type === 'texture') {
      this.canvas.freeDrawingBrush = this.texturePatternBrush;
    }
    else {
      this.canvas.freeDrawingBrush = new fabric[type + 'Brush'](this.canvas);
    }

    this.triggerChange();
  },

  getDrawingLineWidth: function() {
    if (this.canvas.freeDrawingBrush) {
      return this.canvas.freeDrawingBrush.width
    }
  },
  setDrawingLineWidth: function(value) {
    if (this.canvas.freeDrawingBrush) {
      this.canvas.freeDrawingBrush.width = value || 1;
    }
  },

  getDrawingLineColor: function() {
    if (this.canvas.freeDrawingBrush) {
      return this.canvas.freeDrawingBrush.color;
    }
  },
  setDrawingLineColor: function(value) {
    if (this.canvas.freeDrawingBrush) {
      this.canvas.freeDrawingBrush.color = value;
    }
  },

  getDrawingLineShadowWidth: function() {
    if (this.canvas.freeDrawingBrush) {
      this.canvas.freeDrawingBrush.shadowBlur;
    }
  },
  setDrawingLineShadowWidth: function(value) {
    if (this.canvas.freeDrawingBrush) {
      this.canvas.freeDrawingBrush.shadowBlur = value || 1;
    }
  },

  getComplexity: function() {
    return this.canvas.complexity();
  },

  clear: function() {
    this.canvas.clear();
  },
  confirmClear: function() {
    if (confirm('Are you sure?')) {
      this.clear();
    }
  },

  toDataURL: function() {
    return this.canvas.toDataURL('png');
  },

  rasterize: function() {
    if (!fabric.Canvas.supports('toDataURL')) {
      alert('This browser doesn\'t provide means to serialize canvas to an image');
    }
    else {
      window.open(this.toDataURL());
    }
  },
  rasterizeSVG: function() {
    window.open(this.toSVG());
  },
  rasterizeJSON: function() {
    alert(this.toJSON());
  },

  toSVG: function() {
    return 'data:image/svg+xml;utf8,' +
           encodeURIComponent(this.canvas.toSVG());
  },

  toJSON: function() {
    return JSON.stringify(this.canvas);
  },

  getConsoleSVG: function() {
    return this.consoleSVGValue;
  },
  setConsoleSVG: function(value) {
    this.consoleSVGValue = value;
  },

  getConsole: function() {
    return this.consoleValue;
  },
  setConsole: function(value) {
    this.consoleValue = value;
  },

  _loadSVGWithoutGrouping: function() {
    this.loadSVGWithoutGrouping(this.consoleSVGValue);
  },
  _loadSVG: function() {
    this.loadSVG(this.consoleSVGValue);
  },

  execute: function() {
    if (!(/^\s+$/).test(this.consoleValue)) {
      var canvas = this.canvas;
      eval(this.consoleValue);
    }
  },

  maybeLoadShape: function(e) {
    var $el = $(e.target).closest('button.shape');
    if (!$el[0]) return;

    var id = $el.prop('id'), match;
    if (match = /\d+$/.exec(id)) {
      this.addShape(match[0]);
    }
  }
});

var kitchensink = new Kitchensink();
