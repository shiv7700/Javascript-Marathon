"use strict";

// Part One of javascript

// javascript => javascript is a high level object orient web rich multi paradigm programming language
// web is run by single handed by javascript

// multi paradigm
// functional programming
// object orient programming

// ECMASCRIPT => standard version of javascript
// es6 is the most important version of javascript
// all modern features and biggest changes occur in es6 or es 2015

// single quotes vs double quotes vs template literal
console.log("single quotes represents string");
console.log("double quotes represents string");
console.log(`template literal can injects variables using dollar sign`);

// comments are ignored by browser engine

// single line comment

/*
multi line comment
*/

// rules to define variable names => read from pdf

// variable declare and initialize
let declareVariable; //declare
let initializeVariable = 10; //initialize
initializeVariable = 20; //assignment or assign

// different scope in javascript
// global scope
// functional scope
// block scope
// local scope

// var let const
var a1 =
  "var have global scope and functional scope and can be reassign and redeclare";

let a2 =
  "let doesn't have global scope but have block and functional scope and can be reassign";

const a3 =
  "const doesn't have global scope but have functional and block scope and can't be reassign , const must be initialize before use";

// camelCase
console.log("camelCase , first letter of words are in capital");

// data types

// primitive data types (stack) => 7
let a4 = 10; // number
let a5 = "ten"; // string
let a6 = true; // boolean
let a7; // undefined => variable declare but not initialize
let a8 = null; // value is empty but later there will be value
let a9 = 100000n; //bigint numbers with more than 15+ digits
let a10 = Symbol("a10");

// non-primitive data types (heap) => 3
let b1 = {}; // object
let b2 = []; // array
let b3 = new Date(); // date

// template literal
let temp = 10;
console.log(`template literal can inject variables in string like this ${10}`);

// operators

// arithmetic operator
console.log(1 + 1); // addition
console.log(1 - 1); // subtraction
console.log(1 * 1); // multiplication
console.log(10 / 2); // division
console.log(10 % 2); // modulus
console.log(2 ** 5); // exponential

// assignment operator
// assign value to a variable
let b4 = 10;

// comparison operator
console.log(1 == 2);
console.log(1 === 3);
console.log(1 != 10);
console.log(1 !== 10);
console.log(10 > 2);
console.log(10 < 2);
console.log(10 >= 20);
console.log(10 <= 30);

// an number is only equal to itself
console.log(1 === 1); //true
console.log(1 > 1); //false
console.log(1 < 1); //false

// logical operator
console.log(10 > 5 && 10 > 2); // logical AND
console.log(2 < 1 || 1 > 2); // logical OR
console.log(!(10 === 10)); // logical NOT

// ternary operator
const b5 = 10 > 5 ? "true" : "false";
console.log(b5);

// typeof operator
console.log(typeof "10"); // string
console.log(typeof 10); // number

// == and ===
console.log("== checks for only value");
console.log("=== checks data type then checks value");

// type conversion => changing data type from one type into another of a variable
// for example => string into number

// using javascript in-built function
console.log(typeof Number("10")); // number
console.log(typeof String(true)); // string
console.log(typeof Boolean(1)); // true

// automatically conversion by js (coercion)
console.log(typeof (1 + "1"));
console.log(typeof (1 - "1"));
console.log(typeof (1 * "1"));
console.log(typeof (1 / "1"));
console.log(typeof (1 * "blame")); // NAN

// 0 " " undefined null nan are converted to false

// post pre increment and decrement
let b6 = 10;
console.log(b6++); // post increment
console.log(++b6); // pre increment

// alert prompt confirm
// in-built functions
// we can store following response in variables
alert("this a alert");
prompt("enter input");
confirm("yes or no");

// strict mode
// executes javascript file in strict mode , use "use strict" at top of script

// control flow

// if else
if (10 > 5) {
  console.log("this code of block is executed");
} else {
  console.log("this code of block is executed");
}

// if else if ladder
if (10 > 5) {
  console.log("this code of block is executed");
} else if (10 === 10) {
  console.log("this code of block is executed");
} else if (10 > 2) {
  console.log("this code of block is executed");
}

// switch
let c1 = 10;
switch (c1) {
  case 12:
    console.log("number 12");
    break;
  case 13:
    console.log("number 13");
    break;
  case 14:
    console.log("number 14");
    break;
  case 15:
    console.log("number 15");
    break;
  default:
    console.log("invalid value");
    break;
}

// local and global variable => visibility of a variable

// global => variable declare outside of block scope is called as global variable

// local => variable declare inside block scope is called as local variable

let c2 = "global variable";
function app() {
  let c3 = "local variable";
}

// types of error in js
// syntax error
// reference error
// logical error

// loops => repeat some task again and again for specific number

// for loop => going from one point to another
for (let i = 1; i <= 5; i++) {
  console.log("for loop");
}

// while loop => works on condition
let i = 1;
while (i <= 5) {
  console.log("while loop");
  i++;
}

// do while loop => executes once even if condition is false
let j = 1;
do {
  console.log("while loop");
  j++;
} while (j <= 5);

// break and continue

// break => break will throw you out from loop and stop execution of loop
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

// continue => it will only skip the condition and doesn't stop execution of loop
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

/*
catch you in next chapter
*/
