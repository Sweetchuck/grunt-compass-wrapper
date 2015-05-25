All argument is same as the CLI counterpart.
You can check them with the `$ compass {clean|compile|validate} --help` command.

## require

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


## sourceMap

Type: `Boolean`

Default value: `null`


## debugInfo

Type: `Boolean`

Default value: `null`


## load

Type: `String`

Default value: `''`


## loadAll

Type: `String`

Default value: `''`


## importPath

Type: `String`

Default value: `''`


## quiet

Type: `Boolean`

Default value: `false`


## trace

Type: `Boolean`

Default value: `false`


## boring

Type: `Boolean`

Default value: `false`


## config

Type: `String`

Default value: `''`


## app

Type: `String`

Default value: `''`


## appDir

Type: `String`

Default value: `''`


## sassDir

Type: `String`

Default value: `''`


## cssDir

Type: `String`

Default value: `''`


## imagesDir

Type: `String`

Default value: `''`


## javascriptDir

Type: `String`

Default value: `''`


## fontsDir

Type: `String`

Default value: `''`


## environment

Type: `String`

Default value: `''`


## outputStyle

Type: `String`

Default value: `''`


## relativeAssets

Type: `Boolean`

Default value: `false`


## noLineComments

Type: `Boolean`

Default value: `false`


## httpPath

Type: `String`

Default value: `''`


## generatedImagesPath

Type: `String`

Default value: `''`
