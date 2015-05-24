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
 *
 * @return {{}}
 */
exports.init = function (grunt) {
  'use strict';

  var binVersionCheck = require('bin-version-check');
  var escapeShellArg = require('any-shell-escape');
  var S = require('string');
  var path = require('path');

  var exports = {};

  exports.minimumCompassVersion = '0.12.2';

  exports.argumentsSchema = {
    clean: {},
    compile: {
      sourceMap: {type: 'tri-state', cliName: 'sourcemap'},
      debugInfo: {type: 'tri-state'}
    },
    validate: {}
  };

  exports.flagsSchema = {
    quiet: {argument: 'quiet', value: true},
    trace: {argument: 'trace', value: true},
    force: {argument: 'force', value: true},
    boring: {argument: 'boring', value: true},
    development: {argument: 'environment', value: 'development'},
    production: {argument: 'environment', value: 'production'},
    nested: {argument: 'outputStyle', value: 'nested'},
    expanded: {argument: 'outputStyle', value: 'expanded'},
    compact: {argument: 'outputStyle', value: 'compact'},
    compressed: {argument: 'outputStyle', value: 'compressed'},
    'relative-assets': {argument: 'relativeAssets', value: true},
    'no-line-comments': {argument: 'noLineComments', value: true}
  };

  exports.defaultOptions = {
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

  exports.msgPattern = {
    noMatch: S('There is no match to the following patterns: {{patterns}}'),
    currentDirectory: S('Current working directory is: {{cwd}}'),
    command: S('Execute: {{cmd}}')
  };

  /**
   * @param {String} string
   *
   * @return {String}
   */
  exports.escapeShellArgument = function (string) {
    string = string.toString();

    if (!string.length) {
      return "''";
    }

    return escapeShellArg(string);
  };

  /**
   * @param {CompassDefaultOptions} options
   * @param {Object} flags
   * @param {Object} flagsSchema
   *
   * @return {{}}
   */
  exports.overrideOptionsByFlags = function (options, flags, flagsSchema) {
    if (typeof flagsSchema === 'undefined') {
      flagsSchema = exports.flagsSchema;
    }

    var flagName;
    for (flagName in flagsSchema) {
      if (flagsSchema.hasOwnProperty(flagName) && flags.hasOwnProperty(flagName)) {
        options['arguments'][flagsSchema[flagName].argument] = flagsSchema[flagName].value;
      }
    }

    return exports;
  };

  /**
   * @param {CompassDefaultOptions} options
   */
  exports.validateOptions = function (options) {
    binVersionCheck(options.compassExecutable, '>=' + exports.minimumCompassVersion, function (error) {
      if (error) {
        grunt.warn(error);
      }
    });

    return exports;
  };

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

        s = schema.hasOwnProperty(name) ? schema[name] : {};
        s.type = s.type || (typeof args[name]);
        s.cliName = s.cliName || S(name).dasherize().s;
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
          case 'number':
            cliArgs.push('--' + s.cliName);
            cliArgs.push(exports.escapeShellArgument(args[name]));
            break;

          case 'array':
            for (i = 0; i < args[name].length; i++) {
              cliArgs.push('--' + s.cliName);
              cliArgs.push(exports.escapeShellArgument(args[name][i]));
            }
            break;

          case 'object':
            filtered = exports.filterEnabled(args[name]);
            for (i = 0; i < filtered.length; i++) {
              cliArgs.push('--' + s.cliName);
              cliArgs.push(exports.escapeShellArgument(filtered[i]));
            }
            break;
        }
      }
    }

    return cliArgs;
  };

  /**
   * @param {Array} fileDefinitions
   *
   * @return {String[]}
   */
  exports.workingDirectories = function (fileDefinitions) {
    var directories = [];
    var directory;

    fileDefinitions.forEach(function (fileDefinition) {
      if (fileDefinition.src.length === 0) {
        grunt.log.warn(
          exports.msgPattern
            .noMatch
            .template({patterns: fileDefinition.orig.src.join(', ')})
            .s
            .yellow
        );

        return;
      }

      fileDefinition.src.forEach(function (fileName) {
        if (grunt.file.isDir(fileName)) {
          directory = fileName;
        }
        else {
          directory = path.dirname(fileName) || '.';
        }

        if (directories.indexOf(directory) === -1) {
          directories.push(directory);
        }
      });
    });

    return directories;
  };

  /**
   * @param {String} action
   * @param {CompassDefaultOptions} options
   *
   * @return {Object}
   */
  exports.createCommand = function (action, options) {
    var command = {
      cmd: options.compassExecutable,
      args: [],
      opts: {
        cwd: null
      }
    };

    if (options.bundleExecutable && options.bundleExec) {
      command.args.unshift(command.cmd);
      command.args.unshift('exec');
      command.cmd = options.bundleExecutable;
    }

    if (options.rubyExecutable) {
      command.args.unshift(command.cmd);
      command.cmd = options.rubyExecutable;
    }

    command.args.push(action);
    command.args = command.args.concat(exports.buildArguments(options.arguments, exports.argumentsSchema[action]));

    return command;
  };

  /**
   * @param {CompassCleanOptions} options
   * @param {Array} fileDefinitions
   */
  exports.execClean = function (options, fileDefinitions) {
    exports.exec('clean', options, fileDefinitions);
  };

  /**
   * @param {CompassCompileOptions} options
   * @param {Array} fileDefinitions
   */
  exports.execCompile = function (options, fileDefinitions) {
    exports.exec('compile', options, fileDefinitions);
  };

  /**
   * @param {CompassValidateOptions} options
   * @param {Array} fileDefinitions
   */
  exports.execValidate = function (options, fileDefinitions) {
    exports.exec('validate', options, fileDefinitions);
  };

  /**
   * @param {String} action
   * @param {CompassDefaultOptions} options
   * @param {Array} fileDefinitions
   */
  exports.exec = function (action, options, fileDefinitions) {
    var directories = exports.workingDirectories(fileDefinitions);
    var command = exports.createCommand(action, options);
    var i;

    for (i = 0; i < directories.length; i++) {
      command.opts.cwd = directories[i];

      grunt.log.writeln(exports.msgPattern.currentDirectory.template({
        cwd: command.opts.cwd.blue
      }).s);

      grunt.log.writeln(exports.msgPattern.command.template({
        cmd: [command.cmd].concat(command.args).join(' ').blue
      }).s);

      exports.run(command);
    }
  };

  exports.run = function (command) {
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
