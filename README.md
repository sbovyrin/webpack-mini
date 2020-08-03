# `webpack-mini`

![NPM](https://img.shields.io/npm/l/@sbovyrin/webpack-mini?color=green&style=flat-square)
![npm](https://img.shields.io/npm/dm/@sbovyrin/webpack-mini?color=green&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/sbovyrin/webpack-mini?color=green&style=flat-square)
![npm (scoped)](https://img.shields.io/npm/v/@sbovyrin/webpack-mini?color=green&style=flat-square)

> Read [Changelog](CHANGELOG.md) before updating!

Minimal webpack config that is easy extending when it's necessary.

By default:
- input file `index.js` must be located in `src` directory
- html-template file must be located in project root
- output files are located in `dist` directory


## Quick start

1. Create main js file in `src` directory: `/src/index.js`
2. Create index.html template in your project root: `/index.html`
3. Create `webpack.config.js` file in your project root
    - add next code to the file:
        ```javascript
        const { defaultConfig } = require('@sbovyrin/webpack-mini');
        
        module.exports = defaultConfig();
        ```
4. Install *webpack-mini*: `npm i --save-dev @sbovyrin/webpack-mini`
5. Install *webpack*: `npm i --save-dev webpack webpack-cli`
    - optionally: `npm i --save-dev webpack-dev-server`
6. Start development server: `npx webpack --watch --env.dev`
    - or: `npx webpack-dev-server --env.dev`
7. Build the project for production: `npx webpack --env.prod`
    - output files are located in `/dist` directory


## Features

- Ready to work out of the box
- Easy to customize
- Output separate files
    - app.js (your application)
    - vendor.js (app's dependencies)
    - runtime.js (wepback runtime)
    - styles.css (app's CSS)
- Production files are optimized (including tree-shaking)
- Hot server reload for development
- Lightweight and low resource consumer


## Customize

### Change entry configuration
- Create `webpack.config.js` file
    ```javascript
    const { defaultConfig } = require('@sbovyrin/webpack-mini');

    module.exports = defaultConfig();
    ```
- Create your customized config function
    ```javascript
    // here 'env' has value passed to --env (i.e '--env.prod' in script command)
    function customizeConfig(env) {
      return {
        entry: 'mysource/app.js'
      }
    }

    module.exports = defaultConfig(customizeConfig);
    ```
- Now your entry point is `mysource/app.js`

### Using React.js

Comming soon...
