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
