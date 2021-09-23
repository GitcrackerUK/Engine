const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const path = require('path');

module.exports = merge(common,{
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
    },
    mode: 'production',
});
