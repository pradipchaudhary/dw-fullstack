const number1 = [2, 4, 6];
const number2 = [8, 10, 12];

// Add array by spread operator
// => ... is a spread operator and and it's wrapper opener
const toatlNumber = [...number1, ...number2];
const reverseNumber = [...number2, ...number1];
console.log(toatlNumber);

console.log(reverseNumber);
