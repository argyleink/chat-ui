const path                = require('path')
const HtmlWebpackPlugin   = require('html-webpack-plugin')
const CopyWebpackPlugin   = require('copy-webpack-plugin')
const CleanWebpackPlugin  = require('clean-webpack-plugin')
const BrowserSyncPlugin   = require('browser-sync-webpack-plugin')
const ExtractTextPlugin   = require('extract-text-webpack-plugin')

const PATHS = {
  output: `${__dirname}/public/`,
  src:    `./app`,
  port:   3030
}

const PAGES = require('fs')
  .readdirSync(`${PATHS.src}/js/`)
  .filter(item => item.search('.js') > 0)
  .map(item => item.slice(0, item.length - 3))

module.exports = {
  entry: PAGES.reduce((entries, entry) => {
    entries[entry] = path.resolve(__dirname, `${PATHS.src}/js/${entry}.js`)
    return entries
  }, {}),
  output: {
    path:     PATHS.output,
    filename: 'js/[name].js',
    pathinfo: true
  },
  module: { rules: [
    {
      test:     /\.js$/,
      use:      [{
        loader: 'babel-loader',
        options: { presets: [
          ['babel-preset-env', {
            targets: {
              browsers: ['chrome > 55']
            },
            modules: false
          }]
        ]}
      }],
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      })
    },
    { 
      test:     /\.jade$/,
      exclude:  /node_modules/,
      loader:   'jade-loader'
    }
  ]},
  plugins: [
    new CleanWebpackPlugin([PATHS.output]),
    ...PAGES.map(page =>
      new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template: `${PATHS.src}/${page}.jade`,
        inject:   false,
        page:     page,
        meta: {
          theme: '#000000'
        }
      })
    ),
    new ExtractTextPlugin('css/[name].css'),
    new CopyWebpackPlugin([{ 
      from: `${PATHS.src}/images`,
      to:   'images'
    }]),
    new BrowserSyncPlugin({
      host:   'localhost',
      port:   PATHS.port,
      proxy:  'http://localhost:8080/'
    }, {
      reload: false
    })
  ],
  devtool: '#eval-source-map',
  devServer: { 
    contentBase: PATHS.output,
    stats: {
      modules:  false,
      cached:   false,
      colors:   true,
      chunk:    false
    }
  },
}