export function sumAllPrimes(num: number): number {
  let index = 0;
  for (let i = 1; i <= num; i++) {
    let ind = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        ind++;
      }
    }
    if (ind === 2) {
      index += i;
    }
  }
  return index;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
