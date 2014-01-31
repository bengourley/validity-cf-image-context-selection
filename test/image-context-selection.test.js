var createValidator = require('../')
  , assert = require('assert')

/* global describe, it */

describe('Image context selection validator', function () {

  it('should provide an error message if not all required contexts are selected', function (done) {
    var validate = createValidator([ 'Main', 'Thumbnail' ])
    validate('images', 'Images', require('./fixtures/invalid'), function (err, errMessage) {
      if (err) return done(err)
      assert.equal('Image contexts require selection: Main, Thumbnail', errMessage)
      done()
    })
  })

  it('should be ok if all required contexts are selected', function (done) {
    var validate = createValidator([ 'Main', 'Thumbnail' ])
    validate('images', 'Images', require('./fixtures/valid'), function (err, errMessage) {
      if (err) return done(err)
      assert(!errMessage)
      done()
    })
  })

})