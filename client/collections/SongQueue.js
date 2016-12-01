// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.at(1) === undefined) {
        this.playFirst();
      }
    });
    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.at(0)) {
        this.playFirst();
      }
    });
    this.on('dequeue', function() {
      this.remove(this);
    });
  },

  playFirst: function(song) {
    this.at(0).play();
  }

});
