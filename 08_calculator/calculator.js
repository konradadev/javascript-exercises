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

const power = function(base, exponent) { 
  let result = base;
	for(let i=1; i<exponent;i++){
    result*=base;
  }
  return result;
};

const factorial = function(number) {
  let result=1;
  if(number!==0 && number!==1){
	  for(let i=1;i<=number;i++){
      result*=i;
    }
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
