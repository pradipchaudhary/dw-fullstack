# Default Values

In JavaScript, default values allow you to specify a value that will be used if a function argument is missing or if a variable is `undefined`. This feature simplifies your code by ensuring that your functions or variables have meaningful values even if some inputs are omitted. Default values can be used in function parameters, destructuring assignments, and variable declarations.

### Default Values in Function Parameters

When defining a function, you can specify default values for its parameters. If a parameter is not provided when the function is called, the default value will be used.

#### Example:

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet()); // Output: Hello, Guest!
```

In this example, if the `greet` function is called without an argument, the `name` parameter defaults to `'Guest'`.

### Default Values in Destructuring Assignments

Default values can also be used when destructuring arrays or objects. If the property or element being destructured is `undefined`, the default value will be assigned.

#### Example with Array Destructuring:

```javascript
const [a = 10, b = 20] = [1];
console.log(a); // Output: 1
console.log(b); // Output: 20
```

Here, `a` is assigned the value `1` from the array, while `b` defaults to `20` because the second element of the array is not provided.

#### Example with Object Destructuring:

```javascript
const { x = 5, y = 10 } = { x: 3 };
console.log(x); // Output: 3
console.log(y); // Output: 10
```

In this case, `x` is assigned the value `3` from the object, and `y` defaults to `10` because the `y` property is not present in the object.

### Default Values in Variable Declarations

You can also set default values when declaring variables using `let` or `const`.

#### Example:

```javascript
let value;
const result = value ?? "default value";
console.log(result); // Output: default value
```

Here, the nullish coalescing operator (`??`) is used to provide a default value if `value` is `null` or `undefined`.

### Summary

Default values in JavaScript are a convenient way to ensure that functions, destructured variables, and regular variables have meaningful values even when some inputs are missing or `undefined`. This helps to write more robust and concise code.

Feel free to ask if you need more examples or further clarification on default values in JavaScript!
