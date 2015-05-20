
# Options

The options are the same as in the command line. Only difference is that in this
Grunt plugin the format of the option names is camel case.

CLI version: `sass-dir`

Grunt option: `sassDir`


## require

Type: `Object`  
Default: `{}`
  
Require the given ruby LIBRARY before running commands. This is used to access 
compass plugins without having a project configuration file.

```javascript
grunt.initConfig({
  'compass-clean': {
    options: {
      arguments: {
        require: {
          'path/to/lib1': true,
          'path/to/lib2': true
        }
      }
    },
    myTarget01: {
      options: {
        arguments: {
          require: {
            'path/to/lib1': false
          }
        }
      }
    }
  }
});
```
