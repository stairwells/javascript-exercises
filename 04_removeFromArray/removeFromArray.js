const removeFromArray = function(array, ...args) {
    args.forEach ((el) => {
        if (array.includes(el)) {
            i = array.indexOf(el);
            array.splice(i, 1);     
        }
    });

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
