---
layout: demoV4
title: Add text on paths
codepen: true
---
This is a new beta feature in Fabric.js.
You can specify a fabric.Path property for the text, called path, that will make the text render curved, following the path.
The feature is new, and has a lot of edge cases to be solved and improved.

In this demo we are using free drawing to draw a path, and then we inspect the path ad we try to understand the best font font size to adapt the text on the path.

We are using the event `before:path:created` to access the path before it gets added to the canvas, calculate an approximate fontSize that will work on that path length, add this text to the canvas.

Then are using `path:created` to remove the path from the canvas.

### On the canvas below use your mouse to draw something

<div
  class="codepen-later"
  data-editable="true"
  data-height="500"
  data-default-tab="result"
>
<pre data-lang="css" data-options-autoprefixer="true">
  #canvas {
  	border: 1px solid blue;
    position: absolute !important;
    top: 5px;
    left: 5px;
  }
</pre>
<pre data-lang="html">
  <canvas id="canvas" width="500" height="400" ></canvas>
</pre>
<pre data-lang="js">

  fabric.Object.prototype.objectCaching = true;

	var canvas = new fabric.Canvas('canvas', {
    isDrawingMode: true,
    freeDrawingBrush: new fabric.PencilBrush({ decimate: 8 })
  });

  canvas.on('before:path:created', function(opt) {
    var path = opt.path;
    var pathInfo = fabric.util.getPathSegmentsInfo(path.path);
    path.segmentsInfo = pathInfo;
    var pathLength = pathInfo[pathInfo.length - 1].length;
    var text = 'This is a demo of text on a path. This text should be small enough to fit in what you drawn.';
    var fontSize = 2.5 * pathLength / text.length;
    var text = new fabric.Text(text, { fontSize: fontSize, path: path, top: path.top, left: path.left });
    canvas.add(text);
  });

  canvas.on('path:created', function(opt) {
    canvas.remove(opt.path);
  })
</pre>
</div>
