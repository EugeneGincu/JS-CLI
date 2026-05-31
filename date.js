"use strict"

let month = process.argv[2];
let date = process.argv[3];
let year = process.argv[4];

const today = new Date();

console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

const date1 = new Date("October 1, 2025");
const date2 = new Date(2024, 9, 1, 13, 10, 30);

console.log(date1.toLocaleDateString());
console.log(date2.toLocaleDateString(), date2.toLocaleTimeString());

let some_date = new Date(month + " " + date + "," + year);
console.log(some_date);	
console.log(some_date.toLocaleDateString());
console.log(some_date.toLocaleTimeString());

setInterval(time, 1000);


function time() {
	let now = new Date();
	let midnight = new Date();
	midnight.setDate(midnight.getDate() + 1);
	midnight.setHours(0, 0, 0, 0);
	console.log("Midnight: ",midnight.toLocaleTimeString());
	
	let seconds_left =  (midnight - now) / 1000;
	let minutes_left = seconds_left / 60;
	let hours_left =   minutes_left / 60;
	
	
	
	
	console.log("Hours: ", Math.floor(hours_left % 24));
	console.log("Minutes: ", Math.floor(minutes_left % 60));
	console.log("Seconds: ", Math.floor(seconds_left % 60));
}