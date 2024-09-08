# Array

JavaScript arrays are a fundamental part of the language, used to store multiple values in a single variable. Here's a detailed overview of JavaScript arrays:

### 1. Declaration and Initialization

You can create an array in JavaScript using various methods:

#### Using Array Literal

```javascript
let array = [];
let array = [1, 2, 3, "four", true];
```

#### Using the `Array` Constructor

```javascript
let array = new Array();
let array = new Array(1, 2, 3, "four", true);
```

### 2. Accessing Array Elements

Array elements can be accessed using their index, which starts at 0.

```javascript
let array = [1, 2, 3];
console.log(array[0]); // Outputs: 1
console.log(array[2]); // Outputs: 3
```

### 3. Modifying Array Elements

You can change an element in an array by accessing its index and assigning a new value.

```javascript
let array = [1, 2, 3];
array[0] = 10;
console.log(array); // Outputs: [10, 2, 3]
```

### 4. Array Properties

#### `length`

The `length` property of an array gives the number of elements in the array.

```javascript
let array = [1, 2, 3];
console.log(array.length); // Outputs: 3
```

### 5. Common Array Methods

#### `push()` and `pop()`

-   `push()` adds one or more elements to the end of an array.
-   `pop()` removes the last element from an array.

```javascript
let array = [1, 2, 3];
array.push(4); // [1, 2, 3, 4]
array.pop(); // [1, 2, 3]
```

#### `shift()` and `unshift()`

-   `shift()` removes the first element from an array.
-   `unshift()` adds one or more elements to the beginning of an array.

```javascript
let array = [1, 2, 3];
array.shift(); // [2, 3]
array.unshift(0); // [0, 2, 3]
```

#### `concat()`

The `concat()` method merges two or more arrays.

```javascript
let array1 = [1, 2];
let array2 = [3, 4];
let array3 = array1.concat(array2); // [1, 2, 3, 4]
```

#### `slice()`

The `slice()` method returns a shallow copy of a portion of an array into a new array object.

```javascript
let array = [1, 2, 3, 4];
let newArray = array.slice(1, 3); // [2, 3]
```

#### `splice()`

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```javascript
let array = [1, 2, 3, 4];
array.splice(1, 2, "a", "b"); // [1, 'a', 'b', 4]
```

#### `forEach()`

The `forEach()` method executes a provided function once for each array element.

```javascript
let array = [1, 2, 3];
array.forEach(function (element) {
    console.log(element); // Outputs: 1, 2, 3
});
```

#### `map()`

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
let array = [1, 2, 3];
let newArray = array.map(function (element) {
    return element * 2;
}); // [2, 4, 6]
```

#### `filter()`

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let array = [1, 2, 3, 4];
let newArray = array.filter(function (element) {
    return element > 2;
}); // [3, 4]
```

#### `reduce()`

The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```javascript
let array = [1, 2, 3, 4];
let sum = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // 10
```

### 6. Iterating Over Arrays

You can iterate over arrays using various methods like `for` loops, `for...of` loops, and the `forEach()` method.

```javascript
let array = [1, 2, 3];

// Using for loop
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Using for...of loop
for (let element of array) {
    console.log(element);
}

// Using forEach method
array.forEach(function (element) {
    console.log(element);
});
```

### 7. Multidimensional Arrays

JavaScript allows you to create arrays within arrays, known as multidimensional arrays.

```javascript
let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(array[0][1]); // Outputs: 2
```

JavaScript arrays are versatile and powerful, allowing for complex data manipulation and storage. Understanding these basics will help you utilize arrays effectively in your JavaScript programming.

# JavaScript Array Methods

## 1. `forEach()`

In JavaScript, the `forEach()` method executes a provided function once for each array element. It does not return a new array but rather operates on each element in the existing array.

### Syntax

```javascript
array.forEach(callback(currentValue, index, array), thisArg);
```

-   **`callback`**: A function that is executed for each element of the array.
    -   **`currentValue`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `forEach` was called upon.
-   **`thisArg`** (optional): A value to use as `this` when executing the `callback`.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach(function (num) {
    console.log(num);
});
// Output: 1, 2, 3, 4
```

### Example 2: Using Arrow Functions

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num));
// Output: 1, 2, 3, 4
```

