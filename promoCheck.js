import { readFile, writeFile } from 'node:fs/promises';
import { fetchURL } from './getURLS.js';
import { JSDOM } from 'jsdom';

let links = ['https://www.levi.com/CA/en_CA/clothing/men/jeans/taper/541TM-athletic-taper-mens-jeans/p/181811001','https://www.levi.com/CA/en_CA/clothing/men/jeans/taper/541TM-athletic-taper-mens-jeans/p/181810964'];

//writeFile('promoCheck.txt', JSON.stringify(links), 'utf-8');

//file is a Promise
const file = readFile('promoCheck.txt','utf-8')
				.then(body => JSON.parse(body))
				//.then(body => {if (body) console.log("Body exists");})
				.catch(e => console.log(e));
				

let promisesArray = [];
let bodies = [];
//file
//.then(urls => promiseArray(urls,promisesArray))
//.then(() => Promise.allSettled(promisesArray))
//.then(results => {
//	bodies.push(results[0].value);
//	bodies.push(results[1].value);
//})
//.then(() => console.log(bodies));

let urls = await file;
let results = await promiseArray(urls,promisesArray);
let temp = await Promise.allSettled(promisesArray);
console.log(temp);

for (let result of promisesArray) {
	let value = await result;
	console.log("Using loop:", value);
}

function promiseArray(urls, promisesArray) {
	
	for (let url of urls) {
		promisesArray.push(fetchURL(url));
	}
	
	console.log(promisesArray);
	
}

 