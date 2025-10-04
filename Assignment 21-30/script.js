// JavaScript Assignment chap 21 - 30

// ===================================================================================

// Strings: Measuring Length and Extracting Part

// -----------------  1  -------------------------

/*
let str = "Hello World!";
let strLength = str.length;
console.log(strLength);
*/

// -----------------  2  -------------------------

/*
let str = "Hello World";
let subString = str.slice(6, 11);
console.log(subString);
*/

// -----------------  3  -------------------------

/*
let sentence = "The cat is sleeping";
console.log(sentence.includes("cat"));
*/

// -----------------  4  -------------------------

/*
let sentence = "The cat is sleeping";
console.log(sentence.indexOf("sleeping"));
*/

// ===================================================================================

// Strings: Finding a Character at a Location

// -----------------  1  -------------------------

/*
let text = "JavaScript";
let index = text.charAt(3)
console.log(index);
*/

// -----------------  2  -------------------------

/*
let text = "Programming";
let lastIdx = text.length - 1;
let lastChar = text.charAt(10);
console.log(lastChar);
*/

// ===================================================================================

// Rounding Numbers

// -----------------  1  -------------------------

/*
let num = 7.8;
let int = Math.round(num);
console.log(int);
*/

// -----------------  2  -------------------------

/*
let num = 5.9;
let newNum = Math.floor(num);
console.log(newNum);
*/

// -----------------  3  -------------------------

/*
let num = 4.2;
let newNum = Math.ceil(num);
console.log(newNum);
*/

// ===================================================================================

// Generating Random Numbers

// -----------------  1  -------------------------

/*
let num = Math.random();
console.log(num);
*/

// -----------------  2  -------------------------

/*
let num = Math.random() * 10;
console.log(num);
*/

// -----------------  3  -------------------------

/*
let str = "100";
let num = Number(str);
console.log(num)
*/

// -----------------  4  -------------------------

/*
let str = "3.141";
let num = parseFloat(str);
console.log(num);
*/

// ===================================================================================

// Converting Strings to Numbers and Numbers to Strings

// -----------------  1  -------------------------

/*
let num = 250;
let str = String(num);
console.log(str);
*/

// -----------------  2   -------------------------

/*
let str = "45.67";
let num = Number(str);
console.log(num);
*/

// -----------------  3   -------------------------

/*
let num = 5.6789;
let anotherNum = num.toFixed(2);
console.log(anotherNum);
*/

// -----------------  4   -------------------------

/*
let num = 3.1415926535;
let anotherNum = num.toFixed(4);
console.log(anotherNum);
*/

// ===================================================================================
