function isOdd (num) {
  ans = num % 2 === 0 ? false : true;
  return ans;
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));