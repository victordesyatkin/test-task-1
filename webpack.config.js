const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');

module.exports = (env) => {
  const { development } = env;
  const isDevelopment = development;
  const isProduction = !isDevelopment;
  const getStyleLoaders = () => {
    return [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
    ];
  };
  return {
    entry: {
      index: path.resolve(__dirname, 'src/index.jsx'),
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/assets/template/index.html'),
        title: 'Demo webpack, react, redux',
        meta: {
          description: 'webpack-demo, react-demo, redux-demo',
          keywords: 'webpack, react, redux, demo',
          viewport: 'initial-scale=1.0, width=device-width',
          'msapplication-TileColor': '#da532c',
        },
        files: {
          manifest: 'assets/favicon/site.webmanifest',
        },
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/assets/favicon'),
            to: 'assets/favicon',
          },
        ],
      }),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: 'css/[name].css?version=[contenthash]',
          chunkFilename: 'css/[id].css?version=[contenthash]',
        }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    output: {
      filename: '[name].bundle.js?version=[contenthash]',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.jsx?$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
                  '@babel/preset-typescript',
                ],
                plugins: [
                  isDevelopment && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
              },
            },
          ],
        },
        {
          test: /\.(css)$/,
          use: getStyleLoaders(),
        },
        {
          test: /\.(s[ca]ss)$/,
          use: [
            ...getStyleLoaders(),
            'resolve-url-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['postcss-preset-env'],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
                additionalData: '@import "assets/theme/variables.scss";',
                sassOptions: {
                  includePaths: [path.join(__dirname, 'src')],
                  outputStyle: isDevelopment ? 'expanded' : 'compressed',
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|ico)$/i,
          exclude: path.resolve(__dirname, 'src/assets'),
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[contenthash].[ext]',
              },
            },
          ],
          type: 'asset/resource',
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [new CssMinimizerPlugin(), new HtmlMinimizerPlugin(), '...'],
    },
    target: isDevelopment ? 'web' : 'browserslist',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', 'tsx'],
    },
  };
};
