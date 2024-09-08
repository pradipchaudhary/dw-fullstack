# Scope

In JavaScript, scope determines the accessibility of variables and functions at different parts of your code. Understanding scope is crucial for managing variables and avoiding bugs. There are different types of scope in JavaScript:

### 1. Global Scope

Variables declared outside of any function have global scope. They are accessible from anywhere in your code.

```javascript
var globalVar = "I am global";

function checkGlobal() {
    console.log(globalVar); // Accessible
}

checkGlobal();
console.log(globalVar); // Accessible
```

### 2. Local/Function Scope

Variables declared within a function are local to that function. They are not accessible outside the function.

```javascript
function localScope() {
    var localVar = "I am local";
    console.log(localVar); // Accessible
}

localScope();
console.log(localVar); // Uncaught ReferenceError: localVar is not defined
```

### 3. Block Scope

Block scope is introduced with `let` and `const` keywords. Variables declared with `let` and `const` within a block `{}` are only accessible within that block.

```javascript
if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // Accessible
}

console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
```

### 4. Lexical (Static) Scope

JavaScript uses lexical scoping, meaning that the scope of a variable is determined by its location within the source code, and nested functions have access to variables declared in their outer scope.

```javascript
function outerFunction() {
    var outerVar = "I am outer";

    function innerFunction() {
        console.log(outerVar); // Accessible
    }

    innerFunction();
}

outerFunction();
```

### 5. Scope Chain

When a variable is accessed, JavaScript starts looking for it in the current scope. If not found, it moves up to the outer scope, continuing until it reaches the global scope.

```javascript
var globalVar = "I am global";

function outerFunction() {
    var outerVar = "I am outer";

    function innerFunction() {
        var innerVar = "I am inner";
        console.log(innerVar); // Accessible
        console.log(outerVar); // Accessible
        console.log(globalVar); // Accessible
    }

    innerFunction();
}

outerFunction();
```

### 6. Closures

A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.

```javascript
function outerFunction() {
    var outerVar = "I am outer";

    function innerFunction() {
        console.log(outerVar); // Accessible
    }

    return innerFunction;
}

var myClosure = outerFunction();
myClosure(); // "I am outer"
```

### 7. Module Scope

Modules in JavaScript have their own scope. Variables and functions declared in a module are not accessible outside the module unless explicitly exported.

```javascript
// myModule.js
export let moduleVar = "I am module scoped";

// main.js
import { moduleVar } from "./myModule.js";
console.log(moduleVar); // Accessible
```

### Example Demonstrating Various Scopes

```javascript
var globalVar = "I am global";

function outerFunction() {
    var outerVar = "I am outer";

    if (true) {
        let blockVar = "I am block scoped";
        console.log(blockVar); // Accessible within block
    }

    function innerFunction() {
        var innerVar = "I am inner";
        console.log(innerVar); // Accessible within inner function
        console.log(outerVar); // Accessible from outer function
        console.log(globalVar); // Accessible from global scope
    }

    innerFunction();

    // Block scoped variable not accessible here
    // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
}

outerFunction();
console.log(globalVar); // Accessible from global scope
```

Understanding these scoping rules helps in writing clean, bug-free JavaScript code.
