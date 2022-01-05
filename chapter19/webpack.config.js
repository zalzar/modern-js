const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'dist'),
    //     publicPath: '/assets/'
    // }
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,

        // port: 9000,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
            // options: {
            //     presets: ['babel/preset-env']
            // }
        }]
    }
};