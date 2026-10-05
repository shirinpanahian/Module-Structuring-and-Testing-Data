import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("can correctly convert midnight with double-digit minutes", function () {
  assert.equal(formatAs12HourClock("00:15"), "12:15 am");
});

test("can correctly convert noon with double-digit minutes", function () {
  assert.equal(formatAs12HourClock("12:15"), "12:15 pm");
});

test("can correctly convert morning single-digit hours with double-digit minutes", function () {
  assert.equal(formatAs12HourClock("08:15"), "08:15 am");
});

test("can correctly convert late morning with single-digit minutes", function () {
  assert.equal(formatAs12HourClock("11:05"), "11:05 am");
});

test("can correctly convert afternoon with double-digit minutes", function () {
  assert.equal(formatAs12HourClock("13:15"), "01:15 pm");
});

test("can correctly convert late evening with single-digit minutes", function () {
  assert.equal(formatAs12HourClock("23:05"), "11:05 pm");
});

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("can correctly convert midnight time", function () {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("can correctly convert minutes", function () {
  assert.equal(formatAs12HourClock("21:08"), "09:08 pm");
});

test("can correctly convert noon", function () {
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});
test("can correctly convert one minute before noon", function () {
  assert.equal(formatAs12HourClock("11:59"), "11:59 am");
});
test("can correctly convert one hour after noon", function () {
  assert.equal(formatAs12HourClock("13:00"), "01:00 pm");
});
