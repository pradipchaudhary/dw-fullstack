let input = "nitan";
let input1 = input.split("");

let output = input1.filter((value, index) => {
    if (["a", "e", "i", "o", "u"].includes(value.toLocaleLowerCase())) {
        return true;
    } else {
        return false;
    }
});

console.log(output);
