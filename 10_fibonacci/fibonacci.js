const fiboHelper = (value) => {
  if (value <= 2) {
    return 1;
  }

  return fiboHelper(value - 1) + fiboHelper(value - 2);
};

const fibonacci = function (value) {
  if (value < 0) {
    return "OOPS";
  }

  value = typeof value === "string" ? parseInt(value) : value;

  if (value === 1) {
    return value;
  }

  //   let n1 = 0;
  //   let n2 = 1;
  //   let newterm;
  //   for (let i = 1; i < value; i++) {
  //     newterm = n1 + n2; //1, 2,
  //     n1 = n2;
  //     n2 = newterm;
  //   }
  //   return newterm;

  return fiboHelper(value);
};

// Do not edit below this line
module.exports = fibonacci;
