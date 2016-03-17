site-start [![Dependency Status](https://gemnasium.com/Staplegun-US/site-start.svg)](https://gemnasium.com/Staplegun-US/site-start)
==========

A starter site kit that includes:

* Common vendor scripts
  * Susy 2
  * Normalize.css
  * jQuery
  * Modernizr
* Build Automation (via gulp.js)
  * SASS compilation
  * Automatic CSS/JS minification
  * Watching for changes
  * Browser-Sync
* Common icon fonts pre-installed
* Semantic index HTML file using proper [ARIA](http://w3c.github.io/aria-in-html) roles and settings
* 404 Page (from HTML5 Boilerplate)
* Default root settings files (robots.txt, humans.txt, crossdomain.xml, .editorconfig,
  .htaccess)

## Requirements

To use everything site-start ships with, you must have the following installed:

  * NPM
  * Bower

## Installation
```bash
git clone https://github.com/Staplegun-US/site-start.git
cd site-start
npm start
```

## Usage

The `index.html` comes preset with google analytics code,
css/js file inclusions, base meta settings, and a basic semantic body to get you started. To make full
use of the site-start though, you'll want to use gulp.

gulp Commands
```bash
gulp    # Build CSS and JS and watch for changes
```

## Base Icon Fonts

site-start ships with common icon fonts you may want to use. You can view them
in `dist/fonts/base-icon-fonts/demo.html`. Include them by adding a
`base-icon-[name]` class to any element. Example:

```html
<i class="base-icon-facebook"></i>
```

List of all Icon Fonts

| Icon Name     | Handle                      |
| ------------- |-----------------------------|
| Untappd       | `.base-icon-untappd`        |
| Home          | `.base-icon-home`           |
| Phone         | `.base-icon-phone`          |
| Location      | `.base-icon-location`       |
| Search        | `.base-icon-search`         |
| Menu          | `.base-icon-menu`           |
| Close         | `.base-icon-close`          |
| Checkmark     | `.base-icon-checkmark`      |
| Play2         | `.base-icon-play2`          |
| Play          | `.base-icon-play`           |
| Pause         | `.base-icon-pause`          |
| Stop          | `.base-icon-stop`           |
| Facebook      | `.base-icon-facebook`       |
| Twitter       | `.base-icon-twitter`        |
| Feed          | `.base-icon-feed`           |
| Youtube       | `.base-icon-youtube`        |
| Vimeo         | `.base-icon-vimeo`          |
| Flickr        | `.base-icon-flickr`         |
| Github        | `.base-icon-github`         |
| Tumblr        | `.base-icon-tumblr`         |
| Skype         | `.base-icon-skype`          |
| Reddit        | `.base-icon-reddit`         |
| Pinterest     | `.base-icon-pinterest`      |
| File-pdf      | `.base-icon-file-pdf`       |
| Search-plus   | `.base-icon-search-plus`    |
| Search-minus  | `.base-icon-search-minus`   |
| Chevron-left  | `.base-icon-chevron-left`   |
| Chevron-right | `.base-icon-chevron-right`  |
| Chevron-up    | `.base-icon-chevron-up`     |
| Chevron-down  | `.base-icon-chevron-down`   |
| Google-plus   | `.base-icon-google-plus`    |
| Envelope      | `.base-icon-envelope`       |
| Linkedin      | `.base-icon-linkedin`       |
| Instagram     | `.base-icon-instagram`      |


## License

Copyright (c) 2014 [Staplegun Design](http://staplegun.us)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
