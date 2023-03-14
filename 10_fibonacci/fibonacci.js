const fibonacci = function(num) {

    // So, negatives are right out
    if (num < 0) return 'OOPS';

    // And strings need to work
    if (typeof(num) === 'string') {
        num = +num;
    }

    // Now we can make the loop
    let previous1 = 0;
    let previous2 = 1;
    let tally = 1;
    for (let i = 1; i < num; i++) {

        tally = previous1+previous2;
        previous1 = previous2;
        previous2 = tally;
    }

    console.log(tally);
    return tally;
    


};

// Do not edit below this line
module.exports = fibonacci;
