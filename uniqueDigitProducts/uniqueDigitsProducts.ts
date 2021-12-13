export function uniqueDigitProducts(arr: number[]): number {
  const productArr: number[] = [];

  for (const num of arr) {
    if (String(num).length === 1) {
      productArr.push(num);
    } else {
      let product: number = 0;
      String(num)
        .split("")
        .reduce((a, b) => product = parseInt(a) * parseInt(b)));
      !productArr.includes(product) && productArr.push(product);
    }
  }

  return productArr.length;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
