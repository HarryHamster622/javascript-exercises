const convertToCelsius = function(temp) {
  let fahrenheit = (temp - 32) * 5 / 9;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

const convertToFahrenheit = function(temp) {
  let celsius = temp * 9 / 5 + 32;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
