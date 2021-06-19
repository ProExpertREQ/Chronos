const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[fullhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  devServer: {
    host: 'localhost',
    port: 9000,
    contentBase: false,
    stats: 'errors-warnings',
    open: true,
    overlay: true,
  }
};