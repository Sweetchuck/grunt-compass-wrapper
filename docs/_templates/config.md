## options.rubyExecutable

Type: `String`

Default value: `''`


## options.bundleExecutable

Type: `String`

Default value: `'bundle'`


## options.bundleExec

Type: `Boolean`

Default value: `true`


## options.compassExecutable

Type: `String`

Default value: `'compass'`


## options.args

Type: `Object`

Default value: `{}`

All argument is same as the CLI counterpart.
You can check them with the `$ compass {clean|compile|validate} --help` command.

## options.args.require

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


## options.args.sourceMap

Type: `Boolean`

Default value: `null`


## options.args.debugInfo

Type: `Boolean`

Default value: `null`


## options.args.load

Type: `String`

Default value: `''`


## options.args.loadAll

Type: `String`

Default value: `''`


## options.args.importPath

Type: `String`

Default value: `''`


## options.args.quiet

Type: `Boolean`

Default value: `false`


## options.args.trace

Type: `Boolean`

Default value: `false`


## options.args.boring

Type: `Boolean`

Default value: `false`


## options.args.config

Type: `String`

Default value: `''`


## options.args.app

Type: `String`

Default value: `''`


## options.args.appDir

Type: `String`

Default value: `''`


## options.args.sassDir

Type: `String`

Default value: `''`


## options.args.cssDir

Type: `String`

Default value: `''`


## options.args.imagesDir

Type: `String`

Default value: `''`


## options.args.javascriptDir

Type: `String`

Default value: `''`


## options.args.fontsDir

Type: `String`

Default value: `''`


## options.args.environment

Type: `String`

Default value: `''`


## options.args.outputStyle

Type: `String`

Default value: `''`


## options.args.relativeAssets

Type: `Boolean`

Default value: `false`


## options.args.noLineComments

Type: `Boolean`

Default value: `false`


## options.args.httpPath

Type: `String`

Default value: `''`


## options.args.generatedImagesPath

Type: `String`

Default value: `''`


## files

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
