//IMPORT FILE
const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

//TEST
describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('returns true for ["1", "2", "3"], ["1", "2", "3"]', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it('returns false for ["1", "2", "3"], ["1", "2", 3]', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

  it("returns true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it("returns false for [[2, 3], [4]], [[2, 3], 4]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
});
