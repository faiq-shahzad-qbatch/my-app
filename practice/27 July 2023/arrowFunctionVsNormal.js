// Regular function as a callback
function Counter() {
  this.count = 0;
  setInterval(function () {
    // 'this' points to the global object (in Node.js) or 'window' object (in browsers)
    // because setInterval callback is not bound to any specific object
    this.count++;
    console.log(this.count);
  }, 1000);
}

// // Arrow function as a callback
// function Counter() {
//   this.count = 0;
//   setInterval(() => {
//     // 'this' points to the 'Counter' instance because of lexical scoping
//     this.count++;
//     console.log(this.count);
//   }, 1000);
// }

const counter = new Counter();
