const weakSet = new WeakSet();
const obj1 = { name: "John" };
const obj2 = { name: "Alice" };
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1)); // Output: true
// obj1 = null; // The reference to obj1 is removed.
// console.log(weakSet.has(obj1)); // Output: false (obj1 is no longer in the WeakSet)
