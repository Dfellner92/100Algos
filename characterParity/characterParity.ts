export function characterParity(symbol: string): string {
  const symbolParsed = parseInt(symbol);
  if (symbolParsed % 2 === 0) {
    return "even";
  } else if (isNaN(symbolParsed)) {
    return "not a digit";
  }
  return "odd";
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));
