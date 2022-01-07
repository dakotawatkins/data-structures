/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
 function minimumAndMaximumSort(numbers) {
    if (numbers.length === 0) {
      return [];
    }
    const sorted = numbers.sort(function(a, b){return a - b});
    return [sorted[0], sorted[sorted.length-1]]  
  }
  
  
  /**
   * Implement an algorithm that uses iteration to find the minimum and maximum
   */
  function minimumAndMaximumIterate(numbers) {
    if (numbers.length === 0) {
      return [];
    }
    const sorted = numbers.sort(function(a, b){return a - b});
    return [sorted[0], sorted[sorted.length-1]]  
  }
  
  module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
  