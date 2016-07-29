//var production = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    product: './src/js/app.js'
  },
  output: {
    path: './build/assets/js/',
    filename: 'app.min.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.(png|gif|jpe?g|svg?(\?v=[0-9]\.[0-9]\.[0-9])?)$/i,
      loader: 'url?limit=10000',
    }]
  },
};
