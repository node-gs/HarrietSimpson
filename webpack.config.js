const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets', // New
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
          'sass-loader',
        ]
      },
      { 
        test: /\.js$/, 
        loader: 'imports-loader?define=>false'
      }
    ],
  },
  resolve: {
  alias: {
    'ScrollMagicGSAP': 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap',
    'ScrollMagicjQuery': 'scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic'
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),  // New
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        ScrollMagic: "scrollmagic"
    })
  ],
};