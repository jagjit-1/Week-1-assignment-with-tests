/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const letterMap = {}
  if (str1.length !== str2.length) return false;
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');
  for (var i = 0; i < str1.length; i++) {

    if (letterMap[str1[i]]) letterMap[str1[i]]++;
    else letterMap[str1[i]] = 1;


    if (letterMap[str2[i]]) letterMap[str2[i]]--;
    else letterMap[str2[i]] = -1;

  }
  for (const key in letterMap) {
    if (letterMap[key] !== 0) return false;
  }
  return true;
}

module.exports = isAnagram;
