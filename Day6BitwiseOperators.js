// Explanation: https://github.com/tatsuyafujisaki/hackerrank-10-days-of-javascript-solutions/blob/master/README.md
function getMaxLessThanK(n, k) {
  return ((k - 1) | k) <= n ? (k - 1) : (k - 2);
}
