const repeatString = function(string_to_concat, num) {
    if (num < 0) {
        return "ERROR";
    }

    let result = '';
    for (i = 0; i < num; i++) {
        result = result + string_to_concat;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
