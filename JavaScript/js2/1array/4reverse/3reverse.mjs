// palindrom
// mon, dad, madam

const isPalindrom = (word) => {
    const reverseWord = word.split("").reverse().join("");

    if (word === reverseWord) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrom("mom"));
console.log(isPalindrom("hello"));
console.log(isPalindrom("dad"));

console.log("isArray: ");
console.log(Array.isArray("Hello"));
console.log(Array.isArray(["2", 5]));
