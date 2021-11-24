export function ratingThreshold(
  threshold: number,
  ratings: number[][]
): number[] {
  let ratingsMap: object = {};

  for (let i = 0; i < ratings.length; i++) {
    let sum: number = 0;

    ratings[i].forEach((num) => (sum += num));
    let average = sum / ratings[i].length;
    ratingsMap[i] = average;
  }
  for (const stringNum in ratingsMap) {
    if (ratingsMap[stringNum] >= threshold) {
      return [parseInt(stringNum) + 1];
    }
  }
}

console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]]));
