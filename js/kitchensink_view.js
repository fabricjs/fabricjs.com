(function(global) {

  "use strict";

  var view = {

    init: function() {
      this.initOpacitySlider();
      this.initColorSelector();
      this.initAddClearShapes();
      this.initObjectControls();
      this.initTextControls();
      this.initFreeDrawingControls();
      this.initRasterizeControls();
      this.initCanvasEvents();
      this.initCanvasControls();
      this.initExecuteControls();

      this.initButtons();
      this.disableButtons();
    },

    updateComplexity: function() {
      setTimeout(function() {
        $('#complexity strong').html(' ' + kitchensink.complexity());
      }, 100);
    },

    initOpacitySlider: function() {
      if (!supportsSlider()) return;

      var $controls = $('#controls');
      var $sliderLabel = $('<label for="opacity">Opacity: </label>');
      var $slider = $('<input id="opacity" value="100" type="range">');

      $controls.append($sliderLabel, $slider);

      $slider.on('change', function() {
        kitchensink.setOpacity(parseInt(this.value, 10) / 100);
      });
    },

    initColorSelector: function() {
      if (!supportsColorpicker()) return;

      var $controls = $('#controls');

      var $label = $('<label for="color" style="margin-left:10px">Color: </label>');
      var $colorpicker = $('<input type="color" id="color" style="width:40px">');

      $controls.append($label, $colorpicker);

      $colorpicker.on('change', function() {
        kitchensink.setFill(this.value);
      });
    },

    initAddClearShapes: function() {
      $('#commands')

        .on('click', 'button.rect', function() {
          kitchensink.addRect();
        })
        .on('click', 'button.circle', function() {
          kitchensink.addCircle();
        })
        .on('click', 'button.triangle', function() {
          kitchensink.addTriangle();
        })
        .on('click', 'button.line', function() {
          kitchensink.addLine();
        })
        .on('click', 'button.polygon', function() {
          kitchensink.addPolygon();
        })
        .on('click', 'button.image1', function() {
          kitchensink.addImage('pug.jpg', 0.1, 0.25);
        })
        .on('click', 'button.image2', function() {
          kitchensink.addImage('logo.png', 0.1, 1);
        })
        .on('click', 'button.image3', function() {
          kitchensink.addImage('printio.png', 0.5, 0.75);
        })
        .on('click', 'button.shape', function(e) {
          var id = e.target.id, match;
          if (match = /\d+$/.exec(id)) {
            kitchensink.addShape(match[0]);
          }
        })
        .on('click', 'button.clear', function() {
          if (confirm('Are you sure?')) {
            kitchensink.clear();
          }
        });
    },

    initObjectControls: function() {
      view.$removeSelectedEl = $('#remove-selected');
      view.$removeSelectedEl.on('click', function() {
        kitchensink.removeSelected();
      });

      view.$lockHorizontallyEl = $('#lock-horizontally');
      view.$lockHorizontallyEl.on('click', function() {
        var isOn = kitchensink.toggleHorizontalLock();
        view.$lockHorizontallyEl.html(
          isOn ? 'Unlock horizontal movement' : 'Lock horizontal movement');
      });

      view.$lockVerticallyEl = $('#lock-vertically');
      view.$lockVerticallyEl.on('click', function() {
        var isOn = kitchensink.toggleVerticalLock();
        view.$lockVerticallyEl.html(
          isOn ? 'Unlock vertical movement' : 'Lock vertical movement');
      });

      view.$lockScalingXEl = $('#lock-scaling-x');
      view.$lockScalingXEl.on('click', function() {
        var isOn = kitchensink.toggleScaleLockX();
        view.$lockScalingXEl.html(
          isOn ? 'Unlock horizontal scaling' : 'Lock horizontal scaling');
      });

      view.$lockScalingYEl = $('#lock-scaling-y');
      view.$lockScalingYEl.on('click', function() {
        var isOn = kitchensink.toggleScaleLockY();
        view.$lockScalingYEl.html(
          isOn ? 'Unlock vertical scaling' : 'Lock vertical scaling');
      });

      view.$lockRotationEl = $('#lock-rotation');
      view.$lockRotationEl.on('click', function() {
        var isOn = kitchensink.toggleRotationLock();
        view.$lockRotationEl.html(isOn ? 'Unlock rotation' : 'Lock rotation');
      });

      view.$sendBackwardsEl = $('#send-backwards');
      view.$sendBackwardsEl.on('click', function() {
        kitchensink.sendBackwards();
      });

      view.$sendToBackEl = $('#send-to-back');
      view.$sendToBackEl.on('click', function() {
        kitchensink.sendToBack();
      });

      view.$bringForwardEl = $('#bring-forward');
      view.$bringForwardEl.on('click', function() {
        kitchensink.bringForward();
      });

      view.$bringToFrontEl = $('#bring-to-front');
      view.$bringToFrontEl.on('click', function() {
        kitchensink.bringToFront();
      });

      view.$gradientifyBtn = $('#gradientify');
      view.$gradientifyBtn.on('click', function() {
        kitchensink.gradientify();
      });

      view.$shadowifyBtn = $('#shadowify');
      view.$shadowifyBtn.on('click', function() {
        kitchensink.shadowify();
      });

      view.$patternifyBtn = $('#patternify');
      view.$patternifyBtn.on('click', function() {
        kitchensink.patternify();
      });

      view.$clipBtn = $('#clip');
      view.$clipBtn.on('click', function() {
        kitchensink.clip();
      });

      $(document).on('click', '.origin-x', function() {
        kitchensink.setOriginX(this.value);
      });

      $(document).on('click', '.origin-y', function() {
        kitchensink.setOriginY(this.value);
      });

      view.$opacityEl = $('#opacity');
      view.$colorEl = $('#color');
    },

    initTextControls: function() {

      $('#add-text').on('click', function() {
        kitchensink.addText();
      });

      $('#text').on('focus', function() {
        this.value = kitchensink.getText();
      })
      .on('keyup', function() {
        kitchensink.updateText(this.value);
      });

      view.$cmdUnderlineBtn = $('#text-cmd-underline');
      view.$cmdUnderlineBtn.prop('disabled', true).on('click', function() {
        kitchensink.toggleUnderline();
      });

      view.$cmdLinethroughBtn = $('#text-cmd-linethrough');
      view.$cmdLinethroughBtn.prop('disabled', true).on('click', function() {
        kitchensink.toggleLineThrough();
      });

      view.$cmdOverlineBtn = $('#text-cmd-overline');
      view.$cmdOverlineBtn.prop('disabled', true).on('click', function() {
        kitchensink.toggleOverline();
      });

      view.$cmdBoldBtn = $('#text-cmd-bold');
      view.$cmdBoldBtn.prop('disabled', true).on('click', function() {
        var isBold = kitchensink.toggleBold();
        $(this)[isBold ? 'addClass' : 'removeClass']('selected');
      });

      view.$cmdItalicBtn = $('#text-cmd-italic');
      view.$cmdItalicBtn.prop('disabled', true).on('click', function() {
        var isItalic = kitchensink.toggleItalic();
        $(this)[isItalic ? 'addClass' : 'removeClass']('selected');
      });

      view.$textAlignSwitch = $('#text-align');
      view.$textAlignSwitch.prop('disabled', true).on('change', function() {
        kitchensink.switchTextAlign(this.value);
      });

      view.$fontFamilySwitch = $('#font-family');
      view.$fontFamilySwitch.prop('disabled', true).on('change', function() {
        kitchensink.setFontFamily(this.value);
      });

      view.$bgColorField = $('#text-bg-color');
      view.$bgColorField.on('change', function() {
        kitchensink.setBackgroundColor(this.value);
      });

      view.$bgLineColorField = $('#text-lines-bg-color');
      view.$bgLineColorField.on('change', function() {
        kitchensink.setTextBackgroundColor(this.value);
      });

      view.$textFontSizeField = $('#text-font-size');
      view.$textFontSizeField.on('change', function() {
        kitchensink.setFontSize(parseInt(this.value, 10));
      });

      view.$strokeColorField = $('#text-stroke-color');
      view.$strokeColorField.on('change', function() {
        kitchensink.setStrokeColor(this.value);
      });

      view.$strokeWidthField = $('#text-stroke-width');
      view.$strokeWidthField.on('change', function() {
        kitchensink.setStrokeWidth(parseInt(this.value, 10));
      });

      view.$textLineHeightField = $('#text-line-height');
      view.$textLineHeightField.on('change', function() {
        kitchensink.changeLineHeight(parseInt(this.value, 10));
      });
    },

    initFreeDrawingControls: function() {
      view.$drawingModeSelectorEl = $('#drawing-mode-selector');
      view.$drawingOptionsEl = $('#drawing-mode-options');
      view.$drawingColorEl = $('#drawing-color');
      view.$drawingLineWidthEl = $('#drawing-line-width');
      view.$drawingShadowWidth = $('#drawing-shadow-width');

      view.$drawingModeEl = $('#drawing-mode');
      view.$drawingModeEl.on('click', function() {
        var isOn = kitchensink.toggleFreeDrawingMode();
        if (isOn) {
          view.$drawingModeEl.html('Cancel drawing mode');
          view.$drawingOptionsEl.show();
        }
        else {
          view.$drawingModeEl.html('Enter drawing mode');
          view.$drawingOptionsEl.hide();
        }
      });

      view.$drawingModeSelectorEl.on('change', this.updateBrush);
      view.$drawingColorEl.on('change', this.updateBrush);
      view.$drawingLineWidthEl.on('change', this.updateBrush);
      view.$drawingShadowWidth.on('change', this.updateBrush);
    },

    updateBrush: function() {
      kitchensink.setFreeDrawingBrush(
        view.$drawingModeSelectorEl.val(),
        view.$drawingColorEl.val(),
        parseInt(view.$drawingLineWidthEl.val(), 10),
        parseInt(view.$drawingShadowWidth.val(), 10));
    },

    initCanvasEvents: function() {
      canvas.on('object:selected', view.onObjectSelected);
      canvas.on('group:selected', view.onObjectSelected);

      canvas.on('path:created', view.updateComplexity);
      canvas.on('object:added', view.updateComplexity);

      canvas.on('selection:cleared', function(e) {
        view.disableButtons();
        $('#controls, #text-wrapper').hide();
      });
    },

    initButtons: function() {
      view.activeObjectButtons = [
        view.$lockHorizontallyEl,
        view.$lockVerticallyEl,
        view.$lockScalingXEl,
        view.$lockScalingYEl,
        view.$lockRotationEl,
        view.$removeSelectedEl,
        view.$gradientifyBtn,
        view.$shadowifyBtn,
        view.$patternifyBtn,
        view.$clipBtn,
        view.$sendBackwardsEl,
        view.$sendToBackEl,
        view.$bringForwardEl,
        view.$bringToFrontEl,
        view.$cmdUnderlineBtn,
        view.$cmdLinethroughBtn,
        view.$cmdOverlineBtn,
        view.$cmdBoldBtn,
        view.$cmdItalicBtn,
        view.$textAlignSwitch,
        view.$fontFamilySwitch,
        view.$opacityEl,
        view.$colorEl
      ];
    },

    disableButtons: function() {
      $.each(view.activeObjectButtons, function(i, btn) {
        btn && btn.prop('disabled', true);
      });
    },

    enableButtons: function() {
      $.each(view.activeObjectButtons, function(i, btn) {
        btn && btn.prop('disabled', false);
      });
    },

    onObjectSelected: function(e) {
      var selectedObject = e.target;

      view.enableButtons();

      view.$lockHorizontallyEl.html(
        selectedObject.lockMovementX ? 'Unlock horizontal movement' : 'Lock horizontal movement');

      view.$lockVerticallyEl.html(
        selectedObject.lockMovementY ? 'Unlock vertical movement' : 'Lock vertical movement');

      view.$lockScalingXEl.html(
        selectedObject.lockScalingX ? 'Unlock horizontal scaling' : 'Lock horizontal scaling');

      view.$lockScalingYEl.html(
        selectedObject.lockScalingY ? 'Unlock vertical scaling' : 'Lock vertical scaling');

      view.$lockRotationEl.html(
        selectedObject.lockRotation ? 'Unlock rotation' : 'Lock rotation');

      view.$colorEl.val(selectedObject.getFill());
      view.$opacityEl.val(parseInt(selectedObject.getOpacity() * 100, 10));

      if (/text/.test(selectedObject.type)) {
        view.onTextObjectSelected(selectedObject);
      }
      else {
        $('#text-wrapper').hide();
      }

      $('#controls').show();
    },

    onTextObjectSelected: function(selectedObject) {
      $('#text-wrapper').show().find('textarea').val(selectedObject.getText());

      view.$cmdBoldBtn[0].className =
      view.$cmdUnderlineBtn[0].className =
      view.$cmdLinethroughBtn[0].className =
      view.$cmdOverlineBtn[0].className =
      view.$cmdItalicBtn[0].className = 'btn';

      if (selectedObject.fontWeight === 'bold') {
        view.$cmdBoldBtn.addClass('selected');
      }
      if (selectedObject.textDecoration === 'underline') {
        view.$cmdUnderlineBtn.addClass('selected');
      }
      if (selectedObject.textDecoration === 'line-through') {
        view.$cmdLinethroughBtn.addClass('selected');
      }
      if (selectedObject.textDecoration === 'overline') {
        view.$cmdOverlineBtn.addClass('selected');
      }
      if (selectedObject.fontStyle === 'italic') {
        view.$cmdItalicBtn.addClass('selected');
      }

      view.$fontFamilySwitch.val(selectedObject.get('fontFamily').toLowerCase());
      view.$textAlignSwitch.val(fabric.util.string.capitalize(selectedObject.get('textAlign')));

      view.$bgColorField.val(selectedObject.get('backgroundColor'));
      view.$bgLineColorField.val(selectedObject.get('textBackgroundColor'));
      view.$textFontSizeField.val(selectedObject.get('fontSize'));

      view.$strokeColorField.val(selectedObject.get('stroke'));
      view.$strokeWidthField.val(selectedObject.get('strokeWidth'));
      view.$textLineHeightField.val(selectedObject.get('lineHeight'));
    },

    initRasterizeControls: function() {
      $('#rasterize').on('click', function() {
        if (!fabric.Canvas.supports('toDataURL')) {
          alert('This browser doesn\'t provide means to serialize canvas to an image');
        }
        else {
          window.open(kitchensink.toDataURL());
        }
      });

      $('#rasterize-svg').on('click', function() {
        window.open(kitchensink.toSVG());
      });

      $('#rasterize-json').on('click', function() {
        alert(kitchensink.toJSON());
      });
    },

    initLoadSVGControls: function() {
      $('#load-svg').on('click', function() {
        kitchensink.loadSVG($('#svg-console').val());
      });

      $('#load-svg-without-grouping').on('click', function() {
        kitchensink.loadSVGWithoutGrouping($('#svg-console').val());
      });
    },

    initCanvasControls: function() {
      $('#canvas-background-picker').on('change', function() {
        kitchensink.setBackgroundColor(this.value);
      });
    },

    initExecuteControls: function() {
      $('#execute').on('click', function() {
        var code = $('#canvas-console').val();
        if (!(/^\s+$/).test(code)) {
          eval(code);
        }
      });
    }
  };

  Paster.init(function(str) {
    console.log(str);
  });

  view.init();

})(this);
