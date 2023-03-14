const convertToCelsius = function(numF) {
  // This is the conversion formula - to get C from F, subtract 32 and multiply by 5/9.
  let celcius = (numF-32)*0.5555555555;

  // toFixed rounds to the number of decimal places in the parameter. 
  // Annoyingly, it returns a string, so we use the + prefix to turn it back.
  const result = +celcius.toFixed(1);

  console.log(result);
  return result;
  
};

const convertToFahrenheit = function(numC) {
  // We can easily reverse the other formula here.
  // 9/5 evaluates to 1.8, so we'll use it instead. It might be faster than saying 9/5.
  let degF = (numC*1.8+32); 

  // We apply the same transform as before in order to get the fixed result.
  const result = +degF.toFixed(1);

  console.log(result);
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
