const fs = require("fs");
const a = 100;

console.log("start");

setImmediate(() => {
    console.log("setImmediate");
});

Promise.resolve("I am Promise").then((data) => {
    console.log(data);
});

setTimeout(() => {
    console.log("Timer is done");
}, 1000);

process.nextTick(() => {
    console.log("process.nextTick");
});

fs.readFile("test.txt", "utf-8", (err, data) => {
    console.log("I got the file");
});

process.nextTick(() => {
    console.log("process.nextTick 2");
});

console.log("a : ", a);

console.log("ending");