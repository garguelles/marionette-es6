var entry = './client/src/app/main.js',
output = {
  path: __dirname,
  filename: 'main.js'
};

module.exports.development = {
  debug : true,
  devtool : 'eval',
  entry: entry,
  output: output,
  module : {
    loaders : [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.hbs$/, loader: 'handlebars-loader' },
      { test: /\.jade/, loader: 'jade-loader' }
    ]
  }
};

module.exports.production = {
  debug: false,
  entry: entry,
  output: output,
  module : {
    loaders : [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.hbs$/, loader: 'handlebars-loader' },
      { test: /\.jade/, loader: 'jade-loader' }
    ]
  }
};
