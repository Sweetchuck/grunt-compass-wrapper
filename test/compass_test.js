/**
 * @file
 * Documentation missing.
 */

'use strict';

var grunt = require('grunt');
var compass = require('../tasks/lib/compass').init(grunt);

exports.compass = {
  buildArguments: function (test) {
    var schema = {
      triStateNull: {type: 'tri-state'},
      triStateTrue: {type: 'tri-state'},
      triStateFalse: {type: 'tri-state'}
    };
    var args = {
      flagTrue: true,
      flagFalse: false,
      triStateNull: null,
      triStateTrue: true,
      triStateFalse: false,
      stringNull: null,
      stringEmpty: '',
      stringFoo: 'bar',
      arrayEmpty: [],
      arrayFoo: ['foo', 'bar'],
      objectEmpty: {},
      objectFoo: {
        'foo-true': true,
        'foo-false': false
      }
    };
    var cliArgsExpected = [
      '--flag-true',
      '--tri-state-true',
      '--no-tri-state-false',
      '--string-empty',
      "''",
      '--string-foo',
      'bar',
      '--array-foo',
      'foo',
      '--array-foo',
      'bar',
      '--object-foo',
      'foo-true'
    ];
    var cliArgsActual = compass.buildArguments(args, schema);

    test.deepEqual(cliArgsActual, cliArgsExpected, 'compass.buildArguments works as expected.');

    test.done();
  }
};
