// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  // Create two cipher objects; one for encoding & decoding.
  const encoder = {
     a: "11",
     b: "21",
     c: "31",
     d: "41",
     e: "51",
     f: "12",
     g: "22",
     h: "32",
     i: "42",
     j: "42",
     k: "52",
     l: "13",
     m: "23",
     n: "33",
     o: "43",
     p: "53",
     q: "14",
     r: "24",
     s: "34",
     t: "44",
     u: "54",
     v: "15",
     w: "25",
     x: "35",
     y: "45",
     z: "55"
    }
  
  const decoder = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z"
  }
    
  function polybius(input, encode = true) {
    
    // Change input so that it is all lower case.
    const message = input.toLowerCase();
    
    // Select the cipher object for encoding or decoding 
    // based on what's passed through the parameter.
    const mode = encode ? encoder : decoder;
    
    // If decoding, reject any input with an odd amount of numbers
    if(!encode){
      // Remove all spaces from input, then get its length
      const testForOdd = input.replace(/ /g, "").length
      // Check if the given length is an odd number.
      if(testForOdd % 2 !== 0) {
        return false
      }
    }
    
    /*
    Create an array whose elements will either be:
    - a string of two digits if any number between 0-9 is found
    - a lowercase letter if any alphabetical characters are found
    - a space if it's found
    The 'g' modifier in the match function ensures it processes
    all characters and not just the first match it finds.
    */
    const messageArray = message.match(/[0-9]{2}|[a-z]|\s/g);
    
    /*
    Change each element in the array to their
    corresponding value in the encode/decode cipher.
    If the cipher does not contain the element being mapped,
    it will pass through the original element as it was.
    */
    const codedArray = messageArray.map(character =>
      mode[character] || character);
    
    //Join the new array into a string
    const output = codedArray.join('');
    
    //Return the output
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
