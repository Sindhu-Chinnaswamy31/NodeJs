const crypto = require("crypto");

console.log("start");

var a = 12345;
var b = 123456;
// password base key derevative function
//async function
crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Done Crypto");
});

//pbkdf2Sync - blocking main thread and synchronous
const result = crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
console.log(result.toString("hex"));

console.log("ending");