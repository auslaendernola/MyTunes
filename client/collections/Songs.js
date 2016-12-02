// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(response) {
    this.fetch({reset: true});
  },

  url: 'https://api.parse.com/1/classes/songs/',

  parse: function(response) {
    console.log(response, 'response');
    return response.results;
  }
});

// var song = new Songs();
//
// song.fetch({
//   success: function(response, xhr) {
//     console.log(response + ' inside success');
//   },
//
//   error: function(errorResponse) {
//     console.log('inside error');
//   }
// });
