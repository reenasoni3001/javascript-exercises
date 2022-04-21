const caesar = function (string, shift) {
  shift %= 26;

  let result = "";

  for (let i = 0; i < string.length; i++) {
    let uniCodeValue = string.charCodeAt(i);
    if (uniCodeValue >= 65 && uniCodeValue <= 90) {
      uniCodeValue += shift;
      if (uniCodeValue > 90) {
        uniCodeValue -= 26;
      } else if (uniCodeValue < 65) {
        uniCodeValue += 26;
      }
    }

    if (uniCodeValue >= 97 && uniCodeValue <= 122) {
      uniCodeValue += shift;
      if (uniCodeValue > 122) {
        uniCodeValue -= 26;
      } else if (uniCodeValue < 97) {
        uniCodeValue += 26;
      }
    }

    result += String.fromCharCode(uniCodeValue);
    console.log(result);
  }
  return result;
};

// Do not edit below this line
module.exports = caesar;
