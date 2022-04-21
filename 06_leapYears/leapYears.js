const leapYears = function (leapYear) {
  if (leapYear % 100 === 0 && leapYear % 400 != 0) {
    //1900
    return false;
  }
  if (leapYear % 4 === 0) {
    return true;
  }
  if (leapYear % 400 != 0 && leapYear % 4 == 0) {
    return false;
  }
  if (leapYear % 100 === 0) {
    return false;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;

//non century years y%4 ==0 but y%400 !=0
// divisible by 4
//divisible by 400
//not divisible by 100 but divisible by 400
//century years divisible by 100 but
