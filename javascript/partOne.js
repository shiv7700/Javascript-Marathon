// Part One of javascript

// single quotes vs double quotes vs template literal
console.log("single quotes represents string");
console.log("double quotes represents string");
console.log(`template literal can injects variables using dollar sign`);

// single line comment

/*
multi line comment
*/

// rules to define variable names => done

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
let a4 = 10;
let a5 = "ten";
let a6 = true;
let a7; // undefined
let a8 = null;
let a9 = 100000n;
let a10 = Symbol("a10");

// non-primitive data types (heap) => 3
let b1 = {};
let b2 = [];
let b3 = new Date();

// template literal
let temp = 10;
console.log(`template literal can inject variables in string like this ${10}`);
