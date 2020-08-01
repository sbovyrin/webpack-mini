# `webpack-mini`

## Quick start

1. Create main js file in `src` directory: `/src/index.js`
2. Create index.html template in your project root: `/index.html`
3. Create `webpack.config.js` file in your project root
    - add next code to the file:
        ```javascript
        const defaultConfig = require('@sbovyrin/webpack-mini');
        
        module.exports = defaultConfig();
        ```
4. Install *webpack*: `npm i --save-dev webpack webpack-cli`
    - optionally: `npm i --save-dev webpack-dev-server`
5. Start development server: `npx webpack --watch --env.dev`
    - or: `npx webpack-dev-server --env.dev`
6. Build the project for production: `npx webpack --env.prod`
    - output files are located in `/dist` directory

