// ! Assignment 6

// [1,2,3] => [3,6,9]
const mpltiplyBy3 = (arr) => {
    const newValue = arr.map(function (item, index) {
        return item * 3;
    });
};

// [1,2,3]=>[11,12,13]

// ["my","name","is"] => ["MY","NAME","IS"]
const changetoUpperCase = (arr) => {
    const upperCase = arr.map((item, index) => {
        return item.toUpperCase();
    });
    return upperCase;
};
console.log(changetoUpperCase(["my", "name", "is"]));

// console.log(changetoUpperCase());
// ["my","name","is"] => ["myn","namen","isn"]
const addn = (arr) => {
    const addn = arr.map(function (item) {
        return `${item}n`;
    });
    return addn;
};
console.log(addn(["my", "name", "is"]));

// ["my","name","is"] => ["MYN","NAMEN","ISN"]

const addnWidthUpperCase = (arry) => {
    const newArray = arry.map(function (item, index) {
        const addn = `${item}n`;
        return addn.toUpperCase();
    });
    return newArray;
};
console.log(addnWidthUpperCase(["my", "name", "is"]));

// [1,2,3]=>["1111","2111","3111"]
// [1,2,3]=>["1000a","2111a","3222a"]
// make a arrow function which takes input as [1,2,3] and produce output as "1,2,3"
// make a arrow function  that takes input as [1,3,4,5] it must return [100,300,0,500] here odd number is multiplied by 100 and even number is multiplied by 0

// do it by using function [1,3,4,5]  => [100,300,4,500] here odd number is multiplied by 100 and and even number is passed as it is

// Make an array of numbers that are doubles of the first array eg input [1,2,3,4] output must be [2,4,6,8]

// make a arrow function  that takes input as [1,2,3,4] it must return [1,200,3,400] here odd index  value is multiplied by 100  and even index value is passed as it is
