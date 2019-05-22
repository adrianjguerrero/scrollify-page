const path = require('path');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const OptimizeCssAsset = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const WebpackNotifierPlugin = require('webpack-notifier');


module.exports = {
  entry: './js/bundle.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'production',
  optimization:{
    minimizer:[
      new OptimizeCssAsset(),
      new TerserPlugin()
    ]
  },
  watch: true,
  module: {
    rules: [
        {test: /\.scss$/, use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']},
        {test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=1000000'} 
        ]
    },
    plugins : [new MiniCssExtractPlugin(),
      new WebpackNotifierPlugin(),
        new webpack.LoaderOptionsPlugin({
          options: {
              postcss: [
                  autoprefixer()
              ]
          }
      }) ]
};