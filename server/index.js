import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from 'webpack.config';
import open from 'open';

const app = express();
const compiller = webpack(config);
const port = 3000;

app.use(require('webpack-dev-middleware')(compiller, {
	noInfo: true,
	publicPath: config.output.publickPath || 'dist/'
}));

app.use(require('webpack-hot-middleware')(compiller));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
	if (err) {
		console.error(err)
	} else {
		open(`http://localhost:${port}`)
	}
});