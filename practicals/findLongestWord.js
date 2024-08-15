// function findLongestWord(line) {
//     let max = "";

//     let word = line.split(" ");

//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length > max.length) {
//             max = word[i];
//         }
//     }

//     return max;
// }

function findLongestWord(line) {
    let max = "";

    let word = line.split(" ");

    const long = word.reduce((current, longest) => {
        return current.length > longest.length ? current : longest;
    }, "");

    return long;
}

// Test the function
const sentence = "The quick brown fox jumped over the lazy dog";
const longest = findLongestWord(sentence);
console.log(longest); // Output: "jumped"
