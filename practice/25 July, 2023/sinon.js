// test.js (using Mocha and Sinon)
const assert = require("assert");
const sinon = require("sinon");
const myModule = require("./myModule");

describe("add function", () => {
  it("should add two numbers", () => {
    const addSpy = sinon.spy(myModule, "add");

    const result = myModule.add(2, 3);

    assert.equal(result, 5);
    assert.ok(addSpy.calledOnce);
    assert.ok(addSpy.calledWith(2, 3));

    addSpy.restore(); // Restore the original add function
  });

//   it("should call the callback with the sum", () => {
//     const callback = sinon.fake();
//     myModule.addAsync(2, 3, callback);
//     sinon.assert.calledWith(callback, 5);
//   });
});
