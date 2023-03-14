const leapYears = function(year) {

    // Leap years are divisible by 4, but NOT divisible by 100 unless they are ALSO divisible by 400.
    // So, let's just exclude any year that's divisible by 100 and not divisible by 400
    if (year % 100 === 0 && year % 400 != 0) return false;

    // Every other year divisible by 4 should be true.
    if (year % 4 === 0) {
        return true;
    } 
    
    // And every year that isn't divisible by 4 is automatically false.
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
