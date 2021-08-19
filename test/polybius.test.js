// Write your tests here!

const { polybius } = require("../src/polybius")
const { expect } = require("chai")

describe("polybius", () => {
  it ("Should output a string", () => {
   let input = "spice melange"
   let answer = "3453423151 23511311332251"
   let encode = true
   const actual = polybius(input, encode)
   expect(typeof actual).to.eql("string")
  })
  it ("Should return false when decoding a string with an odd number of characters, excluding spaces", () => {
    let input = "1 23 45"
    let answer = false
    let encode = false
    const actual = polybius(input, encode)
    expect(actual).to.eql(answer)
  })
  it ("Should maintain spaces from input to output", () => { 
    let input = "spice melange"
    let answer = "3453423151 23511311332251"
    let encode = true
    const actual = polybius(input, encode)
    expect(actual).to.eql(answer)
  })
  it ("Should ignore capital letters", () => {
    let input = "sPiCe MeLaNgE"
    let answer = "3453423151 23511311332251"
    let encode = true
    const actual = polybius(input, encode)
    expect(actual).to.eql(answer)
  })
  it ("Should return I and J in the same space when decoding", () => {
    let input = "3453423151 23511311332251"
    let answer = "sp(i/j)ce melange"
    let encode = false
    const actual = polybius(input, encode)
    expect(actual).to.eql(answer)
  })
  it ("Should be capable of handling a message no matter how many words are in it when encoding.", () => {
    let input = "Kickstart My Heart";
    let answer = "524231523444112444 2345 3251112444";
    let encode = true;
    const actual = polybius(input, encode);
    expect(actual).to.eql(answer);
  })
  it ("Should be capable of handling a message no matter how many words are in it when decoding.", () => {
    let input = "524231523444112444 2345 3251112444";
    let answer = "k(i/j)ckstart my heart";
    let encode = false;
    const actual = polybius(input, encode);
    expect(actual).to.eql(answer);
  })
})

/*

//Polybius Test Code by Dave Cate
const { polybius } = require("../src/polybius")
const { expect } = require("chai")

describe("polybius", () => {
  it ("Should output a string", () => {
   let input = "spice melange"
   let answer = "3453423151 23511311332251"
   let encode = true
   const actual = polybius(input, encode)
   expect(typeof actual).to.eql("string")
  })
  it ("Should return false when decoding a string with an odd number of characters, excluding spaces", () => {
    let input = "1 23 45"
    let answer = false
    let encode = false
    const actual = polybius(input, encode)
    expect(actual).to.eql(answer)
  })
  it ("Should maintain spaces from input to output", () => { 
    let input = "spice melange"
    let answer = "3453423151 23511311332251"
    let encode = true
    const actual = polybius(input, encode)
    expect(actual).to.eql(answer)
  })
  it ("Should ignore capital letters", () => {
    let input = "sPiCe MeLaNgE"
    let answer = "3453423151 23511311332251"
    let encode = true
    const actual = polybius(input, encode)
    expect(actual).to.eql(answer)
  })
  it ("Should return I and J in the same space when decoding", () => {
    let input = "3453423151 23511311332251"
    let answer = "sp(i/j)ce melange"
    let encode = false
    const actual = polybius(input, encode)
    expect(actual).to.eql(answer)
  })
})
*/