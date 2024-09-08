// Opread Operator in Object

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Merge Object
const mergeObject = { ...obj1, ...obj2 };
console.log(mergeObject);

// Updateing Object Properties
const originalObject = { a: 1, b: 2 };
const updateObject = { ...originalObject, c: 6, d: 9 };
console.log(updateObject);
