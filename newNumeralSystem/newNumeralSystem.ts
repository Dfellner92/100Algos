export function newNumeralSystem(number: string): string[] {
  const alphabet: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let arr = [];

  let indEnd = alphabet.indexOf(number);
  let indBeg = 0;

  while (indEnd > indBeg - 1 || indEnd > indBeg + 1) {
    arr.push(`${alphabet[indBeg]} + ${alphabet[indEnd]}`);
    indEnd--;
    indBeg++;
  }
  return arr;
}

console.log(newNumeralSystem("G"));
