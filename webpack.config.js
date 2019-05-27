/*
 * @title Webpack Config
 */

// Dependencies
import webpack from 'webpack';

// Config
import { paths } from "./gulpfile.babel.js/config";

const path = require('path');

// Plugins
var WebpackNotifierPlugin = require('webpack-notifier');

const webpackConfig = {

  mode: process.env.NODE_ENV ? "production" : "development",

  entry: {
    app: paths.scripts.src
  },
  output: {
    filename: '[name].js',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          minSize: 0
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /^(?!.*\.{test,min}\.js$).*\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s?css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },

  plugins: [
    // ensure that we get a production build of any dependencies
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new WebpackNotifierPlugin({
      skipFirstNotification: true
    })
  ],

  resolve: {
    alias: {
      Modules: path.resolve(__dirname, 'src/modules/'),
      Components: path.resolve(__dirname, 'src/scripts/components/'),
      Utils: path.resolve(__dirname, 'src/scripts/utils/'),
    }
  }

};

if (process.env.NODE_ENV === 'production') {
  // console.log('Welcome to production');
  webpackConfig.devtool = 'source-map';
}
if (process.env.NODE_ENV === 'development') {
  // console.log('Welcome to development');
}

module.exports = webpackConfig;
