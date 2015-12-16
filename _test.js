'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('babel/polyfill');

var _fs2 = require('fs');

var _fs3 = _interopRequireDefault(_fs2);

_fs3['default'].path;
var _fs = 1;

function get() {
	return regeneratorRuntime.async(function get$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				return context$1$0.abrupt('return', 'cotne');

			case 1:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

function testGet() {
	var name;
	return regeneratorRuntime.async(function testGet$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return regeneratorRuntime.awrap(get());

			case 2:
				name = context$1$0.sent;

				console.log(name);

			case 4:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

testGet();
