const add = function (a, b) {
  return Number(a + b);
};

const subtract = function (a, b) {
  return Number(a - b);
};

const sum = function (arr) {
  return arr.reduce((acc, item) => {
    return Number((acc += item));
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, item) => acc * item, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  let factorial = 1;
  for (let i = n; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
