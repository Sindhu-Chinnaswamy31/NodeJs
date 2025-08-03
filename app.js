const data = require("./xyz.js"); //require is a function, import one module to another.
// const {x, calculateSum} = require("./calculate/sum.js")// .js is not required and can be ommited and this is defalut way to import module
// const {calculateMultiply} = require("./calculate/multiply.js")// .js is not required and can be ommited and this is defalut way to import module
const Jsondata = require("./data.json");
const util = require("node:util");
const {calculateMultiply, calculateSum} = require("./calculate");//index.js aautomaticaly taken here
// import { x, calculateSum } from "./sum.js";// ES6 import way
var name = "Sindhu C";
console.log("Hi, my name is " + name);

var a = 10;
var b = 20;
// console.log("The sum of " + a + " and " + b + " is " + (a + b));
console.log(data);
console.log("The sum of " + a + " and " + b + " is " + calculateSum(a, b));
// console.log(x);
console.log(Jsondata)
console.log("The product of " + a + " and " + b + " is " + calculateMultiply(a, b));
// console.log(globalThis)
// console.log(this)
//this => empty object
//globalThis === global => true