/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  newStr1 = str1.split("").sort().join().toLowerCase();
  newstr2 = str2.split("").sort().join().toLowerCase();

  console.log(newStr1, newstr2);
  if(newStr1 === newstr2) return true;

  return false;
}

// console.log(isAnagram("hello", "olleh"));
module.exports = isAnagram;
