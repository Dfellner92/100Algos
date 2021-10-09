export function chunkyMonkey(arr: any[], size: number): any[][] {
  const chunkyArray = [];
  let count = 0;
  while (count < arr.length) {
    chunkyArray.push(arr.slice(count, (count += size)));
  }
  return chunkyArray;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));

// needed help, but had the logic almost right