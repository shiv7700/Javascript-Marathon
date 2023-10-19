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

/*
catch you in next chapter
*/
