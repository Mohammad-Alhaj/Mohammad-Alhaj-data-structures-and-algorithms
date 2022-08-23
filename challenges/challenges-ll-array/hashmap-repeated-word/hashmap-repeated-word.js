const { HashTable } = require("../hashtable/hashtable");

function repeatedWord(string) {
  if (!string) return "Empty";

  let words = string.toLowerCase().split(',').join('').split(' ');
  console.log(words);
  let hashMap = new HashTable(1000);

  for (let i = 0; i < words.length; i++) {
    if (hashMap.contains(words[i])) {
      return words[i];
    } else {
      hashMap.set(words[i]);
    }
  }
  return "No repeated words";
}
let result = repeatedWord(
    "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...");
console.log(result);



// et string = 'mohammad bsil mohammad'

// string[0].toUpperCase()
// for(let i =1; i <= string.length ; i++){
//   if(string[i] === ' ') {
//     string[i+1].toUpperCase();
//   }

  
// }

let x = 'moas'
let xs =x.toUpperCase()
console.log(xs)  





module.exports = repeatedWord
