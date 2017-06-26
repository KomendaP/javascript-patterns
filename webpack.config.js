const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
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
			title: 'Javascript creational',
			favicon: 'favicon.ico',
			template: './index.html'
		})
	],

	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	}
};