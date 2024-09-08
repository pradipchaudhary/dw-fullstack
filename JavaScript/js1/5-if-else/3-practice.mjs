let courseName = "Full Stack Web Development";
let teacherName = "Nitin Thapa";
let isMarrid = true;
let age = 35;
let number1 = 4;
let number2 = 6;
// perform js operation for * inside ``
console.log(
    `perform * operation  between ${number1} and ${number2} number, and total are : ${
        number1 * number2
    }.`
);
// perform js operation for / inside ``
console.log(
    `perform / operation  between ${number1} and ${number2} number, and total are : ${
        number1 / number2
    }.`
);

// if isMarried is true clg he is married else clg he is not married
if (isMarrid) {
    console.log(`${teacherName} is marrid !`);
} else {
    console.log(`${teacherName} is Unmarried!`);
}

// if age is greater than 18 "he can enter bar" else "he can not enter bar"
if (age > 18) {
    console.log("he can enter bar!");
} else {
    console.log("he can not enter bar!");
}

// if age>=18 he can watch movies else he can not watch movies
if (age >= 18) {
    console.log("he can watch movies!");
} else {
    console.log("he can not watch movies!");
}

// Class 3

let gender = undefined;
if (gender === "male") {
    console.log("He is Male!");
} else if (gender === "female") {
    console.log("She is female !");
} else {
    console.log("they are other ");
}
