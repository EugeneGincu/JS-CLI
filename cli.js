"use strict"

const fs= require('node:fs');
let arg;


//console.log(tasks.length);

if (!(arg = process.argv[2])) return;

console.log("Hi");

switch (arg) {
	case "add":
	const data = readFile();
	let tasks = [];
	
	if (!tasks) break;
	
	console.log("adding");
	let task = {};
	task.id = tasks.length;
	task.description = process.argv[3];
	task.status = process.argv[4];
	task.createdAt = new Date();
	tasks.push(task);
	writeFile(tasks);
	break;

	case "update":
	
	break;

	case "list":
	if (!tasks.length)
		console.log("Number of tasks", tasks.length);
	break;

	

	default:
	console.log("Unrecognized command!");
	break;
}


//console.log(stringified);

function readFile() {
	try {
		let data = fs.readFileSync('tasks.txt', 'utf8');
		return data;
	} catch (err) {
		console.error(err);
		return;
	}
}

function writeFile(data) {
	try {
		let stringified = JSON.stringify(data);
		fs.writeFileSync('tasks.txt',stringified);
	} catch (err) {
		console.error(err);
	}
}

function hello(greeting) {
    return greeting;
}
