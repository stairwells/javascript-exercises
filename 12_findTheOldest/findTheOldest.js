const findTheOldest = function(people) {
    const result = people.sort(function(first, second) {
        const first_age = getAge(first.yearOfDeath, first.yearOfBirth);
        const second_age = getAge(second.yearOfDeath, second.yearOfBirth);

        return first_age > second_age ? -1 : 1;
    });

    return result[0];
};

function getAge(death, birth) {
    if (!death) {
        death = 2024;
    }

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
