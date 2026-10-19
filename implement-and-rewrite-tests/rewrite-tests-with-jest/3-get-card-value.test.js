import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
test(`Should return number card for Valid digit card`, () => {
  expect(getCardValue("3♠")).toEqual(3);
  expect(getCardValue("7♥")).toEqual(7);
  expect(getCardValue("10♦")).toEqual(10);
  expect(getCardValue("9♣")).toEqual(9);
});
//   Face Cards (J, Q, K)
test(`Should return 10 when given an Face card`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});
//   Invalid Cards
test(`should return "Input must be a String" when card is not string type`, () => {
  expect(() => getCardValue(7)).toThrow("Input must be a String");
  expect(() => getCardValue(3)).toThrow("Input must be a String");
});

test(`should return "Expected a number followed by a suit, but got invalid" when card is not string type`, () => {
  expect(() => getCardValue("1♠")).toThrow(
    "Expected a number followed by a suit, but got invalid"
  );
});

test(`should return "Expected a number followed by a suit, but got invalid" when card is not string type`, () => {
  expect(() => getCardValue("9X")).toThrow(
    "Expected a number followed by a suit, but got invalid"
  );
});
// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
