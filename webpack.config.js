const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

function WebpackConfig(config) {
	this.entry = {
		app: './index.jsx',
		vendor: [
			'react',
			'react-dom'
		]
	};
	this.output = {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
		publicPath: '/'
	};
	this.devtool = "inline-source-map";
	this.module = {
		rules: [
			{
				test: /(\.css$|\.postcss$|\.pcss$|\.sss$)/,
				exclude: /node_modules/,
				// use: ExtractTextPlugin.extract({
				// 	fallback: 'style-loader',
				// 	use: ['css-loader', 'postcss-loader']
				// })
				loaders: ['style-loader','css-loader', 'postcss-loader']
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
	};
	this.plugins = [
			new webpack.HotModuleReplacementPlugin(), // Enable HMR
			new HtmlWebpackPlugin({
				title: 'Javascript patterns',
				favicon: 'favicon.ico',
				template: './index.html'
			}),
			// new ExtractTextPlugin('[name].css')
			new webpack.optimize.CommonsChunkPlugin({
				names: ['vendor', 'manifest']
			})
	];
	this.devServer = {
		hot: true,
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	};
}

module.exports = new WebpackConfig();