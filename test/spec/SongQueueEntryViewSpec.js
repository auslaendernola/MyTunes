describe('SongQueueEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'data',
      url: '/test/testsong.mp3',
      title: 'test song'
    });
    view = new SongQueueEntryView({model: model});
    view.render();
  });
  it('removes a song from the queue when clicked', function() {
    sinon.spy(SongModel.prototype, 'dequeue');
    view.$el.children().first().click();
    expect(model.dequeue).to.have.been.called;
    SongModel.prototype.dequeue.restore();
  });
});