### Example 3: Modifying Array Elements

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach((num, index, arr) => {
    arr[index] = num * 2;
});
console.log(numbers); // [2, 4, 6, 8]
```

### Key Points

-   **No Return Value**: The `forEach()` method does not return a new array, it returns `undefined`.
-   **Cannot Break**: You cannot break out of a `forEach()` loop except by throwing an exception.
-   **Mutability**: `forEach()` can modify the elements of the array it is called on.

The `forEach()` method is useful for performing operations on each element of an array without creating a new array.

## 2. `map()`

In JavaScript, the `map()` method is used to create a new array by applying a provided function to each element of the original array. It does not modify the original array; instead, it returns a new array with the transformed elements.

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

## 3. `filter()`

In JavaScript, the `filter()` method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.

### Syntax

```javascript
let newArray = array.filter(callback(element, index, array), thisArg);
```

-   **`callback`**: A function that is called for every element of the array. If the function returns `true`, the element is included in the new array.
    -   **`element`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `filter` was called upon.
-   **`thisArg`** (optional): A value to use as `this` when executing the `callback`.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
```

### Example 2: Using Arrow Functions

```javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

### Example 3: Filtering Objects

```javascript
const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 18 },
    { name: "Emily", age: 30 },
];

const adults = users.filter((user) => user.age >= 21);
console.log(adults); // [{ name: "John", age: 25 }, { name: "Emily", age: 30 }]
```

### Key Points

-   **Immutability**: The `filter()` method does not change the original array; it returns a new array.
-   **Function Call**: The `filter()` method calls the provided function once for each element in the array.
-   **Array Length**: The `filter()` method creates a new array with elements that pass the test.

The `filter()` method is useful for creating a subset of an array based on certain conditions.

## 4. `reduce()`

In JavaScript, the `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It does not modify the original array.

### Syntax

```javascript
let result = array.reduce(
    callback(accumulator, currentValue, index, array),
    initialValue
);
```

-   **`callback`**: A function that is executed on each element of the array.
    -   **`accumulator`**: The accumulated value previously returned in the last invocation of the callback.
    -   **`currentValue`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `reduce` was called upon.
-   **`initialValue`** (optional): A value to use as the first argument to the first call of the callback.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (acc, num) {
    return acc + num;
}, 0);
console.log(sum); // 10
```

### Example 2: Using Arrow Functions

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

### Example 3: Reducing to an Object

```javascript
const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 18 },

    { name: "Emily", age: 30 },
];

const usersByName = users.reduce((acc, user) => {
    acc[user.name] = user;
    return acc;
}, {});
console.log(usersByName);
// { John: { name: 'John', age: 25 }, Jane: { name: 'Jane', age: 18 }, Emily: { name: 'Emily', age: 30 } }
```

### Key Points

-   **Immutability**: The `reduce()` method does not change the original array; it returns a single value.
-   **Accumulator**: The `reduce()` method accumulates the callback's return values.
-   **Array Length**: The `reduce()` method reduces the array to a single value.

The `reduce()` method is powerful for performing various operations such as summing numbers, flattening arrays, or grouping data.

## 5. `reduceRight()`

In JavaScript, the `reduceRight()` method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

### Syntax

```javascript
let result = array.reduceRight(
    callback(accumulator, currentValue, index, array),
    initialValue
);
```

-   **`callback`**: A function that is executed on each element of the array.
    -   **`accumulator`**: The accumulated value previously returned in the last invocation of the callback.
    -   **`currentValue`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `reduceRight` was called upon.
-   **`initialValue`** (optional): A value to use as the first argument to the first call of the callback.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduceRight(function (acc, num) {
    return acc + num;
}, 0);
console.log(sum); // 10
```

### Example 2: Using Arrow Functions

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduceRight((acc, num) => acc + num, 0);
console.log(sum); // 10
```

### Key Points

-   **Immutability**: The `reduceRight()` method does not change the original array; it returns a single value.
-   **Right-to-Left**: The `reduceRight()` method processes elements from right-to-left.

The `reduceRight()` method is useful when you need to reduce an array from the last element to the first element.

## 6. `every()`

In JavaScript, the `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

### Syntax

```javascript
let result = array.every(callback(element, index, array), thisArg);
```

-   **`callback`**: A function that is called for every element of the array.
    -   **`element`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `every` was called upon.
