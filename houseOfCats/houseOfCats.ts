export function houseOfCats(legs: number): number[] {
  let peopleAmounts: number[] = [1];
  const extraCombinations: number = Math.floor(legs / 4);
  let extraLegs: number = 1;

  if (legs < 4) {
    return peopleAmounts;
  } else {
    for (let i = 0; i < extraCombinations; i++) {
      extraLegs += 2;
      peopleAmounts.push(extraLegs);
    }
    return peopleAmounts;
  }
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
