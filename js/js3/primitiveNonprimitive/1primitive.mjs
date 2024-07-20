/**
 *
 *  Primitive Data Types
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. Undefined
 * 5. Null
 *
 *
 *  Note:-
 *  Memory allocation in primitive
 * - changing behavior
 * => output will be true if value are same
 */

let a = 1;
let b = 1;
let c = a;

// ===
console.log(a === b);
console.log(a === c);

console.log(a);
console.log(b);
console.log(c);

a = 10;

console.log(a);
console.log(b);
console.log(c);