-   **`thisArg`** (optional): A value to use as `this` when executing the `callback`.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4];
const allEven = numbers.every(function (num) {
    return num % 2 === 0;
});
console.log(allEven); // false
```

### Example 2: Using Arrow Functions

```javascript
const numbers = [2, 4, 6, 8];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // true
```

### Key Points

-   **Boolean Return**: The `every()` method returns `true` if the callback function returns a truthy value for every array element; otherwise, `false`.
-   **Early Exit**: The `every()` method stops executing as soon as it finds an element that does not satisfy the condition.

The `every()` method is useful for checking if all elements in an array meet a certain condition.

## 7. `some()`

In JavaScript, the `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

### Syntax

```javascript
let result = array.some(callback(element, index, array), thisArg);
```

-   **`callback`**: A function that is called for every element of the array.
    -   **`element`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `some` was called upon.
-   **`thisArg`** (optional): A value to use as `this` when executing the `callback`.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4];
const hasEven = numbers.some(function (num) {
    return num % 2 === 0;
});
console.log(hasEven); // true
```

### Example 2: Using Arrow Functions

```javascript
const numbers = [1, 3, 5, 8];
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // true
```

### Key Points

-   **Boolean Return**: The `some()` method returns `true` if the callback function returns a truthy value for at least one array element; otherwise, `false`.
-   **Early Exit**: The `some()` method stops executing as soon as it finds an element that satisfies the condition.

The `some()` method is useful for checking if any elements in an array meet a certain condition.

## 8. `find()`

In JavaScript, the `find()` method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns `undefined`.

### Syntax

```javascript
let element = array.find(callback(element, index, array), thisArg);
```

-   **`callback`**: A function that is called for every element of the array.
    -   **`element`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `find` was called upon.
-   **`thisArg`** (optional): A value to use as `this` when executing the `callback`.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4];
const firstEven = numbers.find(function (num) {
    return num % 2 === 0;
});
console.log(firstEven); // 2
```

### Example 2: Using Arrow Functions

```javascript
const numbers = [1, 3, 5, 8];
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // 8
```

### Key Points

-   **Single Element Return**: The `find()` method returns the value of the first element that satisfies the testing function.
-   **Early Exit**: The `find()` method stops executing as soon as it finds an element that satisfies the condition.
-   **Undefined**: The `find()` method returns `undefined` if no elements satisfy the testing function.

The `find()` method is useful for retrieving a single element from an array based on a condition.

## 9. `findIndex()`

In JavaScript, the `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.

### Syntax

```javascript
let index = array.findIndex(callback(element, index, array), thisArg);
```

-   **`callback`**: A function that is called for every element of the array.
    -   **`element`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `findIndex` was called upon.
-   **`thisArg`** (optional): A value to use as `this` when executing the `callback`.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4];
const firstEvenIndex = numbers.findIndex(function (num) {
    return num % 2 === 0;
});
console.log(firstEvenIndex); // 1
```

### Example 2: Using Arrow Functions

```javascript
const numbers = [1, 3, 5, 8];
const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex); // 3
```

### Key Points

-   **Single Index Return**: The `findIndex()` method returns the index of the first element that satisfies the testing function.
-   **Early Exit**: The `findIndex()` method stops executing as soon as it finds an element that satisfies the condition.
-   **-1 Return**: The `findIndex()` method returns -1 if no elements satisfy the testing function.

The `findIndex()` method is useful for retrieving the index of a
certain element in an array based on a condition.

## 10. `indexOf()`

In JavaScript, the `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.

### Syntax

```javascript
let index = array.indexOf(searchElement, fromIndex);
```

-   **`searchElement`**: The element to locate in the array.
-   **`fromIndex`** (optional): The index to start the search from.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4, 2];
const indexOfTwo = numbers.indexOf(2);
console.log(indexOfTwo); // 1
```

### Example 2: Using `fromIndex`

```javascript
const numbers = [1, 2, 3, 4, 2];
const indexOfTwo = numbers.indexOf(2, 2);
console.log(indexOfTwo); // 4
```

### Key Points

-   **Single Index Return**: The `indexOf()` method returns the index of the first occurrence of the specified element.
-   **-1 Return**: If the element is not found, `indexOf()` returns -1.
-   **Start Index**: You can specify a `fromIndex` to start searching from a particular index.

The `indexOf()` method is useful for finding the position of an element in an array.

## 11. `lastIndexOf()`

In JavaScript, the `lastIndexOf()` method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting from `fromIndex`.

### Syntax

```javascript
let index = array.lastIndexOf(searchElement, fromIndex);
```

