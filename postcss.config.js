// ttp://cssnext.io

module.exports = {
	plugins: [
		require('precss'),
		// vendors for styles
		require('autoprefixer')({browserslist: ["> 20%"]}),

		// optimization of styles
		// http://cssnano.co/
		require('cssnano')({
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
		require('postcss-browser-reporter')({})
	]
}