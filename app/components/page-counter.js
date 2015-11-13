import Ember from 'ember';
import Presentation from '../presentation';
import ENV from '../config/environment';

export default Ember.Component.extend({
  pageTracker: Ember.inject.service('page-tracker'),
  currentPage: Ember.computed.alias('service.pageTracker.curentPage'),

  totalPages: Ember.computed(function() {
    return Presentation.length;
  }),

  isProduction: Ember.computed(function() {
    if(ENV.environment === "production") {
      return true;
    } else {
      return false;
    }
  })
});
