export function largestNumber(n: number): any {
  let largestNumberString: string = "";
  let index: number = 0;
  while (index < n) {
    largestNumberString = largestNumberString.concat("9");
    index++;
  }
  return parseInt(largestNumberString);
}

console.log(largestNumber(4));
