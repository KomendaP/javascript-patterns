const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

/**
 *  Webpack configuration object constructor
 * @param config
 * @constructor
 */
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
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
			DEBUG: false
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		})
	];

	if (isProduction) {
		const ExtractTextPlugin = require('extract-text-webpack-plugin');
		this.plugins.push(new ExtractTextPlugin('[name].css'));

		this.module.rules.push({
			test: /(\.css$|\.postcss$|\.pcss$|\.sss$)/,
			exclude: /node_modules/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'postcss-loader']
			})
		})
	} else {
		this.module.rules.push({
			test: /(\.css$|\.postcss$|\.pcss$|\.sss$)/,
			exclude: /node_modules/,
			loaders: ['style-loader', 'css-loader', 'postcss-loader']
		})
	}

	this.devServer = {
		hot: true,
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	};
}

module.exports = new WebpackConfig();