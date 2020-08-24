---
layout: articleadmd
title: Fabric.js. release changelog.
---
<style>
  #changelog {
    top: 50px;
  }
  #changelog:hover {
    top: 45px;
  }
</style>

## Fabric.js release highlights
  <p>Find general upgrades notes here <a href="/upgrade-guide">here</a></p>
### Version 4.1.0
Added a `before:path:created` event, as a user request, in order to handle brushes objects before they get added to canvas.
Generic Path change of logic. Now complex SVG paths get simplified in an absolute only command version. On top of that, A, S, T, V and H commands gets converted to C, Q and L. With this done, is simpler to connect custom controls to path properties, and also it made possible to add a path measure utility that we will need to implement the long requested text on a path feature.
<pre>
- feat(Brushes): add beforePathCreated event #6492;
- feat(fabric.Path): Change the way path is parsed and drawn. simplify path at parsing time #6504;
- feat(fabric.Path): Simplify S and T command in C and Q. #6507;
- fix(fabric.Textbox): ISSUE-6518 Textbox and centering scaling #6524;
- fix(fabric.Text): Ensure the shortcut text render the passed argument and not the entire line #6526;
- feat(fabric.util): Add a function to work with path measurements #6525;
- fix(fabric.Image): rendering pixel outside canvas size #6326;
- fix(fabric.controlsUtils): stabilize scaleObject function #6540;
- fix(fabric.Object): when in groups or active groups, fix the ability to shift deselect #6541;
</pre>
### Version 4.0.0</h3>
Added a new api to handle controls customizations. Read more here [controls api](/controls-api)

