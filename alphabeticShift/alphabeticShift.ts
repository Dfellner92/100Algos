export function alphabeticShift(inputString: string): string {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let newStr = inputString.split("");
  for (let i = 0; i < newStr.length; i++) {
    let index = 0;
    if (newStr[i] !== "z") {
      index = alphabet.indexOf(newStr[i]) + 1;
    }
    newStr[i] = alphabet[index];
  }

  return newStr.join("");
}

console.log(alphabeticShift("crazy"));


// needed help