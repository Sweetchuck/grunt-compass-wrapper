/**
 * @file
 * Documentation missing.
 */

/**
 * @typedef {Object} CompassDefaultArguments
 * @property {String[]} require
 * @property {String} load
 * @property {String} loadAll
 * @property {String} importPath
 * @property {Boolean} quiet
 * @property {Boolean} trace
 * @property {Boolean} boring
 * @property {String} config
 * @property {String} app
 * @property {String} appDir
 * @property {String} sassDir
 * @property {String} cssDir
 * @property {String} imagesDir
 * @property {String} javascriptDir
 * @property {String} fontsDir
 * @property {String} environment
 * @property {String} outputStyle
 * @property {Boolean} relativeAssets
 * @property {Boolean} noLineComments
 * @property {String} httpPath
 * @property {String} generatedImagesPath
 */

/**
 * @typedef {Object} CompassDefaultOptions
 * @property {CompassDefaultArguments} arguments
 * @property {String} rubyExecutable
 * @property {String} bundleExecutable
 * @property {Boolean} bundleExec
 * @property {String} compassExecutable
 */

/**
 * @typedef {Object} CompassDefaultConfig
 * @property {CompassDefaultOptions} options
 * @property {String} cwd
 */

/**
 * @typedef {CompassDefaultArguments} CompassCleanArguments
 */

/**
 * @typedef {CompassDefaultOptions} CompassCleanOptions
 * @property {CompassCleanArguments} arguments
 */

/**
 * @typedef {CompassDefaultConfig} CompassCleanConfig
 * @property {CompassCleanOptions} options
 */

/**
 * @typedef {CompassDefaultArguments} CompassCompileArguments
 * @property {Boolean} sourceMap
 *   Allowed values are:
 *   - null
 *   - true
 *   - false
 * @property {Boolean} time
 * @property {Boolean} debugInfo
 *   Allowed values are:
 *   - null
 *   - true
 *   - false
 */

/**
 * @typedef {CompassDefaultOptions} CompassCompileOptions
 * @property {CompassCompileArguments} arguments
 */

/**
 * @typedef {CompassDefaultConfig} CompassCompileConfig
 * @property {CompassCompileOptions} options
 */

/**
 * @typedef {CompassDefaultArguments} CompassValidateArguments
 */

/**
 * @typedef {CompassDefaultOptions} CompassValidateOptions
 * @property {CompassValidateArguments} arguments
 */

/**
 * @typedef {CompassDefaultConfig} CompassValidateConfig
 * @property {CompassValidateOptions} options
 */

/**
 * @param grunt
 * @return {{}}
 */
