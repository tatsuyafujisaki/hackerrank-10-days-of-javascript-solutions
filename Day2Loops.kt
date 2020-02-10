function vowelsAndConsonants(s) {
  const consonants = [];

  [...s].forEach((c) => {
    if ('aeiou'.includes(c)) {
      console.log(c);
    } else {
      consonants.push(c);
    }
  });

  consonants.forEach((c) => console.log(c));
}
