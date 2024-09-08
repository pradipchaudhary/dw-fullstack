// For Loop
// initialization
// condition
// updation

let numbers = [1, 2, 3, 4, 5, 6, 7];
const students = ["Ram", "Shyam", "Hari", "Gita"];

// for loop
for (let index = 0; index < students.length; index++) {
    console.log(students[index]);
}

// while loop
let whileindex = 0;
while (whileindex < students.length) {
    console.log("While loop index: ", students[whileindex]);
    whileindex++;
}

// dow while loop
let dowhileindex = 0;
do {
    console.log("Do while loop :- ", students[dowhileindex]);
    dowhileindex++;
} while (dowhileindex > students[dowhileindex]);

// for in loop
for (let key in students) {
    console.log("For in loop : ", key);
}

// for of loop
for (let value of students) {
    console.log("for of value: ", value);
}
