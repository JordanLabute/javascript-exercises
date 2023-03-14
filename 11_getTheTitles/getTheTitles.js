const getTheTitles = function(arrayOfBooks) {
    const arrayOfTitles = new Array;
    for (const book of arrayOfBooks) {
        arrayOfTitles.push(book.title);
    }
    console.log(arrayOfTitles);
    return arrayOfTitles;

};

// Do not edit below this line
module.exports = getTheTitles;
