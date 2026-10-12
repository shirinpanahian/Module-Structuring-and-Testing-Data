import { getAngleType } from "../implement/1-get-angle-type.js";
import { test, expect } from "@jest/globals";
// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Case 1: Acute angles
test(`should return "Acute angle" when (0 < angle < 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angle
test(`should return "Right angle" when (angle = 90)`, () => {
  // Test various Right angles
  expect(getAngleType(90)).toEqual("Right angle");
});
// Case 3: Obtuse angles
test(`should return "Obtuse angle" when (90 < angle < 180)`, () => {
  // Test various Obtuse angle, including boundary cases
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(145)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});
// Case 4: Straight angle
test(`should return "Obtuse angle" when (angle = 180)`, () => {
  // Test various Straight angle
  expect(getAngleType(180)).toEqual("Straight angle");
});
// Case 5: Reflex angles
// Case 6: Invalid angles
