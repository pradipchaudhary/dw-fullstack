# Rest Operator (`...`)

The rest operator (`...`) in JavaScript is a powerful feature introduced in ES6 (ECMAScript 2015). It allows you to collect multiple elements and condense them into a single array. The rest operator is used in function parameters and destructuring assignments. Here’s a detailed explanation with examples:

### In Function Parameters

The rest operator can be used to accept an indefinite number of arguments as an array.

#### Example:

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

In this example, the `sum` function can take any number of arguments. The rest operator `...numbers` collects all the arguments passed to the function and puts them into an array called `numbers`.

### In Array Destructuring

The rest operator can also be used to gather the rest of the elements in an array into a new array.

#### Example:

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

Here, the first two elements of the array are assigned to `first` and `second`, respectively, and the rest of the elements are gathered into an array called `rest`.

### In Object Destructuring

Similarly, the rest operator can be used in object destructuring to collect the remaining properties of an object.

#### Example:

```javascript
const person = { name: "John", age: 30, job: "Developer" };
const { name, ...rest } = person;
console.log(name); // Output: John
console.log(rest); // Output: { age: 30, job: 'Developer' }
```

In this case, the `name` property is extracted from the `person` object, and the rest of the properties are gathered into a new object called `rest`.

### Summary

The rest operator (`...`) is a versatile and useful feature in JavaScript for handling function arguments and destructuring arrays and objects. It provides a concise and readable way to work with collections of elements or properties.

Feel free to ask if you need more examples or further clarification on how to use the rest operator!
