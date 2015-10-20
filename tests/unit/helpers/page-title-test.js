/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  pageTitle
} from 'a11y-debt/helpers/page-title';

describe('PageTitleHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    var result = pageTitle(42);
    expect(result).to.be.ok;
  });
});
