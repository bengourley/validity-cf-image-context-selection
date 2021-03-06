module.exports = createValidator

function createValidator(requiredContexts) {

  function validate(key, keyDisplayName, object, cb) {

    var images = object[key]

    if (!images || !images.widgets) return cb(null, 'Images are required')

    var selectedContexts = []
    images.widgets.forEach(function (image) {
      selectedContexts = selectedContexts.concat(image.selectedContexts)
    })

    var notSelected = requiredContexts.some(function (requiredContext) {
      return selectedContexts.indexOf(requiredContext) === -1
    })

    if (notSelected) return cb(null, 'Image contexts require selection: ' + requiredContexts.join(', '))

    return cb(null)

  }

  return validate

}
