var GlobalView = Backbone.View.extend({

  el: '#bd-wrapper',

  events: {
    'change #canvas-background-picker': function() {
      this.model.setBackgroundColor(e.target.value);
    },

    'click #rasterize': function() {
      if (!fabric.Canvas.supports('toDataURL')) {
        alert('This browser doesn\'t provide means to serialize canvas to an image');
      }
      else {
        window.open(this.model.toDataURL());
      }
    },

    'click #rasterize-svg': function() {
      window.open(this.model.toSVG());
    },

    'click #rasterize-json': function() {
      alert(this.model.toJSON());
    },

    'click #load-svg': function() {
      this.model.loadSVG($('#svg-console').val());
    },

    'click #load-svg-without-grouping': function() {
      this.model.loadSVGWithoutGrouping($('#svg-console').val());
    },

    'click #execute': function() {
      var code = $('#canvas-console').val();
      if (!(/^\s+$/).test(code)) {
        var canvas = this.canvas;
        eval(code);
      }
    }
  },

  initialize: function() {
    this.model.on('change', _.bind(this.render, this));
    this.render();
  },

  render: function() {
    $('#complexity strong').html(' ' + this.model.complexity());
  }
});

new GlobalView({ model: kitchensink });
