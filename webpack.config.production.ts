import { join as pJoin, resolve as pResolve } from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import DotEnv from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const webpackConfig: Configuration & DevServerConfiguration = {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.ts', '.tsx'],
    alias: { '@app': pResolve(__dirname, './src/') },
  },
  entry: './src/app.tsx',
  output: {
    publicPath: './',
    path: pJoin(__dirname, '/dist'),
    filename: 'bundle.[hash].js',
    chunkFilename: '[id].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.s(c|a)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|ico|svg|gif|ttf)?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new DotEnv(),
    new CopyPlugin({
      patterns: [
        { from: './assets', to: './assets' }
      ],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: pJoin(__dirname, './src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      typescript: {
        configFile: './tsconfig.json',
      },
      logger: 'webpack-infrastructure',
    }),
  ],
  optimization: {
    noEmitOnErrors: false,
    minimize: true,
    minimizer: [new TerserPlugin({ parallel: true })],
  },
};

export default webpackConfig;
