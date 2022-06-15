module.exports = [{
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: {
      amd: false
    },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.js$/,
    use: [{
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    }],
    exclude: /node_modules/,
  },
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: ['ts-loader'],
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  },
  {
    test: /\.svg$/,
    use: [{
      loader: 'svg-url-loader',
      options: {
        limit: 10000,
      },
    }],
  },
  {
    test: /\.css$/,
    use: [
      'style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      }, 'postcss-loader'
    ],
  },
]