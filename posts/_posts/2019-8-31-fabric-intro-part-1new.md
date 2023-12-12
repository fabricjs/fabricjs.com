---
layout: articleadmd
title: Introduction to Fabric.js. Part 1.
---


## Introduction to Fabric.js. {#introduction_to_fabricjs}

<img src="https://github.com/kangax/fabric.js/raw/master/lib/screenshot.png" style="width:300px;border:1px solid #ccc;margin-bottom:20px">

Today I'd like to introduce you to [Fabric.js](http://fabricjs.com) - a powerful Javascript library that makes working with HTML5 canvas a breeze. Fabric provides a missing object model for canvas, as well as an SVG parser, layer of interactivity, and a whole suite of other indispensable tools. It is a fully open-source project, licensed under MIT, with many contributions over the years.

Fabric started around 2010, after discovering the pains of working with native canvas API. The original author was creating an interactive design editor for [printio.ru](http://printio.ru) - his startup that allows users to design their own apparel. The kind of interactivity they wanted only existed in Flash apps in those days. Even right now, very few come close to what became possible with Fabric.

Let's take a closer look!

### Why fabric? {#why_fabric}

[Canvas](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html) allows us to create some [absolutely](http://net.tutsplus.com/articles/web-roundups/21-ridiculously-impressive-html5-canvas-experiments/) <a href="http://speckyboy.com/2011/12/07/20-amazing-implementations-of-html5-canvas/">amazing graphics</a> on the web these days. But the API it provides is <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#2dcontext">disappointingly low-level</a>. It's one thing if we simply want to draw few basic shapes on canvas and forget about them. But as soon as there's need for any kind of interaction, change of picture at any point, or drawing of more complex shapes, situtation changes dramatically.

Fabric aims to solve this problem.

Native canvas methods only allow us to fire off simple graphic commands, blindly modifying entire canvas bitmap. Want to draw a rectangle? Use <code>fillRect(left, top, width, height)</code>. Want to draw a line? Use a combination of <code>moveTo(left, top)</code> and <code>lineTo(x, y)</code>. It's as if we're <strong>painting canvas with a brush</strong>, layering more and more oil on top, with very little control.

Instead of operating on such low level, Fabric provides simple but powerful object model on top of native methods. It takes care of canvas state and rendering, and lets us work with &#8220;objects&#8221; directly.

Let's take a look at a simple example demonstrating this difference. Let's say we want to draw a red rectangle somewhere on canvas. Here's how we would do this with native <canvas> API.

```javascript
// reference canvas element (with id="c")
var canvasEl = document.getElementById('c');

// get 2d context to draw on (the "bitmap" mentioned earlier)
var ctx = canvasEl.getContext('2d');

// set fill color of context
ctx.fillStyle = 'red';

// create rectangle at a 100,100 point, with 20x20 dimensions
ctx.fillRect(100, 100, 20, 20);
```

Now, let's take a look at doing the same with Fabric:

```
// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');

// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20
});

// "add" rectangle onto canvas
canvas.add(rect);
```

<img src="/article_assets/1.png">

At this point, there's almost no difference in size, the two examples are pretty similar. However, you can already see how different the approach to working with canvas is. With native methods, we <strong>operate on context</strong>, an object representing entire canvas bitmap. In Fabric, we <strong>operate on objects</strong>, instantiate them, change their properties, and add them to canvas. You can see that these objects are first-class citizens in Fabric land.

But rendering plain red rectangle is just so boring. We could have at least made something fun with it! Perhaps, rotate slightly?

Let's try 45 degrees. First, using native <canvas> methods:

```
var canvasEl = document.getElementById('c');
var ctx = canvasEl.getContext('2d');
ctx.fillStyle = 'red';

ctx.translate(100, 100);
ctx.rotate(Math.PI / 180 * 45);
ctx.fillRect(-10, -10, 20, 20);
```

and now using Fabric:

```
var canvas = new fabric.Canvas('c');

// create a rectangle with angle=45
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20,
  <b>angle: 45</b>
});

canvas.add(rect);
```

<img src="/article_assets/2.png">

What happened here?

All we had to do in Fabric is change object's &#8220;angle&#8221; value to <code>45</code>. With native methods however, things become much more &#8220;fun&#8221;. Remember that we can't operate on objects. Instead, we tweak positioning and angle of entire canvas bitmap (<code>ctx.translate</code>, <code>ctx.rotate</code>) to suit our needs. We then draw rectangle again, but remembering to offset bitmap properly (-10, -10), so that it's still rendered at the point of 100,100. As a bonus exercise, we had to translate degrees to radians when rotating canvas bitmap.

  <p>I'm sure you're starting to see exactly why Fabric exists and how much low-level boilerplate it hides.</p>

  <p>But let's take a look at yet another example &mdash; keeping track of canvas state.</p>

  <p>What if at some point, we wanted to move that now-familiar red rectangle to a slightly different location on canvas? How would we do this without being able to operate on objects? Would we just call another <code>fillRect</code> on a canvas bitmap?</p>

  <p>Not quite. Calling another <code>fillRect</code> command actually draws rectangle on top of whatever is already drawn on canvas. Remember I mentioned painting with a brush earlier? In order to &#8220;move&#8221; it, we'd need to first <strong>erase previously drawn content</strong>, and then draw rectangle at a new location.</p>

<pre>
var canvasEl = document.getElementById('c');

...
ctx.strokRect(100, 100, 20, 20);
...

// erase entire canvas area
<b>ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
ctx.fillRect(20, 50, 20, 20);</b>
</pre>

  <p>And how would we accomplish this with Fabric?</p>

<pre>
var canvas = new fabric.Canvas('c');
...
canvas.add(rect);
...

<b>rect.set({ left: 20, top: 50 });
canvas.renderAll();</b>
</pre>

  <p><img src="/article_assets/3.png"></p>

  <p>Notice a very important difference. With Fabric, we no longer need to erase the content before attempting to &#8220;modify&#8221; any content. We still work with objects, simply changing their properties, and then re-render canvas to get a &#8220;fresh picture&#8221;.</p>

  Let's see which are the objects and tools that fabric.js offers <a href="/objects-and-classes">Objects and classes</a>.

</div>
