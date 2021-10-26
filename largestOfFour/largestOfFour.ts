export function largestOfFour(nums: number[][]): number[] {
  let largestNumbersArray: number[] = [];
  nums.forEach((arr) => {
    let largest: number = 0;
    for (const num of arr) {
      num > largest ? (largest = num) : num;
    }
    largestNumbersArray.push(largest);
  });
  return largestNumbersArray;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
);
