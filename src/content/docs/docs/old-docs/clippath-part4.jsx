import * as fabric from 'fabric';
import { generateExample } from '../../../../utils/generateExample';

const Example1Code = function (id) {
    var canvas = new fabric.Canvas(id, {
        width: 500,
        height: 500,
    });
    var clipPath = new fabric.Rect({ width: 500, height:250, top: 0, left: 0, absolutePositioned: true });
    var clipPath2 = new fabric.Rect({ width: 500, height:250, top: 250, left: 0, absolutePositioned: true });
    fabric.FabricImage.fromURL('/assets/dragon.jpg').then((img) => {
        img.clipPath = clipPath;
        img.scaleToWidth(500);
        canvas.add(img);
    });
    fabric.FabricImage.fromURL('/assets/dragon2.jpg').then((img) => {
        img.clipPath = clipPath2;
        img.scaleToWidth(500);
        img.top = 250;
        canvas.add(img);
    });
}

const Example2Code = function (id) {
    var canvas = new fabric.Canvas(id, { width: 500, height: 300 });
    var clipPath = new fabric.Circle({ radius: 100, top: -200, left: -200 });
    var clipPath2 = new fabric.Circle({ radius: 100, top: 0, left: 0 });
    var clipPath3 = new fabric.Circle({ radius: 100, top: 0, left: -200 });
    var clipPath4 = new fabric.Circle({ radius: 100, top: -200, left: 0 });
    var g = new fabric.Group([clipPath, clipPath2, clipPath3, clipPath4]);
    g.inverted = true;
    fabric.FabricImage.fromURL('/assets/dragon.jpg').then((img) => {
      img.clipPath = g;
      img.scaleToWidth(500);
      canvas.add(img);
    });
}

export const Example1 = generateExample(Example1Code, 'example1');
export const Example2 = generateExample(Example2Code, 'example2');
