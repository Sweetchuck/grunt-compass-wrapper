/**
 * @file
 * Grunt plugin - Wrapper around the `compass` CLI tool.
 */

'use strict';

module.exports = function (grunt) {
  var compass = require('./lib/compass').init(grunt);

  grunt.registerMultiTask('compass-clean', 'Run `compass clean ...` command', function () {
    compass.run(this, 'clean');
  });

  grunt.registerMultiTask('compass-compile', 'Run `compass compile ...` command', function () {
    compass.run(this, 'compile');
  });

  grunt.registerMultiTask('compass-validate', 'Run `compass validate ...` command', function () {
    compass.run(this, 'validate');
  });
};
