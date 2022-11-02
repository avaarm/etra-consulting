const { when, whenDev, whenProd, whenTest, POSTCSS_MODES } = require("@craco/craco");

module.exports = {
    reactScriptsVersion: "react-scripts" /* (default value) */,
    style: {
        modules: {
            localIdentName: ""
        },
        css: {
            loaderOptions: { /* Any css-loader configuration options: https://github.com/webpack-contrib/css-loader. */ },
            loaderOptions: (cssLoaderOptions, { env, paths }) => { return cssLoaderOptions; }
        },
        sass: {
            loaderOptions: { /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */ },
            loaderOptions: (sassLoaderOptions, { env, paths }) => { return sassLoaderOptions; }
        },
    },
    
    babel: {
        presets: [],
        plugins: [],
        loaderOptions: { /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */ },
        loaderOptions: (babelLoaderOptions, { env, paths }) => { return babelLoaderOptions; }
    },
    typescript: {
        enableTypeChecking: true /* (default value)  */
    },
    
    jest: {
        babel: {
            addPresets: true, /* (default value) */
            addPlugins: true  /* (default value) */
        },
        configure: { /* Any Jest configuration options: https://jestjs.io/docs/en/configuration */ },
        configure: (jestConfig, { env, paths, resolve, rootDir }) => { return jestConfig; }
    },
    devServer: { /* Any devServer configuration options: https://webpack.js.org/configuration/dev-server/#devserver */ },
    devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => { return devServerConfig; },
    plugins: [
        {
            plugin: {
                overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => { return cracoConfig; },
                overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => { return webpackConfig; },
                overrideDevServerConfig: ({ devServerConfig, cracoConfig, pluginOptions, context: { env, paths, proxy, allowedHost } }) => { return devServerConfig; },
                overrideJestConfig: ({ jestConfig, cracoConfig, pluginOptions, context: { env, paths, resolve, rootDir } }) => { return jestConfig },
            },
            options: {}
        }
    ]
};