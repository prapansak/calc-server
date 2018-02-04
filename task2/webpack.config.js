const path = require('path')
const nodeExternals = require('webpack-node-externals')

const config = {
  entry: ['./server.js'],
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015'], ['stage-2']
              ]
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.bundle.js'
  }
}

module.exports = config