const info = {
    name: "Pradip",
    age: 30,
    name: "younz",
};

// *==> duplicate key does not exist in object
console.log(info);

// Convert Object to Array
// [name,age]                       => Key Array
// [30, younz]                      => value Array
// [["age",30],["name","younz"]]    => property array (it is array of array with length 2)
