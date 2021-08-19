// Write your tests here!

const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution", () => {
  it ("Should output a string", () => {
   let input = "Peter Gunn"
   let alphabet = "xoyqmcgrukswaflnthdjpzibev";
   let answer = "nmjmh gpff"
   let encode = true
   const actual = substitution(input, alphabet, encode)
   expect(typeof actual).to.eql("string");
  })
  it ("Should successfully encode two words", () => {
   let input = "Peter Gunn"
   let alphabet = "xoyqmcgrukswaflnthdjpzibev";
   let answer = "nmjmh gpff"
   let encode = true
   const actual = substitution(input, alphabet, encode)
   expect(actual).to.eql(answer);
  })
  it ("Should successfully encode a sentence", () => {
    let input = "Remember, Mr. Gunn, The Brothers Go to Mother's"
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let answer = "hmamaomh, ah. gpff, jrm ohljrmhd gl jl aljrmh'd"
    let encode = true;
    const actual = substitution(input, alphabet, encode)
    expect(actual).to.eql(answer);
  })
    it ("Should successfully decode a sentence", () => {
    let input = "hmamaomh, ah. gpff, jrm ohljrmhd gl jl aljrmh'd"
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let answer = "remember, mr. gunn, the brothers go to mother's"
    let encode = false;
    const actual = substitution(input, alphabet, encode)
    expect(actual).to.eql(answer);
  })
})