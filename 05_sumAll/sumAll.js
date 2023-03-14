const sumAll = function(num1, num2) {

    // ERROR-CHECKING 

    // first, check for type. num1 and num2 have to both be numbers
    if (typeof(num1) != 'number' || typeof(num2) != 'number') return 'ERROR';

    // second, exclude negative numbers
    if (num1 < 0 || num2 < 0) return 'ERROR';

    // LOGIC

    // if they're the same, return num1*2
    if (num1 === num2) return num1+num1;

    // Next we have to make sure that we know which number is smaller and which is bigger
    // This is required to make the loop work correctly

    // smaller is the smaller num
    let smaller = (num1 < num2 ? num1 : num2); 

    // bigger is whichever the smaller one isn't
    const bigger = (smaller === num1 ? num2 : num1);

    // WORK

    // now we can execute the loop. it starts at smaller+1 because the first number is already part of the sum
    // ex. starting 2, 5: 2+3+
    for (let i = smaller+1; i <= bigger; i++) {
        smaller += i;
    }

    // since we used smaller as the sum, we return it
    console.log(smaller);
    return smaller;

};

// Do not edit below this line
module.exports = sumAll;
