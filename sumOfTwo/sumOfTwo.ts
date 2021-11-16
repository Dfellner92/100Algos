export function sumOfTwo(a: number[], b: number[], v: number): boolean {
  for (const num of a) {
    if (b.includes(v - num)) {
      return true;
    }
  }
  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
