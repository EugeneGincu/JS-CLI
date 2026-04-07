"use strict"

const fs= require('node:fs');
let arg;
let tasks;
let [ , , command, arg_1, arg_2, arg_3] = process.argv;
//console.log("Arg 3: ", arg_1 == undefined);

if (!command) return;

let data;
let status = {
	1 : "Done",
	2 : "Not Done",
	3 : "In Progress"
	}
	
try {
	data = readFile();
} catch (err) {
	console.log('running catch clause');
	writeFile([]);
	data = [];
}

if (!data)
	tasks = [];
else
	tasks = data;



//if (!(arg = process.argv[2])) return;

console.log("Task manager");


switch (command) {

	case "add":
		if (!arg_1 || !arg_2) return;
		if (Number(arg_2) < 0 || Number(arg_2) > 3) return;
		console.log("adding");
		let task = {};
		task.id = tasks.length;
		task.description = arg_1;
		task.status = status[arg_2];
		task.createdAt = new Date();
		tasks.push(task);
		writeFile(tasks);
		
		break;

	case "update":
		arg_1 = Number(arg_1);
		let index = tasks.findIndex(task => task.id == arg_1);
		console.log(index);
		return;
		if (tasks[arg_1] == undefined) return;
		tasks[arg_1].description = process.argv[4];
		tasks[id].status = status[process.argv[5]];
		writeFile(tasks);
		
		break;

	case "list":
		
		if (!tasks.length) {
			console.log("No tasks!");
			return;
		}
		
		arg_3 = Number(process.argv[3]);
		console.log("Number of tasks:", tasks.length, "\n");
		
		for (let val of tasks) {
			if (arg_3 && (val.status !== status[arg_3])) continue;
			
			console.log("Task ID: ", val['id']);
			console.log("Task: ", val.description);
			console.log("Status: ", val.status, '\n-----');
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
	
	case "mark":
		arg_3 = Number(process.argv[3]);
		arg_4 = process.argv[4];
		let mark_index = -1;
		
		mark_index = getIndex(tasks, arg_3);
		
		if (mark_index >= 0) {
			tasks[mark_index].status = status[arg_4];
		}
		
		writeFile(tasks);
		
		break;

	default:
		console.log("Unrecognized command!");
		break;
}

function getIndex(arr, id) {
	let index = -1;
	for (let task of arr) {
			if (task.id === id)
				index = tasks.indexOf(task);
		}
	
	return index;
}


function readFile() {
	try {
		let data = fs.readFileSync('tasks.txt', 'utf8');
		if (data)
			data = JSON.parse(data);
		return data;
	} catch (err) {
		//console.error(err);
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
