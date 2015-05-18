/**
 * @file
 * Grunt plugin - Wrapper around the `compass` CLI tool.
 */

'use strict';

module.exports = function (grunt) {

  var compass = require('./lib/compass').init(grunt);

  grunt.registerMultiTask('compass-clean', 'Run `compass clean ...` command', function () {
    var options = this.options(compass.defaultOptions.clean);

    compass.configValidate(options);
    compass.execClean(options, this.files);
  });

  grunt.registerMultiTask('compass-compile', 'Run `compass compile ...` command', function () {
    var options = this.options(compass.defaultOptions.compile);

    compass.configValidate(options);
    compass.execCompile(options, this.files);
  });

  grunt.registerMultiTask('compass-validate', 'Run `compass validate ...` command', function () {
    var options = this.options(compass.defaultOptions.validate);

    compass.configValidate(options);
    compass.execValidate(options, this.files);
  });
};
