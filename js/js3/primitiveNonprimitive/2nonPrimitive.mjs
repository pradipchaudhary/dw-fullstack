/**
 *
 * Non-primitive data Types
 *
 * 1. Array
 * 2. Object
 * 3. Function
 * 4. Date
 * 5. Error
 * 6. ....
 *
 * Note: -
 * -> memory soace is created
 * -> if let is used
 * -> and if variable is not copy of another variable
 * -> if variable is copy of another it will share memory
 *
 * ===
 * -> output will be true if address are same
 */

let a = [1, 2];
let b = [1, 2];
let c = a;

// ===
console.log(a === b); // flase coz address are different
console.log(a === c); // ture coz address are same.

// Changing behavior
console.log(a); // [1, 2]
console.log(b); // [1, 2]
console.log(c); // [1, 2]

a.push(3);

console.log(a);
console.log(b);
console.log(c);
