// String Methods

let name = "Pradip";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// Trim

let info = "   My name is Pradip   ";
console.log(info.trim()); // remove start and end blank space
console.log(info.trimStart()); // remove start space
console.log(info.trimEnd()); // remove end space

// startsWith / endWith

let detail = "Hello ram how are you!";
console.log(detail.startsWith("H"));
console.log(detail.startsWith("h"));

console.log(detail.endsWith("m"));

// includes

console.log(detail.includes("hell"));
console.log(detail.includes("o"));
console.log(detail.includes("Hell"));

// replace
console.log(detail.replace("ram", "Shyam"));
console.log(detail.replaceAll("o", "oo"));

// length

let detailLength = detail.length;
console.log(detailLength);
