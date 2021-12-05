export function flattenArray(arr: any[]): any[] {
  let flattenedArray: any[] = [];

  flatten(arr);

  function flatten(arr: any[]) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        flattenedArray.push(element);
      }
    });
  }
  return flattenedArray;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
