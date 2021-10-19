export function integerToStringOfFixedWidth(
  number: number,
  width: number
): string {
  let numberNumber = String(number).split("");
  if (width > numberNumber.length) {
    let extraZeros = width - numberNumber.length;
    for (let i = 0; i < extraZeros; i++) {
      numberNumber.unshift("0");
    }
    return numberNumber.join("");
  } else if (width < numberNumber.length) {
    return numberNumber.slice(width).join("");
  } else {
    return numberNumber.join("");
  }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
