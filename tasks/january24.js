//Write a function to find the second largest number in the array without sorting it.
function findSecondLargest(arr) {
    let largest = 0;
    let secondLargest = 0;
  
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }
  
    return secondLargest === 0 ? null : secondLargest;
  }
  
  // Example usage:
  const numbers = [3, 5, 1, 8, 7];
  console.log(findSecondLargest(numbers)); // Output: 7

  //Write a function that checks if an array is a palindrome (reads the same forward and backward).
  function isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


console.log(isPalindrome([1, 2, 2, 1])); // true
console.log(isPalindrome([1,4,6])); // false

  
//Write a function that uses filter() to remove all negative numbers from an array and then push() all the positive numbers into a new array.

function removeNegativesAndPush(arr) {
  let positives = [];
  arr.filter(num => num >= 0).forEach(num => positives.push(num));
  return positives;
}

// Example usage:
console.log(removeNegativesAndPush([-3, 5, -1, 8, -7, 10])); // [5, 8, 10]


