import React from 'react';
import ReactDOM from 'react-dom';
import {polyfills} from './src/utils';
import styles from './src/styles/main.postcss';

console.log(polyfills);

ReactDOM.render(
	<h1>Javascript Patterns</h1>,
	document.querySelector('#app')
);