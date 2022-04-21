const palindromes = function (string) {
  const withoutPunct = string.replace(/\W/g, "");
  const withoutSpace = withoutPunct.replaceAll(" ", "");
  const toLowerCase = withoutSpace.toLowerCase();
  const result = toLowerCase.split("");
  const reverse = result.reverse().join("");

  return reverse === toLowerCase;
};

// Do not edit below this line
module.exports = palindromes;
