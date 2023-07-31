// test/exampleTest.js

const chai = require("chai");
const { expect } = chai;

describe("Math Operations", () => {
  it("should add two numbers correctly", () => {
    const result = 2 + 3;
    expect(result).to.equal(5);
  });

  it("should subtract two numbers correctly", () => {
    const result = 7 - 3;
    expect(result).to.equal(4);
  });
});
