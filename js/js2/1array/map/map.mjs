// ? Map array methods

const numbers = [1, 2, 3, 4, 5];

// const newNumber = numbers.map((item, index, arr) => {
//     console.log(item, index);
//     console.log("array: ", arr);
//     return item + 10;
// });

// const multiplyByTwo = numbers.map((item, index) => {
//     return item * 2;
// });

// console.log(newNumber);
// console.log(multiplyByTwo);

const multiplyBy10 = numbers.map((item, index) => {
    return item * 10;
});
console.log(multiplyBy10);

// add surname (thapa)
const names = ["nitan", "ram", "shyam"];
const addThapa = names.map(function (name, index) {
    return `${index}: ${name} thapa`;
});
console.log(addThapa);
