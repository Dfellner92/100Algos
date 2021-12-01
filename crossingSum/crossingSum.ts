export function crossingSum(matrix: number[][], a: number, b: number): number {
  const rowTotal = matrix[a].reduce((a, b) => a + b);
  let columnTotal = 0;
  matrix.forEach((arr, i) => (columnTotal += arr[b]));
  return rowTotal + columnTotal - matrix[a][b];
}

console.log(
  crossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
    ],
    1,
    3
  )
);
