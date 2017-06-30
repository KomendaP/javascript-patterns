const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const config = {
	devtool: "inline-source-map",
};

config.entry = {
	app: './index.jsx',
	vendor: [
		'react',
		'react-dom'
	]
};

config.module = {
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

config.output = {
	path: path.resolve(__dirname, 'dist'),
	filename: '[name].bundle.js',
	publicPath: '/'
};

config.plugins = [
	new webpack.HotModuleReplacementPlugin(), // Enable HMR
	new HtmlWebpackPlugin({
		title: 'Javascript patterns',
		favicon: 'favicon.ico',
		template: './index.html'
	}),
	// new ExtractTextPlugin('[name].css')
];

config.devServer = {
	hot: true,
	contentBase: path.resolve(__dirname, 'dist'),
	publicPath: '/'
};

module.exports = config;