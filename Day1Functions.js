function factorial(n) {
  if (n < 0) {
    throw new RangeError(`A natural number was expected but ${n} was given.`);
  }

  if (n === 0) {
    return 1;
  }

  return (n * factorial(n - 1));
}
