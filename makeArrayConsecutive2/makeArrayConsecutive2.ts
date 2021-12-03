export function makeArrayConsecutive2(statues: number[]): number {
  let index: number = 0;
  const sortedStatues: number[] = statues.sort((a, b) => a - b).reverse();

  for (let i = 0; i < sortedStatues.length - 1; i++) {
    index += sortedStatues[i] - sortedStatues[i + 1] - 1;
  }
  return index;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
