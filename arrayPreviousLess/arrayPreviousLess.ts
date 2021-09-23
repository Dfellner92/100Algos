export function arrayPreviousLess(items: number[]): number[] {
  let newArr = [];
  for (let i = 0; i < items.length - 1; i++) {
    if (items[i + 1] > items[i]) {
      newArr.push(items[i]);
    } else {
      newArr.push(-1);
    }
  }
  return [-1, ...newArr];
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));

// Did well on this one, similar to Dylan's