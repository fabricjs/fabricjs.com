var TextView = Backbone.View.extend({

  el: '#text-wrapper',

  ui: {
    textCmdBold: '#text-cmd-bold',
    textCmdItalic: '#text-cmd-italic',
    textCmdOverline: '#text-cmd-overline',
    textCmdUnderline: '#text-cmd-underline',
    textCmdLineThrough: '#text-cmd-linethrough',
    fontFamily: '#font-family',
    textAlign: '#text-align',
    textBgColor: '#text-bg-color',
    textLinesBgColor: '#text-lines-bg-color',
    textFontSize: '#text-font-size',
    textStrokeColor: '#text-stroke-color',
    textStrokeWidth: '#text-stroke-width',
    textLineHeight: '#text-line-height',
    text: '#text'
  },

  events: {
    'click textCmdUnderline': function() {
      this.model.toggleUnderline();
    },
    'click textCmdLineThrough': function() {
      this.model.toggleLineThrough();
    },
    'click textCmdOverline': function() {
      this.model.toggleOverline();
    },
    'click textCmdBold': function() {
      this.model.toggleBold();
    },
    'click textCmdItalic': function() {
      this.model.toggleItalic();
    },
    'change textAlign': function(e) {
      this.model.switchTextAlign(e.target.value);
    },
    'change fontFamily': function(e) {
      this.model.setFontFamily(e.target.value);
    },
    'change textBgColor': function(e) {
      this.model.setObjectBackgroundColor(e.target.value);
    },
    'change textLinesBgColor': function(e) {
      this.model.setTextBackgroundColor(e.target.value);
    },
    'change textFontSize': function(e) {
      this.model.setFontSize(parseInt(e.target.value, 10));
    },
    'change textStrokeColor': function(e) {
      this.model.setStrokeColor(e.target.value);
    },
    'change textStrokeWidth': function(e) {
      this.model.setStrokeWidth(parseInt(e.target.value, 10));
    },
    'change textLineHeight': function(e) {
      this.model.changeLineHeight(parseInt(e.target.value, 10));
    },
    'keyup #text': function(e) {
      this.model.updateText(e.target.value);
    },
  },

  initialize: function() {
    this.model.on('change', _.bind(this.render, this));
    this.render();
  },

  render: function() {
    var selectedObject = this.model.getSelected();

    if (!selectedObject || !/text/.test(selectedObject.type)) {
      this.$el.hide();
      return;
    }

    this.$el.show();

    this.ui.text.val(selectedObject.getText());

    this.ui.textCmdBold
      .toggleClass('btn-inverse', selectedObject.fontWeight === 'bold');

    this.ui.textCmdUnderline
      .toggleClass('btn-inverse', selectedObject.textDecoration === 'underline');

    this.ui.textCmdLineThrough
      .toggleClass('btn-inverse', selectedObject.textDecoration === 'line-through');

    this.ui.textCmdOverline
      .toggleClass('btn-inverse', selectedObject.textDecoration === 'overline');

    this.ui.textCmdItalic
      .toggleClass('btn-inverse', selectedObject.fontStyle === 'italic');

    this.ui.fontFamily
      .val(selectedObject.get('fontFamily').toLowerCase());

    this.ui.textAlign
      .val(fabric.util.string.capitalize(selectedObject.get('textAlign')));

    this.ui.textBgColor
      .val(selectedObject.get('backgroundColor'));

    this.ui.textLinesBgColor
      .val(selectedObject.get('textBackgroundColor'));

    this.ui.textFontSize
      .val(selectedObject.get('fontSize'));

    this.ui.textStrokeColor
      .val(selectedObject.get('stroke'));

    this.ui.textStrokeWidth
      .val(selectedObject.get('strokeWidth'));

    this.ui.textLineHeight
      .val(selectedObject.get('lineHeight'));
  }
});

new TextView({ model: kitchensink });
