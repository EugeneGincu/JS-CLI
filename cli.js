"use strict"

const fs= require('node:fs');
let arg;
let tasks;
const data = readFile();
if (!data)
	tasks = [];
else
	tasks = data;

//console.log(tasks.length);

if (!(arg = process.argv[2])) return;

console.log("Hi");

switch (arg) {
	case "add":
	
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
		data = JSON.parse(data);
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
