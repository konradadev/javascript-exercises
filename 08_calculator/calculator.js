const add = function(addendA, addendB) {
  return addendA+addendB;
};

const subtract = function(minuend, subtrahend) {
	return minuend-subtrahend;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => total+number, 0);
};

const multiply = function(factors) {
  return factors.reduce((total, factor) => total*factor, 1);
};

const power = function() {
	
};

const factorial = function() {
	
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
