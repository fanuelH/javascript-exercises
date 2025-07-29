const palindromes = function (str) {
  const alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanedString = str
    .toLowerCase()
    .split("")
    .filter((item) => alphaNumeric.includes(item))
    .join("");
  return cleanedString === cleanedString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
