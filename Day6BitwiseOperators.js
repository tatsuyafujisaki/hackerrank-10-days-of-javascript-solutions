// Explanation: https://github.com/tatsuyafujisaki/hackerrank-10-days-of-javascript-solutions/blob/master/README.md
function getMaxLessThanK(n, k) {
  return n < ((k - 1) | k) ? (k - 2) : (k - 1);
}
