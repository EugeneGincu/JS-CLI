"use strict"

const open = require('open');

let arg;
let tasks = []

console.log(tasks.length);

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
	break;

	case "update":
	
	break;

	case "list":
	//if (!tasks.length)
	//	console.log("Number of tasks", tasks.length);
	break;

	default:
	console.log("Unrecognized command!");
	break;
}

let stringified = JSON.stringify(tasks);
console.log(stringified);

function hello(greeting) {
    return greeting;
}
