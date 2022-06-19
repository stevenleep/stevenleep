function start() {
    const str = 'Hello World';
   console.log(str.__proto__); // String {...}
   console.log(str.__proto__ === String.prototype); // true


   console.log(String.__proto__); // Function {...}
   console.log(String.prototype.__proto__ === Object.prototype); // true

   console.log(str.prototype); // undefined
}

start();