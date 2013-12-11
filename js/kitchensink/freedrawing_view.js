var FreedrawingView = Backbone.View.extend({

  ui: {
    drawingModeSelector: '#drawing-mode-selector',
    drawingColor: '#drawing-color',
    drawingLineWidth: '#drawing-line-width',
    drawingShadowWidth: '#drawing-shadow-width',
    drawingMode: '#drawing-mode',
  },

  events: {
    'change drawingModeSelector': 'updateBrush',
    'change drawingColor': 'updateBrush',
    'change drawingLineWidth': 'updateBrush',
    'change drawingShadowWidth': 'updateBrush',

    'click drawingMode': function() {
      this.model.toggleFreeDrawingMode();
    }
  },

  initialize: function() {
    this.model.on('change', _.bind(this.render, this));
    this.render();
  },

  render: function() {
    $('#drawing-mode-options')[this.model.isDrawingMode() ? 'show' : 'hide']();

    this.ui.drawingMode.html(
      this.model.isDrawingMode() ? 'Cancel drawing mode' : 'Enter drawing mode');
  },

  updateBrush: function() {
    this.model.setFreeDrawingBrush(
      this.ui.drawingModeSelector.val(),
      this.ui.drawingColor.val(),
      parseInt(this.ui.drawingLineWidth.val(), 10),
      parseInt(this.ui.drawingShadowWidth.val(), 10));
  }
});

new FreedrawingView({ model: kitchensink });
