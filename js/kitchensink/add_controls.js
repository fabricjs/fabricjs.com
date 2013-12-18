new (CanvasController.extend({

  initialize: function() {
    CanvasController.prototype.initialize.call(this, canvas);

    _.bindAll(this,
      'addRect', 'addCircle', 'addLine', 'addTriangle', 'addPolygon', 'addText',
      'addImage1', 'addImage2', 'addImage3', 'maybeLoadShape');

    rivets.bind($('#simple-shapes'), {
      app: this
    });
    rivets.bind($('#svg-shapes'), {
      app: this
    });
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

  maybeLoadShape: function(e) {
    var $el = $(e.target).closest('button.shape');
    if (!$el[0]) return;

    var id = $el.prop('id'), match;
    if (match = /\d+$/.exec(id)) {
      this.addShape(match[0]);
    }
  }
}))();