-   **`searchElement`**: The element to locate in the array.
-   **`fromIndex`** (optional): The index to start the search from, backwards.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4, 2];
const lastIndexOfTwo = numbers.lastIndexOf(2);
console.log(lastIndexOfTwo); // 4
```

### Example 2: Using `fromIndex`

```javascript
const numbers = [1, 2, 3, 4, 2];
const lastIndexOfTwo = numbers.lastIndexOf(2, 3);
console.log(lastIndexOfTwo); // 1
```

### Key Points

-   **Single Index Return**: The `lastIndexOf()` method returns the index of the last occurrence of the specified element.
-   **-1 Return**: If the element is not found, `lastIndexOf()` returns -1.
-   **Start Index**: You can specify a `fromIndex` to start searching backwards from a particular index.

The `lastIndexOf()` method is useful for finding the last position of an element in an array.

## 12. `includes()`

In JavaScript, the `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

### Syntax

```javascript
let exists = array.includes(searchElement, fromIndex);
```

-   **`searchElement`**: The element to search for.
-   **`fromIndex`** (optional): The position in this array at which to begin searching for `searchElement`.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4];
const includesTwo = numbers.includes(2);
console.log(includesTwo); // true
```

### Example 2: Using `fromIndex`

```javascript
const numbers = [1, 2, 3, 4, 2];
const includesTwo = numbers.includes(2, 3);
console.log(includesTwo); // true
```

### Key Points

-   **Boolean Return**: The `includes()` method returns `true` if the array contains the specified element, otherwise `false`.
-   **fromIndex Usage**: The `fromIndex` parameter specifies the position in the array at which to begin searching.

The `includes()` method is useful for checking if an array contains a specific element.

## 13. `concat()`

In JavaScript, the `concat()` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

### Syntax

```javascript
let newArray = array1.concat(array2, array3, ..., arrayN);
```

-   **`array1, array2, ..., arrayN`**: Arrays and/or values to concatenate into a new array.

### Example 1: Basic Usage

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
```

### Example 2: Concatenating Values

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(4, 5, 6);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
```

### Key Points

-   **New Array**: The `concat()` method returns a new array containing elements from the arrays or values provided.
-   **Immutability**: The original arrays are not modified by `concat()`.
-   **Handling Non-array Values**: `concat()` can also concatenate non-array values.

The `concat()` method is useful for combining arrays without modifying the original arrays.

## 14. `splice()`

In JavaScript, the `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

### Syntax

```javascript
let removedItems = array.splice(start, deleteCount, item1, item2, ...);
```

-   **`start`**: The index at which to start changing the array. If greater than the length of the array, `start` will be set to the length of the array. If negative, it will begin that many elements from the end of the array (with origin -1, meaning -n is the index of the nth last element and is therefore equivalent to array.length - n). If `start` is negative, `start` will be set to `Math.max(array.length + start, 0)`.
-   **`deleteCount`** (optional): An integer indicating the number of elements in the array to remove from `start`.
-   **`item1, item2, ...`** (optional): The elements to add to the array, beginning from `start`. If you don't specify any elements, `splice()` will only remove elements from the array.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4, 5];
const removedItems = numbers.splice(2, 2);
console.log(numbers); // [1, 2, 5]
console.log(removedItems); // [3, 4]
```

### Example 2: Removing and Adding Elements

```javascript
const numbers = [1, 2, 3, 4, 5];
const removedItems = numbers.splice(2, 2, 6, 7);
console.log(numbers); // [1, 2, 6, 7, 5]
console.log(removedItems); // [3, 4]
```

### Key Points

-   **Modification in Place**: The `splice()` method modifies the original array and returns an array of the removed elements.
-   **Adding Elements**: You can add elements by specifying them after `deleteCount`.

The `splice()` method is useful for making changes to an array by removing, replacing, or adding elements.

## 15. `slice()`

In JavaScript, the `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (`end` not included) where `start` and `end` represent the index of items in that array. The original array will not be modified.

### Syntax

```javascript
let newArray = array.slice(start, end);
```

