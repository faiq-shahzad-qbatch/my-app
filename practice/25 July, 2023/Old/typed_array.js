const buffer = new ArrayBuffer(4);
const int32Array = new Int32Array(buffer);
int32Array[0] = 42;
console.log(int32Array[0]); // Output: 42
