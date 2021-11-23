export function firstDuplicate(a: number[]): number {
    let firsts: object = {};
    
    for (const num of a) {
      if (firsts.hasOwnProperty(num)) {
        return num;
      }
      firsts[num] = 1;
    }
    return -1;
  }
  
  console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
  console.log(firstDuplicate([2, 4, 3, 5, 1]));