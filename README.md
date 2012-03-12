
<pre> _______ __         __        _____
|     __|  |_.--.--|  |-----.|     \-----.----.----.-----.
|__     |   _|  |  |  |  -__||  --  | _  |  __|  __|  _  |
|_______|____|___  |__|_____||_____/_____|____|____|_____|
             |_____|</pre>


StyleDocco generates documentation and style guide documents from your stylesheets.

Stylesheet comments will be parsed through [Markdown](http://daringfireball.net/projects/markdown/syntax) and displayed in a generated HTML document. You can write code examples inside [GitHub Markdown](http://github.github.com/github-flavored-markdown/) code fences (<code>```</code>) or prefixed with 4 spacesin your comments, and StyleDocco both renders the HTML and shows the code example.

The document automatically starts a new section when it encounters a level 1 or 2 heading. Read more about the syntax in the [Markdown guide](http://daringfireball.net/projects/markdown/syntax). Only comments at the beginning of new lines are included, so to exclude something from the style guide, put some whitespace before the comment.

If your project includes a `README` file, it will be used as the base for an `index.html`. StyleDocco will also add some default styles to your documentation, but they are easy to modify to make it fit with your project.

StyleDocco will automatically compile any SASS, SCSS, Less or Stylus code before it is applied to the page.


## Installation

StyleDocco requires [Node.js](http://nodejs.org).

`npm install -g styledocco`

or clone the [GitHub repository](https://github.com/jacobrask/styledocco).

StyleDocco is free software, released under the [MIT license](https://raw.github.com/jacobrask/styledocco/master/LICENSE).


## Usage

`styledocco [options] [INPUT]`

### Options

 * `--name`, `-n` Name of the project *(required)*
 * `--out`, `-o`  Output directory *(default: "docs")*
 * `--tmpl`       Directory for custom `index.jade` and `docs.jade` templates *(optional)*
 * `--overwrite`  Overwrite existing files (`docs.css`) in target directory.


## Examples

    <button class="btn primary">Primary</button>  

This page is an example itself, as it was generated from the StyleDocco readme file. The [docs](resources/docs.html) file is the documentation of the default StyleDocco CSS file.

An additional example was generated from a modified file of the [Twitter Bootstrap](examples/bootstrap/docs/less/buttons.html) project.


## Acknowledgements

A lot of the heavy lifting in StyleDocco is done by the excellent [Marked](https://github.com/chjj/marked) module by Christopher Jeffrey. The original [Docco](https://github.com/jashkenas/docco) by Jeremy Ashkenas and [Docco Husky](https://github.com/mbrevoort/docco-husky) by Mike Brevoort were also of great help to this project.

<a href="https://github.com/jacobrask/styledocco" id="styledocco-fork-me"><img style="position:fixed;top:0;right:0;border:0;" src="https://a248.e.akamai.net/assets.github.com/img/7afbc8b248c68eb468279e8c17986ad46549fb71/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub"></a>
