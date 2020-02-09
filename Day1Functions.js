function factorial(n) {
  if (n < 0) {
    return new Error(`The parameter ${n} must be a natural number.`);
  }

  if (n === 0) {
    return 1;
  }

  return (n * factorial(n - 1));
}
