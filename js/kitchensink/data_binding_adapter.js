rivets.adapters['^'] = {
  subscribe: function(obj, key, callback) {
    obj.on('change', callback);
  },
  unsubscribe: function(obj, key, callback) {
    obj.off('change', callback);
  },
  read: function(obj, key) {
    return obj['get' + capitalize(key)]();
  },
  publish: function(obj, key, value) {
    obj['set' + capitalize(key)](value);
  }
};

rivets.binders.toggle = {
  bind: function(el) {
    var adapter = this.getAdapter();

    this.callback = _.bind(function() {
      var value = adapter.read(this.model, this.key.path);
      adapter.publish(this.model, this.key.path, !value);
    }, this);

    $(el).on('click', this.callback);
  },

  unbind: function(el) {
    $(el).off('click', this.callback);
  },

  routine: function(el, value) {
    $(el)[value ? 'addClass' : 'removeClass']('btn-inverse');
  }
};

rivets.binders.enable = function(el, value) {
  $(el).find('.btn-object-action')
    .prop('disabled', !value);
};

rivets.binders.val = {
  bind: function(el) {
    this.callback = _.bind(function(e) {
      this.getAdapter().publish(this.model, this.key.path, e.target.value);
    }, this);

    $(el).on('keyup', this.callback);
  },

  unbind: function(el) {
    $(el).off('keyup', this.callback);
  },

  routine: rivets.binders.value.routine
};

rivets.formatters.toggle = function(value, str1, str2) {
  return (value ? str1 : str2);
};
