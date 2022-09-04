const { HashTable } = require("../hashtable/hashtable");

// function repeatedWord(string) {
//   if (!string) return "Empty";

//   let words = string.toLowerCase().split(',').join('').split(' ');
//   console.log(words);
//   let hashMap = new HashTable(1000);

//   for (let i = 0; i < words.length; i++) {
//     if (hashMap.contains(words[i])) {
//       return words[i];
//     } else {
//       hashMap.set(words[i]);
//     }
//   }
//   return "No repeated words";
// }
// let result = repeatedWord(
//     "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...");
// console.log(result);



function uniqueCharacters(string) {
  if (!string) return "Empty";

  let letters = string.toLowerCase().split(' ').join('').split('');
  console.log(letters);
  let hashMap = new HashTable(1000);

  for (let i = 0; i < letters.length; i++) {
    if (hashMap.contains(letters[i])) {

      return true;
    } else {
      hashMap.set(letters[i]);
    }
  }
  return false;
}

uniqueCharacters('amzxkdhi')




// module.exports = repeatedWord
