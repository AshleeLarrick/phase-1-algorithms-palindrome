function isPalindrome(word) {
  /* racecar */
  for (let i = 0; i < word.length; i++) {
    if (word[i] != word[word.length-(i+1)]) {
      return false
    }
  }
  return true
}

/* 
  For each character in the word:
    check if the letter is equal to the corresponding letter at the end of the string
    if not equal, return false
  Finally, return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("qbcd"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("aba"));
}

module.exports = isPalindrome;
