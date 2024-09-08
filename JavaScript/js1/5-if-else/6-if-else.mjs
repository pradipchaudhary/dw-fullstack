/* 
Percentage from 0 to 40 return  Grade E
Percentage  40 to 60 return  Grade D
Percentage  60 to 70 return  Grade C
Percentage 70 to 80 return  Grade B
Percentage 80 to 100 return Grade A
Percentage greater than 100 invalid grade

*/

const percentage = 80;

if (percentage >= 0 && percentage <= 40) {
    console.log("Grade E");
} else if (percentage >= 40 && percentage <= 60) {
    console.log("Grade D");
} else if (percentage >= 60 && percentage <= 80) {
    console.log("Grade C");
} else if (percentage >= 80 && percentage <= 100) {
    console.log("Grade A");
} else {
    console.log("Invalide Grade");
}

// * ==> One block will execuite form one if chain
// - throught name is 🔼
// - if try to conver it to boolean

// Note
//     - implicitly => force by itself
//      - explicitly => force by external

// if age is 25,  console your ticket is free
// if age is 26,  console your ticket cost 100
// if age is 27,  console your ticket cost 200
// age is other than 25,26,27 console you are not allowed

const age = 30;
if (age === 25) {
    console.log("Your ticket is free");
} else if (age === 26) {
    console.log("your ticket cost 1000");
} else if (age === 27) {
    console.log("your ticket cost 200");
} else {
    console.log("your are not allowed");
}

// if the given number is even print the number is even else print number is odd
const number = 20;
if (number % 2 === 0) {
    console.log("even number");
} else {
    console.log("Odd number");
}
