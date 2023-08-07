import { isPalindrome } from "./index";

test("returns true for racecar", () => {
  expect(isPalindrome("racecar")).toEqual(true);
});

test("returns true for neveroddoreven", () => {
  expect(isPalindrome("neveroddoreven")).toEqual(true);
});

test("returns true for aha", () => {
  expect(isPalindrome("aha")).toEqual(true);
});

test("returns true for amanaplanacanalpanama", () => {
  expect(isPalindrome("amanaplanacanalpanama")).toEqual(true);
});

test("returns true for abcdefggfedcba", () => {
  expect(isPalindrome("abcdefggfedcba")).toEqual(true);
});

test("returns false for hello", () => {
  expect(isPalindrome("hello")).toEqual(false);
});

test("returns false for nope", () => {
  expect(isPalindrome("nope")).toEqual(false);
});

test("returns false for palindrome", () => {
  expect(isPalindrome("palindrome")).toEqual(false);
});
