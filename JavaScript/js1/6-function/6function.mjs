// Arrow Function

// ? make a arrow function named isGreaterThan18 , pass a value , the function must return true if the given age is greater or equals to 18 otherwise return false
const age = 40;
const is18 = (age) => {
    if (age === 18) {
        return true;
    } else {
        return false;
    }
};

const _is18 = is18(18);
console.log(_is18);

// ? make a arrow function that take a number and return you can enter room only if the enter number is less than 18 else you can not enter
const roomPromission = () => {
    if (age > 18) {
        return "you can enter room";
    } else {
        return "you can not enter room";
    }
};
const _roomPromission = roomPromission(15);
console.log(_roomPromission);

//  ? make a arrow function named isEven , pass a value, that return true if the given number is even else return false
const isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
const _isEven = isEven(5);
console.log(_isEven);

// * with ternery operation
// const ___isEven = (number) => (number % 2 === 0 ? true : false);
// console.log(___isEven(7));

// ? make a arrow function that takes 3 input as number and return average of given number
const average = (a, b, c) => (a + b + c) / 3; // devide by the number of input finding the average number
console.log(average(1, 2, 3));
