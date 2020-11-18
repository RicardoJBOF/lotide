//IMPORT FILE
const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");

//TEST
describe("#assertArraysEqual", () => {
  it("returns pass for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(
      assertArraysEqual([1, 2, 3], [1, 2, 3]),
      `🟢🟢🟢 Assertion Passed: 1,2,3 === 1,2,3`
    );
  });

  it('returns fail for [1, 2, 3], [1, 2, "3"]', () => {
    assert.strictEqual(
      assertArraysEqual([1, 2, 3], [1, 2, "3"]),
      `🔴🔴🔴 Assertion Failed 1,2,3 !== 1,2,3`
    );
  });
});
