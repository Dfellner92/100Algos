export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let newArr = [];
  let sumsArr = [];
  for (let i = 0; i < inputArray.length; i++) {
    newArr.push(inputArray.slice(0, k));
    inputArray.shift();
  }
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j].length === k) {
      let sum = 0;
      newArr[j].forEach((num) => (sum += num));
      sumsArr.push(sum);
    }
  }
  sumsArr.sort((a, b) => b - a);
  console.log(sumsArr[0]);
  return sumsArr[0];
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
