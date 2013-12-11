var ObjectControlsView = Backbone.View.extend({

  el: '.object-controls',

  ui: {
    lockHorizontally: '#lock-horizontally',
    lockVertically: '#lock-vertically',
    lockScalingX: '#lock-scaling-x',
    lockScalingY: '#lock-scaling-y',
    lockRotation: '#lock-rotation',
    color: '#color',
    opacity: '#opacity',
    opacityColorControls: '#controls'
  },

  events: {
    'change opacity': function(e) {
      this.model.setOpacity(parseInt(e.target.value, 10) / 100);
    },
    'change color': function() {
      this.model.setFill(e.target.value);
    },
    'click #remove-selected': function() {
      this.model.removeSelected();
    },
    'click lockHorizontally': function() {
      this.model.toggleHorizontalLock();
    },
    'click lockVertically': function() {
      this.model.toggleVerticalLock();
    },
    'click lockScalingX': function() {
      this.model.toggleScaleLockX();
    },
    'click lockScalingY': function() {
      this.model.toggleScaleLockY();
    },
    'click lockRotation': function() {
      this.model.toggleRotationLock();
    },
    'click .origin-x': function(e) {
      this.model.setOriginX(e.target.value);
    },
    'click .origin-y': function(e) {
      this.model.setOriginY(e.target.value);
    },
    'click #send-backwards': function() {
      this.model.sendBackwards();
    },
    'click #send-to-back': function() {
      this.model.sendToBack();
    },
    'click #bring-forward': function() {
      this.model.bringForward();
    },
    'click #bring-to-front': function() {
      this.model.bringToFront();
    },
    'click #gradientify': function() {
      this.model.gradientify();
    },
    'click #shadowify': function() {
      this.model.shadowify();
    },
    'click #patternify': function() {
      this.model.patternify();
    },
    'click #clip': function() {
      this.model.clip();
    }
  },

  initialize: function() {
    this.initOpacitySlider();
    this.initColorSelector();

    this.model.on('change', _.bind(this.render, this));
    this.render();
  },

  render: function() {
    var selectedObject = this.model.getSelected();

    $('.btn-object-action').prop('disabled', !selectedObject);

    if (!selectedObject) {
      this.ui.opacityColorControls.hide();
    }
    else {
      this.ui.opacityColorControls.show();
      this.renderObjectControls(selectedObject);
    }
  },

  renderObjectControls: function(selectedObject) {

    this.ui.lockHorizontally
      .html(selectedObject.lockMovementX ? 'Unlock horizontal movement' : 'Lock horizontal movement');

    this.ui.lockVertically
      .html(selectedObject.lockMovementY ? 'Unlock vertical movement' : 'Lock vertical movement');

    this.ui.lockScalingX
      .html(selectedObject.lockScalingX ? 'Unlock horizontal scaling' : 'Lock horizontal scaling');

    this.ui.lockScalingY
      .html(selectedObject.lockScalingY ? 'Unlock vertical scaling' : 'Lock vertical scaling');

    this.ui.lockRotation
      .html(selectedObject.lockRotation ? 'Unlock rotation' : 'Lock rotation');

    this.ui.color.val(selectedObject.getFill());
    this.ui.opacity.val(parseInt(selectedObject.getOpacity() * 100, 10));
  },

  initOpacitySlider: function() {
    if (!supportsSlider()) return;

    this.ui.opacityColorControls.append(
      '<label for="opacity">Opacity: </label>' +
      '<input id="opacity" value="100" type="range">');
  },

  initColorSelector: function() {
    if (!supportsColorpicker()) return;

    this.ui.opacityColorControls.append(
      '<label for="color" style="margin-left:10px">Color: </label>' +
      '<input type="color" id="color" style="width:40px">');
  }
});

new ObjectControlsView({ model: kitchensink });
