export function addBorder(picture: string[]): string[] {
  let top = picture.length + 2;
  let wall = "";
  let finalArr = [];
  console.log(arr);
  for (let i = 0; i < top + 1; i++) {
    wall = wall.concat("*");
  }
  for (let j = 0; j < arr.length; j++) {
    finalArr.push("*" + arr[j] + "*");
  }
  finalArr.push(wall);
  finalArr.unshift(wall);
  return finalArr;
}

console.log(addBorder(["abc", "ded"]));
