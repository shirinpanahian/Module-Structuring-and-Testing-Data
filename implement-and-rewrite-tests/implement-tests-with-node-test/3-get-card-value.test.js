import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
  assert.equal(getCardValue("10♠"), 10);
});

test("Ace card", () => {
  assert.equal(getCardValue("A♠"), 11);
  assert.equal(getCardValue("A♣"), 11);
  assert.equal(getCardValue("A♦"), 11);
});

test("Face card", () => {
  assert.equal(getCardValue("J♠"), 10);
});

test("card is not a string", () => {
  assert.throws(
    () => {
      getCardValue(9);
    },
    { message: "Input must be a String" }
  );
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got invalid/,
    "Expected clear error"
  );

  assert.throws(
    () => getCardValue("1♠"),
    /Expected a number followed by a suit, but got invalid/,
    "Expected clear error"
  );

  assert.throws(
    () => getCardValue("9X"),
    /Expected a number followed by a suit, but got invalid/,
    "Expected clear error"
  );

  assert.throws(
    () => getCardValue("11♠"),
    /Expected a number followed by a suit, but got invalid/,
    "Expected clear error"
  );

  assert.throws(
    () => getCardValue("extra"),
    /Expected a number followed by a suit, but got invalid/,
    "Expected clear error"
  );

  assert.throws(
    () => getCardValue("08♠"),
    /Expected a number followed by a suit, but got invalid/,
    "Expected clear error"
  );
});

// TODO: What other invalid card cases can you think of?
