// Comparison Operators
// let num1 = prompt("Enter a number");
// let num2 = prompt("Enter a second number");

// if (num1 == num2) {
//   console.log("Both numbers are the same");
// } else {
//   console.log("Both numbers are not the same");
// }

// let userAge = prompt("Enter your age");
// if (userAge >= 18) {
//   console.log("Eligible");
// } else {
//   console.log("Not Eligible");
// }

// If-Else & Nested Conditions
// let userMarks = prompt("Enter your marks");
// let marks = Number(userMarks);

// if (marks >= 80) {
//   alert("A Grade");
// } else if (marks >= 60 && marks <= 79) {
//   alert("B Grade");
// } else if (marks >= 40 && marks <= 59) {
//  alert("C Grade");
// } else{
//   alert("Fail");
// }

// let userScore = prompt("Enter your Score");
// let score = Number(userScore);

// if (score >= 90) {
//   alert("Excellent");
// } else if (score >= 70 && score <= 89) {
//   alert("Good");
// } else if (score < 70) {
//  alert("Needs Improvement");
// }

// Adding, Removing, Inserting, Extracting Elements
// let hereos = ["ironman", "thor", "antman", "blackwidow"];
// hereos.push("spiderman");
// console.log(hereos);

// let hereos = ["ironman", "thor", "antman", "blackwidow", "spiderman"];
// hereos.pop();
// console.log(hereos);

// let hereos = ["ironman", "thor", "antman", "blackwidow",];
// hereos.unshift("captian america");
// console.log(hereos);

// let hereos = ["ironman", "thor", "antman", "blackwidow",];
// hereos.shift();
// console.log(hereos);

// let hereos = ["ironman", "thor", "antman", "blackwidow",];
// hereos.splice(2 , 0, "blackpanther");
// console.log(hereos);

// let hereos = ["ironman", "thor", "antman", "blackwidow"];
// let newArr = hereos.slice(1 ,3);
// console.log(hereos);
// console.log(newArr);

// For Loops
// for (var i = 5; i <= 5; i++) {
//     for (var j = 10; j >= 1; j--) {
//         console.log(5 + " x " + j + " = " + i * j)
//     }
// }

// let userNumber = Number(prompt("Enter a nu,ber between 1 to 5"));
// let numbers = [1, 2, 3, 4, 5];
// let numFound = false;

// for (var i = 0; i < numbers.length; i++) {
//   if (userNumber == numbers[i]) {
//     numFound = true;
//     break;
//   }
// }
// if (numFound) {
//   console.log("Your number", userNumber, "is found in the list");
// } else {
//   console.log("Your number is not found in the list");
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < num.length; i++) {
//   if (num[i] === 5) {
//     console.log("Number", num[i], "is found stopping loop");
//     break;
//   }
//   console.log(num[i]);
// }
