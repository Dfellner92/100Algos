export function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  let longestWords = [];
  inputArray.forEach((elem) => {
    longestLength = longestLength < elem.length ? elem.length : longestLength;
  });
  inputArray.forEach((elem) => {
    if (longestLength === elem.length) {
      longestWords.push(elem);
    }
  });
  return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));


// needed a hint or two