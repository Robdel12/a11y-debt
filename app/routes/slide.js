import Ember from 'ember';
import presentation from '../presentation';

let $ = Ember.$;

export default Ember.Route.extend({
  xDown: null,
  yDown: null,

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
    document.addEventListener('touchstart', Ember.run.bind(this, this.handleTouchStart), false);
    document.addEventListener('touchmove', Ember.run.bind(this, this.handleTouchMove), false);

    $(window).on('keydown.SlideRoute', (e) => {
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
    $(window).off('keydown.SlideRoute');
  },

  handleTouchStart(evt) {
    Ember.set(this, 'xDown', evt.touches[0].clientX);
    Ember.set(this, 'yDown', evt.touches[0].clientY);
  },

  handleTouchMove(evt) {
    let xDown = Ember.get(this, 'xDown');
    let yDown = Ember.get(this, 'yDown');

    if ( ! xDown || ! yDown ) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
      if ( xDiff > 0 ) {
        this.move(1);
      } else {
        this.move(-1);
      }
    }
    /* reset values */
    Ember.set(this, 'xDown', null);
    Ember.set(this, 'yDown', null);
  }
});
