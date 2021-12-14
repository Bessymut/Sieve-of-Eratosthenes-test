let gcd = (first, second) => {
  while (first !== second) {
    if (first > second) {
      first -= second;
    } else {
      second -= first;
    }
  }
  return first;
};

let leastCommonMultiple = (first, second) => {
  return (first * second) / gcd(first, second);
};

console.log(leastCommonMultiple(1, 6));