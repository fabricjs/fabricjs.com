new (CanvasController.extend({

  initialize: function() {
    CanvasController.prototype.initialize.call(this, canvas);

    rivets.bind($('#text-wrapper'), {
      app: this
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
  }
}))();
