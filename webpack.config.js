const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
         test:/\.(s*)css$/,
         use:['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpeg|ttf|...)$/,
        use: [
         { loader: 'url-loader', options: { limit: 8192 } }
         // limit => file.size =< 8192 bytes ? DataURI : File
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};