function ObjectName(name) {
	this.name = name;
	this.completed = false;
}

/**
 *  Complete task
 */
ObjectName.prototype.complete = function() {
	console.log('completing task: ' + this.name);
	this.completed = true;
};

/**
 * Fake ajax save
 * @param {string} name
 */
ObjectName.prototype.save = function save(name) {
		let s = '';
		let i = 20;

	return function () {
		let str = s || 'saving Task: ' + this.name;

		"use strict";
		let interval = setInterval(function () {
			if (i--) {
				console.clear();
				console.log(str += '.');
			} else {
				clearInterval(interval);
				console.clear();
				console.log('Saving completed!');
			}
		}, 500);
	}
}.apply(ObjectName);

export default ObjectName;
