// function hasTargetSum(array, target) {
  // Write your algorithm here
// }
  function hasTargetSum(array, target) {
  // Create an object to store seen numbers
  const seenNumbers = {};

  for (const number of array) {
    const complement = target - number;
    
    // Check if the complement exists in the seen numbers
    if (seenNumbers[complement]) {
      return true;
    }
    
    // Add the current number to the seen numbers
    seenNumbers[number] = true;
  }

  return false;
}


/* 
  Write the Big O time complexity of your function here
*/
/*
  Time Complexity: O(n)
  - The function loops through the array once, performing constant-time operations for each element.

  Space Complexity: O(n)
  - The function uses extra space to store seen numbers in an object.
*/


/* 
  Add your pseudocode here

*/
/*
  1. Initialize an empty object called `seenNumbers`.
  2. Loop through each number in the input array:
     a. Calculate the `complement` (target - current number).
     b. Check if `complement` exists in `seenNumbers`.
        - If yes, return true.
     c. Add the current number to `seenNumbers`.
  3. If no pair is found after the loop, return false.
*/


/*
  Add written explanation of your solution here
  /*
  The function works by storing numbers from the array in an object (`seenNumbers`) as it iterates through the array. For each number, it calculates the complement needed to reach the target by subtracting the current number from the target. If the complement is already in `seenNumbers`, it means there is a pair of numbers in the array that adds up to the target, so it returns true. If the loop completes without finding a match, the function returns false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
