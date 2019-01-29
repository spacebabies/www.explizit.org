module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ExtractCssChunks.loader, 'css-loader']
      }
    ]
  },

  plugins: [
    new ExtractCssChunks(
      filename: "[name].css",
      chunkFilename: "[id].css"
    )
  ]
};
