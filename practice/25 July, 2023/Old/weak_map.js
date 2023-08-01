const weakMap = new WeakMap();
const key = {};
weakMap.set(key, "Secret data");
console.log(weakMap.get(key)); // Output: "Secret data"
