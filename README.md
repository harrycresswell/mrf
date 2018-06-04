# Mixedracefaces

This is the source code for mixedracefaces.com. Built on top of Hugo with a Gulp assets pipeline.

## Getting Started

- Xcode command line utilities `xcode-select --install`
- [Homebrew](http://brew.sh/)
- [Node.js](http://nodejs.org/) `brew install node`
- [Gulp](http://gulpjs.com/) `npm install -g gulp`
- [Hugo](https://gohugo.io/) `brew install hugo`

## Usage

```
git clone https://github.com/harrycresswell/mrf.git
cd mrf
```

- Then run `npm install` to install node dependencies
- Run `gulp` to start a local server and build `_site` in development mode
- for a production ready build run `gulp prod`. The site is now ready for deployment
(make sure you update the `baseurl` in `config.toml`)

### Adding content
- `hugo new articles/ARTICLE-NAME.md`

### Compile the site to public folder
- run `hugo --verbose`

### Start the server
- run `hugo server --watch --verbose` or `hugo server -wv` to start the server, then navigate to http://localhost:1313/

### Compile assets
- open a second tab on the CL and run `gulp`

### Production ready build for deployment
```
rm -rf public
hugo
gulp
```
### Understanding the CSS methodology
[ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) with [Transparent Namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)

### Continuous deployment with Netlify

Push Changes to Git and live site will re-build and update.
