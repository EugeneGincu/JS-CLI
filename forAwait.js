"use strict"
import fs from 'fs';

let input = process.argv[2];

async function readFileStream(filename) {
	let stream = fs.createReadStream(filename, { encoding: 'utf-8'});
	
	for await (let chunk of stream) {
		console.log(chunk);
	}
}

readFileStream(input);

async function readFilePromises(filename) {
	
}



let urls = ['http://www.msn.com', 'http://www.google.com', 'http://www.yahoo.com'];

let url_promises = urls.map(url => fetch(url));

for (let url of url_promises) {
	let link = await url;
	console.log("Next");
	console.log(link);
}

for await (let url of url_promises) {
	console.log("Next");
	console.log(url);
}