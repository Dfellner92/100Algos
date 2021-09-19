// My solution

export function addTwoDigits(n: any): number {
  let numArr = [];
  let sum = 0;
  let strArr = n.toString().split("");
  for (let i = 0; i < strArr.length; i++) {
    numArr.push(Number(strArr[i]));
  }
  for (let j = 0; j < numArr.length; j++) {
    sum += numArr[j];
  }
  return sum;
}

// Dylan's solution

export function addTwoDigits2(n: any): number {
  let nums = n.toString().split("");

  
  return nums.reduce((a: string, b: string) => {
      return parseInt(a) + parseInt(b);
  });
}

console.log(addTwoDigits(29));
