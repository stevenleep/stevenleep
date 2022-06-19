const arr = [];

console.log(arr.prototype); // undefined
console.log(arr.__proto__ === Array.prototype); // true

console.log(Array.__proto__)
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Array.__proto__ === Function.prototype); // true
