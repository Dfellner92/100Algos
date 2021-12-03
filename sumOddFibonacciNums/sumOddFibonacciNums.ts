export function sumOddFibonacciNums(num: number): number {
  let num1: number = 1;
  let num2: number = 1;
  let oddSums: number = 0;

  while (num1 < num || num2 < num) {
    if (num1 % 2 !== 0) {
      oddSums += num1;
    }
    if (num2 % 2 !== 0) {
      oddSums += num2;
    }
    num1 = num1 + num2;
    num2 = num2 + num1;
  }
  return oddSums;
}

console.log(sumOddFibonacciNums(1000));
// console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
