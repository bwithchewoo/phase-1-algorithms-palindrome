function isPalindrome(word) {
  // Write your algorithm here
  wordReverse = [...word].reverse().join("")
  if (wordReverse === word) {
    return true
  }else {
    return false
  }
}
isPalindrome("racecar")
/* 
  Add your pseudocode here
  function will receive one argument, a string.
  turn the string into an array, reverse() the array and then join() it back into a string
  then compare the new string to the initial string
  */

/*
  Add written explanation of your solution here
  reverse the word and compare if the word is the same as before you reversed it, if it is, return true, else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
