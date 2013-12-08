(function(global) {

  "use strict";

  function pad(str, length) {
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
   };

  var getRandomInt = fabric.util.getRandomInt;
  function getRandomColor() {
    return (
      pad(getRandomInt(0, 255).toString(16), 2) +
      pad(getRandomInt(0, 255).toString(16), 2) +
      pad(getRandomInt(0, 255).toString(16), 2)
    );
  }

  fabric.Object.prototype.transparentCorners = false;

  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }

  if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
    fabric.Object.prototype.cornersize = 30;
  }

  var canvas = global.canvas = new fabric.Canvas('canvas');

  $('#commands').on('click', 'button', function(e) {

    var $target = $(e.target),
        offset = 50,
        left = fabric.util.getRandomInt(0 + offset, 700 - offset),
        top = fabric.util.getRandomInt(0 + offset, 500 - offset),
        angle = fabric.util.getRandomInt(-20, 40),
        width = fabric.util.getRandomInt(30, 50),
        opacity = (function(min, max){ return Math.random() * (max - min) + min; })(0.5, 1);

    if ($target.hasClass('rect')) {
      canvas.add(new fabric.Rect({
        left: left,
        top: top,
        fill: '#' + getRandomColor(),
        width: 50,
        height: 50,
        opacity: 0.8
      }));
    }
    if ($target.hasClass('circle')) {
      canvas.add(new fabric.Circle({
        left: left,
        top: top,
        fill: '#' + getRandomColor(),
        radius: 50,
        opacity: 0.8
      }));
    }
    if ($target.hasClass('triangle')) {
      canvas.add(new fabric.Triangle({
        left: left,
        top: top,
        fill: '#' + getRandomColor(),
        width: 50,
        height: 50,
        opacity: 0.8
      }));
    }
    if ($target.hasClass('line')) {
      canvas.add(new fabric.Line([ 50, 100, 200, 200], {
        left: left,
        top: top,
        stroke: '#' + getRandomColor()
      }));
    }
    if ($target.hasClass('polygon')) {
      canvas.add(new fabric.Polygon([
        {x: 185, y: 0},
        {x: 250, y: 100},
        {x: 385, y: 170},
        {x: 0, y: 245} ], {
          left: left,
          top: top,
          fill: '#' + getRandomColor()
        }));
    }
    if ($target.hasClass('image1')) {
      fabric.Image.fromURL('../assets/pug.jpg', function(image) {
        image.set({
          left: left,
          top: top,
          angle: angle,
          cornersize: 10
        });
        image.scale(getRandomNum(0.1, 0.25)).setCoords();
        canvas.add(image);
      });
    }
    if ($target.hasClass('image2')) {
      fabric.Image.fromURL('../assets/logo.png', function(image) {
        image.set({
          left: left,
          top: top,
          angle: angle,
          cornersize: 10
        });
        image.scale(getRandomNum(0.1, 1)).setCoords();
        canvas.add(image);
        updateComplexity();
      });
    }
    if ($target.hasClass('image3')) {
      fabric.Image.fromURL('../assets/printio.png', function(image) {
        image.set({
          left: left,
          top: top,
          angle: angle,
          cornersize: 10
        });
        image.scale(getRandomNum(0.5, 0.75)).setCoords();
        canvas.add(image);
        updateComplexity();
      });
    }
    if ($target.hasClass('shape')) {
      var id = element.id, match;
      if (match = /\d+$/.exec(id)) {
        fabric.loadSVGFromURL('../assets/' + match[0] + '.svg', function(objects, options) {

          var loadedObject = fabric.util.groupSVGElements(objects, options);

          loadedObject.set({
            left: left,
            top: top,
            angle: angle,
            cornersize: 10
          });
          loadedObject.setCoords();

          canvas.add(loadedObject);
          updateComplexity();
          canvas.calcOffset();
        });
      }
    }

    if ($target.hasClass('clear')) {
      if (confirm('Are you sure?')) {
        canvas.clear();
      }
    }

    canvas.calcOffset();

    updateComplexity();
  });

  function updateComplexity() {
    setTimeout(function(){
      $('#complexity strong').html(' ' + canvas.complexity());
    }, 100);
  }

  $('#execute').onclick = function() {
    var code = $('#canvas-console').val();
    if (!(/^\s+$/).test(code)) {
      eval(code);
    }
  };

  $('#rasterize').on('click', function() {
    if (!fabric.Canvas.supports('toDataURL')) {
      alert('This browser doesn\'t provide means to serialize canvas to an image');
    }
    else {
      window.open(canvas.toDataURL('png'));
    }
  });

  $('#rasterize-svg').on('click', function() {
    window.open('data:image/svg+xml;utf8,' + encodeURIComponent(canvas.toSVG()));
  });

  $('#rasterize-json').on('click', function() {
    alert(JSON.stringify(canvas));
  });

  var $removeSelectedEl = $('#remove-selected');
  $removeSelectedEl.on('click', function() {
    var activeObject = canvas.getActiveObject(),
        activeGroup = canvas.getActiveGroup();

    if (activeGroup) {
      var objectsInGroup = activeGroup.getObjects();
      canvas.discardActiveGroup();
      objectsInGroup.forEach(function(object) {
        canvas.remove(object);
      });
    }
    else if (activeObject) {
      canvas.remove(activeObject);
    }
  });

  var supportsInputOfType = function(type) {
    return function() {
      var el = document.createElement('input');
      try {
        el.type = type;
      }
      catch(err) { }
      return el.type === type;
    };
  };

  var supportsSlider = supportsInputOfType('range'),
      supportsColorpicker = supportsInputOfType('color');

  if (supportsSlider()) {

    (function() {

      var $controls = $('#controls');
      var $sliderLabel = $('<label for="opacity">Opacity: </label>');
      var $slider = $('<input id="opacity" value="100" type="range">');

      $controls.append($sliderLabel, $slider);

      canvas.calcOffset();

      $('#opacity').on('change', function() {

        var activeObject = canvas.getActiveObject(),
            activeGroup = canvas.getActiveGroup();

        if (activeObject || activeGroup) {
          setStyle(activeObject || activeGroup, 'opacity', parseInt(this.value, 10) / 100);
        }
      });

    })();
  }

  if (supportsColorpicker()) {
    (function() {
      var $controls = $('#controls');

      var $label = $('<label for="color" style="margin-left:10px">Color: </label>');
      var $colorpicker = $('<input type="color" id="color" style="width:40px">');

      $controls.append($label, $colorpicker);

      canvas.calcOffset();

      $colorpicker.on('change', function() {
        var activeObject = canvas.getActiveObject(),
            activeGroup = canvas.getActiveGroup();

        if (activeObject || activeGroup) {
          setStyle(activeObject || activeGroup, 'fill', this.value);
          canvas.renderAll();
        }
      });

    })();
  }

  var $lockHorizontallyEl = $('#lock-horizontally');
  $lockHorizontallyEl.on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockMovementX = !activeObject.lockMovementX;
      $lockHorizontallyEl.html(
        activeObject.lockMovementX
          ? 'Unlock horizontal movement'
          : 'Lock horizontal movement');
    }
  });

  var $lockVerticallyEl = $('#lock-vertically');
  $lockVerticallyEl.on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockMovementY = !activeObject.lockMovementY;
      $lockVerticallyEl.html(
        activeObject.lockMovementY
          ? 'Unlock vertical movement'
          : 'Lock vertical movement');
    }
  });

  var $lockScalingXEl = $('#lock-scaling-x');
  $lockScalingXEl.on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockScalingX = !activeObject.lockScalingX;
      lockScalingXEl.innerHTML = activeObject.lockScalingX
        ? 'Unlock horizontal scaling'
        : 'Lock horizontal scaling';
    }
  });

  var $lockScalingYEl = $('#lock-scaling-y');
  $lockScalingYEl.on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockScalingY = !activeObject.lockScalingY;
      lockScalingYEl.innerHTML = activeObject.lockScalingY
        ? 'Unlock vertical scaling'
        : 'Lock vertical scaling';
    }
  });

  var $lockRotationEl = $('#lock-rotation');
  $lockRotationEl.on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockRotation = !activeObject.lockRotation;
      lockRotationEl.innerHTML = activeObject.lockRotation
        ? 'Unlock rotation'
        : 'Lock rotation';
    }
  });

  var $sendBackwardsEl = $('#send-backwards');
  $sendBackwardsEl.on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.sendBackwards(activeObject);
    }
  });

  var $sendToBackEl = $('#send-to-back');
  $sendToBackEl.on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.sendToBack(activeObject);
    }
  });

  var $bringForwardEl = $('#bring-forward');
  $bringForwardEl.on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.bringForward(activeObject);
    }
  });

  var $bringToFrontEl = $('#bring-to-front');
  $bringToFrontEl.on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.bringToFront(activeObject);
    }
  });

  var $gradientifyBtn = $('#gradientify'),
      $shadowifyBtn = $('#shadowify'),
      $patternifyBtn = $('#patternify'),
      $clipBtn = $('#clip');

  var activeObjectButtons = [
    $lockHorizontallyEl,
    $lockVerticallyEl,
    $lockScalingXEl,
    $lockScalingYEl,
    $lockRotationEl,
    $removeSelectedEl,
    $gradientifyBtn,
    $shadowifyBtn,
    $patternifyBtn,
    $clipBtn,
    $sendBackwardsEl,
    $sendToBackEl,
    $bringForwardEl,
    $bringToFrontEl
  ];

  activeObjectButtons.push($('#opacity'));
  activeObjectButtons.push($('#color'));

  for (var i = activeObjectButtons.length; i--; ) {
    if (!activeObjectButtons[i]) continue;
    activeObjectButtons[i].prop('disabled', true);
  }

  canvas.on('object:selected', onObjectSelected);
  canvas.on('group:selected', onObjectSelected);

  function onObjectSelected(e) {
    var selectedObject = e.target;

    for (var i = activeObjectButtons.length; i--; ) {
      if (!activeObjectButtons[i]) continue;
      activeObjectButtons[i].prop('disabled', false);
    }

    $lockHorizontallyEl.html(
      selectedObject.lockMovementX ? 'Unlock horizontal movement' : 'Lock horizontal movement');

    $lockVerticallyEl.html(
      selectedObject.lockMovementY ? 'Unlock vertical movement' : 'Lock vertical movement');

    $lockScalingXEl.html(
      selectedObject.lockScalingX ? 'Unlock horizontal scaling' : 'Lock horizontal scaling');

    $lockScalingYEl.html(
      selectedObject.lockScalingY ? 'Unlock vertical scaling' : 'Lock vertical scaling');

    $lockRotationEl.html(
      selectedObject.lockRotation ? 'Unlock rotation' : 'Lock rotation');

    $('#color').val(selectedObject.getFill())
    $('#opacity').val(parseInt(selectedObject.getOpacity() * 100, 10));

    if (/text/.test(selectedObject.type)) {

      $('#text-wrapper').show().find('textarea').val(selectedObject.getText());

      $cmdBoldBtn[0].className = $cmdUnderlineBtn[0].className = $cmdLinethroughBtn[0].className =
      $cmdOverlineBtn[0].className = $cmdItalicBtn[0].className = 'btn';

      if (selectedObject.fontWeight === 'bold') {
        $cmdBoldBtn.addClass('selected');
      }
      if (selectedObject.textDecoration === 'underline') {
        $cmdUnderlineBtn.addClass('selected');
      }
      if (selectedObject.textDecoration === 'line-through') {
        $cmdLinethroughBtn.addClass('selected');
      }
      if (selectedObject.textDecoration === 'overline') {
        $cmdOverlineBtn.addClass('selected');
      }
      if (selectedObject.fontStyle === 'italic') {
        $cmdItalicBtn.addClass('selected');
      }

      $fontFamilySwitch.val(selectedObject.get('fontFamily').toLowerCase());
      $textAlignSwitch.val(fabric.util.string.capitalize(selectedObject.get('textAlign')));

      $bgColorField.val(selectedObject.get('backgroundColor'));
      $bgLineColorField.val(selectedObject.get('textBackgroundColor'));
      $textFontSizeField.val(selectedObject.get('fontSize'));

      $strokeColorField.val(selectedObject.get('stroke'));
      $strokeWidthField.val(selectedObject.get('strokeWidth'));
      $textLineHeightField.val(selectedObject.get('lineHeight'));
    }
    else {
      $('#text-wrapper').hide();
    }

    $('#controls').show();
  }

  canvas.on('selection:cleared', function(e) {
    for (var i = activeObjectButtons.length; i--; ) {
      if (!activeObjectButtons[i]) continue;
      activeObjectButtons[i].prop('disabled', true);
    }
    $('#controls, #text-wrapper').hide();
  });

  var $drawingModeEl = $('#drawing-mode'),
      $drawingOptionsEl = $('#drawing-mode-options'),
      $drawingColorEl = $('#drawing-color'),
      $drawingLineWidthEl = $('#drawing-line-width'),
      $drawingShadowWidth = $('#drawing-shadow-width');

  $drawingModeEl.on('click', function() {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    if (canvas.isDrawingMode) {
      $drawingModeEl.html('Cancel drawing mode');
      $drawingOptionsEl.show();
    }
    else {
      $drawingModeEl.html('Enter drawing mode');
      $drawingOptionsEl.hide();
    }
  });

  canvas.on('path:created', function() {
    updateComplexity();
  });

  if (fabric.PatternBrush) {
    var vLinePatternBrush = new fabric.PatternBrush(canvas);
    vLinePatternBrush.getPatternSrc = function() {

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

    var hLinePatternBrush = new fabric.PatternBrush(canvas);
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

    var squarePatternBrush = new fabric.PatternBrush(canvas);
    squarePatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 2;

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
      var ctx = patternCanvas.getContext('2d');

      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, squareWidth, squareWidth);

      return patternCanvas;
    };

    var diamondPatternBrush = new fabric.PatternBrush(canvas);
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

    var img = new Image();
    img.src = '../assets/honey_im_subtle.png';

    var texturePatternBrush = new fabric.PatternBrush(canvas);
    texturePatternBrush.source = img;
  }

  $('#drawing-mode-selector').on('change', function() {

    if (this.value === 'hline') {
      canvas.freeDrawingBrush = vLinePatternBrush;
    }
    else if (this.value === 'vline') {
      canvas.freeDrawingBrush = hLinePatternBrush;
    }
    else if (this.value === 'square') {
      canvas.freeDrawingBrush = squarePatternBrush;
    }
    else if (this.value === 'diamond') {
      canvas.freeDrawingBrush = diamondPatternBrush;
    }
    else if (this.value === 'texture') {
      canvas.freeDrawingBrush = texturePatternBrush;
    }
    else {
      canvas.freeDrawingBrush = new fabric[this.value + 'Brush'](canvas);
    }

    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = $drawingColorEl.val();
      canvas.freeDrawingBrush.width = parseInt($drawingLineWidthEl.val(), 10) || 1;
      canvas.freeDrawingBrush.shadowBlur = parseInt($drawingShadowWidth.val(), 10) || 0;
    }
  });

  $drawingColorEl.on('change', function() {
    canvas.freeDrawingBrush.color = this.value;
  });
  $drawingLineWidthEl.on('change', function() {
    canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
  });
  $drawingShadowWidth.on('change', function() {
    canvas.freeDrawingBrush.shadowBlur = parseInt(this.value, 10) || 0;
  });

  if (canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush.color = $drawingColorEl.val();
    canvas.freeDrawingBrush.width = parseInt($drawingLineWidthEl.val(), 10) || 1;
    canvas.freeDrawingBrush.shadowBlur = 0;
  }

  $('#canvas-background-picker').on('change', function() {
    canvas.backgroundColor = this.value;
    canvas.renderAll();
  });

  var text = 'Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua.\n' +
    'Ut enim ad minim veniam,\nquis nostrud exercitation ullamco\nlaboris nisi ut aliquip ex ea commodo consequat.';

  $('#add-text').on('click', function() {
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
    canvas.add(textSample);
    updateComplexity();
  });

  setTimeout(function() {
    canvas.calcOffset();
  }, 100);

  if (document.location.search.indexOf('guidelines') > -1) {
    initCenteringGuidelines(canvas);
    initAligningGuidelines(canvas);
  }

  $gradientifyBtn.on('click', function() {
    var obj = canvas.getActiveObject();
    if (obj) {
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
      canvas.renderAll();
    }
  });

  $shadowifyBtn.on('click', function() {
    var obj = canvas.getActiveObject();
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
    canvas.renderAll();
  });

  var pattern = window.__pattern = new fabric.Pattern({
    source: '/assets/escheresque.png',
    repeat: 'repeat'
  });

  $patternifyBtn.on('click', function() {
    var obj = canvas.getActiveObject();
    if (!obj) return;

    if (obj.fill instanceof fabric.Pattern) {
      obj.fill = null;
    }
    else {
      if (obj instanceof fabric.PathGroup) {
        obj.getObjects().forEach(function(o) { o.fill = pattern; });
      }
      else {
        obj.fill = pattern;
      }
    }
    canvas.renderAll();
  });

  $clipBtn.on('click', function() {
    var obj = canvas.getActiveObject();
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
    canvas.renderAll();
  });

  $('#text').on('focus', function() {
    var activeObject = canvas.getActiveObject();

    if (activeObject && /text/.test(activeObject.type)) {
      this.value = activeObject.text;
    }
  })
  .on('keyup', function(e) {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      if (!this.value) {
        canvas.discardActiveObject();
      }
      else {
        activeObject.setText(this.value);
      }
      canvas.renderAll();
    }
  });

  function getStyle(object, styleName) {
    return (object.getSelectionStyles && object.isEditing)
      ? object.getSelectionStyles()[styleName]
      : object[styleName];
  }

  function setStyle(object, styleName, value) {
    if (object.setSelectionStyles && object.isEditing) {
      var style = { };
      style[styleName] = value;
      object.setSelectionStyles(style);
      object.setCoords();
    }
    else {
      object[styleName] = value;
    }
    canvas.renderAll();
  }

  var $cmdUnderlineBtn = $('#text-cmd-underline'),
      $cmdLinethroughBtn = $('#text-cmd-linethrough'),
      $cmdOverlineBtn = $('#text-cmd-overline'),
      $cmdBoldBtn = $('#text-cmd-bold'),
      $cmdItalicBtn = $('#text-cmd-italic');

  activeObjectButtons.push($cmdUnderlineBtn);
  $cmdUnderlineBtn.prop('disabled', true).on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {

      var isUnderline = (getStyle(activeObject, 'textDecoration') || '').indexOf('underline') > -1;
      setStyle(activeObject, 'textDecoration', isUnderline ? '' : 'underline');

      canvas.renderAll();
    }
  });

  activeObjectButtons.push($cmdLinethroughBtn);
  $cmdLinethroughBtn.prop('disabled', true).on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {

      var isLinethrough = (getStyle(activeObject, 'textDecoration') || '').indexOf('line-through') > -1;
      setStyle(activeObject, 'textDecoration', isLinethrough ? '' : 'line-through');

      canvas.renderAll();
    }
  });

  activeObjectButtons.push($cmdOverlineBtn);
  $cmdOverlineBtn.prop('disabled', true).on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {

      var isOverline = (getStyle(activeObject, 'textDecoration') || '').indexOf('overline') > -1;
      setStyle(activeObject, 'textDecoration', isOverline ? '' : 'overline');

      canvas.renderAll();
    }
  });

  activeObjectButtons.push($cmdBoldBtn);
  $cmdBoldBtn.prop('disabled', true).on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {

      var isBold = getStyle(activeObject, 'fontWeight') === 'bold';
      setStyle(activeObject, 'fontWeight', isBold ? '' : 'bold');

      $(this)[isBold ? 'addClass' : 'removeClass']('selected');
      canvas.renderAll();
    }
  });

  activeObjectButtons.push($cmdItalicBtn);
  $cmdItalicBtn.prop('disabled', true).on('click', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {

      var isItalic = getStyle(activeObject, 'fontStyle') === 'italic';
      setStyle(activeObject, 'fontStyle', isItalic ? '' : 'italic');

      $(this)[isItalic ? 'addClass' : 'removeClass']('selected');
      canvas.renderAll();
    }
  });

  var $textAlignSwitch = $('#text-align');
  activeObjectButtons.push($textAlignSwitch);
  $textAlignSwitch.prop('disabled', true).on('change', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      var value = this.value.toLowerCase();
      activeObject.textAlign = value;
      canvas._adjustPosition && canvas._adjustPosition(activeObject, value === 'justify' ? 'left' : value);
      canvas.renderAll();
    }
  });

  var $fontFamilySwitch = $('#font-family');
  activeObjectButtons.push($fontFamilySwitch);
  $fontFamilySwitch.prop('disabled', true).on('change', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      setStyle(activeObject, 'fontFamily', this.value.toLowerCase());
      canvas.renderAll();
    }
  });

  var $bgColorField = $('#text-bg-color');
  $bgColorField.on('change', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      activeObject.backgroundColor = this.value;
      canvas.renderAll();
    }
  });

  var $bgLineColorField = $('#text-lines-bg-color');
  $bgLineColorField.on('change', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      setStyle(activeObject, 'textBackgroundColor', this.value);
      canvas.renderAll();
    }
  });

  var $textFontSizeField = $('#text-font-size');
  $textFontSizeField.on('change', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      setStyle(activeObject, 'fontSize', parseInt(this.value, 10));
      canvas.renderAll();
    }
  });

  var $strokeColorField = $('#text-stroke-color');
  $strokeColorField.on('change', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      setStyle(activeObject, 'stroke', this.value);
      canvas.renderAll();
    }
  });

  var $strokeWidthField = $('#text-stroke-width');
  $strokeWidthField.on('change', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      setStyle(activeObject, 'strokeWidth', parseInt(this.value, 10));
      canvas.renderAll();
    }
  });

  var $textLineHeightField = $('#text-line-height');
  $textLineHeightField.on('change', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject && /text/.test(activeObject.type)) {
      activeObject.setLineHeight(parseInt(this.value, 10));
      canvas.renderAll();
    }
  });

  $('#load-svg').on('click', function() {
    var svg = $('#svg-console').val();
    fabric.loadSVGFromString(svg, function(objects, options) {
      var obj = fabric.util.groupSVGElements(objects, options);
      canvas.add(obj).centerObject(obj).renderAll();
      obj.setCoords();
    });
  });

  $('#load-svg-without-grouping').on('click', function() {
    var svg = $('#svg-console').val();
    fabric.loadSVGFromString(svg, function(objects) {
      canvas.add.apply(canvas, objects);
      canvas.renderAll();
    });
  });

  $(document).on('click', '.origin-x', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.set('originX', this.value).setCoords();
      canvas.renderAll();
    }
  });

  $(document).on('click', '.origin-y', function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.set('originY', this.value).setCoords();
      canvas.renderAll();
    }
  });

  if (typeof Cufon !== 'undefined' && Cufon.fonts.delicious) {
    Cufon.fonts.delicious.offsetLeft = 75;
    Cufon.fonts.delicious.offsetTop = 25;
  }

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
  canvas.add(iText, iText2);

  Paster.init(function(str) {
    console.log(str);
  });

})(this);
