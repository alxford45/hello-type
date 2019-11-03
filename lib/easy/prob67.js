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
var addBinary = function (a, b) {
    var bit1 = parseInt(a, 2);
    var bit2 = parseInt(b, 2);
    console.log(bit1);
    console.log(bit2);
    console.log(bit1 + bit2);
    var sum = bit1 + bit2;
    console.log(sum);
    return sum.toString(2);
};
var a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
var b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
console.log("Add binary \n" + a + " \n+ \n" + b + " \n= " + addBinary(a, b));
