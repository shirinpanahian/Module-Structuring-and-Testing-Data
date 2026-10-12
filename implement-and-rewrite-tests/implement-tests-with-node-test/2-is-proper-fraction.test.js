import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

test("improper fraction", () => {
  // Example: 2/1 is a improper fraction
  assert.equal(isProperFraction(2, 1), false);
});

test("Equal numerator and denominator", () => {
  // Example: equal number
  assert.equal(isProperFraction(5, 5), false);
});

test("zero numerator", () => {
  // Example: zero numerator is a proper fraction?
  assert.equal(isProperFraction(0, 6), true);
});

test("Negative numerator", () => {
  // Example: negative numerator is a proper fraction?
  assert.equal(isProperFraction(-2, 3), true);
});

test("Negative denominator", () => {
  // Example: negative numerator is a proper fraction?
  assert.equal(isProperFraction(2, -5), true);
});

test("Both negative", () => {
  // Example: Both negative is a proper fraction?
  assert.equal(isProperFraction(-3, -5), true);
  assert.equal(isProperFraction(-5, -2), false);
});
