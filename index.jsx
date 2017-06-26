import React from 'react';
import ReactDOM from 'react-dom';
import patterns from './src/utils';

console.log(new patterns.creational.constructor('game').save());

ReactDOM.render(
	<h1>Javascript Patterns</h1>,
	document.querySelector('#app')
);