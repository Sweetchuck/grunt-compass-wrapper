## Example - Basic

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


## Example - Without bundle

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


## Example - Arguments

```javascript
grunt.initConfig({
  'compass-compile': {
    options: {
      arguments: {
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


## Example - Arguments and flags

```javascript
grunt.initConfig({
  'compass-compile': {
    options: {
      arguments: {
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
