export function circleOfNumbers(n: number, firstNumber: number): number {
  const halvedN = n / 2;
  let i = 0;
  let firstArr = [];
  let secondArr = [];
  while (i < halvedN) {
    firstArr.push(i);
    i++;
  }
  while (i < n) {
    secondArr.push(i);
    i++;
  }
  return secondArr[firstArr.indexOf(firstNumber)];
}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(8, 2));


// clean up this solution