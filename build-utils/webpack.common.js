const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
      { test: /\.(css|sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(gif|png|jpe?g|svg)$/i, use: 'file-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../', 'src/'),
      '@Utils': path.resolve(__dirname, '../', 'src/utils/'),
      '@Common': path.resolve(__dirname, '../', 'src/components/common/'),
      '@Layouts': path.resolve(__dirname, '../', 'src/components/layouts/'),
      '@Pages': path.resolve(__dirname, '../', 'src/components/layouts/pages/'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.png',
    }),
  ],
};
