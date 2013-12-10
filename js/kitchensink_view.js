(function(global) {

  "use strict";

  var KitchensinkView = Backbone.View.extend({

    el: '#bd-wrapper',

    events: {

      // ADD/CLEAR COMMANDS

      'click #commands button.rect': function() {
        this.model.addRect();
      },
      'click #commands button.circle': function() {
        this.model.addCircle();
      },
      'click #commands button.triangle': function() {
        this.model.addTriangle();
      },
      'click #commands button.line': function() {
        this.model.addLine();
      },
      'click #commands button.polygon': function() {
        this.model.addPolygon();
      },
      'click #commands button.image1': function() {
        this.model.addImage('pug.jpg', 0.1, 0.25);
      },
      'click #commands button.image2': function() {
        this.model.addImage('logo.png', 0.1, 1);
      },
      'click #commands button.image3': function() {
        this.model.addImage('printio.png', 0.5, 0.75);
      },
      'click #commands button.shape': function(e) {
        var id = e.target.id, match;
        if (match = /\d+$/.exec(id)) {
          this.model.addShape(match[0]);
        }
      },
      'click #commands button.clear': function() {
        if (confirm('Are you sure?')) {
          this.model.clear();
        }
      },

      // OBJECT CONTROLS

      'change #opacity': function(e) {
        this.model.setOpacity(parseInt(e.target.value, 10) / 100);
      },
      'change #color': function() {
        this.model.setFill(e.target.value);
      },

      'click #remove-selected': function() {
        this.model.removeSelected();
      },

      'click #lock-horizontally': function() {
        this.model.toggleHorizontalLock();
      },
      'click #lock-vertically': function() {
        this.model.toggleVerticalLock();
      },
      'click #lock-scaling-x': function() {
        this.model.toggleScaleLockX();
      },
      'click #lock-scaling-y': function() {
        this.model.toggleScaleLockY();
      },
      'click #lock-rotation': function() {
        this.model.toggleRotationLock();
      },

      'click #send-backwards': function() {
        this.model.sendBackwards();
      },

      'click .origin-x': function(e) {
        this.model.setOriginX(e.target.value);
      },
      'click .origin-y': function(e) {
        this.model.setOriginY(e.target.value);
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
      },

      'click #add-text': function() {
        this.model.addText();
      },

      // TODO:
      'focus #text': function(e) {
        e.target.value = this.model.getText();
      },

      'keyup #text': function(e) {
        this.model.updateText(e.target.value);
      },

      'click #execute': function() {
        var code = $('#canvas-console').val();
        if (!(/^\s+$/).test(code)) {
          eval(code);
        }
      },

      'change #canvas-background-picker': function() {
        this.model.setBackgroundColor(e.target.value);
      },

      'click #rasterize': function() {
        if (!fabric.Canvas.supports('toDataURL')) {
          alert('This browser doesn\'t provide means to serialize canvas to an image');
        }
        else {
          window.open(this.model.toDataURL());
        }
      },

      'click #rasterize-svg': function() {
        window.open(this.model.toSVG());
      },

      'click #rasterize-json': function() {
        alert(this.model.toJSON());
      },

      'click #load-svg': function() {
        this.model.loadSVG($('#svg-console').val());
      },

      'click #load-svg-without-grouping': function() {
        this.model.loadSVGWithoutGrouping($('#svg-console').val());
      },

      // TEXT CONTROLS

      'click #text-cmd-underline': function() {
        this.model.toggleUnderline();
      },
      'click #text-cmd-linethrough': function() {
        this.model.toggleLineThrough();
      },
      'click #text-cmd-overline': function() {
        this.model.toggleOverline();
      },
      'click #text-cmd-bold': function() {
        this.model.toggleBold();
      },
      'click #text-cmd-italic': function() {
        this.model.toggleItalic();
      },
      'change #text-align': function() {
        this.model.switchTextAlign(e.target.value);
      },
      'change #font-family': function(e) {
        this.model.setFontFamily(e.target.value);
      },
      'change #text-bg-color': function(e) {
        this.model.setObjectBackgroundColor(e.target.value);
      },
      'change #text-lines-bg-color': function(e) {
        this.model.setTextBackgroundColor(e.target.value);
      },
      'change #text-font-size': function(e) {
        this.model.setFontSize(parseInt(e.target.value, 10));
      },
      'change #text-stroke-color': function() {
        this.model.setStrokeColor(e.target.value);
      },
      'change #text-stroke-width': function(e) {
        this.model.setStrokeWidth(parseInt(e.target.value, 10));
      },
      'change #text-line-height': function(e) {
        this.model.changeLineHeight(parseInt(e.target.value, 10));
      },

      'change #drawing-mode-selector': 'updateBrush',
      'change #drawing-color': 'updateBrush',
      'change #drawing-line-width': 'updateBrush',
      'change #drawing-shadow-width': 'updateBrush',

      'click #drawing-mode': function() {
        this.model.toggleFreeDrawingMode();
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

      if (!selectedObject) {
        $('#text-wrapper, #controls').hide();
      }
      else {
        $('#controls').show();
        this.renderObjectControls(selectedObject);
      }

      $('.btn-object-action').prop('disabled', !selectedObject);

      $('#complexity strong').html(' ' + this.model.complexity());

      $('#drawing-mode').html(
        this.model.isDrawingMode() ? 'Cancel drawing mode' : 'Enter drawing mode');

      $('#drawing-mode-options')[
        this.model.isDrawingMode() ? 'show' : 'hide']();
    },

    renderObjectControls: function(selectedObject) {

      this.$('#lock-horizontally').html(
        (selectedObject.lockMovementX ? 'Unlock' : 'Lock') + ' horizontal movement');

      this.$('#lock-vertically').html(
        (selectedObject.lockMovementY ? 'Unlock' : 'Lock') + ' vertical movement');

      this.$('#lock-scaling-x').html(
        (selectedObject.lockScalingX ? 'Unlock' : 'Lock') + ' horizontal scaling');

      this.$('#lock-scaling-y').html(
        (selectedObject.lockScalingY ? 'Unlock' : 'Lock') + ' vertical scaling');

      this.$('#lock-rotation').html(
        (selectedObject.lockRotation ? 'Unlock' : 'Lock') + ' rotation');

      this.$('#color').val(selectedObject.getFill());
      this.$('#opacity').val(parseInt(selectedObject.getOpacity() * 100, 10));

      if (/text/.test(selectedObject.type)) {
        this.renderTextControls(selectedObject);
      }
    },

    renderTextControls: function(selectedObject) {
      $('#text-wrapper').show().find('textarea').val(selectedObject.getText());

      this.$('#text-cmd-bold')
        .toggleClass('btn-inverse', selectedObject.fontWeight === 'bold');

      this.$('#text-cmd-underline')
        .toggleClass('btn-inverse', selectedObject.textDecoration === 'underline');

      this.$('#text-cmd-linethrough')
        .toggleClass('btn-inverse', selectedObject.textDecoration === 'line-through');

      this.$('#text-cmd-overline')
        .toggleClass('btn-inverse', selectedObject.textDecoration === 'overline');

      this.$('#text-cmd-italic')
        .toggleClass('btn-inverse', selectedObject.fontStyle === 'italic');

      this.$('#font-family').val(selectedObject.get('fontFamily').toLowerCase());
      this.$('#text-align').val(fabric.util.string.capitalize(selectedObject.get('textAlign')));

      this.$('#text-bg-color').val(selectedObject.get('backgroundColor'));
      this.$('#text-lines-bg-color').val(selectedObject.get('textBackgroundColor'));
      this.$('#text-font-size').val(selectedObject.get('fontSize'));

      this.$('#text-stroke-color').val(selectedObject.get('stroke'));
      this.$('#text-stroke-width').val(selectedObject.get('strokeWidth'));
      this.$('#text-line-height').val(selectedObject.get('lineHeight'));
    },

    updateBrush: function() {
      this.model.setFreeDrawingBrush(
        this.$('#drawing-mode-selector').val(),
        this.$('#drawing-color').val(),
        parseInt(this.$('#drawing-line-width').val(), 10),
        parseInt(this.$('#drawing-shadow-width').val(), 10));
    },

    initOpacitySlider: function() {
      if (!supportsSlider()) return;

      $('#controls').append(
        '<label for="opacity">Opacity: </label>' +
        '<input id="opacity" value="100" type="range">');
    },

    initColorSelector: function() {
      if (!supportsColorpicker()) return;

      $('#controls').append(
        '<label for="color" style="margin-left:10px">Color: </label>' +
        '<input type="color" id="color" style="width:40px">');
    }
  });

  new KitchensinkView({
    model: kitchensink
  });

})(this);


Paster.init(function(str) {
  console.log(str);
});
