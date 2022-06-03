function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = [];
  for (i of word) {
    // reverse the input string
    reversedWord.unshift(i);
    // console.log(reversedWord);
  }
  if (reversedWord.join('') === word) { // if the reversed string is the same as the input return true
    return true
  } else {return false} // else return false
}

/* 
  Add your pseudocode here
  1- assign an empty array for reversed word to push letters in it
  2- loop in every letter of word 
  3- push the letter at the beginning of the reversed array word
  4- join the letters from the reversed array word into one string
  5- if the string of the reversed word is the same as the word return true if not false
*/

/*
  Add written explanation of your solution here
  I need to make an isPalindrome function that returns either true or false. When the input string is the same forwards and backwards, I should return true. That means that if the input string is the same after I reverse it, I should return true. For instance, "mom" in reverse is also "mom", and "racecar" in reverse is also "racecar", so my solution should return true for these cases. "hi" in reverse is "ih", so my solution should return false for this case.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
