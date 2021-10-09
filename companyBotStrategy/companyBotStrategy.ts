function companyBotStrategy(trainingData: number[][]): number {
  let trainerTotals = 0;
  let dividend = trainingData.length;
  for (const trainerData of trainingData) {
    trainerData[1] === 1 ? (trainerTotals += trainerData[0]) : dividend--;
  }
  return isNaN(trainerTotals / dividend) ? 0 : trainerTotals / dividend;
}

console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1],
  ])
);
console.log(
  companyBotStrategy([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1],
  ])
);
console.log(
  companyBotStrategy([
    [4, -1],
    [0, 0],
    [5, -1],
  ])
);
