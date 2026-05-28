"use strict"

const today = new Date();

console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

const date1 = new Date("October 1, 2025");
const date2 = new Date(2024, 9, 1, 13, 10, 30);

console.log(date1.toLocaleDateString());
console.log(date2.toLocaleDateString(), date2.toLocaleTimeString());
