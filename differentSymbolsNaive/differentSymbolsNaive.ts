export function differentSymbolsNaive(s: string): number {
  let container: string[] = [];
  let splitString = s.split("");
  for (const character of splitString) {
    if (!container.includes(character)) {
      container.push(character);
    }
  }
  return container.length;
}

console.log(differentSymbolsNaive("cabca"));


// try using sets next time, they're designed for unique values