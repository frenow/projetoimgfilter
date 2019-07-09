const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin= require('extract-text-webpack-plugin');
const UglifyJSPlugin= require('uglifyjs-webpack-plugin');

module.exports = {
entry: ['./src/js/plugins.js', './src/js/main.js', './src/js/filter.js'],

output: {
    path: path.join(__dirname, 'dist'),
    filename:'js/bundle.js'
},
resolve: {
    extensions:[".js", ".jsx"]
},
plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src/index.html')
    }),
    new ExtractTextPlugin('output.css'),
    new UglifyJSPlugin()
],

module: {
    rules:[
        {
            test:/.jsx?$/,
            exclude:/node_modules/,
            include:path.join(__dirname, 'src'),
            use:[
                {
                    loader:'babel-loader',
                    options:{
                        presets:['es2015']
                    }
                }
            ]
        },
        {
            test:/\.(jpe?g|ico|png|gif|svg)$/i,
            loader:'file-loader?name=img/[name].[ext]'
        },
        {
            test:/\.css$/,
            use:ExtractTextPlugin.extract({
                fallback:"style-loader",
                use:"css-loader"
        })
    }
    ]
},
devServer: {
    publicPath:"/",
    contentBase:"./dist"
}

};