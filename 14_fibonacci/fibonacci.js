const fibonacci = function (n) {
  let count;
  if (typeof n !== "number") {
    count = parseInt(n);
  } else {
    count = n;
  }

  if (count < 0) return "OOPS";
  if (count === 1) return count;

  let preNum = 0;
  let currNum = 1;
  let fibonacci = 0;
  for (let i = 2; i <= count; i++) {
    fibonacci = preNum + currNum;
    preNum = currNum;
    currNum = fibonacci;
  }
  return fibonacci;
};

// Do not edit below this line
module.exports = fibonacci;
