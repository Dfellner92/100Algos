function adjacentElementsProduct(inputArray: number[]): number {
  let arr = [];
  inputArray.reduce((a: number, b: number) => {
    return arr.push(a * b);
  });
  arr.sort();
  return arr[arr.length - 1];
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
