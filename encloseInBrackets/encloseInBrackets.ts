export function encloseInBrackets(inputString: string): string {
  return "(" + inputString + ")";
}

console.log(encloseInBrackets("abacaba"));

// My solve

export function encloseInBrackets2(inputString: string): string {
  return `(${inputString})`;
}

console.log(encloseInBrackets2("abacaba"));

//  ES6 solve