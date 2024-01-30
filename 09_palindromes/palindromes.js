const palindromes = function (str) {
    let word_list = str.toLowerCase().split('')
    const filtered = word_list.filter((letter) => !' ,.!'.includes(letter)).join('');

    return filtered === filtered.split('').reverse().join('')
};

// Do not edit below this lines
module.exports = palindromes;
