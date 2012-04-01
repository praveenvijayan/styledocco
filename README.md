```
 _______ __         __        _____
|     __|  |_.--.--|  |-----.|     \-----.----.----.-----.
|__     |   _|  |  |  |  -__||  --  | _  |  __|  __|  _  |
|_______|____|___  |__|_____||_____/_____|____|____|_____|
             |_____|
```

StyleDocco generates documentation and style guide documents from your stylesheets.

Stylesheet comments will be parsed through [Markdown](http://en.wikipedia.org/wiki/Markdown) and displayed in a generated HTML document. You can write code examples prefixed with 4 spaces (or between <code>```</code>, [GitHub code fences](http://github.github.com/github-flavored-markdown/)) in your comments, and StyleDocco both renders the HTML and shows the code example.

An important philosophy of StyleDocco is to introduce as little custom syntax as possible, maintaining the stylesheet comments readable and useful even without StyleDocco.

The document is automatically split into new sections when it encounters a level 1 or 2 heading. Read more about the heading syntax in the [Markdown guide](http://daringfireball.net/projects/markdown/syntax). Only comments at the beginning of new lines are included, put some whitespace before a comment to exlude it from the style guide.

Suggestions, feature requests and bug reports are very welcome, either at [GitHub](https://github.com/jacobrask/styledocco/issues) or on Twitter ([@jacobrask](https://twitter.com/jacobrask)).


## Installation

StyleDocco requires [Node.js](http://nodejs.org). After installing Node.js, run

    npm install -g styledocco

or clone the [GitHub repository](https://github.com/jacobrask/styledocco).

StyleDocco is free software, released under the [MIT license](https://raw.github.com/jacobrask/styledocco/master/LICENSE).


## Usage

`styledocco [options] [INPUT]`

StyleDocco will automatically compile any SASS, SCSS, Less or Stylus files before they are applied to the page. You can also enter a custom preprocessor command if you want to pass custom parameters to the preprocessor.

If your project includes a `README` file, it will be used as the base for an `index.html`. StyleDocco will also add some default styles to your documentation, but they are easy to modify to make it fit with your project.

### Options

 * `--name`, `-n`      Name of the project *(required)*
 * `--out`, `-o`       Output directory *(default: "docs")*
 * `--resources`, `-s` Directory for custom template, CSS and JavaScript. Can be the same as the output directory if you don't want to overwrite your changes. StyleDocco defaults will be used for any required file not found in this directory. *(optional)*
 * `--preprocessor`    Custom preprocessor command. *(optional)* (ex: `--preprocessor "scss --load-path=deps/"`)

### Usage examples

Generate documentation for *My Project* in the `docs` folder, from the files in the `css` directory.

`styledocco -n "My Project" css`

Generate documentation for *My Project* in the `mydocs` folder, from source files in the `styles` folder. Use the Less binary in `~/bin/lessc`.

`styledocco -n "My Project" -o mydocs -s mydocs --preprocessor "~/bin/lessc" styles`


## Examples

This page is an example itself, as it was generated from the StyleDocco readme file. The [docs](resources/docs.html) file is the documentation of the default StyleDocco CSS file.

An additional example was generated from a modified file of the [Twitter Bootstrap](examples/bootstrap/docs/less/buttons.html) project.

### *Stylesheet*

    /* Provides extra visual weight and identifies the primary action in a set of buttons.
    
        <button class="btn primary">Primary</button> */
    .btn.primary {
        background: steelblue;
        color: snow;
        border: 1px solid steelblue;
    }

### *Output*

Provides extra visual weight and identifies the primary action in a set of buttons.

<div class="styledocco-example"><button class="btn primary" style="background:steelblue;color:snow;border:2px outset steelblue">Primary</button></div><pre><code><span class="tag">&lt;<span class="title">button</span> <span class="attribute">class</span>=<span class="value">"btn primary"</span>></span>Primary<span class="tag">&lt;/<span class="title">button</span>></span></code></pre>


## Acknowledgements

A lot of the heavy lifting in StyleDocco is done by the excellent [Marked](https://github.com/chjj/marked) module by Christopher Jeffrey. The original [Docco](https://github.com/jashkenas/docco) by Jeremy Ashkenas and [Docco Husky](https://github.com/mbrevoort/docco-husky) by Mike Brevoort were also of great help to this project. [Knyle Style Sheets](https://github.com/kneath/kss), a similar project written in Ruby, has also been an inspiration to StyleDocco.

<a href="https://github.com/jacobrask/styledocco" id="styledocco-fork-me"><img style="position:fixed;top:0;right:0;border:0;" src="https://a248.e.akamai.net/assets.github.com/img/7afbc8b248c68eb468279e8c17986ad46549fb71/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub"></a>
