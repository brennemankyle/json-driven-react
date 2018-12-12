const path = require('path');

module.exports = {
  devtool: 'hidden-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: '[name].min.js',
    libraryTarget: 'var',
  },
  externals: {
    'react': 'React',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
