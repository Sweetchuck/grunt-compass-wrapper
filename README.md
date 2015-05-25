# grunt-compass-wrapper



<!-- toc -->

* [Build status](#build-status)
* [Install](#install)
  * [Install with [npm](npmjs.org)](#install-with-npmnpmjsorg)
* [Tasks](#tasks)
  * [compass-clean](#compass-clean)
  * [compass-compile](#compass-compile)
  * [compass-validate](#compass-validate)
* [Options](#options)
  * [rubyExecutable](#rubyexecutable)
  * [bundleExecutable](#bundleexecutable)
  * [bundleExec](#bundleexec)
  * [compassExecutable](#compassexecutable)
  * [args](#args)
* [Args](#args)
  * [require](#require)
  * [sourceMap](#sourcemap)
  * [debugInfo](#debuginfo)
  * [load](#load)
  * [loadAll](#loadall)
  * [importPath](#importpath)
  * [quiet](#quiet)
  * [trace](#trace)
  * [boring](#boring)
  * [config](#config)
  * [app](#app)
  * [appDir](#appdir)
  * [sassDir](#sassdir)
  * [cssDir](#cssdir)
  * [imagesDir](#imagesdir)
  * [javascriptDir](#javascriptdir)
  * [fontsDir](#fontsdir)
  * [environment](#environment)
  * [outputStyle](#outputstyle)
  * [relativeAssets](#relativeassets)
  * [noLineComments](#nolinecomments)
  * [httpPath](#httppath)
  * [generatedImagesPath](#generatedimagespath)
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

**Supported arguments**

* [require](#require)
* [load](#load)
* [loadAll](#loadall)
* [importPath](#importpath)
* [quiet](#quiet)
* [trace](#trace)
* [boring](#boring)
* [config](#config)
* [app](#app)
* [appDir](#appdir)
* [sassDir](#sassdir)
* [cssDir](#cssdir)
* [imagesDir](#imagesdir)
* [javascriptDir](#javascriptdir)
* [fontsDir](#fontsdir)
* [environment](#environment)
* [outputStyle](#outputstyle)
* [relativeAssets](#relativeassets)
* [noLineComments](#nolinecomments)
* [httpPath](#httppath)
* [generatedImagesPath](#generatedimagespath)

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

**Supported arguments**

* [sourceMap](#sourcemap)
* [debugInfo](#debuginfo)
* [require](#require)
* [load](#load)
* [loadAll](#loadall)
* [importPath](#importpath)
* [quiet](#quiet)
* [trace](#trace)
* [boring](#boring)
* [config](#config)
* [app](#app)
* [appDir](#appdir)
* [sassDir](#sassdir)
* [cssDir](#cssdir)
* [imagesDir](#imagesdir)
* [javascriptDir](#javascriptdir)
* [fontsDir](#fontsdir)
* [environment](#environment)
* [outputStyle](#outputstyle)
* [relativeAssets](#relativeassets)
* [noLineComments](#nolinecomments)
* [httpPath](#httppath)
* [generatedImagesPath](#generatedimagespath)

With the default options the
```bash
grunt compass-compile
```

is equivalent to
```bash
bundle exec compass complie
```


### compass-validate

Wrapper around the `$ compass validate` command.

Validate your generated css.

**Supported arguments**

* [require](#require)
* [load](#load)
* [loadAll](#loadall)
* [importPath](#importpath)
* [quiet](#quiet)
* [trace](#trace)
* [boring](#boring)
* [config](#config)
* [app](#app)
* [appDir](#appdir)
* [sassDir](#sassdir)
* [cssDir](#cssdir)
* [imagesDir](#imagesdir)
* [javascriptDir](#javascriptdir)
* [fontsDir](#fontsdir)
* [environment](#environment)
* [outputStyle](#outputstyle)
* [relativeAssets](#relativeassets)
* [noLineComments](#nolinecomments)
* [httpPath](#httppath)
* [generatedImagesPath](#generatedimagespath)

With the default options the
```bash
grunt compass-validate
```

is equivalent to
```bash
bundle exec compass validate
```

## Options

### rubyExecutable

Type: `String`

Default value: `''`

### bundleExecutable

Type: `String`

Default value: `'bundle'`

### bundleExec

Type: `Boolean`

Default value: `true`

### compassExecutable

Type: `String`

Default value: `'compass'`

### args

Type: `Object`

Default value: `{}`

**Different options than the default ones**
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


## Args

All argument is same as the CLI counterpart.
You can check them with the `$ compass {clean|compile|validate} --help` command.

### require

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


### sourceMap

Type: `Boolean`

Default value: `null`


### debugInfo

Type: `Boolean`

Default value: `null`


### load

Type: `String`

Default value: `''`


### loadAll

Type: `String`

Default value: `''`


### importPath

Type: `String`

Default value: `''`


### quiet

Type: `Boolean`

Default value: `false`


### trace

Type: `Boolean`

Default value: `false`


### boring

Type: `Boolean`

Default value: `false`


### config

Type: `String`

Default value: `''`


### app

Type: `String`

Default value: `''`


### appDir

Type: `String`

Default value: `''`


### sassDir

Type: `String`

Default value: `''`


### cssDir

Type: `String`

Default value: `''`


### imagesDir

Type: `String`

Default value: `''`


### javascriptDir

Type: `String`

Default value: `''`


### fontsDir

Type: `String`

Default value: `''`


### environment

Type: `String`

Default value: `''`


### outputStyle

Type: `String`

Default value: `''`


### relativeAssets

Type: `Boolean`

Default value: `false`


### noLineComments

Type: `Boolean`

Default value: `false`


### httpPath

Type: `String`

Default value: `''`


### generatedImagesPath

Type: `String`

Default value: `''`


## Flags

You can modify the arguments by [Flags](http://gruntjs.com/api/inside-tasks#this.flags)


### Flag quiet

Override the value of [quiet](#quiet) argument with `true`.


### Flag trace

Override the value of [trace](#trace) argument with `true`.


### Flag force

Override the value of [force](#force) argument with `true`.


### Flag boring

Override the value of [boring](#boring) argument with `true`.


### Flag development

Override the value of [environment](#environment) argument with `'development'`.


### Flag production

Override the value of [environment](#environment) argument with `'production'`.


### Flag nested

Override the value of [outputStyle](#outputstyle) argument with `'nested'`.


### Flag expanded

Override the value of [outputStyle](#outputstyle) argument with `'expanded'`.


### Flag compact

Override the value of [outputStyle](#outputstyle) argument with `'compact'`.


### Flag compressed

Override the value of [outputStyle](#outputstyle) argument with `'compressed'`.


### Flag relative-assets

Override the value of [relativeAssets](#relative-assets) argument with `true`.


### Flag no-line-comments

Override the value of [noLineComments](#no-line-comments) argument with `true`.


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

* **v0.0.4** - 2015-05-24
  * Improved documentation
* **v0.0.3** - 2015-05-22
  * Nobody knows
* **v0.0.2** - 2015-05-18
  * Flag support



## License

Copyright (c) 2015 Andor Dávid, contributors.  


***

_This file was generated by [grunt-verb](https://github.com/assemble/grunt-verb) on May 25, 2015._