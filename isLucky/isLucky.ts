export function isLucky(n: number): boolean {
  let stringedNum: string = String(n);
  let leftHalf: string = stringedNum.slice(0, stringedNum.length / 2);
  let rightHalf: string = stringedNum.slice(stringedNum.length / 2);

  let leftSum: number = 0;
  let rightSum: number = 0;

  leftHalf.split("").forEach((stringNum) => (leftSum += Number(stringNum)));
  rightHalf.split("").forEach((stringNum) => (rightSum += Number(stringNum)));

  return leftSum === rightSum;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
