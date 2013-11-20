fabric.Object.prototype.padding = 5;
fabric.Object.prototype.transparentCorners = false;

var canvases = this.__canvases = [
  new fabric.Canvas('c1'),
  new fabric.Canvas('c2'),
  new fabric.Canvas('c3'),
  new fabric.Canvas('c4'),
  new fabric.Canvas('c5'),
  new fabric.Canvas('c6'),
  new fabric.Canvas('c7'),
  new fabric.Canvas('c8'),
  new fabric.Canvas('c9'),
  new fabric.Canvas('c10'),
  new fabric.Canvas('c11'),
  new fabric.Canvas('c12'),
  new fabric.Canvas('c13'),
  new fabric.Canvas('c14'),
  new fabric.Canvas('c15'),
  new fabric.Canvas('c16'),
  new fabric.Canvas('c17'),
  new fabric.Canvas('c18'),
  new fabric.Canvas('c19'),
];


var iText1 = new fabric.IText('zomg123\nbar\n0bAz\nand something else', {
  left: 10,
  top: 20,
  fontFamily: 'Courier',
  fill: '#333',
  styles: {
    0: {
      0: { textBackgroundColor: 'green', fill: 'yellow', textDecoration: 'line-through' },
      1: { textBackgroundColor: '#faa', fontSize: 80, textDecoration: 'line-through'},
      2: { textBackgroundColor: '#55f', fill: '#fff', textDecoration: 'line-through' },
      5: { fontWeight: 'bold', fontFamily: 'Arial', fontSize: 120, fill: '#ccf'  }
    },
    1: {
      0: { fontFamily: 'Impact', fill: 'green', stroke: 'red' },
      1: { fontFamily: 'Impact' },
      2: { fontFamily: 'Impact' }
    },
    2: {
      0: { stroke: 'lightblue', strokeWidth: 3, fontSize: 60 },
      1: { textBackgroundColor: '#aff', fontSize: 30, fontStyle: 'italic' },
      2: { textBackgroundColor: '#aff', textDecoration: 'overline' },
      3: { fontWeight: 'bold', textDecoration: 'overline' }
    },
    3: {
      0: { textDecoration: 'underline', fontFamily: 'Helvetica', fill: '#888' },
      1: { textDecoration: 'underline', fontFamily: 'Helvetica', fill: '#888' },
      2: { textDecoration: 'underline', fontFamily: 'Helvetica', fill: '#888' },

      4: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 20  },
      5: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 25  },
      6: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 30  },
      7: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 35  },
      8: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 40  },
      9: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 45  },
      10: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 50 },
      11: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 55 },
      12: { textBackgroundColor: '#faa', fontStyle: 'italic', fontFamily: 'Monaco', fontSize: 60 },

      14: { shadow: 'rgba(0,0,0,0.3) 5px 2px 2px' },
      15: { shadow: 'rgba(0,0,0,0.3) 5px 2px 2px' },
      16: { shadow: 'rgba(0,0,0,0.3) 5px 2px 2px' },
      17: { shadow: 'rgba(0,0,0,0.3) 5px 2px 2px' }
    }
  }
});

var iText2 = new fabric.IText('hello\nworld', {
  left: 50,
  top: 50,
  fontFamily: 'Helvetica',
  fill: '#333',
  lineHeight: 1.1,
  styles: {
    0: {
      0: { textDecoration: 'underline', fontSize: 80 },
      1: { textBackgroundColor: 'red' }
    },
    1: {
      0: { textBackgroundColor: 'rgba(0,255,0,0.5)' },
      4: { fontSize: 20 }
    }
  }
});

var iText3 = new fabric.IText('hello\nKLM\nbarbaz', {
  left: 50,
  top: 50,
  fontFamily: 'Arial',
  fill: '#333',
  lineHeight: 1,
  fontSize: 28,
  styles: {
    0: {
      0: { fill: '#f55' },
      1: { fill: '#f55' },
      4: { fontSize: 120 }
    },
    1: {
      1: { textDecoration: 'underline' },
      2: { textDecoration: 'underline', fontStyle: 'italic' }
    },
    2: {
      1: { fontSize: 60 },
      2: { fontSize: 60 },
      4: { textBackgroundColor: 'orange', fontStyle: 'italic' },
      5: { textBackgroundColor: 'orange', fontStyle: 'italic' }
    }
  }
});

