// Write your tests here!

//Testing code by Dave Cate

const { caesar } = require("../src/caesar")
const { expect } = require("chai")

describe("caesar", () => {
  it ("Should return a string of characters, shifting all characters based on the value of the shift parameter", () => {
    const answer = "eorrg dqg wkxqghu"
    const input = "BLOOD AND THUNDER"
    let shift = 3
    let encode = true
    const actual = caesar(input, shift, encode=true)
    expect(actual).to.eql(answer)
  })
  it ("Should return false if the shift value is missing, equal to 0, less than -25, or greater than 25", () => {
    const answer = false
    const input = "BLOOD AND THUNDER"
    let shift = null
    let encode = true
    const actual = caesar(input, shift, encode=true)
    expect(actual).to.eql(answer)
    shift = 0
    expect(actual).to.eql(answer)
    shift = -26
    expect(actual).to.eql(answer)
    shift = 26
    expect(actual).to.eql(answer)
  })
  it ("Should maintain spaces and non-alphabetical characters while ignoring caps", () => {
    const answer = "eo00g & wkxqg3u"
    const input = "BL00D & THUND3R"
    let shift = 3
    let encode = true
    const actual = caesar(input, shift, encode=true)
    expect(actual).to.eql(answer)
  })
  it ("Should wrap aroud to the other end of the alphabet when necessary", () => {
    const answer = "yilla xka qerkabo"
    const input = "BLOOD AND THUNDER"
    let shift = -3
    let encode = true
    const actual = caesar(input, shift, encode=true)
    expect(actual).to.eql(answer)
  })
  it ("Should decode an encoded input if the encode parameter is false", () => {
    const answer = "blood and thunder"
    const input = "eorrg dqg wkxqghu"
    let shift = 3
    let encode = false
    const actual = caesar(input, shift, encode=false)
    expect(actual).to.eql(answer)
  })
})