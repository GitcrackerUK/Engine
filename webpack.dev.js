const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.main.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        // Enable compression
        compress: true,

        // Enable hot reloading
        hot: true,

        host:'http://127.0.0.1/',

        // Opens browser on startup
        open: true,
        
        // Port o which it is running
        port: 8080,

        // 
        open:"Chrome",

        //
        openPage:'index.html'
    },
    mode: 'development',
    watch: true,
});
