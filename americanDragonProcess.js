"use strict"
import fs from 'fs';
import { JSDOM } from 'jsdom';

const bodies = openFile('meridians.json');

let data = [];

bodies.forEach(body => {
		let processedBody = extractHerbData(body);
		data.push(processedBody);
	}
);

writeFile(data);

console.log(data.length);


function extractHerbData(body) {
	const dom = new JSDOM(body, {contentType: "text/html"});
	const document = dom.window.document;
	console.log(document.title);
	try {
		let divMain = document.querySelector('div#p7ABW1');
		let dataTable = document.querySelector('div#p7ABc1_3 > table');
		let tdMeridians = dataTable.querySelector('tr:last-child td:nth-child(3)');
		let meridians = tdMeridians.textContent;
		meridians = meridians.split('\n').map(item => item.trim().replace(')','').replace('(',''));
		return {"name": divMain.querySelector('div:first-child a').textContent.split('NAME: ')[1], "meridians": meridians};
	} catch (e) {
		console.error(e);
	}
}


function openFile(file) {
	try {
		let data = fs.readFileSync(file, 'utf-8');
		if (data)
			data = JSON.parse(data);
		return data;
	} catch (err) {
		console.error(err);
	}
}

function writeFile(data) {
	try {
		let stringified = JSON.stringify(data);
		fs.writeFileSync('herbs.txt',stringified);
	} catch (err) {
		console.error(err);
	}
}