import 'babel/polyfill';

import fs from 'fs';

fs.path;
var _fs = 1;

async function get() {
	return 'cotne';
}

async function testGet() {
	var name = await get();
	console.log(name);
}

testGet();
