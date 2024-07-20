// Assignment 5
// "my name is nitan thapa" => ["my","name","is","nitan","thapa"]  use split
const name = "my name is nitan thapa";
const splitName = name.split(" ");
console.log(splitName);

// ["nitan","is", "my", "name"] => "nitan is my name"   use join
const splitArray = ["nitan", "is", "my", "name"];
const jointArray = splitArray.join(" ");
console.log(jointArray);

// Using forEach loop
// Input is [1,2,3]
// Clg 1
// Clg 2
// Clg 3

const inputValues = [1, 2, 3, 5];
inputValues.forEach((value) => {
    console.log(value);
});
// using forEach loop
// Input is  "nitan kapil hari"
//         clg "nitan thapa"
//         clg "kapil thapa"
//         clg "hari thapa”

const addThapa = (input) => {
    const splitName = input.split(" ");
    const addThapa = splitName.map((name) => {
        const newName = `${name} thapa`;
        console.log(newName);
        return newName;
    });
    return addThapa;
};
console.log(addThapa("nitan kapil hari"));
