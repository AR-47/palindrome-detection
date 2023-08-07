/**
 * A function that takes a string and returns true if the string is a palindrome
 * @param inputStr
 * @returns boolean
 *
 */

export const isPalindrome = (inputStr: string): boolean => {
  const inputStrAsArr = inputStr.split("");
  if (inputStrAsArr[0] === inputStrAsArr[inputStrAsArr.length - 1]) {
    if (inputStrAsArr.length > 2) {
      const substring = inputStrAsArr.slice(1, -1).join("");
      return isPalindrome(substring);
    }
    return true;
  }
  return false;
};
