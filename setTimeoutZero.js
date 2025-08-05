console.log("start");

//the callback will only be pushed to call stack in v8 once the call stack is empty
setTimeout(() => {
    console.log("Zero Timer is done");
}, 0);

setTimeout(() => {
    console.log("Timer is done");
}, 3000);

console.log("ending");