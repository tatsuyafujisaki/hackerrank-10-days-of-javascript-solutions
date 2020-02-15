function getMaxLessThanK(n, k) {
  return n < ((k - 1) | k) ? (k - 2) : (k - 1);
}
