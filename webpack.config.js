/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = (env) => {
  const { development } = env;
  const isDevelopment = development;
  const isProduction = !isDevelopment;
  const getStyleLoaders = () => {
    return [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[local]--[hash:base64:5]',
          },
        },
      },
    ];
  };
  return {
    entry: {
      index: path.resolve(__dirname, './src/index.tsx'),
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Quizzes',
        template: path.resolve(
          __dirname,
          'src/main/assets/template/index.html'
        ),
        meta: {
          description: 'The Super Duper Quizzes',
          keywords:
            'webpack, react, redux, react-router, demo, quizzes, styled-components, redux-thunk, typescript',
          viewport: 'initial-scale=1.0, width=device-width',
          'msapplication-TileColor': '#da532c',
        },
        files: {
          manifest: 'assets/favicon/site.webmanifest',
        },
      }),
      new Dotenv(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/main/assets/favicon'),
            to: 'assets/favicon',
          },
        ],
      }),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: 'css/[name].css?version=[contenthash]',
          chunkFilename: 'css/[id].css?version=[contenthash]',
        }),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment &&
        new ReactRefreshWebpackPlugin({
          exclude: [/node_modules/],
        }),
    ].filter(Boolean),
    output: {
      filename: '[name].bundle.js?version=[contenthash]',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    mode: isDevelopment ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/i,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
                  '@babel/preset-typescript',
                ],
                plugins: [isDevelopment && 'react-refresh/babel'].filter(
                  Boolean
                ),
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
                additionalData: '@import "main/assets/theme/variables.scss";',
                sassOptions: {
                  includePaths: [path.join(__dirname, 'src')],
                  outputStyle: isDevelopment ? 'expanded' : 'compressed',
                },
              },
            },
          ],
        },
        {
          test: /\.(ttf|otf|eot|woff|woff2|svg)$/,
          include: /fonts/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'main/assets/fonts/',
                publicPath: '../assets/fonts/',
                name: '[name].[ext]?version=[contenthash]',
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|ico|svg)$/i,
          exclude: [
            path.resolve(__dirname, 'src/main/assets'),
            '/node_modules/',
          ],
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/images',
                name: '[name]-[contenthash].[ext]',
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [new CssMinimizerPlugin(), new HtmlMinimizerPlugin(), '...'],
    },
    target: isDevelopment ? 'web' : 'browserslist',
    resolve: {
      modules: ['src', 'node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    // resolveLoader: {
    //   modules: [path.join(__dirname, 'node_modules')],
    // },
  };
};
