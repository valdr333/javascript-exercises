const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(A) {
  let suma = 0
	A.forEach(br => suma += br);
  return suma;
};

const multiply = function(A) {
  let rez = A.reduce((um, curr) => um * curr, 1);
  return rez;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let suma = 1;
  for (let i = a; i > 0; i--) {
    suma *= i;
  }
  return suma;
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
