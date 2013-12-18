new (CanvasController.extend({

  initialize: function() {
    CanvasController.prototype.initialize.call(this, canvas);

    _.bindAll(this,
      'loadSVG', 'loadSVGWithoutGrouping', 'confirmClear',
      'rasterize', 'rasterizeSVG', 'rasterizeJSON');

    var options = { app: this };

    rivets.bind($('#load-svg-pane'), options);
    rivets.bind($('#execute-code'), options);
    rivets.bind($('#global-controls'), options);
    rivets.bind($('#canvas-controls'), options);

    this.addTexts();
    this.initCustomization();

    if (document.location.search.indexOf('guidelines') > -1) {
      initCenteringGuidelines(this.canvas);
      initAligningGuidelines(this.canvas);
    }
  },

  getCanvasBgColor: function() {
    return this.canvas.backgroundColor;
  },
  setCanvasBgColor: function(value) {
    this.canvas.backgroundColor = value;
    this.canvas.renderAll();
    this.triggerChange();
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

  getConsole: function() {
    return this.consoleValue;
  },
  setConsole: function(value) {
    this.consoleValue = value;
  },

  getConsoleSVG: function() {
    return this.consoleSVGValue;
  },
  setConsoleSVG: function(value) {
    this.consoleSVGValue = value;
  },

  loadSVGWithoutGrouping: function() {
    this._loadSVGWithoutGrouping(this.consoleSVGValue);
  },
  loadSVG: function() {
    this._loadSVG(this.consoleSVGValue);
  },

  execute: function() {
    if (!(/^\s+$/).test(this.consoleValue)) {
      var canvas = this.canvas;
      eval(this.consoleValue);
    }
  },

  confirmClear: function() {
    if (confirm('Are you sure?')) {
      this.canvas.clear();
    }
  },

  rasterize: function() {
    if (!fabric.Canvas.supports('toDataURL')) {
      alert('This browser doesn\'t provide means to serialize canvas to an image');
    }
    else {
      window.open(this.canvas.toDataURL('png'));
    }
  },

  rasterizeSVG: function() {
    window.open(
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(this.canvas.toSVG()));
  },
  rasterizeJSON: function() {
    alert(JSON.stringify(this.canvas));
  },

  getComplexity: function() {
    return this.canvas.complexity();
  },

  _loadSVG: function(svg) {
    var _this = this;
    fabric.loadSVGFromString(svg, function(objects, options) {
      var obj = fabric.util.groupSVGElements(objects, options);
      _this.canvas.add(obj).centerObject(obj).renderAll();
      obj.setCoords();
    });
  },

  _loadSVGWithoutGrouping: function(svg) {
    var _this = this;
    fabric.loadSVGFromString(svg, function(objects) {
      _this.canvas.add.apply(_this.canvas, objects);
      _this.canvas.renderAll();
    });
  }

}))();
