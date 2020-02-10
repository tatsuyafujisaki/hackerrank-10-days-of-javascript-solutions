function vowelsAndConsonants(s) {
  const vowels = [];
  const consonants = [];

  [...s].forEach((char) => {
    if ('aeiou'.includes(char)) {
      vowels.push(char);
    } else {
      consonants.push(char);
    }
  });

  vowels.forEach((v) => console.log(v));
  consonants.forEach((c) => console.log(c));
}