exports.init = function (grunt) {
  'use strict';

  var deepExtend = require('deep-extend');
  var binVersionCheck = require('bin-version-check');

  var minimumCompassVersion = '0.12.2';

  var argumentsSchema = {
    clean: {},
    compile: {
      sourceMap: {type: 'tri-state', cliName: 'sourcemap'},
      debugInfo: {type: 'tri-state'}
    },
    validate: {}
  };

  var defaultOptions = {
    clean: {
      arguments: {},
      rubyExecutable: null,
      bundleExecutable: 'bundle',
      bundleExec: true,
      compassExecutable: 'compass'
    },
    compile: {
      arguments: {},
      rubyExecutable: null,
      bundleExecutable: 'bundle',
      bundleExec: true,
      compassExecutable: 'compass'
    },
    validate: {
      arguments: {},
      rubyExecutable: null,
      bundleExecutable: 'bundle',
      bundleExec: true,
      compassExecutable: 'compass'
    }
  };

  var defaultConfig = {
    clean: {
      options: {},
      cwd: '.'
    },
    compile: {
      options: {},
      cwd: '.'
    },
    validate: {
      options: {},
      cwd: '.'
    }
  };

  /**
   * @param {String} string
   *
   * @return {String}
   */
  function camelCaseToLowerHyphenCase(string) {
    return string
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }

  /**
   * @param {String} string
   *
   * @return {String}
   */
  function escapeShellArgument(string) {
    // @todo Escape shell argument.
    return !string ? "''" : string;
  }

  /**
   * @param {CompassDefaultConfig} config
   * @param {Object} command
   */
  function commandRubyAndBundle(config, command) {
    if (config.options.bundleExecutable && config.options.bundleExec) {
      command.args.unshift(command.cmd);
      command.args.unshift('exec');
      command.cmd = config.options.bundleExecutable;
    }

    if (config.options.rubyExecutable) {
      command.args.unshift(command.cmd);
      command.cmd = config.options.rubyExecutable;
    }
  }

  /**
   * @param {CompassDefaultConfig} config
   * @param {string} action
   */
  function configValidate(config, action) {
    binVersionCheck(config.options.compassExecutable, '>=' + minimumCompassVersion, function (error) {
      if (error) {
        grunt.warn(error);
      }
    });
  }

  var exports = {};

  /**
   * @param {Object} items
   * @param {String} [property]
   *   Default is "enabled"
   *
   * @return {String[]}
   *   Keys from items object.
   */
  exports.filterEnabled = function (items, property) {
    var enabledItems = [];

    if (typeof property === 'undefined') {
      property = 'enabled';
    }

    for (var key in items) {
      if (items.hasOwnProperty(key)) {
        if (
          (items[key] === true)
          || (
            typeof items[key] === 'object'
            && items[key].hasOwnProperty(property)
            && items[key][property] === true
          )
        ) {
          enabledItems.push(key);
        }
      }
    }

    return enabledItems;
  };

  /**
   * @param {CompassDefaultArguments} args
   * @param {Object} schema
   *
   * @return {String[]}
   */
  exports.buildArguments = function (args, schema) {
    var cliArgs = [];
    var name;
    var s;
    var i;
    var filtered;

    for (name in args) {
      if (args.hasOwnProperty(name)) {
        if (args[name] === null) {
          continue;
        }

        s = schema.hasOwnProperty(name) ? schema[name] : {type: typeof args[name]};
        s.cliName = s.cliName || camelCaseToLowerHyphenCase(name);
        if (s.type === 'object' && Array.isArray(args[name])) {
          s.type = 'array';
        }

        switch (s.type) {
          case 'boolean':
            if (args[name]) {
              cliArgs.push('--' + s.cliName);
            }
            break;

          case 'tri-state':
            if (args[name]) {
              cliArgs.push('--' + s.cliName);
            }
            else {
              cliArgs.push('--no-' + s.cliName);
            }
            break;

          case 'string':
            cliArgs.push('--' + s.cliName);
            cliArgs.push(escapeShellArgument(args[name]));
            break;

          case 'array':
            for (i = 0; i < args[name].length; i++) {
              cliArgs.push('--' + s.cliName);
              cliArgs.push(escapeShellArgument(args[name][i]));
            }
            break;

          case 'object':
            filtered = exports.filterEnabled(args[name]);
            for (i = 0; i < filtered.length; i++) {
              cliArgs.push('--' + s.cliName);
              cliArgs.push(escapeShellArgument(filtered[i]));
            }
            break;
        }
      }
    }

    return cliArgs;
  };

  exports.run = function (self, action) {
    /**
     * @type CompassDefaultConfig
     */
    var config = deepExtend({}, defaultConfig[action], self.data);

    config.options = deepExtend(
      {},
      self.options(defaultOptions[action]),
      config.options
    );

    configValidate(config, action);

    var command = {
      cmd: config.options.compassExecutable,
      args: exports.buildArguments(config.options.arguments, argumentsSchema[action]),
      opts: {
        cwd: config.cwd
      }
    };

    command.args.unshift(action);

    commandRubyAndBundle(config, command);

    grunt.log.writeln('Current working directory is: ' + command.opts.cwd.blue);
    grunt.log.writeln('Execute: ' + [command.cmd].concat(command.args).join(' ').blue);

    var done = grunt.task.current.async();
    var myProcess = grunt.util.spawn(
      command,
      function (error, result, code) {
        if (code !== 0) {
          return grunt.fail.warn(error);
        }

        done(error);
      }
    );

    myProcess.stdout.pipe(process.stdout);
    myProcess.stderr.pipe(process.stderr);
  };

  return exports;
};
