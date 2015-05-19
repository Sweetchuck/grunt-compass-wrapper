/**
 * @file
 * Grunt plugin - Wrapper around the `compass` CLI tool.
 *
 * @todo Support the this.flags.
 */

'use strict';

module.exports = function (grunt) {
  var compass = require('./lib/compass').init(grunt);

  grunt.registerMultiTask('compass-clean', 'Run `compass clean ...` command', function () {
    var options = this.options(compass.defaultOptions.clean);

    compass.validateOptions(options);
    compass.execClean(options, this.files);
  });

  grunt.registerMultiTask('compass-compile', 'Run `compass compile ...` command', function () {
    var options = this.options(compass.defaultOptions.compile);

    compass.validateOptions(options);
    compass.execCompile(options, this.files);
  });

  grunt.registerMultiTask('compass-validate', 'Run `compass validate ...` command', function () {
    var options = this.options(compass.defaultOptions.validate);

    compass.validateOptions(options);
    compass.execValidate(options, this.files);
  });
};
