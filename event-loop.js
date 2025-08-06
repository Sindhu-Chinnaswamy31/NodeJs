const fs = require("fs");

console.log("start");

var a = 12345;
var b = 123456;

setImmediate(() => {
    console.log("setImmediate");
});

fs.readFile("test.txt", "utf-8", (err, data) => {
    console.log("I got the file");
});

setTimeout(() => {
    console.log("Timer is done");
}, 1000);

function print(){
    console.log("a : ", a);
}

print()

console.log("ending");

//output
// start
// a :  12345
// ending
// setImmediate
// Timer is done
// I got the file