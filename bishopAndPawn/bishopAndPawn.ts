export function bishopAndPawn(bishop: string, pawn: string): any {
  const Alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  const charDiff: number =
    Alphabet.indexOf(bishop[0]) - Alphabet.indexOf(pawn[0]);
  const numDiff: number = bishop[1] - pawn[1];

  return numDiff === charDiff || numDiff === -charDiff;
}

console.log(bishopAndPawn("a5", "c3"));
