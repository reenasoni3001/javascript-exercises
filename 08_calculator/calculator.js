const add = function (value1, value2) {
  return value1 + value2;
};

const subtract = function (value1, value2) {
  return value1 - value2;
};

const sum = function (array) {
  // let result = 0;
  // for (let i = 0; i <= array.length - 1; i++) {
  //   result += array[i];
  // }
  // return result;

  return array.reduce((prev, current) => prev + current, 0);
};

const multiply = function (array) {
  return array.reduce((prev, current) => prev * current, 1);
};

const power = function (value1, value2) {
  return Math.pow(value1, value2);
};

const factorial = function (value) {
  if (value === 0) {
    return 1;
  }

  return value * factorial(value - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
