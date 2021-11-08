export function properNounCorrection(noun: string): string {
  let lowerCaseNoun: string = noun.toLowerCase();
  let upperCaseFirst: string = lowerCaseNoun[0].toUpperCase();
  return upperCaseFirst.concat(lowerCaseNoun.slice(1));
}

console.log(properNounCorrection("pARiS"));
console.log(properNounCorrection("John"));
