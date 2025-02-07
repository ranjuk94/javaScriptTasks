//Write a function using Number.isFinite() to check if a given value is a finite number and return a message indicating whether it is finite or not.

function checkIfFinite(value) {
    if (Number.isFinite(value)) {
      return `${value} is a finite number.`;
    } else {
      return `${value} is not a finite number.`;
    }
  }
  
  // Example usage
  console.log(checkIfFinite(42));        // "42 is a finite number."
  console.log(checkIfFinite(Infinity)); // "Infinity is not a finite number."
  console.log(checkIfFinite('42'));     // "'42' is not a finite number."
  console.log(checkIfFinite(NaN));      // "NaN is not a finite number."
  console.log(checkIfFinite(-3.14));    // "-3.14 is a finite number."

  //Create a function that accepts a string representing a number, and use Number() to convert it into a number. If the conversion fails, return NaN, otherwise return the number.

  function convertToNumber(inputString) {
    const result = Number(inputString);
    return Number.isNaN(result) ? NaN : result;
  }
  
  // Example usage
  console.log(convertToNumber("123"));       // 123
  console.log(convertToNumber("45.67"));     // 45.67
  console.log(convertToNumber("hello"));     // NaN
  console.log(convertToNumber(""));          // 0
  console.log(convertToNumber("Infinity"));  // Infinity
  console.log(convertToNumber(null));        // 0
  
  //Create a function that accepts two numbers and uses Math.min() and Math.max() to return the smallest and largest number between the two
  function findMinMax(num1, num2) {
    const smallest = Math.min(num1, num2);
    const largest = Math.max(num1, num2);
    return  {smallest, largest} ;
  }
  
  // Example usage
  console.log(findMinMax(50, 20));  // { smallest: 10, largest: 20 }
  console.log(findMinMax(-8, 8));  // { smallest: -5, largest: 5 }
  console.log(findMinMax(10, 10));   // { smallest: 7, largest: 7 }
  console.log(findMinMax(100, -50)); // { smallest: -50, largest: 100 }
  