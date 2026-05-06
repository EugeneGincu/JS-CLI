"use strict"

let url = process.argv[2];

async function getURLS() {
	
	async function getURL(url) {
		let source = await fetch(url);
		console.log('Got here'); 
		let text = await source.text();
	
		return text;
	}
	
	//Synchronous
	let url1 = await getURL('http://www.msn.com/');
	let url2 = await getURL('http://www.google.com/');
	
	let [url1_async, url2_async] = await Promise.all([getURL('http://www.msn.com/'), getURL('http://www.google.com/')]);
	
	return url1 + url2;
}

Pomise.resolve(getURLS()).then(source => console.log(source));

console.log("Top level await");
let top_level = await fetch('http://www.google.com').then(body => body.text());
console.log(top_level);