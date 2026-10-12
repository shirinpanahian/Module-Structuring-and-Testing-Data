import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles
test("Invalid value", () => {
  assert.throws(
    () => {
      getAngleType("shirin");
    },
    { message: "Input must be a number" }
  );
});

test("Acute angle for angles greater than 0° and less than 90°", () => {
  const message = getAngleType(70);
  assert.equal(message, "Acute angle");
});

test("Right angle", () => {
  const message = getAngleType(90);
  assert.equal(message, "Right angle");
});

test("Obtuse angle for angles greater than 90° and less than 180°", () => {
  const message = getAngleType(110);
  assert.equal(message, "Obtuse angle");
});

test("Straight angle for exactly 180°", () => {
  const message = getAngleType(180);
  assert.equal(message, "Straight angle");
});

test("Reflex angle for angles greater than 180° and less than 360°", () => {
  const message = getAngleType(260);
  assert.equal(message, "Reflex angle");
});
