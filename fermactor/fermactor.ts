export function fermactor(n: number): number[] {
  let index = 1;
  while (index < n) {
    let x = n + Math.pow(index, 2);
    if (Number.isInteger(Math.sqrt(x))) {
      return [Math.sqrt(x), index];
    }
    index++;
  }
}

console.log(fermactor(15));
