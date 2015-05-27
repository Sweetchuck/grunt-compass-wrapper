# grunt-compass-wrapper



<!-- toc -->

* [Build status](#build-status)
* [Install](#install)
  * [Install with [npm](npmjs.org)](#install-with-npmnpmjsorg)
* [Tasks](#tasks)
  * [compass-clean](#compass-clean)
  * [compass-compile](#compass-compile)
  * [compass-validate](#compass-validate)
* [Configuration](#configuration)
  * [options.rubyExecutable](#optionsrubyexecutable)
  * [options.bundleExecutable](#optionsbundleexecutable)
  * [options.bundleExec](#optionsbundleexec)
  * [options.compassExecutable](#optionscompassexecutable)
  * [options.args](#optionsargs)
  * [options.args.require](#optionsargsrequire)
  * [options.args.sourceMap](#optionsargssourcemap)
  * [options.args.debugInfo](#optionsargsdebuginfo)
  * [options.args.load](#optionsargsload)
  * [options.args.loadAll](#optionsargsloadall)
  * [options.args.importPath](#optionsargsimportpath)
  * [options.args.quiet](#optionsargsquiet)
  * [options.args.trace](#optionsargstrace)
  * [options.args.boring](#optionsargsboring)
  * [options.args.config](#optionsargsconfig)
  * [options.args.app](#optionsargsapp)
  * [options.args.appDir](#optionsargsappdir)
  * [options.args.sassDir](#optionsargssassdir)
  * [options.args.cssDir](#optionsargscssdir)
  * [options.args.imagesDir](#optionsargsimagesdir)
  * [options.args.javascriptDir](#optionsargsjavascriptdir)
  * [options.args.fontsDir](#optionsargsfontsdir)
  * [options.args.environment](#optionsargsenvironment)
  * [options.args.outputStyle](#optionsargsoutputstyle)
  * [options.args.relativeAssets](#optionsargsrelativeassets)
  * [options.args.noLineComments](#optionsargsnolinecomments)
  * [options.args.httpPath](#optionsargshttppath)
  * [options.args.generatedImagesPath](#optionsargsgeneratedimagespath)
  * [files](#files)
* [Flags](#flags)
  * [Flag quiet](#flag-quiet)
  * [Flag trace](#flag-trace)
  * [Flag force](#flag-force)
  * [Flag boring](#flag-boring)
  * [Flag development](#flag-development)
  * [Flag production](#flag-production)
  * [Flag nested](#flag-nested)
  * [Flag expanded](#flag-expanded)
  * [Flag compact](#flag-compact)
  * [Flag compressed](#flag-compressed)
  * [Flag relative-assets](#flag-relative-assets)
  * [Flag no-line-comments](#flag-no-line-comments)
* [Examples](#examples)
  * [Basic](#basic)
  * [Options, args and files](#options-args-and-files)
  * [Without bundle](#without-bundle)
  * [Custom args](#custom-args)
  * [Args and flags](#args-and-flags)
* [Author](#author)
* [Release History](#release-history)
* [License](#license)

<!-- toc stop -->


## Build status

[![Build Status: Linux](https://travis-ci.org/Sweetchuck/grunt-compass-wrapper.svg?branch=master)](https://travis-ci.org/Sweetchuck/grunt-compass-wrapper)

## Install

### Install with [npm](npmjs.org)

```bash
npm install grunt-compass-wrapper --save-dev
```


## Tasks

Every options is the same for for each tasks.


### compass-clean

Wrapper around the `$ compass clean` command.

Remove generated files and the sass cache.

**Configuration**

* options
  * [rubyExecutable](#optionsrubyexecutable)
  * [bundleExecutable](#optionsbundleexecutable)
  * [bundleExec](#optionsbundleexec)
  * [compassExecutable](#optionscompassexecutable)
  * [args](#optionsargs)
    * [load](#optionsargsload)
    * [loadAll](#optionsargsloadall)
    * [importPath](#optionsargsimportpath)
    * [quiet](#optionsargsquiet)
    * [trace](#optionsargstrace)
    * [boring](#optionsargsboring)
    * [config](#optionsargsconfig)
    * [app](#optionsargsapp)
    * [appDir](#optionsargsappdir)
    * [sassDir](#optionsargssassdir)
    * [cssDir](#optionsargscssdir)
    * [imagesDir](#optionsargsimagesdir)
    * [javascriptDir](#optionsargsjavascriptdir)
    * [fontsDir](#optionsargsfontsdir)
    * [environment](#optionsargsenvironment)
    * [outputStyle](#optionsargsoutputstyle)
    * [relativeAssets](#optionsargsrelativeassets)
    * [noLineComments](#optionsargsnolinecomments)
    * [httpPath](#optionsargshttppath)
    * [generatedImagesPath](#optionsargsgeneratedimagespath)
* [files](#files)

With the default options the
```bash
grunt compass-clean
```

is equivalent to
```bash
bundle exec compass clean
```


### compass-compile

Wrapper around the `$ compass compile` command.

Compile Sass stylesheets to CSS.

**Configuration**

* options
  * [rubyExecutable](#optionsrubyexecutable)
  * [bundleExecutable](#optionsbundleexecutable)
  * [bundleExec](#optionsbundleexec)
  * [compassExecutable](#optionscompassexecutable)
  * [args](#optionsargs)
    * [sourceMap](#optionsargsourcemap)
    * [debugInfo](#optionsargsdebuginfo)
    * [require](#optionsargsrequire)
    * [load](#optionsargsload)
    * [loadAll](#optionsargsloadall)
    * [importPath](#optionsargsimportpath)
    * [quiet](#optionsargsquiet)
    * [trace](#optionsargstrace)
    * [boring](#optionsargsboring)
    * [config](#optionsargsconfig)
    * [app](#optionsargsapp)
    * [appDir](#optionsargsappdir)
    * [sassDir](#optionsargssassdir)
    * [cssDir](#optionsargscssdir)
    * [imagesDir](#optionsargsimagesdir)
    * [javascriptDir](#optionsargsjavascriptdir)
    * [fontsDir](#optionsargsfontsdir)
    * [environment](#optionsargsenvironment)
    * [outputStyle](#optionsargsoutputstyle)
    * [relativeAssets](#optionsargsrelativeassets)
    * [noLineComments](#optionsargsnolinecomments)
    * [httpPath](#optionsargshttppath)
    * [generatedImagesPath](#optionsargsgeneratedimagespath)
* [files](#files)

With the default options the
```bash
grunt compass-compile
```

is equivalent to
```bash
bundle exec compass compile
```


### compass-validate

Wrapper around the `$ compass validate` command.

Validate your generated css.

**Supported arguments**

* options
  * [args](#optionsargs)
    * [require](#optionsargsrequire)
    * [load](#optionsargsload)
    * [loadAll](#optionsargsloadall)
    * [importPath](#optionsargsimportpath)
    * [quiet](#optionsargsquiet)
    * [trace](#optionsargstrace)
    * [boring](#optionsargsboring)
    * [config](#optionsargsconfig)
    * [app](#optionsargsapp)
    * [appDir](#optionsargsappdir)
    * [sassDir](#optionsargssassdir)
    * [cssDir](#optionsargscssdir)
    * [imagesDir](#optionsargsimagesdir)
    * [javascriptDir](#optionsargsjavascriptdir)
    * [fontsDir](#optionsargsfontsdir)
    * [environment](#optionsargsenvironment)
    * [outputStyle](#optionsargsoutputstyle)
    * [relativeAssets](#optionsargsrelativeassets)
    * [noLineComments](#optionsargsnolinecomments)
    * [httpPath](#optionsargshttppath)
    * [generatedImagesPath](#optionsargsgeneratedimagespath)
* [files](#files)

With the default options the
```bash
grunt compass-validate
```

is equivalent to
```bash
bundle exec compass validate
```


## Configuration

### options.rubyExecutable

Type: `String`

Default value: `''`


### options.bundleExecutable

Type: `String`

Default value: `'bundle'`


### options.bundleExec

Type: `Boolean`

Default value: `true`


### options.compassExecutable

Type: `String`

Default value: `'compass'`


### options.args

Type: `Object`

Default value: `{}`

All argument is same as the CLI counterpart.
You can check them with the `$ compass {clean|compile|validate} --help` command.

### options.args.require

Type: `Object`

Default value: `{}`

Key-value pairs where the key is the desired library and the value is `false` or
`true`.

```javascript
grunt.initConfig({
  'compass-compile': {
    options: {
      args: {
        require: {
          'path/to/gem-01': true,
          'path/to/gem-02': true,
          'path/to/gem-03': true
        }
      }
    },
    'my-target-01': {
      options: {
        args: {
          require: {
            'path/to/gem-02': false
          }
        }
      }
    }
  }
});
```


```bash
compass-compile --require 'path/to/gem-01' --require 'path/to/gem-03'
```


### options.args.sourceMap

Type: `Boolean`

Default value: `null`


### options.args.debugInfo

Type: `Boolean`

Default value: `null`


### options.args.load

Type: `String`

Default value: `''`


### options.args.loadAll

Type: `String`

Default value: `''`


### options.args.importPath

Type: `String`

Default value: `''`


### options.args.quiet

Type: `Boolean`

Default value: `false`


### options.args.trace

Type: `Boolean`

Default value: `false`


### options.args.boring

Type: `Boolean`

Default value: `false`


### options.args.config

Type: `String`

Default value: `''`


### options.args.app

Type: `String`

Default value: `''`


### options.args.appDir

Type: `String`

Default value: `''`


### options.args.sassDir

Type: `String`

Default value: `''`


### options.args.cssDir

Type: `String`

Default value: `''`


### options.args.imagesDir

Type: `String`

Default value: `''`


### options.args.javascriptDir

Type: `String`

Default value: `''`


### options.args.fontsDir

Type: `String`

Default value: `''`


### options.args.environment

Type: `String`

Default value: `''`


### options.args.outputStyle

Type: `String`

Default value: `''`


### options.args.relativeAssets

Type: `Boolean`

Default value: `false`


### options.args.noLineComments

Type: `Boolean`

Default value: `false`


### options.args.httpPath

Type: `String`

Default value: `''`


### options.args.generatedImagesPath

Type: `String`

Default value: `''`


### files

For more information see the Grunt documentation [Configuring tasks/files](http://gruntjs.com/configuring-tasks#files)


```bash
grunt compass-compile:my-01
echo 'is equivalent to'
/home/foo/.rvm/rubies/ruby-2.1.3/bin/ruby /home/foo/.rvm/gems/ruby-2.1.3/bin/bundle exec compass compile --boring
```

```bash
grunt compass-compile:my-02
echo 'is equivalent to'
bundle exec compass compile --environment production
```


## Flags

You can modify the arguments by [Flags](http://gruntjs.com/api/inside-tasks#this.flags)


### Flag quiet

Override the value of [options.args.quiet](#optionsargsquiet) argument with `true`.


### Flag trace

Override the value of [options.args.trace](#optionsargstrace) argument with `true`.


### Flag force

Override the value of [options.args.force](#optionsargsforce) argument with `true`.

### Flag boring


Override the value of [options.args.boring](#optionsargsboring) argument with `true`.


### Flag development

Override the value of [options.args.environment](#optionsargsenvironment) argument with `'development'`.


### Flag production

Override the value of [options.args.environment](#optionsargsenvironment) argument with `'production'`.


### Flag nested

Override the value of [options.args.outputStyle](#optionsargsoutputstyle) argument with `'nested'`.


### Flag expanded

Override the value of [options.args.outputStyle](#optionsargsoutputstyle) argument with `'expanded'`.


### Flag compact

Override the value of [options.args.outputStyle](#optionsargsoutputstyle) argument with `'compact'`.


### Flag compressed

Override the value of [options.args.outputStyle](#optionsargsoutputstyle) argument with `'compressed'`.


### Flag relative-assets

Override the value of [options.args.relativeAssets](#optionsargsrelative-assets) argument with `true`.


### Flag no-line-comments

Override the value of [options.args.noLineComments](#optionsargsno-line-comments) argument with `true`.


## Examples

### Basic

```javascript
require('jit-grunt')(
  grunt,
  // Mapping.
  {
    'compass-clean': 'grunt-compass-wrapper',
    'compass-compile': 'grunt-compass-wrapper',
    'compass-validate': 'grunt-compass-wrapper'
  }
);

grunt.initConfig({
  'compass-clean': {
    'my-01': {
      files: {
        src: ['./path/to/dir/config.rb']
      }
    }
  },
  'compass-compile': {
    'my-01': {
      files: {
        src: ['./path/to/dir/config.rb']
      }
    }
  },
  'compass-validate': {
    'my-01': {
      files: {
        src: ['./path/to/dir/config.rb']
      }
    }
  }
});

grunt.registerTask('scss-compile', [
  'compass-clean',
  'compass-compile',
  'compass-validate'
]);
```

```bash
grunt scss-compile
echo 'is equivalent to'
bundle exec compass clean
bundle exec compass compile
bundle exec compass validate
```

### Options, args and files
```javascript
grunt.initConfig({
  'compass-compile': {
    options: {
      rubyExecutable: '/home/foo/.rvm/rubies/ruby-2.1.3/bin/ruby',
      bundleExecutable: '/home/foo/.rvm/gems/ruby-2.1.3/bin/bundle',
      args: {
        boring: true
      }
    },
    'my-01': {
      files: {
        src: ['**/config.rb']
      }
    },
    'my-02': {
      options: {
        rubyExecutable: '',
        bundleExecutable: '',
        args: {
          boring: false,
          environment: 'production'
        }
      },
      files: {
        src: ['**/config.rb']
      }
    }
  }
});
```


### Without bundle

```javascript
grunt.initConfig({
  'compass-compile': {
    options: {
      bundleExec: false
    },
    'my-01': {
      files: {
        src: ['./path/to/dir/config.rb']
      }
    }
  }
});
```

```bash
grunt compass-compile
echo 'is equivalent to'
compass compile
```


### Custom args

```javascript
grunt.initConfig({
  'compass-compile': {
    options: {
      args: {
        environment: 'development',
        outputStyle: 'nested'
      }
    },
    'my-01': {
      files: {
        src: ['./path/to/dir/config.rb']
      }
    }
  }
});
```

```bash
grunt compass-compile
echo 'is equivalent to'
bundle exec compass compile --environment 'development' --output-style 'nested'
```


### Args and flags

```javascript
grunt.initConfig({
  'compass-compile': {
    options: {
      args: {
        environment: 'development',
        outputStyle: 'nested'
      }
    },
    'my-01': {
      files: {
        src: ['./path/to/dir/config.rb']
      }
    }
  }
});

grunt.registerTask('scss-compile-prod', [
  'compass-compile:my-01:production:compressed'
]);
```

```bash
grunt compass-compile:my-01
echo 'is equivalent to'
bundle exec compass compile --environment 'development' --output-style 'nested'
```

```bash
grunt compass-compile:my-01:production:compressed
echo 'is equivalent to'
grunt scss-compile-prod
echo 'is equivalent to'
bundle exec compass compile --environment 'production' --output-style 'compressed'
```


## Author

**Andor Dávid**
* [GitHub](https://github.com/Sweetchuck)
* [Twitter](http://twitter.com/andor_david)
* [LinkedIn](https://hu.linkedin.com/pub/andor-dávid/5b/484/b83)


## Release History

* **v0.0.5** - 2015-05-24
  * Rename a "options.arguments" to "options.args".
* **v0.0.4** - 2015-05-24
  * Improved documentation
* **v0.0.3** - 2015-05-22
  * Nobody knows
* **v0.0.2** - 2015-05-18
  * Flag support



## License

Copyright (c) 2015 Andor Dávid, contributors.  


***

_This file was generated by [grunt-verb](https://github.com/assemble/grunt-verb) on May 27, 2015._