function getMaxLessThanK(n, k) {
  return (n < (k + (k - 1))) ? (k - 2) : (k - 1);
}
