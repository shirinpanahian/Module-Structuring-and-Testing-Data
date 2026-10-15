import { getOrdinalNumber } from "./get-ordinal-number.js";
import { test, expect } from "@jest/globals";
// In this week's prep, we started implementing getOrdinalNumber.

// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.

// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// Case 1: Numbers ending with 1 (but not 11)
test("should not append 'st' for number ending with 11 ", () => {
  expect(() => getOrdinalNumber(11)).toThrow("Input must not ending with 11");
  expect(() => getOrdinalNumber(111)).toThrow("Input must not ending with 11");
  expect(() => getOrdinalNumber(45711)).toThrow(
    "Input must not ending with 11"
  );
});

// When the number ends with 1, except those ending with 11,
// Then the function should return a string by appending "st" to the number.
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
  expect(getOrdinalNumber(241)).toEqual("241st");
});

// Case 2: Numbers ending with 2 (but not 22)
// When the number ends with 2, except those ending with 22,
// Then the function should return a string by appending "nd" to the number.
test("should append 'nd' for numbers ending with 2, except those ending with 22", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(32)).toEqual("32nd");
  expect(getOrdinalNumber(132)).toEqual("132nd");
});

test("should not append 'nd' for number ending with 22 ", () => {
  expect(() => getOrdinalNumber(22)).toThrow("Input must not ending with 22");
  expect(() => getOrdinalNumber(122)).toThrow("Input must not ending with 22");
  expect(() => getOrdinalNumber(45722)).toThrow(
    "Input must not ending with 22"
  );
});

// Case 3: Numbers ending with 3 (but not 33)
test("should append 'rd' for numbers ending with 3, except those ending with 33", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(13)).toEqual("13rd");
  expect(getOrdinalNumber(123)).toEqual("123rd");
});

test("should not append 'rd' for number ending with 33 ", () => {
  expect(() => getOrdinalNumber(33)).toThrow("Input must not ending with 33");
  expect(() => getOrdinalNumber(133)).toThrow("Input must not ending with 33");
  expect(() => getOrdinalNumber(45733)).toThrow(
    "Input must not ending with 33"
  );
});

// Case 3: Numbers ending in other digits
test("should append 'th' for numbers ending in other digits", () => {
  expect(getOrdinalNumber(4)).toBe("4th");
  expect(getOrdinalNumber(5)).toBe("5th");
  expect(getOrdinalNumber(10)).toBe("10th");
  expect(getOrdinalNumber(20)).toBe("20th");
});
