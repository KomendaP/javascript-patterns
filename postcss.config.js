// ttp://cssnext.io
const postcssImport = require('postcss-import');
const precss = require('precss');
const cssnext = require('postcss-cssnext');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
	plugins: [
		precss,
		postcssImport,
		cssnext,
		autoprefixer({
			browserslist: ["> 1%"],
			grid: false
		}),
		cssnano({
			preset: 'advanced',
			comments: { removeAll: true }
		}),

		// https://github.com/jonathantneal/postcss-short
		require('postcss-short')({}),

		//	https://github.com/borodean/postcss-assets
		require('postcss-assets')({
			loadPaths: ['fonts/', 'media/patterns/', 'images/'],
			basePath: 'src/',
			relative: 'styles/',
			cachebuster: false
		}),

		// postcss-browser-reporter
		// require('postcss-browser-reporter')({})
	]
}