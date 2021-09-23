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
        open: true,
        clientLogLevel: 'silent',
    },
    mode: 'development',
    watch: true,
});
