const leapYears = function(year) {
    let isLeapYear;
    if (year%4==0 && (year%100!==0 || year%400==0)) {
        return isLeapYear = true;
    } else {
        return isLeapYear = false;
    }
};

// Do not edit below this line
module.exports = leapYears;
