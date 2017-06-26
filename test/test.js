var assert = require('assert')
var helpers = require('../main.js')

describe("Helper Functions", function() {
  describe("#getValue(char)", function(){
    it("should take in a valid character V and return 5", function(){
      assert.equal(helpers.getValue("V"), 5)
    });
    it("should take in an invalid character F and return false", function(){
      assert.equal(helpers.getValue("F"), -1)
    })
  })

  describe("validateSubtraction(char1, char2)", function(){
    it("should take in 2 characters. First is I and second is X and return true", function(){
      assert.equal(helpers.validateSubtraction("I", "X"), true)
    })
    it("should take in 2 characters. First is I and second is C and return false", function(){
      assert.equal(helpers.validateSubtraction("I", "C"), false)
    })
    it("should take in 2 characters. First is V and second is X and return false", function(){
      assert.equal(helpers.validateSubtraction("V", "X"), false)
    })
  })

  describe("checkConsecutiveChars(string)", function(){
    it("checks to see that only I can be repeated up to 3 times", function(){
      assert.equal(helpers.checkConsecutiveChars("III"), true)
    })
    it("checks to see that I cannot be repeated 4 times", function(){
      assert.equal(helpers.checkConsecutiveChars("IIII"), false)
    })
    it("checks that you cannot substract two values from a larger one", function(){
      assert.equal(helpers.checkConsecutiveChars("IIXV"), false)
    })
    it("checks that you cannot have D repeating", function(){
      assert.equal(helpers.checkConsecutiveChars("DD"), false)
    })
  })

  describe("romanNumerals(string)", function(){
    it("checks that MDCXLIII equals 1643", function(){
      assert.equal(helpers.romanNumerals("MDCXLIII"), 1643)
    })
    it("checks that MCMLXIX equals 1969", function(){
      assert.equal(helpers.romanNumerals("MCMLXIX"), 1969)
    })
    it("checks that VXI is not valid", function(){
      assert.equal(helpers.romanNumerals("VXI"), "VXI is not valid")
    })
    it("checks that XXXX is not valid", function(){
      assert.equal(helpers.romanNumerals("XXXX"), "XXXX is not valid")
    })
    it("checks that IIXV is not valid", function(){
      assert.equal(helpers.romanNumerals("IIXV"), "IIXV is not valid")
    })
    it("checks that XCIX equals 99", function(){
      assert.equal(helpers.romanNumerals("XCIX"), 99)
    })
    it("checks that IC is not valid", function(){
      assert.equal(helpers.romanNumerals("IC"), "IC is not valid")
    })
    it("checks that F is not valid", function(){
      assert.equal(helpers.romanNumerals("IF"), "IF is not valid")
    })
  })
})
