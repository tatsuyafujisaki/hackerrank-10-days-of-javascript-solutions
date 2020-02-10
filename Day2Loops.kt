function vowelsAndConsonants(s) {
  const vowels = [];
  const consonants = [];

  [...s].forEach(c => {
    if ('aeiou'.includes(c)) {
      vowels.push(c);
    } else {
      consonants.push(c);
    }
  });

  vowels.map(c => console.log(c));
  consonants.map(c => console.log(c));
}
