## rubyExecutable

Type: `String`

Default value: `''`

## bundleExecutable

Type: `String`

Default value: `'bundle'`

## bundleExec

Type: `Boolean`

Default value: `true`

## compassExecutable

Type: `String`

Default value: `'compass'`

## arguments

Type: `Object`

Default value: `{}`

**Different options than the default ones**
```javascript
grunt.initConfig({
  'compass-compile': {
    options: {
      rubyExecutable: '/home/foo/.rvm/rubies/ruby-2.1.3/bin/ruby',
      bundleExecutable: '/home/foo/.rvm/gems/ruby-2.1.3/bin/bundle',
      arguments: {
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
        arguments: {
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
