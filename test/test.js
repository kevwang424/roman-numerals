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

    var cases = [
      {string:"MDCXLIII", answer:1643},
      {string:"MCMLXIX", answer:1969},
      {string:"VXI", answer:"VXI is not valid"},
      {string:"XXXX", answer:"XXXX is not valid"},
      {string:"IIXV", answer:"IIXV is not valid"},
      {string:"XCIX", answer:99},
      {string:"IC", answer:"IC is not valid"},
      {string:"IF", answer:"IF is not valid"}
    ]

    cases.forEach(function(test) {

      it("checks that " + test.string + " equals " + test.answer, function(){
        var answer = helpers.romanNumerals(test.string)
        assert.equal(answer, test.answer)
      })
    })
  })
})
