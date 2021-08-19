// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    // If shift is not present, 0, greater than 25, 
    // or less than -25, return false
    if (!shift || shift < -25 || shift > 25) return false;
    
    // Determine if encoding or decoding.
    if(!encode) {
      // If decoding, switch shift from positive to negative 
      // or vice versa.
      shift = -shift;
    }
    
    /*
    Create an array where each element is a separate character
    from the input string. 
    Each character should also all be in lower case.
    */ 
    const inputMessageArray = input.toLowerCase().split("");
    
    // The array to be returned at the end of the function
    const resultingArray = [];
    
    // Define the alphabet being used.
    // This will prevent needing to use character codes.
    const alphabet = ["a", "b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z"];

    /*
    Loop through each character in the inputMessageArray
    The anonymous function will pass the character being viewed,
    as well as its index value.
    */
    inputMessageArray.forEach((character, index) => {
      
      /*
      Check to see if the current character is a valid letter.
      If it is, proceed with finding out what character is found
      after shifting, then push to the resultingArray.
      */
      if(alphabet.includes(character)) {
        
        /*
        Loop through the alphabet to find the letter 
        that matches the character passed in the arguments.
        Also make note of the index of the letter 
        inside the alphabet array.
        */
        alphabet.find((letter, index) => {
          // Once the letter is located, perform the following:
          if (character === letter) {
            
            // Create a variable to track the shiftedIndex
            let shiftedIndex = index + shift;

            // If shiftedIndex is greater than or equal to 26,
            // or less than 0, adjust variable to a valid index #
            if (shiftedIndex >= 26) {
              shiftedIndex = shiftedIndex - 26;
            } else if (shiftedIndex < 0) {
              shiftedIndex = shiftedIndex + 26;
            }

            // Obtain the shifted letter from the alphabet array.
            const shiftedChar = alphabet[shiftedIndex];
            
            // Push the shifted character into the resulting Array
            resultingArray.push(shiftedChar);
          }
        })
      } else {
        /*
        If the character isn't a shiftable letter, 
        then put the character in the array, anyway.
        This will ensure that spaces, special characters, 
        and numbers are included in the resulting message.
        */
        resultingArray.push(character);
      }
      
    })
    
    // Join all the characters into the array together 
    // to form a string, then return it.
    return resultingArray.join("");
  }

  return { caesar,};
})();


module.exports = { caesar: caesarModule.caesar };