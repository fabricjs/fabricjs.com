import * as fabric from 'fabric';
import { generateExample } from '../../../../utils/generateExample';

const Example1Code = function (id) {
    var canvas = new fabric.Canvas(id);
    var clipPath = new fabric.Circle({ radius: 40, top: -40, left: -40 });
    var rect = new fabric.Rect({ width: 200, height: 100, fill: 'red' });
    rect.clipPath = clipPath;
    canvas.add(rect);
}

const Example2Code = function (id) {
    var canvas = new fabric.Canvas(id);
    var clipPath = new fabric.Circle({ radius: 100, top: -100, left: -100 });
    var group = new fabric.Group([
        new fabric.Rect({ width: 100, height: 100, fill: 'red' }),
        new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
        new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }),
        new fabric.Rect({ width: 100, height: 100, fill: 'green', left: 100, top: 100 })
    ]); 
    group.clipPath = clipPath;
    canvas.add(group);
}

const Example3Code = function (id) {
    var canvas = new fabric.Canvas(id);
    var clipPath = new fabric.Group([
        new fabric.Circle({ radius: 70, top: -70, left: -70 }),
        new fabric.Circle({ radius: 40, left: -95, top: -95 }),
        new fabric.Circle({ radius: 40, left: 15, top: 15 }),
    ], { left: -95, top: -95 }); 
    var group = new fabric.Group([ 
        new fabric.Rect({ width: 100, height: 100, fill: 'red' }),
        new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
        new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }), 
        new fabric.Rect({ width: 100, height: 100, fill: 'green', left: 100, top: 100 })
    ]); 
    group.clipPath = clipPath;
    canvas.add(group);
}

export const Example1 = generateExample(Example1Code, 'example1');
export const Example2 = generateExample(Example2Code, 'example2');
export const Example3 = generateExample(Example3Code, 'example3');
