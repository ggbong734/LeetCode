// 2507. Smallest Value After Replacing With Sum of Prime Factors

/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function (n) {

  let start = n;
  let sum = getSumOfPrimeFactors(start);
  while (sum < start) {
    start = sum;
    sum = getSumOfPrimeFactors(start);
  }

  return sum < n ? sum : n;

};

const getSumOfPrimeFactors = (n) => {
  // let start = Math.ceil(Math.sqrt(n));
  const arr = [];
  let carry = n;
  let divisible = true;
  while (divisible) {
    divisible = false;
    for (let i = 2; i <= Math.ceil(Math.sqrt(carry)); i++) {
      if (carry % i === 0) {
        arr.push(i);
        carry = carry / i;
        divisible = true;
        break;
      }
    }
  }
  if (carry === n) return n;  // if can't divide return original num;

  if (carry > 1) arr.push(carry);

  return arr.reduce((a, b) => a + b, 0);
}
