// let age;
// function calculateAge(userAge) {
//   let uName = "Onkar Murkar";
//   console.log(uName);
//   if (userAge <= 10) {
//     minor = true;
//   } else {
//     minor = false;
//   }
//   console.log(`${uName} is ${minor ? "Minor" : "Major"} ${userAge}`);

//   document.title = "Onkar Murkar";
//   // document.body.style.backgroundColor = "red";
//   // document.getElementById("mydiv").style.backgroundColor = "Red";
// }
// age = 10;
// age = 22;
// calculateAge(age, age, age, age);

// alert("Hello World");

// var a = prompt("Enter your name :");
// console.log("Your name is " + a);

// var conf = confirm("Are you sure?");
// console.log(conf);

// /* Node JS is V8 engine for the browser */

// console.log("Test Data");
// console.log("How are you");

// LOOPS ( for , while, do while , forin , foreach )
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// For in is used for object
// For of is used for array

// var obj = {
//   name: "Onkar",
//   age: 20,
//   salary: 200000,
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// Function

// const func1 = (a, b) => {
//   console.log("I am an row function " + (a + b));
// };

// func1(10, 20);

// function add(a, b) {
//   return a + b;
// }
// let result = add(10, 20);
// console.log(result);

// let a = "Harry";

// console.log(a.length);
// console.log(a.toUpperCase());
// console.log(a.slice(1, 4));

// Array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
// FOR EACH
// arr.forEach((value, index, ar) => {
//   console.log(value); // Display value of each element
//   console.log(index); // Display index of each element
//   console.log(ar); // Display whole array
// });

// FOR IN
// for (const val in arr) {
//   if (Object.prototype.hasOwnProperty.call(arr, val)) {
//     const element = arr[val];
//     console.log(val, element);
//   }
// }

// FOR OF
// for (const val of arr) {
//   console.log(val);
// }

// MAP
// let newArr = arr.map((e) => {
//   return e ** 2;
// });

// console.log(newArr);

// FILTER
// const greaterThan = (e) => {
//   if (e > 7) {
//     return true;
//   }
//   return false;
// };

// console.log(arr.filter(greaterThan));

// REDUCE

// const red = (a, b) => {
//   return a * b;
// };

// console.log(arr.reduce(red));
