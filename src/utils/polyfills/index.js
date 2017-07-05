/**
 * isNan polyfill
 * @param {number} x 
 */
function _isNaN(x) {
    return typeof x === 'number' && x !== x;
}

/**
 * Negative Zero checker polyfill
 * @param {number} x 
 */
function negativeZero(x) {
    return x === 0 && 1/x === -Infinity;
}

/**
 * Function.prototype.bind() polyfill
 * @param {object} context 
 */
function bind(context) {
	var params = Array.prototype.slice.call(arguments, 1);
  var fn = this;
  
	if (typeof fn !== 'function') {
		throw new TypeError('Instance is not callable!');
	}

	return function () {
		var params2 = Array.prototype.concat.apply(params, Array.prototype.slice.call(arguments))
		return fn.apply(context, params2);
	}
};

/** 
 * Concat polyfill
*/
function concat() {
	var arr = Array.prototype.slice.call(arguments);
	var acum = this;
    
	if (acum instanceof String) {
		return acum += arr.join('');
	}
  
	for (var i = 0, j = arr.length; i < j; i++) {
		if (typeof arr[i] === 'string') {
			Array.prototype.push.call(this, arr[i]);
		} else {
			Array.prototype.push.apply(this, arr[i]);
		}
	}
	
	return acum;
}

/**
 * Is array polyfill
 * @param {val} arg 
 */
function isArray(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
}

/**
 * Array.prototypa.join() polyfill
 * @param {arr/str} arr 
 */
function join(arr) {}

/**
 * 'new' operator polyfill
 * @param {function} constructor constructor function
 * @param {any} any params
 * @return {object} New object 
 */
function newObject(constructor) {
	/*
		Here what NEW does:
		1. creates new object
		2. links that object
		3. object gets bound as this keyword of constructor
		4. if constructor doesn't return enything, this new object will be returned
	*/
  var o = {}, args = Array.prototype.slice.call(arguments, 1);
  Foo.apply(o, args);

  o.__proto__ = Object.create(constructor.prototype);
  return o; 
}


/**
 * Object.is() polyfill
 * @param {any} a 
 * @param {any} b 
 */
function is(a, b) {}

/**
 * Gets prop by string
 * @param {object} context 
 * @param {string} str 
 */
function objectByString(context, str) {}

/**
 * Generates binary number
 * @param {number} n
 */
function toBinaryString(n) {}

export default {
    isNaN,
		
}