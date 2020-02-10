function vowelsAndConsonants(s) {
  const vowels = [];
  const consonants = [];

  [...s].forEach((c) => {
    if ('aeiou'.includes(c)) {
      vowels.push(c);
    } else {
      consonants.push(c);
    }
  });

  console.log(vowels.join('\n'));
  console.log(consonants.join('\n'));
}
