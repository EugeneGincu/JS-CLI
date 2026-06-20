"use strict"

import {readFile, writeFile} from 'node:fs/promises';
import {fetchURL, fetchSequentially } from './getURLS.js';
import { JSDOM } from 'jsdom';

const url = 'http://' + process.argv[2];

console.log("Fetching ", url);

fetch(url,{
		headers: {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
		}
	})
	.then((response) => {
		if (!response.ok) {
			throw new Error(`Request failed with status: ${response.status}`);
		}
		console.log("Response ok:", response.ok);
		console.log("Response status:", response.status);
		console.log("Body used:", response.bodyUsed); 
		console.log("Response redirected:", response.redirected);
		console.log("Response type:", response.type);
		console.log("Response URL:", response.url);
		console.log("Content-Type:", response.headers.get("content-type"));
		console.log("Content-Length:", response.headers.get("content-length"));
		console.log("Content-Encoding:", response.headers.get("content-encoding"));
		return response.text();
	})
	.then((source) => {
		console.log("Body length:", source.length);
		console.log(JSON.stringify(source));
	})
	.catch((err) => {
		console.error("Failed to fetch URL:", err.message);
	});
	
function createURLs() {
	const urls = [
				['Levis', 'https://www.levi.com/CA/en_CA/clothing/men/jeans/taper/541TM-athletic-taper-mens-jeans/p/181811001'],
				['Levis', 'https://www.levi.com/CA/en_CA/clothing/men/jeans/taper/541TM-athletic-taper-mens-jeans/p/181810964']
				]
	return urls;
	
}

function getPromoInfo(urls) {
	let bodies = urls.map(url => fetchURL(url[1]));
	Promise.allSettled(bodies).then(results => {
		console.log(results[0].value);
		console.log(results[1].value);
	});
}
	
function wait(duration) {
		return new Promise((resolve, reject) => {
			if (duration < 0) 
				reject(new Error("Duration less than 0"));
			
			setTimeout(resolve, duration);
		});
}

getPromoInfo(createURLs());

wait(5000).then(() => console.log('Waited 5000'));
console.log("Didn't wait");