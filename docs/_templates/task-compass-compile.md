Wrapper around the `$ compass compile` command.

Compile Sass stylesheets to CSS.

**Configuration**

* options
  * [rubyExecutable](#optionsrubyexecutable)
  * [bundleExecutable](#optionsbundleexecutable)
  * [bundleExec](#optionsbundleexec)
  * [compassExecutable](#optionscompassexecutable)
  * [args](#optionsargs)
    * [sourceMap](#optionsargsourcemap)
    * [debugInfo](#optionsargsdebuginfo)
    * [require](#optionsargsrequire)
    * [load](#optionsargsload)
    * [loadAll](#optionsargsloadall)
    * [importPath](#optionsargsimportpath)
    * [quiet](#optionsargsquiet)
    * [trace](#optionsargstrace)
    * [boring](#optionsargsboring)
    * [config](#optionsargsconfig)
    * [app](#optionsargsapp)
    * [appDir](#optionsargsappdir)
    * [sassDir](#optionsargssassdir)
    * [cssDir](#optionsargscssdir)
    * [imagesDir](#optionsargsimagesdir)
    * [javascriptDir](#optionsargsjavascriptdir)
    * [fontsDir](#optionsargsfontsdir)
    * [environment](#optionsargsenvironment)
    * [outputStyle](#optionsargsoutputstyle)
    * [relativeAssets](#optionsargsrelativeassets)
    * [noLineComments](#optionsargsnolinecomments)
    * [httpPath](#optionsargshttppath)
    * [generatedImagesPath](#optionsargsgeneratedimagespath)
* [files](#files)

With the default options the
```bash
grunt compass-compile
```

is equivalent to
```bash
bundle exec compass compile
```
