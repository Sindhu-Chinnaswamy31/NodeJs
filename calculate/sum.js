console.log("sum is loaded");
// Modules are used to protect their variables and functions from lecking.

//ES6 way to export // we acn call export infront of function
function calculateSum(a, b){
    const sum = a + b;
    return sum;
}

const x = 50;
// common.js default way to export 
module.exports = {
    x:x,
    calculateSum:calculateSum
}; 

//here if we create object from app.js we need to call object
//here if we rae passing only function while calling we just assign to one variable.