const fs = require("fs");
const http = require("https");

console.log("start");

var a = 12345;
var b = 123456;

http.get("https://www.google.com", (res) => {
    console.log("Got response from google");
});

//Synchronours function // v8 can't offloads this task to libuv
fs.readFileSync("test.txt", "utf-8", (err, data) => {
    console.log("I got the read file synchronously");
});//don't use this function this will execute only after file read

setTimeout(() => {
    console.log("Timer is done");
}, 5000);

//Async function 
fs.readFile("test.txt", "utf-8", (err, data) => {
    console.log("I got the file");
});

function multiply(a, b) {
    return a * b;
}   

console.log("The product of " + a + " and " + b + " is " + multiply(a, b));

console.log("ending");