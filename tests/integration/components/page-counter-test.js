/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'page-counter',
  'Integration: PageCounterComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#page-counter}}
      //     template content
      //   {{/page-counter}}
      // `);

      this.render(hbs`{{page-counter}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
