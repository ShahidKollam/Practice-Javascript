function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateNumbers();

console.log(generator.next().value); // Outputs: 1
console.log(generator.next().value); // Outputs: 2
console.log(generator.next().value); // Outputs: 3
console.log(generator.next().done);  // Outputs: true (no more values to yield)
