export function factorializeANumber(num: number): number {
  let product: number = 1;

  for (let i = 1; i <= num; i++) {
    product *= i;
  }

  return product;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
