export function evenDigitsOnly(n: number): boolean {
  const stringedDigits: string[] = n.toString().split("");
  let evenArray: string[] = [];

  stringedDigits.forEach((digit: string) => {
    Number(digit) % 2 === 0 ? evenArray.push(digit) : evenArray;
  });

  return evenArray.length === stringedDigits.length;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));


// could be cleaner with every(), better h.o. function
// for this than forEach()