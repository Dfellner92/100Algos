export function seatsInTheater(
  nCols: number,
  nRows: number,
  col: number,
  row: number
): number {
  const colsToLeft: number = nCols - (col - 1);
  const rowsInFront: number = nRows - row;
  return colsToLeft * rowsInFront;
}

console.log(seatsInTheater(16, 11, 5, 3));
