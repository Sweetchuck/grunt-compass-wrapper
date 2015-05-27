Wrapper around the `$ compass clean` command.

Remove generated files and the sass cache.

**Configuration**

* options
  * [rubyExecutable](#optionsrubyexecutable)
  * [bundleExecutable](#optionsbundleexecutable)
  * [bundleExec](#optionsbundleexec)
  * [compassExecutable](#optionscompassexecutable)
  * [args](#optionsargs)
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
grunt compass-clean
```

is equivalent to
```bash
bundle exec compass clean
```
