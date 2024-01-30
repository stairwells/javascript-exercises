const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    else if (n == 0 || n == 1) {
        return parseInt(n);
    }

    let first_num = 1;
    let second_num = 1;

    for (i = 2; i < n; i++) {
        [first_num, second_num] = [second_num, first_num + second_num];
    }

    return second_num;
};

// Do not edit below this line
module.exports = fibonacci;
