const assert = require('chai').assert;
const tail = require('../tail')

describe("#tails", () => {

    it('returns "["Lighthouse", "Labs"]" for "["Hello", "Lighthouse", "Labs"]"', () => {
      assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });

});


// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);