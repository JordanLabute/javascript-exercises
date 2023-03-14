const findTheOldest = function(personArray) {
    // We search the entire array and note the oldest age and the index of the person with it
    // If someone's age is older than the oldest age recorded, they become the new oldest
    let oldestAge = 0;
    let oldestIndex = 0;

    for (const person of personArray) {

        let age = 0;

        // If the person hasn't died yet, their yearOfDeath will be undefined
        // So we just use the curent year to determine their age
        if (typeof(person.yearOfDeath) === 'undefined') {
            age = (new Date().getFullYear())-person.yearOfBirth;

        } else {
            age = person.yearOfDeath-person.yearOfBirth;
        }
            
        if (age > oldestAge) {
            oldestAge = age;
            oldestIndex = personArray.indexOf(person);
        }
    }
    console.log(personArray[oldestIndex]);
    return personArray[oldestIndex];

};

// Do not edit below this line
module.exports = findTheOldest;
