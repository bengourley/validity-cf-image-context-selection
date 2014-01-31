# validity-cf-image-context-selection

[![Build Status](https://travis-ci.org/bengourley/validity-cf-image-context-selection.png?branch=master)](https://travis-ci.org/bengourley/validity-cf-image-context-selection)

Validity style validator to ensure that required image contexts are selected with
an image widget array. This validator works with cf image widget areas.

## Installation

    npm install validity-cf-image-context-selection

## Usage

Below is a simple example for usage with schemata and save:

```js

var validity = require('validity')
  , schemata = require('schemata')
  , createContextValidator = require('validity-cf-image-context-selection')
  , requiredContexts = [ 'main', 'thumbnail' ]

var schema = schemata(
    { images:
      { type: String
      , validators: { all: [ createContextValidator(requiredContexts) ] }
      }
    })
```

## API

### var validate = createUniqueValidator(Array: requiredContexts)

Create a validate function. `requiredContexts` should be an array of image contexts
that require selection.

### validate(String:key, String:keyDisplayName, Object:object, Function:cb)

This is a validity compatible function, which in turn is used by schemata for schema validation.

The callback signature cb(err, errorMessage).

err is an Error object if something bad happened and null otherwise.
errorMessage is a String if a validation error happened and undefined otherwise.

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)