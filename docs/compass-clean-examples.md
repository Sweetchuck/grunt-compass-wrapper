
# Examples

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
