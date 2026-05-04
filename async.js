"use strict"

let url = process.argv[2];

async function getURL(url) {
	let source = await fetch(url);
	return source;
}

Promise.resolve(getURL(url)).then(source => console.log(source));