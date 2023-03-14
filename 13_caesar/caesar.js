const caesar = function(string, num) {

    // In order to account for large num values, we just make it small
    let moddedNum = num%26;

    // Initialize a result
    let result = new Array;

    // For each character in the string, we turn it into a charCode
    // If it's not a letter, we add it directly. 
    // If it is a letter, we make sure that it's in-range
    // And finally we shift the character and add it to the result array
    for (let index = 0; index < string.length; index++) {
        let char = string.charCodeAt(index);

        // If something isn't a letter, we can push it without ciphering.
        if (!isLetter(char)) {
            result.push(String.fromCharCode(char));
        } 

        
        else {
            // We have to get the char to exist in the correct range.
            // If adding the cipher shift value puts the char above or below the correct range
            // we can subtract or add 26 in order to bring it back in range.
            char = correctRange(char, moddedNum); 

            char += moddedNum;
            
            result.push(String.fromCharCode(char));
        }        
    }

    // The result is an array; this turns it back into a string
    result = result.join('');
    return result;
};

function correctRange(char, moddedNum) {
    if (char < 91 && char + moddedNum > 90 || char < 123 && char + moddedNum > 122) {
        char -= 26;
    }
    if (char > 64 && char + moddedNum < 65 || char > 96 && char + moddedNum < 97) {
        char += 26;
    }
    return char;
}

function isLetter(charCode) {
    if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123) {
        return true;
    }
    return false;
}

// Do not edit below this line
module.exports = caesar;
