export function chessBoardCellColor(cell1: string, cell2: string): any {
  const letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const numbers: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const cell1LetterIndex: number = letters.indexOf(cell1[0]);
  const cell1NumberIndex: number = numbers.indexOf(cell1[1]);
  let cell1IsBrown: boolean = isBrown(cell1LetterIndex, cell1NumberIndex);

  const cell2LetterIndex: number = letters.indexOf(cell2[0]);
  const cell2NumberIndex: number = numbers.indexOf(cell2[1]);
  let cell2IsBrown: boolean = isBrown(cell2LetterIndex, cell2NumberIndex);

  return cell1IsBrown === cell2IsBrown;
}

function isBrown(ind1: number, ind2: number): boolean {
  if ((ind1 + ind2) % 2 === 0) {
    return true;
  }
}

console.log(chessBoardCellColor("A1", "C3"));
console.log(chessBoardCellColor("A1", "H3"));

// Much better way 

export function chessBoardCellColor2(cell1: string, cell2: string): any {
  const board: object = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8 };

  const total1 = (board[cell1[0]] + parseInt(cell1[1])) % 2;
  const total2 = (board[cell2[0]] + parseInt(cell2[1])) % 2;

  return total1 === total2;
}

console.log(chessBoardCellColor2("A1", "C3"));
console.log(chessBoardCellColor2("A1", "H3"));
