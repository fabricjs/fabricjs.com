new (CanvasController.extend({

  initialize: function() {

    _.bindAll(this, 'getSelected', 'removeSelected');

    CanvasController.prototype.initialize.call(this, canvas);

    rivets.bind($('.object-controls'), {
      app: this
    });
    rivets.bind($('#color-opacity-controls'), {
      app: this
    });
  },

  getSelected: function() {
    return this.canvas.getActiveObject();
  },
  setSelected: function() { },

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
    return this.getProp('lockMovementX');
  },
  setHorizontalLock: function(value) {
    this.setProp('lockMovementX', value);
  },

  getVerticalLock: function() {
    return this.getProp('lockMovementY');
  },
  setVerticalLock: function(value) {
    this.setProp('lockMovementY', value);
  },

  getScaleLockX: function() {
    return this.getProp('lockScalingX');
  },
  setScaleLockX: function(value) {
    this.setProp('lockScalingX');
  },

  getScaleLockY: function() {
    return this.getProp('lockScalingY');
  },
  setScaleLockY: function(value) {
    this.setProp('lockScalingY', value);
  },

  getRotationLock: function() {
    return this.getProp('lockRotation');
  },
  setRotationLock: function(value) {
    this.setProp('lockRotation', value);
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
    return this.getProp('originX');
  },
  setOriginX: function(value) {
    this.setProp('originX', value);
  },

  getOriginY: function() {
    return this.getProp('originY');
  },
  setOriginY: function(value) {
    this.setProp('originY', value);
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
  }
}))();
