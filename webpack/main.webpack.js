module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  entry: './electron/main.ts',
  module: {
    rules: require('./rules.webpack'),
  }
}