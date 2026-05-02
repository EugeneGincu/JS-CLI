"use strict"
import {fetchURL, fetchSequentially} from './getURLS.js';
//const {JSDOM } = require('jsdom');
import { JSDOM } from 'jsdom';
import fs from 'fs';

const domain = 'http://www.americandragon.com/';
const listHerbs = 'https://www.americandragon.com/IndividualHerbsIndex2.html'
let document;

//process.stdin.on("data", (chunk) => {
	//rawData += chunk.toString()
//});

//process.stdin.on("end", () => {
	//const dom = new JSDOM(rawData, { contentType: "text/html" });
	//const document = dom.window.document;
	//console.log(document.title);
//	getHerbLinks(document);
//});

const url = listHerbs

console.log("Fetching ", url);
let data = [];

fetchURL(listHerbs)
	.then(source => {
		console.log("Source length:", source.length);
		const dom = new JSDOM(source, { contentType: "text/html" });
		const document = dom.window.document;
		console.log(document.title);
		let links = getHerbLinks(document);
		console.log("Number of links:", links.length);
		return fetchSequentially(links);
	})
	.then(bodies => {
		console.log("Body 1 length:", bodies[0].length);
		console.log("Body 2 length:", bodies[1].length);
		bodies.forEach(body => data.push(body);)
		console.log("Number of data objects:", data.length);
		console.log("Writing to file meridians.json");
		fs.writeFileSync('meridians.json',JSON.stringify(data));
	});


function getHerbLinks(document) {
	let tables = document.querySelector("table.contentmedium");
    let tds = tables.querySelectorAll('td');
	//tds.forEach(td => console.log(td.querySelector('a').href));
	let firstLink = tds[0].querySelector('a').href;
	let links = [];
	tds.forEach(td => {
		if (!td.querySelector('a')) return;
		let link = td.querySelector('a').href;
		if (link.startsWith('../'))
			link = link.slice(3,99);
		else if (link.startsWith('/'))
			link = link.slice(1,99);
		console.log(domain + link);
		links.push(domain + link);
	});
	console.log(domain + links[0]);
	return links;
}


