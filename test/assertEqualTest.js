//IMPORT FILE
const assert = require("chai").assert;
const assertEqual = require("../assertEqual");

//TEST
describe("#assertEqual", () => {
  it('returns false for ("Lighthouse Labs", "Bootcamp")', () => {
    assert.strictEqual(
      assertEqual("Lighthouse Labs", "Bootcamp"),
      `🔴🔴🔴 Assertion Failed Lighthouse Labs !== Bootcamp`
    );
  });

  it("returns true for assertEqual(1,1)", () => {
    assert.strictEqual(assertEqual(1, 1), `🟢🟢🟢 Assertion Passed: 1 === 1`);
  });
});
