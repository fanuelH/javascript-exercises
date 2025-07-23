const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  )
    return "ERROR";
  let total = 0;
  if (num1 > num2) {
    for (let i = num2; num1 >= i; i++) {
      total += i;
    }
  } else {
    for (let i = num1; num2 >= i; i++) {
      total += i;
    }
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
