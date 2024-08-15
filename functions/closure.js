// A closure in JavaScript is a function that remembers and can
// access its outer scope's variables even after the outer function 
// has finished executing.

function outerFunction() {
    let count = 0; // A variable in the outer scope
  
    function innerFunction() {
      count++; // The inner function has access to the outer function's variables
      console.log(count);
    }
  
    return innerFunction;
  }
  
  const counter = outerFunction(); // 'counter' is a reference to 'innerFunction' with its own closure
  counter(); // Outputs: 1
  counter(); // Outputs: 2
  counter(); // Outputs: 3
  