let info = {
    name: "Pradip",
    age: 30,
    isMarried: false,
};
console.log(info); // getting wole object
console.log(info.name); // getting specific value

// Change age (Object any value)
info.name = "younz";
console.log(info);

// Delete
delete info.age;
console.log(info);