var iText4 = new fabric.IText('abc\ndefgh\nxyz', {
  left: 50,
  top: 100,
  lineHeight: 1,
  fontFamily: 'Helvetica',
  styles: {
    0: {
      0: { textBackgroundColor: 'lightgreen' },
      1: { textBackgroundColor: '#faa' },
      2: { textBackgroundColor: 'lightblue' },
    },
    1: {
      0: { fill: 'red' },
      2: { fill: 'green' }
    },
    2: {
      1: { textDecoration: 'underline', fontSize: 20 }
    }
  }
});

var iText5 = new fabric.IText('foo\n\nbar\nbaz', {
  left: 50,
  top: 50,
  fontFamily: 'Monaco',
  styles: {
    0: {
      0: { textBackgroundColor: 'red', fill: '#fff', fontStyle: 'italic' },
      1: { textDecoration: 'overline', fontStyle: 'italic' },
    },
    2: {
      1: { textBackgroundColor: '#55f', fontStyle: 'italic' },
      2: { textDecoration: 'underline', fontStyle: 'italic' }
    },
    3: {
      1: { fontStyle: 'italic' }
    }
  }
});

var iText6 = new fabric.IText('abcdefg\nhijklmnop', {
  left: 50,
  top: 50,
  fontFamily: 'Lobster',
  angle: -10
});

var iText7 = new fabric.IText('', {
  left: 100,
  top: 100,
  padding: 7
});

var iText8 = new fabric.IText('Однажды, в студеную зимнюю пору,\nЯ из лесу вышел; был сильный мороз.\nГляжу, поднимается медленно в гору\n\Лошадка, везущая хворосту воз.', {
  left: 50,
  top: 50,
  fontFamily: 'Hoefler Text',
  fontWeight: 'normal',
  fontSize: 30,
  padding: 7
});

var iText9 = new fabric.IText('FOOBAR\nbaz\n12345', {
  left: 50,
  top: 50,
  fontFamily: 'Hoefler Text',
  fontSize: 60,
  padding: 7,
  textAlign: 'right'
});

var iText10 = new fabric.IText('foobar\nbaz', {
  left: 50,
  top: 50,
  fontFamily: 'Hoefler Text',
  fontSize: 50,
  padding: 7,
  textAlign: 'center',
  styles: {
    0: {
      0: { fill: 'red' },
      3: { textBackgroundColor: 'green', fill: '#fff' },
      4: { textBackgroundColor: 'green', fill: '#fff' },
      5: { textBackgroundColor: 'green', fill: '#fff' }
    },
    1: {
      2: { fill: 'blue' }
    }
  }
});

canvases[0].add(iText1);
canvases[1].add(iText2);
canvases[2].add(iText3);
canvases[3].add(iText4);
canvases[4].add(iText5);

setTimeout(function() {
  canvases[5].add(iText6);
  canvases[5].renderAll();
}, 1000);

canvases[6].add(iText7).setActiveObject(iText7);
iText7.enterEditing();

canvases[7].add(iText8).calcOffset();

canvases[8].add(iText9);

canvases[9].add(iText10);

canvases[10].backgroundColor = 'rgb(42,63,6)';
var fontFamily = 'Hoefler Text',
    fontSize = 50;

var iText11 = new fabric.IText('Breaking\nBad', {
  left: 50,
  top: 50,
  fontFamily: 'Hoefler Text',
  fontSize: 50,
  padding: 7,
  textAlign: 'center',
  fill: 'rgb(212,252,215)',
  styles: {
    0: {
      0: { textBackgroundColor: 'rgb(96,142,93)', fill: 'rgb(240,255,236)', fontFamily: fontFamily, fontSize: fontSize },
      1: { textBackgroundColor: 'rgb(96,142,93)', fill: 'rgb(240,255,236)', fontFamily: fontFamily, fontSize: fontSize }
    },
    1: {
      0: { textBackgroundColor: 'rgb(96,142,93)', fill: 'rgb(240,255,236)', fontFamily: fontFamily, fontSize: fontSize },
      1: { textBackgroundColor: 'rgb(96,142,93)', fill: 'rgb(240,255,236)', fontFamily: fontFamily, fontSize: fontSize }
    }
  }
});

canvases[10].add(iText11);

var iText12 = new fabric.IText('xxx\nyz', {
  left: 50,
  top: 50,
  fontFamily: 'Hoefler Text',
  fontSize: 40,
  padding: 7,
  textAlign: 'center',
  styles: {
    0: {
      1: { fontSize: 80 },
      2: { fontSize: 120 }
    }
  }
});

