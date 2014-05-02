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

  it('should provide an error message when no `widgets` on key', function (done) {
    var validate = createValidator([ 'Main', 'Thumbnail' ])
    validate('images', 'Images', { images: {} }, function (err, errMessage) {
      if (err) return done(err)
      assert.equal(errMessage, 'Images are required')
      done()
    })
  })

  it('should report an error if given an empty object', function (done) {
    var validate = createValidator([ 'Main', 'Thumbnail' ])
    validate('images', 'Images', {}, function (err, errMessage) {
      if (err) return done(err)
      assert.equal(errMessage, 'Images are required')
      done()
    })
  })

})
