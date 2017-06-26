module.exports = {
  // function to do the addition/subtraction and returns answers
  romanNumerals: function (string){
    var answer = 0

    if(this.checkConsecutiveChars(string)){
      for(var i = 0; i < string.length; i++){

        var currentLetter = string[i]
        var nextLetter = string[i+1]

        if (this.getValue(currentLetter) === -1){
          return `${string} is not valid`
        } else if (this.getValue(currentLetter) < this.getValue(nextLetter) && this.validateSubtraction(currentLetter, nextLetter)){
          answer -= this.getValue(currentLetter)
        } else if(this.getValue(currentLetter) >= this.getValue(nextLetter)){
          answer += this.getValue(currentLetter)
        } else {
          return `${string} is not valid`
        }
      }
    } else {
      return `${string} is not valid`
    }

    return answer
  },

  //this function will check for consecutive letters
  checkConsecutiveChars: function(string){
    var count = 0
    var currentLetter

    for(var i = 0; i < string.length; i++){
      var nextLetter = string[i+1]

      if(currentLetter !== string[i]){
        currentLetter = string[i]
        count = 1
      } else if (currentLetter === string[i]){
        count += 1
        // D, L, V can never be repeated. All others can be repeated up to 3 consecutive times.
        if (count >= 2 && ["D","L","V"].includes(currentLetter)){
          return false
        }
        // This checks if there are two of the same characters before the larger numbers you cannot subtract them
        else if (count >= 2 && ["V","X","L","C","D","M"].includes(nextLetter)){
          return false
        } else if (count > 3){
          return false
        }
      }
    }
    return true
  },

  // "I" can be subtracted from "V" and "X" only. "X" can be subtracted from "L" and "C" only. "C" can be subtracted from "D" and "M" only. "V", "L", and "D" can never be subtracted
  validateSubtraction: function(char1, char2){
    if(char1 === "I" && ["V","X"].includes(char2)){
      return true
    } else if (char1 === "X" && ["L","C"].includes(char2)){
      return true
    } else if (char1 === "C" && ["D","M"].includes(char2)){
      return true
    } else {
      return false
    }
  },



  // this function gets the actual value of the character AND checks to see that it exists
  getValue: function(char){

    var validChars = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }

    return validChars[char] ? validChars[char] : -1
  }

}





// Rules

// I should convert to 1
// II should convert to 2
// III should convert to 3
// IV should convert to 4
// XVI should convert to 16
// MCMLXIX should convert to 1969
// MDCXLIII should convert to 1643

// Unit Test Examples
// Beware of invalid numerals:
// IIII should trigger error
// XXXX should trigger error
// VXI should trigger error


// "I" can be subtracted from "V" and "X" only. "X" can be subtracted from "L" and "C" only. "C" can be subtracted from "D" and "M" only. "V", "L", and "D" can never be subtracted
// Only one small-value symbol may be subtracted from any large-value symbol.
// The symbols "I", "X", "C", and "M" can be repeated three times in succession, but no more. (They may appear more than three times if they appear non-sequentially, such as XXXIX.) "D", "L", and "V" can never be repeated.
//
// Only subtract powers of ten (I, X, or C, but not V or L)
// For 95, do NOT write VC (100 – 5).
// DO write XCV (XC + V or 90 + 5)
//
// b. Only subtract one number from another.
// For 13, do NOT write IIXV (15 – 1 - 1).
// DO write XIII (X + I + I + I or 10 + 3)
//
// c. Do not subtract a number from one that is more than 10 times greater (that is, you can subtract 1 from 10 [IX] but not 1 from 20—there is no such number as IXX.)
// For 99, do NOT write IC (C – I or 100 - 1).
// DO write XCIX (XC + IX or 90 + 9)
