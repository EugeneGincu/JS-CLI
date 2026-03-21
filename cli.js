"use strict"

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
	task.description = "temp";
	task.status = "todo";
	task.createdAt = new Date();
	tasks.push(task);
	break;
	default:
	console.log("Unrecognized command!");
	break;
}

console.log(tasks.length);

function hello(greeting) {
    return greeting;
}
