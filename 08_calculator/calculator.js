const add = function(num1, num2) {
  // We just add the two numbers here.
  return num1+num2;
	
};

const subtract = function(num1, num2) {
  // Just subtracts two numbers.
	return num1-num2;
};

const sum = function(array) {
  // This one returns a sum of an array. ForOf doesn't exist in Java, so let's use that.
  let result = 0;
  for (const entry of array) {
    result += entry;
  }
  return result;
  // It's pretty convenient, but not very different from foreach.
	
};

const multiply = function(array) {
  // This one returns the product of an array, oddly enough.
  // 
  let result = array[0];

  for (let i = 1; i < array.length; i++) {
    result *= array[i];
  }
  console.log(result);
  return result;

};

const power = function(num1, num2) {
  // Raises num1 to the power of num2
  return num1**num2;
	
};

const factorial = function(num) {
  // Factorials. Because of math shenanigans, 0!=1, so let's just special-case that.
  if (num === 0) return 1;

  // Alright, everything else should work as normal. It's just a for loop.
  // Start at one and multiply up.
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
