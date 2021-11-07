export function missingLetters(str: string): string {
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  let index: number = alphabet.indexOf(str[0]);

  for (let i = 0; i < str.length; i++) {
    if (alphabet[index] !== str[i]) {
      return alphabet[index];
    } else {
      index++;
    }
  }
}

console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
