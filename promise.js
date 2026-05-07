"use strict"

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
	
function wait(duration) {
		return new Promise((resolve, reject) => {
			if (duration < 0) 
				reject(new Error("Duration less than 0"));
			
			setTimeout(resolve, duration);
		});
}

wait(5000).then(() => console.log('Waited 5000'));
console.log("Didn't wait");