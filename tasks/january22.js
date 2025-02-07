
//Write a JavaScript function that takes a string and returns the string in uppercase.
let str1 = 'hello'
console.log(str1.toUpperCase())

//Write a JavaScript function that checks if a given string contains the word "JavaScript".
let str2 = 'JavaScript is a programming language'
console.log(str2.includes('JavaScript'))

//Write a JavaScript function that takes a string and returns a new string with all vowels removed.  
function removeVowels(input) {
    const vowels = "aeiouAEIOU";
    let result = "";
  
    for (let i = 0; i < input.length; i++) {
      if (!vowels.includes(input[i])) {
        result += input[i];
      }
    }
  
    return result;
  }
  
  // Example usage
  console.log(removeVowels("hello world")); // "hll wrld"
 
  
  
  