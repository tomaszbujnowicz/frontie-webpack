# Frontie Webpack - Front-end Boilerplate

**🚀 Gulp 4 + Webpack 4 + Babel + BrowserSync**

These tools make it a solid front-end boilerplate to get a new project off the ground.

## :gift: Features
| Features | Description |
| :------------- | :------------- |
| Task Runner | [Gulp](http://gulpjs.com/)
| CSS | [SASS](http://sass-lang.com/), [Autoprefixer](https://github.com/postcss/autoprefixer), [Source Maps](https://www.npmjs.com/package/gulp-sourcemaps), [Stylelint](https://stylelint.io/)
| Bootstrap 4 | [Grid System](https://getbootstrap.com/docs/4.1/layout/grid/), [Responsive Breakpoints](https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints)
| JS | [Webpack](https://webpack.js.org/), [Babel](http://babeljs.io/), [ESLint](http://eslint.org/)
| Live Reload | [BrowserSync](http://www.browsersync.io/)
| HTML Templates | [Twig.js](https://github.com/twigjs/twig.js)
| Deployment | [GitHub Pages]((https://www.npmjs.com/package/gulp-gh-pages))

## Usage

### Requirements
Make sure all dependencies have been installed before moving on:

* [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/lang/en/)
* [Node.js](https://nodejs.org/en/download/)
* [Gulp](http://gulpjs.com/)

### Quick start: Installation
Clone this repository and run
- `npm install` or `yarn` to install dependencies

### Tasks
| Task Name | Description | Environment |
| :------------- | :------------- | :------------- |
| `yarn start` or `npm run start` | Generate a development environment, start the server and watch for changes | Development
| `yarn build` or `npm run build` | Compile production code | Production
| `yarn deploy` or `npm run deploy` | Compile production code and deploy to GitHub Pages | Production

## Structure

```
|--dist/                  # →  Static version of the website ready to upload (never edit)
|
|--gulpfile.babel.js/     # →  Gulpfile config and tasks
|--node_modules/          # →  Node.js packages (never edit)
|--src/                   # →  Source files
|  |--fonts/              # →  Fonts
|  |--img/                # →  Images
|  |--scripts/            # →  JS
|  |  |--modules/         # →  JS Modules (e.g. navbar)
|  |  |--app.js           # →  JS main file
|  |--styles/             # →  Styles
|  |--templates/          # →  Site templates (Twig.js)
|  |  |--layouts/         # →  Base templates
|  |  |--modules/         # →  Modules templates (e.g. navbar)
|  |  |--pages/           # →  Page templates
|--.babelrc               # →  Babel presets
|--.eslintrc              # →  ESLint config
|--.gitignore             # →  Gitignore
|--.stylelintrc           # →  Stylelint config
|--package-lock.json      # →  Node.js lock file (never edit)
|--package.json           # →  Node.js dependencies and scripts
|--webpack.config.js      # →  Webpack config
|--yarn.lock              # →  Yarn lock file (never edit)
```

## Copyright and license

Copyright 2018 Tomasz Bujnowicz under the [MIT license](http://opensource.org/licenses/MIT).
