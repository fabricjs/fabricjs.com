import * as fabric from 'fabric';
import { generateExample } from '../../../../utils/generateExample';

const Example1Code = function (id) {
    var canvas1 = new fabric.Canvas(id, { width: 300, height: 300 });

    fabric.loadSVGFromURL('/assets/176.svg').then(({objects, options}) => {
        const svg1 = fabric.util.groupSVGElements(objects, options);
        canvas1.add(svg1);
    });
    fabric.loadSVGFromURL('/assets/48.svg').then(({ objects, options }) => {
        const svg1 = fabric.util.groupSVGElements(objects, options);
        canvas1.add(svg1);
    });
    fabric.loadSVGFromURL('/assets/48.svg').then(({ objects, options }) => {
        const svg1 = fabric.util.groupSVGElements(objects, options);
        canvas1.add(svg1);
    });   
    fabric.loadSVGFromURL('/assets/48.svg').then(({ objects, options }) => {
        const svg1 = fabric.util.groupSVGElements(objects, options);
        canvas1.add(svg1);
    });
    fabric.loadSVGFromURL('/assets/171.svg').then(({ objects, options }) => {
        const svg1 = fabric.util.groupSVGElements(objects, options);
        svg1.scale(0.4);
        canvas1.add(svg1);
    });
}

const Example2Code = function (id) {
    var canvas2 = new fabric.Canvas(id, { width: 300, height: 300 });
    fabric.loadSVGFromURL('/assets/176.svg').then(({objects, options}) => {
        const svg1 = fabric.util.groupSVGElements(objects, options);
        svg1.objectCaching = false;
        canvas2.add(svg1);
    });
    fabric.loadSVGFromURL('/assets/48.svg').then(({ objects, options }) => {
        const svg1 = fabric.util.groupSVGElements(objects, options);
        svg1.objectCaching = false;
        canvas2.add(svg1);
    });
    fabric.loadSVGFromURL('/assets/48.svg').then(({ objects, options }) => {
        const svg1 = fabric.util.groupSVGElements(objects, options);
        svg1.objectCaching = false;
        canvas2.add(svg1);
    });   
    fabric.loadSVGFromURL('/assets/48.svg').then(({ objects, options }) => {
        const svg1 = fabric.util.groupSVGElements(objects, options);
        svg1.objectCaching = false;
        canvas2.add(svg1);
    });
    fabric.loadSVGFromURL('/assets/171.svg').then(({ objects, options }) => {
        const svg1 = fabric.util.groupSVGElements(objects, options);
        svg1.objectCaching = false;
        svg1.scale(0.4);
        canvas2.add(svg1);
    });
}

const Example3Code = function (id) {
    var canvas3 = new fabric.Canvas(id, { width: 300, height: 300 });
    fabric.loadSVGFromURL('/assets/171.svg').then(({ objects, options }) => {
        var svg1 = fabric.util.groupSVGElements(objects, options);
        svg1.scale(0.05);
        canvas3.add(svg1);
    });
}

export const Example1 = generateExample(Example1Code, 'normal1');
export const Example2 = generateExample(Example2Code, 'nocache1');
export const Example3 = generateExample(Example3Code, 'noscale');
