const numbers = [2, 4, 5, 6, 7, 8];

// at lest one element are greater then 5

const greaterNum = numbers.every((number, index) => {
    if (number >= 5) {
        return true;
    } else {
        return false;
    }
});

console.log(greaterNum);
