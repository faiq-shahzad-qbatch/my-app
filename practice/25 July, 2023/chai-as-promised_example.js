const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const { expect } = chai;

chai.use(chaiAsPromised);

global.Promise = require("bluebird"); // Replace 'bluebird' with your chosen Promise library

function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  });
}

describe("asyncFunction", () => {
  it('should resolve with "Success"', () => {
    return expect(asyncFunction()).to.eventually.equal("Success");
  });

  it("should reject with an error", () => {
    return expect(Promise.reject(new Error("Rejected"))).to.be.rejectedWith(
      "Rejected"
    );
  });
});
