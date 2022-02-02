---
layout: demoV4
title: Importing PDF files
codepen: true
---
This demo shows how to use import pdf files as `fabric.Image`, it uses [`pdf.js`](https://github.com/mozilla/pdf.js/).

### Example

<div
  class="codepen-later"
  data-editable="true"
  data-height="500"
  data-default-tab="result"
  data-prefill='{
    "scripts": ["https://unpkg.com/browse/pdfjs-dist@latest/build/pdf.min.js"]
  }'
>
<pre data-lang="html">
  <div>
    <input
      type="file"
      accept="application/pdf"
    />
  </div>
  <canvas id="c" width="500" height="620" />
</pre>
<pre data-lang="css">
  button.active {
    background: limegreen;
    font-weight: bold
  }
</pre>
<pre data-lang="css">
  button.active {
    background: limegreen;
    font-weight: bold
  }
</pre>
<pre data-lang="js">
  function getPdfHandler() {
    return window['pdfjs-dist/build/pdf'];
  }
  /**
  * 
  * @param {Blob} blob 
  * @returns {Promise<string>} data url
  */
  function readBlob(blob) {
      return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener('load', () => resolve(reader.result));
          reader.addEventListener('error', reject)
          reader.readAsDataURL(blob);
      })
  }

  /**
  * see https://github.com/mozilla/pdf.js
  * @param {string | File} pdfData base64 raw data of file/blob
  * @param {number[]} [pages] specify which pages to load for performance
  * @returns {Promise<Promise<HTMLCanvasElement>[]>} array of base64 data urls of the pdf's pages
  */
  async function printPDF(pdfData, pages) {
      const pdfjsLib = await getPdfHandler();
      pdfData = pdfData instanceof Blob ? await readBlob(pdfData) : pdfData;
      const data = atob(pdfData.startsWith(Base64Prefix) ? pdfData.substring(Base64Prefix.length) : pdfData);
      // Using DocumentInitParameters object to load binary data.
      const loadingTask = pdfjsLib.getDocument({ data });
      return loadingTask.promise
          .then((pdf) => {
              const numPages = pdf.numPages;
              return new Array(numPages).fill(0)
                  .map((__, i) => {
                      const pageNumber = i + 1;
                      if (pages && pages.indexOf(pageNumber) == -1) {
                          return;
                      }
                      return pdf.getPage(pageNumber)
                          .then((page) => {
                              //  retina scaling
                              const viewport = page.getViewport({ scale: window.devicePixelRatio });
                              // Prepare canvas using PDF page dimensions
                              const canvas = document.createElement('canvas');
                              const context = canvas.getContext('2d');
                              canvas.height = viewport.height
                              canvas.width = viewport.width;
                              // Render PDF page into canvas context
                              const renderContext = {
                                  canvasContext: context,
                                  viewport: viewport
                              };
                              const renderTask = page.render(renderContext);
                              return renderTask.promise.then(() => canvas);
                          });
                  });
          });
  }
  /**
  * see https://github.com/mozilla/pdf.js
  * @param {string | File} pdfData base64/blob
  * @param {fabric.Canvas} canvas 
  */
  async function pdfToImage(pdfData, canvas) {
    const scale = 1 / window.devicePixelRatio;
    (await printPDF(pdfData))
      .map(async c => {
        canvas.add(new fabric.Image(await c, {
          scaleX: scale,
          scaleY: scale,
        }));
      });
  }
  const canvas = this.__canvas = new fabric.Canvas('c');
  function handleFiles(e) {
    e.target.files.forEach(file => pdfToImage(file, canvas));
  }
</pre>
</div>