var iText13 = new fabric.IText('How do you\nlike it like\nthat?', {
  left: 50,
  top: 50,
  fontFamily: 'Hoefler Text',
  fontSize: 60,
  padding: 7,
  textAlign: 'left',
  styles: {
    0: {
      1: { fill: 'red' },
      4: { fontSize: 80, fontFamily: 'Georgia', fontWeight: 'bold', stroke: 'lightgreen', strokeWidth: 3, },
      5: { fontSize: 80, fontFamily: 'Georgia', fontWeight: 'bold' },
      7: { fontFamily: 'Courier' },
      8: { fontFamily: 'Courier' },
      9: { fontFamily: 'Courier' }
    },
    1: {
      1: { fontStyle: 'italic' }
    },
    2: {
      0: { textBackgroundColor: '#333', fill: '#fff' },
      1: { textBackgroundColor: '#333', fill: '#fff' },
      2: { textBackgroundColor: '#333', fill: '#fff' },
      3: { textBackgroundColor: '#333', fill: '#fff' }
    }
  }
});

canvases[11].add(iText13);

var iText14 = new fabric.IText('xxx\nyz', {
  left: 100,
  top: 100,
  fontFamily: 'Hoefler Text',
  fontSize: 40,
  padding: 7,
  textAlign: 'center',
  textDecoration: 'underline',
  textBackgroundColor: '#f55',
  lineHeight: 1,
  styles: {
    0: {
      1: { fontSize: 80, textDecoration: 'overline' },
      2: { fontSize: 120, textDecoration: 'overline line-through' }
    }
  }
});

canvases[12].add(iText14);

var iText15 = new fabric.IText('foo', {
  left: 50,
  top: 50,
  fontSize: 80,
  styles: {
    0: {
      0: { fill: 'red', shadow: '0px 0px 10px rgba(0,0,0,0.3)' },
      2: { fill: 'red', shadow: '0px 0px 10px rgba(0,0,0,0.3)' }
    }
  }
});

canvases[13].add(iText15);

var iText16 = new fabric.IText('xxxxx', {
  left: 100,
  top: 30,
  fontSize: 80,
  fontFamily: 'Courier',
  padding: 0,
  angle: 20,
  lineHeight: 1,
  styles: {
    0: {
      0: { textBackgroundColor: '#555' },
      1: { textBackgroundColor: '#777' },
      2: { textBackgroundColor: '#999' },
      3: { textBackgroundColor: '#bbb' },
      4: { textBackgroundColor: '#ddd' }
    }
  }
});

canvases[14].add(iText16);

var iText17 = new fabric.IText('abcdefg', {
  left: 50,
  top: 150,
  fontSize: 60,
  fontFamily: 'Monaco',
  padding: 0,
  lineHeight: 1,
  styles: {
    0: {
      0: { fontSize: 25 },
      1: { fontSize: 30 },
      2: { fontSize: 35 },
      3: { fontSize: 40 },
      4: { fontSize: 45 },
      5: { fontSize: 50 }
    }
  }
})
.scale(1.5);

canvases[15].add(iText17);

var iText18 = new fabric.IText(
'Bacon ipsum dolor sit amet beef\n\
ribs flank pancetta kevin biltong,\n\
pork doner andouille ball tip \n\
ribeye pork loin short loin boudin.\n\
Fatback leberkas ball tip andouille\n\
shank ribeye spare ribs,\n\
venison pastrami ground round bacon\n\
short loin beef ribs tri-tip biltong.\n\
Fatback spare ribs flank chuck \n\
short ribs salami,\n\
ground round biltong leberkas bresaola \n\
ribeye filet mignon.\n\
Swine kevin meatloaf turducken, \n\
drumstick boudin pancetta tongue \n\
ham filet mignon ham hock salami. \n\
Beef ribs sausage ribeye spare \n\
ribs kevin frankfurter. \n\
Meatball corned beef biltong \n\
sirloin turducken jerky. \n\
Flank filet mignon prosciutto, \n\
ham hock pork fatback \n\
spare ribs capicola jerky.', {
    styles: { },
    fontFamily: 'Courier',
    fontSize: 18,
    left: 50,
    top: 50
  });

canvases[16].add(iText18);

var iText19 = new fabric.IText('abcdefg', {
  left: 50,
  top: 150,
  fontSize: 60,
  fontFamily: 'Monaco',
  padding: 0,
  lineHeight: 1,
  flipX: true,
  styles: {
    0: {
      0: { fontSize: 25 },
      1: { fontSize: 30 },
      2: { fontSize: 35 },
      3: { fontSize: 40 },
      4: { fontSize: 45 },
      5: { fontSize: 50 }
    }
  }
});

