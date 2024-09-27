function fetchData(callback) {
    // Fetch data
    const url = "https://jsonplaceholder.typicode.com/posts";
    setTimeout(() => {
        const data = {
            name: "Pradip Chaudhary",
            age: 30,
            profession: "Software Enginnering",
        };
        callback(data);
    }, 8000);
}

function displayData(data) {
    console.log("Data: ", data);
}

console.log("Do Some work...");

fetchData(displayData);
