export function encloseInBrackets(inputString: string): string {
  return "(" + inputString + ")";
}

console.log(encloseInBrackets("abacaba"));

// My solve

export function encloseInBrackets(inputString: string): string {
  return `(${inputString})`;
}

console.log(encloseInBrackets("abacaba"));

//  ES6 solve