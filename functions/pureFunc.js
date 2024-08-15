// A pure function is a function that:

// 1. Always returns the same output for the same input.
// 2. Has no side effects, meaning it doesn't modify any external state 
//    (e.g., global variables, files, or databases).

function add(a, b) {
    return a + b;
  }
  
  console.log(add(2, 3)); // Outputs: 5
  console.log(add(2, 3)); // Outputs: 5 (always the same result for the same inputs)


  // eg for impure function

let count = 0;
function increment() {
  count++;
  return count;
}

console.log(increment()); // Outputs: 1
console.log(increment()); // Outputs: 2 (output depends on external variable 'count')
