## Basic

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

## Options, args and files
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


## Without bundle

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


## Custom args

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


## Args and flags

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
