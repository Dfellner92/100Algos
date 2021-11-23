export function alphabetSubsequence(s: string): boolean {
  const catalog: string[] = [
    "",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const sArray: string[] = s.split("");
  const finalIndex: number = catalog.indexOf(sArray[sArray.length - 1]);
  let index: number = 0;

  for (let i = 0; i < sArray.length; i++) {
    if (catalog.indexOf(sArray[i]) > index) {
      index = catalog.indexOf(sArray[i]);
    } else {
      return false;
    }
  }
  return index === finalIndex;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
