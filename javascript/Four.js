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

// arrow function revisit
