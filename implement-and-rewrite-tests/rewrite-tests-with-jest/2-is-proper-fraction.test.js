import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return true when numerator is smaller than denominator `, () => {
  expect(isProperFraction(3, 5)).toEqual(true);
});

test(`should return false when numerator is bigger than denominator `, () => {
  expect(isProperFraction(6, 2)).toEqual(false);
});

test(`should return true when numerator is zero`, () => {
  expect(isProperFraction(0, 2)).toEqual(true);
});

test(`should return true when numerator is negative ans smaller`, () => {
  expect(isProperFraction(-4, 6)).toEqual(true);
});

test(`should return false when numerator is negative ans bigger`, () => {
  expect(isProperFraction(-8, 6)).toEqual(false);
});

test(`should return true when denominator is negative and bigger`, () => {
  expect(isProperFraction(2, -5)).toEqual(true);
});

test(`should return false when denominator is negative ans smaller`, () => {
  expect(isProperFraction(4, -3)).toEqual(false);
});

test(`should return correct answer when both is negative`, () => {
  expect(isProperFraction(-4, -3)).toEqual(false);
  expect(isProperFraction(-1, -3)).toEqual(true);
});

test(`should return true answer when Zero numerator and negative denominator`, () => {
  expect(isProperFraction(0, -3)).toEqual(true);
});

test(`should return false when both are zero`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});
