//IMPORT FILE
const assert = require("chai").assert;
const middle = require("../middle");

//TEST
describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.equal(middle([1]).toString(), "");
  });

  it("returns [] for [1, 2]", () => {
    assert.equal(middle([1, 2]).toString(), "");
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.equal(middle([1, 2, 3]).toString(), "2");
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.equal(middle([1, 2, 3, 4, 5]).toString(), "3");
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.equal(middle([1, 2, 3, 4, 5, 6]).toString(), "3,4");
  });
});
