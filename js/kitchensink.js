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

  //fabric.Object.prototype.padding = 5;
  fabric.Object.prototype.transparentCorners = false;

  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }

  if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
    fabric.Object.prototype.cornersize = 30;
  }

  var canvas = global.canvas = new fabric.Canvas('canvas');

  document.getElementById('commands').onclick = function(ev) {
    ev = ev || window.event;

    var element = ev.target || ev.srcElement;
    if (element.nodeName.toLowerCase() === 'strong') {
      element = element.parentNode;
    }

    var className = element.className,
        offset = 50,
        left = fabric.util.getRandomInt(0 + offset, 700 - offset),
        top = fabric.util.getRandomInt(0 + offset, 500 - offset),
        angle = fabric.util.getRandomInt(-20, 40),
        width = fabric.util.getRandomInt(30, 50),
        opacity = (function(min, max){ return Math.random() * (max - min) + min; })(0.5, 1);

    if ($(element).hasClass('rect')) {
      canvas.add(new fabric.Rect({
        left: left,
        top: top,
        fill: '#' + getRandomColor(),
        width: 50,
        height: 50,
        opacity: 0.8
      }));
    }
    if ($(element).hasClass('circle')) {
      canvas.add(new fabric.Circle({
        left: left,
        top: top,
        fill: '#' + getRandomColor(),
        radius: 50,
        opacity: 0.8
      }));
    }
    if ($(element).hasClass('triangle')) {
      canvas.add(new fabric.Triangle({
        left: left,
        top: top,
        fill: '#' + getRandomColor(),
        width: 50,
        height: 50,
        opacity: 0.8
      }));
    }
    if ($(element).hasClass('line')) {
      canvas.add(new fabric.Line([ 50, 100, 200, 200], {
        left: left,
        top: top,
        stroke: '#' + getRandomColor()
      }));
    }
    if ($(element).hasClass('polygon')) {
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
    if ($(element).hasClass('image1')) {
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
    if ($(element).hasClass('image2')) {
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
    if ($(element).hasClass('image3')) {
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
    if ($(element).hasClass('shape')) {
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
          loadedObject/*.scaleToWidth(300)*/.setCoords();

          // loadedObject.hasRotatingPoint = true;

          canvas.add(loadedObject);
          updateComplexity();
          canvas.calcOffset();
        });
      }
    }

    if ($(element).hasClass('clear')) {
      if (confirm('Are you sure?')) {
        canvas.clear();
      }
    }

    canvas.calcOffset();

    updateComplexity();
  };

  function updateComplexity() {
    setTimeout(function(){
      document.getElementById('complexity').childNodes[1].innerHTML = ' ' + canvas.complexity();
    }, 100);
  }

  document.getElementById('execute').onclick = function() {
    var code = document.getElementById('canvas-console').value;
    if (!(/^\s+$/).test(code)) {
      eval(code);
    }
  };

  document.getElementById('rasterize').onclick = function() {
    if (!fabric.Canvas.supports('toDataURL')) {
      alert('This browser doesn\'t provide means to serialize canvas to an image');
    }
    else {
      window.open(canvas.toDataURL('png'));
    }
  };
  document.getElementById('rasterize-svg').onclick = function() {
    window.open('data:image/svg+xml;utf8,' + encodeURIComponent(canvas.toSVG()));
  };
  document.getElementById('rasterize-json').onclick = function() {
    alert(JSON.stringify(canvas));
  };

  var removeSelectedEl = document.getElementById('remove-selected');
  removeSelectedEl.onclick = function() {
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
  };

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
    (function(){
      var controls = document.getElementById('controls');

      var sliderLabel = document.createElement('label');
      sliderLabel.htmlFor = 'opacity';
      sliderLabel.innerHTML = 'Opacity: ';

      var slider = document.createElement('input');

      try { slider.type = 'range'; } catch(err) { }

      slider.id = 'opacity';
      slider.value = 100;

      controls.appendChild(sliderLabel);
      controls.appendChild(slider);

      canvas.calcOffset();

      slider.onchange = function() {
        var activeObject = canvas.getActiveObject(),
            activeGroup = canvas.getActiveGroup();

        if (activeObject || activeGroup) {
          setStyle(activeObject || activeGroup, opacity, parseInt(this.value, 10) / 100);
          canvas.renderAll();
        }
      };
    })();
  }

  if (supportsColorpicker()) {
    (function(){
      var controls = document.getElementById('controls');

      var label = document.createElement('label');
      label.htmlFor = 'color';
      label.innerHTML = 'Color: ';
      label.style.marginLeft = '10px';

      var colorpicker = document.createElement('input');
      colorpicker.type = 'color';
      colorpicker.id = 'color';
      colorpicker.style.width = '40px';

      controls.appendChild(label);
      controls.appendChild(colorpicker);

      canvas.calcOffset();

      colorpicker.onchange = function() {
        var activeObject = canvas.getActiveObject(),
            activeGroup = canvas.getActiveGroup();

        if (activeObject || activeGroup) {
          setStyle(activeObject || activeGroup, 'fill', this.value);
          canvas.renderAll();
        }
      };
    })();
  }

  var lockHorizontallyEl = document.getElementById('lock-horizontally');
  lockHorizontallyEl.onclick = function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockMovementX = !activeObject.lockMovementX;
      lockHorizontallyEl.innerHTML = activeObject.lockMovementX
        ? 'Unlock horizontal movement'
        : 'Lock horizontal movement';
    }
  };

  var lockVerticallyEl = document.getElementById('lock-vertically');
  lockVerticallyEl.onclick = function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockMovementY = !activeObject.lockMovementY;
      lockVerticallyEl.innerHTML = activeObject.lockMovementY
        ? 'Unlock vertical movement'
        : 'Lock vertical movement';
    }
  };

  var lockScalingXEl = document.getElementById('lock-scaling-x');
  lockScalingXEl.onclick = function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockScalingX = !activeObject.lockScalingX;
      lockScalingXEl.innerHTML = activeObject.lockScalingX
        ? 'Unlock horizontal scaling'
        : 'Lock horizontal scaling';
    }
  };

  var lockScalingYEl = document.getElementById('lock-scaling-y');
  lockScalingYEl.onclick = function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockScalingY = !activeObject.lockScalingY;
      lockScalingYEl.innerHTML = activeObject.lockScalingY
        ? 'Unlock vertical scaling'
        : 'Lock vertical scaling';
    }
  };

  var lockRotationEl = document.getElementById('lock-rotation');
  lockRotationEl.onclick = function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockRotation = !activeObject.lockRotation;
      lockRotationEl.innerHTML = activeObject.lockRotation
        ? 'Unlock rotation'
        : 'Lock rotation';
    }
  };

  var sendBackwardsEl = document.getElementById('send-backwards');
  sendBackwardsEl.onclick = function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.sendBackwards(activeObject);
    }
  };

  var sendToBackEl = document.getElementById('send-to-back');
  sendToBackEl.onclick = function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.sendToBack(activeObject);
    }
  };

  var bringForwardEl = document.getElementById('bring-forward');
  bringForwardEl.onclick = function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.bringForward(activeObject);
    }
  };

  var bringToFrontEl = document.getElementById('bring-to-front');
  bringToFrontEl.onclick = function() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.bringToFront(activeObject);
    }
  };

  var gradientifyBtn = document.getElementById('gradientify'),
      shadowifyBtn = document.getElementById('shadowify'),
      patternifyBtn = document.getElementById('patternify'),
      clipBtn = document.getElementById('clip');

  var activeObjectButtons = [
    lockHorizontallyEl,
    lockVerticallyEl,
    lockScalingXEl,
    lockScalingYEl,
    lockRotationEl,
    removeSelectedEl,
    gradientifyBtn,
    shadowifyBtn,
    patternifyBtn,
    clipBtn,
    sendBackwardsEl,
    sendToBackEl,
    bringForwardEl,
    bringToFrontEl
  ];

  var opacityEl = document.getElementById('opacity');
  if (opacityEl) {
    activeObjectButtons.push(opacityEl);
  }
  var colorEl = document.getElementById('color');
  if (colorEl) {
    activeObjectButtons.push(colorEl);
  }

  for (var i = activeObjectButtons.length; i--; ) {
    activeObjectButtons[i].disabled = true;
  }

  canvas.on('object:selected', onObjectSelected);
  canvas.on('group:selected', onObjectSelected);

  function onObjectSelected(e) {
    var selectedObject = e.target;

    for (var i = activeObjectButtons.length; i--; ) {
      activeObjectButtons[i].disabled = false;
    }

    lockHorizontallyEl.innerHTML = (selectedObject.lockMovementX ? 'Unlock horizontal movement' : 'Lock horizontal movement');
    lockVerticallyEl.innerHTML = (selectedObject.lockMovementY ? 'Unlock vertical movement' : 'Lock vertical movement');
    lockScalingXEl.innerHTML = (selectedObject.lockScalingX ? 'Unlock horizontal scaling' : 'Lock horizontal scaling');
    lockScalingYEl.innerHTML = (selectedObject.lockScalingY ? 'Unlock vertical scaling' : 'Lock vertical scaling');
    lockRotationEl.innerHTML = (selectedObject.lockRotation ? 'Unlock rotation' : 'Lock rotation');

    var colorEl = document.getElementById('color');
    colorEl && (colorEl.value = selectedObject.getFill());

    var opacityEl = document.getElementById('opacity');
    opacityEl && (opacityEl.value = parseInt(selectedObject.getOpacity() * 100, 10));

    if (/text/.test(selectedObject.type)) {

      $('#text-wrapper').show();
      $('#text-wrapper textarea').val(selectedObject.getText());

      cmdBoldBtn.className = cmdUnderlineBtn.className = cmdLinethroughBtn.className = cmdOverlineBtn.className = cmdItalicBtn.className = 'btn';

      cmdBoldBtn.className = selectedObject.fontWeight === 'bold' ? cmdBoldBtn.className + ' selected' : cmdBoldBtn.className;
      cmdUnderlineBtn.className = selectedObject.textDecoration === 'underline' ? cmdUnderlineBtn.className + ' selected' : cmdUnderlineBtn.className;
      cmdLinethroughBtn.className = selectedObject.textDecoration === 'line-through' ? cmdLinethroughBtn.className + ' selected' : cmdLinethroughBtn.className;
      cmdOverlineBtn.className = selectedObject.textDecoration === 'overline' ? cmdOverlineBtn.className + ' selected' : cmdOverlineBtn.className;
      cmdItalicBtn.className = selectedObject.fontStyle === 'italic' ? cmdItalicBtn.className + ' selected' : cmdItalicBtn.className;

      fontFamilySwitch.value = selectedObject.get('fontFamily').toLowerCase();
      textAlignSwitch.value = fabric.util.string.capitalize(selectedObject.get('textAlign'));
      bgColorField.value = selectedObject.get('backgroundColor');
      bgLineColorField.value = selectedObject.get('textBackgroundColor');
      textFontSizeField.value = selectedObject.get('fontSize');
      strokeColorField.value = selectedObject.get('stroke');
      strokeWidthField.value = selectedObject.get('strokeWidth');
      textLineHeightField.value = selectedObject.get('lineHeight');
    }
    else {
      $('#text-wrapper').hide();
    }

    $('#controls').show();
  }

  canvas.on('selection:cleared', function(e) {
    for (var i = activeObjectButtons.length; i--; ) {
      activeObjectButtons[i].disabled = true;
    }
    $('#controls').hide();
    $('#text-wrapper').hide();
  });

  var drawingModeEl = document.getElementById('drawing-mode'),
      drawingOptionsEl = document.getElementById('drawing-mode-options'),
      drawingColorEl = document.getElementById('drawing-color'),
      drawingLineWidthEl = document.getElementById('drawing-line-width'),
      drawingShadowWidth = document.getElementById('drawing-shadow-width');

  drawingModeEl.onclick = function() {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    if (canvas.isDrawingMode) {
      drawingModeEl.innerHTML = 'Cancel drawing mode';
      drawingOptionsEl.style.display = '';
    }
    else {
      drawingModeEl.innerHTML = 'Enter drawing mode';
      drawingOptionsEl.style.display = 'none';
    }
  };

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
      canvas.freeDrawingBrush.color = drawingColorEl.value;
      canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
      canvas.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
    }
  });

  drawingColorEl.onchange = function() {
    canvas.freeDrawingBrush.color = drawingColorEl.value;
  };
  drawingLineWidthEl.onchange = function() {
    canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
  };
  drawingShadowWidth.onchange = function() {
    canvas.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
  };

  if (canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush.color = drawingColorEl.value;
    canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
    canvas.freeDrawingBrush.shadowBlur = 0;
  }

  document.getElementById('canvas-background-picker').onchange = function() {
    canvas.backgroundColor = this.value;
    canvas.renderAll();
  };

  var text = 'Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua.\n' +
    'Ut enim ad minim veniam,\nquis nostrud exercitation ullamco\nlaboris nisi ut aliquip ex ea commodo consequat.';

  document.getElementById('add-text').onclick = function() {
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
  };

  setTimeout(function() {
    canvas.calcOffset();
  }, 100);

  if (document.location.search.indexOf('guidelines') > -1) {
    initCenteringGuidelines(canvas);
    initAligningGuidelines(canvas);
  }

  gradientifyBtn.onclick = function() {
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
  };

  shadowifyBtn.onclick = function() {
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
  };

  var pattern = window.__pattern = new fabric.Pattern({
    source: '/assets/escheresque.png',
    repeat: 'repeat'
  });
  patternifyBtn.onclick = function() {
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
  };

  clipBtn.onclick = function() {
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
  };

  var textEl = document.getElementById('text');
  if (textEl) {
    textEl.onfocus = function() {
      var activeObject = canvas.getActiveObject();

      if (activeObject && /text/.test(activeObject.type)) {
        this.value = activeObject.text;
      }
    };
    textEl.onkeyup = function(e) {
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
    };
  }

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

  var cmdUnderlineBtn = document.getElementById('text-cmd-underline'),
      cmdLinethroughBtn = document.getElementById('text-cmd-linethrough'),
      cmdOverlineBtn = document.getElementById('text-cmd-overline');

  if (cmdUnderlineBtn) {
    activeObjectButtons.push(cmdUnderlineBtn);
    cmdUnderlineBtn.disabled = true;
    cmdUnderlineBtn.onclick = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject && /text/.test(activeObject.type)) {

        var isUnderline = (getStyle(activeObject, 'textDecoration') || '').indexOf('underline') > -1;
        setStyle(activeObject, 'textDecoration', isUnderline ? '' : 'underline');

        // if (activeObject.textDecoration === 'underline') {
        //   this.className += ' selected';
        //   cmdLinethroughBtn.className = cmdOverlineBtn.className = 'btn';
        // }
        // else {
        //   this.className = 'btn';
        // }
        canvas.renderAll();
      }
    };
  }

  if (cmdLinethroughBtn) {
    activeObjectButtons.push(cmdLinethroughBtn);
    cmdLinethroughBtn.disabled = true;
    cmdLinethroughBtn.onclick = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject && /text/.test(activeObject.type)) {

        var isLinethrough = (getStyle(activeObject, 'textDecoration') || '').indexOf('line-through') > -1;
        setStyle(activeObject, 'textDecoration', isLinethrough ? '' : 'line-through');

        // if (activeObject.textDecoration === 'line-through') {
        //   this.className += ' selected';
        //   cmdUnderlineBtn.className = cmdOverlineBtn.className = 'btn';
        // }
        // else {
        //   this.className = 'btn';
        // }
        canvas.renderAll();
      }
    };
  }

  if (cmdOverlineBtn) {
    activeObjectButtons.push(cmdOverlineBtn);
    cmdOverlineBtn.disabled = true;
    cmdOverlineBtn.onclick = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject && /text/.test(activeObject.type)) {

        var isOverline = (getStyle(activeObject, 'textDecoration') || '').indexOf('overline') > -1;
        setStyle(activeObject, 'textDecoration', isOverline ? '' : 'overline');

        // if (activeObject.textDecoration === 'overline') {
        //   this.className += ' selected';
        //   cmdUnderlineBtn.className = cmdLinethroughBtn.className = 'btn';
        // }
        // else {
        //   this.className = 'btn';
        // }
        canvas.renderAll();
      }
    };
  }

  var cmdBoldBtn = document.getElementById('text-cmd-bold');
  if (cmdBoldBtn) {
    activeObjectButtons.push(cmdBoldBtn);
    cmdBoldBtn.disabled = true;
    cmdBoldBtn.onclick = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject && /text/.test(activeObject.type)) {

        var isBold = getStyle(activeObject, 'fontWeight') === 'bold';
        setStyle(activeObject, 'fontWeight', isBold ? '' : 'bold');

        this.className = isBold ? this.className + ' selected' : this.className.replace(' selected', '');
        canvas.renderAll();
      }
    };
  }

  var cmdItalicBtn = document.getElementById('text-cmd-italic');
  if (cmdItalicBtn) {
    activeObjectButtons.push(cmdItalicBtn);
    cmdItalicBtn.disabled = true;
    cmdItalicBtn.onclick = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject && /text/.test(activeObject.type)) {

        var isItalic = getStyle(activeObject, 'fontStyle') === 'italic';
        setStyle(activeObject, 'fontStyle', isItalic ? '' : 'italic');

        this.className = isItalic ? this.className + ' selected' : this.className.replace(' selected', '');
        canvas.renderAll();
      }
    };
  }

  var textAlignSwitch = document.getElementById('text-align');
  if (textAlignSwitch) {
    activeObjectButtons.push(textAlignSwitch);
    textAlignSwitch.disabled = true;
    textAlignSwitch.onchange = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject && /text/.test(activeObject.type)) {
        var value = this.value.toLowerCase();
        activeObject.textAlign = value;
        canvas._adjustPosition && canvas._adjustPosition(activeObject, value === 'justify' ? 'left' : value);
        canvas.renderAll();
      }
    };
  }

  var fontFamilySwitch = document.getElementById('font-family');
  if (fontFamilySwitch) {
    activeObjectButtons.push(fontFamilySwitch);
    fontFamilySwitch.disabled = true;
    fontFamilySwitch.onchange = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject && /text/.test(activeObject.type)) {
        setStyle(activeObject, 'fontFamily', this.value.toLowerCase());
        canvas.renderAll();
      }
    };
  }

  var bgColorField = document.getElementById('text-bg-color');
  if (bgColorField) {
    bgColorField.onchange = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject && /text/.test(activeObject.type)) {
        activeObject.backgroundColor = this.value;
        canvas.renderAll();
      }
    };
  }

  var bgLineColorField = document.getElementById('text-lines-bg-color');
  if (bgLineColorField) {
    bgLineColorField.onchange = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject && /text/.test(activeObject.type)) {
        setStyle(activeObject, 'textBackgroundColor', this.value);
        canvas.renderAll();
      }
    };
  }

  var textFontSizeField = document.getElementById('text-font-size');
  if (textFontSizeField) {
    textFontSizeField.onchange = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject && /text/.test(activeObject.type)) {
        setStyle(activeObject, 'fontSize', parseInt(this.value, 10));
        canvas.renderAll();
      }
    };
  }

  var strokeColorField = document.getElementById('text-stroke-color');
  if (strokeColorField) {
    strokeColorField.onchange = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject && /text/.test(activeObject.type)) {
        setStyle(activeObject, 'stroke', this.value);
        canvas.renderAll();
      }
    };
  }

  var strokeWidthField = document.getElementById('text-stroke-width');
  if (strokeWidthField) {
    strokeWidthField.onchange = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject && /text/.test(activeObject.type)) {
        setStyle(activeObject, 'strokeWidth', parseInt(this.value, 10));
        canvas.renderAll();
      }
    };
  }

  var textLineHeightField = document.getElementById('text-line-height');
  if (textLineHeightField) {
    textLineHeightField.onchange = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject && /text/.test(activeObject.type)) {
        activeObject.setLineHeight(parseInt(this.value, 10));
        canvas.renderAll();
      }
    };
  }

  document.getElementById('load-svg').onclick = function() {
    var svg = document.getElementById('svg-console').value;
    fabric.loadSVGFromString(svg, function(objects, options) {
      var obj = fabric.util.groupSVGElements(objects, options);
      canvas.add(obj).centerObject(obj).renderAll();
      obj.setCoords();
    });
  };

  document.getElementById('load-svg-without-grouping').onclick = function() {
    var svg = document.getElementById('svg-console').value;
    fabric.loadSVGFromString(svg, function(objects) {
      canvas.add.apply(canvas, objects);
      canvas.renderAll();
    });
  };

  [].forEach.call(document.getElementsByClassName('origin-x'), function(el) {
    el.onclick = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject) {
        activeObject.set('originX', this.value).setCoords();
        canvas.renderAll();
      }
    };
  });

  [].forEach.call(document.getElementsByClassName('origin-y'), function(el) {
    el.onclick = function() {
      var activeObject = canvas.getActiveObject();
      if (activeObject) {
        activeObject.set('originY', this.value).setCoords();
        canvas.renderAll();
      }
    };
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
