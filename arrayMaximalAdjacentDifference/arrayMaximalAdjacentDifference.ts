export function arrayMaximalAdjacentDifference(arr: number[]): number {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i] - arr[i + 1];
    num = Math.abs(diff) > num ? Math.abs(diff) : num;
  }
  return num;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
