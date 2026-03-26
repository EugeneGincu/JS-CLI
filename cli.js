"use strict"

const fs= require('node:fs');
let arg;
let tasks;
let arg_3, arg_4;
const data = readFile();
if (!data)
	tasks = [];
else
	tasks = data;


//console.log(tasks.length);

if (!(arg = process.argv[2])) return;

console.log("Task manager");

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
	arg_3 = Number(process.argv[3]);
	tasks[id].description = process.argv[4];
	tasks[id].status = process.argv[5];
	writeFile(tasks);
	break;

	case "list":
	if (!tasks.length) {
		console.log("No tasks!");
		return;
	}
	console.log("Number of tasks:", tasks.length, "\n");
	for (let val of tasks) {

		console.log("Task ID: ", val['id']);
		console.log("Task: ", val.description, '\n-----');
		console.log();
	}
	break;

	case "delete":
	arg_3 = Number(process.argv[3]);
	let del_index = -1;
	
	for (let task of tasks) {
		if (task.id === arg_3)
			del_index = tasks.indexOf(task);
	}

	if (del_index >= 0)
	{
		console.log("Deleted", tasks[del_index].description);
		tasks.pop(del_index);
	}

	writeFile(tasks);
	
	
	
	break;

	default:
	console.log("Unrecognized command!");
	break;
}


//console.log(stringified);

function readFile() {
	try {
		let data = fs.readFileSync('tasks.txt', 'utf8');
		if (data)
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