-   **`start`**: The beginning index of the slice. If `start` is undefined, slice begins from index 0.
-   **`end`** (optional): The end index of the slice. `slice` extracts up to but not including `end`. If `end` is omitted, slice extracts through the end of the sequence (`array.length`).

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4, 5];
const slicedArray = numbers.slice(2);
console.log(slicedArray); // [3, 4, 5]
console.log(numbers); // [1, 2, 3, 4, 5] (original array is unchanged)
```

### Example 2: Slicing with `start` and `end`

```javascript
const numbers = [1, 2, 3, 4, 5];
const slicedArray = numbers.slice(1, 4);
console.log(slicedArray); // [2, 3, 4]
```

### Key Points

-   **New Array**: The `slice()` method returns a new array containing the extracted elements.
-   **Immutability**: The original array is not modified by `slice()`.

The `slice()` method is useful for extracting a portion of an array into a new array without modifying the original array.

## 16. `shift()`

In JavaScript, the `shift()` method removes

the first element from an array and returns that removed element. This method changes the length of the array.

### Syntax

```javascript
let shiftedElement = array.shift();
```

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3];
const shiftedElement = numbers.shift();
console.log(shiftedElement); // 1
console.log(numbers); // [2, 3]
```

### Key Points

-   **Element Removal**: The `shift()` method removes the first element from the array.
-   **Length Adjustment**: The `shift()` method changes the length of the array.

The `shift()` method is useful for managing arrays where elements need to be removed from the beginning.

## 17. `unshift()`

In JavaScript, the `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

### Syntax

```javascript
let newLength = array.unshift(element1, element2, ...);
```

-   **`element1, element2, ...`**: Elements to add to the front of the array.

### Example 1: Basic Usage

```javascript
const numbers = [2, 3];
const newLength = numbers.unshift(1);
console.log(newLength); // 3
console.log(numbers); // [1, 2, 3]
```

### Example 2: Adding Multiple Elements

```javascript
const numbers = [3];
const newLength = numbers.unshift(1, 2);
console.log(newLength); // 3
console.log(numbers); // [1, 2, 3]
```

### Key Points

-   **Length Return**: The `unshift()` method returns the new length of the array after adding elements.
-   **Array Modification**: The `unshift()` method modifies the original array.

The `unshift()` method is useful for adding elements to the beginning of an array.

## 18. `push()`

In JavaScript, the `push()` method adds one or more elements to the end of an array and returns the new length of the array.

### Syntax

```javascript
let newLength = array.push(element1, element2, ...);
```

-   **`element1, element2, ...`**: Elements to add to the end of the array.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3];
const newLength = numbers.push(4);
console.log(newLength); // 4
console.log(numbers); // [1, 2, 3, 4]
```

### Example 2: Adding Multiple Elements

```javascript
const numbers = [1, 2];
const newLength = numbers.push(3, 4);
console.log(newLength); // 4
console.log(numbers); // [1, 2, 3, 4]
```

### Key Points

-   **Length Return**: The `push()` method returns the new length of the array after adding elements.
-   **Array Modification**: The `push()` method modifies the original array.

The `push()` method is useful for appending elements to the end of an array.

## 19. `pop()`

In JavaScript, the `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

### Syntax

```javascript
let removedElement = array.pop();
```

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3];
const removedElement = numbers.pop();
console.log(removedElement); // 3
console.log(numbers); // [1, 2]
```

### Key Points

-   **Element Removal**: The `pop()` method removes the last element from the array.
-   **Length Adjustment**: The `pop()` method changes the length of the array.

The `pop()` method is useful for managing arrays where elements need to be removed from the end.

## 20. `join()`

In JavaScript, the `join()` method creates and returns a new string by concatenating all elements in an array, separated by a specified separator string.

### Syntax

```javascript
let joinedString = array.join(separator);
```

-   **`separator`** (optional): A string used to separate each element in the array. If omitted, elements are separated with a comma (`','`).

### Example 1: Basic Usage

```javascript
const elements = ["Fire", "Wind", "Rain"];
const joinedString = elements.join();
console.log(joinedString); // "Fire,Wind,Rain"
```

### Example 2: Using Custom Separator

```javascript
const elements = ["Fire", "Wind", "Rain"];
const joinedString = elements.join(" - ");
console.log(joinedString); // "Fire - Wind - Rain"
```

### Key Points

-   **String Return**: The `join()` method returns a string representing the elements of the array concatenated together.
-   **Original Array**: The `join()` method does not modify the original array.

The `join()` method is useful for converting array elements into a single string with a specified separator.

## 21. `toString()`

In JavaScript, the `toString()` method returns a string representing the specified array and its elements.

### Syntax

