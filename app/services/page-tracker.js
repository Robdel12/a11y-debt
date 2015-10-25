import Ember from 'ember';

export default Ember.Service.extend({
  currentPage: Ember.computed(function() {
    return 1;
  })
});
