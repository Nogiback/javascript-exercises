const reverseString = function(string) {
    let splitString = string.split("");

    let reverseArray = splitString.reverse();

    let joinString = reverseArray.join("");

    return joinString;

};

// Do not edit below this line
module.exports = reverseString;
