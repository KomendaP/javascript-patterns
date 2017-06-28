const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	entry: {
		app: './index.jsx',
		vendor: [
			'react',
			'react-dom'
		]
	},

	module: {
		rules: [
			{
				test: /(\.css$|\.postcss$|\.pcss$|\.sss$)/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader']
				})
			},
			{
				test: /(\.js$|\.jsx$)/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'es2015', 'react']
					}
				}
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					'file-loader'
				]
			}
		]
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},

	devtool: "inline-source-map",

	plugins: [
		new webpack.HotModuleReplacementPlugin(), // Enable HMR
		new HtmlWebpackPlugin({
			title: 'Javascript patterns',
			favicon: 'favicon.ico',
			template: './index.html'
		}),
		new ExtractTextPlugin('[name].css')
	],

	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	}
};