Several breaking changes. Read more here [V4 breaking changes](/v4-breaking-changes">)
### Version 3.6.4 - 3.6.6
Just backporting some generic fix from the 4.0 work.
<pre>
- fix(fabric.Image): fix safari drawing bug for using drawImage outside element boundaries #6326
- fix(fabric.Itext): fix copy paste of text with style #6418
- fix(fabric.Itext): carry over style of selected test when replacing by typing (cherry-pick) #6172
</pre>
### Version 3.6.3
Mostly backporting work happened after 4 beta to version 3 branch
<pre>
- fix(Object): ISSUE 6196 use set('canvas') to restore canvas #6216
- fix(fabric.IText): exitEditing won't error on missing hiddenTextarea. #6138
- fix(fabric.Object): getObjectScaling takes in account rotation of objects inside groups. #6118
- fix(fabric.Group): will draw shadow will call parent method. #6116
- fix(svg_parsers): Add support for empty <style/> tags (#6169)
- fix(SVG_export, text): Check font faces markup for objects within groups (#6195)
- fix(svg_export): remove extra space from svg export (#6209)
- fix(svg_import): ISSUE-6170 do not try to create missing clippath (#6210)
- fix(fabric.Object) Adding existence check for this.canvas on object stacking mixins (#6207)
</pre>
  <h3>Version 3.6.2</h3>
<pre>
- fix fabric.Object.toDataURL blurriness on images with odd pixel number [#6131](https://github.com/fabricjs/fabric.js/pull/6131)
</pre>
  <h3>Version 3.6.1</h3>
<pre>
- fix(gradient, text): ISSUE-6014 ISSUE-6077 support percentage gradient in text [#6090](https://github.com/fabricjs/fabric.js/pull/6090)
- fix(filters): ISSUE-6072 convolution filter is off by one [#6088](https://github.com/fabricjs/fabric.js/pull/6088)
- fix(transform): Fix a bug in the skewing logic [#6082](https://github.com/fabricjs/fabric.js/pull/6088)
</pre>
  <h3>Version 3.6.0</h3>
<pre>
- fix: ISSUE-5512 better Clippath transform parsing in SVG [#5983](https://github.com/fabricjs/fabric.js/pull/5983)
- fix: ISSUE-5984 Avoid enter editing in non selectable object [#5989](https://github.com/fabricjs/fabric.js/pull/5989)
- Tweak to object._setLineDash to avoid cycles when nothing in array [#6000](https://github.com/fabricjs/fabric.js/pull/6000)
- fix: ISSUE-5867 Fix the extra new line selection with empty line [#6011](https://github.com/fabricjs/fabric.js/pull/6011)
- Improvement: Use SVG Namespace for SVG Elements [#5957](https://github.com/fabricjs/fabric.js/pull/5957)
- Improvement: ISSUE-4115 - triggers in/out events for sub targets [#6013](https://github.com/fabricjs/fabric.js/pull/6013)
- Improvement: Upper canvas retina scaling [#5938](https://github.com/fabricjs/fabric.js/pull/5938)
</pre>
  <h3>Version 3.5.1</h3>
<pre>
- Fix for textbox non defined in scaleObject [#5896](https://github.com/fabricjs/fabric.js/pull/5896)
- Fix canvas pattern as background and exports [#5973](https://github.com/fabricjs/fabric.js/pull/5973)
- Fix for type error if style is null when checking if is empty [#5971](https://github.com/fabricjs/fabric.js/pull/5971)
- Fix for load from datalessJSON for svg groups with sourcePath [#5970](https://github.com/fabricjs/fabric.js/pull/5970)
</pre>
  <h3>Version 3.5.0</h3>
<pre>
- Deprecation: deprecated 3 method of the api that will disappear in fabric 4: setPatternFill, setColor, setShadow.
- Fix: remove line dash modification for strokeUniform [#5953](https://github.com/fabricjs/fabric.js/pull/5953)
- Improvement: ISSUE-5955 parse svg clip-path recursively [#5960](https://github.com/fabricjs/fabric.js/pull/5960)
- Fix: object.toCanvasElement of objects in groups [#5962](https://github.com/fabricjs/fabric.js/pull/5962)
- change pencil brush finalize to be in line with other brushes [#5866](https://github.com/fabricjs/fabric.js/pull/5866)
</pre>
  <h3>Version 3.4.0</h3>
  <p>Huge rewrite of gradient parsing! Now gradients have a property more called `gradientUnits` and allow to specify gradients with percetages.<br />
  A couple of deprecation for <code>Object.setGradient</code>. A new doc page explaining gradients from top to bottom coming soon.</p>
<pre>
- SVG import: Implement fill-opacity in on Path objects with gradients. #5812
- Animation: Trigger onChange and onComplete with the right values. #5813
- SVG import: Fix gradient parsing. #5836
</pre>
  <h3>Version 3.3.0</h3>
  <p>
Rewrite pointer/touch events! It seems now that pointer events and touch events can work correctly with multi fingers.
Attention has been made in freedrawing with accidental multi touch usage and ability to work with pencils.
Also a small fix for the words boundaries in text.
Some deprecation on old event properties required another minor version bump.
  </p>
<pre>
 - Differently support multi mouse events. #5785
 - Word boundary search update. #5788
</pre>
  <h3>Version 3.2.0</h3>
  <p>
    This version is mainly a bug fix release for the new feature. It gets a minor bump because of official deprecation of Object.transformatrix.
  </p>
<pre>
 - Fix Group.toSVG export missing opacity and visibility. #5755
 - Pass raw event information to brushes. #5687
 - Added deprecation warning for Object.transformMatrix. #5747
 - Fix decimante points breaking point drawing in freedrawing. #5771
</pre>
  <h3>Version 3.1.0</h3>
  <p>
    A new property to the pencil brush has been added. The `decimate` will allow you to remove extra points to the brush and simplify the outcoming path.
    also when parsing floats from SVG, now scientific notation with uppercase E is supported.
  </p>
<pre>
 - Fix free draw positioning. #5718
 - Improvement: Support scientific notation with uppercase E. #5731
 - Add: PencilBrush brush now support decimate property to remove dots that are too near to each other. #5718
</pre>
  <h3>Version 3.0.0</h3>
  <p>
Support for Node 4 and 6 is removed, now fabricJS uses JSDOM 15.1 also as SVG parser under node, and uses node-canvas 2.5+.
This brings improved support under node, including better text support.<br />
splitByGrapheme and strokeUniform have been properly fixed.<br />
Some new properties: <code>fabric.Shadow</code> gets nonScaling that makes the shadow fixed during scaling operations, <code>fabric.disableStyleCopyPaste</code>
will control style copy/pasting during copy operations between IText and Textbox objects. Finally <code>Canvas.enablePointerEvents</code> will let you use
pointer events instead of mouse events.
For image filtering <code>fabric.forceGLPutImageData</code> will let you set a slower but more compatible webgl texture copy. This helps on computer running on old intel hardware.
Detecting the presence of the hardware is developer duty.<br />
Finally <code>fabric.Object.objectCaching</code> set to false will disable objectCaching only if current setup does not require it. Is not more a preference than a mandatory setting.
If an object has a clipPath, objectCaching will be automatically activated.
  </p>
  <pre>
- Breaking: removed support for node 4 and 6. #5356
- Breaking: changed objectCaching meaning to disable caching only if possible. #5566
- Breaking: private method _setLineStyle can set only empty object now #5588
- Breaking: private method _getLineStyle can only return boolean now #5588
- Fix: splitByGrapheme can now handle cursor properly #5588
- Add: Added hasStroke and hasFill, helper methods for decisions on caching and for devs, change image shouldCache method #5567
- Fix: Canvas toObject won't throw error now if there is a clipPath #5556
- Add: added nonScaling property to shadow class #5558
- Fix: fixed import of Rect from SVG when has 0 dimensions. #5582
- Fix: Shadow offset in dataurl export with retina #5593
- Fix: Text can be used as clipPath in SVG export (output is not correct yet) #5591
- Add: Fabric.disableStyleCopyPaste to disable style transfers on copy-paste of itext #5590
- Fix: avoid adding quotes to fontFamily containing a coma #5624
- Fix: strokeUniform and cache dimensions #5626
- Fix: Do not call onSelect on objects that won't be part of the selection #5632
- Fix: fixed handling of empty lines in splitByGrapheme #5645
- Fix: Textbox selectable property not restored after exitEditing #5655
- Fix: 'before:selection:cleared' event gets target in the option passed #5658
- Added: enablePointerEvents options to Canvas activates pointer events #5589
- Fix: Polygon/Polyline/Path respect points position when initializing #5668
- Fix: Do not load undefine objects in group/canvas array when restoring from JSON or SVG. #5684
- Improvement: support for canvas background or overlay as gradient #5684
- Fix: properly restore clipPath when restoring from JSON #5641
- Fix: respect chainable attribute in observable mixin #5606
- Added: fabric.forceGLPutImageData #5672</pre>
  <h3>Version 2.7.0</h3>
  <p>Added <code>strokeUniform</code> property, that lets you scale objects without deforming the stroke (only outside groups)</p>
  <pre>
- Add: strokeUniform property, avoid stroke scaling with paths #5473
- Fix: fix bug in image setSrc #5502
- Add: strokeUniform import/export svg #5527
- Fix: GraphemeSplit and toSvg for circle #5544
- Improvement: support running in a XML document #5530</pre>
  <h3>Version 2.6.0</h3>
  <p>Mostly svg fixes for this release, on input and output</p>
  <pre>
- Fix: Shift click and onSelect function #5348
- Fix: Load from Json from images with filters and resize filters #5346</pre>
  <h3>Version 2.5.0</h3>
  <p>Mostly svg fixes for this release, on input and output</p>
  <pre>
- Fix: Shift click and onSelect function #5348
- Fix: Load from Json from images with filters and resize filters #5346</pre>
  <h3>Version 2.4.6</h3>
  <p>Mostly svg fixes for this release, on input and output</p>
  <pre>
- Fix: Shift click and onSelect function #5348
- Fix: Load from Json from images with filters and resize filters #5346</pre>
  <h3>Version 2.4.5</h3>
  <p>Mostly svg fixes for this release, on input and output</p>
  <pre>
- Fix: Shift click and onSelect function #5348
- Fix: Load from Json from images with filters and resize filters #5346</pre>
  <h3>Version 2.4.4</h3>
  <pre>
- Fix: add clipPath to stateful cache check. #5384
- Fix: restore draggability of small objects #5379
- Improvement: Added strokeDashOffset to objects and from SVG import. #5398
- Fix: do not mark objects as invisible if strokeWidth is > 0 #5382
- Improvement: Better gradients parsing with xlink:href #5357</pre>
  <h3>Version 2.4.3</h3>
  <p>An handfull of fixes for group and clipPaths, Image serializations and filters, click interactions</p>
  <pre>
- Fix: Shift click and onSelect function #5348
- Fix: Load from Json from images with filters and resize filters #5346
- Fix: Remove special case of 1x1 rect #5345
- Fix: Group with clipPath restore #5344
- Fix: Fix shift + click interaction with unselectable objects #5324</pre>
  <h3>Version 2.4.2</h3>
  <p>Clippath to SVG fixed, a couple of nice bugfix for targeting in nested groups and svg loading on ie11</p>
  <pre>
- Fix: Better toSVG support to enable clipPath #5284
- Fix: Per pixel target find and groups and sub targets #5287
- Fix: Object clone as Image and shadow clipping #5308
- Fix: IE11 loading SVG #5307</pre>
  <h3>Version 2.4.1</h3>
  <p>First round of feedback for clipPath bugs, plus other bugfixes that piledup while working on clipPaths</p>
  <pre>
- Fix: Avoid enterEditing if another object is the activeObject #5261
- Fix: clipPath enliving for Image fromObject #5279
- Fix: toDataURL and canvas clipPath #5278
- Fix: early return if no xml is available #5263
- Fix: clipPath svg parsing in nodejs #5262
- Fix: Avoid running selection logic on mouse up #5259
- Fix: fix font size parsing on SVG #5258
- Fix: Avoid extra renders on mouseUp/Down #5256</pre>
  <h3>Version 2.4.0</h3>
  <p>Launched clipPath support, check tutorial for more info <a href="/clippath-part1" >ClipPath tutorials</a>
  <h3>Version 2.3.6</h3>
  <p>
    Fixed a regression in spray brush created by the 2.3.5 group fix.
    Make the image class aware of natural dimensions of the image element if available and restored two fingers events that were broken since we improved the normal events.<br />
    The issue of iText interaction fixed in 2.3.5 has been reopened with a less common interaction problem. We are working on automated interaction tests before fixing it.
  </p>
  <pre>
- Fix: Make image.class aware of naturalWidth and naturalHeight. #5178
- Fix: Make 2 finger events works again #5177
- Fix: Make Groups respect origin and correct position ( fix spray/circle brushes ) #5176
  </pre>
  <h3>Version 2.3.5</h3>
  <p>
    2 notable changes! from now canvas.getObjects() will return a copy of the array of objects. The documentation was never clear about what was given back.
    Not returning a copy was creating subtle strange bugs that often took hours to debug. Also resize filters and color filters should interact properly with
    each other now. On top of this minor improvements in svg import export.
  </p>
  <pre>
- Change: make canvas.getObjects() always return a shallow copy of the array #5162
- Fix: Improve fabric.Pattern.toSVG to look correct on offsets and no-repeat #5164
- Fix: Do not enter edit in Itext if the mouseUp is relative to a group selector #5153
- Improvement: Do not require xlink namespace in front of href attribut for svgs ( is a SVG2 new spec, unsupported ) #5156
- Fix: fix resizeFilter having the wrong cached texture, also improved interaction between filters #5165
  </pre>
  <h3>Version 2.3.4</h3>
  <p>
    Lot of bug fixes and improvement by contributors. A big news: we have an automated visual tests suite that works across browser, node and travis.<br />Notable changes:
  </p>
  <pre>
- Fix: ToSVG was ignoring excludeFromExport for backgroundImage and OverlayImage. #5075
- Fix: ToSVG for circle with start and end angles. #5085
- Fix: Added callback for setPatternFill. #5101
- Fix: Resize filter taking in account multiple scale sources. #5117
- Fix: Blend image filter clean after refilter. #5121
- Fix: Object.toDataURL should not be influenced by zoom. #5139
- Improvement: requestRenderAllBound add to Canvas instance. #5138
- Improvement: Make path bounding cache optional and also reacheable/cleanable #5140
- Improvement: Make the logic of isNeutralState filters work before filtering start. #5129
- Improvement: Added some code to clean up some memory when canvas is disposed in nodejs. #5142
- Fix: Make numeric origins work with group creation. #5143
  </pre>
  <h3>Version 2.3.3</h3>
  <p>
    Some well reported bug got easily fixed. Generic fonts like serif, sans-serif, monospace works again.<br />
    We were quoting the font name for all fonts in order to avoid problem with fonts starting with numbers or with spaces in the family name, but it looks like
    that you cannot do that for serif, sans-serif, fantasy, monospace and cursive. Those are sort of reserved name and must be used without quotes.<br />
    Fabric was leaving trails of text selection if a fast zoom would happen when an itext had selected text or blinking cursor. While this is an edge case created
    by developers, the fix was fairly easy and so we fixed it.<br />
    Also zero width characters were correctly measured but then wrongly retrieved from measuring cache. That whould mean that text would break and also that there was
    a performance hit ( very small ) since a 0 width joiner, spacer, non joiner was always measured and never returned from cache.
    All the fix have been handled in a single PR that you can check here: <br /> <a href="https://github.com/fabricjs/fabric.js/pull/5048" >#5048</a>
  </p>
  <h3>Version 2.3.2</h3>
  <p>Lot of small IText fixes and a group caching bug removed.</p>
  <pre>
 - Fix: justify + charspacing + textDecoration Add and improve more events for transformations and mouse interaction. #5007 #5009
 - Fix: Enter edit on object selected programmatically. #5010
 - Fix: Canvas.dispose was not removing all events properly. #5020
 - Fix: Make rgba and hsla regex work case insensitive. #5017
 - Fix: Make group transitioning from not cached to cached work. #5021</pre>
  <h3>Version 2.3.0</h3>
  <p>Added new events and a performance improvement for pixel transparency on cached object.<br />
    Cached objects gets now sampled directly on their cached to check for transparency without a repaint.
    <br />Check the new events <a href="/new-events">here</a></p>
  <pre>
- Add and improve more events for transformations and mouse interaction #4979
- Improvement: whenever possible use cache for target transparency sampling #4955</pre>
  <h3>Version 2.2.4</h3>
  <p>Just fixes to brushes, filters and events mostly coming from contributors.<br />
    A new method is added isPartiallyOnscreen for objects, helps you identify when the object is crossing your viewport boundaries and an important bug in statefull processing is fixed that was causing type errors when comparing an array with null or an object with null or a string</p>
  <pre>
- Fix getPointer on touch devices #4866
- Fix issues with selectionDashArray bleeding into free drawing #4894
- Fix blur filter for nodejs #4905
- Fix Register mousemove as non passive to help touch devices #4933
- Fix modified shadow tosvg for safari compatibility #4934
- Fix shader to avoid premultiplied alpha pixel getting dirty in blend filter #4936
- Add isPartiallyOnScreen method #4856
- Fix isEqual failing on array/null or objects/null/string compare #4949
- Fix pencilBrush with alpha and with rerendering canvas #4938
  </pre>
  <h3>Version 2.2.3</h3>
  <p>There are mixed changes. Most of them are about toSVG and fromSVG without new big features.<br />
  There 2 changes that may interests you and change how your code behaves:<br />
  When rotating an object by mouse, the origins are no more forced to be centered, that means that top and left of the rotating object
  will not change to centerPoint without you asking for that. Top and Left will change accordingly to what you see on screen, like it happens
  for scale, skew and translate. Is a good change, but it may be considered a behaviour change. I did not feel like leave it like this nor to issue
  a major version for it. <br />
  Another change is that setSrc on image is also going to reset width and heigth to the one of the element. Since width and height now crop an image
  or just render it with white space around if dimensions do not match, changing width and heigth back to default is something that i consider a bugfix.
  If you built a feature between 2.0 and 2.2.2 that rely on swapping image sources and not changing widht and height, this may gonna break.
</p>
<pre>
-  improvement: Allow to parse quoted url string. url('#myid') #4881
-  improvement: text fromSVG import char-spacing attribute #3718
-  fix: text toSVG export with multiple spaces in safari #4880
-  fix: setSrc reset width and height on images #4877
-  improvements: Removed forced origin swap when rotating #4878
-  fix: Make the background of canvas cover all SVG in toSVG export #4852
-  fix: Added startAngle to cacheProperties for fabric.Circle #4875
-  fix: Rerender all the content of upperCanvas if canvas gets resized #4850
-  fix: Remove references to context when disposing #4846
-  improvements: Added single quoting to font names in toSVG #4840
-  improvements: Added reserved space to wrapLine functionality #4841
</pre>
<h3>Version 2.2.2</h3>
<pre>
-  Fixed: Applying filters to an image will invalidate its cache #4828
-  Fixed: Attempt at fix font families that requires quoting #4831
-  Improvement: check upperCanvas client size for textarea position #4827
-  Fixed: Attempt to fix multiple touchends #4804
-  Fixed: Wrapping of textbox with charspacing #4803
-  Fixed: bad calculation of empty line in text (regression from 2.2.0) #4802
</pre>
  <h3>Version 2.2.0</h3>
  <p>New feature: superscript and subscript! check the demo to see how to activate it, along with the docs.<br />
  Fixes to text kerning with fonts that have a positive kerning on couples</p>
  <pre>
-  Fixed: super/sub script svg export #4780
-  Added: Text superScript and subScript support #4765
-  Fixed: negative kerning support (Pacifico font) #4772
-  Fixed: removing text on mousedown should be safe now #4774
-  Improved: pass to inner functions the parameter calculate coords in isOnscreen #4763
  </pre>
  <h3>Version 2.1.0</h3>
  <p>
    New events! now objects and canvas can fire <code>drop</code>, <code>dragover</code>, <code>dragleave</code> and <code>dragenter</code><br />
    Refer to our events demo for an introduction, specific demo coming soon: <a href="/events" >Events demo</a>.<br />
    Also an important fix for styled textboxes, and more to come, since some methods are marked as broken in the current JSDOC sources.<br />
    Since it has been requested, the amd footer has been inserted in the standard fabricjs build, removing the need to have 2 files built every time.
  </p>
  <pre>
-  Added: Drag and drop event binding #4421
-  Fixed: isEmptyStyle implementation for TextBox #4762
  </pre>
  <h3>Version 2.0.3</h3>
  <p>
    This time is contributors time!
    <a href="https://github.com/boomyao">@boomayao</a> noticed that the pencilBrush was doing too much work and wrote a function to draw just the new segment, <a href="https://github.com/stefanhayden">@stefanhayden</a> fixed
    the clanStyle function for text styles, <a href="https://github.com/scriptspry">@scriptspry</a> fixed a weird interaction between onBeforeScaleRotate and canvasZoom, <a href="https://github.com/blucobalto">@blucobalto</a>
    repoted the exact line and problem of a group subclass problem.
  </p>
  <pre>
-  Fix: now sub target check can work with subclasses of fabric.Group #4753
-  Improvement: PencilBrush is now compexity 1 instead of complexity N during draw #4743
-  Fix the cleanStyle was not checking for the right property to exist #4751
-  Fix onBeforeScaleRotate with canvas zoom #4734
  </pre>
  <h3>Version 2.0.2</h3>
  <p>
    Fix image toSVG export for images with cropping. Improved math around coordinates to avoid long decimals
  </p>
  <h3>Version 2.0.1</h3>
  <p>
    Fix a bad mutation problem for filters in Image restore from JSON, also the interaction between retina and dataURL. Both bugfixes coming from contributors.
  </p>
  <pre>
- fixed filter for blend image in WEBGL
- fixed interactions between canvas toDataURL and multiplier + retina
- fixed bug with originX and originY not invalidating the transform
- fixed unwanted mutation on object enliving in fabric.Image</pre>

<div id="changelog">
  <a href="/fabric-changelog-old"><b>Changelog on 1.X branch</b></a>
</div>
