export function firstDigit(inputString: string): string {
  let stringedArr: any[] = inputString.split("");
  for (const char of stringedArr) {
    if (Number(char) || char === "0") {
      return char;
    }
  }
}

console.log(firstDigit("var_1__Int"));
console.log(firstDigit("q2q-q"));
console.log(firstDigit("0ss"));
