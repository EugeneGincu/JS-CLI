"use strict"

const url = 'http://' + process.argv[2];

console.log("Fetching ", url);

fetch(url)
	.then((response) => {
		if (!response.ok) {
			throw new Error(`Request failed with status: ${response.status}`);
		}
		return response.text();
	})
	.then((source) => {
		console.log(source);
	})
	.catch((err) => {
		console.error("Failed to fetch URL:", err.message);
	});