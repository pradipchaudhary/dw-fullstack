// ! Assignment 4
// make a arrow function named sum(num1,num2) , pass 2 inputs ann it must return  the sum of num1 and num2 is num3
const findSum = (num1, num2) => {
    return `The sum of ${num1} and ${num2} is ${num1 + num2}`;
};
console.log(findSum(4, 6));
// here num1 and num2 and num3 is number do this by stringlitral concept

// make a arrow function named isNitan(name), pass a inputs and return true if the given input nitan else false
const isNitin = (name) => {
    if (name === "nitin") {
        return true;
    } else {
        return false;
    }
};
console.log(isNitin("nitin"));

// make a arrow function that takes number as input and
// if age [1 to 12],  return  since your age is ${age} your ticket is free
// if age[13 to 60], return since your age is ${age} your ticket cost 80
// if age[61 to 80 ], return since your age is ${age} your ticket cost 100
// if age[>80], return since your age is ${age} your ticket cost 40

const findTicketPrice = (age) => {
    if (age >= 1 && age <= 12) {
        return `since your age is ${age} your ticket is free.`;
    } else if (age >= 12 && age <= 60) {
        return `since your age is ${age} your ticket cost Rs. 80.`;
    } else if (age >= 61 && age <= 80) {
        return `since your age is ${age} your ticket cost Rs. 100.`;
    } else if (age > 80) {
        return `since your age is ${age} your ticket cost Rs. 40.`;
    }
};
console.log(findTicketPrice(30));

// Percentage
// Percentage >= 80 return  Grade B
// Percentage >= 70 return  Grade C
// Percentage >= 60 return  Grade D
// Percentage >= 40 return  Grade E
// Percentage >= 100  return Grade A

const findGrade = (percentage) => {
    if (percentage >= 80) {
        console.log(percentage);
        return "Grade B";
    } else if (percentage >= 70) {
        console.log(percentage);
        return "Grade C";
    } else if (percentage >= 60) {
        return "Grade D";
    } else if (percentage >= 40) {
        return "Grade E";
    } else if (percentage >= 100) {
        return "Grade A";
    }
};
console.log("Find Percentage: ", findGrade(39));
// make a arrow function that takes a input and return true if the string starts with Bearear else return false
const startsWithBearer = (input) => {
    if (input.startsWith("Bearear")) {
        return true;
    } else {
        return false;
    }
};
// Example usage:
console.log("hello");
console.log(startsWithBearer("Bearer token")); // true
console.log(startsWithBearer("token Bearer")); // false
// make a arrow function that takes input and return true if it Contain admin or superAdmin
const isAdmin = (user) => {
    if (user === "admin" || user === "superAdmin") {
        return true;
    } else {
        return false;
    }
};
console.log("is Admin: ", isAdmin("admin"));
console.log("is Admin: ", isAdmin("pradip"));

// make a arrow function that takes a sentence and return total number of character in that sentence (using string.length)
const findLength = (sentance) => {
    const sentenceLength = sentance.length;
    console.log(sentenceLength);
    return sentenceLength;
};
findLength("Hello ");
findLength("My name is Pradip Chaudhary");

// make a array of three element of best person
// clg  whole array
// get second element
// delete first element
// get whole array and see weather it is deleted or not
// change third element
// get whole array and see weather it is changed or not
const bestPerson = ["Ram", "Shyam", "Hari"];
console.log(bestPerson);
console.log(bestPerson[1]);
delete bestPerson[0];
console.log(bestPerson);
bestPerson[2] = "Gita";
console.log(bestPerson);

// define object with key name ,location, contactNumber
// get whole object
// change location  to gagalphedi
// get whole object and see the effect
// delete contactNumber
// get whole object and see the effect

const person = {
    name: "Pradip Chaudhary",
    location: "Lalitapur, Nepal",
    contactNumber: 9824367788,
};
console.log(person);
person.location = "gagalphedi";
console.log(person);
delete person.contactNumber;
console.log(person);
