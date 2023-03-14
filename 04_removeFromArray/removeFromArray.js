// const removeFromArray = function(array, input1, input2 = 0) {

//     if (array.indexOf(input1) > -1) {
//         array.splice(array.indexOf(input1), 1);
//     }

//     if (array.indexOf(input2) > -1) {
//         array.splice(array.indexOf(input2), 1);
//     }

//     console.log(array);
//     return array;
// };

const removeFromArray = function(...args) {

    let array = args[0];

    // if (array.indexOf(args[1]) > -1) {
    //     array.splice(array.indexOf(args[1]), 1);
    // }

    // if (array.indexOf(args[2]) > -1) {
    //     array.splice(array.indexOf(args[2]), 1);
    // }

    for (let i = 1; i < args.length; i++) {
        if (array.indexOf(args[i]) > -1) {
            array.splice(array.indexOf(args[i]), 1);
        }
        
    }

    console.log(array);
    return array;
};

// find(), splice()

// Do not edit below this line
module.exports = removeFromArray;
