// The webpack-dev-server is a development server running in-memory,
// watching the files and refreshing content.
// We also use nodemon to watch the webpack.config.js file
exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    // Display only errors to reduce the amount of output.
    stats: 'errors-only',
    // Parse host and port from env to allow customization.
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: false, // Open the page in browser
    overlay: true, // Provides an overlay for capturing warnings and errors
    hotOnly: true // Don't refresh if hot loading fails. Good while implementing the client interface.
  }
});

exports.loadCss = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        test: /\.(s?)css$/,
        // test: /\.(s*)css$/,
        // test: /\.s[ac]ss$/i,
        // include, // list of files to include in the loader
        // exclude, // list of files to exclude from the loader
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  }
});
