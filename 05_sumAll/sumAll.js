const sumAll = function(start, end) {
    if (start < 0 || end < 0 || typeof start !== "number" || typeof end !== "number") {
        return "ERROR";
    }

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    // Formula for sum of all numbers in a range (inclusive)
    return (start + end) / 2 * (end - start + 1)
};

// Do not edit below this line
module.exports = sumAll;
