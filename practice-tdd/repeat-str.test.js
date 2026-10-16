// Implement a function repeatStr
import { repeatStr } from "./repeat-str.js";
import { test, expect } from "@jest/globals";
// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions:
// Given a target string `str` and a positive integer `count` greater than 1,
// When the repeatStr function is called with these inputs,
// Then it should return a string that contains the original `str` repeated `count` times.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});
// Case: handle count of 1:
// Given a target string `str` and a `count` equal to 1,
// When the repeatStr function is called with these inputs,
// Then it should return the original `str` without repetition.
test("should repeat the string count times", () => {
  const str = "World";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("World");
});
// Case: Handle count of 0:
// Given a target string `str` and a `count` equal to 0,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string.
test("should return an empty string for zero", () => {
  const str = "Hi!";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});
// Case: Handle negative count:
// Given a target string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error, as negative counts are not valid.
test("should throw an error, as negative counts are not valid", () => {
  const str = "Hi!";
  const count = -4;
  expect(() => repeatStr(str, -4)).toThrow("negative counts are not valid");
});

test("should repeat the string count times", () => {
  const str = "";
  const count = 5;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});
