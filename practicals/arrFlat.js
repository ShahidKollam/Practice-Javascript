const nested = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, [11, 12], 13],
    [20, [21, 22], 33],
];

function flatten(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (Array.isArray(element)) {
            newArr = newArr.concat(flatten(element));
        } else {
            newArr.push(element);
        }
    }
    return newArr;
}
console.log(flatten(nested));

// one line solution     return arr.flat(Infinity);
