---
toc:
  maxDepth: 4
---

# {%= name %}

<!-- toc -->

## Build status

[![Build Status: Linux](https://travis-ci.org/Sweetchuck/grunt-compass-wrapper.svg?branch=master)](https://travis-ci.org/Sweetchuck/grunt-compass-wrapper)


## Install

{%= docs('install-npm') %}

## Tasks

Every options is the same for for each tasks.


### compass-clean

Wrapper around the `$ compass clean` command.

Remove generated files and the sass cache.

**Supported arguments**

* [require](#require)
* [load](#load)
* [loadAll](#loadall)
* [importPath](#importpath)
* [quiet](#quiet)
* [trace](#trace)
* [boring](#boring)
* [config](#config)
* [app](#app)
* [appDir](#appdir)
* [sassDir](#sassdir)
* [cssDir](#cssdir)
* [imagesDir](#imagesdir)
* [javascriptDir](#javascriptdir)
* [fontsDir](#fontsdir)
* [environment](#environment)
* [outputStyle](#outputstyle)
* [relativeAssets](#relativeassets)
* [noLineComments](#nolinecomments)
* [httpPath](#httppath)
* [generatedImagesPath](#generatedimagespath)

With the default options the
```bash
grunt compass-clean
```

is equivalent to
```bash
bundle exec compass clean
```


### compass-compile

Wrapper around the `$ compass compile` command.

Compile Sass stylesheets to CSS.

**Supported arguments**

* [sourceMap](#sourcemap)
* [debugInfo](#debuginfo)
* [require](#require)
* [load](#load)
* [loadAll](#loadall)
* [importPath](#importpath)
* [quiet](#quiet)
* [trace](#trace)
* [boring](#boring)
* [config](#config)
* [app](#app)
* [appDir](#appdir)
* [sassDir](#sassdir)
* [cssDir](#cssdir)
* [imagesDir](#imagesdir)
* [javascriptDir](#javascriptdir)
* [fontsDir](#fontsdir)
* [environment](#environment)
* [outputStyle](#outputstyle)
* [relativeAssets](#relativeassets)
* [noLineComments](#nolinecomments)
* [httpPath](#httppath)
* [generatedImagesPath](#generatedimagespath)

With the default options the
```bash
grunt compass-compile
```

is equivalent to
```bash
bundle exec compass complie
```


### compass-validate

Wrapper around the `$ compass validate` command.

Validate your generated css.

**Supported arguments**

* [require](#require)
* [load](#load)
* [loadAll](#loadall)
* [importPath](#importpath)
* [quiet](#quiet)
* [trace](#trace)
* [boring](#boring)
* [config](#config)
* [app](#app)
* [appDir](#appdir)
* [sassDir](#sassdir)
* [cssDir](#cssdir)
* [imagesDir](#imagesdir)
* [javascriptDir](#javascriptdir)
* [fontsDir](#fontsdir)
* [environment](#environment)
* [outputStyle](#outputstyle)
* [relativeAssets](#relativeassets)
* [noLineComments](#nolinecomments)
* [httpPath](#httppath)
* [generatedImagesPath](#generatedimagespath)

With the default options the
```bash
grunt compass-validate
```

is equivalent to
```bash
bundle exec compass validate
```

## Options

{%= docs('options') %}

## Arguments

{%= docs('arguments') %}

## Flags

{%= docs('flags') %}

## Examples

{%= docs('examples') %}

## Author

{%= docs('author') %}

## Release History

{%= docs('release-history', {releaseHistory: arguments[0].releaseHistory}) %}

## License

{%= copyright() %}
{%= license() %}

***

{%= include("footer") %}
