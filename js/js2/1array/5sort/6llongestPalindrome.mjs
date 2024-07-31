const isPalindrom = (word) => {
    const reverseWord = word.split("").reverse().join("");

    if (word === reverseWord) {
        return true;
    } else {
        return false;
    }
};

let word = "mom dad love me but i like madam";

const longestPalindrome = (input) => {
    const spliteWord = input.split(" ");
    const filterWord = spliteWord.filter((value, i) => {
        if (isPalindrom(value) === true) {
            return true;
        } else {
            return false;
        }
        return value;
    });
    const longestWord = filterWord.sort((a, b) => {
        console.log(a);
        console.log(b);
        return a.length - b.length;
    });
    return longestWord;
};

console.log(longestPalindrome(word));
