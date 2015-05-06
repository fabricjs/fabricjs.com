(function() {

  // http://snook.ca/archives/javascript/your_favourite_1
  var shim = function( className, nodeName ){
      var a = [];
      var re = new RegExp('(^| )'+className+'( |$)');
      var els = (nodeName || document).getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
  };

  function getElementsByClassName(className, nodeName) {
    if ((nodeName || document).getElementsByClassName) {
      return (nodeName || document).getElementsByClassName(className);
    }
    else {
      return shim(className, nodeName);
    }
  }

  fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

  window.onload = function() {
    for (var __all = getElementsByClassName('test-source'), __len = __all.length, __i = 0; __i < __len; __i++) {
      (function(__testSourceEl) {

        var __isAsync = __testSourceEl.className.indexOf('async') > -1;
        var __testMarkup = document.getElementById('test-template')
          .innerHTML.replace('#{code}', __testSourceEl.innerHTML);

        var __dummyEl = document.createElement('div');
        __dummyEl.innerHTML = __testMarkup;

        var __testEl = getElementsByClassName('test', __dummyEl)[0]
        document.getElementById('bd-wrapper').appendChild(__testEl);

        var __sourceEl = getElementsByClassName('source', __testEl)[0];
        var __canvasEl = getElementsByClassName('canvas', __testEl)[0];
        var __svgEl = getElementsByClassName('svg', __testEl)[0];
        var __code = __sourceEl.firstChild.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/, '>').replace('&amp;', '&');
        var canvas = window.__canvas = new fabric.StaticCanvas(__canvasEl);

        function proceed() {
          __svgEl.innerHTML = canvas.toSVG();

          __svgEl.onclick = function() {
            console.log(canvas.toSVG());
          };
        }

        function onShapeLoaded(objects, options) {
          var obj = objects.length === 1 ? objects[0] : new fabric.PathGroup(objects, options);
          var methodName = 'scaleTo' + (obj.width > obj.height ? 'Width' : 'Height');
          var canvasDimension = 300;

          obj.set({ left: canvasDimension / 2, top: canvasDimension / 2 });
          obj[methodName](canvasDimension - 20);
          canvas.add(obj);
          canvas.renderAll();

          proceed();
        }

        eval(__code);

        proceed();

      })(__all[__i]);
    }
  };
})();
