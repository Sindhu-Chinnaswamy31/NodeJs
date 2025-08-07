const fs = require("fs");
const crypto = require("crypto");

console.log("start");

process.env.UV_THREADPOOL_SIZE = 3;

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("1 - Done Crypto");
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("3 - Done Crypto");
});

fs.readFile("test.txt", "utf-8", (err, data) => {
    console.log("I got the file");
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("2 - Done Crypto");
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("4 - Done Crypto");
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("5 - Done Crypto");
});

console.log("ending");

//start
// ending
// 3 - Done Crypto
// 1 - Done Crypto
// 2 - Done Crypto
// I got the file
// 5 - Done Crypto
// 4 - Done Crypto

//from third to first line order may differ based on process uv thread pool size

//and the order is not guaranteed