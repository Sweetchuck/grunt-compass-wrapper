---
toc:
  maxDepth: 4
---
# {%= name %} {%= badge("travis") %}
<!-- toc -->

## Install

{%= include('install-npm') %}

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

{%= docs('options') %}

## Arguments

{%= docs('arguments') %}

## Examples

{%= docs('examples') %}

## Author

{%= docs('author') %}

## Release History

{%= changelog('docs/data/changelog.yml') %}

## License

{%= copyright() %}
{%= license() %}

***

{%= include("footer") %}
