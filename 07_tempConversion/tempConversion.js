const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = 0;
  let roundedTempCelsius = 0;

  tempCelsius = ((tempFahrenheit-32)*(5/9));

  roundedTempCelsius = Math.round(tempCelsius*10) / 10;

  return roundedTempCelsius;

};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = 0;
  let roundedTempFahrenheit = 0;

  tempFahrenheit = (tempCelsius*(9/5)+32);

  roundedTempFahrenheit = Math.round(tempFahrenheit*10) / 10;

  return roundedTempFahrenheit;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
