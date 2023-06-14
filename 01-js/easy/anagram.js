/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // assuming only letters and that also lowercase
  const letterMap = new Array(26).fill(0);
  if (str1.length !== str2.length) return false;
  for (var i = 0; i < str1.length; i++){
    letterMap[str1[i] - 'a']++;
    letterMap[str2[i] - 'a']--;
  }
  for (var i = 0; i < str1.length; i++){
    if (letterMap[i] !== 0) return false;
  }
  return true;
}

module.exports = isAnagram;
