var AddCommandsView = Backbone.View.extend({

  el: '#commands',

  events: {
    'click button.rect': function() {
      this.model.addRect();
    },
    'click button.circle': function() {
      this.model.addCircle();
    },
    'click button.triangle': function() {
      this.model.addTriangle();
    },
    'click button.line': function() {
      this.model.addLine();
    },
    'click button.polygon': function() {
      this.model.addPolygon();
    },
    'click button.image1': function() {
      this.model.addImage('pug.jpg', 0.1, 0.25);
    },
    'click button.image2': function() {
      this.model.addImage('logo.png', 0.1, 1);
    },
    'click button.image3': function() {
      this.model.addImage('printio.png', 0.5, 0.75);
    },
    'click button.shape': function(e) {
      var id = e.target.id, match;
      if (match = /\d+$/.exec(id)) {
        this.model.addShape(match[0]);
      }
    },
    'click button.clear': function() {
      if (confirm('Are you sure?')) {
        this.model.clear();
      }
    },
    'click #add-text': function() {
      this.model.addText();
    },
  }
});

new AddCommandsView({ model: kitchensink });
