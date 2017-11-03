'use strict'

// For supporting ES6 import/export statements which aren't supported
// by node natively

require('babel-register')({
	presets: ['es2015'],
	plugins: ['transform-object-rest-spread']
})

var server = require('./server');
