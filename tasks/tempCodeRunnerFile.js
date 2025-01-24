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