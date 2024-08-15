// function factorial(n) {
//     let result = 1;

//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }

//     return result;
// }

function factorial(n) {
    if (n == 1 || n == 0) return 1;

    return n * factorial(n - 1);
}


console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1 (0! is defined as 1)