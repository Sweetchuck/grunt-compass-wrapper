# grunt-compass-wrapper v0.0.1 [![Build Status: Linux](https://travis-ci.org/Sweetchuck/grunt-compass-wrapper.svg?branch=master)](https://travis-ci.org/Sweetchuck/grunt-compass-wrapper)

> Wrapper around the `compass` CLI tool.


_Note that this is not an official Grunt plugin release! If you want to use this in a project, please be sure to follow the instructions for installing development versions, as outlined in the [Installing Grunt](http://gruntjs.com/installing-grunt) guide._


## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-compass-wrapper --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-compass-wrapper');
```




## Compass-clean task
_Run this task with the `grunt compass-clean` command._




### Examples

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
      cwd: './path/to/dir'
    }
  },
  'compass-compile': {
    'my-custom-name': {
      cwd: './path/to/dir'
    }
  },
  'compass-validate': {
    'my-custom-name': {
      cwd: './path/to/dir'
    }
  }
});

grunt.registerTask('scss-compile', [
  'compass-clean',
  'compass-compile',
  'compass-validate'
]);
```


## Release History

_(Nothing yet)_


---

Task submitted by []()

*This file was generated on Sat May 16 2015 20:24:26.*
