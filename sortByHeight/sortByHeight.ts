export function sortByHeight(a: number[]): number[] {
  let treeArray: number[] = [];
  let newArr = [];

  a.forEach((height) => height > -1 && treeArray.push(height));
  treeArray.sort();

  a.forEach((height) => {
    if (height > -1) {
      newArr.push(treeArray[0]);
      treeArray.shift();
    } else {
      newArr.push(-1);
    }
  });
  return newArr;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
