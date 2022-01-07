/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
 function missingNumberBruteForce(numbers) {
    const N = numbers.length + 1;
    for (let i = 1; i <= N; i++) {
      let found = false;
      let j = 0;
      while (found === false && j < numbers.length) {
        if (i === numbers[j]) {
          found = true;
        }
        j++
      }
      if (found === false) {
        return i;
      }
    }
  }
  
  
  /**
   * Use an iterative  strategy for finding the missing number in an array
   */
  function missingNumberSum(numbers) {
   const N = numbers.length + 1;
   const fullSum = (N * (N + 1)) / 2;
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
     sum = sum + numbers[i];
   }
   return fullSum - sum
  }
  console.log(missingNumberSum([12, 13, 15]))
  
  module.exports = { missingNumberBruteForce, missingNumberSum };
  