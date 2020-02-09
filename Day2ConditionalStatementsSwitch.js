function getLetter(s) {
  const c = s[0];
  switch (true) {
    case 'aeiou'.includes(c):
      return 'A';
    case 'bcdfg'.includes(c):
      return 'B';
    case 'hjklm'.includes(c):
      return 'C';
    case 'npqrstuvwxyz'.includes(c):
      return 'D';
    default:
      return new RangeError(`${c} is out of range.`);
  }
}
