export function alternatingSums(a: number[]): number[] {
  let sumOdd = 0;
  let sumEven = 0;
  let arr = [];
  a.forEach((num, index) => {
    if (index % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  });
  arr.push(sumEven);
  arr.push(sumOdd);
  return arr;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));


// I used a standard for loop

// LEARNED: passing an index into forEach()