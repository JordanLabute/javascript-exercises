const palindromes = function (string) {

    // first, make it case-insensitive and put it into an array of chars, removing spaces
    let charArray = string.toLowerCase().split(' ').join('').split('');


    // we also have to remove all the non-alphabetical chars
    var regex = /^[a-z]$/;

    for (const char of charArray) {
        if (!regex.test(char)) {
            // console.log("found a non-match");
            charArray.splice(charArray.indexOf(char), 1);
        }
    }

    // now that the string has been appropriately sanitized, 
    // we just have to make sure that reverseString is the same as String
    result = charArray.join('');
    reverseResult = charArray.reverse().join('');

    console.log(result);
    console.log(reverseResult);

    if (result === reverseResult) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
