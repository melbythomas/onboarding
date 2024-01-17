const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './index.js'],
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
    new webpack.EnvironmentPlugin({JEST_WORKER_ID: null}),
    new webpack.DefinePlugin({process: {env: {}}}),
  ],
  module: {
    strictExportPresence: false,
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              {plugins: ['@babel/plugin-proposal-class-properties']},
            ],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {'react-native$': 'react-native-web'},
    extensions: ['.web.js', '.js'],
  },
};
