import { join as pJoin, resolve as pResolve } from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import DotEnv from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import CleanTerminal from 'clean-terminal-webpack-plugin';


const webpackConfig: Configuration & DevServerConfiguration = {
  watch: true,
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.ts', '.tsx'],
    alias: { '@app': pResolve(__dirname, './src/') },
  },
  entry: './src/app.tsx',
  output: {
    publicPath: '/',
    path: pJoin(__dirname, '/dist'),
    filename: 'bundle.js',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
  devServer: {
    static: pJoin(__dirname, 'dist'),
    compress: true,
    port: 8088,
    hot: true
  },
  plugins: [
    new CleanTerminal(),
    new CopyPlugin({
      patterns: [
        { from: './assets', to: './assets' }
      ],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: pJoin(__dirname, './src/index.html'),
    }),
    new DotEnv(),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      chunkFilename: '[id].css',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      devServer: true,
      typescript: {
        configFile: './tsconfig.json',
      },
      logger: 'webpack-infrastructure',
    }),
  ],
  optimization: {
    noEmitOnErrors: true, // NoEmitOnErrorsPlugin
  },
  devtool: 'source-map',
};

export default webpackConfig;
