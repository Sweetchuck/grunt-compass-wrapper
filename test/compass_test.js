/**
 * @file
 * Documentation missing.
 */

'use strict';

var grunt = require('grunt');
var compass = require('../tasks/lib/compass').init(grunt);

exports.compass = {

  overrideOptionsByFlags: function (test) {
    test.expect(3);

    var options;
    var expected;

    options = {
      arguments: {}
    };
    expected = {
      arguments: {}
    };
    compass.overrideOptionsByFlags(
      options,
      {}
    );
    test.deepEqual(options, expected, '@todo');

    options = {
      arguments: {
        boring: false
      }
    };
    expected = {
      arguments: {
        boring: false
      }
    };
    compass.overrideOptionsByFlags(
      options,
      {}
    );
    test.deepEqual(options, expected, '@todo');

    options = {
      arguments: {
        boring: false
      }
    };
    expected = {
      arguments: {
        boring: true
      }
    };
    compass.overrideOptionsByFlags(
      options,
      {
        boring: true
      }
    );
    test.deepEqual(options, expected, '@todo');

    test.done();
  },

  filterEnabled: function (test) {
    test.expect(6);

    test.deepEqual(
      compass.filterEnabled({}),
      [],
      '@todo'
    );

    test.deepEqual(
      compass.filterEnabled(
        {
          item1: true,
          item2: true
        }
      ),
      [
        'item1',
        'item2'
      ],
      '@todo'
    );

    test.deepEqual(
      compass.filterEnabled(
        {
          item1: true,
          item2: false
        }
      ),
      [
        'item1'
      ],
      '@todo'
    );

    test.deepEqual(
      compass.filterEnabled(
        {
          item1: false,
          item2: true
        }
      ),
      [
        'item2'
      ],
      '@todo'
    );

    test.deepEqual(
      compass.filterEnabled(
        {
          item1: {enabled: true, status: false},
          item2: {enabled: false, status: true}
        },
        'enabled'
      ),
      [
        'item1'
      ],
      '@todo'
    );

    test.deepEqual(
      compass.filterEnabled(
        {
          item1: {enabled: true, status: false},
          item2: {enabled: false, status: true}
        },
        'status'
      ),
      [
        'item2'
      ],
      '@todo'
    );

    test.done();
  },

  buildArguments: function (test) {
    test.expect(1);

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
      numberNegative: -42,
      numberZero: 0,
      numberPositive: 42,
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
      '--number-negative',
      '-42',
      '--number-zero',
      '0',
      '--number-positive',
      '42',
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
  },

  workingDirectories: function (test) {
    test.expect(4);

    test.deepEqual(
      compass.workingDirectories([]),
      [],
      '@todo'
    );

    test.deepEqual(
      compass.workingDirectories([
        {src: [], orig: {src: []}}
      ]),
      [],
      '@todo'
    );

    test.deepEqual(
      compass.workingDirectories([
        {src: ['dir1/readme.txt', 'index.php']},
        {src: ['dir1/index.html']}
      ]),
      ['dir1', '.'],
      '@todo'
    );

    test.deepEqual(
      compass.workingDirectories([
        {src: ['dir1/readme.txt']},
        {src: ['dir1/readme.md', 'dir2/index.html']}
      ]),
      ['dir1', 'dir2'],
      '@todo'
    );

    test.done();
  },

  createCommand: function (test) {
    test.expect(4);

    var action = 'clean';

    var options = {
      arguments: {},
      rubyExecutable: null,
      bundleExecutable: 'bundle',
      bundleExec: true,
      compassExecutable: 'compass'
    };

    var commandExpected = {
      cmd: 'bundle',
      args: ['exec', 'compass', 'clean'],
      opts: {
        cwd: null
      }
    };

    test.deepEqual(
      compass.createCommand(action, options),
      commandExpected,
      'compass.createCommand works as expected.'
    );

    options = {
      arguments: {},
      rubyExecutable: null,
      bundleExecutable: 'bundle',
      bundleExec: false,
      compassExecutable: 'compass'
    };
    commandExpected = {
      cmd: 'compass',
      args: ['clean'],
      opts: {
        cwd: null
      }
    };
    test.deepEqual(
      compass.createCommand(action, options),
      commandExpected,
      'compass.createCommand works as expected.'
    );

    options = {
      arguments: {},
      rubyExecutable: '/usr/bin/ruby',
      bundleExecutable: '/usr/bin/bundle',
      bundleExec: true,
      compassExecutable: '/usr/bin/compass'
    };
    commandExpected = {
      cmd: '/usr/bin/ruby',
      args: ['/usr/bin/bundle', 'exec', '/usr/bin/compass', 'clean'],
      opts: {
        cwd: null
      }
    };
    test.deepEqual(
      compass.createCommand(action, options),
      commandExpected,
      'compass.createCommand works as expected.'
    );

    options = {
      arguments: {},
      rubyExecutable: '/usr/bin/ruby',
      bundleExecutable: '/usr/bin/bundle',
      bundleExec: false,
      compassExecutable: '/usr/bin/compass'
    };
    commandExpected = {
      cmd: '/usr/bin/ruby',
      args: ['/usr/bin/compass', 'clean'],
      opts: {
        cwd: null
      }
    };
    test.deepEqual(
      compass.createCommand(action, options),
      commandExpected,
      'compass.createCommand works as expected.'
    );

    test.done();
  }

};
