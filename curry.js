// function with multiple arguments tranforms to series of functions
// with single argument

function curry(a, b, c) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(curry(2)(2)(2));
