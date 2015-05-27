---
toc:
  maxDepth: 4
---

# {%= name %}

<!-- toc -->

## Build status

[![Build Status: Linux](https://travis-ci.org/{%= repository.owner %}/{%= name %}.svg?branch=master)](https://travis-ci.org/{%= repository.owner %}/{%= name %})

## Install

{%= docs('install-npm') %}

## Tasks

Every options is the same for for each tasks.


### compass-clean

{%= docs('task-compass-clean') %}

### compass-compile

{%= docs('task-compass-compile') %}

### compass-validate

{%= docs('task-compass-validate') %}

## Configuration

{%= docs('config') %}

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
