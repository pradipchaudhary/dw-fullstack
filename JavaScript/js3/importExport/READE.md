In Node.js, the module system is primarily based on CommonJS (CJS) modules, though it also supports ECMAScript (ESM) modules since version 12. Let's delve into both CommonJS and ES modules, their syntax, and their usage in Node.js.

### CommonJS (CJS) Modules

CommonJS modules are the original module system in Node.js. They use the `require` function to import modules and the `module.exports` or `exports` object to export them.

#### Exporting in CommonJS

You can export a single value or multiple values using `module.exports` or `exports`.

**Single Export:**

```javascript
// math.js
const add = (a, b) => a + b;

module.exports = add;
```

**Multiple Exports:**

```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };
```

Alternatively, you can use the `exports` object:

```javascript
// math.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

#### Importing in CommonJS

You use the `require` function to import modules.

**Single Import:**

```javascript
// app.js
const add = require("./math");

console.log(add(2, 3)); // 5
```

**Multiple Imports:**

```javascript
// app.js
const { add, subtract } = require("./math");

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
```

### ECMAScript Modules (ESM)

ECMAScript modules (ESM) are the standardized module system introduced in ECMAScript 2015 (ES6). Node.js fully supports ESM since version 12. To use ESM in Node.js, you need to use the `.mjs` file extension or set `"type": "module"` in your `package.json`.

#### Exporting in ESM

You can use named exports and default exports.

**Named Exports:**

```javascript
// math.mjs
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

**Default Export:**

```javascript
// greet.mjs
const greet = () => console.log("Hello!");
export default greet;
```

#### Importing in ESM

You use the `import` statement to import modules.

**Named Imports:**

```javascript
// app.mjs
import { add, subtract } from "./math.mjs";

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
```

**Default Import:**

```javascript
// app.mjs
import greet from "./greet.mjs";

greet(); // Hello!
```

**Combining Named and Default Imports:**

```javascript
// app.mjs
import greet, { add, subtract } from "./math.mjs";

greet();
console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
```

### Using ESM in Node.js

To use ESM in Node.js, you have two options:

1. Rename your JavaScript files from `.js` to `.mjs`.
2. Add `"type": "module"` to your `package.json`.

#### Option 1: Using `.mjs` Extension

```plaintext
// package.json
{
  "name": "my-module",
  "version": "1.0.0",
  "main": "app.mjs"
}
```

```javascript
// app.mjs
import { add, subtract } from "./math.mjs";

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
```

#### Option 2: Setting `"type": "module"` in `package.json`

```json
// package.json
{
    "name": "my-module",
    "version": "1.0.0",
    "type": "module",
    "main": "app.js"
}
```

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

```javascript
// app.js
import { add, subtract } from "./math.js";

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
```

### Differences Between CJS and ESM

1. **Syntax**:

    - CommonJS uses `require` and `module.exports`.
    - ES Modules use `import` and `export`.

2. **Execution**:

    - CommonJS modules are loaded synchronously.
    - ES Modules can be loaded asynchronously.

3. **Scope**:

    - CommonJS modules have a file-level scope.
    - ES Modules have a strict mode and block-level scope.

4. **Exports**:
    - CommonJS allows for dynamic exports (e.g., `module.exports = condition ? value1 : value2`).
    - ES Modules exports are static and must be declared at the top level.

### Conclusion

Node.js supports both CommonJS and ECMAScript modules, allowing developers to choose the module system that best fits their needs. While CommonJS is widely used and well-established, ES Modules provide a standardized and more modern approach to module management, especially beneficial for client-side and universal JavaScript applications.
