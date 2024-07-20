# Arrary Methods

## 1. Map():

In JavaScript, the `map()` method is used to create a new array by applying a provided function to each element of the original array. It does not modify the original array; instead, it returns a new array with the transformed elements. Here's a detailed explanation and examples to help you understand how `map()` works:

### Syntax

```javascript
let newArray = array.map(callback(currentValue, index, array), thisArg);
```

-   **`callback`**: A function that is called for every element of the array. Each time `callback` executes, the returned value is added to the new array.
    -   **`currentValue`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `map` was called upon.
-   **`thisArg`** (optional): A value to use as `this` when executing the `callback`.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function (num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8]
```

### Example 2: Using Arrow Functions

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### Example 3: Converting Array of Objects

```javascript
const users = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "Emily", lastName: "Jones" },
];

const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);
console.log(fullNames); // ['John Doe', 'Jane Smith', 'Emily Jones']
```

### Example 4: Using `index` and `array` Parameters

```javascript
const numbers = [1, 2, 3, 4];
const processed = numbers.map((num, index) => {
    return num + index;
});
console.log(processed); // [1, 3, 5, 7]
```

### Example 5: Using `thisArg`

You can provide a `this` value to use inside the callback function by using the second argument of `map`.

```javascript
const multiplier = {
    factor: 2,
};

const numbers = [1, 2, 3, 4];
const multiplied = numbers.map(function (num) {
    return num * this.factor;
}, multiplier);
console.log(multiplied); // [2, 4, 6, 8]
```

### Key Points

-   **Immutability**: The `map()` method does not change the original array; it returns a new array.
-   **Function Call**: The `map()` method calls the provided function once for each element in the array.
-   **Array Length**: The `map()` method creates a new array with the same length as the original array.
-   **Skipping Unassigned Indices**: If there are unassigned indices in the original array, they will be skipped in the `map()` method.

The `map()` method is a powerful tool for transforming arrays in JavaScript, enabling clean and concise data manipulation.
