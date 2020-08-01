# `webpack-mini`

Minimal config that is easy extending when it's necessary


## Quick start

1. Create main js file in `src` directory: `/src/index.js`
2. Create index.html template in your project root: `/index.html`
3. Create `webpack.config.js` file in your project root
    - add next code to the file:
        ```javascript
        const defaultConfig = require('@sbovyrin/webpack-mini');
        
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

Work in progress...
