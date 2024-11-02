const findTheOldest = function(arr) {
    let newArr = arr.map(function(person) {
        if ("yearOfDeath" in person) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return 2024 - person.yearOfBirth;
        }
    });
    let max = 0;
    for (let i = 1; i < newArr.length; i++) {
        if (newArr[i] > newArr[max]) {
            max = i;
        }
    }
    return arr[max];
};

// Do not edit below this line
module.exports = findTheOldest;
