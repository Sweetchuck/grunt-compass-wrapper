Wrapper around the `$ compass validate` command.

Validate your generated css.

**Supported arguments**

* options
  * [args](#optionsargs)
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
grunt compass-validate
```

is equivalent to
```bash
bundle exec compass validate
```
