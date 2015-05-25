/**
 * @file
 * Type definitions for IDE parsers.
 *
 * These classes are not in use.
 */

/* eslint no-unused-vars: 0 */

'use strict';

/**
 * @class
 * @constructor
 */
function CompassDefaultArgs() {

  /**
   * @type {string[]}
   */
  this.require = null;

  /**
   * @type {string}
   */
  this.load = null;

  /**
   * @type {string}
   */
  this.loadAll = null;

  /**
   * @type {string}
   */
  this.importPath = null;

  /**
   * @type {boolean}
   */
  this.quiet = false;

  /**
   * @type {boolean}
   */
  this.trace = false;

  /**
   * @type {boolean}
   */
  this.boring = false;

  /**
   * @type {string}
   */
  this.config = null;

  /**
   * @type {string}
   */
  this.app = null;

  /**
   * @type {string}
   */
  this.appDir = null;

  /**
   * @type {string}
   */
  this.sassDir = null;

  /**
   * @type {string}
   */
  this.cssDir = null;

  /**
   * @type {string}
   */
  this.imagesDir = null;

  /**
   * @type {string}
   */
  this.javascriptDir = null;

  /**
   * @type {string}
   */
  this.fontsDir = null;

  /**
   * @type {string}
   */
  this.environment = null;

  /**
   * @type {string}
   */
  this.outputStyle = null;

  /**
   * @type {boolean}
   */
  this.relativeAssets = false;

  /**
   * @type {boolean}
   */
  this.noLineComments = false;

  /**
   * @type {string}
   */
  this.httpPath = null;

  /**
   * @type {string}
   */
  this.generatedImagesPath = null;

}

/**
 * @class
 * @extends CompassDefaultArgs
 * @constructor
 */
function CompassCleanArgs() {}

/**
 * @class
 * @extends CompassDefaultArgs
 * @constructor
 */
function CompassCompileArgs() {

  /**
   * @type {boolean}
   */
  this.sourceMap = false;

  /**
   * @type {boolean}
   */
  this.time = false;

  /**
   * @type {boolean|null}
   */
  this.debugInfo = null;

}

/**
 * @class
 * @extends CompassDefaultArgs
 * @constructor
 */
function CompassValidateArgs() {}

/**
 * @class
 * @constructor
 */
function CompassDefaultOptions() {

  /**
   * @type {CompassDefaultArgs}
   */
  this.args = {};

  /**
   * @type {string}
   */
  this.rubyExecutable = null;

  /**
   * @type {string}
   */
  this.bundleExecutable = 'bundle';

  /**
   * @type {boolean}
   */
  this.bundleExec = true;

  /**
   * @type {string}
   */
  this.compassExecutable = 'compass';

}

/**
 * @class
 * @extends CompassDefaultOptions
 * @constructor
 */
function CompassCleanOptions() {

  /**
   * @type {CompassCleanArgs}
   */
  this.args = {};

}

/**
 * @class
 * @extends CompassDefaultOptions
 * @constructor
 */
function CompassCompileOptions() {

  /**
   * @type {CompassCompileArgs}
   */
  this.args = {};

}

/**
 * @class
 * @extends CompassDefaultOptions
 * @constructor
 */
function CompassValidateOptions() {

  /**
   * @type {CompassValidateArgs}
   */
  this.args = {};

}