```javascript
let arrayString = array.toString();
```

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3];
const arrayString = numbers.toString();
console.log(arrayString); // "1,2,3"
```

### Key Points

-   **String Return**: The `toString()` method returns a string representation of the array and its elements.
-   **Original Array**: The `toString()` method does not modify the original array.

The `toString()` method is automatically called when an array is to be represented as a text value or when an array is concatenated with a string.

## 22. `reverse()`

In JavaScript, the `reverse()` method reverses the order of the elements in an array in place, and then returns the reversed array.

### Syntax

```javascript
let reversedArray = array.reverse();
```

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3];
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // [3, 2, 1]
console.log(numbers); // [3, 2, 1] (original array is also reversed)
```

### Key Points

-   **Array Modification**: The `reverse()` method modifies the original array and returns the reversed array.
-   **In-Place Operation**: The elements of the array are rearranged in place, without creating a new array.

The `reverse()` method is useful for reversing the order of elements in an array.

## 23. `sort()`

In JavaScript, the `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, based on string Unicode code points.

### Syntax

```javascript
let sortedArray = array.sort(compareFunction);
```

-   **`compareFunction`** (optional): A function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

### Example 1: Basic Usage

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sortedFruits = fruits.sort();
console.log(sortedFruits); // ["Apple", "Banana", "Mango", "Orange"]
```

### Example 2: Sorting Numbers

```javascript
const numbers = [4, 2, 5, 1, 3];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // [1, 2, 3, 4, 5]
```

### Key Points

-   **Array Modification**: The `sort()` method modifies the original array and returns the sorted array.
-   **Default Sorting**: By default, `sort()` sorts elements as strings in alphabetical and ascending order.

The `sort()` method is versatile and can be customized with a compare function for sorting elements in various orders.

## 24. `fill()`

In JavaScript, the `fill()` method changes all elements in an array to a static value, from a start index (default `0`) to an end index (default array length). It returns the modified array.

### Syntax

```javascript
let filledArray = array.fill(value, start, end);
```

-   **`value`**: The value to fill the array elements with.
-   **`start`** (optional): The index to start filling the array. Default is `0`.
-   **`end`** (optional): The index to end filling the array (not inclusive). Default is `array.length`.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4, 5];
const filledNumbers = numbers.fill(0);
console.log(filledNumbers); // [0, 0, 0, 0, 0]
```

### Example 2: Filling with a Range

```javascript
const numbers = [1, 2, 3, 4, 5];
const filledNumbers = numbers.fill(0, 2, 4);
console.log(filledNumbers); // [1, 2, 0, 0, 5]
```

### Key Points

-   **Array Modification**: The `fill()` method modifies the original array and returns the modified array.
-   **Range Filling**: You can specify a start and end index to limit where `fill()` operates.

The `fill()` method is useful for initializing or resetting parts of an array with a specific value.

## 25. `includes()`

In JavaScript, the `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

### Syntax

```javascript
let exists = array.includes(searchElement, fromIndex);
```

-   **`searchElement`**: The element to search for.
-   **`fromIndex`** (optional): The position in this array at which to begin searching for `searchElement`.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4, 5];
const includesTwo = numbers.includes(2);
console.log(includesTwo); // true
```

### Example 2: Using `fromIndex`

```javascript
const numbers = [1, 2, 3, 4, 5];
const includesTwo = numbers.includes(2, 3);
console.log(includesTwo); // false (search starts from index 3)
```

### Key Points

-   **Boolean Return**: The `includes()` method returns `true` if the array contains the specified element, otherwise `false`.
-   **fromIndex Usage**: The `fromIndex` parameter specifies the position in the array at which to begin searching.

The `includes()` method is useful for checking if an array contains a specific element.

## 26. `every()`

In JavaScript, the `every()` method tests whether all elements in an array pass the test implemented by the provided function. It returns `true` if all elements pass the test; otherwise, it returns `false`.

### Syntax

```javascript
let allPass = array.every(callback(currentValue, index, array));
```

-   **`callback`**: A function to test each element of the array.
    -   **`currentValue`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `every` was called upon.

### Example 1: Basic Usage

```javascript
const ages = [18, 20, 22, 24];
const allAdults = ages.every((age) => age >= 18);
console.log(allAdults); // true
```

### Example 2: Using `index` Parameter

```javascript
const ages = [18, 20, 22, 24];
const allUnder25 = ages.every((age, index) => age < 25);
console.log(allUnder25); // true
```

### Key Points

-   **Boolean Return**: The `every()` method returns `true` if all elements in the array pass the test implemented by the provided function; otherwise, it returns `false`.
-   **Short-circuiting**: The `every()` method stops once it finds an element that does not pass the test.

The `every()` method is useful for checking if all elements in an array satisfy a condition.

## 27. `some()`

In JavaScript, the `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns `true` if at least one element passes the test; otherwise, it returns `false`.

