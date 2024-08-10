// Generator functions are defined using the function* syntax
// that can pause its execution and resume using the yield keyword.

// Example 1: Simple Generator Function

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generateNumbers();

console.log(generator.next().value); // Outputs: 1
console.log(generator.next().value); // Outputs: 2
console.log(generator.next().value); // Outputs: 3
console.log(generator.next().done); // Outputs: true (no more values to yield)

// Example 3: Iterating over a Generator with for...of
function* generateEvenNumbers(max) {
    let i = 0;
    while (i <= max) {
        yield i;
        i += 2;
    }
}

for (const num of generateEvenNumbers(10)) {
    console.log(num); // Outputs: 0, 2, 4, 6, 8, 10
}
