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
