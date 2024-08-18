const sentence = "The quick brown fox jumped over the lazy dog";

const word = sentence
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.substring(1))
    .join(" ");

console.log(word);
