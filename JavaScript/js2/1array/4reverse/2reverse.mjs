// nitan => natin

const reverseWord = (word) => {
    // convert string to array
    const convertToArray = word.split("");
    // reverse array
    const reverseArr = convertToArray.reverse();
    // convert array to string
    const reverseWord = reverseArr.join("");

    console.log(convertToArray);
    console.log(reverseArr);
    console.log(reverseWord);
    return reverseWord;
};

// 🇬🇸
const _reverseWord = (word) => word.split("").reverse().join("");

// Output
console.log(reverseWord("nitan"));

console.log(reverseWord("Pradip"));

console.log(_reverseWord("Hello"));
