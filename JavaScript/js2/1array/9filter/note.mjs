/*
 * File: script.js
 * Purpose: Demonstrate JavaScript array method filter and other examples.
 */

/*
 * Syntax: array.filter(callback(element[, index[, array]])[, thisArg])
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 *
 * Callback:
 * - element: The current element being processed in the array.
 * - index (optional): The index of the current element being processed in the array.
 * - array (optional): The array filter was called upon.
 */

/*
 * Example: Filtering Even Numbers
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0; // Check if the number is even
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

/*
 * Example: Filtering Objects
 */
const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jim", age: 18 },
    { name: "Jill", age: 40 },
];

const adults = people.filter(function (person) {
    return person.age >= 21; // Check if the person's age is 21 or older
});

console.log(adults);
// Output:
// [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Jill', age: 40 }
// ]

/*
 * Example: Removing Falsy Values
 */
const mixedArray = [0, "hello", false, "", 42, undefined, null, "world"];

const truthyValues = mixedArray.filter(Boolean); // Filter out falsy values

console.log(truthyValues); // Output: ["hello", 42, "world"]

/*
 * Practical Use Case: Filtering Unique Values
 */
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbersWithDuplicates.filter(
    (value, index, self) => self.indexOf(value) === index
);

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

/*
 * Practical Use Case: Filtering Based on User Input
 */
const searchQuery = "an";
const items = ["apple", "banana", "grape", "orange"];
const filteredItems = items.filter((item) => item.includes(searchQuery));

console.log(filteredItems); // Output: ["banana", "orange"]

/*
 * Function: capitalizeFirstLetter
 * Purpose: Capitalizes the first letter of a string.
 *
 * Syntax:
 * capitalizeFirstLetter(string)
 *
 * - string: The input string to capitalize.
 */
function capitalizeFirstLetter(string) {
    if (string.length === 0) {
        return string; // Handle empty string case
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Example usage:
const inputString = "hello";
const capitalizedString = capitalizeFirstLetter(inputString);

console.log(capitalizedString); // Output: "Hello"

/*
 * Function: transformArray
 * Purpose: Transforms an array where odd numbers are multiplied by 100 and even numbers are multiplied by 0.
 *
 * Syntax:
 * transformArray(arr)
 *
 * - arr: The input array to transform.
 *
 * Callback:
 * - num: The current element being processed in the array.
 */
function transformArray(arr) {
    return arr.map(function (num) {
        if (num % 2 === 0) {
            return num * 0; // For even numbers
        } else {
            return num * 100; // For odd numbers
        }
    });
}

// Example usage:
const inputArray = [1, 3, 4, 5];
const resultArray = transformArray(inputArray);

console.log(resultArray); // Output: [100, 300, 0, 500]

/*
 * Function: findOddIndexValues
 * Purpose: Finds the values at odd indices in an array.
 *
 * Syntax:
 * findOddIndexValues(arr)
 *
 * - arr: The input array to process.
 */
function findOddIndexValues(arr) {
    const oddIndexValues = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            oddIndexValues.push(arr[i]);
        }
    }
    return oddIndexValues;
}

// Example usage:
const exampleArray = [10, 20, 30, 40, 50, 60, 70];
const oddIndexResult = findOddIndexValues(exampleArray);

console.log(oddIndexResult); // Output: [20, 40, 60]

/*
 * Function: separateOddEven
 * Purpose: Separates odd and even numbers from an array.
 *
 * Syntax:
 * separateOddEven(arr)
 *
 * - arr: The input array to process.
 *
 * Callback:
 * - num: The current element being processed in the array.
 */
function separateOddEven(arr) {
    const result = {
        odd: [],
        even: [],
    };
    arr.forEach(function (num) {
        if (num % 2 === 0) {
            result.even.push(num); // For even numbers
        } else {
            result.odd.push(num); // For odd numbers
        }
    });
    return result;
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const separatedNumbers = separateOddEven(numbersArray);

console.log(separatedNumbers);
// Output: { odd: [1, 3, 5, 7, 9], even: [2, 4, 6, 8, 10] }
