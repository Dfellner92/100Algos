export function arrayChange(inputArray: number[]): number {
  let count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      let difference = inputArray[i] + 1 - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;
      count += difference;
    }
  }

  return count;
}

console.log(arrayChange([2, 1, 1]));


// needed help, realized this needed a standard for loop for the index and the if statement 
// for the comparison, couldn't think of how to get the difference