### Syntax

```javascript
let atLeastOnePasses = array.some(callback(currentValue, index, array));
```

-   **`callback`**: A function to test each element of the array.
    -   **`currentValue`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `some` was called upon.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log(hasEvenNumber); // true
```

### Example 2: Using `index` Parameter

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasLargeNumber = numbers.some((num, index) => num > 10);
console.log(hasLargeNumber); // false
```

### Key Points

-   **Boolean Return**: The `some()` method returns `true` if at least one element in the array passes the test implemented by the provided function; otherwise, it returns `false`.
-   **Short-circuiting**: The `some()` method stops once it finds an element that passes the test.

The `some()` method is useful for checking if at least one element in an array satisfies a condition.

## 28. `filter()`

In JavaScript, the `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

### Syntax

```javascript
let newArray = array.filter(callback(currentValue, index, array));
```

-   **`callback`**: A function to test each element of the array.
    -   **`currentValue`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `filter` was called upon.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

### Example 2: Using `index` Parameter

```javascript
const numbers = [10, 15, 20, 25, 30];
const numbersAbove20 = numbers.filter((num, index) => num > 20);
console.log(numbersAbove20); // [25, 30]
```

### Key Points

-   **New Array Return**: The `filter()` method returns a new array with elements that pass the test implemented by the provided function.
-   **Original Array Unchanged**: The `filter()` method does not modify the original array.

The `filter()` method is useful for extracting elements from an array based on a condition.

## 29. `reduce()`

In JavaScript, the `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

### Syntax

```javascript
let reducedValue = array.reduce(
    callback(accumulator, currentValue, index, array),
    initialValue
);
```

-   **`callback`**: A function to execute on each element in the array, taking four arguments:
    -   **`accumulator`**: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or `initialValue`, if supplied (see below).
    -   **`currentValue`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `reduce` was called upon.
-   **`initialValue`** (optional): A value to use as the first argument to the first call of the `callback`. If no `initialValue` is supplied, the first element in the array will be used as the initial `accumulator` value and skipped as `currentValue`.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);
console.log(sum); // 15
```

### Example 2: Using `initialValue`

```javascript
const numbers = [1, 2, 3, 4, 5];
const product = numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
);
console.log(product); // 120
```

### Key Points

-   **Single Value Return**: The `reduce()` method returns a single value that is the result of applying the function to each element in the array.
-   **Accumulator Usage**: The `accumulator` accumulates the callback's return values and is updated with each iteration.

The `reduce()` method is useful for performing calculations or aggregations on array elements.

## 30. `reduceRight()`

In JavaScript, the `reduceRight()` method applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value.

### Syntax

```javascript
let reducedValue = array.reduceRight(
    callback(accumulator, currentValue, index, array),
    initialValue
);
```

-   **`callback`**: A function to execute on each element in the array, taking four arguments (same as `reduce()` method).
-   **`initialValue`** (optional): A value to use as the first argument to the first call of the `callback`. If no `initialValue` is supplied, the last element in the array will be used as the initial `accumulator` value and skipped as `currentValue`.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3, 4, 5];
const reversedString = numbers.reduceRight(
    (accumulator, currentValue) => accumulator + currentValue,
    ""
);
console.log(reversedString); // "54321"
```

### Example 2: Using `initialValue`

```javascript
const numbers = [1, 2, 3, 4, 5];
const reversedString = numbers.reduceRight(
    (accumulator, currentValue) => accumulator + currentValue.toString(),
    ""
);
console.log(reversedString); // "54321"
```

### Key Points

-   **Single Value Return**: The `reduceRight()` method returns a single value that is the result of applying the function to each element in the array, starting from the rightmost element.
-   **Accumulator Usage**: The `accumulator` accumulates the callback's return values and is updated with each iteration.

The `reduceRight()` method is useful for performing calculations or aggregations on array elements from right to left.

## 31. `find()`

In JavaScript, the `find()` method returns the first element in an array that satisfies the provided testing function. Otherwise, it returns `undefined`.

