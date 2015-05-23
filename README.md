# grunt-compass-wrapper  [![Build Status](Sweetchuck/grunt-compass-wrapper.svg)](Sweetchuck/grunt-compass-wrapper) 



<!-- toc -->

* [Install](#install)
* [Tasks](#tasks)
  * [compass-clean](#compass-clean)
  * [compass-compile](#compass-compile)
  * [compass-validate](#compass-validate)
* [Options](#options)
* [Arguments](#arguments)
* [Examples](#examples)
* [Author](#author)
* [Release History](#release-history)
* [License](#license)

<!-- toc stop -->


## Install

#### Install with [npm](npmjs.org)

```bash
npm i grunt-compass-wrapper --save-dev
```

## Tasks

### compass-clean

Wrapper around the `$ compass clean` command.

Remove generated files and the sass cache.

**Supported arguments**

* require
* load
* loadAll
* importPath
* quiet
* trace
* boring
* config
* app
* appDir
* sassDir
* cssDir
* imagesDir
* javascriptDir
* fontsDir
* environment
* outputStyle
* relativeAssets
* noLineComments
* httpPath
* generatedImagesPath


### compass-compile

Wrapper around the `$ compass compile` command.

Compile Sass stylesheets to CSS.

**Supported arguments**

* sourceMap
* debugInfo
* require
* load
* loadAll
* importPath
* quiet
* trace
* boring
* config
* app
* appDir
* sassDir
* cssDir
* imagesDir
* javascriptDir
* fontsDir
* environment
* outputStyle
* relativeAssets
* noLineComments
* httpPath
* generatedImagesPath

### compass-validate

Wrapper around the `$ compass validate` command.

Validate your generated css.

**Supported arguments**

* require
* load
* loadAll
* importPath
* quiet
* trace
* boring
* config
* app
* appDir
* sassDir
* cssDir
* imagesDir
* javascriptDir
* fontsDir
* environment
* outputStyle
* relativeAssets
* noLineComments
* httpPath
* generatedImagesPath

## Options

#### rubyExecutable
Type: `String`
Default value: `''`

#### bundleExecutable
Type: `String`
Default value: `'bundle'`

#### bundleExec
Type: `Boolean`
Default value: `true`

#### compassExecutable
Type: `String`
Default value: `'compass'`

#### arguments
Type: `Object`
Default value: `{}`


## Arguments

All argument is same as the CLI counterpart.
You can check them with the `$ compass {clean|compile|validate} --help` command.

#### require
Type: `Object`
Default value: `{}`

Key-value pairs where the key is the desired library and the value is `false` or
`true`.

```javascript
grunt.initConfig({
  'compass-compile': {
    options: {
      arguments: {
        require: {
          'path/to/gem-01': true,
          'path/to/gem-02': true,
          'path/to/gem-03': true
        }
      }
    },
    'my-target-01': {
      options: {
        arguments: {
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

#### sourceMap
Type: `Boolean`
Default value: `null`

#### debugInfo
Type: `Boolean`
Default value: `null`

#### load
Type: `String`
Default value: `''`

#### loadAll
Type: `String`
Default value: `''`

#### importPath
Type: `String`
Default value: `''`

#### quiet
Type: `Boolean`
Default value: `false`

#### trace
Type: `Boolean`
Default value: `false`

#### boring
Type: `Boolean`
Default value: `false`

#### config
Type: `String`
Default value: `''`

#### app
Type: `String`
Default value: `''`

#### appDir
Type: `String`
Default value: `''`

#### sassDir
Type: `String`
Default value: `''`

#### cssDir
Type: `String`
Default value: `''`

#### imagesDir
Type: `String`
Default value: `''`

#### javascriptDir
Type: `String`
Default value: `''`

#### fontsDir
Type: `String`
Default value: `''`

#### environment
Type: `String`
Default value: `''`

#### outputStyle
Type: `String`
Default value: `''`

#### relativeAssets
Type: `Boolean`
Default value: `false`

#### noLineComments
Type: `Boolean`
Default value: `false`

#### httpPath
Type: `String`
Default value: `''`

#### generatedImagesPath
Type: `String`
Default value: `''`


## Examples


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
    'my-custom-name': {
      files: {
        src: ['./path/to/dir/config.rb']
      }
    }
  },
  'compass-compile': {
    'my-custom-name': {
      files: {
        src: ['./path/to/dir/config.rb']
      }
    }
  },
  'compass-validate': {
    'my-custom-name': {
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


## Author

**Andor Dávid**
* [GitHub](https://github.com/Sweetchuck)
* [Twitter](http://twitter.com/andor_david)
* [LinkedIn](https://hu.linkedin.com/pub/andor-dávid/5b/484/b83)


## Release History

**DATE**       **VERSION**   **CHANGES** 
* 2015-05-18   v0.0.2        Flag support

## License

Copyright (c) 2015 Andor Dávid, contributors.  


***

_This file was generated by [grunt-verb](https://github.com/assemble/grunt-verb) on May 23, 2015._