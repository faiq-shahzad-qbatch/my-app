// test.js

const chai = require("chai");
const { expect } = chai;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

// Extend Chai with sinon-chai
chai.use(sinonChai);

// Function to test
function add(a, b) {
  return a + b;
}

describe("add function", () => {
  it("should add two numbers", () => {
    // Create a spy for the add function
    const addSpy = sinon.spy(add);

    // Call the function with arguments
    const result = addSpy(2, 3);

    // Using sinon-chai assertions for spies
    expect(addSpy).to.have.been.calledOnce;
    expect(addSpy).to.have.been.calledWith(2, 3);

    // Regular chai assertion
    expect(result).to.equal(5);

    // Restore the original add function
    // addSpy.restore();
  });
});

// Run the test case using Mocha
