export function convertString(s: string, t: string): boolean {
  let splitS: string[] = s.split("");
  let splitT: string[] = t.split("");
  let index = 0;
  let hiddenWord = "";

  for (let i = 0; i < splitS.length; i++) {
    if (splitS[i] === splitT[index]) {
      hiddenWord = hiddenWord.concat(splitS[i]);
      index++;
    }
  }

  return hiddenWord === t;
}

console.log(convertString("ceoydefthf5iyg5h5yts", "codefights"));
console.log(convertString("addbyca", "abcd"));
