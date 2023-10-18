"use strict";

// Part Two of javascript

// functions in javascript
// function => reuseable code of block

// parameter => values function uses inside it
// argument => values that are passed into function

function example(parameter1, parameter2) {
  console.log("parameters are values that are used by function for itself");
  console.log("arguments are values that are passed into functions");
}

example(argument1, argument2);

// function declaration => function with name
function appData() {
  console.log("function declaration are the function who have name");
  console.log("also known as named function");
}

appData();
// call function,invoke function,execute function,run function,function chala do

// function expression => function are stored in variable as value

// Anonymous function
const mainData = function () {
  console.log("function expression are function without name");
  console.log(
    "function expression produce some value which are stored in variable"
  );
};

mainData();

// arrow function => arrow function are shorter way to write function and modern es6 function
const miningData = () => "single line";
miningData();

const miner = (parameter) => {
  console.log(`value passed is ${parameter}`);
};
miner("blame");

// return keyword in function
// return is the final output of a function
// code after return in function is called as unreachable code
// we can return anything in function

// we can call a function inside another function
const twoTimes = (para) => para * 2;

const twoMix = (a, b) => {
  let par1 = twoTimes(a);
  let par2 = twoTimes(b);
  return `values are ${par1} ${par2}`;
};

twoMix(2, 4);

// arrays => allow you to store collection of values in a single variable in continuous memory allocation
// indexing in array are start from 0
// values in array are also called as elements

// array literal
const ps = ["ps1", "ps2", "ps3", "p4"];
console.log(ps);

//access element
console.log(ps[0]);
console.log(ps[1]);
console.log(ps[2]);
console.log(ps[3]);

// index that is not in range of array is undefined
console.log(ps[6]); // undefined

//update value
ps[0] = "ps";

// length of array => total number of element in array
console.log(ps.length);
console.log(ps[ps.length - 1]); // last element of array

// array constructor
const dvd = new Array(10, 20, 30, 40);
console.log(dvd);

// 2 dimensional array
console.log([1, 2, 3, 4, [5, 6, 7, 8]]);

// loop array forward
const arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// loop array backward
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// common array methods
const sampleArray = [10, 20];

sampleArray.push(30);
sampleArray.push(40);
sampleArray.pop();
sampleArray.unshift(0);
sampleArray.shift();

// object => object consists of property (key-value pair)
const server = {
  url: "www.sampleurl.com",
  port: 300,
  ssd: true,
  support: ["win10", "wind11"],
};

// url: "www.sampleurl.com" is a property
// url is key
// "www.sampleurl.com" is value

console.log(server.url);
console.log(server["url"]);

server.port = 400;

server.new = "new property";
server["prop"] = "new property";

// method => an function as a value of a key in object is called as method
// an method is a function
const reuseServer = {
  start: function () {
    console.log("server is starting");
  },
};
console.log(reuseServer.start());

// this keyword => this inside a object is refers to the current object
const mining = {
  serverName: "sample server",
  stop: function (storage) {
    console.log(`${this.serverName} will stop becoz of memory of ${storage}gb`);
  },
};
console.log(mining.stop("2"));

// string and string methods
const a1 = "blame";
const a2 = "pro";
console.log(a1 + " " + a2);

// string is array like means it have some array methods
const otp = "54321";
console.log(otp.length);
console.log(otp[0]);
console.log(otp[1]);

// math => math is a built-in object for mathematics operation
console.log(Math.E);
console.log(Math.PI);
console.log(Math.max(2, 4));
console.log(Math.round(2.3));

// math random => generates radom number from 0(include) to 1(exclude)
console.log(Math.random());
console.log(Math.floor(Math.random() * 10)); // 0 to 10
console.log(Math.floor(Math.random() * 10) + 1); //1 to 10

// generate four digits random number
function randomNumber() {
  return Math.floor(Math.random() * 10);
}

console.log(
  `random 4 digits are ${randomNumber()} ${randomNumber()} ${randomNumber()} ${randomNumber()}`
);

// date => date is a build-in object for date operation
let now = new Date();
let now2 = new Date("dec 22 2024");

// set date time
now.setDate(22);

// month are zero based like array (jan = 0 , feb = 1 , ...)
// days are also zero based (sunday = 0 , monday = 1 , ...)
// javascript date are started from 1970

console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getFullYear());
console.log(new Date().getMonth());

// advance loops

// for of loop => mostly use for array,string,map etc
const gs = ["gs1", "gs2", "gs3", "gs4"];
for (let i of gs) {
  console.log(i);
}

// for in loop => mainly use for object
const server2 = {
  server: "paraint",
  port: 300,
  isSsd: true,
};
for (let i in person) {
  console.log(i);
  console.log(person[i]);
}

// some object methods
const person = {
  fullName: "blame",
  email: "blame@gmail.com",
  job: "front-end",
  Experience: 1,
  fullStack: true,
};
const num = [10, 20, 30, 40, 50];

// object.entries() => return an array of [key,value]
console.log(Object.entries(person));
console.log(Object.entries(num));

// object.keys() => return array of keys
console.log(Object.keys(person));
console.log(Object.keys(num));

// object.values() => return array of values
console.log(Object.values(person));
console.log(Object.values(num));

// get index in for of loop
for (let [i, j] of Object.entries(num)) {
  console.log(i);
  console.log(j);
}

/*
catch you in next chapter
*/
