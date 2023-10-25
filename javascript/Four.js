"use strict";

// Part Four of javascript

// Explicit Binding => call bind apply => manipulate this keyword

// call => changes this keyword
const server1 = {
  name: "server 1",
  port: 200,
  intro1(para) {
    console.log(`${this.name} ${this.port} is running , ${para}`);
  },
};

const server2 = {
  name: "server 2",
  port: 404,
};

server1.intro1.call(server2, "parameter sample");

// apply => similar to call but we pass arguments in arrays
server1.intro1.apply(server2, ["bind example"]);

// bind => bind is same as apply but return as function
const r1 = server1.intro1.bind(server2, ["bind example"]);
r1();

// argument object
// it is important to note that arguments object is a array like list which means it does not have all array methods
// it is advice to use rest parameter rather than arguments
function appData(p1, p2, p3) {
  console.log(arguments);
  console.log(arguments.length);
  console.log([...arguments]); // convert arguments into array
}

appData(1, 2, 3);

// arrow function revisit
// arrow function doesn't have their own this binding
// arrow function inherit this from surrounding
// pro tip => don't use arrow function as method or class becoz they don't have their own this
const appen = {
  blame: "pro gamer",
  appens: () => {
    return `${this.blame}`;
  },
};
appen.appens();

// Error Handling in javascript => handle error when a code of block encounter error
// try catch finally
// try => code of block to be try
// catch => catch the error in try block
// finally => always runs no matter if there is error or not
try {
  console.log(gg);
} catch (error) {
  console.log(`the error is ${error}`);
} finally {
  console.log("i am going to run anyway");
}

// throw statement => create custom error
// throw new Error("i am a custom error");

// json (javascript object notation) => lightweight text based format for javascript object
// open data.json file for more understanding

// json two methods
// parse : parse convert json string into javascript object
// stringify : convert JavaScript object or value into JSON string

// object
const j1 = `
{
  "user": [
    { "id": 1, "name": "blame" },
    { "id": 2, "name": "element" },
    { "id": 3, "name": "blaze" },
    { "id": 4, "name": "ngs" },
    { "id": 5, "name": "aumers" }
  ]
}
`;

// array of object
const j2 = `
[
    { "id": 1, "name": "blame" },
    { "id": 2, "name": "element" },
    { "id": 3, "name": "blaze" },
    { "id": 4, "name": "ngs" },
    { "id": 5, "name": "aumers" }
  ]
`;

console.log(JSON.parse(j1));
console.log(JSON.parse(j2));

// Advance function concept

// default parameter
// When the function is called with no arguments or undefined values for those parameters, the default values are used. If values are passed as arguments, the passed values will override the default values
function advanceParameter(p1 = "default parameter", p2) {
  console.log("if no argument is pass into function");
  console.log("by default parameter takes undefined value");
  console.log(`p1 have default parameter ${p1}`);
  console.log(`p2 have no default parameter thats why it is ${p2}`);
}

advanceParameter();

// high order function => a function which either return another function or takes other function as arguments are called as high order function

//function return another function
function cache() {
  return () => console.log("return another function");
}

// function as argument
function pass(wish, name) {
  let greeting = wish(name);
  console.log(greeting);
}

function greet(name) {
  console.log(`hello ${name}`);
}

pass(greet, "blame");

// first class function => functions are first class citizen which means they are treated like any other variable because of which we can do following things with functions
// variable can store function
// can be passed as arguments in function
// return as value in function

// map filter reduce

// map => return new array and iterate over every value of array
const arr1 = [10, 20, 30, 40, 50];
let result = arr1.map((value) => value);
console.log(result);

// filter => return new array and works on condition
let result2 = arr1.filter((value) => value >= 30);
console.log(result2);

// reduce => reduce array to a single value
let result3 = arr1.reduce((total, currentValue) => total + currentValue, 0);

// Immediately Invoked Function Expressions (IIFE) => iife executed immediately after creation
// syntax => ()();
(function () {
  console.log("connecting to db");
})();

// callback function => when a function is passed as argument to another function
// callback function enables asynchronous programming

// Lexical Scoping => visibility and accessibility of variables within a particular context of code

// Closure => When a function is defined inside another function, the inner function forms a closure with the outer function's variables. This means that the inner function has access to the outer function's variables, even after the outer function has completed execution.

function outer() {
  let a = "closure are advance topic";

  function inner() {
    console.log(a);
  }

  return inner;
}

const closure = outer();

/*
catch you in next chapter
*/
