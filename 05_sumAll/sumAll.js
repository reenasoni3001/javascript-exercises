const sumAll = function (num, num2) {
  // if the arguments are not equals to number return 'ERROR'
  if (typeof (num && num2) != "number") {
    return "ERROR";
  }
  if (num < 0 || num2 < 0) {
    return "ERROR";
  }
  let min = Math.min(num, num2);
  console.log(min);
  let max = Math.max(num, num2);
  console.log(max);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
    console.log(sum);
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
