// JavaScript Date Methods

const date = new Date();

// Get date methods/components
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const millisecond = date.getMilliseconds();

// Output
console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);
console.log(millisecond);

console.log("To String : ", date.toString());

// Set data methods/components

const date25 = date.setFullYear(2025);
console.log("date", date25);
date.setFullYear(2025);
console.log(date);
