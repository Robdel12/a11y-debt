import Ember from 'ember';
import presentation from '../presentation';

let $ = Ember.$;

export default Ember.Route.extend({
  pageTracker: Ember.inject.service('page-tracker'),
  model(params) {
    var index = presentation.indexOf(params.id);
    this.get('pageTracker').set('currentPage', index + 1);

    if (index < 0) {
      throw new Error(`unknown slide: ${params.id}`);
    }
    return {
      index,
      slideTemplate: `slides/${params.id}`
    };
  },

  move(distance) {
    let currentIndex = this.get('controller.model.index');

    if(!presentation[currentIndex + distance]) {
      return;
    }

    this.transitionTo('slide', presentation[currentIndex + distance]);
  },

  activate() {
    $(window).on('keyup.SlideRoute', (e)=> {
      switch (e.keyCode) {
      case 37:
        this.move(-1);
        break;
      case 39:
        this.move(1);
        break;
      }
    });
  },

  deactivate() {
    $(window).off('keyup.SlideRoute');
  }
});
