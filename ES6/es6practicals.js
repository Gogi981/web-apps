'use strict'
// 1. Write a function that capitalizes the first letter of each string argument it receives.  
// 	Function arguments: 'hello', 'there', 'ES', 6
// 	Output: 'Hello', 'There', 'ES'

const arrayOne = ['hello', 'there', 'ES', 6]

function capitalize(array) {

    let resultFilter = array.filter(function (elem) {
        return (typeof (elem) === "string")
    });

    let resultMap = resultFilter.map(function (elem) {
        let firstLetter = elem[0].toUpperCase();
        return firstLetter + elem.slice(1);
    });

    return resultMap;
};

console.log(capitalize(arrayOne));

// 2. Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// Input: 120
// Output: 24

const articles = [{ name: "Apples", price: 150 }, { name: "Pineapples", price: 170 }, { name: "Oranges", price: 210 }, { name: "Bananas", price: 200 }];

const taxRate = 20;

function addTax(array, tax) {
    let result = array.map(function (elem) {
        elem.tax = elem.price * tax / 100
        return elem;
    });
    return result;
};

console.log(addTax(articles, taxRate));

// 3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
// Input: [4, 6, 11, -9, 2.1], 2
// Output: [6, 8, 13, -7, 4.1]

const numOne = [4, 6, 11, -9, 2.1];


function increaseNum(array, value = 1) {
    let result = array.map(function (setNew) {
        setNew += value
        return setNew;
    })
    return result;
}
console.log(increaseNum(numOne, 2))


// 4. Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]

const numTwo = [6, 11, 9, 0, 3]

function releaseEven(array) {
    let resultFilter = array.filter(function (elem) {
        return ((elem) % 2 === 0);
    });
    return resultFilter;
}
console.log(releaseEven(numTwo))

// 5.
// Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']

const jsArray = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];

function sortArray(array) {
    let resultFilter = array.filter(function (elem) {

        return (elem.toUpperCase().indexOf("JS") !== -1);
    })
    return resultFilter;
}
console.log(sortArray(jsArray))

// 6.Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]

const numThree = [1.6, 11.34, 9.23, 7, 3.11, 8];

function sortIntegers(array) {
    let resultFilter = array.filter(function (elem) {
        return ((elem) - parseInt(elem) === 0);
    })
    return resultFilter;
}
console.log(sortIntegers(numThree))

// 7.Write a function that filters all integer arguments that contain digit 5.
// Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// Output: [45, 553]


function numberToString(array) {
    let result = array.map(function (setNew) {
        return setNew.toString();
    })

    return result;
}

function checkDigit5(array) {
    let result = array.filter((elem) => { return (elem.indexOf('5') !== -1) });

    return result;
}
const numFour = [23, 11.5, 9, 'abc', 45, 28, 553]

let integerArray = sortIntegers(numFour);
let stringNumbers = numberToString(integerArray)
console.log(checkDigit5(stringNumbers))

// 8. Write a function that returns indexes of the elements greater than 10. 
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: 1, 2, 5
