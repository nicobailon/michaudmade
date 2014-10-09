#Michaud Made
###Developed by Nico Bailon
###Designed by Scott Strathern

Michaud Made Guitars Website

#### Project Notes

Several Grust tasks have been included:
* Compass/Sass (grunt-contrib-compass) - for compiling Sass files
* Uglify (grunt-contrib-uglify) - for compressing JS
* Uncss (grunt-uncss) - for stripping unused CSS
* Cssmin (grunt-contrib-cssmin) - for minifying CSS
* Includes (grunt-includes) - for templating/including partials
* Processhtml (grunt-processhtml) - for replacing specified markup before deploying
* Imagemin (grunt-contrib-imagemin) - for compressing images
* Watch (grunt-contrib-watch) - watch files for changes, sync to LiveReload Chrome extension


Build Process:
```
grunt.registerTask('build', ['compass','uncss','cssmin','includes:build','processhtml','imagemin','uglify']);
```
1) Compile files in SCSS folder and output to CSS folder
2) Compare css/main.css to html files and strip unused CSS, output result to build/css/main.css
3) Parse build/css/main.css and minify to product build/css/main.min.css
4) Process template files and combine with partials
5) Compress images and output to build/images/
6) Compress JS files

Process-html
* During dev, we link JS, CSS, and images differently than for deployment
* Before deploying, we need to replace some values via process-html
* Parses files in partials/*.html, replaces content, then outputs to partials/output/*.html

Grunt-includes
* includes:default - Process template files and combine using partials in partials/*.html
* includes:build - Process template files and combine using partials in partials/output/*.html


Uncss analyzes html/CSS files to remove unused CSS
* Removes CSS code that references selectors which are not present in the DOM
* The problem is that CSS code referencing classes that are added by JS will also be stripped
* Uncss has an 'ignore' option which should prevent stripping of classes referenced
* Uncss also has a 'raw'option which allows additional styles to be added
* Unfortunately, the following CSS keeps getting stripped out no matter what:
```
.page-banner.scrolled h1:before,
.page-banner.scrolled h1:after {
  opacity: 0;
}
```
* As a solution, I am simply appending the necessary styles via JS:
```
var extrastyle = $('<style type="text/css" class="extrastyle" />').appendTo('head');
$(extrastyle).text('.page-banner.scrolled h1:before, .page-banner.scrolled h1:after {opacity:0;}');
```

Uncss + Cssmin results
> "uncss:build" (uncss) task:
> File build/css/main.css created: 221.78 kB → 96.02 kB

> "cssmin:combine" (cssmin) task:
> File build/css/main.min.css created: 96.02 kB → 14.47 kB

