const startsWithVowel = (str) => {
  var vowelRegex = "^[aieouAIEOU].*";
  return str.match(vowelRegex);
};

function pigLatin(string) {
  //translates a word beginning with a vowel
  const array = string.split(" ").map((result) => {
    while (!startsWithVowel(result)) {
      if (result.startsWith("qu")) {
        result = result.slice(2) + result.slice(0, 2);
      } else {
        result = result.slice(1) + result.slice(0, 1);
      }
    }

    return result.concat("ay");
  });

  return array.join(" ");

  //   let result = string;
}
// Do not edit below this line
module.exports = pigLatin;
