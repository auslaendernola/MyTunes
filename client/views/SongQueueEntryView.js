// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'span',

  initialize: function () {
    this.on('click', function() {
      this.dequeue();
    });
  },
  
  template: _.template('<td><%= artist %></td><td><%= title %></td>'),

  event: {
    'click': function() {
      this.dequeue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },

});
