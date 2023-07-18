const fibonacci = function(num) {
  let a = 0;
  let b = 1;
  let fib;

  num = parseInt(num);

  if (num < 0) {
    return "OOPS";
  } else if (num === 1) {
    return 1;
  } else {
    for (let i = 1; i < num; i++) {
      fib = a + b;
      a = b;
      b = fib;
    };
    return fib;
  };
};

// Do not edit below this line
module.exports = fibonacci;
