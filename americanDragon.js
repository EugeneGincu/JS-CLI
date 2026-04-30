"use strict"
const {JSDOM } = require('jsdom');

const domain = 'http://www.americandragon.com/';
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

const url = 'http://' + process.argv[2];

console.log("Fetching ", url);
let data = "";

fetch(url,{
		headers: {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
		}
	})
	.then((response) => {
		if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
    }
    console.log("Content-Type:", response.headers.get("content-type"));
    console.log("Content-Length:", response.headers.get("content-length"));
    console.log("Content-Encoding:", response.headers.get("content-encoding"));
    return response.text();
	})
	.then((source) => {
		console.log("Source length:", source.length);
		const dom = new JSDOM(source, { contentType: "text/html" });
		const document = dom.window.document;
		console.log(document.title);
		getHerbLinks(document);
	})
	.catch((err) => {
		console.error("Failed to fetch URL:", err.message);
	});


function getHerbLinks(document) {
	let tables = document.querySelector("table.contentmedium");
    let tds = tables.querySelectorAll('td');
	//tds.forEach(td => console.log(td.querySelector('a').href));
	let firstLink = tds[0].querySelector('a').href;
	console.log(domain + firstLink);
}
