new (CanvasController.extend({

  initialize: function() {
    CanvasController.prototype.initialize.call(this, canvas);

    this.initBrushes();
    this.initPattern();

    this.freeDrawingMode = 'Pencil';

    rivets.bind($('#drawing-mode-wrapper'), {
      app: this
    });
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
  }

}))();
