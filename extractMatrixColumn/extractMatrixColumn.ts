export function extractMatrixColumn(
  matrix: number[][],
  column: number
): number[] {
  let columnValues: number[] = [];

  matrix.forEach((row) => columnValues.push(row[column]));

  return columnValues;
}

console.log(
  extractMatrixColumn(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6],
    ],
    2
  )
);
