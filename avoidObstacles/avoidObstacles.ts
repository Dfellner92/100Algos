export function avoidObstacles(inputArray: number[]): number {
  let inputSort: number[] = inputArray.sort((a, b) => a - b);
  let index: number = 1;

  while (index < inputSort[inputSort.length - 1]) {
    let pass = inputSort.every((num) => num % index !== 0);
    if (pass === true) {
      return index;
    } else {
      index++;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
