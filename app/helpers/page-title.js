import Ember from 'ember';

export function pageTitle(title) {
  Ember.$('head').find('title').text(`${title}`);
}

export default Ember.Helper.helper(pageTitle);
