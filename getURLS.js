"use strict"

export function fetchSequentially(urls) {
	
	let bodies = [];
	
	function fetchURL(url) {
		return fetch(url)
		.then(response => {
			console.log("Fetched:",url);
			return response.text();
		})
		.then(body => {bodies.push(body)});
	}
	
	let p = Promise.resolve(undefined);
	
	for (let url of urls)
		p = p.then(() => fetchURL(url));
	
	return p.then(() => bodies);
	
}

export function fetchURL(url) {
	return fetch(url)
		.then(response => {
		if (!response.ok)
			throw new Error(`Request failed with status: ${response.status}`);
		return response.text();
	})
		.then(source => source)
		.catch(e => console.error(e));
}