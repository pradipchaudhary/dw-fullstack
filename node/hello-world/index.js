// callback

function greet(name) {
    console.log("Good morning,", name);
}

function addNewUser(callback) {
    const name = "Pradip Chaudhary";
    callback(name);
}

addNewUser(greet);
