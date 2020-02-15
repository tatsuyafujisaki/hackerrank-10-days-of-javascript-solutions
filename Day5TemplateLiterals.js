function sides(literals, ...expressions) {
  const [a, p] = expressions;
  const sqrt = Math.sqrt(p ** 2 - 16 * a);
  return [((p - sqrt) / 4), ((p + sqrt) / 4)];
}
