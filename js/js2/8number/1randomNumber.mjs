// Generate Random Number

const randomNumber = Math.random();
console.log(randomNumber); // [0 to 1]

// 0 to 100
const randomNumber2 = Math.random() * 100;
console.log(randomNumber2);

console.log(Math.random() * 10 + 5); //  [ 0, 1]* 10 + 5 ===> [0, 10] + 5 ===> [5, 15]
console.log(Math.random() * 10 - 5); // [0, 1] * 10 - 5 ===> [0, 10] - 5 ===> [-5, 5]

// Ceil and Floor Methods
console.log(Math.ceil(1.4)); // 2

console.log(Math.floor(1.8)); // 1
