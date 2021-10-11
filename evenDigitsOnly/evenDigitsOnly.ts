export function evenDigitsOnly(n: number): boolean {
  const stringedDigits: string[] = n.toString().split("");
  let evenArray: number[] = [];

  stringedDigits.forEach((number) => {
    Number(number) % 2 === 0 ? evenArray.push(number) : evenArray;
  });

  return evenArray.length === stringedDigits.length;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));


// could be cleaner with every(), better h.o. function
// for this than forEach()