/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a: string, b: string): string => {
  const bit1: number = parseInt(a, 2);
  const bit2: number = parseInt(b, 2);
  console.log(bit1);
  console.log(bit2);
  console.log(bit1 + bit2);
  const sum: number = bit1 + bit2;
  console.log(sum);
  return sum.toString(2);
};
const a: string =
  "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
const b: string =
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

console.log(`Add binary \n${a} \n+ \n${b} \n= ${addBinary(a, b)}`);
