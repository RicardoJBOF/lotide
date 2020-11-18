# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**
This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@ricardojbof/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function(assertArraysEqual)`: Print if compared arrays are similar or not.
- `function(assertEqual)`: Print if non-complex variables (numbers, strings, NaN, undefined) are similar or not.
- `function(assertObjectsEqual)`: Compare objects.
- `function(countLetters)`: Count number of letters.
- `function(countOnly)`: Count specific value.
- `function(eqArrays)`: Compare if objects are equal or not.
- `function(eqObjects)`: Compare if objects are equal or not.
- `function(findKey)`: Find key.
- `function(findKeyByValue)`: Fin key by value.
- `function(flatten)`: Transform a nested array in a flatten one.
- `function(head)`: Get first element of an array.
- `function(letterPositions)`: Position of an element in a string.
- `function(map)`: Transform all the elements of an array at the same time.
- `function(middle)`: Get middle element of an array.
- `function(takeUntil)`: Get elements of array by a defined element.
- `function(tail)`: Get last element of an array.
- `function(without)`: Get remaining array's elements after removing defined elements.
