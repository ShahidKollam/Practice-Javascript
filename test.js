function findLongestWord(str) {
    return str.split(" ").reduce((res, item) => 
      (res.length > item.length ? res : item), "");
}

const sentence = "The quick brown fox jumped over the lazy dog";
const longest = findLongestWord(sentence);
console.log(longest); // Output: "jumped"
