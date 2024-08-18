// slice() = extracting a part of an array without changing the original.
// slice is eg for shallow copying.

// splice() = modifying an array by adding, removing, or replacing elements.


const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

const sliceEg = fruits.slice(1, 2);
const spliceEg = fruits.splice(1,1);

console.log("sliceEg: ", sliceEg);
console.log("spliceEg: ", spliceEg);

console.log("fruits: ", fruits);



// Shallow Copy: slice() creates a shallow copy, meaning the new array  
// contains references to the same elements as the original array.

// For primitive values, the copied values are independent.

// For objects or arrays (reference values), the copied elements 
// are still linked to the original, so changes to these elements 
// in the new array will be reflected in the original array.

// Deep Copy: splice() creates a deep copy, meaning a completely new array is created.