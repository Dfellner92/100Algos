export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  let newArr = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      newArr.push(substitutionElem);
    } else {
      newArr.push(inputArray[i]);
    }
  }
  return newArr;
}

// my solution

export function arrayReplace2(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  inputArray.forEach((elem, index) => {
    if (elem === elemToReplace) {
      inputArray[index] = substitutionElem;
    }
  });
  return inputArray;
}

// Dylan's solution

// things to work on: try not to create new Arr,
// and try foreach more

// console.log(arrayReplace([1, 2, 1], 1, 3));
