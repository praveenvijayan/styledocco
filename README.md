#Styledocs

Styledocs is a style document generator. It parse through stylesheet and creates style documents based on the comments provided in it. Its a customized version of jacobrask's [styledocco](https://github.com/jacobrask/styledocco).

#Installation

``` npm install -g styledocs ```

#Usage

`styledocs [options] [INPUT]`

`styledocco -n "My Project" css` or `styledocco -n "My Project" style.css`

### Options

 * `--name`, `-n`      Name of the project *(required)*
 * `--out`, `-o`       Output directory *(default: "docs")*
 * `--resources`, `-s` Directory for custom template, CSS and JavaScript. Can be the same as the output directory if you don't want to overwrite your changes. StyleDocco defaults will be used for any required file not found in this directory. *(optional)*
 * `--preprocessor`    Custom preprocessor command. To disable preprocessing, use `none`. *(optional)* (ex: `--preprocessor "scss --load-path=deps/"`)
 * `--include`         Prepend specified CSS file to the documentation stylesheet. *(optional)* (ex: `--include mysite.css`)
 
 ### Example

````css
/*#breadcrumb 
	<div class="breadcrumb"><a href="">Home</a><span>Email</span></div>
*/
.breadcrumb{}
.breadcrumb a{}
.breadcrumb a:hover{}
.breadcrumb span{}
```
