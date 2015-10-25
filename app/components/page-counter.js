import Ember from 'ember';
import Presentation from '../presentation';

export default Ember.Component.extend({
  pageTracker: Ember.inject.service('page-tracker'),
  currentPage: Ember.computed.alias('service.pageTracker.curentPage'),

  totalPages: Ember.computed(function() {
    return Presentation.length;
  })
});
