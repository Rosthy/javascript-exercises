const convertToCelsius = function(Temperature) { 
  return Math.round(((Temperature-32)*5/9)*10)/10
};

const convertToFahrenheit = function(Temperature) {
  return Math.round((Temperature*(9/5)+32)*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
