const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  let celsiusRounded = Math.round(celsius * 10) / 10;
  return celsiusRounded;
};

const ctof = function(celsius) {
  const fahrenheit = celsius * 9/5 + 32;
  const fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
