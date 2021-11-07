export function longestDigitsPrefix(inputString: string): string {
  let prefixDigits: string = "";
  let inputStringArr: string[] = inputString.split("");

  for (let i = 0; i < inputStringArr.length; i++) {
    if (Number.isInteger(parseInt(inputStringArr[i]))) {
      prefixDigits = prefixDigits.concat(inputStringArr[i]);
    } else {
      return prefixDigits;
    }
  }
}

console.log(longestDigitsPrefix("123aa1"));
