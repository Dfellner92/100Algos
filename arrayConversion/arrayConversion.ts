// export function arrayConversion(inputArray: number[]): number {
//   let summing = true;
//   let finalSum = 0;
//   let newArr = [...inputArray];
//   console.log(newArr);
//   let dumpArr = [];
//   if (summing || newArr.length === 2) {
//     for (let i = 0; i < newArr.length + 2; i++) {
//       let theTwo = newArr.slice(0, 2);
//       let sum = theTwo[0] + theTwo[1];
//       dumpArr.push(sum);
//       newArr = newArr.slice(2);
//     }
//     newArr = [...dumpArr];
//     dumpArr = [];
//     summing = false;
//   }
//   if (!summing) {
//     for (let i = 0; i < newArr.length + 2; i++) {
//       let theTwo = newArr.slice(0, 2);
//       let product = theTwo[0] * theTwo[1];
//       dumpArr.push(product);
//       newArr = newArr.slice(2);
//     }
//     newArr = [...dumpArr];
//     dumpArr = [];
//     summing;
//   }
//   newArr.forEach((num) => (finalSum += num));
//   console.log(finalSum);
//   console.log(summing);
//   return newArr[0] + newArr[1];
// }

// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

// My horrible solution, only works with current array,
// uses several loops/if elses, and

function arrayConversion(inputArray: number[]): number {
  let summing = true;
  while (inputArray.length !== 1) {
    inputArray = addNums(inputArray, summing);
    summing = !summing;
  }

  return inputArray[0];
}

function addNums(inputArray: number[], summing: boolean): number[] {
  let newArr: number[] = [];
  if (summing) {
    for (let i = 0; i < inputArray.length; i + 2) {
      newArr.push(inputArray[0] + inputArray[1]);
    }
  } else {
    for (let i = 0; i < inputArray.length; i + 2) {
      newArr.push(inputArray[0] * inputArray[1]);
    }
  }
  return newArr;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
