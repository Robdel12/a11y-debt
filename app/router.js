import Ember from 'ember';
import config from './config/environment';
import A11yAnnouncer from 'a11y-announcer/mixins/announcer';

var Router = Ember.Router.extend(A11yAnnouncer, {
  location: config.locationType
});

Router.map(function() {
});

export default Router;