canvases[17].add(iText19);


var iText20 = new fabric.IText('Archer\nSterling\nISIS', {
  left: 50,
  top: 20,
  fontSize: 50,
  fontFamily: 'Optima',
  padding: 0,
  textAlign: 'right',
  styles: {
    0: {
      0: { fill: 'red' },
      1: { fill: 'red' },
      2: { fill: 'red' },
      3: { fill: 'red' },
      4: { fill: 'red' },
      5: { fill: 'red' }
    },
    1: {
      0: { fontSize: 35, fill: 'green' },
      1: { fontSize: 35, fill: 'green' },
      2: { fontSize: 35, fill: 'green' },
      3: { fontSize: 35, fill: 'green' },
      4: { fontSize: 35, fill: 'green' },
      5: { fontSize: 35, fill: 'green' },
      6: { fontSize: 35, fill: 'green' },
      7: { fontSize: 35, fill: 'green' }
    },
    2: {
      0: { fontSize: 94, fill: 'blue' },
      1: { fontSize: 94, fill: 'blue' },
      2: { fontSize: 94, fill: 'blue' },
      3: { fontSize: 94, fill: 'blue' }
    }
  }
});
canvases[18].add(iText20);





canvases.forEach(function(c) {
  c.item(0) && c.item(0).setCoords();
  c.calcOffset();
  // back reference
  c.wrapperEl.canvas = c;
});










// function disableTap(canvas) {

//   var lastClickTime = +new Date;
//   var newClickTime;

//   canvas.on('mouse:down', function(options) {
//     newClickTime = +new Date;

//     if (newClickTime - lastClickTime < 500) {

//       var event = options.e;
//       event.preventDefault && event.preventDefault()
//       event.stopPropagation && event.stopPropagation();

//       if (options.target) {
//         options.target.fire('dblclick', options);
//       }
//     }
//     lastClickTime = newClickTime;
//   });
// }

// disableTap(canvases[11]);

function setStyle(object, styleName, value) {
  if (object.setSelectionStyles && object.isEditing) {
    var style = { };
    style[styleName] = value;
    object.setSelectionStyles(style);
  }
  else {
    object[styleName] = value;
  }
}
function getStyle(object, styleName) {
  return (object.getSelectionStyles && object.isEditing)
    ? object.getSelectionStyles()[styleName]
    : object[styleName];
}

function addHandler(id, fn, eventName) {
  document.getElementById(id)[eventName || 'onclick'] = function() {
    var el = this;
    canvases.forEach(function(canvas, obj) {
      if (obj = canvas.getActiveObject()) {
        fn.call(el, obj);
        canvas.renderAll();
      }
    });
  };
}


addHandler('bold', function(obj) {
  var isBold = getStyle(obj, 'fontWeight') === 'bold';
  setStyle(obj, 'fontWeight', isBold ? '' : 'bold');
});

addHandler('italic', function() {
  var isItalic = getStyle(obj, 'fontStyle') === 'italic';
  setStyle(obj, 'fontStyle', isItalic ? '' : 'italic');
});

addHandler('underline', function(obj) {
  var isUnderline = (getStyle(obj, 'textDecoration') || '').indexOf('underline') > -1;
  setStyle(obj, 'textDecoration', isUnderline ? '' : 'underline');
});

addHandler('line-through', function(obj) {
  var isLinethrough = (getStyle(obj, 'textDecoration') || '').indexOf('line-through') > -1;
  setStyle(obj, 'textDecoration', isLinethrough ? '' : 'line-through');
});

addHandler('color', function(obj) {
  setStyle(obj, 'fill', this.value);
}, 'onchange');

addHandler('bg-color', function(obj) {
  setStyle(obj, 'textBackgroundColor', this.value);
}, 'onchange');

addHandler('size', function(obj) {
  setStyle(obj, 'fontSize', parseInt(this.value, 10));
}, 'onchange');

/*document.getElementById('calc-offset').onclick = function() {
  canvases.forEach(function(c) {
    c.calcOffset();
  });
};

document.getElementById('set-coords').onclick = function() {
  canvases.forEach(function(c) {
    c.getObjects().forEach(function(o) {
      o.setCoords();
    })
  });
};

document.getElementById('open-keyboard').onclick = function() {
  document.getElementById('dummy-textarea').focus();
};
*/
