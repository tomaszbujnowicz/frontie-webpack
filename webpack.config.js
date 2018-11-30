/*
 * @title Webpack Config
 */

// Dependencies
import webpack from 'webpack';

// Config
import { paths } from "./gulpfile.babel.js/config";

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
          chunks: 'all'
        }
      }
    }
  },

  module: {
    noParse: /\/node_modules\/(jquery|backbone)/,
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
      }
    ]
  },

  plugins: [
    // ensure that we get a production build of any dependencies
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]

};

if (process.env.NODE_ENV === 'production') {
  // console.log('Welcome to production');
  webpackConfig.devtool = 'source-map';
}
if (process.env.NODE_ENV === 'development') {
  // console.log('Welcome to development');
}

module.exports = webpackConfig;
