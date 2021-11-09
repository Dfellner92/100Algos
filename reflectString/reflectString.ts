export function reflectString(inputString: string): string {
  const firstHalf: string = "abcdefghijklm";
  const secondHalf: string = "zyxwvutsrqpon";
  const inputStringArr: string[] = inputString.split("");
  let mirroredArray: string[] = [];

  inputStringArr.forEach((letter) => {
    if (firstHalf.includes(letter)) {
      let index: number = firstHalf.indexOf(letter);

      mirroredArray.push(secondHalf[index]);
    } else {
      let index: number = secondHalf.indexOf(letter);

      mirroredArray.push(firstHalf[index]);
    }
  });
  return mirroredArray.join("");
}

console.log(reflectString("name"));
