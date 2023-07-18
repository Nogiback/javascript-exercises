const palindromes = function (string) {
  string = string.replace(/[\.,?!\s]/g, "");

  let splitString = string.split("");

  let reverseArray = splitString.reverse();

  let newString = reverseArray.join("");

  if (newString.toLowerCase() === string.toLowerCase()) {
    return true;
  } else {
    return false;
  };

};

// Do not edit below this line
module.exports = palindromes;
