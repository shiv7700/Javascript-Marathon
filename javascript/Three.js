"use strict";

// Part Three of javascript

// Destructuring => extract values from array and object then store them in variables

// array destructing
const a1 = [10, 20, 30, 40];

let [v1, v2, v3, v4] = a1; //destructing
console.log(v1, v2, v3, v4);

let [b1, , , b2] = a1; // escape value
console.log(b1, b2);

let [c1, c2, c3, c4, c5 = "invalid"] = a1; // default values
console.log(c5);

// object destructing
const server = {
  serverName: "xyz",
  port: 300,
};

let { serverName, port } = server;
console.log(serverName, port);

let { serverName: a, port: b, missing: c = "invalid" } = server;

// spread and rest operator

// spread => unpack values of array or object
// (right hand side of =)

// spread on array
const d1 = [10, 20, 30, 40];
console.log(...d1);

// copy array
console.log([...d1]);

// spread on object
const j1 = {
  server: "google",
  port: 300,
};
console.log({ ...j1, dot: true });

// rest => capture remaining values of array or object
// (left hand side of =)
const ques1 = ["q1", "q2", "q3"];
const ques2 = ["q4", "q5", "q6"];

let [q1, ...q2] = ques1;

// spread and rest together
let [o1, o2, ...end] = [...ques1, ...ques2];

// rest parameter
function app(...data) {
  console.log(data);
}
app([5, 4, 3, 2, 1]);

// rest on object
const data = {
  port: 200,
  region: "unknown",
  area: null,
};
let { p1, ...p2 } = data;

// sets => collection of unique values
const mySet = new Set([10, 20, 30, 30]);
console.log(mySet);
console.log([...mySet]); // convert set into array

// sets method
const set = new Set([]);
set.add(1);
set.add(2);
console.log(set.size);
console.log(set.has(4));
console.log(set.clear());

// weak sets => only contains objects
const weakestSet = new WeakSet([]);
const s1 = {
  a: "a",
};
const s2 = {
  b: "b",
};
const s3 = {
  c: "c",
};
weakestSet.add(s1);
weakestSet.add(s2);
weakestSet.add(s3);

// maps => collection of unique key-value pairs
const googleMap = new Map([
  ["port", 200],
  [true, "url"],
]);
googleMap.set(true, 400);
googleMap.get("port");
googleMap.clear();
googleMap.delete("port");

// JavaScript Hoisting => moving declaration of a variable and functions to the top of the script

console.log(count); // undefined
var count = 10;

console.log(counter); // reference error
let counter = 20;

// functions declaration are also move to top => which means you can use function before they are declare but this only works on function declaration
// function expression are not hoisted

// reference vs value
// value => all primitive data type are value which means that they get a copy
// reference => all non-primitive data that is object are reference which means they get a reference in memory

/*
catch you in next chapter
*/
