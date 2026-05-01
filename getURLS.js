"use strict"

export function fetchSequentially(urls) {
	
	let bodies = [];
	
	function fetchURL(url) {
		return fetch(url)
		.then(response => response.text())
		.then(body => {bodies.push(body))});
	}
	
	p = Promise.resolve(undefined);
	
	for (url of urls)
		p = p.then(() => fetchURL(url));
	
	return p.then(() => bodies);
	
	
}