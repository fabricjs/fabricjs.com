/**
 *
 * Provides abstraction over underlying Fabric canvas
 *
 * - Use triggerChange to trigger change even on a model
 * - Use getProp/setProp to change properties of an active object
 * - Use getStyle/setStyle to change styles of an active text object
 *
 */
var CanvasController = Backbone.Model.extend({

  initialize: function(canvas) {
    _.bindAll(this, 'triggerChange');
    this.canvas = canvas;
    this.initChangeEvents();
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

    object.setCoords();
    this.triggerChange();
    this.canvas.renderAll();
  },

  getProp: function(prop) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      return activeObject[prop];
    }
  },
  setProp: function(prop, value) {
    var activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      activeObject[prop] = value;
      activeObject.setCoords();
      this.triggerChange();
      this.canvas.renderAll();
    }
  }
});
