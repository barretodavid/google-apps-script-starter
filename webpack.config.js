const webpack = require('webpack');
const path = require('path');
const GasPlugin = require('gas-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/global.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          output: {
            comments: /@customFunction/i,
          },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new GasPlugin(),
    new CopyPlugin({
      patterns: [{ from: './appsscript.json' }],
    }),
  ],
};

module.exports = config;
