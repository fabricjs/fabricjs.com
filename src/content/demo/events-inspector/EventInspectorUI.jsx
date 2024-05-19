import React, { useEffect } from 'react';
import * as fabric from 'fabric';
import './index.css';

// old html demo converted to a component without adapting the code to react.

export const EventInspectorUI = () => {
  useEffect(() => {
    [
      'toggle',
      'move',
      'dragover',
      'canvas_events',
      'green',
      'red',
      'blue',
      'black',
    ].forEach((id) => {
      document.getElementById(id).checked = true;
    });
  });

  useEffect(() => {
    fabric.FabricObject.ownDefaults.transparentCorners = false;
    var canvas2 = new fabric.Canvas('c1');
    canvas2.add(
      new fabric.Rect({
        width: 50,
        height: 50,
        fill: 'red',
        top: 100,
        left: 100,
      })
    );
    canvas2.add(
      new fabric.Rect({
        width: 30,
        height: 30,
        fill: 'green',
        top: 50,
        left: 50,
      })
    );
    canvas2.add(
      new fabric.Circle({ radius: 20, fill: 'blue', top: 160, left: 140 })
    );
    canvas2.add(
      new fabric.Textbox('Textbox', { fill: 'black', top: 70, left: 200 })
    );

    var log2 = document.getElementById('log1');
    var clearButton = document.getElementById('clear_log');
    clearButton.onclick = function () {
      log2.innerHTML = '&nbsp;';
    };

    function log(message, opt, color) {
      if (!getCheckbox(message, !!color)?.checked) {
        return;
      }
      if (color && !document.getElementById(color).checked) {
        return;
      }
      getCheckboxLabel(message, !!color)?.classList.add('bold');
      var el = document.createElement('div');
      el.classList.add('log-entry');
      el.setAttribute('event', message);
      el.setAttribute('object', !!color);
      if (color) {
        el.style.color = color;
      }
      var code = document.createElement('code');
      code.innerText = JSON.stringify(opt, null, '\t');
      code.setAttribute('hidden', true);
      var button = document.createElement('button');
      button.innerHTML = '+';
      button.onclick = function (ev) {
        if (code.hasAttribute('hidden')) {
          code.removeAttribute('hidden');
          button.innerHTML = '-';
        } else {
          code.setAttribute('hidden', '');
          button.innerHTML = '+';
        }
      };
      var m = document.createElement('strong');
      m.innerHTML = message;
      var t = document.createElement('small');
      t.innerHTML = '\n' + new Date().toISOString();
      el.append(button, m, document.createElement('br'), code, t);
      log2.insertBefore(el, log2.firstChild);
      var children = log2.children;
      while (children[100]) {
        var child = children[100];
        log2.removeChild(child);
      }
    }

    function toggleLogs(eventName, obj, value) {
      log2
        .querySelectorAll(
          'div[event = "' + eventName + '"][object = "' + !!obj + '"]'
        )
        .forEach((el) => el.classList.toggle('hidden', !value));
    }
    function getEventdescriptor(eventName, obj) {
      return document.querySelector(
        'div[event = "' + eventName + '"][object = "' + !!obj + '"]'
      );
    }
    function getCheckbox(eventName, obj) {
      return getEventdescriptor(eventName, obj)?.querySelector(
        'input[type = checkbox]'
      );
    }
    function getCheckboxLabel(eventName, obj) {
      return getEventdescriptor(eventName, obj)?.querySelector('label');
    }

    function toggleCheckbox(eventName, obj, value) {
      var checkbox = getCheckbox(eventName, obj);
      if (checkbox) {
        checkbox.checked = value;
        checkbox.classList.remove('bold');
      }
      toggleLogs(eventName, obj, value);
      return checkbox;
    }

    function toggleMovementEvents() {
      var events = [
        'mouse:move',
        'mousemove',
        'mouse:move:before',
        'mousemove:before',
        'moving',
        'object:moving',
      ];
      events.forEach((ev) => {
        toggleCheckbox(ev, true, this.checked);
        toggleCheckbox(ev, false, this.checked);
      });
    }
    function toggleDragOverEvents() {
      toggleCheckbox('dragover', true, this.checked);
      toggleCheckbox('dragover', false, this.checked);
    }
    function toggleCanvasEvents() {
      Object.keys(canvas2.__eventListeners).forEach((ev) => {
        toggleCheckbox(ev, false, this.checked);
      });
    }
    function toggleAll() {
      document
        .querySelectorAll('div[event] > input[type = checkbox]')
        .forEach((checkbox) => (checkbox.checked = this.checked));
    }
    document
      .getElementById('move')
      .addEventListener('change', toggleMovementEvents);
    document
      .getElementById('dragover')
      .addEventListener('change', toggleDragOverEvents);
    document
      .getElementById('canvas_events')
      .addEventListener('change', toggleCanvasEvents);
    document.getElementById('toggle').addEventListener('change', toggleAll);

    let id = 0;
    function createEventDescriptor(eventName, obj) {
      var para = document.createElement('div');
      var checkbox = document.createElement('input');
      checkbox.id = 'checkbox_' + ++id;
      checkbox.type = 'checkbox';
      checkbox.checked = true;
      checkbox.onchange = () => {
        checkbox.classList.remove('bold');
        toggleLogs(eventName, obj, checkbox.checked);
      };
      para.setAttribute('event', eventName);
      para.setAttribute('object', !!obj);
      var label = document.createElement('label');
      label.appendChild(document.createTextNode(eventName));
      label.htmlFor = checkbox.id;
      para.append(checkbox, label);
      return para;
    }

    function logObservingEvent(eventName) {
      var el = document.getElementById('observing-events-log');
      el.appendChild(createEventDescriptor(eventName));
    }

    function logNonObservingEvent(eventName) {
      var el = document.getElementById('non-observing-events-log');
      el.appendChild(createEventDescriptor(eventName));
    }

    function logObservingEventObj(eventName) {
      var el = document.getElementById('observing-events-log-obj');
      el.appendChild(createEventDescriptor(eventName, true));
    }

    function addSeparator(id) {
      document.getElementById(id).appendChild(document.createElement('br'));
    }

    function observe(eventName, nonobserving) {
      nonobserving
        ? logNonObservingEvent(eventName)
        : logObservingEvent(eventName);
      canvas2.on(eventName, function (opt) {
        log(eventName, opt);
      });
    }

    function observeObj(eventName) {
      logObservingEventObj(eventName);
      canvas2.getObjects().forEach(function (o) {
        o.on(eventName, function (opt) {
          log(eventName, opt, o.fill);
        });
      });
    }

    observe('object:modified');
    addSeparator('observing-events-log');

    observe('object:moving');
    observe('object:scaling');
    observe('object:rotating');
    observe('object:skewing');
    observe('object:resizing');
    addSeparator('observing-events-log');

    observe('before:transform');
    observe('before:selection:cleared');
    observe('selection:cleared');
    observe('selection:created');
    observe('selection:updated');
    addSeparator('observing-events-log');

    observe('mouse:up');
    observe('mouse:down');
    observe('mouse:move');
    observe('mouse:up:before');
    observe('mouse:down:before');
    observe('mouse:move:before');
    observe('mouse:dblclick');
    observe('mouse:wheel');
    observe('mouse:over');
    observe('mouse:out');
    addSeparator('observing-events-log');

    observe('drop:before');
    observe('drop');
    observe('dragover');
    observe('dragenter');
    observe('dragleave');
    addSeparator('observing-events-log');

    observe('after:render');
    addSeparator('observing-events-log');

    observe('path:created', true);
    observe('object:added', true);
    observe('object:removed', true);
    addSeparator('observing-events-log');

    observeObj('moving');
    observeObj('scaling');
    observeObj('rotating');
    observeObj('skewing');
    observeObj('resizing');
    addSeparator('observing-events-log-obj');

    observeObj('mouseup');
    observeObj('mousedown');
    observeObj('mousemove');
    observeObj('mouseup:before');
    observeObj('mousedown:before');
    observeObj('mousemove:before');
    observeObj('mousedblclick');
    observeObj('mousewheel');
    observeObj('mouseover');
    observeObj('mouseout');
    addSeparator('observing-events-log-obj');

    observeObj('drop:before');
    observeObj('drop');
    observeObj('dragover');
    observeObj('dragenter');
    observeObj('dragleave');
  }, []);

  return (
    <>
      <div className="demo-main">
        <div className="column-main">
          <p>To avoid event spamming, you can disable the checkboxs below.</p>
          <div>
            <label htmlFor="toggle">
              <input type="checkbox" id="toggle" />
              All events
            </label>

            <label htmlFor="move">
              <input type="checkbox" id="move" />
              Movement events
            </label>
            <label htmlFor="dragover">
              <input type="checkbox" id="dragover" />
              DragOver
            </label>

            <label htmlFor="canvas_events">
              <input type="checkbox" id="canvas_events" />
              Canvas
            </label>

            <label htmlFor="green">
              <input type="checkbox" id="green" />
              Green
            </label>

            <label htmlFor="red">
              <input type="checkbox" id="red" />
              Red
            </label>

            <label htmlFor="blue">
              <input type="checkbox" id="blue" />
              Blue
            </label>

            <label htmlFor="black">
              <input type="checkbox" id="black" />
              Black
            </label>
          </div>

          <div className="demo-body">
            <canvas id="c1" width="400" height="400"></canvas>
            <div>
              Drag me on the canvas
              <br />
              <br />
              <div
                id="drag-me"
                draggable="true"
                onDragStart={(event) =>
                  event.dataTransfer.setData('text/plain', '')
                }
              ></div>
            </div>
          </div>
          <div id="log1">&nbsp;</div>
          <button id="clear_log">clear log</button>
        </div>
        <div className="column-events">
          <div id="observing-events-log">
            <strong>Observing these events</strong>
          </div>
        </div>
        <div className="column-events">
          <div id="observing-events-log-obj">
            <strong>Objects events</strong>
          </div>
          <div id="non-observing-events-log">
            <strong>Other available events</strong>
          </div>
        </div>
      </div>
    </>
  );
};