### Syntax

```javascript
let foundElement = array.find(callback(element, index, array));
```

-   **`callback`**: A function to test each element of the array.
    -   **`element`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `find` was called upon.

### Example 1: Basic Usage

```javascript
const numbers = [10, 20, 30, 40, 50];
const foundNumber = numbers.find((num) => num > 25);
console.log(foundNumber); // 30
```

### Example 2: Using `index` Parameter

```javascript
const numbers = [
    10, 20,

    30, 40, 50,
];
const foundNumber = numbers.find((num, index) => index > 2);
console.log(foundNumber); // 40
```

### Key Points

-   **Single Element Return**: The `find()` method returns the first element in the array that satisfies the provided testing function.
-   **Undefined Return**: If no element satisfies the condition, `undefined` is returned.

The `find()` method is useful for locating a single element in an array based on a condition.

## 32. `findIndex()`

In JavaScript, the `findIndex()` method returns the index of the first element in an array that satisfies the provided testing function. Otherwise, it returns `-1`.

### Syntax

```javascript
let foundIndex = array.findIndex(callback(element, index, array));
```

-   **`callback`**: A function to test each element of the array.
    -   **`element`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `findIndex` was called upon.

### Example 1: Basic Usage

```javascript
const numbers = [10, 20, 30, 40, 50];
const foundIndex = numbers.findIndex((num) => num > 25);
console.log(foundIndex); // 2 (index of the first element > 25)
```

### Example 2: Using `index` Parameter

```javascript
const numbers = [10, 20, 30, 40, 50];
const foundIndex = numbers.findIndex((num, index) => index > 2);
console.log(foundIndex); // 3 (index of the first element where index > 2)
```

### Key Points

-   **Single Index Return**: The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function.
-   **Negative Return**: If no element satisfies the condition, `-1` is returned.

The `findIndex()` method is useful for locating the index of a single element in an array based on a condition.

## 33. `flat()`

In JavaScript, the `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

### Syntax

```javascript
let newArray = array.flat(depth);
```

-   **`depth`** (optional): The depth level specifying how deep a nested array structure should be flattened. Defaults to `1`.

### Example 1: Basic Usage

```javascript
const nestedArray = [1, 2, [3, 4]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray); // [1, 2, 3, 4]
```

### Example 2: Using Depth

```javascript
const deeplyNestedArray = [1, 2, [3, [4, 5]]];
const flattenedArray = deeplyNestedArray.flat(2);
console.log(flattenedArray); // [1, 2, 3, 4, 5]
```

### Key Points

-   **New Array Return**: The `flat()` method returns a new array with sub-array elements concatenated into it recursively up to the specified depth.
-   **Original Array Unchanged**: The `flat()` method does not modify the original array.

The `flat()` method is useful for flattening nested arrays to a specified depth.

## 34. `flatMap()`

In JavaScript, the `flatMap()` method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a `map()` followed by a `flat()` of depth `1`.

### Syntax

```javascript
let newArray = array.flatMap(callback(currentValue, index, array), thisArg);
```

-   **`callback`**: A function that is called for every element of the array. Each time `callback` executes, the returned value is mapped and then flattened into the new array.
    -   **`currentValue`**: The current element being processed in the array.
    -   **`index`** (optional): The index of the current element being processed in the array.
    -   **`array`** (optional): The array `flatMap` was called upon.
-   **`thisArg`** (optional): A value to use as `this` when executing the `callback`.

### Example 1: Basic Usage

```javascript
const numbers = [1, 2, 3];
const doubledAndFlattened = numbers.flatMap((num) => [num * 2]);
console.log(doubledAndFlattened); // [2, 4, 6]
```

### Example 2: Handling Arrays

```javascript
const numbers = [1, 2, 3];
const doubledAndFlattened = numbers.flatMap((num) => [[num * 2]]);
console.log(doubledAndFlattened); // [[2], [4], [6]]
```

### Key Points

-   **New Array Return**: The `flatMap()` method returns a new array after mapping each element and flattening the result into it.
-   **Shallow Flattening**: It performs a shallow flattening of the mapped results (depth of `1`).

The `flatMap()` method is useful for manipulating arrays with a combination of mapping and flattening operations.

These array methods in JavaScript provide powerful capabilities for manipulating arrays, from filtering and transforming elements to reducing arrays to single values. Each method serves different purposes and can be used according to the requirements of your application or programming logic.
