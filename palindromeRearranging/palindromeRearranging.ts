export function palindromeRearranging(inputString: string): any {
  let hashMap: object = {};
  inputString
    .split("")
    .forEach((char) =>
      !hashMap.hasOwnProperty(char)
        ? (hashMap[char] = 1)
        : (hashMap[char] = hashMap[char] + 1)
    );

  let unique = Object.values(hashMap).filter(
    (item, i, ar) => ar.indexOf(item) === i
  );

  return unique.length <= 2;
}

console.log(palindromeRearranging("aabbcc"));
