// This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.

const foods = ["apple", "mango", "Banana", "orrange"];

const favFoods = foods.some((food) => {
    if (food === "apple") {
        return true;
    } else {
        return false;
    }
});

console.log(favFoods);

const numbers = [1, 2, 3, 4, 5, 6, 7];

// at least one element is greater then 5

const greaterNumber = (arr) => {
    console.log(arr);
    return arr.some((number) => number > 5);
};
console.log(greaterNumber([1, 2, 3, 4, 5, 6, 7]));
