/*
    38. Count and Say
    The count-and-say sequence is the sequence of integers with the first five terms as following:

    1.     1
    2.     11
    3.     21
    4.     1211
    5.     111221
    6.     312211
    7.     13112221

    1 is read off as "one 1" or 11.
    11 is read off as "two 1s" or 21.
    21 is read off as "one 2, then one 1" or 1211.

    Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

    Note: Each term of the sequence of integers will be represented as a string.



    Example 1:

    Input: 1
    Output: "1"
    Example 2:

    Input: 4
    Output: "1211"
*/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return "1";
    }
    var count = 1;
    var reducer = function (acc, val, idx, arg) {
        var nxt = arg[idx + 1];
        if (val === nxt) {
            count = count + 1;
        }
        else {
            acc = acc + count + val;
            count = 1;
        }
        //console.log(
        //  `idx = ${idx} | (val,next) = ${val},${next} | count = ${count} | acc = ${acc}`
        //);
        return acc;
    };
    var previous = "1";
    var data = previous.split("");
    var next;
    for (var i = 1; i < n; i++) {
        //console.log(`i = ${i}`);
        next = data.reduce(reducer, "");
        //console.log(`---------------------------------------`);
        data = next.split("");
    }
    return next;
};
console.log("input = 1  output = " + countAndSay(1));
console.log("input = 2  output = " + countAndSay(2));
console.log("input = 3  output = " + countAndSay(3));
console.log("input = 4  output = " + countAndSay(4));
console.log("input = 5  output = " + countAndSay(5));
console.log("input = 6  output = " + countAndSay(6));
console.log("input = 7  output = " + countAndSay(7));
