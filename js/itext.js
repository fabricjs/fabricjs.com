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
  new fabric.Canvas('c20'),
  new fabric.Canvas('c21'),
];

var iText22 = new fabric.IText('e = mc2\na2 + b2 = c2', {
  left: 10,
  top: 20,
  styles: {
    0: {
      6: {
        deltaY: -14,
        fontSize: 24,
      }
    },
    1: {
      1: {
        deltaY: 4.4,
        fontSize: 24,
      },
      6: {
        deltaY: 4.4,
        fontSize: 24,
      },
      11: {
        deltaY: 4.4,
        fontSize: 24,
      }
    }
  }
})


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
  angle: -10,
  caching: false
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

canvases[20].add(iText22);
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

var iText21 = new fabric.IText(
'Chapter One\n\
A Stop on the Salt Route\n\
1000 B.C.\n\
As they rounded a bend in the path that ran beside the river, Lara recognized the silhouette of a fig tree atop a nearby hill. The weather was hot and the days were long. The fig tree was in full leaf, but not yet bearing fruit.\n\
Soon Lara spotted other landmarks—an outcropping of limestone beside the path that had a silhouette like a man’s face, a marshy spot beside the river where the waterfowl were easily startled, a tall tree that looked like a man with his arms upraised. They were drawing near to the place where there was an island in the river. The island was a good spot to make camp. They would sleep on the island tonight.\n\
Lara had been back and forth along the river path many times in her short life. Her people had not created the path—it had always been there, like the river—but their deerskin-shod feet and the wooden wheels of their handcarts kept the path well worn. Lara’s people were salt traders, and their livelihood took them on a continual journey.\n\
At the mouth of the river, the little group of half a dozen intermingled families gathered salt from the great salt beds beside the sea. They groomed and sifted the salt and loaded it into handcarts. When the carts were full, most of the group would stay behind, taking shelter amid rocks and simple lean-tos, while a band of fifteen or so of the heartier members set out on the path that ran alongside the river.\n\
With their precious cargo of salt, the travelers crossed the coastal lowlands and traveled toward the mountains. But Lara’s people never reached the mountaintops; they traveled only as far as the foothills. Many people lived in the forests and grassy meadows of the foothills, gathered in small villages. In return for salt, these people would give Lara’s people dried meat, animal skins, cloth spun from wool, clay pots, needles and scraping tools carved from bone, and little toys made of wood.\n\
Their bartering done, Lara and her people would travel back down the river path to the sea. The cycle would begin again.\n\
It had always been like this. Lara knew no other life. She traveled back and forth, up and down the river path. No single place was home. She liked the seaside, where there was always fish to eat, and the gentle lapping of the waves lulled her to sleep at night. She was less fond of the foothills, where the path grew steep, the nights could be cold, and views of great distances made her dizzy. She felt uneasy in the villages, and was often shy around strangers. The path itself was where she felt most at home. She loved the smell of the river on a hot day, and the croaking of frogs at night. Vines grew amid the lush foliage along the river, with berries that were good to eat. Even on the hottest day, sundown brought a cool breeze off the water, which sighed and sang amid the reeds and tall grasses.\n\
Of all the places along the path, the area they were approaching, with the island in the river, was Lara’s favorite.\n\
The terrain along this stretch of the river was mostly flat, but in the immediate vicinity of the island, the land on the sunrise side was like a rumpled cloth, with hills and ridges and valleys. Among Lara’s people, there was a wooden baby’s crib, suitable for strapping to a cart, that had been passed down for generations. The island was shaped like that crib, longer than it was wide and pointed at the upriver end, where the flow had eroded both banks. The island was like a crib, and the group of hills on the sunrise side of the river were like old women mantled in heavy cloaks gathered to have a look at the baby in the crib—that was how Lara’s father had once described the lay of the land.\n\
Larth spoke like that all the time, conjuring images of giants and monsters in the landscape. He could perceive the spirits, called numina, that dwelled in rocks and trees. Sometimes he could speak to them and hear what they had to say. The river was his oldest friend and told him where the fishing would be best. From whispers in the wind he could foretell the next day’s weather. Because of such skills, Larth was the leader of the group.\n\
“We’re close to the island, aren’t we, Papa?” said Lara.\n\
“How did you know?”\n\
“The hills. First we start to see the hills, off to the right. The hills grow bigger. And just before we come to the island, we can see the silhouette of that fig tree up there, along the crest of that hill.”\n\
“Good girl!” said Larth, proud of his daughter’s memory and powers of observation. He was a strong, handsome man with flecks of gray in his black beard. His wife had borne several children, but all had died very young except Lara, the last, whom his wife had died bearing. Lara was very precious to him. Like her mother, she had golden hair. Now that she had reached the age of childbearing, Lara was beginning to display the fullness of a woman’s hips and breasts. It was Larth’s greatest wish that he might live to see his own grandchildren. Not every man lived that long, but Larth was hopeful. He had been healthy all his life, partly, he believed, because he had always been careful to show respect to the numina he encountered on his journeys.\n\
Respecting the numina was important. The numen of the river could suck a man under and drown him. The numen of a tree could trip a man with its roots, or drop a rotten branch on his head. Rocks could give way underfoot, chuckling with amusement at their own treachery. Even the sky, with a roar of fury, sometimes sent down fingers of fire that could roast a man like a rabbit on a spit, or worse, leave him alive but robbed of his senses. Larth had heard that the earth itself could open and swallow a man; though he had never actually seen such a thing, he nevertheless performed a ritual each morning, asking the earth’s permission before he went striding across it.\n\
“There’s something so special about this place,” said Lara, gazing at the sparkling river to her left and then at the rocky, tree-spotted hills ahead and to her right. “How was it made? Who made it?”\n\
Larth frowned. The question made no sense to him. A place was never made, it simply was. Small features might change over time. Uprooted by a storm, a tree might fall into the river. A boulder might decide to tumble down the hillside. The numina that animated all things went about reshaping the landscape from day to day, but the essential things never changed, and had always existed: the river, the hills, the sky, the sun, the sea, the salt beds at the mouth of the river.\n\
He was trying to think of some way to express these thoughts to Lara, when a deer, drinking at the river, was startled by their approach. The deer bolted up the brushy bank and onto the path. Instead of running to safety, the creature stood and stared at them. As clearly as if the animal had whispered aloud, Larth heard the words “Eat me.” The deer was offering herself.\n\
Larth turned to shout an order, but the most skilled hunter of the group, a youth called Po, was already in motion. Po ran forward, raised the sharpened stick he always carried and hurled it whistling through the air between Larth and Lara.\n\
A heartbeat later, the spear struck the deer’s breast with such force that the creature was knocked to the ground. Unable to rise, she thrashed her neck and flailed her long, slender legs. Po ran past Larth and Lara. When he reached the deer, he pulled the spear free and stabbed the creature again. The deer released a stifled noise, like a gasp, and stopped moving.\n\
There was a cheer from the group. Instead of yet another dinner of fish from the river, tonight there would be venison.\n\
The distance from the riverbank to the island was not great, but at this time of year—early summer—the river was too high to wade across. Lara’s people had long ago made simple rafts of branches lashed together with leather thongs, which they left on the riverbanks, repairing and replacing them as needed. When they last passed this way, there had been three rafts, all in good condition, left on the east bank. Two of the rafts were still there, but one was missing.\n\
“I see it! There—pulled up on the bank of the island, almost hidden among those leaves,” said Po, whose eyes were sharp. “Someone must have used it to cross over.”\n\
“Perhaps they’re still on the island,” said Larth. He did not begrudge others the use of the rafts, and the island was large enough to share. Nonetheless, the situation required caution. He cupped his hands to his mouth and gave a shout. It was not long before a man appeared on the bank of the island. The man waved.\n\
“Do we know him?” said Larth, squinting.\n\
“I don’t think so,” said Po. “He’s young—my age or younger, I’d say. He looks strong.”\n\
“Very strong!” said Lara. Even from this distance, the young stranger’s brawniness was impressive. He wore a short tunic without sleeves, and Lara had never seen such arms on a man.\n\
Po, who was small and wiry, looked at Lara sidelong and frowned. “I’m not sure I like the look of this stranger.”\n\
“Why not?” said Lara. “He’s smiling at us.”\n\
In fact, the young man was smiling at Lara, and Lara alone.\n\
His name was Tarketios. Much more than that, Larth could not tell, for the stranger spoke a language which Larth did not recognize, in which each word seemed as long and convoluted as the man’s name. Understanding the deer had been easier than understanding the strange noises uttered by this man and his two companions! Even so, they seemed friendly, and the three of them presented no threat to the more numerous salt traders.\n\
Tarketios and his two older companions were skilled metalworkers from a region some two hundred miles to the north, where the hills were rich with iron, copper, and lead. They had been on a trading journey to the south and were returning home. Just as the river path carried Larth’s people from the seashore to the hills, so another path, perpendicular to the river, traversed the long coastal plain. Because the island provided an easy place to ford the river, it was here that the two paths intersected. On this occasion, the salt traders and the metal traders happened to arrive at the island on the same day. Now they met for the first time.\n\
The two groups made separate camps at opposite ends of the island. As a gesture of friendship, speaking with his hands, Larth invited Tarketios and the others to share the venison that night. As the hosts and their guests feasted around the roasting fire, Tarketios tried to explain something of his craft. Firelight glittered in Lara’s eyes as she watched Tarketios point at the flames and mime the act of hammering. Firelight danced across the flexing muscles of his arms and shoulders. When he smiled at her, his grin was like a boast. She had never seen teeth so white and so perfect.\n\
Po saw the looks the two exchanged and frowned. Lara’s father saw the same looks and smiled.\n\
The meal was over. The metal traders, after many gestures of gratitude for the venison, withdrew to their camp at the far side of the island. Before he disappeared into the shadows, Tarketios looked over his shoulder and gave Lara a parting grin.\n\
While the others settled down to sleep, Larth stayed awake a while longer, as was his habit. He liked to watch the fire. Like all other things, fire possessed a numen that sometimes communicated with him, showing him visions. As the last of the embers faded into darkness, Larth fell asleep.\n\
Larth blinked. The flames, which had dwindled to almost nothing, suddenly shot up again. Hot air rushed over his face. His eyes were seared by white flames brighter than the sun.\n\
Amid the dazzling brightness, he perceived a thing that levitated above the flames. It was a masculine member, disembodied but nonetheless rampant and upright. It bore wings, like a bird, and hovered in midair. Though it seemed to be made of flesh, it was impervious to the flames.\n\
Larth had seen the winged phallus before, always in such circumstances, when he stared at a fire and entered a dream state. He had even given it a name, or more precisely, the thing had planted its name in his mind: Fascinus.\n\
Fascinus was not like the numina that animated trees, stones, or rivers. Those numina existed without names. Each was bound to the object in which it resided, and there was little to differentiate one from another. When such numina spoke, they could not always be trusted. Sometimes they were friendly, but at other times they were mischievous or even hostile.\n\
Fascinus was different. It was unique. It existed in and of itself, without beginning or end. Clearly, from its form, it had something to do with life and the origin of life, yet it seemed to come from a place beyond this world, slipping for a few moments through a breach opened by the heat of the dancing flames. An appearance by Fascinus was always significant. The winged phallus never appeared without giving Larth an answer to a dilemma that had been troubling him, or planting an important new thought in his mind. The guidance given to him by Fascinus had never led Larth astray.\n\
Elsewhere, in distant lands—Greece, Israel, Egypt—men and women worshiped gods and goddesses. Those people made images of their gods, told stories about them, and worshiped them in temples. Larth had never met such people. He had never even heard of the lands where they lived, and he had never encountered or conceived of a god. The very concept of a deity such as those other men worshiped was unknown to Larth, but the closest thing to a god in his imagination and experience was Fascinus.\n\
With a start, he blinked again.\n\
The flames had died. In place of intolerable brightness there was only the darkness of a warm summer night lit by the faintest sliver of a moon. The air on his face was no longer hot but fresh and cool.\n\
Fascinus had vanished—but not without planting a thought in Larth’s mind. He hurried to the leafy bower beside the river where Lara liked to sleep, thinking to himself, It must be made so, because Fascinus says it must!\n\
He knelt beside her, but there was no need to wake her. She was already awake.\n\
“Papa? What is it?”\n\
“Go to him!”\n\
She did not need to ask for an explanation. It was what she had been yearning to do, lying restless and eager in the dark.\n\
“Are you sure, Papa?”\n\
“Fascinus . . . ,” He did not finish the thought, but she understood. She had never seen Fascinus, but he had told her about it. Many times in the past, Fascinus had given guidance to her father. Now, once again, Fascinus had made its will known.\n\
The darkness did not deter her. She knew every twist and turn of every path on the little island. When she came to the metal trader’s camp, she found Tarketios lying in a leafy nook secluded from the others; she recognized him by his brawny silhouette. He was awake and waiting, just as she had been lying awake, waiting, when her father came to her.\n\
At her approach, Tarketios rose onto his elbows. He spoke her name in a whisper. There was a quiver of something like desperation in his voice; his neediness made her smile. She sighed and lowered herself beside him. By the faint moonlight, she saw that he wore an amulet of some sort, suspended from a strap of leather around his neck. Nestled amid the hair on his chest, the bit of shapeless metal seemed to capture and concentrate the faint moonlight, casting back a radiance brighter than the moon itself.\n\
His arms—the arms she had so admired earlier—reached out and closed around her in a surprisingly gentle embrace. His body was as warm and naked as her own, but much bigger and much harder. She wondered if Fascinus was with them in the darkness, for she seemed to feel the beating of wings between their legs as she was entered by the thing that gave origin to life.\n\
Copyright © 2007 by Steven Saylor. All rights reserved.'
, {
    styles: { },
    fontFamily: 'Arial',
    fontSize: 12,
    left: 50,
    top: 50
  });

canvases[19].add(iText21);



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

addHandler('super-script', function(obj) {
  if (obj.selectionStart !== obj.selectionEnd) {
    obj.setSuperscript();
  }
});

addHandler('sub-script', function(obj) {
  if (obj.selectionStart !== obj.selectionEnd) {
    obj.setSubscript();
  }
});

addHandler('bold', function(obj) {
  var isBold = getStyle(obj, 'fontWeight') === 'bold';
  setStyle(obj, 'fontWeight', isBold ? '' : 'bold');
  obj.dirty = true;
});

addHandler('italic', function() {
  var isItalic = getStyle(obj, 'fontStyle') === 'italic';
  setStyle(obj, 'fontStyle', isItalic ? '' : 'italic');
  obj.dirty = true;
});

addHandler('underline', function(obj) {
  var isUnderline = (getStyle(obj, 'underline') || false);
  setStyle(obj, 'underline', isUnderline ? false : true);
  obj.dirty = true;
});

addHandler('line-through', function(obj) {linethrough
  var islinethrough = (getStyle(obj, 'linethrough') || false);
  setStyle(obj, 'linethrough', islinethrough ? false : true);
  obj.dirty = true;
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
