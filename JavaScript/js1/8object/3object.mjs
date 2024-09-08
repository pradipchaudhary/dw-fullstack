const info = {
    fName: "Pradip",
    lName: "Chaudhary",
    age: 30,
    fullName: function () {
        console.log(`Fullname are ${this.fName} ${this.lName}`);
        // return `Fullname are ${this.fName} ${this.lName}`;
    },
};

console.log(info);
// console.log(info.fullName());
info.fullName();
