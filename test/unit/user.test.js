'use strict';

var expect = require('expect.js');

describe('controller/user', function () {
  var ctrluser = require('../../app/controllers/user')();
  describe('functions tests', function() {

    it('should be params null', function() {
      var result = ctrluser.paramsIsNull(null,null);
      expect(true).to.equal(result);
    });

    it('should be params null again', function() {
      var result = ctrluser.paramsIsNull(1,null);
      expect(true).to.equal(result);
    });

    it('should be params not null', function() {
      var result = ctrluser.paramsIsNull(1,"null");
      expect(false).to.equal(result);
    });

  });
});
